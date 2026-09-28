# Fintech Roadmap 2 — Engineering Execution Plan

**Companion to:** `FINTECH_ROADMAP.md` (strategy, licensing, business model).
**This document:** how to shift *this codebase* into a fintech app — concrete
workstreams, files, steps, and acceptance gates. Strategy says *what and why*;
this says *how and in what order*.

---

## 1. Where the app stands today (verified assets)

Everything below already exists and works — these are the raw materials:

| Asset | Where | Why it matters for fintech |
|---|---|---|
| Multi-collection data scoping | `DocumentCollectionService`, `collection_id` on all rows | Natural per-legal-entity partitioning (SME = one collection) |
| Finance ledger (single-entry) | `lib/models/finance.dart` (`FinanceKind`, `FinanceCategory`), `FinanceService`, `supabase/finance_schema.sql` | Seed of the future double-entry ledger |
| Document renewal amounts | `renewalFee` on `ExpiryItem`, `markAsRenewed()` logs a finance transaction | The document→payment link already exists; it just isn't a *pay* yet |
| DOB capture + age gate | Signup step 2, `auth metadata.date_of_birth`, `user_tiers.date_of_birth` (trigger) | KYC readiness — the regulated onboarding field is already collected |
| Tier/entitlement system | `EntitlementService`, `TierInfo`, quotas (10 docs Free, AI quotas) | Payments will hang off the same tiering |
| Self-service deletion | `delete_own_account()` RPC + cascade, 30-day promise | PDPL/Play compliance already cleared |
| Server posture | Supabase (Postgres + RLS + Edge-capable), RPCs in `supabase/*.sql` | Edge Functions are the money-logic home, one deploy away |
| AI layer | Groq service w/ server-style quota counters (`ai_quota_schema.sql`) | Underwriting/insights can reuse this pipeline |
| Friendly error layer | `lib/utils/error_messages.dart` + tests | Payment failures need the same UX discipline |

**What is missing for fintech** (each maps to a workstream below): server-
authoritative money logic, double-entry ledger, payment provider integration,
KYC flow, consent tracking, webhooks/idempotency, feature flags.

---

## 2. The core architectural shift

**From:** client-trusted app — Flutter computes amounts, writes straight to
Supabase, friendly UI on top.

**To:** server-authoritative — the client *requests*, the server *decides*:

```
Flutter (UI only)
   │  intent: "pay renewal for doc X"
   ▼
Supabase Edge Function (auth via JWT, rate-limited, idempotent)
   │  validates amount server-side against document + price table
   │  writes to double-entry ledger
   ▼
PSP / partner APIs (Checkout.com, Tabby, broker…)
   │  tokens only — never PANs, never client-side pricing
   ▼
Webhooks → Edge Function → ledger state machine (pending → paid → failed)
```

Rule that governs every workstream: **the client can never tell the server an
amount.** If a Flowtap-free audit can't answer "who set this price?", the
design is wrong.

---

## 3. Workstreams (order matters)

### WS-0 — Money-safe foundations (now, no licence needed)
*Goal: retrofitting later costs 10× more than doing this while money doesn't flow yet.*

1. **Double-entry ledger schema** — new `supabase/ledger_schema.sql`:
   `transactions` (immutable, with `idempotency_key unique`, `status`,
   `provider`, `provider_ref`) + `ledger_entries` (account, direction, amount).
   Migrate `FinanceTransaction` to *write through* to it (keep the Flutter
   model as a read view; stop making it authoritative).
2. **Consent ledger** — `consents (owner_id, scope, policy_version,
   granted_at, revoked_at)`. Record the PDPL policy version each user accepted
   (wire into signup + settings). This is the legal backbone for credit scoring.
3. **Enrich documents with payment fields** — `amount_due`, `last_paid_at`,
   `auto_pay_enabled` on expiry items (SQL migration + `ExpiryItem` fields).
   No UI yet; the data accrues from day one.
4. **Feature flags** — `feature_flags (owner_id, flag, enabled)` table +
   tiny client service. Every paid feature launches behind one.
5. **Audit log** — append-only `audit_log (actor, action, entity, payload,
   at)`; write from Postgres triggers on money-adjacent tables.

**Gate 0:** ledger exists behind zero UI; `FinanceService` writes are mirrored
into it; a psql session can reconstruct any user's balance from
`ledger_entries` alone.

### WS-1 — Server-authoritative core (still no licence)
1. Move pricing/fee computation into an Edge Function (`fees-quote`): client
   sends `document_id`, server returns the amount from a `price_table`.
2. Move AI quota enforcement fully server-side (counters exist; enforce in RPC,
   not `EntitlementService` on-device).
3. Add idempotency middleware to every mutating Edge Function.
4. Lock down RLS review: money tables should have **no direct client writes**
   (RLS deny-all insert/update; only service-role via functions).

**Gate 1:** an attacker with the app binary cannot create a transaction with a
self-chosen amount. Prove it with an integration test.

### WS-2 — KYC onboarding (uses what we already collect)
1. Adopt a KYC vendor SDK (IDWise / Focal / Shufti Pro — see v1 §regulatory).
2. Insert a "verify to pay" step **before the first payment**, not before the
   whole app — tracking stays frictionless.
3. Map results into `user_tiers` (`kyc_status`); the DOB column already there
   becomes the first field the vendor validates instead of dead data.
4. goAML registration for the entity before going live.

**Gate 2:** a new user can track everything free; the only wall they hit is
"verify identity" on first pay.

### WS-3 — Embedded payments (first regulated-adjacent revenue)
Follows Phase 1 of v1. Engineering steps:
1. PSP sandbox (start with two: e.g. Checkout.com + Telr/Amazon PS).
2. `payments` Edge Function flow: `create-intent` → PSP checkout SDK in app →
   `webhook` handler (verify signature, idempotent) → ledger `pending→paid`.
3. "Renew now" button on document detail → quote → pay → receipt PDF attached
   to the document → `markAsRenewed()` triggered by webhook, not by client.
4. Apple Pay / Google Pay via PSP SDK first (highest UAE conversion).
5. Auto-pay toggle per document (14 days before expiry) — the retention feature.
6. BNPL (Tabby/Tamara) for large renewals — same flow, different PSP.

**Gate 3:** E2E sandbox test — renew a licence in-app, webhook flips status,
ledger shows both sides, receipt attached, zero card data in the app.

### WS-4 — Wallet / set-aside (custody via partner, per v1 licensing)
1. Phase A: goal-tracking only — "saved towards renewal" (no custody, no licence).
2. Phase B: partner-bank escrow → real balances; ledger gains user accounts.
3. Auto-pay funding rules draw from wallet first.

### WS-5 — Credit & insurance rails
1. Build consented `renewal_payment_history` features (on-time rate, tenure,
   revenue signals) — pure SQL views over the ledger.
2. Score → offer API with a licensed lender partner (revenue share).
3. Embedded insurance via broker API at renewal moments.

### WS-6 — Open finance (Circular 03/2025 framework)
1. Bank aggregation when the framework's TPP licensing is accessible — turns
   manual tracking automatic; the biggest moat move. Design `consents` for it
   now (WS-0).

---

## 4. Process — how to run the shift

1. **One workstream at a time; each ends at its gate.** No phase starts before
   the previous gate passes — this is what keeps a tiny team from shipping an
   unauditable money app.
2. **Quarterly regulator check-in:** one consult with a UAE fintech lawyer per
   phase boundary (facilitation model → KYC → custody questions). Cheap vs a
   CBUAE finding.
3. **Every money schema change ships as** `supabase/<name>_schema.sql` +
   rollback note + integration test (match the repo's existing SQL-migration
   pattern).
4. **Feature flags on everything paid;** default-off, cohort rollouts.
5. **Security review before WS-3:** RLS matrix, webhook signature handling,
   idempotency tests, no-PAN-in-logs sweep (the friendly-error layer already
   keeps exception text out of UI — extend tests to keep card data out too).
6. **Track the funnel from day one:** which document types users renew (or
   would renew) in-app — that order is the payment-vertical roadmap.

## 5. Timeline (indicative, solo + contractors)

| Quarter | Workstream | Milestone |
|---|---|---|
| Q1 | WS-0 + WS-1 | Ledger live behind FinanceService; server-authoritative quotes |
| Q2 | WS-2 + WS-3 start | KYC flow live; first PSP sandbox "renew now" |
| Q3 | WS-3 | Production payments on top-3 document types; auto-pay beta |
| Q4 | WS-4 Phase A | Set-aside goals; lawyer consult on custody |
| Y2 | WS-4B → WS-6 | Escrow wallet → credit rails → open finance |

## 6. Top risks

| Risk | Mitigation |
|---|---|
| Building payments nobody uses | WS-0 funnel instrumentation; user surveys before WS-3 |
| Regulatory overreach (custody/lending without licence) | Partner-first rule; per-phase legal review |
| Ledger divergence from app finance data | Write-through mirror in WS-0; reconciliation job |
| Webhook replay/fraud | Signature verify + idempotency keys + ledger state machine |
| Single-dev bus factor on money code | Gates + tests are the documentation; keep SQL in-repo |

---

**Rule of thumb for every PR in this transition:** if it moves money, the
server decides; if it touches consent, it's append-only; if it can be retried,
it has an idempotency key.

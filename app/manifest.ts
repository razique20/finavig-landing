import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Finavig — GCC Budgeting & Document Expiry Tracker",
    short_name: "Finavig",
    description: "Every renewal. Every dirham. One dashboard. AI-powered budgeting & document expiry tracking across the GCC.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#4F46E5",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

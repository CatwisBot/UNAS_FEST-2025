import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UNASFEST 2025 — Universitas Nasional",
    short_name: "UNASFEST 2025",
    description:
      "UNAS FEST 2025 is a spectacular festival organized by the students of Universitas Nasional, Jakarta.",
    start_url: "/",
    display: "standalone",
    background_color: "#000138",
    theme_color: "#3A175D",
    orientation: "portrait-primary",
    categories: ["education", "events", "entertainment"],
    lang: "id",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

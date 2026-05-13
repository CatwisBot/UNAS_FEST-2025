import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Audio from "@/components/shared/Audio";
import { JsonLd } from "@/components/shared/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL("https://unasfest.com"),
  title: {
    default: "UNASFEST 2025 | Universitas Nasional",
    template: "%s | UNASFEST 2025",
  },
  description:
    "UNAS FEST 2025 is a spectacular festival organized by the students of Universitas Nasional, Jakarta. Celebrate culture, creativity, and community with us.",
  keywords: [
    "UNAS",
    "UNASFEST",
    "UNAS FEST 2025",
    "Universitas Nasional",
    "Festival",
    "Jakarta",
    "Student Festival",
    "Culture",
    "Creativity",
  ],
  authors: [{ name: "Universitas Nasional Students" }],
  creator: "UNASFEST Committee",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://unasfest.com",
    title: "UNASFEST 2025 | Universitas Nasional",
    description:
      "UNAS FEST 2025 is a spectacular festival organized by the students of Universitas Nasional, Jakarta. Celebrate culture, creativity, and community with us.",
    siteName: "UNASFEST 2025",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UNASFEST 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNASFEST 2025 | Universitas Nasional",
    description:
      "UNAS FEST 2025 is a spectacular festival organized by the students of Universitas Nasional, Jakarta. Celebrate culture, creativity, and community with us.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: 'https://unasfest.com',
  },
  category: 'education',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-poppins text-white overflow-x-hidden`}>
        <JsonLd />
        <div id="root-layout">
          <Navbar />
          <Audio />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}

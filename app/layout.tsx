import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Audio from "@/components/shared/Audio";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "optional",
  weight: ["300", "400", "500", "600", "700", "800"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "UNASFEST 2025",
  description:
    "UNAS FEST 2025 - Unas Fest is a festival organized by the students of Universitas Nasional, Jakarta, Indonesia. It is a celebration of culture, creativity, and community.",
  icons: "./favicon.ico",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins text-white overflow-x-hidden`}>
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

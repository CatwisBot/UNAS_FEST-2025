import type { Metadata } from "next";
import Hero from "@/components/shared/About/Hero";
import VM from "@/components/shared/About/VM";
import MainCommitte from "@/components/shared/About/Committee";
import LogoSection from "@/components/shared/About/Logo";
import LogoDetail from "@/components/shared/About/Detail";
import OurMascot from "@/components/shared/About/Mascot";
import Visionary from "@/components/shared/About/Visionaries";
import PastMascots from "@/components/shared/About/Past";
import Yearbook from  "@/components/shared/About/YB";

export const metadata: Metadata = {
  title: "About UNASFEST 2025",
  description:
    "Learn about UNAS FEST 2025 — the vision, mission, logo, mascot, committee, and visionary leaders behind the biggest student festival of Universitas Nasional, Jakarta.",
  alternates: {
    canonical: "https://unasfest.com/about",
  },
  openGraph: {
    title: "About UNASFEST 2025 | Universitas Nasional",
    description:
      "Discover the story behind UNAS FEST 2025. Meet the committee, explore our mascot, and learn about our vision for this spectacular student festival.",
    url: "https://unasfest.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <VM />
      <Yearbook/>
      <LogoSection />
      <LogoDetail />
      <OurMascot />
      <MainCommitte />
      <PastMascots /> 
      <Visionary />
    </main>
  );
}
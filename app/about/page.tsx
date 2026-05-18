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
import Script from "next/script";
import { COMMITTEE_MEMBERS } from "@/constants/About/About";
import { Mascot, Web, Music } from "@/constants/About/Visionaries";

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
  // Flattening all members into a single array for JSON-LD SEO
  const committeeMembers = Object.values(COMMITTEE_MEMBERS).flat();
  const visionaryMembers = [...Mascot, ...Web, ...Music];
  
  const allMembers = [
    ...committeeMembers.map(m => ({ name: m.name, role: m.role, description: m.description, instagram: m.instagram })),
    ...visionaryMembers.map(m => ({ name: m.name, role: m.role, description: "", instagram: "" }))
  ];
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UNAS FEST 2025 Committee & Visionaries",
    url: "https://unasfest.com/about",
    member: allMembers.map((member) => {
      return {
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        ...(member.description ? { description: member.description } : {}),
        ...(member.instagram ? { sameAs: member.instagram } : {})
      };
    })
  };

  return (
    <main>
      <Script
        id="committee-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
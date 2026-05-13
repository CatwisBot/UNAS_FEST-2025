import type { Metadata } from "next";
import Hero from "@/components/shared/Partnership/Hero";
import Join from "@/components/shared/Partnership/Join";
import Sponsor from "@/components/shared/Partnership/Sponsor";
import CollaboratorCard from "@/components/shared/Partnership/Collaborator";
import MediaCard from "@/components/shared/Partnership/Media";
import React from "react";

export const metadata: Metadata = {
  title: "Partnership & Sponsors",
  description:
    "Explore partnership opportunities with UNAS FEST 2025. Meet our sponsors, collaborators, and media partners supporting the biggest student festival of Universitas Nasional.",
  alternates: {
    canonical: "https://unasfest.com/partnership",
  },
  openGraph: {
    title: "Partnership & Sponsors | UNASFEST 2025",
    description:
      "Become a partner of UNAS FEST 2025. View our sponsors, collaborators, and media partners.",
    url: "https://unasfest.com/partnership",
  },
};

export default function PartnerPage () {
    return (
        <main>
            
            <Hero />
            <Sponsor />
            <CollaboratorCard />
            <MediaCard />
            <Join />
            
        </main>
    )
}
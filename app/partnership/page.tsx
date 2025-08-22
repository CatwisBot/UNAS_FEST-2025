import Hero from "@/components/shared/Partnership/Hero";
import Join from "@/components/shared/Partnership/Join";
import Sponsor from "@/components/shared/Partnership/Sponsor";
import CollaboratorCard from "@/components/shared/Partnership/Collaborator";
import MediaCard from "@/components/shared/Partnership/Media";
import React from "react";

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
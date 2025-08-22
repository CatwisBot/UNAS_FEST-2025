import Image from "next/image";
import React from "react";
import { SponsorData } from "@/lib/types/Partnership/Sponsor";

export default function SponsorCard({ media }: { media: SponsorData }) {
    return (
        <div className="flex flex-col items-center  
            bg-white/10 backdrop-blur-md border border-[#474242] 
            rounded-2xl shadow-lg p-4"
        >
            <Image
                src={media.image}
                alt={media.description}
                width={200}
                height={200}
                className="rounded-lg"
            />
        </div>
    );
}
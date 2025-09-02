import Image from "next/image";
import React from "react";
import { SponsorData } from "@/lib/types/Partnership/Sponsor";

export default function SponsorCard({ sponsor }: { sponsor: SponsorData }) {
  return (
    <div
      className="flex flex-col items-center justify-center
            w-64 h-64
            bg-white/10 backdrop-blur-md border border-[#474242] 
            rounded-2xl shadow-lg p-4"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={sponsor.image}
          alt={sponsor.description}
          fill
          className="rounded-lg object-contain p-2"
        />
      </div>
    </div>
  );
}

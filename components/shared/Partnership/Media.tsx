"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Media from "@/public/icons/Partnership/Media.png";
import MediaCard from "@/components/ui/MediaCard";
import { MediaData } from "@/constants/Partnership/Media";

export default function Sponsor() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerScrollerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="bg-[#0A0B30]">
      <div className="flex flex-row gap-4 items-center justify-center text-white pb-3 pt-10">
        <Image src={Media} alt="Person" width={30} height={30} />
        <h2 className="uppercase text-sm sm:text-3xl font-bold">
          Media Partner
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden group max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto pb-6"
      >
        <div
          className="flex animate-loop-scroll-reverse group-hover:[animation-play-state:paused] gap-2 px-1 sm:px-2"
        >
          {[...MediaData, ...MediaData].map((media, idx) => (
            <div
              key={idx}
              className="min-w-[200px] flex-shrink-0 hover:scale-110 transition-transform duration-300"
            >
              <MediaCard media={media} />
            </div>
          ))}
        </div>
      </div>

      {isMounted && (
        <style jsx global>{`
          @keyframes loop-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-loop-scroll {
            display: flex;
            animation: loop-scroll 30s linear infinite;
            width: max-content;
          }

          .animate-loop-scroll:hover {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-loop-scroll {
              animation: none;
              overflow-x: auto;
              padding-bottom: 1rem;
            }

            .animate-loop-scroll::-webkit-scrollbar {
              height: 6px;
            }

            .animate-loop-scroll::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
            }

            .animate-loop-scroll::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.3);
              border-radius: 10px;
            }
          }
        `}</style>
      )}
    </main>
  );
}

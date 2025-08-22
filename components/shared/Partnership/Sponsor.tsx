"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Medal from "@/public/icons/Partnership/Medal.png";
import SponsorCard from "@/components/ui/SponsorCard";
import { sponsorsData } from "@/constants/Partnership/Sponsor";

export default function Sponsor() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerScrollerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    return () => {
      if (innerScrollerRef.current) {
        const elements = innerScrollerRef.current.querySelectorAll('[data-duplicated="true"]');
        elements.forEach(el => el.remove());
      }
    };
  }, []);

  const addAnimation = () => {
    if (!innerScrollerRef.current) return;
    
    const scrollerInner = innerScrollerRef.current;
    
    const duplicates = scrollerInner.querySelectorAll('[data-duplicated="true"]');
    duplicates.forEach(el => el.remove());
    
    sponsorsData.forEach((sponsor, idx) => {
      const duplicatedItem = (
        <div key={`duplicate-${idx}`} className="min-w-[250px] flex-shrink-0" data-duplicated="true">
          <SponsorCard sponsor={sponsor} />
        </div>
      );
      
      const tempDiv = document.createElement('div');

      const originalItems = scrollerInner.querySelectorAll('.min-w-\\[250px\\]');
      if (originalItems[idx]) {
        const duplicatedNode = originalItems[idx].cloneNode(true) as HTMLElement;
        duplicatedNode.setAttribute('data-duplicated', 'true');
        duplicatedNode.setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(duplicatedNode);
      }
    });
  };

  return (
    <main className="bg-gradient-to-b from-[#010E80] via-[#010E82] to-[#030D6C] relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0A0B30] to-transparent z-10"></div>
      
      <div id="SeeSponsor" className="flex flex-row gap-4 items-center justify-center text-white pb-10 pt-20 relative z-20">
        <Image src={Medal} alt="Medal" width={30} height={30} />
        <h2 className="uppercase text-2xl sm:text-4xl font-bold">sponsor</h2>
      </div>

      <div ref={scrollerRef} className="relative w-full overflow-hidden group max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto py-6 z-20">
        <div 
          ref={innerScrollerRef} 
          className="flex animate-loop-scroll-reverse group-hover:[animation-play-state:paused] gap-6 px-4 sm:px-8"
        >
          {sponsorsData.map((sponsor, idx) => (
            <div key={idx} className="min-w-[250px] flex-shrink-0 hover:scale-110 transition-transform duration-300">
              <SponsorCard sponsor={sponsor} />
            </div>
          ))}
        </div>
      </div>

      {isMounted && (
        <style jsx global>{`
          @keyframes loop-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 2)); }
          }
          
          .animate-loop-scroll {
            display: flex;
            animation: loop-scroll 25s linear infinite;
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
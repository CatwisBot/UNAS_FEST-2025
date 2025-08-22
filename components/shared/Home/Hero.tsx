"use client";

import Image from "next/image";
import Link from "next/link";
import Mascot from "@/public/icons/Mascot/Mascot.png";
import { featureHero } from "@/constants/Home/Hero";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    content.innerHTML += content.innerHTML;

    let scrollPosition = 0;
    const speed = 1;

    const animate = () => {
      scrollPosition += speed;

      if (scrollPosition >= content.scrollWidth / 2) {
        scrollPosition = 0;
        container.scrollLeft = scrollPosition;
      } else {
        container.scrollLeft = scrollPosition;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const renderFeatureCards = () => {
    if (!featureHero || !Array.isArray(featureHero)) return null;

    return featureHero.map((item, index) => {
      if (!item || typeof item !== "object") return null;

      return (
        <div
          key={`feature-${index}`}
          className="inline-flex flex-col items-center justify-center w-[140px] sm:w-[160px] md:w-[200px] h-[100px] sm:h-[140px] md:h-auto bg-[#6D479E] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl text-center mx-1 sm:mx-2"
        >
          {item.image && (
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-1 sm:mb-2 md:mb-3 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title || `Feature ${index}`}
                width={40}
                height={40}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
          <h3 className="text-xs sm:text-sm md:text-base font-semibold line-clamp-2">
            {item.title || "Untitled Feature"}
          </h3>
          {item.detail && (
            <p className="text-[10px] sm:text-xs text-gray-200 line-clamp-2">
              {item.detail}
            </p>
          )}
        </div>
      );
    });
  };

  return (
    <main className="bg-[#000138]">
      <div className="bg-[#000138] text-white flex items-center justify-center max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-5 md:mb-10">
          <div className="order-1 lg:order-2 flex flex-col items-center justify-start gap-2 -mt-15 sm:-mt-30 lg:mt-0 xl:-mt-30">
            <Image src={Mascot} alt="Mascot" className="w-200 sm:w-160 h-auto" />

            <div
              ref={containerRef}
              className="w-full overflow-x-hidden whitespace-nowrap -mt-10 sm:-mt-20 scrollbar-hide"
            >
              <div ref={contentRef} className="inline-flex gap-1">
                {renderFeatureCards()}
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <span className="bg-[#8E5CBD]/77 text-white text-sm px-4 py-1 rounded-full w-fit mb-4">
              76th Anniversary Celebration
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight max-[350px]:text-center sm:text-left">
              SIGN UP NOW FOR <br />
              THE <span className="bg-gradient-to-r from-[#A14CF3] from-[38%] to-[#345CEB] to-[100%] bg-clip-text text-transparent">COMPETITION</span>
            </h1>
            <p className="text-white mt-6 text-md sm:text-lg leading-relaxed">
              The Universitas Nasional Festival 2025 (UNAS FEST 2025) is one of
              the annual events held to commemorate and celebrate the 76th
              anniversary of Dies Natalis Universitas Nasional.
            </p>
            <Link href="#competition" className="scroll-smooth">
            <button className="mt-8 cursor-pointer bg-white text-[#973BEB] font-semibold px-6 py-3 rounded-xl shadow-lg w-fit hover:bg-[#973BEB] hover:text-white transition">
              Explore Event →
            </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

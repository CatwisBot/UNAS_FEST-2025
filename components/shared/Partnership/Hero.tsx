"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Space from "@/public/image/Partnership/Space.png";
import Rectangle from "@/public/image/Partnership/Rectangle.png";

const PartnershipSection: React.FC = () => {
  return (
    <main className="relative min-h-[80dvw] sm:min-h-[60dvw] overflow-hidden bg-[#0A0B30]">
      <div className="absolute inset-0 z-0">
        <Image
          src={Space}
          alt="Space background"
          fill
          className="object-cover object-top"
          priority
          quality={100}
          style={{ objectPosition: "top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B30] via-transparent to-transparent"></div>
      </div>

      <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto text-white p-10 pt-10 sm:pt-20 text-center z-10 relative">
        <div className="flex items-center justify-center gap-2 sm:gap-6 pb-5 mt-0 sm:mt-5 lg:mt-10">
          <h1 className="text-sm sm:text-3xl lg:text-4xl font-bold">BUILDING THE</h1>
          <span>
            <Image
              src={Rectangle}
              alt="Partnership"
              width={300}
              height={10}
              className="w-18 sm:w-25 lg:w-75 h-1"
            />
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-6 pb-5">
          <span>
            <Image
              src={Rectangle}
              alt="Partnership"
              width={212}
              height={10}
              className="w-10 sm:w-13 lg:w-53 h-1"
            />
          </span>
          <h1 className="text-sm sm:text-3xl lg:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#A14CF3] from-[38%] to-[#345CEB] to-[100%] bg-clip-text text-transparent">
              FUTURE
            </span>{" "}
            TOGHETER
          </h1>
        </div>

        <div className="flex justify-center space-x-5 mt-10 sm:mt-20 lg:mt-30">
          <Link href="#Partner" className="scroll-smooth">
          <button className="py-1 px-2 sm:py-2 sm:px-3 lg:py-3 lg:px-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#904EF1] to-[#6155EE] hover:bg-white hover:text-black cursor-pointer text-xs sm:text-base">
            Become a Partner
          </button>
          </Link>
          <Link href="#SeeSponsor" className="scroll-smooth">
            <button className="py-1 px-2 sm:py-2 sm:px-3 lg:py-3 lg:px-4 rounded-xl font-bold text-white border border-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-xs sm:text-base cursor-pointer">
              View Partner
            </button>
          </Link>
        </div>
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="20 0 1200 500"
      >
        <path
          id="orbitPathDesktop"
          d="M25 500 C300 200, 1000 200, 1300 600"
          fill="transparent"
          className="hidden sm:block"
        />

        <path
          id="orbitPathMobile"
          d="M25 300 C300 100, 1000 0, 1300 400"
          fill="transparent"
          className="block sm:hidden"
        />

        <image
          href="/icons/Mascot/Neura.png"
          width="60"
          height="60"
          className="animate-bounce-scale"
        >
          <animateMotion dur="15s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbitPathMobile" className="sm:hidden" />
            <mpath href="#orbitPathDesktop" className="hidden sm:inline" />
          </animateMotion>
        </image>

        <image
          href="/icons/Mascot/Neura.png"
          width="60"
          height="60"
          className="animate-bounce-scale"
        >
          <animateMotion
            dur="15s"
            repeatCount="indefinite"
            rotate="auto"
            begin="7.5s"
            fill="remove"
          >
            <mpath href="#orbitPathMobile" className="sm:hidden" />
            <mpath href="#orbitPathDesktop" className="hidden sm:inline" />
          </animateMotion>
          <set attributeName="visibility" to="hidden" begin="0s" dur="7.5s" fill="remove" />
          <set attributeName="visibility" to="visible" begin="7.5s" />
        </image>
      </svg>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0B30] to-transparent z-5"></div>
    </main>
  );
};

export default PartnershipSection;

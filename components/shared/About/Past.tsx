"use client";

import React, { useState } from "react";
import Image from "next/image";
import { pastMascotsData } from "@/constants/About/Past";

const PastMascots: React.FC = () => {
  const [activeTab, setActiveTab] = useState("2024");
  const { mascots, description } = pastMascotsData[activeTab] || {
    mascots: [],
    description: "",
  };

  const tabs = Object.keys(pastMascotsData);

  return (
    <section className="bg-gradient-to-b from-[#000022] to-[#23108E] from-0% to-100% py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold uppercase text-center text-white mb-5">
          PAST MASCOTS
        </h2>

        <div className="flex overflow-x-auto justify-center space-x-6 pb-4 mb-2 custom-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 text-lg font-semibold cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400 hover:text-white"
              } transition duration-300 ease-in-out focus:outline-none flex-shrink-0`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="relative rounded-[20px] overflow-hidden shadow-lg w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1300px] mx-auto bg-white/10 border-1 border-[#294EC7] p-4 sm:p-5 md:p-6 relative overflow-hidden"
        >

            <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full blur-circle bg-[radial-gradient(circle_at_center,_rgba(173,77,255,0.7)_0%,_rgba(173,77,255,0)_60%)]"></div>
            <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full blur-circle bg-[radial-gradient(circle_at_center,_rgba(81,124,255,0.6)_0%,_rgba(81,124,255,0)_70%)]"></div>

          <div className="rounded-xl flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
            <div className="w-full flex justify-center mt-2 sm:mt-3 md:mt-4">
              {mascots.map((mascot) => (
                <Image
                  key={mascot.id}
                  src={mascot.image}
                  alt={mascot.name}
                  width={300}
                  height={300}
                  className="object-contain w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[300px] xl:h-[300px] drop-shadow-xl"
                />
              ))}
            </div>

            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] backdrop-blur-xs p-4 sm:p-5 md:p-6 rounded-lg mb-2 sm:mb-3 md:mb-4">
              <p className="text-justify text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed"
              style={{ textAlignLast: 'center' }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastMascots;
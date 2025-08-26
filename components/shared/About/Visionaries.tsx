"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image"; 
import { Mascot, Web, Music, Visionary } from "@/constants/About/Visionaries";

interface VisionaryCardProps {
  name: string;
  role: string;
  image: StaticImageData; 
}

const VisionaryCard: React.FC<VisionaryCardProps> = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-72 md:w-64 md:h-88 lg:w-72 lg:h-96 rounded-2xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          className="rounded-2xl"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
        {name}
      </h3>
      <p className="text-sm md:text-base text-gray-300 text-center">
        {role}
      </p>
    </div>
  );
};

const Visionaries = () => {
  const [activeTab, setActiveTab] = useState("Website Creators");

  const tabs = [
    { label: "Mascot Creators", data: Mascot },
    { label: "Website Creators", data: Web },
    { label: "Music Creators", data: Music },
  ];

  const currentData = tabs.find((tab) => tab.label === activeTab)?.data || [];

  return (
    <main className="bg-gradient-to-b from-[#22108D] via-[#120921] to-[#000138] from-0% via-50% to-100%">
      <div className="overflow-hidden max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold uppercase text-center text-white mb-4">
          A TEAM OF <br /> VISIONARIES
        </h2>

        <div className="flex justify-center space-x-6 mt-10 mb-12 ">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`text-base md:text-lg font-semibold uppercase pb-4 px-2
                ${activeTab === tab.label
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400 hover:text-white"
                } transition duration-300 ease-in-out focus:outline-none`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {currentData.map((member) => (
            <VisionaryCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Visionaries;
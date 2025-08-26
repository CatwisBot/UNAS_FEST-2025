"use client";

import Image from "next/image";
import Border from "@/public/image/About/YB/Border.png";
import Fotbar from "@/public/image/About/YB/FotoBersama.png";
import Photo from "@/public/image/About/Hero/no-photo.jpg"
import { useState } from "react";
import { BookOpen } from "lucide-react";

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <main className="bg-gradient-to-b from-[#000022] to-[#1B1369] from-0% to-100%">
      <div className="flex flex-row items-center justify-center text-center w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 py-3 sm:py-5 md:py-10">
        <h2 className="uppercase text-xl sm:text-2xl md:text-6xl font-bold">year book</h2>
      </div>

      <div className="flex items-center justify-center w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4">
        <div className="relative w-full h-[200px] sm:h-[400px]">
          <Image
            src={Border}
            alt="Yearbook Border"
            fill
            className="object-contain z-2"
            priority
            quality={100}
          />
          <Image
            src={Photo}
            alt="Fotbar UF 25"
            className="object-cover z-1 h-50 sm:h-100 max-w-[224px] sm:max-w-md mx-auto"
            priority
            quality={100}
          />
          <div className="flex items-center justify-center hidden">
            <button
              onClick={handleClick}
              className="absolute bottom-5 md:bottom-10 border border-white px-2 py-1 md:px-4 md:py-2 rounded-xl text-white font-semibold hover:scale-110 z-10 bg-transparent"
            >
              Visit Yearbook
            </button>

            {showToast && (
              <div className="fixed top-25 left-1/2 transform -translate-x-1/2 z-50">
                <div className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl shadow-lg">
                  <BookOpen className="text-blue-400 w-5 h-5" />
                  <span>The Yearbook for this year is not yet available.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 py-10">
        <h2 className="font-bold text-sm sm:text-md sm:text-md md:text-xl px-1">
          250 Members
        </h2>
        <span className="font-bold text-sm sm:text-md md:text-xl px-2">―</span>
        <h2 className="font-bold text-sm sm:text-md md:text-xl px-1 hidden md:flex">
          14 Departements
        </h2>
        <h2 className="font-bold text-sm sm:text-md md:text-xl px-2 flex md:hidden">
          14 Dept
        </h2>
        <span className="font-bold text-sm sm:text-md md:text-xl px-2">―</span>
        <h2 className="font-bold text-sm sm:text-md md:text-xl px-1">
          3 Sectors
        </h2>
      </div>
    </main>
  );
}

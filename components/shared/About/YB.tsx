"use client";

import Image from "next/image";
import Border from "@/public/image/About/YB/Border.png";
import Fotbar from "@/public/image/About/YB/Foto Bersama.jpeg";
import { useState } from "react";
import { BookOpen } from "lucide-react";

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    // Release date: January 26, 2026 at 12:00 PM WIB (UTC+7)
    const releaseDate = new Date('2026-01-26T12:00:00+07:00');
    const now = new Date();

    if (now < releaseDate) {
      // Not yet available
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      // Open yearbook link
      window.open('https://www.canva.com/design/DAG4qZ01CHg/VDkGToLPpeti27xaTl6myg/edit?success=true', '_blank');
    }
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
            src={Fotbar}
            alt="Fotbar UF 25"
            className="object-cover z-1 h-49 sm:h-95 max-w-[224px] sm:max-w-md mx-auto"
            priority
            quality={100}
          />
          <div className="flex items-center justify-center">
            <button
              onClick={handleClick}
              className="absolute bottom-5 md:bottom-10 border border-white px-2 py-1 md:px-4 md:py-2 rounded-xl text-white font-semibold hover:scale-110 z-10 bg-white/20 backdrop-blur-md transition"
            >
              Visit Yearbook
            </button>

            {showToast && (
              <div className="fixed top-25 left-1/2 transform -translate-x-1/2 z-50">
                <div className="flex items-center gap-3 bg-white text-black px-2 py-1 md:px-4 md:py-3 rounded-xl shadow-lg">
                  <BookOpen className="text-blue-400 w-10 h-10 md:w-5 md:h-5" />
                  <span>The yearbook will be available on January 26, 2026 at 12:00 PM WIB.</span>
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

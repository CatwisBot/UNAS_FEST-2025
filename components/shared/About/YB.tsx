"use client";

import Image from "next/image";
import Border from "@/public/image/About/YB/Border.png";
import Fotbar from "@/public/image/About/YB/FotoBersama.png";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
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
            className="object-cover z-1 h-50 sm:h-100 max-w-[224px] sm:max-w-md mx-auto"
            priority
            quality={100}
          />
          <div className="flex items-center justify-center">
            <button
              onClick={handleClick}
              className="absolute bottom-10 border border-white px-4 py-2 rounded-xl text-white font-semibold hover:scale-110 z-10 bg-transparent"
            >
              Visit Yearbook
            </button>

            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
                  <h2 className="text-lg font-bold mb-2">Notice</h2>
                  <p className="text-black mb-4">
                    The Yearbook for this year is not yet available.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-[#000022] text-white rounded-lg hover:bg-blue-700"
                  >
                    OK
                  </button>
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

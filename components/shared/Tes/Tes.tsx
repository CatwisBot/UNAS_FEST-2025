'use client';

import React from "react";
import Image from "next/image";
import Baner from "@/public/image/Tes/Baner.png";

const PhotoBaner: React.FC = () => {
    const [activeDot, setActiveDot] = React.useState(0);
    const images = [Baner, Baner, Baner];

    return (
        <main className="bg-[#3a175d] w-full h-screen flex items-center justify-center relative">
            <div className="absolute rounded-2xl inset-10 bg-white/10 max-w-8xl h-[600px] flex items-center justify-center mx-auto">
        <div className="w-full h-[600px] p-70 md:p-10 lg:p-5 flex justify-center items-center font-poppins">

            {/* Bingkai Luar */}
            <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-xl border-1 mx-auto border-white/20">

                {/* Gambar Utama */} 
                <Image
                    src={images[activeDot]}
                    alt="Presenter at event"
                    layout="fill"
                    objectFit="cover"
                />

            </div>
            {/* Navigasi Titik */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-200 
                ${index === activeDot ? 'bg-white' : 'bg-gray-400'}`}
                        onClick={() => setActiveDot(index)}
                    ></div>
                ))}
            </div>

        </div>
    </div >
    </main>
  );
};

export default PhotoBaner;
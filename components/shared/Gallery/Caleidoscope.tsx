'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Photo from "@/public/image/About/Hero/no-photo.jpg"
import youtube from '@/public/image/Gallery/youtube.jpg';

const CaleidoscopeSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#0C0D35] to-[#0C0B33] to-50% text-white p-5 flex flex-col items-center py-20">
      
      <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold mb-5">
        CALEIDOSCOPE <span className="text-[#8B5CF6]">UNAS FEST</span> 2025
      </h1>

      <div className="w-full max-w-2xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto rounded-lg shadow-xl relative aspect-video overflow-hidden">
        
        {!isPlaying && (
          <>

            <Image
              src={Photo}
              alt="YouTube UNAS FEST Placeholder"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="w-35 h-25"
                fill="#FF0000"
              >
                <path d="M21.5,8.81c0-2.31-1.89-4.2-4.2-4.2H6.71c-2.31,0-4.2,1.89-4.2,4.2v6.38c0,2.31,1.89,4.2,4.2,4.2h10.59c2.31,0,4.2-1.89,4.2-4.2V8.81z" />
                <path fill="white" d="M9.78,16.27l5.22-3.26c0.41-0.26,0.41-0.81,0-1.07l-5.22-3.26c-0.41-0.26-0.78-0.08-0.78,0.49v6.52C9,16.35,9.37,16.53,9.78,16.27z" />
              </svg>
            </div>

            <a 
              href="#" 
              // target="_blank" 
              rel="noopener noreferrer" 
              className="absolute bottom-4 left-4 text-lg font-bold text-black backdrop-blur-xs hover:underline z-10"
            >
              Not Available For Now
            </a>
          </>
        )}

        {/* {isPlaying && (
          <iframe 
            src="https://www.youtube.com/embed/avng_u8b2d0?autoplay=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="w-full h-full absolute top-0 left-0 rounded-lg"
          ></iframe>
        )} */}
      </div>
    </div>
  );
};

export default CaleidoscopeSection;
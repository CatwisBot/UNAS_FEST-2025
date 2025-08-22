import React from 'react';
import Image from 'next/image';
import Daiko from '@/public/icons/Mascot/DAIKO.png';
import Panflora from '@/public/icons/Mascot/PANFLORA.png'

const GalleryHero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#29368b] to-[#0a0b30] text-white p-12 lg:p-24 flex items-center justify-between font-poppins">

      <div 
        className="absolute left-13 bottom-0 z-0"
        style={{ transform: 'scaleX(-1)' }}
      >
        <Image src={Panflora} alt="Maskot Kiri" width={300} height={250} />
      </div>

      <div className="absolute left-0 bottom-0">
     
      </div>

      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto z-10">
        <h1 className="text-4xl lg:text-5xl font-bold -mb-3">
          GALLERY OF <br /> </h1>.
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#9c27b0] to-[#5569ff] text-4xl lg:text-5xl font-bold mb-6 ">
            INDONESIA DEBATE COMPETITION
          </p>
      
        <p className="text-lg font-bold mb-6 text-gray-200">
          Official Photo Gallery of UNAS FEST - Event Documentation
        </p>

        <div className="flex justify-center space-x-10 mt-30">
  <div className="flex items-center gap-2 text-[#b388ff]">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
    </svg>
    <span className="font-bold text-white">Universitas Nasional</span>
  </div>
  <div className="flex items-center gap-2 text-[#55c2ff]">
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
    <span className="font-bold text-white">999+ Peserta</span>
  </div>
</div>
      </div>

      <div className="absolute right-0 bottom-0">
      </div>

       <div className="absolute right-15 bottom-0 z-0">
        <Image src= {Daiko} alt="Maskot Kanan" width={300} height={300} />
      </div>

    </div>
  );
};

export default GalleryHero;
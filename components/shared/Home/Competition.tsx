"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { AllPoster } from "@/constants/Home/Poster";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MoveRight, MoveLeft } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PosterSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % AllPoster.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative bg-[#000000]">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>
      <div className="text-center md:text-left p-0 md:p-4 lg:p-0 px-0 md:px-5 xl:px-0 pt-2 max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <h2 className="text-white text-2xl md:text-4xl font-semibold pb-2 mx-0 md:mx-2 uppercase">
          our special{" "}
          <span className="bg-gradient-to-r from-[#A14CF3] from-[38%] to-[#345CEB] to-[100%] bg-clip-text text-transparent">
            competition 2025
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 px-5 md:px-2 xl:px-0 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-4 w-full"
            >
              <div className="flex-1">
                <p className="text-white text-sm md:text-base text-justify line-clamp-8">
                  {AllPoster[activeIndex].desc}
                </p>
              </div>
              <div id="competition" className="relative w-[200px] h-[280px] xl:w-[260px] xl:h-[360px] flex-shrink-0">
                <Image
                  src={AllPoster[activeIndex].image}
                  alt={AllPoster[activeIndex].name}
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full bg-[#000000] py-10 relative max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto overflow-hidden">
        <Swiper
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            renderBullet: (index, className) => {
              return `<span class="${className}" data-index="${index}"></span>`;
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="!overflow-visible py-6"
          spaceBetween={5}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            375: { slidesPerView: 1.7 },
            425: { slidesPerView: 1.9 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {AllPoster.map((item) => (
            <SwiperSlide key={item.index}>
              <div className="flex flex-col items-center py-3">
                <Link href={item.path}>
                  <div className="relative w-[200px] h-[280px] xl:w-[260px] xl:h-[360px] cursor-pointer shine-container">
                    <div className="shine-overlay"></div>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="shadow-lg object-contain"
                    />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-0 left-0 md:left-4 w-full z-10">
          <div className="relative max-w-sm sm:max-w-[210px] px-4">
            <div className="flex items-center justify-center gap-4 h-12">
              <div className="swiper-button-prev absolute left-4 md:left-6 lg:left-8 cursor-pointer rounded-sm p-2 transition-all hover:scale-105">
                <MoveLeft className="h-5 w-5 text-white md:h-6 md:w-6" />
              </div>
              <div className="custom-pagination flex items-center justify-center gap-2 w-full max-w-[300px]" />
              <div className="swiper-button-next absolute right-4 md:right-6 lg:right-8 cursor-pointer rounded-sm p-2 transition-all hover:scale-105">
                <MoveRight className="h-5 w-5 text-white md:h-6 md:w-6" />
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          /* Bullet Pagination */
          .custom-pagination .swiper-pagination-bullet {
            width: 20px;
            height: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            opacity: 1;
            transition: all 0.3s ease;
            margin: 0 2px;
            cursor: pointer;
            border-radius: 5px;
          }

          .custom-pagination .swiper-pagination-bullet-active {
            background-color: #ffffff;
            width: 30px;
            height: 10px;
            border-radius: 5px;
          }

          @media (min-width: 768px) {
            .custom-pagination .swiper-pagination-bullet {
              width: 24px;
              height: 12px;
            }
            .custom-pagination .swiper-pagination-bullet-active {
              width: 36px;
              height: 12px;
            }
          }

          /* Override default Swiper navigation */
          .swiper-button-prev,
          .swiper-button-next {
            background: none !important;
            border: none !important;
            color: inherit !important;
            width: auto !important;
            height: auto !important;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            display: none !important; /* Hilangkan default arrow Swiper */
          }
        `}</style>
      </div>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { AllPoster } from "@/constants/Home/Poster";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <main>
      <div className="text-center md:text-left bg-[#000138] p-0 md:p-4 pt-2">
        <h2 className="text-white text-2xl md:text-4xl font-semibold pb-2 mx-0 md:mx-2 uppercase">
          our special{" "}
          <span className="bg-gradient-to-r from-[#A14CF3] from-[38%] to-[#345CEB] to-[100%] bg-clip-text text-transparent">
            competition 2025
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 px-5 md:px-2 min-h-[300px]">
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
              <div className="relative w-[200px] h-[280px] xl:w-[260px] xl:h-[360px] flex-shrink-0">
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

      <div className="w-full bg-[#000138] py-10">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={5}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="py-6"
        >
          {AllPoster.map((item) => (
            <SwiperSlide key={item.index}>
              <div className="flex flex-col items-center py-3">
                <Link href={item.path}>
                  <div className="relative w-[200px] h-[280px] xl:w-[260px] xl:h-[360px] cursor-pointer hover:scale-105 transition-transform duration-300">
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
      </div>
    </main>
  );
}
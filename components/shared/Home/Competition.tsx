"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { AllPoster } from "@/constants/Home/Poster";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function PosterSwiper() {
  return (
    <div className="w-full bg-[#000138]">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={5} 
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="py-6"
      >
        {AllPoster.map((item) => (
          <SwiperSlide key={item.index}>
            <div className="flex flex-col items-center">
              <Link href={item.path}>
              <div className="relative w-[200px] h-[280px] xl:w-[260px] xl:h-[360px] cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-white">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

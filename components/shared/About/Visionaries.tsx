"use client";

import React from "react";
import Image from "next/image";
import { Mascot, Web, Music, Visionary } from "@/constants/About/Visionaries";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const VisionarySlider = ({ data }: { data: Visionary[] }) => (
  <Swiper
    spaceBetween={10}
    breakpoints={{
      1440: { slidesPerView: 4.5 },
      1280: { slidesPerView: 4.2 },
      1024: { slidesPerView: 3.2 },
      768: { slidesPerView: 2.7 },
      640: { slidesPerView: 2.5 },
      520: { slidesPerView: 2.2 },
      425: { slidesPerView: 1.5 },
      375: { slidesPerView: 1.3 },
      0: { slidesPerView: 1.2 },
    }}
  >
    {data.map((item) => (
      <SwiperSlide key={item.id}>
        <div className="relative w-48 h-72 md:w-64 md:h-88 lg:w-72 lg:h-96 rounded-md overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain rounded-md"
          />
          <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm px-3 py-2">
            <p className="font-semibold">{item.name}</p>
            <p className="text-xs">{item.role}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const Visionaries = () => {
  return (
    <main className="bg-gradient-to-b from-[#22108D] via-[#120921] to-[#000138] from-0% via-50% to-100%">
      <div className="overflow-hidden max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold uppercase text-center text-white mb-10">
          Our Visionaries
        </h2>

        <section className="py-10">
          <h4 className="text-3xl font-semibold uppercase text-start mb-4 text-white">
            our <br /> mascot creators
          </h4>
          <VisionarySlider data={Mascot} />
        </section>

        <section className="py-10">
          <h4 className="text-3xl font-semibold uppercase text-start mb-4 text-white">
            our <br /> website creators
          </h4>
          <VisionarySlider data={Web} />
        </section>

        <section className="py-10">
          <h4 className="text-3xl font-semibold uppercase text-start mb-4 text-white">
            our <br /> music creators
          </h4>
          <VisionarySlider data={Music} />
        </section>
      </div>
    </main>
  );
};

export default Visionaries;

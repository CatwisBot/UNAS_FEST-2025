"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Mascot, Web, Music, Visionary } from "@/constants/About/Visionaries";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const VisionarySlider = ({ data }: { data: Visionary[] }) => (
  <Swiper
    spaceBetween={10}
    breakpoints={{
      1440: { slidesPerView: 4.5 },
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
  const [bgSize, setBgSize] = useState("100%");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 768) {
        setBgSize("75%");
      } else {
        setBgSize("100%");
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="overflow-hidden bg-gradient-to-b from-[#4D00AD] via-[#0A0B30] to-[#000138] px-10 py-16">
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
  );
};

export default Visionaries;

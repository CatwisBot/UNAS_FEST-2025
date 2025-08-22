"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ReqSwiperProps {
  requirements: string[];
}

export default function CustomSwiper({ requirements }: ReqSwiperProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [navConfig, setNavConfig] = useState<{
    prevEl: HTMLElement | null;
    nextEl: HTMLElement | null;
  }>({ prevEl: null, nextEl: null });

  useEffect(() => {
    setNavConfig({
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    });
  }, []);

  return (
    <div className="relative w-[90%] sm:w-full max-w-md h-[400px] bg-[#573B91] mx-auto p-6 rounded-lg shadow-md text-center">
      <SwiperComponent
        direction="vertical"
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: navConfig.prevEl,
          nextEl: navConfig.nextEl,
          disabledClass: "opacity-30 cursor-not-allowed",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full"
      >
        {requirements.map((rule, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-4xl text-white font-bold mb-4">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <p className="text-sm text-justify text-white max-w-xs font-medium">
                {rule}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <div className="absolute bottom-6 left-0 w-full flex flex-row items-center justify-center gap-6 pointer-events-auto z-20 px-6">
        <button
          ref={prevRef}
          className="cursor-pointer w-6 h-6 flex items-center justify-center"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
        <span className="text-xs text-white">
          {activeIndex + 1} / {requirements.length}
        </span>
        <button
          ref={nextRef}
          className="cursor-pointer w-6 h-6 flex items-center justify-center"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
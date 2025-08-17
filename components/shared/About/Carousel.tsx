"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ABOUT_SLIDES, AboutSlide } from "@/constants/About/About";

export default function AboutCarousel({
  slides = ABOUT_SLIDES,
  interval = 2500,
}: {
  slides?: AboutSlide[];
  interval?: number;
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const staticTitle =
    "VOICES AND MINDS KNIT COMPETITIVE RHYTHMS AT UNAS FEST 2025";
  const staticButtonText = "See Our Competition";
  const staticButtonLink = "/#competition";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [interval, slides.length]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-[#000C29] flex items-center justify-center p-8 mx-auto">
      <div className="flex flex-col-reverse md:flex-row w-full h-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 text-white text-center md:text-left z-20 md:pr-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            {staticTitle}
          </h2>
          <Link href={staticButtonLink} className="cursor-default" passHref>
            <button className="bg-[#007BFF] hover:bg-[#0069D9] cursor-pointer rounded-sm text-white py-3 px-8 self-center md:self-start transition duration-300 shadow-xl text-lg">
              {staticButtonText}
            </button>
          </Link>

          <div className="flex space-x-2 z-30 mt-8 md:mt-12 self-center md:self-start">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-sm cursor-pointer transition-all duration-300 ${
                  currentSlideIndex === index
                    ? "w-8 bg-white"
                    : "w-4 bg-gray-400 hover:bg-gray-300"
                }`}
                onClick={() => setCurrentSlideIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-1/2 items-center justify-end p-4 overflow-hidden">
          <div className="relative w-1/2 h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id + "-main"}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentSlide.mainImageUrl}
                  alt="Gambar utama"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative w-1/3 h-[200px] md:h-[300px] rounded-lg overflow-hidden shadow-2xl ml-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id + "-side"}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentSlide.sideImageUrl}
                  alt="Gambar samping"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex md:hidden justify-center items-start w-full mb-5">
          <div className="relative w-[80%] h-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id + "-mobile-main"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentSlide.mainImageUrl}
                  alt="Gambar utama mobile"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
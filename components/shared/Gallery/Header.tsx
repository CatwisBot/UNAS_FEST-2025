"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryEvent } from "@/lib/types/Gallery/Gallery";

interface EventCarouselProps {
  event: GalleryEvent;
  interval?: number;
}

export default function EventCarousel({ event, interval = 3000 }: EventCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (event.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % event.images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [event.images.length, interval]);

  return (
    <div className="relative w-full bg-gradient-to-b from-[#4C1E70] to-[#0C0D35]">
      <div className="max-w-7xl mx-auto py-12 px-6 md:py-20">
        <div className="flex flex-col items-center md:hidden">
          <div className="relative w-full max-w-md h-52 rounded-2xl overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current + "-mobile"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={event.images[current].src}
                  alt={event.images[current].alt}
                  fill
                  className="object-cover rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <h2 className="uppercase font-extrabold text-center text-2xl text-white">
            Welcome to gallery of{" "}
            <span className="bg-gradient-to-r from-[#A14CF3] from-[38%] to-[#345CEB] to-[100%] bg-clip-text text-transparent">
              {event.title}
            </span>
          </h2>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="uppercase font-bold text-left text-4xl mb-2">
              Welcome to gallery of{" "}
              <span className="bg-gradient-to-r from-[#A14CF3] from-[38%] to-[#345CEB] to-[100%] bg-clip-text text-transparent">
                {event.title}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-2/3 h-96 rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current + "-main"}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={event.images[current].src}
                    alt={event.images[current].alt}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {event.images.length > 1 && (
              <div className="relative w-1/3 h-80 rounded-2xl overflow-hidden hidden md:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current + "-preview"}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={event.images[(current + 1) % event.images.length].src}
                      alt={event.images[(current + 1) % event.images.length].alt}
                      fill
                      className="object-cover opacity-90 rounded-2xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

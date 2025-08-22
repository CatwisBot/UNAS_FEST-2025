"use client";

import InfoCard from "@/components/ui/Timeline";
import { CompetitionEvent } from "@/lib/types/Activities/Timeline";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import Particle from "@/public/icons/Mascot/Neura.png";
import { useRef, useState, useEffect } from "react";

interface TimelineProps {
  events: CompetitionEvent["timeline"];
}

export default function Timeline({ events }: TimelineProps) {
  const containerHeight = events.length * 165;
  const cardOffset = 50;
  const lineHeight = (events.length - 1) * 165;
  const containerRef = useRef<HTMLDivElement>(null);
  const [showParticle, setShowParticle] = useState(true);

  const useFloatingParticle = (size: number) => {
    const baseX = useMotionValue(0);
    const baseY = useMotionValue(0);
    const baseRotate = useMotionValue(0);

    useEffect(() => {
      if (!showParticle || !containerRef.current) return;

      const moveParticle = () => {
        const containerWidth = containerRef.current!.clientWidth;
        const containerHeight = containerRef.current!.clientHeight;
        const maxX = containerWidth - size;
        const maxY = containerHeight - size;

        const targetX = Math.random() * maxX;
        const targetY = Math.random() * maxY;
        const targetRotate = Math.random() * 40 - 20;

        const duration = 2 + Math.random() * 6; 
        const delay = Math.random() * 0.1; 

        animate(baseX, targetX, {
          duration,
          delay,
          ease: "easeInOut",
          onComplete: moveParticle,
        });

        animate(baseY, targetY, {
          duration,
          delay,
          ease: "easeInOut",
        });

        animate(baseRotate, targetRotate, {
          duration,
          delay,
          ease: "easeInOut",
        });
      };

      setTimeout(moveParticle, Math.random() * 2000);
    }, [showParticle, size]);

    return { baseX, baseY, baseRotate };
  };

  const particles = [
    { ...useFloatingParticle(40), size: 40, opacity: 0.5 },
    { ...useFloatingParticle(50), size: 50, opacity: 0.6 },
    { ...useFloatingParticle(60), size: 60, opacity: 0.7 },
    { ...useFloatingParticle(60), size: 60, opacity: 0.7 },
    { ...useFloatingParticle(60), size: 60, opacity: 0.7 },
    { ...useFloatingParticle(70), size: 70, opacity: 0.8 },
    { ...useFloatingParticle(80), size: 80, opacity: 0.9 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-gradient-to-b from-[#571C87] to-[#223788] overflow-hidden"
      style={{
        height: `${containerHeight}px`,
      }}
    >
      <div className="absolute top-10 left-0 w-full text-center z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white uppercase">
          Activity Timeline
        </h2>
      </div>

      {showParticle &&
        particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute z-0" 
            style={{
              x: p.baseX,
              y: p.baseY,
              rotate: p.baseRotate,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
            }}
            animate={{
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2, 
            }}
          >
            <Image
              src={Particle}
              alt="Particle"
              width={p.size}
              height={p.size}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}

      <div
        className="
          absolute top-[150px] w-1 bg-gradient-to-b from-[#A755F7] to-[#3D81F6]
          left-6 md:left-1/2 md:-translate-x-1/2 z-10
        "
        style={{
          height: `${lineHeight}px`,
        }}
      />

      {events.map((event, index) => {
        const topPosition = index * 150 + 150;
        const isEven = index % 2 === 0;

        return (
          <div key={`${event.title}-${index}`}>
            <motion.div
              className="absolute rounded-full bg-[#8A3BCF] 
              left-[19px] md:left-1/2 md:-translate-x-1/2 z-10"
              style={{
                top: `${topPosition + 50}px`,
                width: "16px",
                height: "16px",
              }}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            />

            <motion.div
              className="absolute z-10 w-[85%] max-w-md left-[50px] md:hidden"
              style={{
                top: `${topPosition + 22}px`,
                transform: "translateY(-50%)",
              }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <InfoCard
                index={index}
                month={event.month}
                day={event.day}
                year={event.year}
                title={event.title}
              />
            </motion.div>

            <motion.div
              className="absolute z-10 hidden md:block"
              style={{
                top: `${topPosition}px`,
                ...(isEven
                  ? { right: `calc(50% + ${cardOffset}px)` }
                  : { left: `calc(50% + ${cardOffset}px)` }),
                transform: "translateY(-50%)",
              }}
              initial={{ opacity: 0, x: isEven ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <InfoCard
                index={index}
                month={event.month}
                day={event.day}
                year={event.year}
                title={event.title}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

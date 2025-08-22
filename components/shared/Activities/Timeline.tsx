"use client";

import InfoCard from "@/components/ui/Timeline";
import { CompetitionEvent } from "@/lib/types/Activities/Timeline";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import Particle from "@/public/icons/Mascot/Neura.png";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";

interface TimelineProps {
    events: CompetitionEvent["timeline"];
    variant?: "home" | "activities";
}

// Custom hook for floating particles with proper cleanup - moved outside component
const useFloatingParticle = (size: number, delay: number, showParticle: boolean, containerRef: React.RefObject<HTMLDivElement | null>) => {
    const baseX = useMotionValue(0);
    const baseY = useMotionValue(0);
    const baseRotate = useMotionValue(0);

    useEffect(() => {
        if (!showParticle || !containerRef.current) return;

        let isActive = true;
        let animationFrame: number;

        const moveParticle = () => {
            if (!isActive || !containerRef.current) return;

            const containerWidth = containerRef.current.clientWidth;
            const containerHeight = containerRef.current.clientHeight;
            const maxX = containerWidth - size;
            const maxY = containerHeight - size;

            const targetX = Math.random() * maxX;
            const targetY = Math.random() * maxY;
            const targetRotate = Math.random() * 40 - 20;

            const duration = 2 + Math.random() * 6;

            animate(baseX, targetX, {
                duration,
                ease: "easeInOut",
                onComplete: () => {
                    if (isActive) {
                        animationFrame = requestAnimationFrame(moveParticle);
                    }
                },
            });

            animate(baseY, targetY, {
                duration,
                ease: "easeInOut",
            });

            animate(baseRotate, targetRotate, {
                duration,
                ease: "easeInOut",
            });
        };

        // Start animation after delay
        const timeoutId = setTimeout(moveParticle, delay * 1000);

        return () => {
            isActive = false;
            clearTimeout(timeoutId);
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [showParticle, size, delay, containerRef]);

    return { baseX, baseY, baseRotate };
};

export default function Timeline({ events, variant = "activities" }: TimelineProps) {
    const containerHeight = events.length * 165;
    const cardOffset = 50;
    const lineHeight = (events.length - 1) * 165;
    const containerRef = useRef<HTMLDivElement>(null);
    const [showParticle] = useState(true);

    // Memoize particle configurations to prevent unnecessary re-renders
    const particleConfigs = useMemo(() => [
        { size: 40, opacity: 0.5, delay: 0, duration: 3.2 },
        { size: 50, opacity: 0.6, delay: 0.5, duration: 3.4 },
        { size: 60, opacity: 0.7, delay: 1, duration: 3.6 },
        { size: 60, opacity: 0.7, delay: 1.5, duration: 3.8 },
        { size: 60, opacity: 0.7, delay: 2, duration: 4.0 },
        { size: 70, opacity: 0.8, delay: 2.5, duration: 4.2 },
        { size: 80, opacity: 0.9, delay: 3, duration: 4.4 },
    ], []);

    // Create particles with memoized configurations - move hook calls to top level
    const particle1 = useFloatingParticle(40, 0, showParticle, containerRef);
    const particle2 = useFloatingParticle(50, 0.5, showParticle, containerRef);
    const particle3 = useFloatingParticle(60, 1, showParticle, containerRef);
    const particle4 = useFloatingParticle(60, 1.5, showParticle, containerRef);
    const particle5 = useFloatingParticle(60, 2, showParticle, containerRef);
    const particle6 = useFloatingParticle(70, 2.5, showParticle, containerRef);
    const particle7 = useFloatingParticle(80, 3, showParticle, containerRef);

    // Combine particles with their configurations
    const particles = useMemo(() => [
        { ...particle1, size: 40, opacity: 0.5, duration: 3.2 },
        { ...particle2, size: 50, opacity: 0.6, duration: 3.4 },
        { ...particle3, size: 60, opacity: 0.7, duration: 3.6 },
        { ...particle4, size: 60, opacity: 0.7, duration: 3.8 },
        { ...particle5, size: 60, opacity: 0.7, duration: 4.0 },
        { ...particle6, size: 70, opacity: 0.8, duration: 4.2 },
        { ...particle7, size: 80, opacity: 0.9, duration: 4.4 },
    ], [particle1, particle2, particle3, particle4, particle5, particle6, particle7]);

    // Memoize background classes based on variant
    const backgroundClasses = useMemo(() => {
        return variant === "home" 
            ? "bg-gradient-to-b from-[#571C87] to-[#223788]"
            : "";
    }, [variant]);

    // Memoize header content based on variant
    const headerContent = useMemo(() => {
        if (variant === "home") {
            return (
                <div className="absolute top-10 left-0 w-full text-center z-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-white uppercase">
                        Activity Timeline
                    </h2>
                </div>
            );
        }
        
        return (
            <div className="flex flex-col items-center text-center px-4 justify-center">
                <h2 className="uppercase text-4xl font-bold pb-3">
                    the journey to <span className="bg-gradient-to-r from-[#63A3FA] from-68% to-[#BE84FC] to-100% bg-clip-text text-transparent">victory</span>
                </h2>
                <p className="text-[#E8D4FE] font-semibold">
                    Complete schedule of the competition from registration to the grand final
                </p>
            </div>
        );
    }, [variant]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full overflow-hidden ${backgroundClasses}`}
            style={{
                height: `${containerHeight}px`,
            }}
        >
            {headerContent}

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
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
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
                                month={event.month}
                                day={event.day}
                                year={event.year}
                                title={event.title}
                                isEven={isEven}
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
                                month={event.month}
                                day={event.day}
                                year={event.year}
                                title={event.title}
                                isEven={isEven}
                            />
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}

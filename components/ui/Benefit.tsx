"use client";

import Image from "next/image";
import React from "react";
import { useRef, useEffect, useState } from "react";
import Medal from "@/public/icons/Home/Medal2.png";
import Trophy from "@/public/icons/Home/Trophy2.png";
import Star from "@/public/icons/Home/Star.png";
import Plaque from "@/public/icons/Home/Plaque.png";
import Person from "@/public/icons/Home/Person2.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay"

const cards = [
    {
        id: 1,
        title: "Certificate & E-Certificate",
        icon: Medal,
        iconBg: "from-[#3C80F6] to-[#4D4BE6]",
        cornerBg: "bg-[#4C2E9E]",
        description: "Official digital certificate from Universitas Nasional that can be used to complement your academic and professional portfolio.",
        items: [
            "Certificate of Participation",
            "Certificate of Achievement",
            "PDF & Digital Format"
        ],
        bulletColor: "bg-[#3B82F6]"
    },
    {
        id: 2,
        title: "Trophy",
        icon: Trophy,
        iconBg: "from-[#EAAF08] to-[#EA5E0C]",
        cornerBg: "bg-[#653F71]",
        description: "Exclusive trophies for champions and finalists as a symbol of the highest achievement in each competition category.",
        items: [
            "First, second, and third place winners",
            "Best Performance",
            "Special Awards"
        ],
        bulletColor: "bg-[#EAB308]"
    },
    {
        id: 3,
        title: "Merch",
        icon: Star,
        iconBg: "from-[#AB53F1] to-[#DA297B]",
        cornerBg: "bg-[#603086]",
        description: "The UNAS FEST 2025 limited edition merchandise collection is only available to competition participants and winners.",
        items: [
            "T-shirt",
            "Tote Bag & Tumbler",
            "Sticker Pack"
        ],
        bulletColor: "bg-[#A855F7]"
    },
    {
        id: 4,
        title: "Plaque",
        icon: Plaque,
        iconBg: "from-[#4A5463] to-[#344255]",
        cornerBg: "bg-[#344255]",
        description: "Premium plaques with exclusive designs for general champions and special achievements that can be displayed as a source of pride.",
        items: [
            "Champion",
            "Best Team",
            "Most Creative"
        ],
        bulletColor: "bg-[#5728A4]",
        specialItems: true // Flag untuk item khusus dengan background
    },
    {
        id: 5,
        title: "Appreciation",
        icon: Person,
        iconBg: "from-[#15A14A] to-[#057B56]",
        cornerBg: "bg-[#057B56]",
        description: "An official of appreciation from the Rector of UNAS to all participants as a token of appreciation for their dedication and participation.",
        items: [
            "All Participant",
            "Award",
            "Hard Copy"
        ],
        bulletColor: "bg-[#2A4E6B]",
        specialItems: true
    }
];
export default function BenefitCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollPositionRef = useRef(0);
    const speedRef = useRef(1.5);
    const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Animasi
    const startAnimation = () => {
        stopAnimation(); // Hentikan animasi sebelumnya
        if (!containerRef.current || !contentRef.current || isPaused) return;

        const animate = () => {
            scrollPositionRef.current += speedRef.current;
            const container = containerRef.current!;
            const content = contentRef.current!;

            if (scrollPositionRef.current >= content.scrollWidth / 2) {
                scrollPositionRef.current = 0;
                container.scrollLeft = 0;
            } else {
                container.scrollLeft = scrollPositionRef.current;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    };

    // Handle interaksi
    const handlePause = () => {
        setIsPaused(true);
        stopAnimation();
    };

    const handleResume = () => {
        if (touchTimeoutRef.current) {
            clearTimeout(touchTimeoutRef.current);
        }
        touchTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
            startAnimation();
        }, 300); // Delay untuk pastikan interaksi selesai
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clone cards (untuk infinite scroll)
        if (contentRef.current) {
            const originalContent = contentRef.current.innerHTML;
            contentRef.current.innerHTML = originalContent + originalContent;
        }

        // Event listeners untuk mouse dan touch
        const options = { passive: false }; // Izinkan preventDefault
        container.addEventListener("mousedown", handlePause);
        container.addEventListener("mouseleave", handleResume);
        container.addEventListener("touchstart", handlePause, options);
        container.addEventListener("touchend", handleResume, options);

        startAnimation();

        return () => {
            container.removeEventListener("mousedown", handlePause);
            container.removeEventListener("mouseleave", handleResume);
            container.removeEventListener("touchstart", handlePause);
            container.removeEventListener("touchend", handleResume);
            if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
            stopAnimation();
        };
    }, []);

    // Restart animasi saat isPaused berubah
    useEffect(() => {
        if (!isPaused) startAnimation();
    }, [isPaused]);

    return (
        <main className="container mx-auto px-4 py-8">
            <div
                ref={containerRef}
                className="overflow-hidden select-none touch-none block sm:hidden" // Nonaktifkan interaksi default
            >
                <div
                    ref={contentRef}
                    className="flex w-max"
                    style={{ willChange: 'transform' }}
                >
                    {[...cards, ...cards].map((card, index) => (
                        <div
                            key={`${card.id}-${index}`}
                            className="relative w-[300px] h-auto bg-gradient-to-br from-[#4D258E] to-[#2b146b] text-white p-6 rounded-2xl shadow-lg overflow-hidden mx-2 flex-shrink-0"
                        >
                            <div className={`absolute top-0 right-0 w-15 h-15 ${card.cornerBg} rounded-bl-3xl`}></div>
                            <div className={`w-15 h-15 flex items-center justify-center bg-gradient-to-r ${card.iconBg} rounded-lg mb-4 relative z-10`}>
                                <Image
                                    src={card.icon}
                                    alt={`${card.title} Icon`}
                                    width={35}
                                    height={35}
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="text-xl font-bold mb-2 relative z-10">
                                {card.title}
                            </h3>

                            <p className="text-sm text-[#E1CBF9] mb-4 leading-relaxed relative z-10">
                                {card.description}
                            </p>

                            <ul className="space-y-2 text-sm relative z-10">
                                {card.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${card.bulletColor}`}></span>
                                        <span className="font-semibold text-white">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden sm:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
                    {/* card 1 */}
                    <div className="relative max-w-sm bg-gradient-to-br from-[#4D258E] to-[#2b146b] text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                        <div className="absolute top-0 right-0 w-15 h-15 bg-[#4C2E9E] rounded-bl-3xl"></div>
                        <div className="w-15 h-15 flex items-center justify-center bg-gradient-to-r from-[#3C80F6] to-[#4D4BE6] from-0% to-100% rounded-lg mb-4 relative z-10">
                            <Image
                                src={Medal}
                                alt="Medal Icon"
                                width={35}
                                height={35}
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-bold mb-2 relative z-10">
                            Certificate & E-Certificate
                        </h3>

                        <p className="text-sm text-[#E1CBF9] mb-4 leading-relaxed relative z-10">
                            Official digital certificate from Universitas Nasional that can be used
                            to complement your academic and professional portfolio.
                        </p>

                        <ul className="space-y-2 text-sm relative z-10">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                                <span className="font-semibold text-white">
                                    Certificate of Participation
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                                <span className="font-semibold text-white">
                                    Certificate of Achievement
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                                <span className="font-semibold text-white">
                                    PDF & Digital Format
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* card 2 */}
                    <div className="relative max-w-sm bg-gradient-to-br from-[#4D258E] to-[#2b146b] text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                        <div className="absolute top-0 right-0 w-15 h-15 bg-[#653F71] rounded-bl-3xl"></div>
                        <div className="w-15 h-15 flex items-center justify-center bg-gradient-to-r from-[#EAAF08] to-[#EA5E0C] from-0% to-100% rounded-lg mb-4 relative z-10">
                            <Image
                                src={Trophy}
                                alt="Trophy Icon"
                                width={35}
                                height={35}
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-bold mb-2 relative z-10">
                            Trophy
                        </h3>

                        <p className="text-sm text-[#E1CBF9] mb-4 leading-relaxed relative z-10">
                            Exclusive trophies for champions and finalists as a symbol of the
                            highest achievement in each competition category.
                        </p>

                        <ul className="space-y-2 text-sm relative z-10">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#EAB308]"></span>
                                <span className="font-semibold text-white">
                                    First, second, and third place winners
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#EAB308]"></span>
                                <span className="font-semibold text-white">
                                    Best Performance
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#EAB308]"></span>
                                <span className="font-semibold text-white">
                                    Special Awards
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* card 3 */}
                    <div className="relative max-w-sm bg-gradient-to-br from-[#4D258E] to-[#2b146b] text-white p-6 rounded-2xl shadow-lg overflow-hidden sm:col-span-2 lg:col-span-1 sm:mx-auto">
                        <div className="absolute top-0 right-0 w-15 h-15 bg-[#603086] rounded-bl-3xl"></div>
                        <div className="w-15 h-15 flex items-center justify-center bg-gradient-to-r from-[#AB53F1] to-[#DA297B] from-0% to-100% rounded-lg mb-4 relative z-10">
                            <Image
                                src={Star}
                                alt="Star Icon"
                                width={35}
                                height={35}
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-bold mb-2 relative z-10">
                            Merch
                        </h3>

                        <p className="text-sm text-[#E1CBF9] mb-4 leading-relaxed relative z-10">
                            The UNAS FEST 2025 limited edition merchandise collection is
                            only available to competition participants and winners.
                        </p>

                        <ul className="space-y-2 text-sm relative z-10">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#A855F7]"></span>
                                <span className="font-semibold text-white">
                                    T-shirt
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#A855F7]"></span>
                                <span className="font-semibold text-white">
                                    Tote Bag & Tumbler
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#A855F7]"></span>
                                <span className="font-semibold text-white">
                                    Sticker Pack
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mx-auto">
                    {/* Card 4 */}
                    <div className="relative bg-gradient-to-br from-[#4D258E] to-[#2b146b] text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                        <div className="absolute top-0 right-0 w-15 h-15 bg-[#344255] rounded-bl-3xl"></div>
                        <div className="w-15 h-15 flex items-center justify-center bg-gradient-to-r from-[#4A5463] to-[#344255] rounded-lg mb-4 relative z-10">
                            <Image
                                src={Plaque}
                                alt="Plaque Icon"
                                width={35}
                                height={35}
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-bold mb-2 relative z-10">
                            Plaque
                        </h3>

                        <p className="text-sm text-[#E1CBF9] mb-4 leading-relaxed relative z-10">
                            Premium plaques with exclusive designs for general champions
                            and special achievements that can be displayed as a source of pride.
                        </p>

                        <ul className="text-sm relative flex flex-col lg:flex-row gap-4 z-10">
                            <li className="flex items-center gap-2">
                                <span className="font-semibold text-white bg-[#5728A4] rounded-md px-3 py-2 hidden lg:block">
                                    Champion
                                </span>
                                <span className="w-2 h-2 rounded-full bg-[#5728A4] block lg:hidden"></span>
                                <span className="font-semibold text-white block lg:hidden">
                                    Champion
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-semibold text-white bg-[#5728A4] rounded-md px-3 py-2 hidden lg:block">
                                    Best Team
                                </span>
                                <span className="w-2 h-2 rounded-full bg-[#5728A4] block lg:hidden"></span>
                                <span className="font-semibold text-white block lg:hidden">
                                    Best Team
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-semibold text-white bg-[#5728A4] rounded-md px-3 py-2 hidden lg:block">
                                    Most Creative
                                </span>
                                <span className="w-2 h-2 rounded-full bg-[#5728A4] block lg:hidden"></span>
                                <span className="font-semibold text-white block lg:hidden">
                                    Most Creative
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 5 */}
                    <div className="relative bg-gradient-to-br from-[#4D258E] to-[#2b146b] text-white p-6 rounded-2xl shadow-lg overflow-hidden">
                        <div className="absolute top-0 right-0 w-15 h-15 bg-[#057B56] rounded-bl-3xl"></div>
                        <div className="w-15 h-15 flex items-center justify-center bg-gradient-to-r from-[#15A14A] to-[#057B56] rounded-lg mb-4 relative z-10">
                            <Image
                                src={Person}
                                alt="Person Icon"
                                width={35}
                                height={35}
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-bold mb-2 relative z-10">
                            Appreciation
                        </h3>

                        <p className="text-sm text-[#E1CBF9] mb-4 leading-relaxed relative z-10">
                            An official of appreciation from the Rector of UNAS to all
                            participants as a token of appreciation for their dedication and participation.
                        </p>

                        <ul className="text-sm relative flex flex-col lg:flex-row gap-4 z-10">
                            <li className="flex items-center gap-2">
                                <span className="font-semibold text-white bg-[#2A4E6B] rounded-md px-3 py-2 hidden lg:block">
                                    All Participant
                                </span>
                                <span className="w-2 h-2 rounded-full bg-[#2A4E6B] block lg:hidden"></span>
                                <span className="font-semibold text-white block lg:hidden">
                                    All Participant
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-semibold text-white bg-[#2A4E6B] rounded-md px-3 py-2 hidden lg:block">
                                    Award
                                </span>
                                <span className="w-2 h-2 rounded-full bg-[#2A4E6B] block lg:hidden"></span>
                                <span className="font-semibold text-white block lg:hidden">
                                    Award
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-semibold text-white bg-[#2A4E6B] rounded-md px-3 py-2 hidden lg:block">
                                    Hard Copy
                                </span>
                                <span className="w-2 h-2 rounded-full bg-[#2A4E6B] block lg:hidden"></span>
                                <span className="font-semibold text-white block lg:hidden">
                                    Hard Copy
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
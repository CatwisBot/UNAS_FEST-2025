"use client";

import { useState, useMemo } from "react";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import FilterIcon from "@/public/image/Gallery/Filter.png";
import { GalleryEvent } from "@/lib/types/Gallery/Gallery";

interface GalleryDetailClientProps {
    event: GalleryEvent;
}

export default function GalleryDetailClient({ event }: GalleryDetailClientProps) {
    const [selectedYear, setSelectedYear] = useState("All");
    const [selectedDay, setSelectedDay] = useState("All");

    const years = ["All", "2025", "2024", "2023"];
    const days = ["All", "Day 1", "Day 2"];

    const filteredImages = useMemo(() => {
        return event.images.filter((image) => {
            const matchYear = selectedYear === "All" || image.year === selectedYear;
            const matchDay = selectedDay === "All" || image.day === selectedDay;
            return matchYear && matchDay;
        });
    }, [event.images, selectedYear, selectedDay]);

    return (
        <div className="bg-gradient-to-b from-[#0A0B30] via-[#3F0E79] to-[#37126B]">
            <div className="max-w-2xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto min-h-screen">
                <div className="pt-10 flex flex-row items-center gap-3">
                    <Image src={FilterIcon} alt="Filter icon" width={28} height={28} />
                    <div className="flex flex-row items-center gap-3">
                        <p className="font-bold text-xl tracking-widest">Filter</p>

                        <div className="relative">
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="appearance-none bg-[#1B1D3A] text-white px-3 py-1 pr-7 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            >
                                {years.map((year) => (
                                    <option key={year} value={year} className="bg-[#1B1D3A]">
                                        {year}
                                    </option>
                                ))}
                            </select>

                            <svg
                                className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 mt-4">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition 
                ${selectedDay === day
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                    : "bg-[#1B1D3A] text-gray-300 hover:bg-[#2A2C4E]"
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
                    {filteredImages.length > 0 ? (
                        filteredImages.map((image, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-purple-700 to-purple-900 text-white hover:scale-[1.02] transition-transform"
                            >
                                <div className="relative h-40 w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4 space-y-3">
                                    <p className="font-semibold text-base">{image.caption}</p>
                                    <div className="flex items-center gap-2 text-sm opacity-90">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {image.day}, {image.date} {image.year}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm opacity-90">
                                        <MapPin className="w-4 h-4" />
                                        <span>{image.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-center col-span-full">
                            No events found for this filter.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

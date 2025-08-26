import Image from "next/image";
import React from "react";
import Photo from "@/public/image/About/Hero/no-photo.jpg"
import Link from "next/link";

export default function Hero() {
    return (
        <main className="bg-gradient-to-b from-[#32199F] to-[#030C2E] from-0% to-100%">
            <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto grid grid-cols-2 grid-rows-5 sm:grid-cols-5 sm:grid-rows-7 gap-4 max-hscreen px-4 py-10">
                <div className="relative row-span-2 sm:row-span-3">
                    <Image
                        src={Photo}
                        alt="Gambar 1"
                        fill
                        className="object-cover rounded-xl"
                        priority
                    />
                </div>
                <div className="relative row-span-3 sm:col-span-2 sm:row-span-4">
                    <Image
                        src={Photo}
                        alt="Gambar 2"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                <div className="relative hidden sm:flex sm:col-span-2 sm:row-span-5 sm:col-start-4">
                    <Image
                        src={Photo}
                        alt="Gambar 3"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                <div className="col-span-2 row-start-4 sm:col-span-2 sm:row-span-2 sm:row-start-6 flex items-center justify-center sm:justify-normal">
                    <div className="flex flex-col leading-tight pr-4">
                        <span className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-[#5600FF] from-0% to-[#8405CE] to-100% bg-clip-text text-transparent">UNAS</span>
                        <span className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-[#5600FF] from-0% to-[#8405CE] to-100% bg-clip-text text-transparent">FEST</span>
                    </div>
                    <div className="flex flex-col text-right leading-tight">
                        <span className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-[#FAC916] from-0% to-[#FA9439] to-100% bg-clip-text text-transparent">20</span>
                        <span className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-[#FAC916] from-0% to-[#FA9439] to-100% bg-clip-text text-transparent">25</span>
                    </div>
                </div>
                <div className="col-span-2 row-start-5 sm:col-span-3 sm:row-span-2 sm:col-start-3 sm:row-start-6 flex flex-col justify-center sm:items-end items-center">
                    <p className="text-white text-center sm:text-right font-semibold text-xs lg:text-xl leading-snug mb-1 sm:mb-2 md:mb-4 lg:mb-6">
                        “Exploring the Potential of Renewable Energy Technology Innovation to Achieve Global Green Momentum”
                    </p>

                    <Link href="/#competition">
                        <button className="cursor-pointer w-fit bg-gradient-to-r from-purple-500 to-indigo-500 text-xs lg:text-base text-white font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-xl shadow-lg hover:opacity-90 transition">
                            Explore Competition
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
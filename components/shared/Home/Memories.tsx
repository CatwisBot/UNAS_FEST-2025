import Image from "next/image";
import Clock from "@/public/icons/Home/Clock.png";
import React from "react";
import Link from "next/link";
import { Calendar, Star, Trophy, Image as ImageIcon } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Memories() {
    return (
        <main className="bg-gradient-to-b from-[#000138] to-[#571C87] from-32% to-100% pb-20">
            <div className="flex items-center justify-center pt-25">
                <div className="inline-flex items-center gap-2 bg-[#4D258E] text-white font-bold px-6 py-2 rounded-full">
                    <Image
                        src={Clock}
                        alt="Clock Icon"
                        width={32}
                        height={32}
                        className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4"
                    />
                    <span className="text-[9px] lg:text-sm">Memories</span>
                </div>
            </div>
            <div className="text-center pb-1 sm:pb-2">
                <h2 className="uppercase font-bold text-2xl sm:text-4xl">looking back at <span className="bg-gradient-to-r from-[#D793FF] from-0% to-[#94C4FD] to-100% bg-clip-text text-transparent">unas fest 2024</span></h2>
            </div>

            <div className="text-center">
                <p className="font-semibold text-[8px] sm:text-[10px] md:text-sm text-[#E4E4E4]">Take a look back at the history from last year's  UNAS FEST and<br /> feel the nostalgia of our journey.</p>
            </div>


            <div className="grid grid-cols-4sm:grid-cols-4 sm:grid-rows-4 lg:grid-cols-6 lg:grid-rows-7 gap-4 max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 sm:px-0 pt-8">
                <Card className="sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-4 p-4 bg-[#49258B] border-1 border-[#54279E] text-white rounded-2xl shadow-lg">
                    <CardContent className="flex flex-col h-full justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-r from-[#9035EA] to-[#2A60EB] from-0% to-100% p-2 rounded-xl">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="font-extrabold text-lg">UNAS FEST 2024</h2>
                                <p className="text-md font-semibold text-[#D8B4FE]">75th Anniversary</p>
                            </div>
                        </div>

                        <p className="text-sm mt-3 text-[#D8B4FE] font-bold leading-relaxed">
                            Last year, we celebrated the 75th anniversary of the National University
                            with various exciting competitions and outstanding participation from all students.
                        </p>

                        <div className="grid grid-cols-2 gap-2 mt-4">
                            <div className="bg-[#55269E] border-1 border-[#54279E] p-3 rounded-xl text-center">
                                <p className="text-xl font-bold">999+</p>
                                <span className="text-xs opacity-75">Participants</span>
                            </div>
                            <div className="bg-[#55269E] border-1 border-[#54279E] p-3 rounded-xl text-center">
                                <p className="text-xl font-bold">4</p>
                                <span className="text-xs opacity-75">Competitions</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="sm:col-span-2 sm:row-span-2 sm:col-start-3 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-5 p-4 bg-[#49258B] border-1 border-[#54279E] text-white rounded-2xl shadow-lg">
                    <CardContent>
                        <h2 className="font-bold text-lg mb-3">Highlights 2024</h2>
                        <ul className="space-y-2 text-sm font-medium text-[#D8B4FE]">
                            {[
                                "Indonesia Debate Competition 250+ Peserta",
                                "English Debate Competition 250+ Peserta",
                                "Short Movie Competition 250+ peserta",
                                "Scientific Paper Competition 250+ peserta",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <Star className="w-4 h-4 text-yellow-400 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card className="sm:col-span-3 sm:row-span-2 sm:row-start-3 lg:col-span-4 lg:row-span-5 lg:col-start-3 lg:row-start-1 p-6 bg-[#49258B] border-1 border-[#54279E] text-white rounded-2xl shadow-lg flex flex-col justify-between">
                    <CardContent className="flex flex-col h-full">
                        <h2 className="font-extrabold text-xl mb-4">Website 2024</h2>

                        <div className="bg-gradient-to-r from-[#572AA4] to-[#4731A4] from-0% to-100% rounded-xl p-4 flex flex-col items-center justify-center">
                            <div className="bg-gradient-to-br from-[#A056F7] to-[#3262EC] from-0% to-100% rounded-xl p-8 text-center shadow-md w-full">
                                <h3 className="text-2xl font-extrabold">UNAS FEST 2024</h3>
                                <p className="text-md text-[#D5D4FA] font-bold">Previous Website</p>
                            </div>

                            <p className="text-md text-[#DEC8F8] font-bold mt-4 leading-relaxed">
                                Visit last year’s website to see complete documentation and a gallery of
                                photos from various competitions that have taken place.
                            </p>
                        </div>
                        <Link href="https://unasfest2024.com" target="_blank" rel="noopener noreferrer">
                            <Button className="cursor-pointer mt-6 bg-gradient-to-r from-[#9233EA] from-0% to-[#2C5FEA] to-100% text-white w-full rounded-xl py-4 text-base font-semibold shadow-md hover:opacity-90">
                                Visit UNAS FEST 2024
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="sm:col-start-4 sm:row-start-3 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-6 p-4 bg-[#49258B] border-1 border-[#54279E] text-white rounded-2xl shadow-lg flex items-center">
                    <CardContent className="flex flex-col gap-3">
                        <Trophy className="w-8 h-8 text-yellow-400" />
                        <div>
                            <h3 className="font-bold text-lg">Winners 2024</h3>
                            <p className="text-sm opacity-80">See last year&apos;s winners</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="sm:col-start-4 sm:row-start-4 lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-6 p-4 bg-[#49258B] border-1 border-[#54279E] text-white rounded-2xl shadow-lg flex items-center">
                    <CardContent className="flex flex-col gap-3">
                        <ImageIcon className="w-8 h-8 text-blue-400" />
                        <div>
                            <h3 className="font-bold text-lg">Gallery</h3>
                            <p className="text-sm opacity-80">Event Archive</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </main>
    )
}
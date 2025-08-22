"use client";

import { Activities } from "@/constants/Activities/Activities";
import { EVENTS } from "@/constants/Activities/Timeline";
import { notFound } from "next/navigation";
import { Book, Download, Sparkles, FileText, ClipboardList, Clock, Settings } from "lucide-react";
import { Trophy, Gift, BadgeCheck, Users, Medal, Star, BookOpen, Brain, CheckCircle, Crown } from 'lucide-react';
import Faq from "@/components/shared/Activities/Faq";
import Timeline from "@/components/shared/Activities/Timeline";
import Spark from "@/public/icons/Activities/Sparkles.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/components/ui/shine.css"
import CustomSwiper from "@/components/ui/swiper";
import Judges from "@/components/shared/Activities/Judges";
import {
    Card,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/components/ui/card";

type Props = {
    params: { slug: string };
};

const stats = [
    {
        icon: <Users className="w-6 h-6 text-white" />,
        value: "500+",
        label: "Participants",
        gradient: "from-[#BE85FC] to-[#858BF8]",
    },
    {
        icon: <Trophy className="w-6 h-6 text-white" />,
        value: "500+",
        label: "Prize",
        gradient: "from-[#BE85FC] to-[#858BF8]",
    },
    {
        icon: <Medal className="w-6 h-6 text-white" />,
        value: "3",
        label: "Expert Judge",
        gradient: "from-[#BE85FC] to-[#858BF8]",
    },
    {
        icon: <Star className="w-6 h-6 text-white" />,
        value: "7 Hari",
        label: "Competition",
        gradient: "from-[#BE85FC] to-[#858BF8]",
    },
];

export default function ActivityDetailPage({ params }: Props) {
    const activity = Activities.find((act) => act.path === params.slug);

    if (!activity) return notFound();

    const requirementsData = activity.requirements || [];

    const timelineData =
        EVENTS.find((event) => event.path === params.slug)?.timeline || [];

    return (
        <main>
            <div className="bg-gradient-to-b from-[#3A175D] to-[#4701A3]">
                <div className="flex flex-col items-center justify-center relative">
                    <div className="relative">
                        <h2 className="shine font-bold text-center uppercase text-4xl md:text-6xl lg:text-8xl pt-10 pb-5">
                            {activity.path} 2025
                        </h2>

                        <div className="shine absolute top-3 -right-7 sm:top-5 sm:-right-7">
                            <Image
                                src={Spark}
                                alt="Sparkle"
                                width={60}
                                height={60}
                                className="animate-pulse drop-shadow-lg"
                            />
                        </div>
                    </div>
                    <p className="font-bold text-xl text-center md:text-4xl">{activity.title}</p>
                </div>
                <div className="text-[#EDE2FB] text-center py-4 px-6 flex flex-col md:flex-row justify-center items-center gap-4 text-lg font-semibold">
                    <div className="flex items-center gap-2">
                        <Trophy size={20} /> <span>Prestigious National Event</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center gap-2">
                        <Gift size={20} /> <span>Lots of Prizes</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center gap-2">
                        <BadgeCheck size={20} /> <span>Official Certificate</span>
                    </div>
                </div>

                <div className="rounded-2xl inset-10 bg-gradient-to-r from-[#603791] to-[#49428E] w-full max-w-2xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl h-[600px] flex items-center justify-center mx-auto">
                    <div className="w-full h-[600px] p-5 md:p-10 lg:p-5 flex justify-center items-center">

                        <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-xl border-1 mx-auto border-white/20">

                            <Image
                                src={activity.coverImage}
                                alt={activity.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center pt-10">
                    <div className="w-full max-w-2xs p-8 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl bg-gradient-to-r from-[#603791] to-[#49428E] rounded-2xl shadow-lg text-center text-white border border-purple-600/40">
                        <div className="mb-6 flex justify-center">
                            <div className="flex items-center gap-2 bg-gradient-to-r from-[#A655F7] to-[#6465F1] px-5 py-2 rounded-full text-sm font-semibold transition">
                                <BookOpen className="w-4 h-4" />
                                ABOUT COMPETITION
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            {activity.title}
                        </h2>

                        <p className="text-sm md:text-base text-gray-200 text-justify leading-relaxed max-w-4xl mx-auto mb-10"
                            style={{ textAlignLast: 'center' }}
                        >
                            {activity.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-[#5C46A3] rounded-xl p-6 flex flex-col items-center border border-purple-500/30 hover:bg-purple-600/50 transition">
                                <Brain className="w-10 h-10 mb-4 text-purple-300" />
                                <h3 className="font-semibold mb-2">Analytical Skills</h3>
                                <p className="text-xs text-gray-300">
                                    Developing analytical and critical thinking skills
                                </p>
                            </div>

                            <div className="bg-[#5C46A3] rounded-xl p-6 flex flex-col items-center border border-purple-500/30 transition">
                                <Users className="w-10 h-10 mb-4 text-purple-300" />
                                <h3 className="font-semibold mb-2">Public Speaking</h3>
                                <p className="text-xs text-gray-300">
                                    Improving public speaking skills
                                </p>
                            </div>

                            <div className="bg-[#5C46A3] rounded-xl p-6 flex flex-col items-center border border-purple-500/30 transition">
                                <Medal className="w-10 h-10 mb-4 text-purple-300" />
                                <h3 className="font-semibold mb-2">National Issue</h3>
                                <p className="text-xs text-gray-300">
                                    Understanding Current National Issues
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-2xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto pb-5 pt-10 sm:pb-15 md:pb-25">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-[#573B91] rounded-xl shadow-lg p-6 flex flex-col items-center text-white"
                            >
                                <div
                                    className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${stat.gradient} mb-4`}
                                >
                                    {stat.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{stat.value}</h3>
                                <p className="text-sm opacity-80">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Card
                    id="requirements"
                    className="container relative mx-auto overflow-hidden rounded-none pb-2 text-center"
                >
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
                            <CheckCircle className="w-4 h-4" />
                            COMPETITION REQUIREMENTS
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                        READY TO BE A{" "}
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                            CHAMPION?
                        </span>
                    </h2>
                    <CardDescription className="mb-6 text-sm font-medium leading-normal tracking-wide text-[#E4D1FC] lg:text-xl">
                        Make sure you meet all the requirements to join {activity.title}
                    </CardDescription>
                    <CardContent className="p-0 pb-2 md:p-6">
                        <CustomSwiper
                            requirements={requirementsData.map((req) => req.detail)}
                        />
                    </CardContent>
                </Card>

                <section className="flex items-center justify-center py-16 px-6">
                    <div className="max-w-2xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto w-full text-center bg-gradient-to-r from-[#532898] to-[#582B7B] rounded-2xl p-10 shadow-lg border-1 border-[#806DB2] relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-[#FAC718] to-[#FA9639] rounded-full flex items-center justify-center shadow-lg">
                            <Book className="w-10 h-10 text-purple-900" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                            <span className="bg-gradient-to-r from-[#FACA18] from-0% to-[#F474B1] to-40% text-transparent bg-clip-text">
                                DOWNLOAD
                            </span>{" "}
                            GUIDEBOOK
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm font-medium mb-10">
                            <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#E8D4FF]" />
                                Complete Guide
                            </div>
                            <span className="hidden sm:block">•</span>
                            <div className="flex items-center gap-2">
                                <ClipboardList className="w-5 h-5 text-[#E8D4FF]" />
                                Complete Terms
                            </div>
                            <span className="hidden sm:block">•</span>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-[#E8D4FF]" />
                                Complete Schedule
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="rounded-xl border-1 border-[#8E67B8] bg-[#7240A6] p-6">
                                <Settings className="w-10 h-10 mx-auto mb-3 text-white/80" />
                                <h3 className="font-bold text-white text-lg">Technique</h3>
                                <p className="text-white text-sm">Debating Techniques</p>
                            </div>

                            <div className="rounded-xl border-1 border-[#8E67B8] bg-[#7240A6] p-6">
                                <FileText className="w-10 h-10 mx-auto mb-3 text-white/80" />
                                <h3 className="font-bold text-white text-lg">Rules</h3>
                                <p className="text-white text-sm">Official Rules</p>
                            </div>

                            <div className="rounded-xl border-1 border-[#8E67B8] bg-[#7240A6] p-6">
                                <ClipboardList className="w-10 h-10 mx-auto mb-3 text-white/80" />
                                <h3 className="font-bold text-white text-lg">Assessment</h3>
                                <p className="text-white text-sm">Assessment Criteria</p>
                            </div>
                        </div>
                        <Link href={activity.guideBook} download={activity.guideBookName}>
                            <button className="mx-auto flex items-center justify-center gap-3 px-3 py-2 sm:px-8 sm:py-4 bg-gradient-to-r from-[#FACA16] to-[#FB943A] text-black font-bold rounded-lg shadow-lg hover:bg-white hover:bg-none cursor-pointer transition">
                                <Download className="w-6 h-6" />
                                DOWNLOAD NOW
                                <Sparkles className="w-6 h-6" />
                            </button>
                        </Link>
                    </div>
                </section>
                <div>
                    <Timeline events={timelineData} />
                </div>

                <section className="flex flex-col items-center justify-center max-w-2xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto w-full text-center p-8 pt-10 md:pt-20">
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#22C460] to-[#3A83F3] shadow-md">
                            <Crown className="w-4 h-4" />
                            EXPERT JURY TEAM
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                        THE DEBATE{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            EXPERTS
                        </span>
                    </h2>

                    <p className="text-[#E5D1FC] text-sm md:text-base">
                        Assessed directly by leading experts and practitioners in the field of
                        debate and communication
                    </p>
                </section>
                <div className="px-4">
                    <Judges judgesData={activity.judgesData || []} />
                </div>
                <div>
                    <Faq slug={params.slug} />
                </div>
            </div>

            <div className="flex items-center justify-center min-h-[60vh] bg-gradient-to-b from-[#4701A3] to-[#000138] pt-20 pb-10 md:pb-30 px-6">
                <div className="w-full max-w-3xl mx-auto text-center bg-gradient-to-r from-[#804FB2] from-0% to-[#493CAE] to-100% p-10 rounded-2xl shadow-lg">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                        <span className="bg-gradient-to-r from-[#FBC21C] from-0% to-[#EC8C3C] to-100% bg-clip-text text-transparent">READY TO BE A CHAMPION?</span>
                    </h1>

                    <p className="text-white font-medium mb-6">
                        Register now and prove your debating skills!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 rounded-md font-bold bg-gradient-to-r from-[#FACB16] to-[#FB933C] text-black hover:bg-white hover:bg-none cursor-pointer transition">
                            REGISTER NOW
                        </button>
                        <button className="px-6 py-3 rounded-md font-medium text-white bg-gradient-to-r from-[#4E2185] to-[#362C7E] from-0% to-100% hover:bg-white hover:bg-none hover:text-black cursor-pointer transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
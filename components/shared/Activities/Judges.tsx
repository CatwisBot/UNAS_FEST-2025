import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { activitiesData } from "@/lib/types/Activities/Activities";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerPortal,
    DrawerOverlay,
} from "@/components/ui/drawer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "@/hooks/MediaQuery";
import { GraduationCap, MapPin } from "lucide-react";

interface judgesProps {
    judgesData: activitiesData["judgesData"];
}

const paginationStyle = `
  .custom-pagination .swiper-pagination-bullet {
  width: 20px;
  height: 12px;
  background: white;
  border-radius: 4px;
  transition: all 0.3s;
  }
  
  .custom-pagination .swiper-pagination-bullet-active {
  width: 28px;
  background: #2991E0;
}
`;

const Judges: React.FC<judgesProps> = ({ judgesData }) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    if (isDesktop) {
        return (
            <div className="relative w-full py-8">
                <div className="flex items-center justify-center gap-4 px-4">
                    {judgesData.map((judge, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-300 ${index === activeIndex
                                ? "z-10"
                                : "z-0 opacity-100 hover:opacity-100"
                                }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <Card
                                className={`lg:w-[280px] xl:w-[300px] h-[420px] border-none rounded-xl shadow-md transition-all ${index === activeIndex ? "bg-[#4A428E] shadow-lg" : "bg-[#4A428E]"
                                    }`}
                            >
                                <div className="absolute top-0 right-0 w-15 h-15 bg-[#654E9D] rounded-bl-3xl"></div>
                                <CardContent className="flex flex-col items-center text-center p-6 h-full">
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src={judge.image}
                                            alt={judge.name}
                                            width={80}
                                            height={80}
                                            className="w-20 h-20 rounded-full border-4 border-purple-500 object-cover"
                                        />
                                    </div>

                                    <h1 className="text-lg font-bold text-white">{judge.name}</h1>

                                    <div className="mt-2 space-y-1 text-sm text-gray-200 mb-6">
                                        <p className="flex items-center justify-center gap-2">
                                            <GraduationCap className="w-4 h-4" />
                                            {judge.lastEducation}
                                        </p>
                                        <p className="flex items-center justify-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {judge.lastEducation}
                                        </p>
                                    </div>

                                    <div className="mt-auto w-full space-y-3">
                                        <button className="w-full py-2 rounded-lg font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500">
                                            {judge.name}
                                        </button>
                                        <Drawer>
                                            <DrawerTrigger asChild>
                                                <button className="w-full py-2 rounded-lg font-medium text-yellow-300 bg-transparent border border-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                                                    See More
                                                </button>
                                            </DrawerTrigger>
                                            <DrawerContent className="max-h-[70vh] text-black overflow-y-auto scrollbar-hide">
                                                <div className="relative flex flex-wrap justify-center gap-5 md:flex-nowrap">
                                                    <Image
                                                        src={judge.image}
                                                        alt={judge.name}
                                                        width={300}
                                                        height={400}
                                                        className="h-[250px] w-[200px] object-cover md:ml-12 md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[400px]"
                                                    />
                                                    <div className="z-10 my-auto text-center sm:text-black md:ml-20 md:space-y-4 md:p-4 md:text-start md:text-white">
                                                        <h1 className="font-semibold sm:text-lg md:w-[500px] md:text-5xl">
                                                            {judge.name}
                                                        </h1>
                                                        <p className="w-96 font-medium md:text-lg">
                                                            {judge.lastEducation}
                                                        </p>
                                                    </div>
                                                    <div className="absolute -z-10 h-72 w-full transform self-center bg-[#1F1E23] sm:hidden md:inline-block" />
                                                </div>
                                                <div className="relative z-50 mx-auto sm:w-[90%] sm:pt-10 md:w-[80%] md:pt-20">
                                                    <div className="flex flex-wrap">
                                                        <h1 className="w-full text-center text-2xl text-black font-semibold uppercase md:w-1/2 md:text-start">
                                                            Summary
                                                        </h1>
                                                        <p className="w-full sm:mt-5 md:w-1/2 md:text-lg text-black">
                                                            {judge.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-wrap pt-14">
                                                        <h1 className="w-full text-2xl text-black font-semibold uppercase sm:text-center md:w-1/2 md:text-start">
                                                            Education
                                                        </h1>
                                                        <p className="w-full font-bold text-black sm:mt-5 md:w-1/2 md:text-lg">
                                                            {judge.lastEducation}
                                                        </p>
                                                    </div>
                                                    {judge.achievements &&
                                                        judge.achievements.length > 0 && (
                                                            <div className="flex flex-wrap pt-14">
                                                                <h1 className="w-full text-2xl font-semibold text-black uppercase sm:text-center md:w-1/2 md:text-start">
                                                                    Achievements
                                                                </h1>
                                                                <ul className="mt-5 w-full list-inside list-disc text-black md:w-1/2">
                                                                    {judge.achievements.map((achievement, i) => (
                                                                        <li
                                                                            className="sm:mb-2 md:mb-5 md:text-lg text-black"
                                                                            key={i}
                                                                        >
                                                                            {achievement}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                </div>
                                            </DrawerContent>
                                        </Drawer>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <>
            <style>{paginationStyle}</style>
            <div className="relative w-full py-8">
                <Swiper
                    slidesPerView="auto"
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    spaceBetween={12}
                    slidesOffsetBefore={16}
                    slidesOffsetAfter={16}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    modules={[Pagination]}
                    onSwiper={(s) => s.slideTo(0, 1)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    breakpoints={{
                        640: {
                            initialSlide: 1,
                            spaceBetween: 20,
                            slidesOffsetBefore: 32,
                            slidesOffsetAfter: 32,
                        },
                    }}
                    className="mySwiper"
                >
                    {judgesData.map((judge, index) => (
                        <SwiperSlide key={index} className="custom-slide">
                            <Card
                                className={`lg:w-[280px] xl:w-[300px] h-[420px] border-none rounded-xl shadow-md transition-all ${index === activeIndex ? "bg-[#4A428E] shadow-lg" : "bg-[#4A428E]"
                                    }`}
                            >
                                <div className="absolute top-0 right-0 w-15 h-15 bg-[#654E9D] rounded-bl-3xl"></div>
                                <CardContent className="flex flex-col items-center text-center p-6 h-full">
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src={judge.image}
                                            alt={judge.name}
                                            width={80}
                                            height={80}
                                            className="w-20 h-20 rounded-full border-4 border-purple-500 object-cover"
                                        />
                                    </div>

                                    <h1 className="text-lg font-bold text-white">{judge.name}</h1>

                                    <div className="mt-2 space-y-1 text-sm text-gray-200 mb-6">
                                        <p className="flex items-center justify-center gap-2">
                                            <GraduationCap className="w-4 h-4" />
                                            {judge.lastEducation}
                                        </p>
                                        <p className="flex items-center justify-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {judge.lastEducation}
                                        </p>
                                    </div>

                                    <div className="mt-auto w-full space-y-3">
                                        <button className="w-full py-2 rounded-lg font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500">
                                            {judge.name}
                                        </button>
                                        <Drawer>
                                            <DrawerTrigger asChild>
                                                <button className="w-full py-2 rounded-lg font-medium text-yellow-300 bg-transparent border border-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                                                    See More
                                                </button>
                                            </DrawerTrigger>
                                            <DrawerContent className="max-h-[70vh] text-black overflow-y-auto scrollbar-hide">
                                                <div className="relative flex flex-wrap justify-center gap-5 md:flex-nowrap">
                                                    <Image
                                                        src={judge.image}
                                                        alt={judge.name}
                                                        width={300}
                                                        height={400}
                                                        className="h-[250px] w-[200px] object-cover md:ml-12 md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[400px]"
                                                    />
                                                    <div className="z-10 my-auto text-center sm:text-black md:ml-20 md:space-y-4 md:p-4 md:text-start md:text-white">
                                                        <h1 className="font-semibold sm:text-lg md:w-[500px] md:text-5xl">
                                                            {judge.name}
                                                        </h1>
                                                        <p className="w-96 font-medium md:text-lg">
                                                            {judge.lastEducation}
                                                        </p>
                                                    </div>
                                                    <div className="absolute -z-10 h-72 w-full transform self-center bg-[#1F1E23] sm:hidden md:inline-block" />
                                                </div>
                                                <div className="relative z-50 mx-auto sm:w-[90%] sm:pt-10 md:w-[80%] md:pt-20">
                                                    <div className="flex flex-wrap">
                                                        <h1 className="w-full text-center text-2xl text-black font-semibold uppercase md:w-1/2 md:text-start">
                                                            Summary
                                                        </h1>
                                                        <p className="w-full sm:mt-5 md:w-1/2 md:text-lg text-black">
                                                            {judge.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-wrap pt-14">
                                                        <h1 className="w-full text-2xl text-black font-semibold uppercase sm:text-center md:w-1/2 md:text-start">
                                                            Education
                                                        </h1>
                                                        <p className="w-full font-bold text-black sm:mt-5 md:w-1/2 md:text-lg">
                                                            {judge.lastEducation}
                                                        </p>
                                                    </div>
                                                    {judge.achievements &&
                                                        judge.achievements.length > 0 && (
                                                            <div className="flex flex-wrap pt-14">
                                                                <h1 className="w-full text-2xl font-semibold text-black uppercase sm:text-center md:w-1/2 md:text-start">
                                                                    Achievements
                                                                </h1>
                                                                <ul className="mt-5 w-full list-inside list-disc text-black md:w-1/2">
                                                                    {judge.achievements.map((achievement, i) => (
                                                                        <li
                                                                            className="sm:mb-2 md:mb-5 md:text-lg text-black"
                                                                            key={i}
                                                                        >
                                                                            {achievement}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                </div>
                                            </DrawerContent>
                                        </Drawer>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
            </div>
        </>
    );
};

export default Judges;
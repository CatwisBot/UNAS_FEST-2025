import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Judge } from "@/lib/types/Activities/Activities";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "@/hooks/MediaQuery";
import { GraduationCap, MapPin } from "lucide-react";

interface JudgesProps {
  judgesData: Judge[];
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

const Judges: React.FC<JudgesProps> = ({ judgesData }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return (
      <div className="relative w-full py-8">
        <div className="flex items-stretch justify-center gap-4 px-4">
          {judgesData.map((judge, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === activeIndex
                  ? "z-10"
                  : "z-0 opacity-100 hover:opacity-100"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Card
                className={`lg:w-[280px] xl:w-[300px] h-[520px] border-none rounded-xl shadow-md transition-all ${
                  index === activeIndex
                    ? "bg-[#4A428E] shadow-lg"
                    : "bg-[#4A428E]"
                }`}
              >
                <div className="absolute top-0 right-0 w-15 h-15 bg-[#654E9D] rounded-bl-3xl"></div>
                <CardContent className="flex flex-col items-center text-center p-6 h-full">
                  {/* Header Section - Fixed Height */}
                  <div className="flex-shrink-0 mb-4">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={judge.image}
                        alt={judge.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full border-4 border-purple-500 object-cover"
                      />
                    </div>
                    <h1 className="text-lg font-bold text-white mb-2">
                      {judge.name}
                    </h1>
                  </div>

                  {/* Education Section - Fixed Height */}
                  <div className="flex-shrink-0 mb-6 h-[80px] flex flex-col justify-center">
                    <p className="flex items-center justify-center gap-2 text-sm text-gray-200 mb-2">
                      <GraduationCap className="w-4 h-4 flex-shrink-0" />
                      <span className="line-clamp-2 text-xs leading-tight max-w-[200px]">
                        {judge.lastEducation}
                      </span>
                    </p>
                    <p className="flex items-center justify-center gap-2 text-sm text-gray-200">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="line-clamp-2 text-xs leading-tight max-w-[200px]">
                        {judge.school}
                      </span>
                    </p>
                  </div>

                  {/* Buttons Section - Fixed Height at Bottom */}
                  <div className="mt-auto w-full space-y-3 flex-shrink-0">
                    <button className="w-full py-2 px-3 rounded-lg font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 text-sm truncate">
                      {judge.role}
                    </button>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <button className="w-full py-2 px-4 rounded-lg font-semibold text-yellow-300 border border-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out text-sm shadow">
                          See More
                        </button>
                      </DrawerTrigger>

                      <DrawerContent className="bg-[#4701A3] border-none">
                        <DrawerHeader className="pb-6">
                          <DrawerTitle className="text-2xl md:text-3xl font-bold text-white">
                            {judge.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-base text-white">
                            {judge.lastEducation}
                          </DrawerDescription>
                        </DrawerHeader>

                        <div className="px-6 pb-10 overflow-y-auto scrollbar-hide space-y-12">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="w-full flex justify-center"
                          >
                            <Image
                              src={judge.image}
                              alt={judge.name}
                              width={400}
                              height={500}
                              className="rounded-2xl object-cover shadow-lg max-h-[400px] w-auto"
                            />
                          </motion.div>

                          <section>
                            <h2 className="text-xl font-semibold text-white uppercase tracking-wide mb-2">
                              Summary
                            </h2>
                            <p className="text-white leading-relaxed text-base">
                              {judge.description || "No summary available."}
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-white uppercase tracking-wide mb-2">
                              Education
                            </h2>
                            <p className="text-white font-medium text-base">
                              {judge.lastEducation}
                            </p>
                          </section>

                          {judge.achievements &&
                            judge.achievements.length > 0 && (
                              <section>
                                <h2 className="text-xl font-semibold text-white uppercase tracking-wide mb-2">
                                  Achievements
                                </h2>
                                <ul className="list-disc list-inside space-y-2 text-white text-base">
                                  {judge.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </section>
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
                className={`lg:w-[280px] xl:w-[300px] h-[520px] border-none rounded-xl shadow-md transition-all ${
                  index === activeIndex
                    ? "bg-[#4A428E] shadow-lg"
                    : "bg-[#4A428E]"
                }`}
              >
                <div className="absolute top-0 right-0 w-15 h-15 bg-[#654E9D] rounded-bl-3xl"></div>
                <CardContent className="flex flex-col items-center text-center p-6 h-full">
                  {/* Header Section - Fixed Height */}
                  <div className="flex-shrink-0 mb-4">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={judge.image}
                        alt={judge.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full border-4 border-purple-500 object-cover"
                      />
                    </div>
                    <h1 className="text-lg font-bold text-white mb-2">
                      {judge.name}
                    </h1>
                  </div>

                  {/* Education Section - Fixed Height */}
                  <div className="flex-shrink-0 mb-6 h-[80px] flex flex-col justify-center">
                    <p className="flex items-center justify-center gap-2 text-sm text-gray-200 mb-2">
                      <GraduationCap className="w-4 h-4 flex-shrink-0" />
                      <span className="line-clamp-2 text-xs leading-tight max-w-[200px]">
                        {judge.lastEducation}
                      </span>
                    </p>
                    <p className="flex items-center justify-center gap-2 text-sm text-gray-200">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="line-clamp-2 text-xs leading-tight max-w-[200px]">
                        {judge.school}
                      </span>
                    </p>
                  </div>

                  {/* Buttons Section - Fixed Height at Bottom */}
                  <div className="mt-auto w-full space-y-3 flex-shrink-0">
                    <button className="w-full py-2 px-3 rounded-lg font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 text-sm truncate">
                      {judge.role}
                    </button>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <button className="w-full py-2 px-4 rounded-lg font-semibold text-yellow-300 border border-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out text-sm shadow">
                          See More
                        </button>
                      </DrawerTrigger>

                      <DrawerContent className="bg-[#4701A3] border-none">
                        <DrawerHeader className="pb-6">
                          <DrawerTitle className="text-2xl md:text-3xl font-bold text-white">
                            {judge.name}
                          </DrawerTitle>
                          <DrawerDescription className="text-base text-white">
                            {judge.lastEducation}
                          </DrawerDescription>
                        </DrawerHeader>

                        <div className="px-6 pb-10 overflow-y-auto scrollbar-hide space-y-12">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="w-full flex justify-center"
                          >
                            <Image
                              src={judge.image}
                              alt={judge.name}
                              width={400}
                              height={500}
                              className="rounded-2xl object-cover shadow-lg max-h-[400px] w-auto"
                            />
                          </motion.div>

                          <section>
                            <h2 className="text-xl font-semibold text-white uppercase tracking-wide mb-2">
                              Summary
                            </h2>
                            <p className="text-white leading-relaxed text-base">
                              {judge.description || "No summary available."}
                            </p>
                          </section>

                          <section>
                            <h2 className="text-xl font-semibold text-white uppercase tracking-wide mb-2">
                              Education
                            </h2>
                            <p className="text-white font-medium text-base">
                              {judge.lastEducation}
                            </p>
                          </section>

                          {judge.achievements &&
                            judge.achievements.length > 0 && (
                              <section>
                                <h2 className="text-xl font-semibold text-white uppercase tracking-wide mb-2">
                                  Achievements
                                </h2>
                                <ul className="list-disc list-inside space-y-2 text-white text-base">
                                  {judge.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </section>
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

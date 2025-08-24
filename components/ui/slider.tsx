"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { MoveRight, MoveLeft } from "lucide-react";
import { Dialog } from "@radix-ui/react-dialog";

type Prop = {
  index: number | undefined;
  detail: string | undefined;
};

type Props = Prop[];

type PropsTypes = {
  props: Props;
};

const MissionsSlider: React.FC<PropsTypes> = ({ props }) => {
  return (
    <div className="relative px-4 md:px-6 lg:px-8">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        breakpoints={{
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 24,
          },
          1024: {
            spaceBetween: 28,
          },
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet: (index, className) => {
            return `<span class="${className}" data-index="${index}"></span>`;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="!overflow-visible"
      >
        {props.map((prop) => (
          <SwiperSlide
            key={prop.index}
            className="!w-[250px] sm:!w-[360px] md:!w-[440px] lg:!w-[500px] xl:!w-[550px]"
          >
            <Dialog>
              <div className="relative h-full">
                <Card className="flex h-full min-h-[350px] w-full flex-col justify-start gap-y-1 rounded-lg active:cursor-grabbing bg-gradient-to-b from-[#4B2A96] to-[#393195] from-0% to-100%  p-6 text-white shadow-md transition-all hover:shadow-lg md:gap-y-4 md:p-8 lg:min-h-[400px]">
                  <CardContent className="flex flex-col gap-y-3 p-0 text-left md:gap-y-4">
                    <h1 className="text-4xl font-semibold md:text-5xl">
                      0{prop.index}
                    </h1>
                  </CardContent>
                  <CardContent className="p-0">
                    <p className="text-justify text-[13px] font-medium md:text-base lg:text-lg">
                      {prop.detail}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Dialog>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute -bottom-12 left-4 z-10 flex h-12 items-center gap-2 md:left-6 lg:left-8">
        <div className="swiper-button-prev cursor-pointer rounded-sm p-2 transition-all hover:scale-105">
          <MoveLeft className="h-5 w-5 text-white md:h-6 md:w-6" />
        </div>
        <div className="custom-pagination flex items-center gap-2" />
        <div className="swiper-button-next cursor-pointer rounded-sm p-2 transition-all hover:scale-105">
          <MoveRight className="h-5 w-5 text-white md:h-6 md:w-6" />
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 15px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 1px;
          cursor: pointer;
          border-radius: 5px;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #ffffff;
          width: 30px;
          height: 10px;
          border-radius: 5px;
        }

        @media (min-width: 768px) {
          .custom-pagination .swiper-pagination-bullet {
            width: 24px;
            height: 12px;
          }

          .custom-pagination .swiper-pagination-bullet-active {
            width: 36px;
            height: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default MissionsSlider;
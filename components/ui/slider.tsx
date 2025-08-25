"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { MoveRight, MoveLeft } from "lucide-react";

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
          1280: {
            slidesPerView: 4, 
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
          <SwiperSlide key={prop.index} className="!w-[250px] sm:!w-[300px] md:!w-[340px] lg:!w-[400px] xl:!w-1/4">
            <div className="relative h-full flex flex-col items-center text-white text-center p-2">
              <div className="relative w-full h-10 flex items-center justify-center">
                <div className="absolute w-full h-px bg-white top-1/2 left-0 right-0"></div>
                <div className="absolute z-10 w-8 h-8 flex items-center justify-center rounded-full border border-white bg-[#040D30]">
                  <span className="text-sm font-bold">0{prop.index}</span>
                </div>
              </div>
              <p className="mt-8 text-sm md-5 md:text-base font-medium">
                {prop.detail}
              </p>
            </div>
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
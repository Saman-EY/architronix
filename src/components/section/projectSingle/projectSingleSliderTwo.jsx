"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";

import RightArrow from "@/assets/icons/rightArrow";
import ButtonFill from "@/components/ui/buttons/buttonFill";
import { staticBluarDataUrl } from "@/lib/staticBluarDataUrl";

const projectImg = [
  {
    id: 1,
    img: "/theLast.PNG",
  },
  {
    id: 2,
    img: "/service-top.jpg",
  },
  {
    id: 3,
    img: "/card4.PNG",
  },
  {
    id: 4,
    img: "/card5.PNG",
  },
];
const ProjectSingleSliderTwo = () => {
  const swiperRef = useRef();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container">
      <div className="relative">
        <Swiper
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
          modules={[FreeMode, Navigation, Thumbs]}
          className=""
        >
          {projectImg?.map(({ id, img }) => {
            return (
              <SwiperSlide key={id}>
                <Image
                  src={img}
                  loading="lazy"
                  placeholder="blur"
                  width={500}
                  height={500}
                  blurDataURL={staticBluarDataUrl}
                  alt="img"
                  className="w-full h-full max-h-[720px] object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute top-1/2 -translate-y-1/2 z-10 w-full flex justify-between items-center gap-5">
          <div onClick={() => swiperRef.current?.slidePrev()}>
            <ButtonFill className="rotate-180 2sm:h-[90px] h-10 2sm:w-[90px] w-10 2sm:px-6 px-1.5 after:bg-secondary border-secondary hover:border-primary text-primary-foreground hover:text-secondary-foreground hover:bg-primary">
              <RightArrow width={"35"} height={"22"} />
            </ButtonFill>
          </div>
          <div onClick={() => swiperRef.current?.slideNext()}>
            <ButtonFill className="2sm:h-[90px] h-10 2sm:w-[90px] w-10 2sm:px-6 px-1.5 border-secondary hover:border-primary after:bg-secondary text-primary-foreground hover:text-secondary-foreground hover:bg-primary">
              <RightArrow width={"35"} height={"22"} />
            </ButtonFill>
          </div>
        </div>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={27}
        speed={500}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          750: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1320: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-[35px]"
      >
        {projectImg?.map(({ id, img }) => {
          return (
            <SwiperSlide key={id}>
              <Image
                src={img}
                loading="lazy"
                placeholder="blur"
                blurDataURL={staticBluarDataUrl}
                alt="img"
                width={500}
                height={500}
                className="w-full lg:min-h-[250px] object-cover min-h-[100px] max-h-[100px] h-full "
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProjectSingleSliderTwo;

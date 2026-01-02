"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";

import QuoteIcon from "@/assets/icons/quoteIcon";
import SectionTitle from "../ui/sectionTitle";
import ProgressAndNatigation from "../ui/progressAndNatigation";
import { cn } from "@/lib/utils";

const testimonialData = [
  {
    id: 1,
    name: "Premium design. World-class living.",
    position: "DARGLOBAL PLC COMPANY",
    review:
      "DarGlobal is a leading real estate developer. But we’re much more than that. We’re a strategic investment partner, creating lucrative opportunities for our clients, and catalyzing economic transformation in the countries we enter.",
  },
  {
    id: 2,
    name: "Premium design. World-class living.",
    position: "DARGLOBAL PLC COMPANY",
    review:
      "DarGlobal isn’t your typical luxury developer. We’re reimagining what it means to live well, by investing wisely. We specialize in delivering artfully designed residences in cosmopolitan destinations, for global citizens looking for an elevated quality of life—and a high return on investment. ",
  },
  {
    id: 3,
    name: "Premium design. World-class living.",
    position: "DARGLOBAL PLC COMPANY",
    review:
      "Our projects elevate the places where they’re located. Each enhances local infrastructure, increases international appeal, and stimulates Foreign Direct Investment (FDI). All while offering exceptional experiences and growing our investors’ wealth.",
  },
];
const Testimonial = ({ text_muted, bg_muted }) => {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination",
    type: "progressbar",
  };
  return (
    <section className="pt-20">
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"GULF DOM "}
          sectionTitle={"OUR PROJECTS"}
          sectionDesc={"ESCAPES THAT COME WITH RETURNS"}
          bg_muted={bg_muted}
          text_muted={text_muted}
        />

        <div className="lg:pt-30 2sm:pt-20 pt-14">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 3,
              },
            }}
            pagination={pagination}
            loop={true}
            modules={[Pagination, Navigation]}
            className=""
          >
            {testimonialData.map(({ id, name, position, review }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="flex md:gap-6 gap-2">
                    <div className="text-secondary-foreground">
                      <QuoteIcon />
                    </div>
                    <div className="mt-16">
                      <p className={cn(`text-lg text-primary-foreground ${text_muted}`)}>{review}</p>
                      <div className="relative after:absolute after:-left-5 after:top-0 after:w-[1px] after:h-full after:bg-primary ml-5 mt-6">
                        <h5 className={cn(`text-primary-foreground font-extrabold leading-160 text-lg ${text_muted}`)}>
                          {name}
                        </h5>
                        <p className={cn(`text-primary-foreground font-medium ${text_muted}`)}>{position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="container">
              <ProgressAndNatigation />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

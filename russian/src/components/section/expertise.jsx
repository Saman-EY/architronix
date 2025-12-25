"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../ui/sectionTitle";
import expertise_bg from "@/assets/images/expertise.jpg";
import Title from "../ui/title";
import { cardSlideAnimation } from "@/lib/utils";
import SectionSidebarImg from "../ui/sectionSidebarImg";

const skillList = [
  {
    id: 1,
    skill_name: "АНАЛИЗ РЫНКА",
    achive: "95%",
  },
  {
    id: 2,
    skill_name: "ЮРИДИЧЕСКОЕ СОПРОВОЖДЕНИЕ",
    achive: "100%",
  },
  {
    id: 3,
    skill_name: "ПЕРЕГОВОРЫ С ЗАСТРОЙЩИКОМ",
    achive: "90%",
  },
  {
    id: 4,
    skill_name: "ВИЗОВАЯ ПОДДЕРЖКА",
    achive: "98%",
  },
];
const Expertise = () => {
  return (
    <section className="mt-20">
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"GULF DOM"}
          sectionTitle={"ИСКУССТВО ИНВЕСТИЦИЙ В НЕДВИЖИМОСТЬ"}
          sectionDesc={"ГДЕ ЭКСПЕРТИЗА ВСТРЕЧАЕТСЯ С РЕЗУЛЬТАТОМ"}
        />
        <div className="lg:mt-30 2sm:mt-20 mt-14 bg-secondary">
          <div className="flex lg:flex-row flex-col items-center gap-15 ">
            <div>
              <SectionSidebarImg
                img={"/service-detail.jpg"}
                section_name={"Expertise-bg"}
                className={"w-full h-full"}
              />
            </div>
            <div className="px-3  py-7 max-w-[609px] w-full">
              <Title title_text={"НАША ЭКСПЕРТИЗА"} className={"2xl:mb-20 mb-14 "} />
              <div className="">
                {skillList.map(({ id, achive, skill_name }) => {
                  return (
                    <div key={id} className="bg-primary_rgba relative h-[1px] w-full mt-16 ">
                      <div
                        className={`bg-primary absolute -top-[2.5px] left-0 h-[5px]`}
                        style={{ width: achive, transition: "width 1s ease-in-out" }}
                      >
                        <span className="absolute text-xs sm:text-base left-0 bottom-full mb-2 font-semibold text-primary-foreground">
                          {skill_name}
                        </span>
                        <span className="absolute -right-0 bottom-full mb-2 font-semibold text-primary-foreground">
                          {achive}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

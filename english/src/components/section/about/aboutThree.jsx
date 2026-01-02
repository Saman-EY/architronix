"use client";
import SectionTitle from "../../ui/sectionTitle";
import { useInView } from "react-intersection-observer";
import SectionSidebarImg from "@/components/ui/sectionSidebarImg";

const aboutList = [
  {
    id: "01",
    item: "GOAL SETTING & ANALYSIS",
    item_desc:
      "We begin by understanding your objectives—investment, residency, or personal use. Our team conducts a thorough market and project analysis to align opportunities with your vision.",
  },
  {
    id: "02",
    item: "SELECTION & FINANCING STRATEGY",
    item_desc:
      "We curate the ideal property, negotiate directly with the developer, and design a flexible payment plan (installments, mortgage, or lump-sum payment) to suit your financial strategy.",
  },
  {
    id: "03",
    item: "TRANSACTION & AFTER-SALE CARE",
    item_desc:
      "We manage the entire legal process, visa facilitation, and property management—ensuring a smooth transition and ongoing returns through rental and resale services.",
  },
];
const AboutThree = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.0,
    triggerOnce: true,
  });
  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle
          sectionName={"DAR GLOBAL"}
          sectionTitle={"EXCLUSIVE ACCESS TO DEVELOPER PRICING PERSONALIZED SERVICE AT EVERY STEP"}
          sectionDesc={
            "We partner directly with Dar Global to provide you with privileged access to their premium portfolio. From initial consultation to post-sale management, we ensure a seamless, transparent, and tailor-made experience for every investor."
          }
        />
        <div className={`bg-primary 2xl:mt-[220px] lg:mt-25 md:mt-44 mt-5 `}>
          <div className="container">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[66px]">
              <div className="2xl:-mt-25 md:mt-4 ">
                <SectionSidebarImg imgClass={"h-[500px] md:h-full"} img={"/about.jpg"} section_name={"about-bg"} />
              </div>
              <div className="max-w-[650px]  lg:pb-0 pb-10">
                <h2 className="text-secondary-foreground lg:text-5xl text-[27px] font-bold leading-120 max-w-[500px]">
                  INVESTOR JOURNEY: OUR PROCESS
                </h2>
                <ul className="pt-10 ">
                  {aboutList.map(({ id, item, item_desc }) => {
                    return (
                      <li key={id} className="lg:flex gap-10 pb-10 last:pb-0 justify-between ">
                        <svg
                          ref={ref}
                          strokeWidth="1"
                          className={`h-[65px]   relative -top-1 left-0 xl:text-6xl text-5xl mb-3 lg:mb-0 inline-block font-extrabold leading-120 ${
                            inView
                              ? "animate-text-line-animation stroke-secondary stroke-dasharray-1000 stroke-dashoffset-1000"
                              : "fill-transparent stroke-secondary"
                          } `}
                        >
                          <text className="" x="0%" dominantBaseline="middle" y="70%">
                            {id}
                          </text>
                        </svg>
                        <div className="max-w-[520px]">
                          <h4 className="text-2xl sm:text-4xl font-bold leading-135 text-secondary-foreground pb-1.5">
                            {item}
                          </h4>
                          <p className="text-lg text-secondary-foreground font-normal">{item_desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;

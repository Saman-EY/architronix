import Link from "next/link";
import RightArrow from "@/assets/icons/rightArrow";
import SectionTitle from "../ui/sectionTitle";
import { cn } from "@/lib/utils";
import ButtonOutline from "../ui/buttons/buttonOutline";
import VideoSec from "./VideoSec";

const VideoPortfolio = ({ text_muted, bg_muted, after_bg_muted }) => {
  return (
    <section className="pt-20">
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"GULF DOM "}
          sectionTitle={"КОМПАНИЯ-ПАРТНЕР: DAR GLOBAL PLC"}
          sectionDesc={"МИРОВЫЕ ПРОЕКТЫ ПРЕМИУМ-КЛАССА С 2017 ГОДА"}
          bg_muted={bg_muted}
          text_muted={text_muted}
        />
      </div>
      <div className="container-fluid lg:pt-30 2sm:pt-20 pt-14">
        <div
          className={cn(
            ` relative after:contents-[""] after:absolute after:left-0 after:top-0 after:max-w-[1320px] after:w-full z-[1] after:h-full after:bg-primary ${after_bg_muted} pt-[90px] pb-[110px]`
          )}
        >
          <div className="container flex lg:flex-row flex-col justify-between relative z-10">
            <div className="2xl:max-w-[637px] lg:max-w-[500px] w-full">
              <h4 className="text-secondary-foreground text-2xl sm:text-4xl font-bold leading-135">
                УЗНАЙТЕ ОБ ЭКСКЛЮЗИВНОМ ПРОЕКТЕ
              </h4>
              <p className="text-secondary-foreground mt-5">
                Посмотрите, как реализуются самые амбициозные проекты в регионе: от концепции до воплощения с мировыми
                брендами.
              </p>
              <ul className="mt-[35px]">
                <li className="text-secondary-foreground flex items-center gap-[27px]">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-lg leading-160 font-bold">УНИКАЛЬНАЯ КОНЦЕПЦИЯ</span>{" "}
                </li>
                <li className="text-secondary-foreground flex items-center gap-[27px] mt-4">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-lg leading-160 font-bold">
                    ПАРТНЕРСТВО С МИРОВЫМИ БРЕНДАМИ
                  </span>{" "}
                </li>
                <li className="text-secondary-foreground flex items-center gap-[27px] mt-4">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-lg leading-160 font-bold">
                    ПРОФЕССИОНАЛЬНОЕ УПРАВЛЕНИЕ
                  </span>{" "}
                </li>
              </ul>
              <Link href={"/project-single"} className="mt-[70px] inline-block">
                <ButtonOutline
                  className={
                    "border-secondary text-base md:text-lg text-secondary-foreground sm:px-10 px-3 after:hover:bg-secondary after:left-0 hover:text-primary-foreground"
                  }
                >
                  УЗНАТЬ ПОДРОБНОСТИ <RightArrow width={"35"} height={"22"} />
                </ButtonOutline>
              </Link>
            </div>
            {/* <VideoPlay img={video_thumb} /> */}
            <VideoSec />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;

import React from "react";
import feedback_bg from "@/assets/images/feedback-image.jpg";
import RightArrow from "@/assets/icons/rightArrow";
import ButtonFill from "../ui/buttons/buttonFill";
import Link from "next/link";
import DownloadBrochurBtn from "./heroes/DownloadBrochurBtn";

const Feedback = () => {
  return (
    <section className="container py-20">
      <div
        className="bg-cover bg-no-repeat lg:pt-[117px] pt-20 pb-[69px] lg:pl-[148px] flex-wrap pl-10 lg:pr-[133px] 2sm:pr-24 pr-10 flex md:flex-row flex-col justify-between md:items-end items-start"
        style={{ backgroundImage: `url("/topFooter.JPG")` }}
      >
        <h1 className="text-[50px] md:text-[100px] font-extrabold leading-110 text-secondary-foreground max-w-[600px]">
          Choose your residence
        </h1>

        <DownloadBrochurBtn>
          <ButtonFill
            className={
              "after:left-0 after:bg-secondary text-primary-foreground text-sm sm:text-2xl border-secondary hover:text-secondary-foreground mt-6 md:mt-0"
            }
          >
            DOWNLOAD BROCHURE <RightArrow width={"35"} height={"22"} />{" "}
          </ButtonFill>
        </DownloadBrochurBtn>
      </div>
    </section>
  );
};

export default Feedback;

"use client";

import Link from "next/link";
import Logo from "@/assets/icons/logo";
import SocialMediaList from "./ui/socialMediaList";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import ProgressAndNatigation from "./ui/progressAndNatigation";
import SwiperNavigation from "./ui/swiperNavigation";

const Data = [
  {
    txt1: "MUSCAT, OMAN",
    txt2: "Royal Opera House Muscat Shatti",
    txt3: "Al Qurum, Muscat, Oman",
    txt4: "",
    email: "Info@gulfdom.com",
  },
  {
    txt1: "DUBAI, UAE",
    txt2: "30th Floor, Jumeirah Emirates Towers,",
    txt3: "Sheikh Zayed Road. Dubai, UAE",
    txt4: "",
    email: "Info@gulfdom.com",
  },
  {
    txt1: "DOHA, QATAR",
    txt2: "Malibu Building, Lusail Entertainment",
    txt3: "City, Doha, Qatar",
    txt4: "",
    email: "Info@gulfdom.com",
  },
  {
    txt1: "JEDDAH, KSA",
    txt2: "Ash Shati, 23613, King Abdulaziz Road,",
    txt3: "Jeddah, KSA",
    txt4: "",
    email: "Info@gulfdom.com",
  },
];

const Footer = () => {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination",
    type: "progressbar",
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" container-fluid  mx-auto ">
      <div className=" bg-secondary ">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-around items-start pt-[100px] pb-20">
            <div className="w-full ">
              <Link href={"/"} className="text-primary-foreground">
                <span className="text-primary font-bold text-4xl">OUR OFFICES</span>
              </Link>
              <h5 className="xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3">
                DarGlobal isn’t your typical luxury developer.
              </h5>
            </div>

            <Swiper
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                760: {
                  slidesPerView: 2,
                },
                
              }}
              pagination={pagination}
              loop={true}
              modules={[Pagination, Navigation]}
              className="w-full"
            >
              {Data.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="mt-12 lg:mt-0 min-w-[300px] flex gap-x-10 ">
                    <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
                    <div>
                      <h5 className="text-2xl font-extrabold inline-block text-primary-foreground leading-160 ">
                        {item.txt1}
                      </h5>
                      <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                      <div className="mt-[18px]">
                        <p className="text-xl font-bold text-primary-foreground">{item.txt2}</p>
                        <p className="text-lg text-primary-foreground">{item.txt3}</p>
                        <p className="text-lg  text-primary-foreground">{item.txt4}</p>
                      </div>
                      <div className="mt-[17px]">
                        <Link
                          href={`mailto:${item.email}`}
                          className="text-lg block text-primary-foreground hover-underline"
                        >
                          Email: <span>{item.email}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="container flex items-center justify-center mt-2">
                {/* <ProgressAndNatigation /> */}
                <SwiperNavigation/>
              </div>
            </Swiper>

            {/* <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold inline-block text-primary-foreground leading-160 ">
                  MUSCAT, OMAN
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <div className="mt-[18px]">
                  <p className="text-xl font-bold text-primary-foreground">Royal Opera House Muscat Shatti</p>
                  <p className="text-lg text-primary-foreground">Al Qurum, Muscat, Oman</p>
                  <p className="text-lg  text-primary-foreground">NC 27262, USA </p>
                </div>
                <div className="mt-[17px]">
                  <Link
                    href={"mailto:Info@gulfdom.com"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Email: <span>Info@gulfdom.com</span>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          <hr className="bg-pritext-primary-foreground" />
          <div className="py-8 lg:flex justify-between items-center">
            <span className="text-sm text-primary-foreground block">Your Trusted Partner in Luxury Real Estate</span>
            <span className="text-sm text-primary-foreground block mt-3 lg:mt-0">
              © 2025, GULF DOM, All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

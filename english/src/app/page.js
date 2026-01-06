import React from "react";
import AboutOne from "@/components/section/about/aboutOne";
import Gallery from "@/components/section/gallery";
import BannerOne from "@/components/section/heroes/bannerOne";
import ServicesSlider from "@/components/section/servicesSlider";
import VideoPortfolio from "@/components/section/videoPortfolio";
import ProjectsSlider from "@/components/section/projectsSlider";
import Testimonial from "@/components/section/testimonial";
import ShopSlider from "@/components/section/shopSlider";
import BlogSlider from "@/components/section/blogSlider";
import Feedback from "@/components/section/feedback";
import Counter from "@/components/ui/counter";
import SectionTitle from "@/components/ui/sectionTitle";
import TeamCardOne from "@/components/ui/cards/teamCardOne";

import { productData } from "@/lib/fackData/productData";
import { blogData } from "@/lib/fackData/blogData";
import { teamData } from "@/lib/fackData/teamData";
import { cardSlideAnimation } from "@/lib/utils";
import { bannerOneData } from "@/lib/fackData/bannerOneData";
import HeaderOne from "@/components/header/headerOne";
import Footer from "@/components/footer";

export const metadata = {
  title: "GULF DOM -- Home",
  description: "GULF DOM",
};

const Home = () => {
  return (
    <>
      <HeaderOne />

      <BannerOne data={bannerOneData} />
      {/* <AboutOne /> */}
      {/* <Counter /> */}
      <Gallery />
      <ServicesSlider />

      <VideoPortfolio />
      <ProjectsSlider />
      <Testimonial />
      <ShopSlider data={productData.slice(0, 5)} />

      {/* -------- blog slider start */}
      <section className="pt-20">
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"GULF DOM"}
            sectionTitle={"ELITE COLLABORATORS SINGULAR RESULTS"}
            sectionDesc={"LUXURY ABOVE ALL"}
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <BlogSlider data={blogData.slice(0, 4)} />
        </div>
      </section>
      {/* -------- blog slider end */}

      <Feedback />
      <Footer />
    </>
  );
};

export default Home;

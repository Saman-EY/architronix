import Footer from "@/components/footer";
import HeaderThree from "@/components/header/headerThree";
import AboutOne from "@/components/section/about/aboutOne";
import BlogSlider from "@/components/section/blogSlider";
import Feedback from "@/components/section/feedback";
import Gallery from "@/components/section/gallery";
import BannerThree from "@/components/section/heroes/bannerThree";
import ProjectsSlider from "@/components/section/projectsSlider";
import ServicesSlider from "@/components/section/servicesSlider";
import ShopSlider from "@/components/section/shopSlider";
import Testimonial from "@/components/section/testimonial";
import VideoPortfolio from "@/components/section/videoPortfolio";
import TeamCardOne from "@/components/ui/cards/teamCardOne";
import Counter from "@/components/ui/counter";
import SectionTitle from "@/components/ui/sectionTitle";
import { blogData } from "@/lib/fackData/blogData";
import { productData } from "@/lib/fackData/productData";
import { teamData } from "@/lib/fackData/teamData";
import { cardSlideAnimation } from "@/lib/utils";

export const metadata = {
  title: "Architronix -- Home-3",
  description: "Architronix is a next js and tailwind css website",
};
const Home = () => {
  return (
    <>
      <HeaderThree />

      <BannerThree />
      <AboutOne />

      <Counter />
      <Gallery />
      <ServicesSlider />

      <section className="pt-20">
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"DAR GLOBAL "}
            sectionTitle={"АРХИТЕКТОРЫ ПРОЕКТА AIDA"}
            sectionDesc={"ГДЕ ПРИРОДА ВСТРЕЧАЕТСЯ С РОСКОШЬЮ НА ВЫСОТЕ 130 МЕТРОВ"}
            button_text={"ВСЕ ОБЪЕКТЫ"}
            link={"/project-single"}
          />
        </div>
        <div className="container lg:pt-[340px] 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-3 2sm:grid-cols-2 gap-7">
            {teamData.slice(0, 3).map(({ id, img, name, position, social_link }) => (
              <TeamCardOne
                key={id}
                img={img}
                name={name}
                position={position}
                social_link={social_link}
                prantCalss={"team-card"}
                cardVariants={cardSlideAnimation()}
              />
            ))}
          </div>
        </div>
      </section>

      <VideoPortfolio />
      <ProjectsSlider />
      <Testimonial />
      <ShopSlider data={productData.slice(0, 5)} />
      <section className="pt-20">
        <div className="container-fluid">
          <SectionTitle
            sectionName={"GULF DOM"}
            sectionTitle={"АНАЛИТИКА И ИНСАЙТЫ"}
            sectionDesc={"РАЗБИРАЕМ ТРЕНДЫ РЫНКА ЭЛИТНОЙ НЕДВИЖИМОСТИ"}
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <BlogSlider data={blogData.slice(0, 4)} />
        </div>
      </section>

      <Feedback />
      <Footer />

  
    </>
  );
};

export default Home;

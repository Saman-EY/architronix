import ProjectCardOne from "@/components/ui/cards/projectCardOne";
import SectionTitle from "@/components/ui/sectionTitle";
import { projectsData } from "@/lib/fackData/projectsData";
import {
  cardSlideAnimation,
  cardSlideAnimationDelay,
  cardSlideAnimationRight,
  cardSlideAnimationRightDelay,
} from "@/lib/utils";

export const metadata = {
  title: "Architronix -- Product Archive",
  description: "Architronix",
};

const ProjectArchive = () => {
  return (
    <section>
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"GULF DOM"}
          sectionTitle={"НАШИ ПРОЕКТЫ В AIDA"}
          sectionDesc={"Инвестиционные возможности мирового уровня  "}
        />
      </div>
      <div className="lg:pt-30 2sm:pt-20 pt-14">
        <div className="">
          {projectsData.map(
            ({ id, project_desc, project_img, project_name, project_year, project_type, location, link }) => {
              if (id % 2 === 0) {
                return (
                  <ProjectCardOne
                    key={id}
                    project_desc={project_desc}
                    project_img={project_img}
                    project_type={project_type}
                    location={location}
                    project_year={project_year}
                    link={link}
                    project_name={project_name}
                    order={"lg:order-1 order-0"}
                    position={"lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"}
                    imageVariants={cardSlideAnimationRight()}
                    cardVariants={cardSlideAnimationRightDelay()}
                  />
                );
              } else {
                return (
                  <ProjectCardOne
                    key={id}
                    project_desc={project_desc}
                    project_img={project_img}
                    project_type={project_type}
                    location={location}
                    project_year={project_year}
                    link={link}
                    project_name={project_name}
                    position={"lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"}
                    imageVariants={cardSlideAnimation()}
                    cardVariants={cardSlideAnimationDelay()}
                  />
                );
              }
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectArchive;

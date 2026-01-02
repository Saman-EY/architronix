import SectionTitle from "@/components/ui/sectionTitle";
import JobPostCard from "@/components/ui/cards/jobPostCard";
import { jobPostList } from "@/lib/fackData/jobPostList";
import ServiceCard from "@/components/ui/cards/serviceCard";
import { servicesData } from "@/lib/fackData/servicesData";
import AboutThree from "@/components/section/about/aboutThree";
import Faq from "@/components/section/faq";

export const metadata = {
  title: "GULF DOM -- Career",
  description: "GULF DOM",
};
const Career = () => {
  return (
    <>
      <section>
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"ПОРТФОЛИО"}
            sectionTitle={"EXPAND YOUR WORLD."}
            sectionDesc={"Invest in real estate and obtain lifetime residency."}
          />
        </div>
        <div className="container mt-30">
          <ul>
            {jobPostList.map(({ id, date_line, job_name, level, link, location, salary, time }) => (
              <JobPostCard
                key={id}
                id={id}
                date_line={date_line}
                job_name={job_name}
                level={level}
                location={location}
                link={link}
                salary={salary}
                time={time}
              />
            ))}
          </ul>
        </div>
      </section>
      {/* -------- compnay feature start------- */}
      {/* -------- compnay feature start------- */}
      {/* -------- compnay feature start------- */}
      <section className="pt-20">
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"GULF DOM"}
            sectionTitle={"12 REASONS"}
            sectionDesc={"to invest in TRUMP BRAND IN REAL ESTATE"}
          />
          <div className="lg:pt-30 2sm:pt-20 pt-14  ">
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 2sm:grid-cols-2 gap-x-[32px] gap-y-10">
              {servicesData.map(({ id, link, service_desc, service_name }) => (
                <ServiceCard key={id} id={id} service_desc={service_desc} service_name={service_name} link={link} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* -------- compnay feature end */}
      <AboutThree />
      <Faq className={"pb-20"} />
    </>
  );
};

export default Career;

import React from "react";
import Image from "next/image";
import SectionTitle from "../../ui/sectionTitle";
import about_bg from "@/assets/images/about-image-2.jpg";
import SectionSidebarImg from "@/components/ui/sectionSidebarImg";

const AboutTwo = () => {
  return (
    <section>
      <div className="container-fluid">
        <SectionTitle
          sectionName={"Gulf Dom"}
          sectionTitle={"Наша история"}
          sectionDesc={"Открывая мир роскошной недвижимости"}
        />
        <div className={`bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[240px] xl:mb-20 mb-0`}>
          <div className="container">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[66px]">
              <div className="md:-mt-25 -mt-[170px] -mb-25">
                <SectionSidebarImg imgClass={"h-full"} img={"/team5.jpg"} section_name={"about-bg"} />
              </div>
              <div className="max-w-[533px] lg:pt-0 pt-20 lg:pb-0 pb-10">
                <h2 className="text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-14 max-w-[400px]">
                  В GULF DOM мы видим не просто недвижимость
                </h2>
                <p className=" text-secondary-foreground">
                  мы видим холст, на котором рисуются мечты о жизни под солнцем Персидского залива. С фокусом на
                  эксклюзивность, надежность и индивидуальный подход, наша команда курирует среду, где каждая деталь
                  отражает высочайшие стандарты и ваши устремления.
                </p>
                <p className="text-secondary-foreground mt-7">
                  От современных апартаментов в динамичных столицах до приватных вилл на нетронутых побережьях, мы
                  стремимся к практике, которая обогащает жизнь наших клиентов и открывает новые горизонты для
                  инвестиций
                </p>
                <p className="text-secondary-foreground mt-7">
                  Присоединяйтесь к путешествию, где каждая сделка — это шаг к воплощению вашего видения идеального дома
                  или актива. Вместе мы создадим ваше будущее — один проект за раз.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;

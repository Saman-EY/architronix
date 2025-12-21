import Image from "next/image";
import bg_banner from "@/assets/images/project-hero-image.jpg";
import project_img_1 from "@/assets/images/project-image-1.jpg";
import project_img_2 from "@/assets/images/project-image-2.jpg";
import RightArrow from "@/assets/icons/rightArrow";
import ProjectSingleSliderOne from "@/components/section/projectSingle/projectSingleSliderOne";
import Paragraph from "@/components/section/projectSingle/paragraph";
import ProjectSingleSliderTwo from "@/components/section/projectSingle/projectSingleSliderTwo";
import TeamTwo from "@/components/section/team/teamTwo";
import Feedback from "@/components/section/feedback";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import Title from "@/components/ui/title";

export const metadata = {
  title: "Architronix -- Project Single",
  description: "Architronix is a next js and tailwind css website",
};

const ProjectSingle = () => {
  return (
    <>
      <section className="blog-single">
        <div>
          <Image src={bg_banner} loading="lazy" placeholder="blur" alt="img" />
          <div className="container 2sm:mt-[156px] sm:mt-30 mt-20">
            <div className="grid lg:grid-cols-[65%_auto] gap-[38px]">
              <div className="relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5">
                <h1 className="text-primary-foreground [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110">
                  Роскошный комплекс AIDA
                </h1>
                <span className="inline-block w-[300px] h-[1px] bg-primary"></span>
                <p className="text-2xl sm:text-3xl 2sm:text-4xl !leading-160 text-primary-foreground mt-[18px]">
                  Эксклюзивный закрытый комплекс и гольф-курорт AIDA в Маскате создан для тех, кто ценит приватность,
                  активный отдых и безупречный сервис мировых брендов в одном из самых безопасных и быстрорастущих
                  регионов мира.
                </p>
              </div>
              <div className=" bg-primary py-15 sm:px-[38px] px-5 lg:-mt-[410px]">
                <Title title_text={"Исключительный курорт AIDA"} className={"text-secondary-foreground mb-0"} />
                <ul className="pb-7.5 pt-[75px] flex lg:flex-col flex-row flex-wrap lg:flex-nowrap gap-x-7 lg:gap-x-0 gap-y-[52px]">
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">Застройщик:</strong>
                    <span className="text-secondary-foreground block"> DAR Global</span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">Площадь:</strong>
                    <span className="text-secondary-foreground block">4.3 млн м²</span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5"> Год проекта:</strong>
                    <span className="text-secondary-foreground block">2022</span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">Тип проекта:</strong>
                    <span className="text-secondary-foreground block">Комплекс недвижимости</span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">Местоположение:</strong>
                    <span className="text-secondary-foreground block">Мускат, Оман</span>
                  </li>
                  <li>
                    <strong className="text-secondary-foreground block text-2xl mb-1.5">Партнёры:</strong>
                    <span className="text-secondary-foreground block">Trump Organization, Marriott International</span>
                  </li>
                </ul>
                <ButtonOutline
                  className={
                    "text-secondary-foreground border-secondary whitespace-nowrap hover:text-primary-foreground hover:bg-secondary "
                  }
                >
                  Ключевые характеристики{" "}
                  <span className="rotate-90">
                    <RightArrow height={"25"} width={"22"} />
                  </span>
                </ButtonOutline>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-30">
            <div className="flex lg:flex-row flex-col gap-8">
              <Image
                src={project_img_1}
                loading="lazy"
                placeholder="blur"
                width={"auto"}
                height={"auto"}
                alt="img"
                className="w-full h-full"
              />
              <Image
                src={project_img_2}
                loading="lazy"
                placeholder="blur"
                width={"auto"}
                height={"auto"}
                alt="img"
                className="w-full h-full"
              />
            </div>
          </div>
          <Paragraph texts={[x1, x2, x3, x4]} />
          <ProjectSingleSliderOne />
          <Paragraph texts={[p1, p2, p3, p4]} />
          <ProjectSingleSliderTwo />
          <Paragraph texts={[f1, f2, f3]} />
        </div>
      </section>
      <TeamTwo />
      <Feedback />
    </>
  );
};

export default ProjectSingle;

const x1 = "AIDA — Роскошь, природа и блестящие инвестиции";
const x2 =
  "Каждый элемент AIDA — от роскошных резиденций и отелей до спортивной и развлекательной инфраструктуры — интегрирован в естественный ландшафт, создавая гармонию между современным комфортом и величием природы. Это тщательно спланированная экосистема, где приватность соседствует с динамичной социальной жизнью, а спокойный отдых — с захватывающими активностями.";
const x3 =
  "Проект предлагает редкую возможность: стать владельцем недвижимости в одном из самых безопасных и политически стабильных государств региона с растущей экономикой, при этом пользуясь всеми преимуществами специальной инвестиционной зоны. Выбирая AIDA, вы выбираете будущее, где личный рай сочетается с мудрым финансовым решением.";
const x4 =
  "Воплотите свою мечту об идеальном доме, престижном адресе и надежном активе в рамках одного проекта — в AIDA, Оман.";

const p1 = "Концепция безупречной жизни в AIDA";
const p2 =
  "Каждый элемент AIDA — от роскошных резиденций и отелей до спортивной и развлекательной инфраструктуры — интегрирован в естественный ландшафт, создавая гармонию между современным комфортом и величием природы. Это тщательно спланированная экосистема, где приватность соседствует с динамичной социальной жизнью, а спокойный отдых — с захватывающими активностями.";
const p3 =
  "Проект предлагает редкую возможность: стать владельцем недвижимости в одном из самых безопасных и политически стабильных государств региона с растущей экономикой, при этом пользуясь всеми преимуществами специальной инвестиционной зоны. Выбирая AIDA, вы выбираете будущее, где личный рай сочетается с мудрым финансовым решением.";
const p4 =
  "Воплотите свою мечту об идеальном доме, престижном адресе и надежном активе в рамках одного проекта — в AIDA, Оман.";

const f1 = "Выберите свою часть рая в AIDA";
const f2 =
  "От ультрасовременных апартаментов с полным спектром услуг от Marriott Residences до эксклюзивных вилл с панорамным видом на море от Trump — в AIDA представлена уникальная коллекция форматов недвижимости. Каждый вариант предлагает готовое решение для жизни, отдыха или пассивного дохода под управлением всемирно известных гостиничных операторов.";
const f3 =
  "Инфраструктура комплекса, включающая частный пляж, спа-центры, рестораны и единственный в регионе прибрежный ночной клуб, превращает обычное проживание в непрерывный курортный опыт. Это больше, чем адрес — это готовый, безупречно отлаженный образ жизни мирового уровня.";

import React from "react";
import SectionTitle from "../../ui/sectionTitle";
import TeamCardTwo from "../../ui/cards/teamCardTwo";

import TeamCardThree from "../../ui/cards/teamCardThree";

const temaList = [
  {
    id: 1,
    img: "",
    link: "/",
    name: "TRUMP ORGANIZATION",
    position: "Эксклюзивный оператор",
    desc: "Мировой лидер в сфере luxury-недвижимости и гостеприимства управляет флагманским отелем, гольф-клубом и виллами, гарантируя безупречный сервис и высочайший стандарт качества.",
  },
  {
    id: 2,
    img: "",
    link: "/",
    name: "MARRIOTT INTERNATIONAL",
    position: "Управляющий партнер",
    desc: "Легендарный гостиничный бренд обеспечивает управление и сервис для апартаментов Marriott Residences, предлагая владельцам статус и надежность международной сети.",
  },
  {
    id: 3,
    img: "",
    link: "/",
    name: " DAR GLOBAL",
    position: "Девелопер проекта",
    desc: "As the lead designer, Michael brought creativity and innovation to the project. His visionary approach guided the entire design process. → Международный девелопер, котирующийся на Лондонской фондовой бирже, выступил создателем и инвестором концепции AIDA, объединив лучших мировых партнеров.",
  },
  {
    id: 4,
    img: "",
    link: "/",
    name: "ПРАВИТЕЛЬСТВО ОМАНА",
    position: "Стратегический партнер",
    desc: "В рамках государственной программы Vision 2040 предоставляет инвесторам особые условия: 100% владение недвижимостью, нулевое налогообложение и вид на жительство.",
  },
  {
    id: 5,
    img: "",
    link: "/",
    name: "AUTOMOBILI LAMBORGHINI",
    position: "Партнер по дизайну",
    desc: "",
  },
  {
    id: 6,
    img: "",
    link: "/",
    name: "PAGANI AUTOMOBILI",
    position: "Партнер по дизайну интерьеров",
    desc: "",
  },
];

const TeamTwo = () => {
  return (
    <section>
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"GULF DOM "}
          sectionTitle={"МИРОВЫЕ БРЕНДЫ В AIDA"}
          sectionDesc={"Партнеры, формирующие экосистему роскоши"}
        />
      </div>
      <div className="container lg:pt-30 2sm:pt-20 pt-14">
        <div className="grid 2sm:grid-cols-2  gap-10">
          {temaList.slice(0, 4).map(({ id, desc, img, name, position, link }) => (
            <TeamCardTwo key={id} desc={desc} img={img} name={name} position={position} link={link} />
          ))}
        </div>
      </div>
      {/* ----  Other Credits */}
      <div className="container pt-30">
        <div className="relative after:absolute after:xl:-left-12.5 after:-left-7 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[130%] after:bg-primary xl:ml-12.5 ml-7">
          <h1 className="xl:text-[130px] lg:text-8xl 2sm:text-7xl text-3xl font-extrabold leading-110 text-primary-foreground">
            ЭКСКЛЮЗИВНЫЕ <br /> БРЕНДЫ
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-[23px] mt-20">
          {temaList.slice(4, 6).map(({ id, desc, img, name, position, link }) => (
            <TeamCardThree key={id} desc={desc} img={img} name={name} position={position} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTwo;

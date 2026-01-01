"use client";
import { cn } from "@/lib/utils";
import SlotCounter from "react-slot-counter";
const counterList = [
  {
    id: 1,
    count: "15+",
    title: "МИРОВЫХ БРЕНДОВ-ПАРТНЕРОВ",
  },
  {
    id: 2,
    count: "$2.3М",
    title: "ОБЪЕМ ПРОЕКТОВ",
  },
  {
    id: 3,
    count: "18",
    title: "СТРАН ПРИСУТСТВИЯ",
  },
  {
    id: 4,
    count: "100%",
    title: "ГАРАНТИЯ БЕЗОПАСНОСТИ СДЕЛКИ",
  },
];
const Counter = ({ text_muted, bg_muted }) => {
  return (
    <div className="pt-20">
      <div className="container">
        <ul className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-10 ">
          {counterList.map(({ id, count, title }) => {
            return (
              <li key={id} className="flex flex-col">
                <span
                  className={cn(
                    `text-[5rem] font-extrabold text-primary-foreground leading-120 overflow-y-hidden overflow-x-auto ${text_muted}`
                  )}
                >
                  <span className="block md:hidden">{count}</span>
                  <span className="hidden md:block">
                    <SlotCounter
                      startValue={0}
                      value={count}
                      debounceDelay={5000}
                      duration={2}
                      animateOnVisible={{ triggerOnce: true, rootMargin: "0px 0px -100px 0px" }}
                    />
                  </span>
                </span>
                <span className={cn(`w-[150px] h-[1px] bg-primary 2sm:mt-3.5 2sm:mb-4 mt-1 mb-2 ${bg_muted}`)}></span>
                <span className={cn(`2sm:text-2xl text-xl font-bold text-primary-foreground ${text_muted}`)}>
                  {title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Counter;

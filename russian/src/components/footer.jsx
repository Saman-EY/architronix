import Link from "next/link";
import Logo from "@/assets/icons/logo";
import SocialMediaList from "./ui/socialMediaList";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" container-fluid  mx-auto ">
      <div className=" bg-secondary ">
        <div className="container">
          <div className="  flex flex-col md:flex-row justify-around items-center pt-[100px] pb-20">
            <div>
              <Link href={""} className="text-primary-foreground">
                <span className="text-primary font-bold text-4xl" >GULF DOM</span>
              </Link>
              <h5 className="xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3">
                Ваш гид в мире элитной недвижимости
              </h5>
              <SocialMediaList />
            </div>
            {/* <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold block text-primary-foreground leading-160 ">Address Spain:</h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <div className="">
                  <p className="text-xl font-bold text-primary-foreground">Architronix, </p>
                  <p className="text-lg text-primary-foreground">Avda. Valencia, 3, 46891, </p>
                  <p className="text-lg  text-primary-foreground">Palomar (Valencia), SPAIN </p>
                </div>
                <div className="mt-[17px]">
                  <Link href={"tel:+34962398486"} className="text-lg block text-primary-foreground hover-underline">
                    Phone: <span>+34 96 239 84 86</span>
                  </Link>
                  <Link
                    href={"mailto:hello@architronix.com"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Email: <span>hello@architronix.com</span>
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold inline-block text-primary-foreground leading-160 ">
                  Наш офис в Маскате:
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <div className="mt-[18px]">
                  <p className="text-xl font-bold text-primary-foreground">Комплекс AIDA </p>
                  <p className="text-lg text-primary-foreground">Султанат Оман, г. Маскат</p>
                  <p className="text-lg  text-primary-foreground">Маскат, Султанат Оман</p>
                </div>
                <div className="mt-[17px]">
                  <Link href={"tel:+34962398486"} className="text-lg block text-primary-foreground hover-underline">
                    Телефон: <span>+79161222333</span>
                  </Link>
                  <Link
                    href={"mailto:info@gulfdom.ru"}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Email: <span>info@gulfdom.ru</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-pritext-primary-foreground" />
          <div className="py-8 lg:flex justify-between items-center">
            <span className="text-sm text-primary-foreground block">
              Ваш надежный партнер в сфере элитной недвижимости
            </span>
            <span className="text-sm text-primary-foreground block mt-3 lg:mt-0">
              © 2025, GULF DOM, Все права защищены
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

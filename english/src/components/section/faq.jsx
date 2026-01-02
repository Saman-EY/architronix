import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from "../ui/sectionTitle";
import faq_img from "@/assets/images/faq-image.jpg";
import SectionSidebarImg from "../ui/sectionSidebarImg";

const faqData = [
  {
    id: "1",
    question: "What real estate investment services do you offer?",
    ans: (
      <>
        <p className="mb-4">
          We offer comprehensive luxury real estate investment services in Dubai, Oman, Qatar, and Saudi Arabia. Our
          services include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Personalized property selection</li>
          <li>Viewing trips and virtual tours</li>
          <li>Full legal and transactional support</li>
          <li>Assistance with bank accounts and residency visas</li>
          <li>Property management and rental services</li>
        </ul>
        <p className="mt-4">We provide exclusive access to premium projects from leading developers.</p>
      </>
    ),
  },
  {
    id: "2",
    question: "How do you help with project selection and analysis?",
    ans: (
      <>
        <p className="mb-4">Our experts conduct in-depth market and project analysis for you. We evaluate:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Capital appreciation potential</li>
          <li>Rental yield forecasts</li>
          <li>Developer reputation</li>
          <li>Legal compliance</li>
        </ul>
        <p className="mt-4">
          For exclusive projects such as AIDA in Oman, we provide detailed reports and arrange direct developer
          meetings.
        </p>
      </>
    ),
  },
  {
    id: "3",
    question: 'What do you mean by "secure investments"?',
    ans: (
      <>
        <p className="mb-4">We focus on opportunities with minimized risk and long-term potential, including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Stable markets like the UAE and Oman</li>
          <li>Projects by reputable, publicly listed developers</li>
          <li>Properties offering residency benefits</li>
        </ul>
        <p className="mt-4">All transactions are secured through protected escrow accounts.</p>
      </>
    ),
  },
  {
    id: "4",
    question: "What is your client journey like?",
    ans: (
      <>
        <p className="mb-4">You receive a dedicated manager who guides you through:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Understanding your goals and budget</li>
          <li>Curating a property shortlist</li>
          <li>Arranging inspection trips</li>
          <li>Handling all legal documents</li>
          <li>Managing payments and registration</li>
          <li>Assisting with visas and banking</li>
        </ol>
        <p className="mt-4">We ensure clear communication at every step.</p>
      </>
    ),
  },
  {
    id: "5",
    question: "What financing support do you provide?",
    ans: (
      <>
        <p className="mb-4">We offer tailored financing solutions:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Flexible developer payment plans</li>
          <li>Access to exclusive bank products, such as non-resident mortgages</li>
          <li>Personalized advice to choose the best financial structure</li>
        </ul>
      </>
    ),
  },
];

const Faq = ({ className }) => {
  return (
    <section className={`pt-20 ${className}`}>
      <div className="container-fluid">
        <SectionTitle
          sectionName={"GULF DOM"}
          sectionTitle={"ИСКУССТВО ИНВЕСТИЦИЙ В НЕДВИЖИМОСТЬ"}
          sectionDesc={"Вопросы и ответы"}
        />
      </div>
      <div className="container lg:pt-30 2sm:pt-20 pt-14">
        <div className="grid lg:grid-cols-[40%_auto] items-center gap-17.5">
          <div>
            <SectionSidebarImg
              imgClass={"h-[400px] md:h-[600px]"}
              img={"/qa-img.jpg"}
              section_name={"faq-background"}
            />
          </div>

          <div>
            <Accordion type="single" defaultValue="1" collapsible>
              {faqData.map(({ id, ans, question }) => {
                return (
                  <AccordionItem value={id} className="mb-2.5">
                    <AccordionTrigger className="text-xl font-semibold border border-primary sm:px-12.5 px-6">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="mt-[22px] sm:px-12.5 px-6">{ans}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

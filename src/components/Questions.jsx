import { useState, useRef } from "react";
import AccordionItem from "./AccordionItem";
import Button from "./Button";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText);

const data = [
  {
    id: 1,
    title: "How much do you charge for a website?",
    content:
      "The cost of a website varies based on the complexity and specific requirements of each project. Contact me for a personalized quote based on your needs.",
  },
  {
    id: 2,
    title: "How long does it take to design and develop a website?",
    content:
      "The turnaround time depends on the size of the project. If you already have a design ready, it can take between 5 days to 2 weeks. However, if you require design services as well, it can take anywhere from 1.5 weeks to 3 weeks.",
  },
  {
    id: 3,
    title: "Can you help with redesigning an existing website?",
    content:
      "Absolutely! I can redesign existing websites to improve their functionality, appearance, and user experience, aligning them with your current business goals and branding.",
  },
];

const Questions = () => {
  const [expandedId, setExpandedId] = useState(null);
  function toggleExpand(id) {
    setExpandedId(expandedId === id ? null : id);
  }

  const containerRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      document.fonts.ready.then(
        contextSafe(() => {
          const hSplit = new SplitText("h2.split", { type: "lines" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          });

          tl.from(hSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.1,
          })
            .to(
              ".button",
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
              },
              "-=0.8",
            )
            .fromTo(
              ".accordion-item",
              {
                y: 40,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
              },
              "-=0.5",
            );
        }),
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-20 bg-transparent">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="p-4 md:p-8 bg-transparent rounded-3xl md:rounded-4xl border-border border-2">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div>
              <div className="flex items-center">
                <span className="h-px w-8 me-2 bg-text-secondary" />
                <p className="text-sm font-medium tracking-wide text-text-secondary">
                  Selected questions
                </p>
              </div>
              <h2 className="split text-2xl md:text-4xl font-semibold text-text-primary">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-3 md:mt-0">
              <div className="button opacity-0 translate-y-4">
                <Button
                  content={"Ask A Question"}
                  type={"button"}
                  icon={MoveRight}
                  to={"/contact"}
                />
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="flex flex-col gap-4 md:gap-5">
            {data.map(function (items) {
              return (
                // Added wrapper div with 'accordion-item' class for GSAP to target
                // and 'col-span-12' to maintain your grid layout
                <div
                  key={items.id}
                  className="accordion-item col-span-12 opacity-0 translate-y-4"
                >
                  <AccordionItem
                    {...items}
                    isExpanded={expandedId === items.id}
                    onToggle={() => toggleExpand(items.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;

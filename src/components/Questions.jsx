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
    () => {
      document.fonts.ready.then(() => {
        const hSplit = new SplitText("h2.split", { type: "lines" });
        const paraSplit = new SplitText("p.split", { type: "lines" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        });

        // CHAIN EVERYTHING TO THE TIMELINE
        tl.from(hSplit.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.1,
        })
          .from(
            paraSplit.lines,
            {
              yPercent: 100,
              opacity: 0,
              duration: 1.2,
              ease: "expo.out",
              stagger: 0.1,
            },
            "-=0.6",
          )
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
          // NEW: Animate the accordion items sequentially
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
              stagger: 0.15, // This is what makes them appear one after another
            },
            "-=0.5", // Starts slightly before the button animation finishes
          );
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-20 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-5 p-4 md:p-8 bg-surface rounded-xl shadow-lg">
          {/* Header Section */}
          <div className="col-span-12 flex flex-col md:flex-row md:justify-between gap-5 mb-10">
            <h2 className="split text-2xl md:text-4xl font-bold text-text-primary">
              Frequently asked <br /> questions
            </h2>
            <div>
              <p className="split text-sm md:text-lg font-medium text-text-secondary mb-5">
                Have questions? <br /> Here I answer to the ones I get asked
                most often.
              </p>
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
          {data.map(function (items) {
            return (
              // Added wrapper div with 'accordion-item' class for GSAP to target
              // and 'col-span-12' to maintain your grid layout
              <div
                key={items.id}
                className="accordion-item col-span-12 opacity-0"
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
    </section>
  );
};

export default Questions;
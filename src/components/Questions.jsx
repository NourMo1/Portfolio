import { useState } from "react";
import AccordionItem from "./AccordionItem";
import Button from "./Button";
import { MoveRight } from "lucide-react";

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
      "  The turnaround time depends on the size of the project. If you already have a design ready, it can take between 5 days to 2 weeks. However, if you require design services as well, it can take anywhere from 1.5 weeks to 3 weeks.",
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

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-5 p-4 md:p-8 bg-surface rounded-xl shadow-lg">
          <div className="col-span-12 flex flex-col md:flex-row md:justify-between gap-5 mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary uppercase">
              Frequently asked <br /> questions
            </h2>
            <div>
              <p className="text-sm md:text-lg font-medium text-text-secondary mb-5">
                Got questions? <br /> Here i answer to the ones we get asked
                most often.
              </p>
              <Button
                content={"Ask A Question"}
                type={"button"}
                icon={MoveRight}
                to={"/contact"}
              />
            </div>
          </div>
          {data.map(function (items) {
            return (
              <AccordionItem
                key={items.id}
                {...items}
                isExpanded={expandedId === items.id}
                onToggle={() => toggleExpand(items.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
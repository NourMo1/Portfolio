import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import arrow from "./../../assets/right-arrow.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from 'lucide-react';

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
	
	function AccordionItem({ title, content, isExpanded, onToggle }) {
		return (
      <motion.button
        drag
        dragConstraints={{ left: 5, right: 5, top: 5, bottom: 5 }}
        dragElastic={0.1}
        onClick={onToggle}
        className="col-span-12 cursor-pointer bg-[#f5f5f5] dark:bg-zinc-900 p-5 md:p-10 rounded-2xl border-2 border-zinc-300 dark:border-zinc-700"
      >
        <div className="grid grid-cols-12 gap-5 place-items-center md:place-items-start">
          <div className="col-span-12 flex items-center justify-between gap-5">
            <span className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#C6FB50] dark:bg-white">
              <Sparkles className="w-5 text-zinc-900" />
            </span>
            <h3 className="text-xl text-left font-medium text-zinc-900 dark:text-[#C6FB50]">
              {title}
            </h3>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="accordion text-zinc-700 dark:text-white text-left mt-3">
                {content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    );
};

const Questions = () => {
  const [expandedId, setExpandedId] = useState(null);
	function toggleExpand(id) {
		setExpandedId(expandedId === id ? null : id)
  };

  const [hover, setHover] = useState(false);

	return (
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-5 p-5 md:p-10 bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white rounded-4xl shadow-lg">
          <div className="col-span-12 flex flex-col md:flex-row md:justify-between gap-5 mb-10">
            <h2 className="text-4xl font-bold uppercase w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
              Frequently asked questions
            </h2>
            <div>
              <p className="mb-5">
                Got questions? <br /> Here i answer to the ones we get asked most
                often.
              </p>
              <motion.div
                onMouseEnter={(e) => setHover(true)}
                onMouseLeave={(e) => setHover(false)}
                animate={{
                  width: hover ? "fit-content" : "",
                }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-4xl"
              >
                <Link
                  to={"/contact"}
                  className="hero-btn bg-third text-zinc-900 h-[50px] flex mx-auto items-center justify-center"
                >
                  Ask A Question
                  <AnimatePresence>
                    {hover && (
                      <motion.span
                        initial={{
                          width: 0,
                          height: 0,
                          marginLeft: 0,
                        }}
                        animate={{
                          width: 35,
                          height: 35,
                          marginLeft: 10,
                        }}
                        exit={{
                          width: 0,
                          height: 0,
                          marginLeft: 0,
                        }}
                        transition={{ ease: "easeInOut", duration: 0.3 }}
                        className="flex justify-center items-center rounded-full overflow-clip bg-white"
                      >
                        <motion.img
                          initial={{ x: 0 }}
                          animate={{ x: [0, -40, 40, 0] }}
                          exit={{ x: 0 }}
                          transition={{ duration: 0.5 }}
                          src={arrow}
                          alt="Arrow"
                        />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
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
}

export default Questions
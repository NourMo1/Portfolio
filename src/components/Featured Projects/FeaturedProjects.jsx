import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ProjectsContext } from './../Context/ProjectsContext';
import arrow from "./../../assets/right-arrow-light.svg";
import { AnimatePresence, motion } from "framer-motion";

const FeaturedProjects = () => {
  const { projects } = useContext(ProjectsContext);

  const navigate = useNavigate();
  function navigateToProjects() {
    navigate("/projects");
  }

  const openInNewTab = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [hover, setHover] = useState(false);

  return (
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-12 gap-5 p-5 md:p-10 bg-zinc-900 dark:bg-zinc-800 text-white rounded-4xl"
        >
          <div className="col-span-12 md:flex md:flex-wrap md:justify-between mb-10">
            <h2 className="text-4xl font-bold text-third uppercase">
              Featured projects
            </h2>
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
                onClick={navigateToProjects}
                className="hero-btn bg-white text-zinc-900 h-[50px] flex mx-auto items-center justify-center mt-3 md:mt-0"
              >
                View More
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
                      className="flex justify-center items-center rounded-full overflow-clip bg-zinc-900"
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
          {projects.featureProjects.map(function (project, index) {
            return (
              <div
                key={index}
                className="project col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl h-full flex flex-col overflow-hidden"
              >
                <div className="image relative">
                  <img
                    className="w-full"
                    src={project.image}
                    alt={project.title}
                  />
                  <Link
                    onClick={openInNewTab}
                    to={project.demo}
                    className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#0006] backdrop-blur-sm absolute top-2 right-2 overflow-clip"
                  >
                    <motion.img
                      initial={{ rotate: 0 }}
                      whileHover={{
                        rotate: "-45deg",
                      }}
                      transition={{ ease: "easeInOut", duration: 0.2 }}
                      src={arrow}
                      alt="Arrow"
                    />
                  </Link>
                </div>
                <div className="p-4 bg-[#f5f5f5] dark:bg-zinc-900 grow">
                  <div className="mb-5">
                    <Link
                      className="block w-fit"
                      onClick={openInNewTab}
                      to={project.repo}
                    >
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-zinc-700 dark:text-[#f5f5f5]/70 font-light text-sm">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap items-center gap-2">
                    {project.features.map(function (feature, index) {
                      return (
                        <li
                          key={index}
                          className="px-2 py-1 border-1  border-zinc-500 text-zinc-500 rounded-4xl text-sm font-light"
                        >
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProjects
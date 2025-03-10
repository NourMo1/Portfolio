import React, { useContext } from 'react'
import { ProjectsContext } from '../Context/ProjectsContext';
import { Link } from 'react-router-dom';
import arrow from "./../../assets/right-arrow-light.svg";
import { motion } from "framer-motion";
import BackToTop from '../BackToTop/BakToTop';

const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  const openInNewTab = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="pt-20 bg-[#f5f5f5] dark:bg-zinc-900">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="py-20">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-10">
              All Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-zinc-300 dark:border-zinc-600 rounded-4xl p-5 md:p-10 gap-5">
              {projects.allProjects.map(function (project, index) {
                return (
                  <div
                    key={index}
                    className="project rounded-2xl h-full flex flex-col overflow-hidden"
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
                        className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#0006] backdrop-blur-sm absolute top-2 right-2"
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
                    <div className="p-4 bg-zinc-900 dark:bg-zinc-800 grow">
                      <div className="mb-5">
                        <Link
                          className="block w-fit"
                          onClick={openInNewTab}
                          to={project.repo}
                        >
                          <h3 className="text-lg font-bold text-third mb-3">
                            {project.title}
                          </h3>
                        </Link>
                        <p className="text-[#fff] font-light text-sm">
                          {project.description}
                        </p>
                      </div>
                      <ul className="flex flex-wrap items-center gap-2">
                        {project.features.map(function (feature, index) {
                          return (
                            <li
                              key={index}
                              className="px-2 py-1 border-1 border-zinc-500 text-zinc-500 rounded-4xl text-sm font-light"
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
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </>
  );
}

export default Projects
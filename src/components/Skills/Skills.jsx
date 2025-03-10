import React from 'react'
import logo1 from './../../assets/Skills/html.png'
import logo2 from './../../assets/Skills/css.png'
import logo3 from './../../assets/Skills/js.png'
import logo4 from './../../assets/Skills/ts.png'
import logo5 from './../../assets/Skills/bootstrap.png'
import logo6 from './../../assets/Skills/tailwind.png'
import logo7 from './../../assets/Skills/react.png'
import logo8 from './../../assets/Skills/next.png'
import logo9 from './../../assets/Skills/sass.png'
import logo10 from './../../assets/Skills/mui.png'
import logo11 from './../../assets/Skills/framer.png'
import logo12 from './../../assets/Skills/reactquery.png'
import logo13 from './../../assets/Skills/redux.png'
import logo14 from './../../assets/Skills/jquery.png'
import logo15 from './../../assets/Skills/git.png'
import logo16 from './../../assets/Skills/github.png'
import logo17 from "./../../assets/Skills/vscode.png";
import logo18 from './../../assets/Skills/npm.png'
import logo19 from './../../assets/Skills/formik.png'
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react'

const Skills = () => {
  
  const skills = {
    languagesAndFrameworks: [
      {
        title: "HTML",
        image: logo1,
      },
      {
        title: "CSS",
        image: logo2,
      },
      {
        title: "Javascript",
        image: logo3,
      },
      {
        title: "Typescript",
        image: logo4,
      },
      {
        title: "Bootsrtap",
        image: logo5,
      },
      {
        title: "Tailwindcss",
        image: logo6,
      },
      {
        title: "React.js",
        image: logo7,
      },
      {
        title: "Next.js",
        image: logo8,
      },
      {
        title: "SASS",
        image: logo9,
      },
    ],
    libraries: [
      {
        title: "MUI",
        image: logo10,
      },
      {
        title: "Framer Motion",
        image: logo11,
      },
      {
        title: "TanStack Query",
        image: logo12,
      },
      {
        title: "Redux",
        image: logo13,
      },
      {
        title: "JQuery",
        image: logo14,
      },
      {
        title: "Formik",
        image: logo19,
      },
      {
        title: "Yup",
        image: null,
      },
    ],
    tools: [
      {
        title: "Git",
        image: logo15,
      },
      {
        title: "GitHub",
        image: logo16,
      },
      {
        title: "VS Code",
        image: logo17,
      },
      {
        title: "NPM",
        image: logo18,
      },
    ],
  };
  
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white text-center uppercase mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-12 gap-5">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="languages-frameworks col-span-12 p-5 md:p-10 bg-zinc-900 dark:bg-zinc-800 text-white rounded-4xl"
          >
            <div className="flex items-center bg-white text-zinc-900 w-fit px-2 py-1 md:px-4 md:py-2 rounded-4xl mb-10">
              <span className="me-3 rounded-full animate-[spin_2.5s_linear_infinite]">
                <Sparkle />
              </span>
              <p className="me-2.5">Languages & Frameworks</p>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {skills.languagesAndFrameworks.map(function (skill, index) {
                return (
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      boxShadow:
                        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.2,
                      type: "tween",
                    }}
                    key={index}
                    className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-zinc-800 dark:bg-zinc-900 relative group"
                  >
                    <img
                      className="w-[60px] text-center"
                      src={skill.image}
                      alt={skill.title}
                    />
                    <span className="span-hover opacity-0 absolute bg-[#0006] text-white backdrop-blur-sm text-center -top-5 px-2 py-1 rounded-2xl z-10 ransition-opacity group-hover:opacity-100">
                      {skill.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="tools col-span-12 md:col-span-6 lg:col-span-4 p-5 md:p-10 bg-third text-zinc-900 rounded-4xl"
          >
            <div className="flex items-center bg-zinc-900  text-white w-fit px-2 py-1 md:px-4 md:py-2 rounded-4xl mb-10">
              <span className="me-3 rounded-full animate-[spin_2.5s_linear_infinite]">
                <Sparkle />
              </span>
              <p className="me-2.5">Tools</p>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {skills.tools.map(function (skill, index) {
                return (
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      boxShadow:
                        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.2,
                      type: "tween",
                    }}
                    key={index}
                    className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-white relative group"
                  >
                    <img
                      className="w-[60px] text-center"
                      src={skill.image}
                      alt={skill.title}
                    />
                    <span className="span-hover opacity-0 absolute bg-[#0006] text-white backdrop-blur-sm text-center -top-5 px-2 py-1 rounded-2xl z-10 ransition-opacity group-hover:opacity-100">
                      {skill.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="libraries col-span-12 md:col-span-6 lg:col-span-8 p-5 md:p-10 bg-zinc-900 dark:bg-zinc-800 text-white rounded-4xl">
            <div className="flex items-center bg-white text-zinc-900 w-fit px-2 py-1 md:px-4 md:py-2 rounded-4xl mb-10">
              <span className="me-3 rounded-full animate-[spin_2.5s_linear_infinite]">
                <Sparkle />
              </span>
              <p className="me-2.5">Libraries</p>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {skills.libraries.map(function (skill, index) {
                return (
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      boxShadow:
                        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.2,
                      type: "tween",
                    }}
                    key={index}
                    className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-zinc-800 dark:bg-zinc-900 relative group"
                  >
                    <img
                      className="w-[60px] text-center"
                      src={skill.image}
                      alt={skill.title}
                    />
                    <span className="span-hover opacity-0 absolute bg-[#0006] text-white backdrop-blur-sm text-center -top-5 px-2 py-1 rounded-2xl z-10 ransition-opacity group-hover:opacity-100">
                      {skill.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills
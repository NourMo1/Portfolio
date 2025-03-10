import React from 'react'
import Image from './../../assets/bg-image.png'
import {motion} from "framer-motion"

const About = () => {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white text-center uppercase mb-10">
          About me
        </h2>
        <motion.div
          initial={{ opacity: 0.5 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{once: true}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 lg:col-span-7 p-5 md:p-10 bg-zinc-900 dark:bg-zinc-800 text-white rounded-4xl relative">
            <div className="flex items-center bg-white text-zinc-900 w-fit px-2 py-1 md:px-4 md:py-2 rounded-4xl mb-10">
              <span className="me-3 rounded-full animate-[spin_2.5s_linear_infinite]">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="-4.8 -4.8 33.60 33.60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0)"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.192"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
              <p className="me-2.5">Hi, I'm Nour Al-din Mohamed</p>
            </div>
            <p className="my-5 relative z-1">
              Entry-level frontend developer skilled in HTML, CSS, and
              JavaScript, eager to build responsive and user friendly web
              applications while growing my expertise in modern frameworks like{" "}
              <span className="text-third">React.js</span> and{" "}
              <span className="text-third">Next.js</span>.
            </p>
            <p className="mt-5 relative z-1">
              Have a good experience in <span className="text-third">SEO</span>{" "}
              audit, <span className="text-third">responsive web design</span>,
              accessibility, performance, API and OOP.
            </p>
            <img
              className="w-[300px] absolute right-0 bottom-0"
              src={Image}
              alt="Image"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 p-5 md:p-10 bg-zinc-900 dark:bg-zinc-800 text-white rounded-4xl">
            <div className="flex items-center bg-third text-zinc-900 w-fit px-2 py-1 md:px-4 md:py-2 rounded-4xl mb-10">
              <span className="me-3 rounded-full animate-[spin_2.5s_linear_infinite]">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="-4.8 -4.8 33.60 33.60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0)"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.192"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
              <p className="me-2.5">Education</p>
            </div>
            <p>Kafrelsheikh University,</p>
            <div className="flex justify-between items-center flex-wrap mb-5">
              <p className="me-2">Faculty of Engineering </p>
              <p>2021 - 2026</p>
            </div>
            <p className="mb-3">Major: Computer and Systems Engineering</p>
            <p>
              Minor: <span className="text-third">Frontend Developer</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About
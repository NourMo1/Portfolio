import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import About from '../About/About';
import Skills from '../Skills/Skills';
import FeaturedProjects from '../Featured Projects/FeaturedProjects';
import Questions from '../Questions/Questions';
import download from './../../assets/download.svg';
import { AnimatePresence, motion } from 'framer-motion';
import BackToTop from '../BackToTop/BakToTop';


const Home = () => {
  const Resume = "https://drive.google.com/uc?id=1HXPzpaYyt9EXBMcsOaPNaasF97h06Rjj&export=download";
  const [hover, setHover] = useState(false);

  return (
    <main className="bg-[#f5f5f5] dark:bg-zinc-900">
      <section className="pt-20 h-screen flex justify-center items-center">
        <div className="container max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-20 sm:py-30 md:py-40 px-2 text-center rounded-ee-4xl rounded-es-4xl bg-white dark:bg-zinc-800 shadow-lg">
            <div className="flex justify-center items-center mb-5">
              <span className="me-3 w-[10px] h-[10px] rounded-full bg-green-500 relative ">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
              </span>
              <p className="text-zinc-900 dark:text-[#f5f5f5]">
                Available for new projects
              </p>
            </div>
            <h1 className="text-4xl font-extrabold capitalize text-zinc-900 dark:text-white lg:w-[70%] md:mx-auto mb-15">
              Building Scalable Modern Websites For The{" "}
              <span className="relative">
                Future
                <img
                  className="absolute left-0 -bottom-2 w-full"
                  src="https://cdn.prod.website-files.com/65da73336689f9f7920514b1/672f6fb60d3bc989cf780ac1_underline.svg"
                  alt="Hero Image"/>
              </span>
            </h1>
            <motion.div
              onMouseEnter={(e) => setHover(true)}
              onMouseLeave={(e) => setHover(false)}
              animate={{
                width: hover ? "fit-content" : "",
              }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-4xl">
              <Link
                to={Resume}
                className="hero-btn bg-third text-zinc-900 h-[50px] flex mx-auto items-center justify-center">
                Download CV
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
                      className="flex justify-center items-center rounded-full overflow-clip bg-white">
                      <motion.img
                        initial={{ y: 0 }}
                        animate={{ y: [0, -40, 40, 0] }}
                        exit={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        src={download}
                        alt="Download"/>
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <BackToTop />
      <About />
      <Skills />
      <FeaturedProjects />
      <Questions />
    </main>
  );
}

export default Home
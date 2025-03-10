import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import arrow from "./../../assets/right-arrow.svg";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  const myFacebook = "https://www.facebook.com/share/14irtJc8hn/";
  const myLinkedIn = "https://www.linkedin.com/in/nour-aldin-mohamed/";
  const myGitHub = "https://github.com/NourMo1";
  const myGmail = "mailto:nouraldinmowrok@gmail.com";
  
  const openInNewTab = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [hover, setHover] = useState(false);

  return (
    <footer className="w-full bg-zinc-900 dark:bg-zinc-800 text-white">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 pb-4 border-b-2 border-b-zinc-700">
          <div className="start-project col-span-12 md:col-span-6 mb-5 md:mb-0">
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Let's Work Together Today!
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
                to={"/contact"}
                className="hero-btn bg-third text-zinc-900 h-[50px] flex mx-auto items-center justify-center"
              >
                Start Project
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
          <div className="social col-span-12 md:col-span-6">
            <ul className="flex md:flex-row md:justify-end">
              <li className="me-5">
                <Link
                  onClick={openInNewTab}
                  to={myFacebook}
                  className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#1877f2]"
                >
                  <i className="fa-brands fa-facebook-f text-2xl"></i>
                </Link>
              </li>
              <li className="me-5">
                <Link
                  onClick={openInNewTab}
                  to={myGitHub}
                  className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#333]"
                >
                  <i className="fa-brands fa-github text-2xl"></i>
                </Link>
              </li>
              <li className="me-5">
                <Link
                  onClick={openInNewTab}
                  to={myLinkedIn}
                  className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#0a66c2]"
                >
                  <i className="fa-brands fa-linkedin-in text-2xl"></i>
                </Link>
              </li>
              <li>
                <Link
                  onClick={openInNewTab}
                  to={myGmail}
                  className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#ea4335]"
                >
                  <i className="fa-brands fa-google text-2xl"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright text-center pt-4">
          <p>
            Copyright © 2025 <span className="text-third">NourMo™</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
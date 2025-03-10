import React, { useState } from "react";
import arrow from "./../../assets/right-arrow.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  return (
    <section className="pt-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="py-20">
          <div className="felx flex-col justify-center items-center text-center">
            <h1 className="text-6xl font-medium text-zinc-900 dark:text-white mx-auto mb-10">
              You are lost...
            </h1>
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
                type="submit"
                onClick={navigateToHome}
                className="hero-btn cursor-pointer bg-third text-zinc-900 h-[50px] flex mx-auto items-center justify-center"
              >
                Back To Homepage
                <AnimatePresence>
                  {hover && (
                    <motion.span
                      initial={{
                        width: 0,
                        height: 0,
                        marginLeft: 0,
                        transform: "translate3d(0, 0, 0)",
                      }}
                      animate={{
                        width: 35,
                        height: 35,
                        marginLeft: 10,
                        transform: "translate3d(20, 0, 0)",
                      }}
                      exit={{
                        width: 0,
                        height: 0,
                        marginLeft: 0,
                        transform: "translate3d(0, 0, 0)",
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
      </div>
    </section>
  );
};

export default Error;

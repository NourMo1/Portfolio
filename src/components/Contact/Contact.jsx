import React, { useState, useRef } from 'react'
import arrow from "./../../assets/right-arrow.svg";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Check, X } from "lucide-react";

const Contact = () => {
  const [hover, setHover] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_rfjevjo", "template_3zthx9a", form.current, {
        publicKey: "AzU_lIAeJrloeBlBq",
      })
      .then(
        () => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-zinc-700 shadow-lg rounded-4xl pointer-events-auto p-4`}
            >
              <div className="flex justify-between items-center flex-nowrap">
                <div className="text-third me-3">
                  <Check />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#f5f5f5]">
                    Thank you! Your submission has been received.
                  </p>
                </div>
              </div>
            </div>
          ));
        },
        (error) => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-zinc-700 shadow-lg rounded-4xl pointer-events-auto p-4`}
            >
              <div className="flex justify-between items-center flex-nowrap">
                <div className="text-third me-3">
                  <X />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#f5f5f5]">
                    Submission failed. Check your input and try again.
                  </p>
                </div>
              </div>
            </div>
          ));
        }
      );
  };
  
  return (
    <section className="pt-20 bg-[#f5f5f5] dark:bg-zinc-900">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="py-20">
          <div className="mb-15">
            <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-[#C6FB50] text-center mb-5">
              Let's Grow Together!
            </h1>
            <p className="text-center text-zinc-900 dark:text-white sm:w-[80%] md:w-[70%] lg:w-[55%] mx-auto">
              Awesome, you finally made your decision here! Fill this form & i
              will contact you back :)
            </p>
          </div>
          <div className="form p-5 md:p-10 bg-white dark:bg-zinc-800 shadow-lg rounded-4xl">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-12 gap-5">
                <div className="name col-span-12 md:col-span-6">
                  <label
                    htmlFor="name"
                    className="block mb-3 w-fit text-zinc-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    id="name"
                    className="block p-3 bg-[#f5f5f5] dark:bg-zinc-700 text-zinc-900 dark:text-white outline-0 border-1 border-[#f5f5f5] dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-white rounded-lg w-full"
                    required
                  />
                </div>
                <div className="email col-span-12 md:col-span-6">
                  <label
                    htmlFor="email"
                    className="block mb-3 w-fit text-zinc-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    id="email"
                    className="block p-3 bg-[#f5f5f5] dark:bg-zinc-700 text-zinc-900 dark:text-white outline-0 border-1 border-[#f5f5f5] dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-white rounded-lg w-full"
                    required
                  />
                </div>
                <div className="message col-span-12 mb-15">
                  <label
                    htmlFor="message"
                    className="block mb-3 w-fit text-zinc-900 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    id="message"
                    className="block p-3 bg-[#f5f5f5] dark:bg-zinc-700 text-zinc-900 dark:text-white outline-0 border-1 border-[#f5f5f5] dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-white rounded-lg w-full resize-none h-30"
                    required
                  ></textarea>
                </div>
              </div>
              <motion.div
                onMouseEnter={(e) => setHover(true)}
                onMouseLeave={(e) => setHover(false)}
                animate={{
                  width: hover ? "fit-content" : "",
                }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-4xl"
              >
                <button
                  type="submit"
                  className="hero-btn cursor-pointer bg-third text-zinc-900 h-[50px] flex mx-auto items-center justify-center"
                >
                  Send Message
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
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
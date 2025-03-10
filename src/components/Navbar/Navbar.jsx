import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import DarkMode from '../DarkMode/DarkMode';
import { ChevronLeft, ChevronRight, Slash } from 'lucide-react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu);
  }

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      initial={{ y: -180, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-white dark:bg-zinc-800 fixed top-0 left-0 right-0 w-full h-20 shadow-lg z-30 flex items-center"
    >
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              <div className="flex items-center">
                <span className="inline-block">
                  <ChevronLeft className="w-5" />
                </span>
                <motion.div
                  animate={{
                    opacity: visible ? 1 : 0,
                    width: visible ? "auto" : 0,
                  }}
                  transition={{ duration: 1, ease: "easeInOut", yoyo: Infinity }}
                >
                  <p className="text-zinc-900 dark:text-[#C6FB50] px-1">
                    NourMo
                  </p>
                </motion.div>
                <span className="flex">
                  <Slash className="w-5" />
                  <ChevronRight className="w-5" />
                </span>
              </div>
            </Link>
          </div>
          {/* Desktop Navbar */}
          <div className="desktop-navbar">
            <ul className="hidden md:flex md:flex-row md:gap-3 text-zinc-900 dark:text-white">
              <li className="nav-item px-2">
                <NavLink
                  className="nav-link relative py-1 after:absolute after:content[''] after:w-full after:h-[1.5px] after:top-full after:left-0 after:bg-zinc-900 dark:after:bg-[#C6FB50] dark:after:hover:bg-[#C6FB50]"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  className="nav-link relative py-1 after:absolute after:content[''] after:w-full after:h-[1.5px] after:top-full after:left-0 after:bg-zinc-900 dark:after:bg-[#C6FB50] dark:after:hover:bg-[#C6FB50]"
                  to={"/projects"}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  className="nav-link relative py-1 after:absolute after:content[''] after:w-full after:h-[1.5px] after:top-full after:left-0 after:bg-zinc-900 dark:after:bg-[#C6FB50] dark:after:hover:bg-[#C6FB50]"
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="buttons flex items-center">
            <DarkMode />
            {/* Mobile Menu Toggle */}
            <div className="mobile-navbar md:hidden ms-3">
              <button
                onClick={handleMenu}
                className="menuToggle cursor-pointer p-2 w-10 h-10 bg-[#f5f5f5] rounded-4xl"
              >
                {menu ? (
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H21M3 6H21M9 18H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Mobile Navbar */}
            <div className="mobile-navbar">
              <AnimatePresence>
                {menu && (
                  <motion.ul
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className="p-4 shadow-lg absolute left-0 right-0 w-full text-center top-20 text-zinc-900 bg-white dark:text-white dark:bg-zinc-800 z-10"
                  >
                    <li className="nav-item py-2">
                      <NavLink
                        className="nav-link relative py-1 after:absolute after:content[''] after:w-full after:h-[1.5px] after:top-full after:left-0 after:bg-zinc-900 dark:after:bg-[#C6FB50] dark:after:hover:bg-[#C6FB50]"
                        to={"/"}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item py-2">
                      <NavLink
                        className="nav-link relative py-1 after:absolute after:content[''] after:w-full after:h-[1.5px] after:top-full after:left-0 after:bg-zinc-900 dark:after:bg-[#C6FB50] dark:after:hover:bg-[#C6FB50]"
                        to={"/projects"}
                      >
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item py-2">
                      <NavLink
                        className="nav-link relative py-1 after:absolute after:content[''] after:w-full after:h-[1.5px] after:top-full after:left-0 after:bg-zinc-900 dark:after:bg-[#C6FB50] dark:after:hover:bg-[#C6FB50]"
                        to={"/contact"}
                      >
                        Contact
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar
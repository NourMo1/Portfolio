import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkMode from "./../features/DarkMode";
import lightLogo from "./../assets/lightLogo.png";
import darkLogo from "./../assets/darkLogo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 1. IMPORT SCROLLTRIGGER

// 2. REGISTER BOTH PLUGINS
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const containerRef = useRef(null);

  function handleMenu() {
    setMenu(!menu);
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass =
    "nav-link font-medium relative py-1 after:absolute after:content[''] after:w-full after:h-[1.5px] after:top-full after:left-0 after:bg-primary dark:after:hover:bg-primary";

  useGSAP(
    () => {
      // --- MOBILE MENU ANIMATION ---
      if (menu) {
        gsap.from(".menu", {
          x: 200,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.from(".menu .nav-item", {
          x: 50,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.1,
        });
      }

      // --- 3. SCROLLTRIGGER SHADOW ANIMATION ---
      gsap.to(".nav", {
        // Adds a smooth drop shadow (similar to Tailwind's shadow-md)
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        duration: 0.05, // Quick transition for the shadow to appear
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: document.body, // Watch the scroll position of the entire page
          start: "top -50", // Fire when the user scrolls 50px down from the top
          // toggleActions dictate what happens when scrolling: [onEnter, onLeave, onEnterBack, onLeaveBack]
          toggleActions: "play none none reverse",
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [menu], // Keeps the mobile menu re-rendering working
    },
  );

  return (
    <nav
      ref={containerRef}
      className="px-4 md:px-8 fixed top-0 left-0 right-0 w-full max-w-[1200px] mx-auto mt-3 z-30"
    >
      <div className="nav container max-w-screen-xl mx-auto p-4 bg-white dark:bg-surface rounded-2xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Link className="logo-header flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-wide text-primary">
              <img
                src={lightLogo}
                alt="Logo Light"
                className="block dark:hidden h-10"
              />
              <img
                src={darkLogo}
                alt="Logo Dark"
                className="hidden dark:block h-10"
              />
              NourMo
            </Link>
          </div>
          {/* Desktop Navbar */}
          <div className="desktop-navbar">
            <ul className="hidden md:flex md:flex-row md:gap-3 text-text-primary">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item px-2">
                  <NavLink className={navLinkClass} to={link.path}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Buttons + Mobile Menu */}
          <div className="buttons flex items-center">
            <DarkMode />
            {/* Mobile Menu Toggle */}
            <div className="mobile-navbar md:hidden ms-3">
              <button
                onClick={handleMenu}
                className="relative flex flex-col items-center justify-center gap-[5px] cursor-pointer w-9 h-9 bg-background rounded-xl z-50"
              >
                <span
                  className={`block w-5 h-[2px] bg-text-primary rounded-full transition-transform duration-300 origin-center ${
                    menu ? "translate-y-[7px] rotate-45" : ""
                  }`}
                ></span>

                <span
                  className={`block w-5 h-[2px] bg-text-primary rounded-full transition-opacity duration-300 ${
                    menu ? "opacity-0" : "opacity-100"
                  }`}
                ></span>

                <span
                  className={`block w-5 h-[2px] bg-text-primary rounded-full transition-transform duration-300 origin-center ${
                    menu ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                ></span>
              </button>
            </div>
            {/* Mobile Navbar */}
            {menu && (
              <div className="mobile-nav md:hidden">
                <ul className="menu p-2 shadow-lg absolute left-4 right-4 text-center top-20 bg-white dark:bg-surface text-text-primary z-10 rounded-xl">
                  {navLinks.map((link) => (
                    <li key={link.path} className="nav-item py-2">
                      <NavLink
                        onClick={() => setMenu(false)}
                        className={navLinkClass}
                        to={link.path}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
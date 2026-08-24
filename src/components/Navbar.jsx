import { useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import DarkMode from "./../features/DarkMode";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const containerRef = useRef(null);
  const { pathname } = useLocation();

  function handleMenu() {
    setMenu(!menu);
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass =
    "nav-link font-medium relative py-1 after:absolute after:content-[''] after:w-full after:h-[1.5px] after:top-full after:left-0 after:bg-primary dark:after:hover:bg-primary";

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

      // --- RESPONSIVE SCROLLTRIGGER ---
      const mm = gsap.matchMedia();

      // Desktop Only (>= 768px): Shrinks from 1280px (full) to 860px
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          ".nav",
          {
            maxWidth: "1280px",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          },
          {
            maxWidth: "860px",
            paddingTop: "0.6rem",
            paddingBottom: "0.6rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
            ease: "none",
            scrollTrigger: {
              trigger: "html",
              start: "top top",
              end: "+=150",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      // Mobile / Tablet (< 768px): Only toggles shadow on scroll
      mm.add("(max-width: 767px)", () => {
        gsap.to(".nav", {
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          duration: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "html",
            start: "top -40",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Recalculate trigger positions after page layout mounts
      ScrollTrigger.refresh();
    },
    {
      scope: containerRef,
      dependencies: [menu, pathname],
    },
  );

  return (
    <nav
      ref={containerRef}
      className="px-4 md:px-8 fixed top-0 left-0 right-0 w-full mx-auto mt-3 z-30 pointer-events-none"
    >
      <div className="nav pointer-events-auto w-full max-w-screen-xl mx-auto p-4 bg-surface/50 backdrop-blur-md border-2 border-border rounded-2xl transition-[background-color] duration-300">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="logo-header flex items-center text-xl md:text-2xl font-semibold tracking-wide text-primary"
          >
            NourMo<span className="text-text-primary">.dev</span>
          </Link>

          {/* Desktop Navbar */}
          <div className="desktop-navbar">
            <ul className="hidden md:flex md:flex-row md:gap-4 text-text-primary">
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
                aria-label="Toggle navigation menu"
                aria-expanded={menu}
                aria-controls="mobile-navigation"
                className="relative flex flex-col items-center justify-center gap-[5px] cursor-pointer w-9 h-9 bg-surface/50 text-text-primary rounded-xl border border-border"
              >
                <span
                  className={`block w-5 h-[2px] bg-text-primary transition-transform duration-300 origin-center ${
                    menu ? "translate-y-[7px] rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-[2px] bg-text-primary transition-opacity duration-300 ${
                    menu ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-[2px] bg-text-primary transition-transform duration-300 origin-center ${
                    menu ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                ></span>
              </button>
            </div>

            {/* Mobile Navbar */}
            {menu && (
              <div className="mobile-nav md:hidden">
                <ul
                  id="mobile-navigation"
                  className="menu p-4 absolute left-0 right-0 text-center top-20 bg-surface/80 backdrop-blur-md border-2 border-border rounded-2xl z-10"
                >
                  {navLinks.map((link) => (
                    <li
                      key={link.path}
                      className="nav-item text-text-primary py-2"
                    >
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

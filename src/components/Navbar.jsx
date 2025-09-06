import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkMode from "./../features/DarkMode";
import { Menu, X } from "lucide-react";
import lightLogo from './../assets/lightLogo.png'
import darkLogo from './../assets/darkLogo.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
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

  return (
    <nav className="px-4 md:px-8 fixed top-0 left-0 right-0 w-full max-w-[1200px] mx-auto mt-3 z-30">
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
                className="menuToggle flex items-center justify-center cursor-pointer p-2 w-9 h-9 bg-background rounded-xl"
              >
                {menu ? (
                  <X className="w-6 h-6 text-text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-text-primary" />
                )}
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
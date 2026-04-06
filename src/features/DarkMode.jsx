import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return savedTheme === "dark" || (!savedTheme && prefersDark);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      // Added `relative` and `overflow-hidden` to keep the icons contained
      className="relative flex items-center justify-center cursor-pointer p-2 w-9 h-9 bg-background text-text-primary rounded-xl overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Sun Icon (Shows in Dark Mode) */}
      <Sun
        className={`absolute w-5 h-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          darkMode
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50"
        }`}
      />

      {/* Moon Icon (Shows in Light Mode) */}
      <Moon
        className={`absolute w-5 h-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          darkMode
            ? "opacity-0 rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100"
        }`}
      />
    </button>
  );
};

export default DarkMode;
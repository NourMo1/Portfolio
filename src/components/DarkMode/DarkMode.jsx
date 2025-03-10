import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full bg-[#f5f5f5] dark:bg-zinc-700"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-third" />
        ) : (
          <Moon className="w-6 h-6 text-zinc-900" />
        )}
      </button>
    </>
  );
}

export default DarkMode
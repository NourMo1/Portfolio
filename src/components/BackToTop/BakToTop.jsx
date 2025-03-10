import React, { useEffect, useState } from 'react'
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const BackToTop = () => {
  const [hover, setHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function buttonVisibility() {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    buttonVisibility()
    window.addEventListener("scroll", buttonVisibility);
    return () => {
      window.removeEventListener("scroll", buttonVisibility);
    };
  }, [])

  function scrollToTop () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onMouseEnter={(e) => setHover(true)}
          onMouseLeave={(e) => setHover(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onClick={scrollToTop}
          className="fixed right-5 bottom-5 z-10 cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-zinc-800 dark:bg-[#f5f5f5] shadow-lg overflow-clip"
        >
          <AnimatePresence>
            <motion.span
              animate={{ y: hover ? [0, -10, 10, 0] : 0 }}
              exit={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="block"
            >
              <ArrowUp className="text-[#f5f5f5] dark:text-zinc-800" />
            </motion.span>
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop
import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  function buttonVisibility() {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    buttonVisibility();
    window.addEventListener("scroll", buttonVisibility);
    return () => {
      window.removeEventListener("scroll", buttonVisibility);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        group fixed right-2 bottom-2 md:right-4 md:bottom-4 z-10 cursor-pointer flex justify-center items-center 
        p-1.5 md:p-2.5 rounded-lg bg-surface text-text-primary border border-border
        transition-all duration-500 ease-in-out
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-5 scale-90 pointer-events-none"
        }
      `}
      aria-label="Back to top"
    >
      <ChevronsUp className="w-8 transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
};

export default BackToTop;

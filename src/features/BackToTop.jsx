import { useEffect, useState } from "react";
import { MoveUp } from "lucide-react";

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
        fixed right-5 bottom-5 z-10 cursor-pointer flex justify-center items-center 
        w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-lg bg-text-primary shadow-xl 
        transition-all duration-300 ease-in-out
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-5 scale-90"
        }
      `}
      >
      <MoveUp className="text-surface w-5 transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
};

export default BackToTop;
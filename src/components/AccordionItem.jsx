import React, { useRef, useEffect } from "react";
import { Sparkle } from "lucide-react";
import gsap from "gsap";

const AccordionItem = ({ title, content, isExpanded, onToggle }) => {
  // 1. Create refs for the elements we want to animate
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  // 2. Handle the animation when isExpanded changes
  useEffect(() => {
    if (isExpanded) {
      // Animate content opening
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        marginTop: 12, // Matches your original mt-3 class (12px)
        duration: 0.5,
        ease: "back.out(1.5)", // Adds a slight bounce effect to the opening
      });
      // Animate icon rotating
      gsap.to(iconRef.current, {
        rotation: 45,
        duration: 0.5,
        ease: "back.out(1.5)", // Adds a slight bounce effect to the rotation
        transformOrigin: "center center",
      });
    } else {
      // Animate content closing
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      // Animate icon rotating back
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.4,
        ease: "back.inOut(1.5)", // Adds a slight bounce effect to the rotation
        transformOrigin: "center center",
      });
    }
  }, [isExpanded]);

  return (
    <button
      onClick={onToggle}
      className="col-span-12 cursor-pointer bg-surface/50 p-5 md:p-10 rounded-xl border-2 border-border transition-colors duration-300 w-full"
    >
      <div className="grid grid-cols-12 gap-5 place-items-center sm:place-items-start">
        <div className="col-span-12 flex items-center justify-between gap-5 w-full">
          <span className="flex justify-center items-center px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-primary">
            <Sparkle ref={iconRef} className="w-4.5 sm:w-5 text-[#F5F5F5]" />
          </span>
          <h3 className="text-lg md:text-xl text-left font-medium text-text-primary w-full">
            {title}
          </h3>
        </div>
      </div>

      {/* Accordion Content */}
      <div
        ref={contentRef}
        // Initial state set to 0 height and 0 opacity so it mounts collapsed natively
        className="overflow-hidden h-0 opacity-0 m-0"
      >
        <p className="text-sm md:text-lg text-text-secondary text-left">
          {content}
        </p>
      </div>
    </button>
  );
};

export default AccordionItem;

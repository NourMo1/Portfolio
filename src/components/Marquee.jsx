import image1 from "../assets/tailwind-css.svg";
import image2 from "../assets/react.svg";
import image3 from "../assets/next-js.svg";
import image4 from "../assets/typescript.svg";
import image5 from "../assets/gsap-greensock.svg";
import image6 from "../assets/redux.svg";
import image7 from "../assets/figma.svg";
import image8 from "../assets/jquery.svg";
import image9 from "../assets/material-ui.svg";

const Marquee = () => {

  const skills = [
    { src: image1, alt: "Tailwindcss" },
    { src: image2, alt: "React" },
    { src: image3, alt: "Next.js" },
    { src: image4, alt: "TypeScript" },
    { src: image5, alt: "GSAP" },
    { src: image6, alt: "Redux" },
    { src: image7, alt: "Figma" },
    { src: image9, alt: "Material UI" },
    { src: image8, alt: "jQuery" },
  ];

  return (
    <div className="marquee overflow-hidden w-full mt-10 relative">
      <div className="marquee-track flex w-max animate-loop-scroll">
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center mx-7 md:mx-10 animate-fade-in-out">
            <img className="w-7 h-7 md:w-10 md:h-10" src={skill.src} alt={skill.alt} loading={"lazy"} />
            <p className="text-lg md:text-xl font-semibold text-text-secondary ms-2">
              {skill.alt}
            </p>
          </div>
        ))}
      </div>
      <div className="shadow-left absolute w-10 h-10 z-20 left-0 top-0 bottom-0"></div>
      <div className="shadow-right absolute w-10 h-10 z-20 right-0 top-0 bottom-0"></div>
    </div>
  );
};

export default Marquee;
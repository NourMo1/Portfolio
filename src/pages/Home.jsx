import About from "./../components/About";
import FeaturedProjects from "./../components/FeaturedProjects";
import Questions from "./../components/Questions";
import BackToTop from "../features/BackToTop";
import Button from "../components/Button";
import { Download, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import Footer from "../components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Home = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Initialize ScrollSmoother
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });

      document.fonts.ready.then(() => {
        const tl = gsap.timeline({
          defaults: { duration: 1.2, ease: "back.inOut", force3D: true },
        });

        tl.to("h1.text-reveal", {
          y: 0,
          opacity: 1,
        })
          .to(
            "p.text-reveal, div.animated",
            {
              y: 0,
              opacity: 1,
              duration: 1,
            },
            "-=0.9",
          )
          .to("div.text-reveal", {
            opacity: 1,
            duration: 1.3,
          });
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        if (smoother) smoother.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <>
      <div id="smooth-wrapper" ref={containerRef}>
        <main id="smooth-content">
          {/* Hero Section */}
          <section className="min-h-screen flex justify-center items-center bg-white dark:bg-surface">
            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="hero py-10 px-2 pt-5 md:pt-10 text-center rounded-ss-xl rounded-se-xl">
                <div className="text-reveal opacity-0 px-4 py-2 rounded-lg md:px-6 md:py-3 md:rounded-xl w-fit mx-auto flex justify-center items-center mb-10">
                  <span className="me-2 w-[10px] h-[10px] rounded-full bg-green-500 relative ">
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                  </span>
                  <p className="text-text-primary font-medium text-xs md:text-sm">
                    Available for new projects
                  </p>
                </div>
                {/* Hero Text */}
                <div className="text-mask overflow-hidden pb-1">
                  <h1 className="text-reveal text-2xl sm:text-3xl md:text-5xl font-semibold text-text-primary mx-auto mb-5 opacity-0 -translate-y-[10rem]">
                    Bringing ideas <br /> to life through the browser
                  </h1>
                </div>
                {/* Hero Subtitle */}
                <div className="text-mask overflow-hidden pb-1">
                  <p className="text-reveal text-sm md:text-lg font-medium text-text-secondary sm:w-[70%] lg:w-[50%] mx-auto mb-10 opacity-0 translate-y-[10rem]">
                    Frontend Developer specializing in responsive, accessible,
                    and high-performance web applications.
                  </p>
                </div>
                {/* Call-to-Action Buttons */}
                <div className="animated flex items-center justify-center flex-wrap gap-3 opacity-0 translate-y-[4rem] overflow-hidden">
                  <Button
                    content={"Download CV"}
                    type={"button"}
                    icon={Download}
                    download={"/Resume.pdf"}
                  />
                  <Link
                    className="flex items-center font-medium nav-link text-xs md:text-sm text-text-primary group"
                    to={"/projects"}
                  >
                    View Work{" "}
                    <MoveRight className="w-4 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 group-hover:translate-x-3 transition-all duration-500" />
                  </Link>
                </div>
              </div>
              <div className="text-reveal opacity-0">
                <Marquee />
              </div>
            </div>
          </section>
          {/* Components */}
          <About />
          <FeaturedProjects />
          <Questions />
          <Footer />
        </main>
      </div>
      <BackToTop />
    </>
  );
};

export default Home;
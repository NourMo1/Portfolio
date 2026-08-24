import About from "./../components/About";
import FeaturedProjects from "./../components/FeaturedProjects";
import Questions from "./../components/Questions";
import BackToTop from "../features/BackToTop";
import Button from "../components/Button";
import { Download, MoveRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import Footer from "../components/Footer";
import { technologies } from "../data/technologies";

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

      // --- TEXT REVEAL TIMELINE ---
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
          })
          .to(
            ".floating-badge",
            {
              opacity: 1,
              scale: 1,
              stagger: 0.1,
              duration: 0.8,
              ease: "back.out(1.7)",
            },
            "-=1",
          );
      });

      // --- INDEPENDENT FLOATING / BOBBING ANIMATION ---
      const floatBadges = gsap.utils.toArray(".floating-badge");
      floatBadges.forEach((badge, index) => {
        gsap.to(badge, {
          y: "-=18",
          x: index % 2 === 0 ? "+=8" : "-=8",
          rotation: index % 2 === 0 ? 6 : -6,
          duration: 2.5 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
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
          <section className="relative min-h-screen flex justify-center items-center bg-transparent overflow-hidden">
            {/* FLOATING ICONS (Positioned across the hero background) */}
            <div className="absolute inset-0 max-w-screen-xl mx-auto pointer-events-none z-10">
              {/* Top Left Icon */}
              <div className="floating-badge opacity-0 scale-50 absolute top-[18%] left-[6%] md:left-[10%] p-2.5 md:p-3 rounded-xl bg-surface/50 backdrop-blur-md border-2 border-border">
                <img
                  src={technologies[0].src}
                  alt={technologies[0].alt}
                  className="w-5 h-5 md:w-7 md:h-7 object-contain"
                />
              </div>

              {/* Mid Left Icon */}
              <div className="floating-badge opacity-0 scale-50 absolute top-[52%] left-[3%] md:left-[6%] p-2.5 md:p-3 rounded-xl bg-surface/50 backdrop-blur-md border-2 border-border hidden sm:block">
                <img
                  src={technologies[1].src}
                  alt={technologies[1].alt}
                  className="w-5 h-5 md:w-6 md:h-6 object-contain"
                />
              </div>

              {/* Top Right Icon */}
              <div className="floating-badge opacity-0 scale-50 absolute top-[20%] right-[6%] md:right-[10%] p-2.5 md:p-3 rounded-xl bg-surface/50 backdrop-blur-md border-2 border-border">
                <img
                  src={technologies[2].src}
                  alt={technologies[2].alt}
                  className="w-5 h-5 md:w-7 md:h-7 object-contain"
                />
              </div>

              {/* Mid Right Icon */}
              <div className="floating-badge opacity-0 scale-50 absolute top-[48%] right-[3%] md:right-[7%] p-2.5 md:p-3 rounded-xl bg-surface/50 backdrop-blur-md border-2 border-border hidden sm:block">
                <img
                  src={technologies[3].src}
                  alt={technologies[3].alt}
                  className="w-5 h-5 md:w-6 md:h-6 object-contain"
                />
              </div>

              {/* Bottom Left Icon */}
              <div className="floating-badge opacity-0 scale-50 absolute bottom-[22%] left-[12%] md:left-[18%] p-2 md:p-2.5 rounded-xl bg-surface/50 backdrop-blur-md border-2 border-border hidden md:block">
                <img
                  src={technologies[4].src}
                  alt={technologies[4].alt}
                  className="w-5 h-5 md:w-6 md:h-6 object-contain"
                />
              </div>

              {/* Bottom Right Icon */}
              <div className="floating-badge opacity-0 scale-50 absolute bottom-[24%] right-[12%] md:right-[18%] p-2 md:p-2.5 rounded-xl bg-surface/50 backdrop-blur-md border-2 border-border hidden md:block">
                <img
                  src={technologies[5].src}
                  alt={technologies[5].alt}
                  className="w-5 h-5 md:w-6 md:h-6 object-contain"
                />
              </div>
            </div>

            <div className="container max-w-screen-xl mx-auto px-4 relative z-20">
              <div className="hero pt-10 px-2 md:pt-15 text-center rounded-ss-xl rounded-se-xl">
                <div className="text-reveal opacity-0 px-4 py-2 border-2 border-border bg-surface/20 rounded-lg md:px-6 md:py-3 md:rounded-xl w-fit mx-auto flex justify-center items-center mb-10">
                  <span className="me-2 w-[10px] h-[10px] rounded-full bg-green-500 relative">
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
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
                  <p className="text-reveal text-sm md:text-lg text-text-secondary sm:w-[70%] lg:w-[50%] mx-auto mb-10 opacity-0 translate-y-[10rem]">
                    Frontend Developer specializing in responsive, accessible,
                    and high performance web applications.
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
                  <Button
                    content={"View Work"}
                    type={"button"}
                    btnClass="bg-transparent text-text-primary"
                    icon={MoveRight}
                    to={"/projects"}
                  />
                </div>
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

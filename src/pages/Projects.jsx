import { useRef } from "react";
import { projects } from "../data/projects";
import BackToTop from "./../features/BackToTop";
import ProjectCard from "./../components/ProjectCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrollSmoother);

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });

      document.fonts.ready.then(() => {
        const headerSplit = new SplitText("h2.text-split", { type: "lines" });
        const paraSplit = new SplitText("p.text-split", { type: "lines" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#smooth-content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
        // CHAINED ANIMATION FOR HEADER AND PARAGRAPH LINES
        tl.from(headerSplit.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.1,
        }).from(
          paraSplit.lines,
          {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.1,
          },
          "-=0.6",
        );
      });
      // Animate the project cards
      gsap.from(".project-cards > div", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      });
    },
    { scope: containerRef },
  );

  return (
    <div id="smooth-wrapper" ref={containerRef}>
      <div id="smooth-content">
        <section className="projects pt-20">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="py-20">
              <div className="text-center mb-10">
                <h2 className="text-split text-2xl md:text-4xl font-semibold text-text-primary mb-5">
                  All Projects
                </h2>

                <p className="text-split text-sm md:text-lg text-text-secondary w-full mx-auto sm:max-w-[70%] md:max-w-[60%]">
                  A showcase of my projects highlighting my skills, creativity,
                  and passion for building impactful digital experiences.
                </p>
              </div>

              <div className="project-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-transparent border-2 border-border rounded-xl p-4 md:p-8 gap-5">
                {projects.allProjects.map(function (project, index) {
                  return (
                    <div key={index}>
                      <ProjectCard
                        title={project.title}
                        image={project.image}
                        repo={project.repo}
                        demo={project.demo}
                        description={project.description}
                        features={project.features}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <BackToTop />
    </div>
  );
};

export default Projects;

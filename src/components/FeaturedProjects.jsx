import { projects } from "../data/projects";
import Button from "./Button";
import { MoveRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const FeaturedProjects = () => {
  const containerRef = useRef(null);
  const featuredProjects = projects.featureProjects;

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const hSplit = new SplitText("h2.header-split", { type: "lines" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        });

        // CHAIN EVERYTHING TO THE TIMELINE
        tl.from(hSplit.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.1,
        }).to(
          ".button",
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.1,
          },
          "-=0.8",
        ); // Added overlap so it flows smoother
      });
      gsap.from(
        ".project-slide",
        {
          // Changed gsap.from to .from to chain it
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="featured py-20 bg-transparent">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="p-4 md:p-8 bg-transparent text-text-primary rounded-xl border-2 border-border">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h2 className="header-split text-2xl md:text-4xl font-semibold text-third">
              Featured projects
            </h2>
            <div className="mt-3 md:mt-0">
              <div className="button opacity-0">
                <Button
                  content={"View More"}
                  type={"button"}
                  icon={MoveRight}
                  to={"/projects"}
                />
              </div>
            </div>
          </div>
          <div className="project-cards grid grid-cols-1 gap-5 md:grid-cols-2">
            {featuredProjects.map(function (project, index) {
              return (
                <div key={index} className="project-slide min-w-0">
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
  );
};

export default FeaturedProjects;

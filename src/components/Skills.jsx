import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { skills } from "../data/skills";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Skills = () => {
  const sectionRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      document.fonts.ready.then(
        contextSafe(() => {
          const hSplit = new SplitText("h2.header-split", { type: "lines" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
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
          });
        }),
      );
      gsap.from(
        ".skill-card",
        {
          // Changed gsap.from to .from to chain it
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
        "-=0.6",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="skills-section py-20 bg-transparent">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="rounded-3xl md:rounded-4xl border-2 border-border bg-transparent p-4 text-text-primary md:p-8">
          <div className="mb-8">
            <div className="flex items-center">
              <span className="me-2 h-px w-8 bg-text-secondary" />
              <p className="text-sm font-medium tracking-wide text-text-secondary">
                What I bring
              </p>
            </div>
            <h2 className="header-split text-2xl font-semibold text-third md:text-4xl">
              Skills that shape the build
            </h2>
          </div>

          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {skills.map(({ skill, icon: Icon, description }) => (
              <li
                key={skill}
                className="skill-card rounded-xl md:rounded-2xl border-2 border-border bg-surface/40 p-5 transition-colors duration-300 hover:bg-surface/70 md:p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary md:text-xl">
                  {skill}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

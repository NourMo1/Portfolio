import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const containerRef = useRef(null);

  const infoItems = [
    { label: "Location", value: "Egypt" },
    { label: "Experience", value: "+1 Years" },
    { label: "Date of birth", value: "15 Jan 2003" },
  ];

  useGSAP(
    (context, contextSafe) => {
      document.fonts.ready.then(
        contextSafe(() => {
          const headerSplit = new SplitText("h2.text-split", { type: "lines" });
          const paraSplit = new SplitText("p.text-split", { type: "lines" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              toggleActions: "play none none none",
            },
          });

          // CHAINED STRICTLY IN ORDER TO CREATE A SEQUENTIAL ANIMATION EFFECT
          // Step 1: Header
          tl.from(headerSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.1,
          })
            // Step 2: Paragraphs
            .from(paraSplit.lines, {
              yPercent: 100,
              opacity: 0,
              duration: 1.2,
              ease: "expo.out",
              stagger: 0.1,
            });
        }),
      );
      // Animate the info items
      gsap.from(".info-items > div", {
        opacity: 0,
        duration: 0.8,
        delay: 2.4, // Delayed to start after the header and paragraphs have animated
        ease: "power2.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      });
      // Animate the stat numbers counting up
      gsap.from(".stat-number", {
        textContent: 0,
        duration: 1,
        delay: 1.5, // Delayed to start after the header and paragraphs have animated
        ease: "power1.inOut",
        snap: { textContent: 1 },
        stagger: 0.8, // Lowered stagger so they count up a bit faster together
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center 60%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="about pb-20 pt:10 md:pt:20">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-20">
        <div className="grid grid-cols-12 gap-4 mb-15 md:mb-25">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="px-4 py-2 rounded-lg md:px-6 md:py-3 md:rounded-xl bg-surface/50 border-2 border-border w-fit flex justify-center items-center mb-10">
              <span className="h-px w-8 me-2 bg-text-secondary" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                Hi, I&apos;m Nour Aldin Mohamed
              </p>
            </div>
            <h2 className="text-split text-text-primary text-xl sm:text-2xl md:text-4xl font-bold leading-8 md:leading-12 mt-5">
              Frontend Developer <br /> React and Next Specialist.
            </h2>
          </div>
          <div className="about-content col-span-12 md:col-span-6 lg:col-span-7 w-full md:w-[90%] lg:w-[80%] md:place-self-end">
            <p className="text-split text-text-primary text-lg md:text-xl font-bold mb-5">
              Jr frontend developer skilled in HTML, CSS, and JavaScript, eager
              to build responsive and high performance web applications.
            </p>
            <p className="text-split text-text-secondary text-sm md:text-lg mb-5">
              Graduated from Kafrelsheikh University, Faculty of Engineering,
              Computer Engineering.
            </p>
            <div className="info-items flex justify-between items-center gap-2 flex-wrap">
              {infoItems.map((item, index) => (
                <div key={index}>
                  <span className="block font-medium text-xs md:text-sm text-primary tracking-tighter uppercase mb-2">
                    {item.label}
                  </span>
                  <p className="sm:text-lg md:text-xl text-text-primary font-bold">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 border-2 border-border rounded-3xl md:rounded-4xl place-items-center bg-surface/25">
          <div className="col-span-12 sm:col-span-4 text-center p-4">
            <div className="p-4">
              <span className="stat-number block text-primary text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5">
                1
              </span>
              <p className="text-sm text-text-primary sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase">
                Years of experience
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 text-center p-4 w-full border-b-2 border-t-2 sm:border-t-0 sm:border-b-0 sm:border-s-2 sm:border-e-2 border-border">
            <div className="p-4">
              <span className="stat-number block text-primary text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5">
                18
              </span>
              <p className="text-sm text-text-primary sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase">
                Projects completed
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 text-center p-4">
            <div className="p-4">
              <span className="stat-number block text-primary text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5">
                20
              </span>
              <p className="text-sm text-text-primary sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase">
                Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

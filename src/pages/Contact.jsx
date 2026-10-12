import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { CircleCheckBig, CircleX, MoveRight, X } from "lucide-react";
import Button from "../components/Button";

// 1. Import GSAP and ALL plugins, including ScrollSmoother
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";

// 2. Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrollSmoother);

/* eslint-disable react/prop-types */
const ContactToast = ({ toastInstance, isSuccess }) => {
  const Icon = isSuccess ? CircleCheckBig : CircleX;

  return (
    <div
      className={`${
        toastInstance.visible ? "animate-enter" : "animate-leave"
      } pointer-events-auto flex w-[min(21rem,calc(100vw-2rem))] items-stretch overflow-hidden rounded-xl border border-border bg-surface/95 shadow-xl backdrop-blur-md`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`w-1 shrink-0 ${isSuccess ? "bg-primary" : "bg-red-500"}`}
      />
      <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
            isSuccess
              ? "bg-primary/15 text-primary"
              : "bg-red-500/15 text-red-500"
          }`}
        >
          <Icon size={20} strokeWidth={2.25} />
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
            {isSuccess ? "Message sent" : "Message not sent"}
          </p>
          <p className="mt-0.5 text-sm leading-5 text-text-primary">
            {isSuccess
              ? "Thanks, I will be in touch soon."
              : "Check your details and try again."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => toast.dismiss(toastInstance.id)}
          className="ml-auto shrink-0 rounded-md p-1 text-text-secondary transition-colors hover:bg-background hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Dismiss notification"
          title="Dismiss notification"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
/* eslint-enable react/prop-types */

const Contact = () => {
  const form = useRef();
  const containerRef = useRef(null);

  useGSAP(() => {
    const wrapper = containerRef.current;
    const content = wrapper?.querySelector("#smooth-content");

    if (!wrapper || !content) return undefined;

    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth: 1.5,
      effects: true,
    });

    return () => smoother.kill();
  });

  useGSAP(
    (context, contextSafe) => {
      document.fonts.ready.then(
        contextSafe(() => {
          const headerSplit = new SplitText("h2.text-split", { type: "lines" });
          const paraSplit = new SplitText("p.text-split", { type: "lines" });

          const tl = gsap.timeline({
            scrollTrigger: {
              // Target the smooth-content wrapper for accurate triggering
              trigger: "#smooth-content",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });

          // 4. Chain the animations
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
        }),
      );
      gsap.from(".form-wrapper", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0styupg", "template_3zthx9a", form.current, {
        publicKey: "dNX-iAMXx1ATKsq2i",
      })
      .then(
        () => {
          toast.custom((t) => <ContactToast toastInstance={t} isSuccess />);
        },
        () => {
          toast.custom((t) => (
            <ContactToast toastInstance={t} isSuccess={false} />
          ));
        },
      );
  };

  return (
    // 5. Wrap the entire section in the ScrollSmoother div structure
    <div id="smooth-wrapper" ref={containerRef}>
      <div id="smooth-content">
        <section className="contact pt-20">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="py-20">
              <div className="text-center mb-10">
                <h2 className="text-split text-2xl md:text-4xl font-semibold text-text-primary mb-5">
                  Let&apos;s Grow Together!
                </h2>
                <p className="text-split text-sm md:text-lg text-text-secondary w-full mx-auto md:w-[65%] lg:w-[70%] xl:w-[75%]">
                  Awesome, you finally made your decision here! Fill this form &
                  i will contact you back.
                </p>
              </div>

              <div className="form-wrapper form p-4 md:p-8 bg-transparent rounded-3xl md:rounded-4xl border-2 border-border mx-auto md:w-[80%] lg:w-[70%]">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-12 gap-5">
                    <div className="name col-span-12 md:col-span-6">
                      <label
                        htmlFor="name"
                        className="block mb-3 font-medium w-fit text-text-primary"
                      >
                        Name
                      </label>
                      <input
                        name="user_name"
                        type="text"
                        id="name"
                        className="block p-3 bg-surface/50 text-text-primary outline-0 border-1 border-border focus:border-primary rounded-xl md:rounded-2xl w-full"
                        required
                      />
                    </div>
                    <div className="email col-span-12 md:col-span-6">
                      <label
                        htmlFor="email"
                        className="block mb-3 font-medium w-fit text-text-primary"
                      >
                        Email
                      </label>
                      <input
                        name="user_email"
                        type="email"
                        id="email"
                        className="block p-3 bg-surface/50 text-text-primary outline-0 border-1 border-border focus:border-primary rounded-xl md:rounded-2xl w-full"
                        required
                      />
                    </div>
                    <div className="message col-span-12 mb-15">
                      <label
                        htmlFor="message"
                        className="block mb-3 font-medium w-fit text-text-primary"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        type="text"
                        id="message"
                        className="block p-3 bg-surface/50 text-text-primary outline-0 border-1 border-border focus:border-primary rounded-xl md:rounded-2xl w-full resize-none h-30"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <Button content={"Submit"} type={"submit"} icon={MoveRight} />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

import { useRef } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Check, MoveRight, OctagonX } from "lucide-react";
import Button from '../components/Button';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0styupg", "template_3zthx9a", form.current, {
        publicKey: "dNX-iAMXx1ATKsq2i",
      })
      .then(
        () => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } bg-white dark:bg-surface shadow-lg rounded-lg border-2 border-primary pointer-events-auto px-2 py-1 sm:px-4 sm:py-2`}
            >
              <div className="flex gap-3 justify-start items-center flex-nowrap">
                <div className="text-third">
                  <Check className="text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Thank you! Your submission has been received
                  </p>
                </div>
              </div>
            </div>
          ));
        },
        (error) => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } bg-white dark:bg-surface shadow-lg rounded-lg border-2 border-primary pointer-events-auto px-2 py-1 sm:px-4 sm:py-2`}
            >
              <div className="flex gap-3 justify-start items-center flex-nowrap">
                <div className="text-third">
                  <OctagonX className="text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Submission failed. Check your input and try again
                  </p>
                </div>
              </div>
            </div>
          ));
        },
      );
  };
  
  return (
    <section className="contact pt-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-semibold text-text-primary mb-5">
              Let's Grow Together!
            </h2>
            <p className="text-sm md:text-lg font-medium text-text-secondary w-full mx-auto sm:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
              Awesome, you finally made your decision here! Fill this form & i
              will contact you back :)
            </p>
          </div>
          <div className="form p-4 md:p-8 bg-surface shadow-lg rounded-xl mx-auto md:w-[80%] lg:w-[70%]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-12 gap-5">
                <div className="name col-span-12 md:col-span-6">
                  <label
                    htmlFor="name"
                    className="block mb-3 w-fit text-text-primary"
                  >
                    Name
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    id="name"
                    className="block p-3 bg-background text-text-primary outline-0 border-1 border-border focus:border-primary rounded-lg w-full"
                    required
                  />
                </div>
                <div className="email col-span-12 md:col-span-6">
                  <label
                    htmlFor="email"
                    className="block mb-3 w-fit text-text-primary"
                  >
                    Email
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    id="email"
                    className="block p-3 bg-background text-text-primary outline-0 border-1 border-border focus:border-primary rounded-lg w-full"
                    required
                  />
                </div>
                <div className="message col-span-12 mb-15">
                  <label
                    htmlFor="message"
                    className="block mb-3 w-fit text-text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    id="message"
                    className="block p-3 bg-background text-text-primary outline-0 border-1 border-border focus:border-primary rounded-lg w-full resize-none h-30"
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
  );
}

export default Contact;
import { Link } from "react-router-dom";
import Button from "./Button";
import { MoveRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      app: "Facebook",
      link: "https://www.facebook.com/share/14irtJc8hn/",
      linkBg: "bg-[#1877f2]",
      icon: "fa-facebook-f",
    },
    {
      id: 2,
      app: "GitHub",
      link: "https://github.com/NourMo1",
      linkBg: "bg-[#333]",
      icon: "fa-github",
    },
    {
      id: 3,
      app: "LinkedIn",
      link: "https://www.linkedin.com/in/nour-aldin-mohamed/",
      linkBg: "bg-[#0a66c2]",
      icon: "fa-linkedin-in",
    },
  ];

  const openInNewTab = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full bg-surface/50 border-t-2 border-border text-text-primary rounded-ss-3xl md:rounded-ss-4xl rounded-se-3xl md:rounded-se-4xl">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="pb-4 border-b-2 border-b-border">
          <div className="start-project mb-5 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-semibold mb-3">
              Let&apos;s Work Together Today!
            </h2>
          </div>
          <div className="social flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <Button
              content={"Start Project"}
              type={"button"}
              icon={MoveRight}
              to={"/contact"}
            />
            <ul className="flex md:flex-row md:justify-end gap-4">
              {socialLinks.map(function (item) {
                return (
                  <li key={item.id}>
                    <Link
                      onClick={openInNewTab}
                      to={item.link}
                      className={`flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-lg ${item.linkBg}`}
                    >
                      <i
                        className={`fa-brands ${item.icon} text-xl text-white duration-500`}
                      ></i>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="copyright text-center pt-4">
          <p className="text-sm md:text-lg font-normal">
            © 2026{" "}
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/nour-aldin-mohamed/"}
              className="inline-block text-primary font-semibold"
            >
              NourMo
            </Link>{" "}
            · Crafted with passion · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

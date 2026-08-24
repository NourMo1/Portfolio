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
    <footer className="w-full bg-surface/50 text-text-primary">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 pb-4 border-b-2 border-b-border">
          <div className="start-project col-span-12 md:col-span-6 mb-5 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-semibold mb-3">
              Let&apos;s Work Together Today!
            </h2>
            <Button
              content={"Start Project"}
              type={"button"}
              icon={MoveRight}
              to={"/contact"}
            />
          </div>
          <div className="social col-span-12 md:col-span-6 place-content-center">
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
            © 2025{" "}
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/nour-aldin-mohamed/"}
              className="inline-block text-primary font-semibold"
            >
              NourMo
            </Link>{" "}
            · Crafted with passion and creativity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

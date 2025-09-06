import { Link } from 'react-router-dom';
import Button from './Button';
import { MoveRight } from 'lucide-react';

const Footer = () => {
  
  const socialLinks = [
    {
      id: 1,
      app: "Facebook",
      link: "https://www.facebook.com/share/14irtJc8hn/",
      linkBg: "bg-[#1877f2]",
      icon: "fa-facebook-f",
      iconBg: "group-hover:text-[#1877f2]",
    },
    {
      id: 2,
      app: "GitHub",
      link: "https://github.com/NourMo1",
      linkBg: "bg-[#333]",
      icon: "fa-github",
      iconBg: "group-hover:text-[#333]",
    },
    {
      id: 3,
      app: "LinkedIn",
      link: "https://www.linkedin.com/in/nour-aldin-mohamed/",
      linkBg: "bg-[#0a66c2]",
      icon: "fa-linkedin-in",
      iconBg: "group-hover:text-[#0a66c2]",
    },
    {
      id: 4,
      app: "Gmail",
      link: "mailto:nouraldinmowrok@gmail.com",
      linkBg: "bg-[#ea4335]",
      icon: "fa-google",
      iconBg: "group-hover:text-[#ea4335]",
    },
  ];
  
  const openInNewTab = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full bg-primary dark:bg-surface text-[#F5F5F5]">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 pb-4 border-b-2 border-b-border">
          <div className="start-project col-span-12 md:col-span-6 mb-5 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-3">
              Let's Work Together Today!
            </h2>
            <Button
              content={"Start Project"}
              btnClass="bg-white text-text-primary dark:text-[#1A1A1A]"
              iconBgColor="bg-primary dark:bg-[#1A1A1A]"
              iconColor="text-white"
              type={"button"}
              icon={MoveRight}
              to={"/projects"}
            />
          </div>
          <div className="social col-span-12 md:col-span-6 place-content-center">
            <ul className="flex md:flex-row md:justify-end">
              {socialLinks.map(function (item) {
                return (
                  <li key={item.id} className="me-5 group">
                    <Link
                      onClick={openInNewTab}
                      to={item.link}
                      className={`flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-lg ${item.linkBg} group-hover:shadow-lg group-hover:bg-white duration-700`}
                    >
                      <i
                        className={`fa-brands ${item.icon} text-xl text-white ${item.iconBg} duration-500`}
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
              className="inline-block text-text-primary dark:text-primary font-semibold"
            >
              NourMo
            </Link>{" "}
            · Crafted with passion — Inspired by{" "}
            <Link
              target="_blank"
              to={"https://www.eclipso.studio/"}
              className="inline-block text-text-primary dark:text-primary font-semibold"
            >
              Eclipso Studio™
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
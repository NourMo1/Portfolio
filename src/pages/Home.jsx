import About from "./../components/About";
import FeaturedProjects from "./../components/FeaturedProjects";
import Questions from "./../components/Questions";
import BackToTop from "../features/BackToTop";
import Button from "../components/Button";
import { Download, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";

const Home = () => {

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center bg-white dark:bg-surface">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="hero py-10 px-2 mt-5 md:mt-10 text-center rounded-ss-xl rounded-se-xl">
            <div className="animated px-4 py-2 rounded-lg md:px-6 md:py-3 md:rounded-xl w-fit mx-auto flex justify-center items-center mb-10">
              <span className="me-2 w-[10px] h-[10px] rounded-full bg-green-500 relative ">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
              </span>
              <p className="text-text-primary font-medium text-xs md:text-sm">
                Available for new projects
              </p>
            </div>
            <h1 className="animated text-2xl sm:text-3xl md:text-5xl font-semibold text-text-primary mx-auto mb-5">
              Bringing ideas <br /> to life through the browser
            </h1>
            <p className="animated text-sm md:text-lg font-medium text-text-secondary sm:w-[70%] lg:w-[50%] mx-auto mb-10">
              Frontend Developer specializing in responsive, accessible, and
              high-performance web applications.
            </p>
            <div className="animated flex items-center justify-center flex-wrap gap-3">
              <Button
                content={"Download CV"}
                type={"button"}
                icon={Download}
                download={"/Resume.pdf"}
              />
              <Link
                className="flex items-center font-medium nav-link text-xs md:text-sm text-text-primary group"
                to={"/projects"}
              >
                View Work{" "}
                <MoveRight className="w-4 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 group-hover:translate-x-3" />
              </Link>
            </div>
          </div>
          <div className="animated">
            <Marquee />
          </div>
        </div>
      </section>
      <BackToTop />
      <About />
      <FeaturedProjects />
      <Questions />
    </main>
  );
};

export default Home;

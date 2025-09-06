import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const ProjectCard = ({ image, title, repo, demo, description, features }) => {
  
  const openInNewTab = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project rounded-lg md:rounded-xl h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="image relative">
        <img className="w-full" src={image} alt={title} loading={"lazy"} />
        <Link
          to={demo}
          onClick={openInNewTab}
          className="flex justify-center items-center px-2 py-1 sm:px-3 sm:py-2 w-10 h-10 rounded-lg bg-[#fff7] backdrop-blur-md absolute top-2 right-2 group transition-all duration-700 ease-in-out hover:w-35 group overflow-hidden"
        >
          <i className="fa-brands fa-github text-lg text-[#1A1A1A] group-hover:me-2"></i>
          <div className="hidden group-hover:flex items-center gap-2">
            <p className="text-[#1A1A1A] font-medium opacity-0 group-hover:opacity-100">
              Repository
            </p>
          </div>
        </Link>
      </div>
      <div className="p-4 bg-background grow">
        <div className="mb-5">
          <Link
            className="flex items-center w-fit mb-3 group"
            onClick={openInNewTab}
            to={repo}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              {title}
            </h3>
            <MoveRight className="w-5 text-primary opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-3" />
          </Link>
          <p className="text-text-primary font-normal text-sm md:text-lg">
            {description}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-2">
          {features.map(function (feature, index) {
            return (
              <li
                key={index}
                className="px-2 py-1 border-1 border-border text-text-secondary rounded-lg text-xs md:text-sm font-light"
              >
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
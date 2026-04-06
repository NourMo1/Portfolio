import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const ProjectCard = ({ image, title, repo, demo, description, features }) => {
  
  const openInNewTab = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project rounded-lg md:rounded-xl h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-lg">
      <div className="image relative">
        <img className="w-full" src={image} alt={title} loading={"lazy"} />
        <Link
          to={demo}
          onClick={openInNewTab}
          className="group absolute top-2 right-2 flex h-10 w-10 items-center overflow-hidden rounded-xl bg-white/70 backdrop-blur-md shadow-sm transition-all duration-500 ease-out hover:w-24 hover:bg-white/90 hover:shadow-md"
        >
          <div className="flex h-full w-10 shrink-0 items-center justify-center">
            <i className="fa-solid fa-eye text-lg text-[#1A1A1A] transition-transform duration-500 group-hover:scale-110" />
          </div>
          <span className="whitespace-nowrap font-semibold text-[#1A1A1A] text-sm opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
            View
          </span>
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
            <MoveRight className="text-primary w-4 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 group-hover:translate-x-3 transition-all duration-500" />
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
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const ProjectCard = ({ image, title, repo, demo, description, features }) => {
  const openInNewTab = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project rounded-lg border-2 border-border md:rounded-xl h-full flex flex-col overflow-hidden transition-all duration-500">
      <div className="image relative">
        <img className="w-full" src={image} alt={title} loading={"lazy"} />
        <Link
          to={demo}
          onClick={openInNewTab}
          className="group absolute top-2 right-2 flex h-10 w-10 items-center overflow-hidden rounded-xl bg-surface/50 backdrop-blur-sm transition-all duration-500 ease-out hover:w-22"
        >
          <div className="flex h-full w-10 shrink-0 items-center justify-center">
            <i className="fa-solid fa-eye text-md text-text-primary transition-transform duration-500 group-hover:scale-110" />
          </div>
          <span className="whitespace-nowrap font-semibold text-text-primary text-sm opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
            Visit
          </span>
        </Link>
      </div>
      <div className="p-4 bg-surface/50 grow">
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
                className="px-2 py-1 border border-border text-text-secondary bg-surface/90 rounded-lg text-xs md:text-sm"
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

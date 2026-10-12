import PropTypes from "prop-types";

const ProjectCard = ({ image, title, repo, demo, description, features }) => {
  return (
    <article className="project rounded-xl md:rounded-2xl border-2 border-border h-full flex flex-col overflow-hidden transition-all duration-500">
      <div className="image relative">
        <img className="w-full" src={image} alt={title} loading={"lazy"} />
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${title} demo`}
          className="group absolute top-2 right-2 flex h-10 w-10 items-center overflow-hidden rounded-lg md:rounded-xl bg-surface/50 backdrop-blur-sm transition-all duration-500 ease-out hover:w-22"
        >
          <div className="flex h-full w-10 shrink-0 items-center justify-center">
            <i className="fa-solid fa-eye text-md text-text-primary transition-transform duration-500 group-hover:scale-110" />
          </div>
          <span className="whitespace-nowrap font-semibold text-text-primary text-sm opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
            Visit
          </span>
        </a>
      </div>
      <div className="p-4 bg-surface/50 grow">
        <div className="mb-5">
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} repository`}
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {title}
            </a>
          </h3>
          <p className="text-text-primary font-normal text-sm md:text-base">
            {description}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-2">
          {features.map(function (feature) {
            return (
              <li
                key={feature}
                className="px-2 py-1 border border-border text-text-secondary bg-surface/90 rounded-lg text-xs md:text-sm"
              >
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;

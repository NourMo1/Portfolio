import { projects } from '../data/projects';
import BackToTop from './../features/BackToTop';
import ProjectCard from './../components/ProjectCard';

const Projects = () => {

  return (
    <>
      <section className="projects pt-20">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="py-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-semibold text-text-primary mb-5">
                All Projects
              </h2>
              <p className="text-sm md:text-lg font-medium text-text-secondary w-full mx-auto sm:max-w-[70%] md:max-w-[60%]">
                A showcase of my projects highlighting my skills, creativity,
                and passion for building impactful digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-surface border-2 border-border rounded-xl p-4 md:p-8 gap-5">
              {projects.allProjects.map(function (project, index) {
                return (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    image={project.image}
                    repo={project.repo}
                    demo={project.demo}
                    description={project.description}
                    features={project.features}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </>
  );
}

export default Projects;
import { projects } from '../data/projects';
import Button from './Button';
import { MoveRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {

  return (
    <section className="featured py-20 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="p-4 md:p-8 bg-surface text-text-primary rounded-xl border-2 border-border">
          <div className="flex flex-wrap justify-between items-center mb-10">
            <h2 className="text-2xl md:text-4xl font-semibold text-third">
              Featured projects
            </h2>
            <div className="mt-3 md:mt-0">
              <Button
                content={"View More"}
                type={"button"}
                icon={MoveRight}
                to={"/projects"}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.featureProjects.map(function (project, index) {
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
  );
}

export default FeaturedProjects
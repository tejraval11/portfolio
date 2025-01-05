import React, { useEffect } from 'react';
import PageTitleDisplay from '../components/PageTitleDisplay';
import TitleDisplay from "../components/TitleDisplay";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { smallProjects } from '../data/smallProjects';
import SmallProjectCard from '../components/SmallProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation only triggers once
    });
  }, []);

  return (
    <div className=''>
      {/* Page Title Section */}
      <div className='flex flex-col' data-aos="fade-up">
        <PageTitleDisplay text='List of my projects' title='projects' />
      </div>

      {/* Complete Apps Section */}
      <div className="flex flex-col space-y-32" data-aos="fade-up">
        <TitleDisplay 
          title="Complete Apps"
          data-aos="fade-up"
        />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
              url={project.url}
              stack={project.stack}
              data-aos="flip-up"
              data-aos-delay={`${index * 100}`} // Delay each project slightly for staggered animation
            />
          ))}
        </div>

        {/* Small Projects Section */}
        <div>
          <TitleDisplay title="Small Projects" data-aos="fade-up" />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 h-auto p-4 mx-auto justify-center"
            data-aos="fade-up"
          >
            {smallProjects.map((project, index) => (
              <SmallProjectCard
                key={project.id}
                stack={project.stack}
                title={project.title}
                description={project.description}
                github={project.github}
                data-aos="flip-up"
                data-aos-delay={`${index * 100}`} // Staggered animation for small projects
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

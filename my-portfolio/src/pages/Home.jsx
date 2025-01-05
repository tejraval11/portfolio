import { useEffect } from "react";
import Hero from "../components/Hero";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/homepage/Skills";
import TitleDisplay from "../components/TitleDisplay";
import Aboutme from "../components/homepage/Aboutme";
import HomeContacts from "../components/homepage/HomeContacts";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-36 px-4 md:px-8">
      {/* Hero Section */}
      <div>
        <Hero />
      </div>

      {/* Projects Section */}
      <div>
        <Projects />
      </div>

      {/* Skills Section */}
      <div>
        <Skills />
      </div>

      {/* About Me Section */}
      <div>
        <Aboutme />
      </div>

      {/* Contact Section */}
      <div>
        <HomeContacts />
      </div>
    </div>
  );
};

export default Home;

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Animation will trigger only once when element comes into view
    });
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* Title and Button */}
      <div className="flex md:justify-between justify-center p-4" data-aos="fade-up">
        <TitleDisplay title="Projects" />
        <div>
          <button className="hidden sm:block">
            <img src="/Heropage/ViewAll.png" alt="View All" />
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mx-auto"
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
            deployment={project.deployment}
            data-aos="flip-up"
            data-aos-delay={`${index * 100}`} // Stagger animation for each project
          />
        ))}
      </div>
    </div>
  );
};

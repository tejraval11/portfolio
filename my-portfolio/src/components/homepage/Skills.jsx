import React from "react";
import TitleDisplay from "../TitleDisplay";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div className="mt-10">
      <div className="flex md:justify-between justify-center">
        <TitleDisplay title="Skills" />
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {/* Left Section: Image */}
        <div className="lg:mr-16 flex justify-center" data-aos="zoom-in" data-aos-duration="1000">
          <ImageDisplay />
        </div>

        {/* Right Section: Skills Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:ml-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {skills.map((skill, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`} data-aos-duration="1000">
              <SkillCard type={skill.type} items={skill.items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

export const ImageDisplay = () => {
  return (
    <div className="relative flex justify-center">
      <img
        className="absolute top-16 left-4 h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] lg:top-32 lg:left-10"
        src="/shapes/Dots.png"
        alt="Dots Decoration"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <img
        className="w-full max-w-[300px] sm:max-w-[400px]"
        src="/skills.png"
        alt="Skills Illustration"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
      <img
        className="absolute top-2 right-4 h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] lg:top-4 lg:right-10"
        src="/shapes/Rectangle.png"
        alt="Rectangle Decoration"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <img
        className="absolute bottom-4 right-10 h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] lg:bottom-10 lg:right-20"
        src="/shapes/Dots.png"
        alt="Dots Decoration"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
    </div>
  );
};

export const SkillCard = ({ type, items }) => {
  return (
    <div
      className="flex flex-col border border-gray max-w-[160px] sm:max-w-[180px] lg:max-w-[200px] mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="text-center text-white border-t border-b border-gray py-2">{type}</div>
      <div className="flex flex-wrap gap-1 px-2 py-2">
        {items.map((item, index) => (
          <span key={index} className="text-gray text-sm sm:text-base break-words">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

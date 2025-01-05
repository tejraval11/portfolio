import React from "react";
import TitleDisplay from "../TitleDisplay";
import { header, para1, para2 } from "../../data/about";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const Navigate = useNavigate();
  return (
    <div className="mt-10">
      {/* Title Section */}
      <div
        className="flex justify-center md:justify-between"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <TitleDisplay title="About Me" />
      </div>

      {/* Main Content */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 md:px-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {/* Left Section: Text */}
        <div
          className="flex flex-col mt-10 md:mt-20 gap-6 font-firacode text-gray"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p>{header}</p>
          <p>{para1}</p>
          <p>{para2}</p>
          <div className="max-w-sm">
            <Button text="Read More ->" onClick={() => Navigate("/about")} />
          </div>
        </div>

        {/* Right Section: Images */}
        <div
          className="flex flex-col items-center justify-center mt-6 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* Image for larger screens */}
          <img
            className="hidden md:block h-[507px] w-auto"
            src="/AboutMe.png"
            alt="About Me Illustration"
          />
          <img
            className="hidden md:block w-[270px] h-[2px] ml-4"
            src="/Heropage/Line.png"
            alt="Line Decoration"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

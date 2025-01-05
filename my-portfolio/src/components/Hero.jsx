import React from 'react';
import Button from './Button';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 p-4 md:p-8">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Hero Text */}
        <div
          className="flex flex-col font-firacode gap-5 text-center md:text-left"
          data-aos="fade-right"
        >
          <HeroText />
        </div>

        {/* Hero Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <ImageDisplay />
        </div>
      </div>

      {/* Quote Section - Hidden on Mobile */}
      <div className="hidden sm:flex justify-center pt-6">
        <img src="/Heropage/quote.png" data-aos="zoom-in-up" alt="Quote" />
      </div>
    </div>
  );
};

export default Hero;

export const HeroText = () => {
  const Navigate = useNavigate();
  return (
    <>
      {/* Heading */}
      <div className="text-[24px] md:text-[32px] mt-6" data-aos="fade-up">
        <span className="text-white font-semibold">
          Tej is a <span className="text-purple">web designer</span> <span>and</span>{' '}
          <span className="text-purple">full-stack developer</span>
        </span>
      </div>

      {/* Subheading */}
      <div className="flex flex-col mt-4" data-aos="fade-up">
        <span className="text-gray text-[14px] md:text-[16px]">
          He crafts responsive websites where technologies meet creativity.
        </span>

        {/* Contact Button */}
        <div className="mt-5" data-aos="fade-up">
          <Button text="Contact me!!" onClick={() => Navigate("/contact")} />
        </div>
      </div>
    </>
  );
};

export const ImageDisplay = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Main Hero Image */}
      <img
        className="min-w-[250px] w-[70%] md:w-auto"
        src="/Heropage/Image.png"
        alt="Hero Illustration"
        data-aos="zoom-in"
      />
      {/* Frame Image */}
      <img
        className="mr-4 min-w-[150px] w-[62%] md:w-auto"
        src="/Heropage/Frame 58.png"
        alt="Hero Frame"
        data-aos="zoom-in-up"
      />
    </div>
  );
};

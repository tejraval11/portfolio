import React from 'react';
import TitleDisplay from '../TitleDisplay';
import { contacts } from '../../data/about';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomeContacts = () => {
  return (
    <div>
      {/* Title Section with animation */}
      <div 
        className="flex justify-center md:justify-between" 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <TitleDisplay title="Contacts" />
      </div>

      {/* Main Content with animation */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 md:px-0 py-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {/* Left Section: Contacts Text */}
        <div 
          className="flex flex-col mt-10 font-firacode text-gray"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p>{contacts}</p>
        </div>

        {/* Right Section: Contact Info */}
        <div 
          className="flex justify-center items-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="flex flex-col text-gray max-w-[280px] font-firacode mt-4 p-4 border border-gray">
            <p className="text-white pl-2">Message Me Here</p>
            <div className="flex items-center p-2">
              <a href="https://www.linkedin.com/in/tej-raval-769241308/"><FaLinkedin className="text-gray text-2xl" /></a>
              <span className="pl-2">Tej Raval</span>
            </div>
            <div className="flex items-center p-2">
              <MdEmail className="text-gray text-2xl" />
              <span className="pl-2">ravaltej11@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContacts;

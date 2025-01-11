import React, { useEffect } from 'react';
import PageTitleDisplay from '../components/PageTitleDisplay';
import TitleDisplay from "../components/TitleDisplay";
import { header, para1, para2 } from '../data/about';
import { skills } from '../data/skills';
import { SkillCard } from '../components/homepage/Skills';
import { myFunFacts } from '../data/myFunFacts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../components/Button';
import { redirect } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation only triggers once
    });
  }, []);

  return (
    <div className='flex flex-col'>
      {/* Page Title Section */}
      <div data-aos="fade-up" data-aos-duration="1500">
        <PageTitleDisplay text='who am i?' title='about-me' />
      </div>
      
      {/* About Me Section */}
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <AboutMeLocal />
      </div>

      {/* Skills Section */}
      <div className='mt-40' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
        <TitleDisplay title="Skills" />
        <div className='mt-20 flex flex-wrap justify-between gap-6'>
          {skills.map((skill, index) => (
            <SkillCard type={skill.type} items={skill.items} key={index} data-aos="flip-up" data-aos-delay={`${index * 100}`} />
          ))}
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className='mt-40'>
        <TitleDisplay title="My Fun Facts" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600" />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {/* Fun Facts Illustration */}
          <div className='h-full w-full flex justify-center items-center' data-aos="zoom-in" data-aos-duration="1000">
            <img className="w-[80%] sm:w-[60%]" src="/Skills2.png" alt="Fun facts illustration" />
          </div>
          
          {/* Fun Facts Content */}
          <div className='flex flex-wrap gap-3 mt-20' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            {myFunFacts.map((fact, index) => (
              <div key={index}>
                <MyFav text={fact} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const AboutMeLocal = () => {
  return (
    <div className="mt-10">
      <TitleDisplay title="About Me" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
        {/* Left Section: Text */}
        <div className="flex flex-col mt-20 gap-10 font-firacode text-gray" data-aos="fade-right" data-aos-duration="1500">
          <p>{header}</p>
          <p>{para1}</p>
          <p>{para2}</p>
          <div className='h-auto'>
          <Button text="Download Resume" onClick ={() => {window.open('https://drive.google.com/file/d/1J3pBRR6Ivz_HK9trwL2cTyy_bp74beFD/view?usp=sharing')}} data-aos="fade-right" data-aos-duration="1500" />
          </div>
            
        </div>
        
        {/* Right Section: Images */}
        <div className="flex flex-col ml-10 w-full justify-start items-center" data-aos="fade-left" data-aos-duration="1500">
          <img
            className="w-[80%] sm:w-[339px] h-auto hidden sm:block"
            src="/AboutMe.png"
            alt="About Me Illustration"
          />
          <img
            className="w-[80%] ml-2
             sm:w-[270px] h-auto hidden sm:block"
            src="/Heropage/Line.png"
            alt="Line Decoration"
          />
        </div>
      </div>
    </div>
  );
};

export const MyFav = ({ text }) => {
  return (
    <div className="font-firacode p-2 py-3 text-gray border border-gray text-nowrap" data-aos="zoom-in" data-aos-duration="1000">
      {text}
    </div>
  );
};

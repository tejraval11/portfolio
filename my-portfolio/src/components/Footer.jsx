import React from 'react';

const Footer = () => {
  return (
    <div className='bg-bgDark font-firacode p-10 pb-0'>
      {/* Horizontal Line with animation */}
      <div 
        className='absolute w-full left-0 bg-gray h-[0.5px]'
        data-aos="fade-in"
        data-aos-duration="1000"
      ></div>

      <div 
        className='grid pt-8 grid-cols-1 md:grid-cols-2 gap-10'
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Left Section: Name and Role */}
        <div className='flex flex-col' data-aos="fade-up" data-aos-duration="1000">
          <span className='text-white text-lg'>
            Tej Raval <span className='text-gray ml-2'>ravaltej11@gmail.com</span>
          </span>
          <p className='text-white text-sm pt-2'>Full-Stack Web Developer</p>
        </div>

        {/* Right Section: Media Links */}
        <div className='flex flex-col w-full items-center' data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <span className='font-semibold text-lg text-white'>Media</span>
          <div className='flex gap-4 pt-2 justify-center'>
            <span className='text-white text-sm'>Instagram</span>
            <span className='text-white text-sm'>Facebook</span>
            <span className='text-white text-sm'>Twitter</span>
          </div>
        </div>
      </div>

      {/* Footer Text with animation */}
      <div className='flex justify-center items-center'>
        <p 
          className='text-gray text-sm pt-10'
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          © Copyright 2024. Made by Tej
        </p>
      </div>
    </div>
  );
}

export default Footer;

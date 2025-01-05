import React from 'react'

const TitleDisplay = ({title}) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      {/* Title Section */}
      <div className="flex items-center justify-center md:justify-start">
        <span className="text-white font-firacode font-semibold text-[24px] md:text-[32px]">
          <span className="text-purple">#</span>{title}
        </span>

        {/* Line Image: Hidden on Mobile */}
        <img 
          src="/Heropage/Line.png" 
          alt="" 
          className="ml-4 hidden md:block" 
        />
      </div>
    </div>
  )
}

export default TitleDisplay

import React from "react";

const PageTitleDisplay = ({ title, text }) => {
  return (
    <div className="flex flex-col font-firacode py-20">
      <div className="">
        <h1 className="text-white text-4xl">
          <span className="text-purple">/</span>
          {title}
        </h1>
        <p className="text-gray text-lg">{text}</p>
      </div>
    </div>
  );
};

export default PageTitleDisplay;

import React from 'react';
import Button from './Button';
import { redirect } from 'react-router-dom';

const SmallProjectCard = ({ stack, title, description, github }) => {
  return (
    <div className="flex justify-center items-center"> {/* Centering the card */}
      <div className="flex font-firacode flex-col border border-gray max-w-[338px] w-full overflow-hidden">
        {/* Stack Section */}
        <div className="flex gap-2 px-2 py-1 w-full border-t border-b border-gray text-white">
          {stack.map((item, index) => (
            <span
              key={index}
              className="text-gray text-[16px] break-words"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Content Section */}
        <div className="flex flex-col gap-5 px-2 py-5">
          <span className="text-white text-lg">{title}</span>
          <span className="text-gray text-sm">{description}</span>
          <div className="flex gap-2 mt-4">
            <Button text="Github <~>" onClick={() => redirect(github)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProjectCard;

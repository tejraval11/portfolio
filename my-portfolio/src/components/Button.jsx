import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="text-purple border-[2px] border-solid border-purple px-[16px] py-[8px] font-firacode hover:bg-purple hover:text-white transition"
    >
      {text}
    </button>
  );
};

export default Button;

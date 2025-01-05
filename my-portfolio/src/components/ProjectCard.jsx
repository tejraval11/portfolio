import * as React from "react";
import Button from "./Button";
import { redirect } from "react-router-dom";

export default function ProjectCard({ name, description, image, url, stack, deployment }) {
  return (
    <div
      className="flex  flex-col text-base border border-gray max-w-[338px] bg-gray-800 mx-auto sm:mx-0 sm:max-w-[338px]"
      data-aos="fade-up" // Animation on scroll
      data-aos-duration="1000" // Animation duration
      data-aos-easing="ease-in-out" // Easing function
    >
      {/* Dynamic Project Image */}
      <img
        loading="lazy"
        src={image}
        alt={`${name} project screenshot`}
        className="object-cover w-full h-[200px] rounded-t-lg"
      />

      {/* Stack Tags */}
      <div className="flex gap-2 px-2 py-1 w-full font-firacode border-t border-b border-gray text-gray flex-wrap">
        {stack.map((tech, index) => (
          <span key={index} className="">
            {tech}
          </span>
        ))}
      </div>

      {/* Project Details */}
      <div className="flex flex-col p-4 w-full">
        <div className="font-firacode text-xl text-white">{name}</div>
        <div className="mt-2 text-gray text-[16px] font-firacode">{description}</div>
        <div className="flex gap-4 items-start self-start mt-4">
          {/* Dynamic Live Link */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-purple-600 rounded hover:bg-purple-700"
            tabIndex={0}
          >
            <Button text={deployment} onClick={() => {redirect(url)}} />
          </a>
        </div>
      </div>
    </div>
  );
}

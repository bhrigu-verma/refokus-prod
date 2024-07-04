/* eslint-disable react/prop-types */
import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

function Button({ title="Get Started" }) {
  return (
    <div className="w-[2vw] sm:text-xs px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-lg font-thin">{title}</span>
      <MdSubdirectoryArrowRight />
    </div>
  );
}

export default Button;

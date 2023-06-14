import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Cover = ({ img, title }) => {
  return (
    <div className="relative">
      <img src={img} alt="" className="h-full w-full" />
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold text-[#e43d4e]">
        <Typewriter
          words={[`${title}`]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={800}
        />
      </h2>
    </div>
  );
};

export default Cover;

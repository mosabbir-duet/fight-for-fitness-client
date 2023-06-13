import React from "react";
import InstructorInfo from "./InstructorInfo";

const Instructor = () => {
  return (
    <div className="bg-[#13182a] px-8 py-12 md:py-44 text-center space-y-7">
      <p className="text-[#e43d4e] uppercase">Meet Our Trainer</p>
      <h2 className="text-2xl md:text-6xl text-center text-gray-200">
        Get the training under best trainers
      </h2>
      <InstructorInfo></InstructorInfo>
    </div>
  );
};

export default Instructor;

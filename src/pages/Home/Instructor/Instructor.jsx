import React from "react";
import useFetchSortedInfo from "../../../Hooks/useFetchSortedInfo";
import InstructorInfo from "./InstructorInfo";

const Instructor = () => {
  const [instructors] = useFetchSortedInfo("instructors");

  return (
    <div className="bg-[#13182a] px-4 py-12 md:py-44 text-center space-y-7">
      <p className="text-[#e43d4e] uppercase">Meet Our Trainer</p>
      <h2 className="text-2xl md:text-6xl text-center text-gray-200">
        Get the training under best trainers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 pt-8">
        {instructors.map((instructor) => (
          <InstructorInfo
            key={instructor._id}
            instructor={instructor}
          ></InstructorInfo>
        ))}
      </div>
    </div>
  );
};

export default Instructor;

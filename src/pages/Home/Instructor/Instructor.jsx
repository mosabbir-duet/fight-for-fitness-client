import React from "react";
import useFetch from "../../../Hooks/useFetch";
import ShowInfo from "../../../components/ShowInfo";

const Instructor = () => {
  const [instructors] = useFetch("info");
  // console.log(instructors);

  return (
    <div className="bg-[#13182a] px-4 py-12 md:py-44 text-center space-y-7">
      <p className="text-[#e43d4e] uppercase">Meet Our Trainer</p>
      <h2 className="text-2xl md:text-6xl text-center text-gray-200">
        Get the training under best trainers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 pt-8">
        {instructors.map((instructor) => (
          <ShowInfo key={instructor._id} data={instructor} info={""}></ShowInfo>
        ))}
      </div>
    </div>
  );
};

export default Instructor;

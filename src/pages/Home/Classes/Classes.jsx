import React from "react";
import useFetchSortedInfo from "../../../Hooks/useFetchSortedInfo";
import ShowInfo from "../../../components/ShowInfo";

const Classes = () => {
  const [classes] = useFetchSortedInfo("instructors");

  return (
    <div className="bg-[#13182a] px-4 py-12 md:py-44 text-center space-y-7">
      <p className="text-[#e43d4e] uppercase">See Our Classes</p>
      <h2 className="text-2xl md:text-6xl text-center text-gray-200">
        Get the better classes from our trainers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 pt-8">
        {classes.map((program) => (
          <ShowInfo key={program._id} data={program} info="class"></ShowInfo>
        ))}
      </div>
    </div>
  );
};

export default Classes;

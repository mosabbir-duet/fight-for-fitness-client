import React from "react";
import useFetch from "../../Hooks/useFetch";
import instructorsCover from "../../assets/images/instructor-banner.jpg";
import Cover from "../../components/Cover";
import PageName from "../../components/PageName";
import InstructorsInfo from "./InstructorsInfo";
const Instructors = () => {
  const [instructors] = useFetch("instructors");
  //   const employees = [
  //     { emp_id: 1, emp_name: "Shubham", emp_age: 22 },
  //     { emp_id: 1, emp_name: "Joe", emp_age: 23 },
  //  ];
  var map = new Map();
  for (let instructor of instructors) {
    map.set(instructor["name"], instructor);
  }
  let instructorValues = map.values();
  let UniqueInstructors = [...instructorValues];
  return (
    <div>
      <PageName pageName={"Instructors"}></PageName>
      <Cover img={instructorsCover} title="Instructors"></Cover>
      <div className="bg-[#13182a] px-4 py-12 md:py-44 text-center space-y-7">
        <p className="text-[#e43d4e] uppercase">Meet Our Instructors</p>
        <h2 className="text-2xl md:text-6xl text-center text-gray-200">
          Get the training under best trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-8">
          {UniqueInstructors.map((instructor) => (
            <InstructorsInfo
              key={instructor._id}
              instructor={instructor}
            ></InstructorsInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;

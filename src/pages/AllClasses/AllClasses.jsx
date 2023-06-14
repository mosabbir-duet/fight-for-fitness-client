import React from "react";
import useFetch from "../../Hooks/useFetch";
import classCover from "../../assets/images/classes-banner.jpg";
import Cover from "../../components/Cover";
import PageName from "../../components/PageName";
import ShowClassInfo from "./ShowClassInfo";
const AllClasses = () => {
  const [classes] = useFetch("instructors");
  return (
    <div>
      <PageName pageName={"Class information"}></PageName>
      <Cover img={classCover} title={"All Class Information"}></Cover>
      <div className="bg-[#13182a] px-4 py-12 md:py-44 text-center space-y-7">
        <p className="text-[#e43d4e] uppercase">Take a look Our Classes</p>
        <h2 className="text-2xl md:text-6xl text-center text-gray-200">
          Getting best class from our instructors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-8 px-4">
          {classes.map((classInfo) => (
            <ShowClassInfo
              key={classInfo._id}
              classInfo={classInfo}
            ></ShowClassInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClasses;

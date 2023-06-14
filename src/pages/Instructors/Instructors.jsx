import React from "react";
import useFetch from "../../Hooks/useFetch";
import instructorsCover from "../../assets/images/instructor-banner.jpg";
import Cover from "../../components/Cover";
import PageName from "../../components/PageName";
const Instructors = () => {
  const [instructors] = useFetch("instructors");
  return (
    <div>
      <PageName pageName={"Instructors"}></PageName>
      <Cover img={instructorsCover} title="Instructors"></Cover>
    </div>
  );
};

export default Instructors;

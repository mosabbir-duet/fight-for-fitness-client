import React from "react";
import classCover from "../../assets/images/classes-banner.jpg";
import Cover from "../../components/Cover";
import PageName from "../../components/PageName";
const AllClasses = () => {
  return (
    <div>
      <PageName pageName={"Class information"}></PageName>
      <Cover img={classCover} title={"All Class Information"}></Cover>
    </div>
  );
};

export default AllClasses;

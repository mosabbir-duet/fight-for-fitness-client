import React from "react";
import PageName from "../../../components/PageName";
import Banner from "../Banner/Banner";
import Program from "../Program/Program";

const Home = () => {
  return (
    <div>
      <PageName pageName="Home"></PageName>
      <Banner></Banner>
      <Program></Program>
    </div>
  );
};

export default Home;

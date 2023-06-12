import React from "react";
import PageName from "../../../components/PageName";
import Banner from "../Banner/Banner";
import Dark from "../Dark/dark";

const Home = () => {
  return (
    <div>
      <PageName pageName="Home"></PageName>
      <Banner></Banner>
      <Dark></Dark>
    </div>
  );
};

export default Home;

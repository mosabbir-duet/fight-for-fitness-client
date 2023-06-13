import React from "react";
import PageName from "../../../components/PageName";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Instructor from "../Instructor/Instructor";
import Program from "../Program/Program";

const Home = () => {
  return (
    <div>
      <PageName pageName="Home"></PageName>
      <Banner></Banner>
      <Instructor></Instructor>
      <Program></Program>
      <Classes></Classes>
    </div>
  );
};

export default Home;

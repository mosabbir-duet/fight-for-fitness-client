import { React } from "react";
import { Typewriter } from "react-simple-typewriter";
const BannerContent = ({ image }) => {
  return (
    <>
      <img src={image} alt="" />
      <div className="slider-text ">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-">
          Welcome to <br />{" "}
          <span className="text-warning">
            <Typewriter
              words={[`Fight For Fitness`]}
              loop={10}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "}
          <br />
          Martial Arts School
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-warning">
          Karate is martial art and way of life that trains a practitioner to be
          peaceful.
        </p>
        <button className=" btn btn-warning  hover:rounded-3xl">
          Get a Free Lesson
        </button>
      </div>
    </>
  );
};

export default BannerContent;

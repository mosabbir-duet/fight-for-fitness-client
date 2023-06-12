import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import adults from "../../../assets/images/adult.jpg";
import kids from "../../../assets/images/kids.jpg";
import program from "../../../assets/images/slider/program-bg.jpg";
import adultsKids from "../../../assets/images/teen-adult.jpg";
import ProgramContent from "./ProgramContent";
const Program = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${program})`,
          height: "1080px",
          minHeight: "400px",

          /* Create the parallax scrolling effect */
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-48 px-4 "
      >
        <div className="pb-24">
          <h2 className="text-5xl font-bold text-center text-white">
            Our Programs
          </h2>
          <hr className="w-20 block mx-auto mt-8 " />
        </div>
        <div className=" ">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={1000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1161,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              tab: {
                breakpoint: {
                  max: 1160,
                  min: 769,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
              mobile: {
                breakpoint: {
                  max: 768,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 20,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
          >
            <ProgramContent
              info="Karate is a Japanese martial art whose physical aspects seek the development of defensive and counterattacking body movements."
              title="Kids Karate Groups"
              image={kids}
            />
            <ProgramContent
              info="Karate is a Japanese martial art whose physical aspects seek the development of defensive and counterattacking body movements."
              title="Teen & Adult Karate"
              image={adultsKids}
            />
            <ProgramContent
              info="Karate is a Japanese martial art whose physical aspects seek the development of defensive and counterattacking body movements."
              title="Traditional Martial Arts"
              image={adults}
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Program;

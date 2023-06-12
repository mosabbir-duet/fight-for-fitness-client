import React from "react";

const ProgramContent = ({ title, image, info }) => {
  return (
    <>
      <div className="card card-compact max-w-80 sm:w-96  mx-auto hover:scale-105 duration-700 rounded-xl my-8 border border-red-600">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="w-full hover:scale-110 duration-500"
          />
        </figure>
        <div className="card-body bg-[#13182a] rounded-b-xl text-center sm:px-4">
          <div className="space-y-2">
            <h2 className=" text-3xl text-white font-semibold hover:text-[#e43d4e]">
              {title}
            </h2>
            <p className="text-[#e43d4e] text-md">Sat-Sun(9am to 1pm)</p>
          </div>
          <p className="text-lg text-gray-500">{info}</p>
        </div>
      </div>
    </>
  );
};

export default ProgramContent;

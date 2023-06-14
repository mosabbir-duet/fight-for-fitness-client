import React from "react";

const InstructorsInfo = ({ instructor }) => {
  const { name, email, image, numberOfStudents } = instructor || {};
  return (
    <div>
      <div className="card card-compact max-w-96 bg-[#13182a] shadow-xl hover:scale-105 duration-700 hover:border hover:border-red-600 ">
        <figure>
          <img src={image} alt="instructor" className="w-full " />
        </figure>
        <div className="card-body  text-gray-200 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="card-title">
              Name: <span className="text-[#e43d4e] text-2xl">{name}</span>
            </h2>
            <p className="text-lg">Total Students: {numberOfStudents}</p>
          </div>

          <div className=" flex justify-around items-center">
            <button className="btn btn-warning">Show Classes</button>
            <p className="text-lg">Email: {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsInfo;

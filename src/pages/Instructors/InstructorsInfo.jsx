import React from "react";

const InstructorsInfo = ({ instructor }) => {
  const { name, email, image, numberOfStudents } = instructor || {};
  return (
    <div>
      <div className="card card-compact max-w-96 min-h-full  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="instructor" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <p>{numberOfStudents}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Show Classes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsInfo;

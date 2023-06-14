import React from "react";

const ShowClassInfo = ({ classInfo }) => {
  const { className, classImage, name, price, availableSeats } =
    classInfo || {};

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl h-full">
        <figure>
          <img
            src={classImage}
            alt="Album"
            className="h-64 w-full hover:scale-110 duration-500"
          />
        </figure>
        <div className="p-4 space-y-5">
          <div className="flex justify-between items-center">
            <h2 className="text-lg">
              Class Name:{" "}
              <span className="text-[#e43d4e] text-xl font-medium">
                {className}
              </span>
            </h2>
            <p className="text-lg">Available Seats: {availableSeats}</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="card-title">
              Instructor:{" "}
              <span className="text-[#e43d4e] text-2xl">{name}</span>
            </h2>
            <p className="text-lg">Price: $ {price}</p>
          </div>

          <div className=" card-actions justify-end">
            <button
              className="btn btn-warning "
              disabled={availableSeats === 0}
            >
              Select Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowClassInfo;

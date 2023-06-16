import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ShowClassInfo = ({ classInfo }) => {
  const { className, classImage, name, price, availableSeats, _id } =
    classInfo || {};

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToSelectClass = (classInfo) => {
    if (user && user.email) {
      const cartItem = {
        classItemId: _id,
        name,
        className,
        classImage,
        price,
        email: user?.email,
        userName: user?.displayName,
      };
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
              onClick={() => handleToSelectClass(classInfo)}
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

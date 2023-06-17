import React from "react";
import Swal from "sweetalert2";

const ShowSelectedClass = ({ cartItem, idx, refetch }) => {
  const { name, className, price, userName, _id } = cartItem || {};
  const handleToDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fight-for-fitness-server.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your selected class has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{userName}</td>
        <td>{className}</td>
        <td>{name}</td>
        <td>$ {price}</td>
        <td>
          <button
            onClick={() => handleToDelete(_id)}
            className="btn btn-error me-2 btn-xs"
          >
            Delete
          </button>
          <button className="btn btn-success btn-xs">Payment</button>
        </td>
      </tr>
    </>
  );
};

export default ShowSelectedClass;

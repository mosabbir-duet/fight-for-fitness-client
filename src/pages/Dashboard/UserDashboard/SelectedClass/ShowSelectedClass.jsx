import React from "react";

const ShowSelectedClass = ({ cartItem, idx }) => {
  const { name, className, price, userName } = cartItem || {};
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{userName}</td>
        <td>{className}</td>
        <td>{name}</td>
        <td>$ {price}</td>
        <td>
          <button className="btn btn-error me-2 btn-xs">Delete</button>
          <button className="btn btn-success btn-xs">Payment</button>
        </td>
      </tr>
    </>
  );
};

export default ShowSelectedClass;

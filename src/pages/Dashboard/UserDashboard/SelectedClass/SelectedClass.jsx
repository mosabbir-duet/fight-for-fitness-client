import React from "react";
import useCart from "../../../../Hooks/useCart";
import PageName from "../../../../components/PageName";
import ShowSelectedClass from "./ShowSelectedClass";

const SelectedClass = () => {
  const [cart, refetch] = useCart();
  console.log(cart);

  return (
    <div className="bg-red-100 w-10/12 p-12 rounded-xl">
      <PageName pageName={"Selected Class"}></PageName>
      <div className="overflow-x-auto  rounded-md bg-gray-300">
        <table className="table table-zebra">
          {/* head */}
          <thead className=" bg-red-600 text-lg font-medium text-slate-200">
            <tr className="">
              <th>S.N</th>
              <th>Student Name</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-md">
            {cart.map((cartItem, idx) => (
              <ShowSelectedClass
                key={cartItem._id}
                cartItem={cartItem}
                idx={idx}
                refetch={refetch}
              ></ShowSelectedClass>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PageName from "../../../../components/PageName";

const ManageUsers = () => {
  const [admin, setAdmin] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleToMakeAdmin = (user) => {
    fetch(`http://localhost:3000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setAdmin(true);
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleToMakeInstructor = (user) => {
    fetch(`http://localhost:3000/users/instructors/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setAdmin(true);
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full bg-yellow-200 p-12">
      <PageName pageName={"Manage Users"}></PageName>
      <h3 className="text-3xl font-semibold pb-8 text-center text-slate-700 ">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra rounded-xl">
          {/* table heading area */}
          <thead className="bg-red-300 text-lg font-medium ">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody className="bg-gray-300 rounded-xl text-">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleToMakeAdmin(user)}
                    disabled={user.role === "admin" ? true : false}
                    className="btn btn-warning btn-xs me-2 text-white"
                  >
                    Admin
                  </button>

                  <button
                    onClick={() => handleToMakeInstructor(user)}
                    disabled={user.role === "instructor" ? true : false}
                    className="btn btn-success btn-xs text-white"
                  >
                    Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

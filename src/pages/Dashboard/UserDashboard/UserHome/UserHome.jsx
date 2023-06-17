import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <span className="text-5xl text-[#13182a] font-medium me-4">
        Welcome To
      </span>{" "}
      <span className="text-5xl text-[#e43d4e] font-bold">
        {user?.displayName}
      </span>
    </div>
  );
};

export default UserHome;

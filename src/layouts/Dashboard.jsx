import React from "react";
import {
  FaBook,
  FaBookReader,
  FaChalkboardTeacher,
  FaHome,
  FaMarker,
  FaRegEdit,
  FaUserEdit,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-violet-700">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay text-center block text-2xl font-semibold mt-4 "
          >
            User Dashboard
          </label>
          <ul className="menu p-4 w-80 h-full  text-base-content ">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li className="text-lg text-gray-50">
                  <NavLink to="/dashboard/adminhome">
                    <FaRegEdit className="text-[#e43d4e]"></FaRegEdit>Admin Home
                  </NavLink>
                </li>
                <li className="text-lg text-gray-50">
                  <NavLink to="/dashboard/manageclass">
                    <FaRegEdit className="text-[#e43d4e]"></FaRegEdit>Manage
                    Classes
                  </NavLink>
                </li>
                <li className=" text-lg text-gray-50">
                  <NavLink to="/dashboard/manageusers">
                    <FaUserEdit className="text-[#e43d4e]"></FaUserEdit>Manage
                    Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="text-lg text-gray-50">
                  <NavLink to="/dashboard/userhome">
                    <FaBook className="text-[#e43d4e]"></FaBook>User Home
                  </NavLink>
                </li>
                <li className="text-lg text-gray-50">
                  <NavLink to="/dashboard/selectedclass">
                    <FaBook className="text-[#e43d4e]"></FaBook>My Selected
                    Class
                  </NavLink>
                </li>
                <li className=" text-lg text-gray-50">
                  <NavLink to="/dashboard/enrolledclass">
                    <FaBookReader className="text-[#e43d4e]"></FaBookReader>My
                    Enrolled Class
                  </NavLink>
                </li>
              </>
            )}

            {/* common link */}
            <div className="divider"></div>

            <li className=" text-lg text-gray-50">
              <NavLink to="/">
                <FaHome className="text-[#e43d4e]"></FaHome> Home
              </NavLink>
            </li>
            <li className=" text-lg text-gray-50">
              <NavLink to="/instructors">
                <FaChalkboardTeacher className="text-[#e43d4e]"></FaChalkboardTeacher>
                Instructors
              </NavLink>
            </li>
            <li className=" text-lg text-gray-50">
              <NavLink to="/classes">
                <FaMarker className="text-[#e43d4e]"></FaMarker>Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

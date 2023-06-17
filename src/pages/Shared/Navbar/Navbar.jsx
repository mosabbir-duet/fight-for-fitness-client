import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Navbar.css";
const Navbar = () => {
  let [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleToLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error.message));
  };
  const linksItem = (
    <>
      <li className="md:ml-8  text-xl font-semibold md:my-0 py-2 ">
        <NavLink
          to="/"
          className={`text-white hover:text-[#E43D4E] duration-500 ${({
            isActive,
          }) => (isActive ? "active" : "default")}`}
        >
          Home
        </NavLink>
      </li>

      <li className="md:ml-8  text-xl font-semibold md:my-0 py-2  ">
        <NavLink
          to="/instructors"
          className="text-white hover:text-gray-400 duration-500"
        >
          Instructors
        </NavLink>
      </li>
      <li className="md:ml-8  text-xl font-semibold md:my-0 py-2  ">
        <NavLink
          to="/classes"
          className="text-white hover:text-gray-400 duration-500"
        >
          Classes
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-xl border-b-2 border-red-600 w-full fixed top-0 left-0 z-50 bg-[#13182A] bg-opacity-80">
      <div className="flex md:flex items-center justify-between py-3.5 md:px-10 container mx-auto">
        <img className="w-20 h-20" src={logo} alt="" />

        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-1/2 top-10 cursor-pointer md:hidden"
        >
          {open ? (
            <FaTimes className="text-red-600"></FaTimes>
          ) : (
            <FaBars className="text-violet-600"></FaBars>
          )}
        </div>

        <ul
          className={`md:flex md:items-center  absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 p-4  transition-all duration-500 ease-in bg-[#13182a] text-center   md:bg-transparent ${
            open ? "top-28 " : "top-[-490px]"
          }`}
        >
          {linksItem}
        </ul>

        {user ? (
          <>
            <div className="flex items-center">
              {isAdmin ? (
                <li>
                  <Link
                    to="/dashboard/adminhome"
                    className="nav-list-style btn btn-error me-2"
                  >
                    Dashboard
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to="/dashboard/userhome"
                    className="nav-list-style btn btn-error me-2"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <img
                className="w-14 h-14 border-4 border-gray-400  px-0.5 rounded-full inline-block mr-4 "
                src={user.photoURL}
                alt=""
                title={user?.displayName}
              />

              <Link
                onClick={handleToLogOut}
                className="nav-list-style btn btn-warning"
              >
                SignOut
              </Link>
            </div>
          </>
        ) : (
          <li className="md:ml-8  text-xl font-semibold md:my-0 py-2  ">
            <NavLink
              to="/login"
              className="text-white hover:text-gray-400 duration-500"
            >
              Login
            </NavLink>
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;

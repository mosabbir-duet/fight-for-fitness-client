import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  let [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const linksItem = (
    <>
      <li className="md:ml-8  text-xl font-semibold md:my-0 py-2 border-dotted border-b-red-200  md:border-0">
        <Link
          to="/"
          className="text-white hover:text-[#E43D4E] duration-500   "
        >
          Home
        </Link>
      </li>

      <li className="md:ml-8  text-xl font-semibold md:my-0 py-2  ">
        <Link to="/" className="text-white hover:text-gray-400 duration-500">
          Instructors
        </Link>
      </li>
      <li className="md:ml-8  text-xl font-semibold md:my-0 py-2  ">
        <Link to="/" className="text-white hover:text-gray-400 duration-500">
          Classes
        </Link>
      </li>
    </>
  );
  return (
    <div className="shadow-xl border-b-2 border-red-600 w-full fixed top-0 left-0 z-50 bg-slate-950 bg-opacity-80">
      <div className="flex md:flex items-center justify-between py-2 md:px-10 container mx-auto">
        {/* <div
          className="font-bold text-2xl cursor-pointer flex items-center  
    text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div> */}
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
          className={`md:flex md:items-center  absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 p-4  transition-all duration-500 ease-in bg-red-300 text-center   md:bg-transparent ${
            open ? "top-28 " : "top-[-490px]"
          }`}
        >
          {/* {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 py-2  ">
              <L
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </L>
            </li>
          ))} */}
          {linksItem}
        </ul>
        <button className="btn btn-warning">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import AllClasses from "../pages/AllClasses/AllClasses";
import EnrolledClass from "../pages/Dashboard/UserDashboard/EnrolledClass/EnrolledClass";
import SelectedClass from "../pages/Dashboard/UserDashboard/SelectedClass/SelectedClass";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "selectedclass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrolledclass",
        element: <EnrolledClass></EnrolledClass>,
      },
    ],
  },
]);

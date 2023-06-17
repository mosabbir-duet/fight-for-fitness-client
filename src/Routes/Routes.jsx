import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import AllClasses from "../pages/AllClasses/AllClasses";
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome/AdminHome";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import EnrolledClass from "../pages/Dashboard/UserDashboard/EnrolledClass/EnrolledClass";
import SelectedClass from "../pages/Dashboard/UserDashboard/SelectedClass/SelectedClass";
import UserHome from "../pages/Dashboard/UserDashboard/UserHome/UserHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "selectedclass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrolledclass",
        element: <EnrolledClass></EnrolledClass>,
      },

      {
        path: "adminhome",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
      {
        path: "manageclass",
        element: (
          <AdminRoutes>
            <ManageClasses></ManageClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

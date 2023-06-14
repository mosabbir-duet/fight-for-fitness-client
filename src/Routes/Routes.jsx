import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AllClasses from "../pages/AllClasses/AllClasses";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";

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
    ],
  },
]);

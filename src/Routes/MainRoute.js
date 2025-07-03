import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import FrontLayout from "../Layouts/FrontLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FrontLayout,
  },
  {
    path: "/home",
    Component: MainLayout,
    loader: () => fetch("/projects.json").then(res => res.json()), 
  },
]);

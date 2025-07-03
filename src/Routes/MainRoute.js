import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import FrontLayout from "../Layouts/FrontLayout";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: FrontLayout,
        
        },
        {
            path: "/home",
            Component: MainLayout,
        }
    ]
)
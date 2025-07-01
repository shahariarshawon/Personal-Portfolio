import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

export const router=createBrowserRouter(
    [
        {
            path:"/",
            Component:MainLayout,
            children:[
                {
                    index:true,
                    Component:HomePage,
                },
                {
                    path:"/login",
                    Component:LoginPage
                },
                {
                    path:"/register",
                    Component:RegisterPage,
                }
            ]
        }
    ]
)
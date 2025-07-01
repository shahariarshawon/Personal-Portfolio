import React from "react";
import { Link } from "react-router";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="#"
                className="relative group text-gray-800 dark:text-white"
              >
                Item 1
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="relative group text-gray-800 dark:text-white"
              >
                Item 2
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="relative group text-gray-800 dark:text-white"
              >
                Item 3
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
        <Link className=" text-xl font-bold bitcount-font">
          <span className="text-violet-500">Shahariar</span>
          <span className="text-red-400">Arafat</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-6 flex">
          <li>
            <Link
              to="#"
              className="relative group text-gray-800 dark:text-white"
            >
              Item 1
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black   transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="relative group text-gray-800 dark:text-white"
            >
              Item 2
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black   transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="relative group text-gray-800 dark:text-white"
            >
              Item 3
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black   transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Theme</a>
      </div>
    </div>
  );
};

export default Navbar;

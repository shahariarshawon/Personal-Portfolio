import React from "react";
import { Link } from "react-router";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="relative mt-5 rounded-4xl p-[3px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-gradient-x shadow-xl ">
      <div className="navbar bg-base-100 rounded-4xl p-5">
        <div className="navbar-start">
          {/* dropdown */}
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
                <a href="#" className="relative group  text-gray-800 ">
                  Home
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black  transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#projects" className="relative group text-gray-800 ">
                  Projects
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black  transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#about" className="relative group text-gray-800 ">
                  About
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black  transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="relative group text-gray-800 ">
                  Contact
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black  transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          <Link className=" text-3xl font-bold logo-font hidden md:inline-block">
            <span className="text-sky-400">Shahariar</span>
            <span className="text-emerald-400">Arafat</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-6 flex">
            <li>
              <a href="#" className="relative text-xl group  ">
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-400   transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#projects" className="relative text-xl group  ">
                Projects
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-400   transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#about" className="relative text-xl group  ">
                About
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-400   transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="relative text-xl group  ">
                Contact Me
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-400   transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

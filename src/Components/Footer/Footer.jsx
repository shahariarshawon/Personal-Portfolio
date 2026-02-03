import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-16 px-4 md:px-8 rounded-t-3xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Logo and Text */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-3">
            <span className="text-xl font-semibold">
              Al Shahariar Arafat Shawon
            </span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs mx-auto lg:mx-0">
            A passionate MERN Stack Developer
          </p>
        </div>

        {/* Center: Email Address */}
        <div className="flex items-center gap-3 bg-gray-800 px-4 py-3 rounded-xl border border-gray-600 w-full sm:w-auto justify-center">
          <Mail className="h-5 w-5 text-gray-400" />
          <span className="text-gray-300 text-sm sm:text-base text-center">
            shahariarshawon.dev@gmail.com
          </span>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">
            Home
          </a>
          <a href="#features" className="hover:text-white transition">
            Projects
          </a>
          <a href="#pricing" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact Me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

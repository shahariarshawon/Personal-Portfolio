import React from 'react';
import { Mail } from 'lucide-react'; // optional: replace with your own icon if not using lucide-react

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white  py-20 px-6 rounded-t-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Left: Logo and Text */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></div>
            <span className="text-xl font-semibold">ShahariarArafat</span>
          </div>
          <p className="text-gray-400  max-w-xs">
            A passionate MERN stack Developer
          </p>
        </div>

        {/* Center: Email */}
        <div className="flex items-center space-x-3 bg-gray-700 px-4 py-2 rounded-xl border border-gray-800">
          <Mail className="h-5 w-5 text-gray-400" />
          <span className="text-gray-300 ">shahariarshawon.dev@gmail.com</span>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex space-x-6  text-gray-400">
          <a href="#about" className="hover:text-white">Home</a>
          <a href="#features" className="hover:text-white">Projects</a>
          <a href="#pricing" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact Me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

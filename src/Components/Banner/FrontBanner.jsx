import React from "react";
import "./FrontBanner.css";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const FrontBanner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font2 ">
      <div className="text-center text-gray-300  space-y-4">
        <h2 className="text-6xl md:text-8xl font-extrabold">Hello! This Is</h2>
        <h2 className="text-6xl md:text-8xl font-extrabold">
          
          
           <span className=" text-[#14B7A6]  animation-bounce ">
           <Typewriter
          words={[
            "Al Shahariar Arafat Shawon"
          ]}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></span>
        </h2>
        {/* <h2 className="text-6xl text-[#14B7A6] md:text-8xl font-extrabold">Arafat Shawon</h2> */}
        <p className="text-xl md:text-2xl font-semibold tracking-widest text-violet-200">
          FullStack Developer <br />& Frontend Engineer
        </p>
        <br />
        <div>
            <Link to="/home" class="relative  items-center justify-start inline-block px-8 py-4 overflow-hidden font-bold rounded-lg group">
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-violet-100 transition-colors duration-200 ease-in-out group-hover:text-gray-900">Portfolio</span>
    <span class="absolute inset-0 border-2 border-white rounded-lg"></span>
</Link>
        </div>
      </div>
      
    </div>
  );
};

export default FrontBanner;

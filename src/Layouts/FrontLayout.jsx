import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FrontBanner from "../Components/Banner/FrontBanner";
import CursorDot from "../Components/CursorDot";

const FrontLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <CursorDot></CursorDot>
      <div className="bg-black min-h-screen ">
          <FrontBanner></FrontBanner>
        </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default FrontLayout;

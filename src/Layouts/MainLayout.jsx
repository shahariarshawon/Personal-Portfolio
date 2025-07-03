import React from "react";
import Navbar from "../Components/Navbar/Navbar";
// import { Outlet } from 'react-router';
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import PageWrapper from "../Components/PageWrapper";

const MainLayout = () => {
  return (
    <div className="w-3/4 mx-auto logo-font">
      <PageWrapper>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="min-h-screen">
          <Banner></Banner>
        </div>
        <Footer></Footer>
      </PageWrapper>
    </div>
  );
};

export default MainLayout;

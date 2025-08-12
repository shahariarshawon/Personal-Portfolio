import React from "react";
import Navbar from "../Components/Navbar/Navbar";
// import { Outlet } from 'react-router';
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import PageWrapper from "../Components/PageWrapper";
import CursorDot from "../Components/CursorDot";
import FeaturedProjects from "../Components/FeaturedProjects/FeaturedProjects";
import { useLoaderData } from "react-router";
import AboutMe from "../Components/AboutMe/AboutMe";
import Technologies from "../Components/Technologies/Technlogies";
import ContactMe from "../Components/ContactMe/ContactMe";

const MainLayout = () => {
    const projects=useLoaderData();
  return (
    <div className="w-3/4 mx-auto logo-font">
      <PageWrapper>
        <CursorDot></CursorDot>
        <div>
          <Navbar></Navbar>
        </div>
        {/* Banner */}
        <div className="min-h-screen">
          <Banner></Banner>
          {/* About Me */}
          <section id="about" >
            <div className='text-center mb-10'>
        <h1 className='pt-5 m-auto mt-10 text-6xl text-primary font-extrabold'>
          About Me
        </h1>
      </div>
            <AboutMe></AboutMe>
          </section>
         
          
          {/* Technolog */}
          <section id="technology">
            <div className='text-center mb-10'>
        <h1 className='pt-5 m-auto mt-10 text-6xl text-primary font-extrabold'>
          Technologies 
        </h1>
      </div>
      <Technologies></Technologies>
          </section>
           {/* Featured Projects Part */}
          <section id="projects" className=" my-10 ">
            <div className='text-center mb-10'>
        <h1 className='pt-5 m-auto mt-10 text-6xl text-primary font-extrabold'>
          Featured Projects
        </h1>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {
                projects.map((project)=><FeaturedProjects key={projects.id} project={project}></FeaturedProjects>)
            }
            
          
        </div>
          </section>
          {/* contact me */}

          <section id="contact">
            <div className='text-center mb-10'>
        <h1 className='pt-5 m-auto mt-10 text-6xl text-primary font-extrabold'>
          Contact Me 
        </h1>
      </div>
            <ContactMe></ContactMe>
          </section>
        </div>
        <Footer></Footer>
      </PageWrapper>
    </div>
  );
};

export default MainLayout;

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
import Education from "../Components/Education/Education";
import Experience from "../Components/Experience/Experience";

const MainLayout = () => {
    const projects=useLoaderData();
  return (
    <div className="lg:w-3/4 px-3 md:px-10 mx-auto logo-font ">
      <PageWrapper>
        <CursorDot></CursorDot>
        <div className="sticky top-0 z-50">
          <Navbar></Navbar>
        </div>
        {/* Banner */}
        <div className="min-h-screen">
          <Banner></Banner>
          {/* About Me */}
          <section id="about" >
            <div className='text-center mb-10'>
        <h1 className="pt-[130px] -mt-[80px] m-auto text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold text-center mb-10">
          About Me
        </h1>
      </div>
            <AboutMe></AboutMe>
          </section>
         
          
          {/* Technolog */}
          <section id="technology">
            <div className='text-center mb-10'>
        <h1  className="pt-[130px] -mt-[80px] m-auto text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold text-center ">
          Technologies 
        </h1>
      </div>
      <Technologies></Technologies>
          </section>
          {/* Education */}
          <section id="education">
            <Education></Education>
          </section>
           {/* Education */}
          <section id="experience">
            <Experience></Experience>
          </section>
           {/* Featured Projects Part */}
          <section id="projects" className=" mb-20 ">
            <div className='text-center mb-10'>
        <h1  className="pt-[130px] -mt-[80px] m-auto text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold text-center mb-10">
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
        <h1  className="pt-[80px] -mt-[100px] m-auto  text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold text-center mb-10">
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

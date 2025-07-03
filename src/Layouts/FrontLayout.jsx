import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import FrontBanner from '../Components/Banner/FrontBanner';

const FrontLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className='bg-black min-h-screen '>
                <FrontBanner></FrontBanner>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default FrontLayout;
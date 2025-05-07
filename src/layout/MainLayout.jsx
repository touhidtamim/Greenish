import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';


const mainLayout = () => {
  return (
    <div>
      
      <Navbar></Navbar> 
         
      <div className='w-11/12 mx-auto min-h-screen'>
      <Outlet></Outlet> 
      </div>

      <Footer></Footer>
    </div>
  );
};

export default mainLayout;
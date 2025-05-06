import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const mainLayout = () => {
  return (
    <div>
      
      <Navbar></Navbar> 
         
      <div className=''>
      <Outlet></Outlet> 
      </div>

      <Footer></Footer>
    </div>
  );
};

export default mainLayout;
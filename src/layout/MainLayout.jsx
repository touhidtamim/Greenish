import React from "react";
import Navbar from "../component/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../component/Footer";
import ScrollToTop from "../component/ScroolToTop";
import LoadingSpinner from "./../component/LoadingSpinner";

const mainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>

      {navigation.state === "loading" && <LoadingSpinner></LoadingSpinner>}

      <div className="w-11/12 mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default mainLayout;

import React from "react";
import Navbar from "../component/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../component/Footer";
import ScrollToTop from "../component/ScrollToTop";
import LoadingSpinner from "../component/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      <ScrollToTop />

      {navigation.state === "loading" && <LoadingSpinner />}

      {/* Main content area where nested routes render */}
      <div className="w-11/12 mx-auto min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;

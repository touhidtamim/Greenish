import {createBrowserRouter } from "react-router";
import MainLayout from './../layout/MainLayout';
import NotFound from "../pages/NotFound";
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from "../pages/Register";
import AboutUs from './../pages/About';
import Community from './../pages/Community';
import PlantCare from "../pages/PlantCare";
import FaQ from "../pages/FaQ";
import Contact from './../pages/Contact';
import TermsConditions from "../pages/TermsConditions";
import Services from "../pages/Services";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [

      {
        path:"/",
        element: <Home></Home>,
      },

      {
        path:"/greenish/plant-care",
        element: <PlantCare></PlantCare>,
      },

      {
        path:"/greenish/services",
        element: <Services></Services>,
      },

      {
        path:"/greenish/about",
        element: <AboutUs></AboutUs>,
      },

      {
        path:"/greenish/community",
        element: <Community></Community>,
      },

      {
        path:"/greenish/faq",
        element: <FaQ></FaQ>,
      },

      {
        path:"/greenish/contact",
        element: <Contact></Contact>,
      },

      {
        path:"/greenish/terms&conditions",
        element: <TermsConditions></TermsConditions> ,
      },

      {
        path:"/login",
        element: <Login></Login>,
      },
      
      {
        path:"/register",
        element: <Register></Register>,
      },

    ]
  },


]);

export default router;
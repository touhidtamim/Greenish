import {createBrowserRouter } from "react-router";
import MainLayout from './../layout/MainLayout';
import NotFound from "../pages/NotFound";
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from "../pages/Register";
import AboutUs from './../pages/About';


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
        path:"/plant-care",
        element: <h2>plant care tips</h2>,
      },

      {
        path:"/services",
        element: <h2>Subscriptions</h2>,
      },

      {
        path:"/about",
        element: <AboutUs></AboutUs>,
      },

      {
        path:"/contact",
        element: <h2>Contact Us</h2>,
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
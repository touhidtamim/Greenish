import { createBrowserRouter } from "react-router";
import MainLayout from "./../layout/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Register from "../pages/Register";
import AboutUs from "./../pages/About";
import Community from "./../pages/Community";
import PlantCare from "../pages/PlantCare";
import FaQ from "../pages/FaQ";
import Contact from "./../pages/Contact";
import TermsConditions from "../pages/TermsConditions";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import ServiceDetails from "./../pages/ServiceDetails";
import PrivateRouter from "./PrivateRouter";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/greenish/plant-care",
        element: <PlantCare></PlantCare>,
      },

      {
        path: "/greenish/services",
        element: <Services></Services>,
      },

      {
        path: "/services/:id",
        element: (
          <PrivateRouter>
            <ServiceDetails></ServiceDetails>
          </PrivateRouter>
        ),
      },

      {
        path: "/greenish/user-profile",
        element: (
          <PrivateRouter>
            <MyProfile></MyProfile>
          </PrivateRouter>
        ),
      },

      {
        path: "/greenish/about",
        element: <AboutUs></AboutUs>,
      },

      {
        path: "/greenish/community",
        element: (
          <PrivateRouter>
            <Community></Community>
          </PrivateRouter>
        ),
      },

      {
        path: "/greenish/faq",
        element: <FaQ></FaQ>,
      },

      {
        path: "/greenish/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/greenish/terms&conditions",
        element: <TermsConditions></TermsConditions>,
      },

      {
        path: "/greenish/login",
        element: <Login></Login>,
      },

      {
        path: "/greenish/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },

      {
        path: "/greenish/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

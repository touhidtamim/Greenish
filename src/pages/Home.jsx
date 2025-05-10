import React from "react";
import PlantCareMadeEasy from "../component/plantCareMadeEAsy";
import Slider from "../component/slider";
import TestimonialsSection from "../component/Testimonial";
import FinalCTA from "../component/FinalCta";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../component/ServiceCard";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Greenish | Home - Your Personalized Subscription Box for Plant Care
        </title>
        <meta
          name="description"
          content="Discover the perfect subscription box tailored to your plant care needs. Join Greenish for curated plant products, tips, and more delivered monthly!"
        />
      </Helmet>

      <Slider></Slider>

      <ServiceCard></ServiceCard>

      <PlantCareMadeEasy></PlantCareMadeEasy>

      <TestimonialsSection></TestimonialsSection>

      <FinalCTA></FinalCTA>
    </>
  );
};

export default Home;

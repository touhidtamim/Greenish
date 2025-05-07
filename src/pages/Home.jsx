import React from 'react';
import PlantCareMadeEasy from '../component/plantCareMadeEAsy';
import Slider from '../component/slider';
import TestimonialsSection from '../component/Testimonial';
import FinalCTA from '../component/FinalCta';




const Home = () => {
  return (

    <>

    <Slider></Slider>

  
    <PlantCareMadeEasy></PlantCareMadeEasy>
    
    <TestimonialsSection></TestimonialsSection>

    <FinalCTA></FinalCTA>
    
    </>
    
  );
};

export default Home;
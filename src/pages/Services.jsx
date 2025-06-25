import React from "react";
import HowItWorks from "../component/HowItWorks";
import PlantCareSupport from "../component/PlantCareSupport";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <div>
      {/* SEO meta tags */}
      <Helmet>
        <title>
          Greenish | Services - Explore Our Curated Plant Subscription Boxes
        </title>
        <meta
          name="description"
          content="Browse our wide range of curated plant subscription boxes. Each box is designed to enhance your plant care experience with high-quality products and expert advice."
        />
      </Helmet>

      {/* Section explaining how the service works */}
      <HowItWorks />

      {/* Section offering plant care support */}
      <PlantCareSupport />
    </div>
  );
};

export default Services;

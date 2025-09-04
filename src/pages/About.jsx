import React from "react";
import HomeCta from "../component/HomeCta";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>
          Greenish | About Us - Our Passion for Plants and Sustainability
        </title>
        <meta
          name="description"
          content="Learn more about Greenish, a subscription box service dedicated to plant care. Our mission is to bring nature into your home with curated boxes for every plant lover!"
        />
      </Helmet>

      {/* Main container with gradient background */}
      <div className="bg-gradient-to-br from-[#fcfffc] via-[#fbf8fc] to-[#fcfffc]">
        <div className="md:max-w-6xl mx-auto px-4 py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-6 tracking-tight">
            About <span className="text-emerald-700">Greenish</span>
          </h1>

          <p className="text-md md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            <span className="font-semibold text-emerald-500">Greenish</span>{" "}
            started with a simple belief — that nature heals. We help busy,
            modern lives reconnect with greenery, one plant at a time. Through
            care, calm, and a shared love for growth, we’re here to bring nature
            back into every Bangladeshi home.
          </p>

          {/* Grid of mission, offerings, and values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left mt-8 md:mt-10">
            {/* Mission card */}
            <div className="p-4 md:p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-3">
                🌱 Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To reconnect every soul in Bangladesh with the peace of nature.
                We believe slow mornings, mindful plant care, and green corners
                can reshape how we live — more gently, more presently.
              </p>
            </div>

            {/* Offerings card */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-3">
                📦 What We Offer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Monthly subscription boxes with hand-selected indoor plants,
                care tools, and beginner-friendly guides. Whether you’re a new
                plant parent or a leafy veteran, each box nurtures both plant
                and person.
              </p>
            </div>

            {/* Values card */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-3">
                🤝 Why Greenish
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rooted in Bangladeshi soil, we partner with local growers and
                carefully pack each plant with heart. It’s not just about
                greenery — it’s about slowing down, creating rituals, and
                growing something that matters.
              </p>
            </div>
          </div>

          {/* Closing section about growth journey */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">
              We Grow With You 🌿
            </h2>
            <p className="text-md md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From your first succulent to your lushest monstera,{" "}
              <span className="font-semibold text-emerald-500">Greenish</span>{" "}
              is by your side. Whether you’re planting hope, calm, or simply
              beauty — we’re honored to be part of your journey.
            </p>
          </div>
        </div>

        {/* Call to action component */}
        <HomeCta />
      </div>
    </>
  );
};

export default AboutUs;

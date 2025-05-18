import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import MiniMessage from "../component/MiniMessage";
import StaticReview from "../component/StaticReview";
import CarePageCTA from "../component/CarePageCTA";
import Offer from "../component/Offer";

const PlantCare = () => {
  const handleLearnMore = (topic) => {
    let message = "";

    switch (topic) {
      case "Beginner's Guide":
        message =
          "Start your plant parenthood journey with easy steps from unboxing to nurturing!";
        break;
      case "Smart Watering":
        message =
          "Learn how to water your plants perfectly — not too much, not too little!";
        break;
      case "Light Mastery":
        message =
          "Discover the ideal light spots for your plants to keep them happy and healthy.";
        break;
      case "Advanced Care":
        message =
          "Master propagation, pruning, and repotting techniques like a pro.";
        break;
      default:
        message = "Explore more plant care tips and tricks!";
    }

    Swal.fire({
      title: topic,
      text: message,
      icon: "info",
      confirmButtonText: "Got it!",
      timer: 7000,
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Greenish | Plant Care - Expert Tips & Tools for Your Green Friends
        </title>
        <meta
          name="description"
          content="Explore essential plant care tips, tools, and advice to keep your plants thriving. Greenish provides expert guidance to nurture your indoor garden!"
        />
      </Helmet>

      <div className="bg-gradient-to-br from-[#fcfffc] via-[#fbf8fc] to-[#fcfffc] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-700 mb-4">
              Plant Care, the Greenish Way 🌿
            </h2>
            <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
              We don’t just send you plants — we teach you how to listen to
              them, love them, and watch them thrive. Your green journey starts
              with a gentle touch and our guidance.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: "🌱",
                title: "Beginner's Guide",
                desc: "Step-by-step roadmap from unboxing to plant parenthood.",
              },
              {
                icon: "💧",
                title: "Smart Watering",
                desc: "Never over or under-water again with specific moisture tips.",
              },
              {
                icon: "☀️",
                title: "Light Mastery",
                desc: "Learn to find the perfect light spot for each plant.",
              },
              {
                icon: "✂️",
                title: "Advanced Care",
                desc: "Propagate, prune, and repot with expert techniques.",
              },
            ].map((tip, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-50"
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{tip.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4">{tip.desc}</p>
                <button
                  onClick={() => handleLearnMore(tip.title)}
                  className="text-emerald-600 cursor-pointer font-medium inline-flex items-center group focus:outline-none"
                >
                  Learn more
                  <span className="ml-1 transform group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </button>
              </div>
            ))}
          </div>

          <Offer />
          <MiniMessage />
          <StaticReview />
          <CarePageCTA />
        </div>
      </div>
    </>
  );
};

export default PlantCare;

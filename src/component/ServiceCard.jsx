import React, { useState } from "react";
import { Link } from "react-router-dom";
import selectedServiceData from "../../public/Data/ServiceData";

const ServiceCard = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const allServices = [
    ...selectedServiceData.indoor,
    ...selectedServiceData.outdoor,
    ...selectedServiceData.personalized,
  ];

  const getFilteredData = () => {
    if (filter === "Indoor") return selectedServiceData.indoor;
    if (filter === "Outdoor") return selectedServiceData.outdoor;
    if (filter === "Personalized") return selectedServiceData.personalized;
    return allServices;
  };

  const filteredData = getFilteredData();
  const visibleData = filteredData.slice(0, visibleCount);

  const handleFilterChange = (category) => {
    setFilter(category);
    setVisibleCount(6);
  };

  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const showLess = () => {
    setVisibleCount(6);
    const section = document.getElementById("service-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="service-section"
      className="mt-6 py-16 rounded-xl px-4 bg-gradient-to-br from-[#fbf8fc] via-white to-[#e2f9f6]"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
          Explore Our Plant Subscriptions
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Beautiful plant care packages crafted to fit your space, style, and
          schedule.
        </p>
      </div>

      <div className="text-center mb-10 flex flex-wrap justify-center gap-3">
        {["All", "Indoor", "Outdoor", "Personalized"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`relative overflow-hidden px-5 py-2 cursor-pointer rounded-full text-white font-medium group transition transform hover:scale-105 ${
              filter === category ? "bg-green-800" : "bg-green-600"
            }`}
          >
            <span className="absolute inset-0 bg-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-full"></span>
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {visibleData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-green-700">
                  {item.title}
                </h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              <p className="text-gray-600 mb-3 line-clamp-2">
                {item.description}
              </p>

              <div className="mb-3">
                <p className="text-lg font-semibold text-green-800">
                  {item.price}
                </p>
                <p className="text-sm text-gray-500">
                  {item.frequency} Delivery • {item.reviewCount} Reviews
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-1">
                  Includes:
                </h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {item.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                  {item.benefits.length > 3 && (
                    <li className="text-green-600">
                      + {item.benefits.length - 3} more
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {item.availablePieces} available
                </span>
                <Link to={`/services/${item.id}`} state={{ service: item }}>
                  <button className="relative cursor-pointer overflow-hidden px-4 py-2 rounded-lg bg-green-500 text-white font-medium group hover:scale-105 transition">
                    <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                    <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-lg"></span>
                    <span className="relative z-10">View Details</span>
                  </button>
                </Link>
              </div>

              <div className="mt-4">
                <button className="relative w-full overflow-hidden px-6 py-2 rounded-lg bg-green-700 text-white font-medium group hover:scale-105 transition">
                  <span className="absolute inset-0 bg-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                  <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-lg"></span>
                  <span className="relative z-10">Subscribe Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length > 6 && (
        <div className="text-center mt-12">
          {visibleCount < filteredData.length && (
            <button
              onClick={showMore}
              className="relative overflow-hidden px-6 py-2 mx-2 rounded-lg bg-green-700 text-white font-medium group hover:scale-105 transition"
            >
              <span className="absolute cursor-pointer inset-0 bg-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full cursor-pointer group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-lg"></span>
              <span className="relative cursor-pointer z-10">Show More</span>
            </button>
          )}
          {visibleCount > 6 && (
            <button
              onClick={showLess}
              className="relative overflow-hidden cursor-pointer px-6 py-2 mx-2 rounded-lg bg-green-500 text-white font-medium group hover:scale-105 transition"
            >
              <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-lg"></span>
              <span className="relative z-10">Show Less</span>
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default ServiceCard;

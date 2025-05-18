import React from "react";

const StaticReview = () => {
  return (
    <div className="relative text-center mb-20 px-4">
      <div className="absolute -top-10 left-10 w-28 h-28 bg-emerald-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute -bottom-10 right-10 w-36 h-36 bg-emerald-100 rounded-full opacity-20 blur-xl"></div>

      <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-[#f0fdf4] border border-emerald-100 p-4 md:p-10 sm:p-12 rounded-3xl shadow-lg">
        <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-800 mb-4">
          💚 Stories from Plant Lovers
        </h3>
        <p className="text-md md:text-lg sm:text-xl italic text-gray-700 leading-relaxed">
          “Before{" "}
          <span className="font-semibold text-emerald-600">Greenish</span>, I
          kept killing my succulents. Now my room is a mini jungle — and I’ve
          never felt more alive.”
        </p>
        <p className="mt-4 text-emerald-600 font-medium">– Areeba, Dhaka</p>
      </div>
    </div>
  );
};

export default StaticReview;

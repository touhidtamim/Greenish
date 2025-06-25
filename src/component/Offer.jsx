import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider ";

// Offer component for personal plant coaching subscription call-to-action
const Offer = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handler for "Try Free" button click
  const handleTryFree = () => {
    if (!user) {
      // Show login prompt if user is not authenticated
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to activate your 30-day free plant coaching.",
        showCancelButton: true,
        confirmButtonText: "Go to Login",
        cancelButtonText: "Maybe Later",
        confirmButtonColor: "#2F855A",
        cancelButtonColor: "#C53030",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/greenish/login");
        }
      });
    } else {
      // Show success message if user is logged in
      Swal.fire({
        icon: "success",
        title: "You're In! 🌱",
        text: "Thanks for activating your 30-day free coaching. Please wait — our team will confirm it shortly.",
        confirmButtonText: "Okay",
        confirmButtonColor: "#10B981",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg mb-16">
      {/* Text content */}
      <div className="md:w-1/2 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Meet Your Personal Plant Coach
        </h2>
        <p className="text-gray-600 mb-6">
          Every Greenish subscription includes access to our plant experts. Text
          a photo of your plant and get personalized advice within hours.
        </p>

        {/* Features list */}
        <ul className="space-y-3 mb-6">
          {[
            "24/7 care reminders",
            "Seasonal care updates",
            "Troubleshooting help",
          ].map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="bg-emerald-100 text-emerald-600 p-1 rounded-full mr-3">
                ✓
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* Try Free button */}
        <button
          onClick={handleTryFree}
          className="relative overflow-hidden px-6 py-3 rounded-full font-medium text-white bg-emerald-600 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-700"
        >
          <span className="absolute inset-0 bg-emerald-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-full"></span>
          <span className="relative z-10">Try Free for 30 Days</span>
        </button>
      </div>

      {/* Image content */}
      <div className="w-full md:w-1/2 h-64 md:h-auto bg-emerald-50 flex items-center justify-center">
        <img
          src="https://i.ibb.co.com/HDG8HpMg/minicard.jpg"
          alt="Plant care app interface"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Offer;

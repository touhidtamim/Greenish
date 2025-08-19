import React, { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CarePageCTA = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLearnMore = (type) => {
    if (type === "Start Your Journey") {
      if (!user) {
        // Prompt login if user is not authenticated
        Swal.fire({
          icon: "warning",
          title: "Login Required",
          text: "Please login to start your plant care journey!",
          confirmButtonText: "Go to Login",
          confirmButtonColor: "#10B981",
          showCancelButton: true,
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/greenish/login");
          }
        });
      } else {
        // Show success message if user is logged in
        Swal.fire({
          icon: "success",
          title: "You're All Set! 🌱",
          text: "Welcome back! Your plant journey continues with us.",
          confirmButtonText: "Awesome!",
          confirmButtonColor: "#10B981",
        });
      }
    } else if (type === "Learn More") {
      // Show informational message about the service
      Swal.fire({
        icon: "info",
        title: "Why Greenish?",
        text: "We guide you through every step of plant care—from choosing the right plant to keeping it thriving.",
        confirmButtonText: "Got it!",
        confirmButtonColor: "#10B981",
      });
    }
  };

  return (
    <div className="relative px-6 mt-10 overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0">
        <div className="absolute -top-12 left-10 w-36 h-36 bg-green-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-12 right-10 w-48 h-48 bg-green-100 rounded-full opacity-20 blur-xl"></div>
      </div>

      <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-[#f0fdf4] p-10 sm:p-14 rounded-3xl shadow-xl border border-emerald-100 text-center">
        {/* Decorative emoji */}
        <div className="text-5xl absolute top-6 left-6 text-green-200">🌼</div>
        <div className="text-5xl absolute bottom-6 right-6 text-green-200">
          🌿
        </div>

        <h3 className="text-2xl md:text-4xl font-extrabold text-emerald-800 mb-4">
          Ready to Transform Your Space?
        </h3>
        <p className="text-md md:text-lg sm:text-xl text-gray-700 mb-8">
          Join thousands of happy plant parents growing with confidence every
          day.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => handleLearnMore("Start Your Journey")}
            className="relative inline-flex items-center justify-center px-4 md:px-8 py-2 md:py-3 overflow-hidden font-semibold text-white bg-emerald-600 rounded-full group hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-green-200/50 cursor-pointer"
          >
            <span className="relative z-10">Start Your Journey</span>
            <span className="absolute -bottom-0 -right-0 w-full h-full bg-green-800 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
          </button>

          <button
            onClick={() => handleLearnMore("Learn More")}
            className="relative inline-flex items-center justify-center px-4 md:px-8 py-2 md:py-3 overflow-hidden font-semibold text-emerald-700 border-2 border-emerald-600 rounded-full group hover:bg-green-50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarePageCTA;

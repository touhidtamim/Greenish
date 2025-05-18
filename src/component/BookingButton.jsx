import React, { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider ";

const BookingButton = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!user) {
      Swal.fire({
        title: "Please Log In",
        text: "You need to be logged in to book a plant care session.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Log In",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#38a169",
        cancelButtonColor: "#9B2C2C",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/greenish/login");
        }
      });
    } else {
      Swal.fire({
        title: "Congratulations! 🎉",
        text: "You’re all set! Our plant expert will call you soon 🌿",
        icon: "success",
        confirmButtonText: "Can’t Wait!",
        confirmButtonColor: "#2f855a",
      });
    }
  };

  return (
    <div className="mt-12 text-center">
      <button
        onClick={handleBooking}
        className="inline-block cursor-pointer bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold px-4 md:px-8 py-2 md:py-3 rounded-full shadow-lg transition-all duration-300"
      >
        🌱 Book a Plant Care Session
      </button>
    </div>
  );
};

export default BookingButton;

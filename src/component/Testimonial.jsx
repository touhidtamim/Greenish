import React, { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider ";

const testimonials = [
  {
    name: "Ayesha Rahman",
    location: "Dhaka, Bangladesh",
    feedback:
      "Greenish has completely transformed my apartment. Every plant I received was healthy and beautifully packed!",
    photo: "https://i.ibb.co/YFDLN15R/f4.webp",
  },
  {
    name: "Tanvir Alam",
    location: "Chattogram, Bangladesh",
    feedback:
      "I never thought I'd be a plant lover! Thanks to Greenish's care tips, even I can keep my plants alive.",
    photo: "https://i.ibb.co/9mNPtXs0/boy4.jpg",
  },
  {
    name: "Sarah Karim",
    location: "Sylhet, Bangladesh",
    feedback:
      "The subscription boxes are always a delight! I love the surprises and how easy it is to care for each plant.",
    photo: "https://i.ibb.co/chh48TGv/f1.jpg",
  },
];

const TestimonialSection = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleJoinClick = () => {
    if (!user) {
      Swal.fire({
        title: "Oops! You’re almost there 🌱",
        text: "Log in to join our plant-loving family and grow together.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "I’m In",
        cancelButtonText: "Maybe Later",
        confirmButtonColor: "#16a34a",
        cancelButtonColor: "#94a3b8",
        buttonsStyling: true,
        focusConfirm: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/greenish/login");
        }
      });
    } else {
      navigate("/greenish/community");
    }
  };

  return (
    <section className="my-20 px-4 py-16 bg-gradient-to-br from-[#fbf8fc] via-white to-[#e2f9f6] rounded-3xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-green-900 mb-4">
          What Our Plant Lovers Say 🌿
        </h2>
        <p className="text-green-700 text-md max-w-2xl mx-auto mb-12">
          Discover how Greenish is growing happiness in homes across Bangladesh.
          Hear from our thriving community.
        </p>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.02]"
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-green-200"
              />
              <p className="text-green-700 text-base mb-4 leading-relaxed">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>
              <h4 className="text-green-900 font-semibold">
                {testimonial.name}
              </h4>
              <span className="text-green-500 text-xs">
                {testimonial.location}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={handleJoinClick}
            className="relative cursor-pointer inline-block bg-green-600 text-white font-medium px-8 py-3 rounded-full shadow-md group hover:shadow-lg hover:scale-105 transition"
          >
            <span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-full"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Join Our Plant Community 🌱
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

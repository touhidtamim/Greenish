import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rifah, Dhaka",
    image: "https://i.ibb.co.com/TxzMKGXQ/f2.jpg",
    text: "Every month feels like a surprise gift to my soul. I’ve never felt more calm and connected.",
    rating: 5,
  },
  {
    name: "Tanvir & Family, Chattogram",
    image: "https://i.ibb.co.com/nsvrLQYR/m1.webp",
    text: "Greenish helped me bond with my kids over plant care. Now our mornings start with watering together.",
    rating: 4,
  },
  {
    name: "Nusrat, Khulna",
    image: "https://i.ibb.co.com/rKMNggnc/f6.jpg",
    text: "I used to feel stressed all the time. After Greenish, my study space is alive and peaceful.",
    rating: 5,
  },
  {
    name: "Sabbir, Sylhet",
    image: "https://i.ibb.co.com/6JRMvL2Z/m5.jpg",
    text: "My balcony has transformed into a mini jungle. It’s my favorite part of home now.",
    rating: 4,
  },
  {
    name: "Mithila, Rajshahi",
    image: "https://i.ibb.co.com/yFRn04Dy/f3.jpg",
    text: "As a med student, I needed calm. Plants became my therapy. Thanks Greenish!",
    rating: 5,
  },
  {
    name: "Anik, Barishal",
    image: "https://i.ibb.co.com/ds3Ygfjg/mt.webp",
    text: "I never knew indoor plants could be this easy to maintain. Greenish changed that.",
    rating: 4,
  },
  {
    name: "Shila, Mymensingh",
    image: "https://i.ibb.co.com/6RfF4whc/ff.jpg",
    text: "My kids have named every plant. It’s become a fun family thing.",
    rating: 5,
  },
  {
    name: "Raihan, Cumilla",
    image: "https://i.ibb.co.com/Z6NWVz3f/Barry-Greene.webp",
    text: "I gift Greenish boxes to my friends. It’s my favorite thing to share.",
    rating: 4,
  },
  {
    name: "Nadia, Rangpur",
    image: "https://i.ibb.co.com/gb7FNNLb/fm.jpg",
    text: "The surprise gifts inside each box make me feel special every time.",
    rating: 5,
  },
];

const Community = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <div className="bg-gradient-to-br from-[#fcfffc] via-[#fbf8fc] to-[#fcfffc]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 text-center mb-6">
          Meet Our Greenish Family 🌿
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Greenish isn’t just about plants — it’s about people. Our community is
          made of everyday plant lovers, families, students, and dreamers who
          find peace and joy through greenery. Here’s how they grow with us.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {visibleCards.map((t, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transition transform hover:scale-[1.02]"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-52 object-cover sm:h-56 md:h-60"
              />
              <div className="p-6 flex flex-col items-center">
                <p className="text-gray-700 italic text-center mb-3">
                  "{t.text}"
                </p>
                <div className="text-sm text-emerald-600 font-semibold text-center mb-2">
                  — {t.name}
                </div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${
                        i < t.rating ? "" : "opacity-30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 md:mb-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white px-6 py-2 rounded-xl transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="text-center my-10 md:my-16 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4">
            Share Your Green Corner 📸
          </h2>
          <p className="text-gray-700 mb-4">
            Join the movement. Tag{" "}
            <span className="text-emerald-500 font-medium">
              #GrowWithGreenish
            </span>{" "}
            on Instagram or Facebook and get featured!
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer text-white px-6 py-2 rounded-xl transition">
            Submit Your Story
          </button>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-emerald-600 mb-2">
            Together, We’re Growing More Than Plants.
          </h3>
          <p className="text-gray-700">
            From small balconies in Dhaka to rooftops in Sylhet — Greenish
            connects us through care, nature, and community. We're proud to grow
            beside you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;

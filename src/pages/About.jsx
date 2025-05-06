import React from 'react';

const AboutUs = () => {
  return (
    <div className='bg-[#fcfffc]' >
    <div className="max-w-5xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mb-6">About Greenish</h1>
      
      <p className="text-lg md:text-xl text-gray-700 mb-10">
        At <span className="font-semibold text-emerald-500">Greenish</span>, we believe that a single plant can bring peace, joy, and healing to any corner of your home. Born from the love of greenery and the desire to reconnect with nature, Greenish is more than a subscription box — it's a lifestyle rooted in calm, care, and conscious living.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div>
          <h3 className="text-2xl font-semibold text-emerald-500 mb-2">🌱 Our Mission</h3>
          <p className="text-gray-600">
            To bring nature closer to every home in Bangladesh and inspire mindful living through plant care. We empower people to slow down, breathe deeper, and connect with the living world — one box at a time.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-emerald-500 mb-2">📦 What We Offer</h3>
          <p className="text-gray-600">
            Curated monthly boxes featuring handpicked indoor plants, care tools, and easy guides. Whether you're a beginner or a plant lover, our boxes make it easy and exciting to grow your green space.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-emerald-500 mb-2">🤝 Why Greenish</h3>
          <p className="text-gray-600">
            We're local, sustainable, and community-driven. Every plant is sourced from Bangladeshi growers and packaged with care. With Greenish, you don’t just receive plants — you grow habits, heal stress, and build a connection with nature.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">We Grow With You</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          From your first succulent to your personal indoor jungle, Greenish is here for every step of your journey. Let’s grow together — naturally, beautifully, mindfully.
        </p>
      </div>
    </div>

    </div>


  );
};

export default AboutUs;

import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#fcfffc]">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-6 tracking-tight">
          About <span className="text-emerald-700">Greenish</span>
        </h1>

        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
          At <span className="font-semibold text-emerald-500">Greenish</span>, we believe one plant can transform a space into a sanctuary. Born out of a love for greenery and a desire to reconnect with nature, we’re not just a subscription service — we’re your companions in creating a peaceful, plant-filled lifestyle.
        </p>

      
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Mission */}
          <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-3">🌱 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To reconnect every home in Bangladesh with the healing power of nature. We inspire a mindful way of living by encouraging plant care — helping people slow down, breathe deeper, and grow peacefully.
            </p>
          </div>

          {/* What we offer */}
          <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-3">📦 What We Offer</h3>
            <p className="text-gray-600 leading-relaxed">
              Thoughtfully curated monthly boxes with handpicked indoor plants, plant care tools, and beginner-friendly guides. Whether you're a novice or a seasoned plant lover, there's something green for you in every delivery.
            </p>
          </div>

          {/* Why Greenish */}
          <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-3">🤝 Why Greenish</h3>
            <p className="text-gray-600 leading-relaxed">
              Rooted in local values, our plants are sourced from Bangladeshi growers and packed with care. Greenish isn’t just about plants — it's about building habits, easing stress, and cultivating a meaningful bond with nature.
            </p>
          </div>
        </div>

        {/* Closing section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">We Grow With You</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From your very first succulent to a thriving indoor jungle, Greenish walks with you on your plant journey. Together, let’s grow a life that’s natural, beautiful, and rooted in calm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

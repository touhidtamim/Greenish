import React from 'react';

const Community = () => {
  return (
    <div className="bg-[#fcfffc]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 text-center mb-6">
          Meet Our Greenish Family 🌿
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Greenish isn’t just about plants — it’s about people. Our community is made of everyday plant lovers, families, students, and dreamers who find peace and joy through greenery. Here’s how they grow with us.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <p className="text-gray-700 italic">"Every month feels like a surprise gift to my soul. I’ve never felt more calm and connected."</p>
            <div className="mt-4 text-sm text-emerald-600 font-semibold">— Rifah, Dhaka</div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <p className="text-gray-700 italic">"Greenish helped me bond with my kids over plant care. Now our mornings start with watering together."</p>
            <div className="mt-4 text-sm text-emerald-600 font-semibold">— Tanvir & Family, Chattogram</div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <p className="text-gray-700 italic">"I used to feel stressed all the time. After Greenish, my study space is alive and peaceful."</p>
            <div className="mt-4 text-sm text-emerald-600 font-semibold">— Nusrat, Khulna</div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4">
            Share Your Green Corner 📸
          </h2>
          <p className="text-gray-700 mb-4">
            Join the movement. Tag <span className="text-emerald-500 font-medium">#GrowWithGreenish</span> on Instagram or Facebook and get featured!
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer text-white px-6 py-2 rounded-xl transition">
            Submit Your Story
          </button>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-emerald-600 mb-2">Together, We’re Growing More Than Plants.</h3>
          <p className="text-gray-700">
            From small balconies in Dhaka to rooftops in Sylhet — Greenish connects us through care, nature, and community. We're proud to grow beside you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;

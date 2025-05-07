import React from "react";

const PlantCare = () => {
  return (
    <div className="bg-gradient-to-br from-[#fcfffc] via-[#fbf8fc] to-[#fcfffc] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold text-emerald-700 mb-4">
            Plant Care, the Greenish Way 🌿
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don’t just send you plants — we teach you how to listen to them,
            love them, and watch them thrive. Your green journey starts with a
            gentle touch and our guidance.
          </p>
        </section>

        {/* 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: "🌱",
              title: "Beginner's Guide",
              desc: "Step-by-step roadmap from unboxing to plant parenthood.",
            },
            {
              icon: "💧",
              title: "Smart Watering",
              desc: "Never over or under-water again with specific moisture tips.",
            },
            {
              icon: "☀️",
              title: "Light Mastery",
              desc: "Learn to find the perfect light spot for each plant.",
            },
            {
              icon: "✂️",
              title: "Advanced Care",
              desc: "Propagate, prune, and repot with expert techniques.",
            },
          ].map((tip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-50"
            >
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">{tip.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 mb-4">{tip.desc}</p>
              <a
                href="#"
                className="text-emerald-600 font-medium inline-flex items-center group"
              >
                Learn more
                <span className="ml-1 transform group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Hero Card */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg mb-16">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Meet Your Personal Plant Coach
            </h2>
            <p className="text-gray-600 mb-6">
              Every Greenish subscription includes access to our plant experts.
              Text a photo of your plant and get personalized advice within
              hours.
            </p>
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
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Try Free for 30 Days
            </button>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto bg-emerald-50 flex items-center justify-center">
            <img
              src="https://i.ibb.co.com/HDG8HpMg/minicard.jpg"
              alt="Plant care app interface"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Mini Message */}
        <div className="bg-emerald-50 rounded-xl p-6 mb-16 text-center">
          <p className="text-emerald-800 font-medium">
            🌟 <span className="font-bold">Did You Know?</span> Our subscribers
            have a 92% plant survival rate compared to the industry average of
            68%.
          </p>
        </div>

        {/* Stories - Static */}
        <div className="relative text-center mb-20 px-4">
          <div className="absolute -top-10 left-10 w-28 h-28 bg-emerald-100 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-10 right-10 w-36 h-36 bg-emerald-100 rounded-full opacity-20 blur-xl"></div>

          <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-[#f0fdf4] border border-emerald-100 p-10 sm:p-12 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-extrabold text-emerald-800 mb-4">
              💚 Stories from Plant Lovers
            </h3>
            <p className="text-lg sm:text-xl italic text-gray-700 leading-relaxed">
              “Before{" "}
              <span className="font-semibold text-emerald-600">Greenish</span>,
              I kept killing my succulents. Now my room is a mini jungle — and
              I’ve never felt more alive.”
            </p>
            <p className="mt-4 text-emerald-600 font-medium">– Areeba, Dhaka</p>
          </div>
        </div>

        <div className="relative px-6 mt-10 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-12 left-10 w-36 h-36 bg-green-100 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-12 right-10 w-48 h-48 bg-green-100 rounded-full opacity-20 blur-xl"></div>
          </div>

          <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-[#f0fdf4] p-10 sm:p-14 rounded-3xl shadow-xl border border-emerald-100 text-center">
            <div className="text-5xl absolute top-6 left-6 text-green-200">
              🌼
            </div>
            <div className="text-5xl absolute bottom-6 right-6 text-green-200">
              🌿
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-800 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Join thousands of happy plant parents growing with confidence
              every day.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="relative inline-flex items-center justify-center px-8 py-3 sm:py-4 overflow-hidden font-semibold text-white bg-emerald-600 rounded-full group hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-green-200/50 cursor-pointer">
                <span className="relative z-10">Start Your Journey</span>
                <span className="absolute -bottom-0 -right-0 w-full h-full bg-green-800 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              </button>

              <button className="relative inline-flex items-center justify-center px-8 py-3 sm:py-4 overflow-hidden font-semibold text-emerald-700 border-2 border-emerald-600 rounded-full group hover:bg-green-50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                <span className="relative z-10">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCare;

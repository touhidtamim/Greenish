const PlantCareMadeEasy = () => {
  return (
    <section className="bg-gradient-to-br from-[#fbf8fc] via-white to-[#e2f9f6] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
          Plant Care Made Easy
        </h2>

        {/* Description */}
        <p className="text-green-700 max-w-2xl mx-auto mb-12">
          We don’t just deliver plants — we guide you every step of the way.
          From simple tips to expert advice, your green buddies are in safe
          hands.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Card 1 - Watering Reminders */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.05]">
            <img
              src="../../public/images/watering.png"
              alt="Watering Icon"
              className="h-20 mb-1"
            />
            <h4 className="text-green-800 font-semibold text-lg mb-2">
              Watering Reminders
            </h4>
            <p className="text-green-600 text-sm">
              Get regular tips on when and how much to water your plants.
            </p>
          </div>

          {/* Card 2 - Light & Placement */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.05]">
            <img
              src="../../public/images/large_sun.png"
              alt="Sunlight Icon"
              className="h-12 mb-4"
            />
            <h4 className="text-green-800 font-semibold text-lg mb-2">
              Light & Placement
            </h4>
            <p className="text-green-600 text-sm">
              Know exactly where your plant thrives best — sunlight, shade, or a
              bit of both.
            </p>
          </div>

          {/* Card 3 - Expert Support */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.05]">
            <img
              src="../../public/images/support.png"
              alt="Help Icon"
              className="h-12 mb-4"
            />
            <h4 className="text-green-800 font-semibold text-lg mb-2">
              Expert Support
            </h4>
            <p className="text-green-600 text-sm">
              Need help? Message us anytime. Our plant experts are just a click
              away.
            </p>
          </div>

          {/* Card 4 - Community Care */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.05]">
            <img
              src="../../public/images/Group-Vector-PNG-Clipart.png"
              alt="Community Icon"
              className="h-12 mb-4"
            />
            <h4 className="text-green-800 font-semibold text-lg mb-2">
              Community Care
            </h4>
            <p className="text-green-600 text-sm">
              Share your plant journey with others and learn from a thriving
              plant-loving community.
            </p>
          </div>
        </div>

        {/* Explore Guide Button */}
        <div className="mt-10">
          <a
            href="/greenish/plant-care"
            className="relative inline-block px-6 py-3 bg-green-600 text-white rounded-full font-medium group hover:shadow-lg hover:scale-105 transition"
          >
            <span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-full"></span>
            <span className="relative z-10">Explore Full Care Guide</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlantCareMadeEasy;

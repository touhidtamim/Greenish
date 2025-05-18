import { useEffect, useState } from "react";

const HowItWorks = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const steps = [
    {
      icon: "🌱",
      title: "Pick Your Perfect Box",
      description:
        "Take our 30-second plant quiz or browse our curated collections",
      emoji: "✏️",
    },
    {
      icon: "📦",
      title: "Subscribe Your Way",
      description:
        "Choose monthly, quarterly, or gift options – cancel anytime",
      emoji: "🔄",
    },
    {
      icon: "💚",
      title: "Enjoy Happy Plants",
      description:
        "Receive healthy plants with care guides and surprise extras",
      emoji: "🎁",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#fcfffc] via-[#fbf8fc] to-[#fcfffc] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-lg p-2 mx-auto rounded-full bg-blue-50 lg:w-1/8 text-center text-green-700 font-semibold mb-2">
          How It Works ?
        </p>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4">
            As Simple as <span className="text-green-600">1-2-3</span>
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto text-lg">
            Getting your plant paradise has never been easier.
          </p>
        </div>

        {/* Progress Line */}
        <div className="relative max-w-4xl mx-auto mb-12 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0 rounded"></div>
          <div
            className={`absolute top-1/2 left-0 h-1 bg-green-500 -translate-y-1/2 z-10 transition-all duration-1000 ease-in-out rounded-full ${
              animated ? "w-full" : "w-0"
            }`}
            style={{
              background: "linear-gradient(90deg, #38A169 0%, #2F855A 100%)",
            }}
          ></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-12 md:gap-6 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                animated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg md:-left-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-10">
                {index + 1}
              </div>

              {/* Step Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full border border-green-100 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-5 text-center">{step.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {step.description}
                </p>
                <div className="text-center text-2xl mt-4">{step.emoji}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex justify-center gap-3 mt-12 md:hidden">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-700 ${
                animated
                  ? "bg-gradient-to-tr from-green-400 to-green-600 shadow-md"
                  : "bg-gray-300"
              }`}
              style={{ transitionDelay: `${index * 400}ms` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-16 translate-y-16 scale-150 hidden md:block">
        🌿
      </div>
    </section>
  );
};

export default HowItWorks;

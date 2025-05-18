import React from "react";

const TestimonialSection = () => (
  <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-green-200">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img
          src="https://i.ibb.co.com/pq9JbCn/153388499-happy-girl-in-a-field-of-sunflowers.jpg"
          alt="Plant care consultation"
          className="rounded-lg shadow"
        />
      </div>
      <div className="md:w-2/3 md:pl-8">
        <h4 className="text-xl font-bold text-green-900 mb-3">
          “Greenish literally brought my plant back to life.”
        </h4>
        <p className="text-green-700 mb-4">
          I was losing hope when my Monstera started wilting. But thanks to a
          video call with their plant expert, I learned how to treat root rot
          and save it — step by step. I never felt alone in the process.
        </p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
            <span className="text-green-800 font-semibold">SK</span>
          </div>
          <div>
            <p className="font-medium">Sarah K.</p>
            <p className="text-sm text-green-600">
              Loyal Greenish Member since 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialSection;

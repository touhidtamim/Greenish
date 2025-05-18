import React from "react";

const SupportCard = ({ icon, title, description }) => (
  <div className="bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-all border border-green-100">
    <div className="flex items-center mb-4">
      <div className="mr-4 p-2 bg-green-100 rounded-full">{icon}</div>
      <h3 className="text-lg font-semibold text-green-800">{title}</h3>
    </div>
    <p className="text-green-700 pl-14">{description}</p>
  </div>
);

export default SupportCard;

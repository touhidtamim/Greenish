import React from "react";
import { PhoneCall } from "react-feather";

const FloatingCallButton = () => (
  <div className="fixed bottom-4 right-4 animate-bounce z-50 group">
    {/* Tooltip shown on hover */}
    <div className="absolute bottom-14 right-1/2 translate-x-1/2 bg-green-700 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
      Call Support
    </div>

    {/* Clickable call button */}
    <div className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full cursor-pointer shadow-lg">
      <a href="tel:+880123456789" aria-label="Call support">
        <PhoneCall size={28} />
      </a>
    </div>
  </div>
);

export default FloatingCallButton;

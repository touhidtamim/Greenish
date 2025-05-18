import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#fcfffc] via-[#fbf8fc] to-[#fcfffc]  ">
      <div className="w-12 h-12 border-4 border-[#b2dfdb] border-t-[#00796b] rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-[#004d40] font-medium">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;

import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative px-6 mt-5 overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-green-100 rounded-full opacity-20"></div>
      </div>
      
     
      <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-[#f0fdf4] p-8 sm:p-12 rounded-3xl shadow-lg border border-green-100">
        
        <div className="absolute top-6 right-6 text-green-200 text-5xl">🌱</div>
        <div className="absolute bottom-6 left-6 text-green-200 text-5xl">🍃</div>
        
        
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-green-900 mb-6 leading-tight">
            Cultivate Your <span className="text-green-600">Plant Paradise</span> 🌿
          </h2>
          
          <p className="text-green-700 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Join our community of plant lovers and receive <span className="font-medium">hand-selected plants, expert care guides, and premium tools</span> delivered to your doorstep each month.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/greenish/services" 
              className="relative inline-flex items-center justify-center px-8 py-3 sm:py-4 overflow-hidden font-semibold text-white bg-green-600 rounded-full group hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-200/50"
            >
              <span className="relative z-10">Explore Subscription Plans</span>
              <span className="absolute -bottom-0 -right-0 w-full h-full bg-green-800 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </Link>
            
            <Link 
              to="/greenish/how-it-works" 
              className="relative inline-flex items-center justify-center px-8 py-3 sm:py-4 overflow-hidden font-semibold text-green-700 border-2 border-green-600 rounded-full group hover:bg-green-50 transition-all duration-300"
            >
              <span className="relative z-10">How It Works →</span>
            </Link>
          </div>
          
          <p className="mt-6 text-green-600 text-sm flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No commitment - pause or cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
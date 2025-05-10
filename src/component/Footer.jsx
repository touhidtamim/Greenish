import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white mt-12 px-6 py-10 border-t border-green-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center z-10">
            <img
              src="../../public/images/Logo with title.jpeg"
              alt="Greenish Logo"
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm mt-4 text-gray-300">
            Cultivating calm. Nurturing nature. Growing greener lives —
            together.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/greenish/services" className="hover:text-green-600">
                Services
              </Link>
            </li>
            <li>
              <Link to="/greenish/plant-care" className="hover:text-green-600">
                Plant Care
              </Link>
            </li>
            <li>
              <Link to="/greenish/about" className="hover:text-green-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/greenish/community" className="hover:text-green-600">
                #GrowWithGreenish
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/greenish/faq" className="hover:text-green-600">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/greenish/contact" className="hover:text-green-600">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/greenish/terms&conditions"
                className="hover:text-green-600"
              >
                Terms & Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Stay Connected
          </h3>
          <div className="flex gap-5 text-md">
            <a
              href="https://web.facebook.com/touhidtamim01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/touhidunknown"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 p-2 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/touhidtamim"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full"
            >
              <FaX />
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-4">Let’s grow together 🌱</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-10">
        © {new Date().getFullYear()} Greenish. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

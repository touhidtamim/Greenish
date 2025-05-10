import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/greenish/services" },
    { name: "Plant Care", href: "/greenish/plant-care" },
    { name: "About Us", href: "/greenish/about" },
    { name: "#GrowWithGreenish", href: "/greenish/community" },
    { name: "My Profile", href: "/greenish/user-profile" },
  ];

  return (
    <header className="p-4 bg-[#ffffff] relative shadow">
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <img
            src="/images/Logo with title.jpeg"
            alt="Greenish Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation - Updated to use flex-grow */}
        <nav className="hidden lg:flex flex-grow justify-center mx-4">
          <ul className="flex space-x-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`px-3 py-2 text-green-900 hover:bg-green-100 rounded font-medium transition-colors ${
                    location.pathname === link.href ? "bg-green-200" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-4 z-10">
          <Link
            to="/greenish/login"
            className="px-6 py-2 text-green-800 font-medium hover:bg-green-100 rounded transition-colors"
          >
            Login
          </Link>
          <Link
            to="/greenish/register"
            className="px-6 py-2 bg-green-600 text-white font-medium hover:bg-green-700 rounded transition-colors"
          >
            Register
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden p-2 focus:outline-none z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-green-50 mt-2 p-4">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <Link
                  to={link.href}
                  className={`block px-4 py-2 text-green-900 font-medium rounded ${
                    location.pathname === link.href
                      ? "bg-green-200"
                      : "hover:bg-green-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="w-full">
              <Link
                to="/greenish/login"
                className="block w-full text-center px-4 py-2 mt-2 text-green-800 font-medium bg-green-100 hover:bg-green-200 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/greenish/register"
                className="block w-full text-center px-4 py-2 text-white bg-green-600 hover:bg-green-700 font-medium rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

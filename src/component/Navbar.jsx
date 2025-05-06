import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Plant Care', href: '/plant-care' },
    { name: 'About Us', href: '/about' },
    { name: '#GrowWithGreenish', href: '/greenish/community' },
  ];

  return (
    <header className="p-4 bg-white relative">
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo - Left Side */}
        <Link to="/" className="flex items-center z-10">
          <img 
            src="../../public/images/Logo with title.jpeg" 
            alt="Greenish Logo" 
            className="h-10 w-auto" 
          />
        </Link>

        {/*Navigation - Middle */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`px-3 py-2 text-green-900 hover:bg-green-100 rounded font-medium transition-colors ${
                    activeLink === link.name ? 'bg-green-200' : ''
                  }`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons - Right Side */}
        <div className="hidden lg:flex items-center space-x-4 ml-4 z-10">
          <button className="px-6 py-2 text-green-800 font-medium hover:bg-green-100 rounded transition-colors">
            Login
          </button>
          <button className="px-6 py-2 bg-green-600 text-white font-medium hover:bg-green-700 rounded transition-colors">
            Register
          </button>
        </div>

        {/* Hamburger Menu - Right Side */}
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
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/*Navigation - Mobile View */}
      {isMenuOpen && (
        <div className="lg:hidden bg-green-50 mt-2 p-4">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`block px-4 py-2 text-green-900 font-medium rounded ${
                    activeLink === link.name ? 'bg-green-200' : 'hover:bg-green-100'
                  }`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button className="w-full px-4 py-2 mt-2 text-green-800 font-medium bg-green-100 hover:bg-green-200 rounded transition-colors">
                Login
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 text-white bg-green-600 hover:bg-green-700 font-medium rounded transition-colors">
                Register
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
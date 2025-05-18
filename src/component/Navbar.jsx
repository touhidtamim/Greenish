import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider ";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const commonLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/greenish/services" },
    { name: "Plant Care", href: "/greenish/plant-care" },
    { name: "About Us", href: "/greenish/about" },
  ];

  const loggedInLinks = [
    { name: "#GrowWithGreenish", href: "/greenish/community" },
    { name: "My Profile", href: "/greenish/user-profile" },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const avatarUrl =
    user?.photoURL ||
    "https://i.postimg.cc/qB6MfzWf/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";

  if (!isClient) {
    return (
      <header className="p-4 bg-white shadow relative">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center z-10">
            <img
              src="/images/Logo with title.jpeg"
              alt="Greenish Logo"
              className="h-10 w-auto"
            />
          </Link>
          <div className="h-10 w-10"></div>{" "}
        </div>
      </header>
    );
  }

  return (
    <header className="p-4 bg-white shadow relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <img
            src="/images/Logo with title.jpeg"
            alt="Greenish Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Main Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center mx-4">
          <ul className="flex space-x-4">
            {commonLinks.map((link) => (
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
            {user &&
              loggedInLinks.map((link) => (
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

        {/* Auth Section */}
        <div className="hidden lg:flex items-center space-x-4 z-10">
          {user ? (
            <>
              <div className="relative group">
                <Link
                  to="/greenish/user-profile"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 border-2 border-green-300 overflow-hidden"
                  title={user.displayName || "User"}
                >
                  <img
                    src={avatarUrl}
                    alt="User Avatar"
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-green-700 text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                  {user.displayName || "User"}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="px-6 py-2 cursor-pointer bg-green-600 hover:bg-green-800 text-white font-medium rounded transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          {user && (
            <Link
              to="/greenish/user-profile"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 border-2 border-green-300 overflow-hidden"
            >
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </Link>
          )}
          <button
            className="p-2 focus:outline-none z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="lg:hidden bg-green-50 mt-2 p-4">
          <ul className="flex flex-col space-y-3">
            {commonLinks.map((link) => (
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
            {user &&
              loggedInLinks.map((link) => (
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
            {!user ? (
              <>
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
              </>
            ) : (
              <li className="w-full">
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-center px-4 py-2 mt-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

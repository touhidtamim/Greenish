import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider ";

const Register = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { googleSignIn } = useContext(AuthContext);

  const auth = getAuth();

  // Simple email validation regex
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Form submit handler with validations and Firebase registration
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = "";

    if (!name.trim()) {
      errors = "Name is required.";
    } else if (!photoURL.trim()) {
      errors = "Photo URL is required.";
    } else if (!validateEmail(email)) {
      errors = "Please enter a valid email address.";
    } else if (password.length < 6) {
      errors = "Password must be at least 6 characters long.";
    } else if (!/[A-Z]/.test(password)) {
      errors = "Password must include at least one UPPERCASE letter.";
    } else if (!/[a-z]/.test(password)) {
      errors = "Password must include at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      errors = "Password must include at least one number.";
    }

    if (errors) {
      setError(errors);
      return;
    }

    setError("");

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;

        // Update user profile with name and photo URL
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log("User registered & profile updated:", user);
            // Clear form
            setName("");
            setEmail("");
            setPassword("");
            setPhotoURL("");
            navigate("/");
          })
          .catch((err) => {
            setError("Profile update failed: " + err.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Handler for Google sign-in via context provider
  const handleGoogleRegister = async () => {
    try {
      const result = await googleSignIn();
      const loggedUser = result.user;
      console.log("Google user registered:", loggedUser);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Greenish | Register - Join the Plant Lovers Club</title>
        <meta
          name="description"
          content="Create your Greenish account to start your personalized plant journey, subscribe to your favorite boxes, and enjoy greenery like never before."
        />
      </Helmet>

      <div className="min-h-screen mt-10 rounded-2xl bg-gradient-to-br from-[#fcfffc] via-[#fbf8fc] to-[#fcfffc] py-6 px-4 sm:px-6 lg:px-8 bg-center bg-cover">
        <div className="max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-4xl font-extrabold text-emerald-700 mb-1">
              Create Account 🌱
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Let’s grow your plant collection together!
            </p>

            {/* Display error messages */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-left">
                {error}
              </div>
            )}

            {/* Registration form */}
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Name input */}
              <div>
                <label className="block text-sm text-left font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Photo URL input */}
              <div>
                <label className="block text-sm text-left font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photoUrl"
                  required
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Email input */}
              <div>
                <label className="block text-sm text-left font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Password input with toggle */}
              <div>
                <label className="block text-sm text-left font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Choose a strong password"
                    className="mt-1 block w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500 text-left">
                  Password must be at least 6 characters, include uppercase,
                  lowercase, and a number.
                </p>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition"
                >
                  Register
                </button>
              </div>
            </form>

            {/* Divider for alternative registration */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or register with
                  </span>
                </div>
              </div>

              {/* Google Sign-in button */}
              <div className="mt-6">
                <button
                  onClick={handleGoogleRegister}
                  className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition"
                >
                  <FcGoogle className="mr-3 text-xl" />
                  Continue with Google
                </button>
              </div>
            </div>

            {/* Link to login page */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/greenish/login"
                  className="font-semibold text-emerald-600 hover:text-emerald-500 transition"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

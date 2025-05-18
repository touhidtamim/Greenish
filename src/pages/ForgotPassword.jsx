import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const passedEmail = location.state?.email || "";
  const [email, setEmail] = useState(passedEmail);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox.");
      window.open("https://mail.google.com", "_blank");
    } catch (err) {
      console.error("Reset Error:", err);
      setError("Failed to send reset email. Please check the address.");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Greenish | Reset Password</title>
        <meta
          name="description"
          content="Reset your password to regain access to your Greenish account and continue your plant care journey."
        />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9fefc] via-[#f6f8fb] to-[#f9fefc] py-10 px-6">
        <div className="max-w-md w-full bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-4xl font-extrabold text-emerald-700 mb-2">
            Reset Password 🌱
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your email and we’ll send you a password reset link.
          </p>

          {message && (
            <p className="my-5 text-sm bg-stone-100 text-green-800 font-medium">
              {message}
            </p>
          )}
          {error && (
            <p className="my-5 text-sm bg-stone-100 text-red-600 font-medium">
              {error}
            </p>
          )}

          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer py-3 px-4 rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 font-semibold text-md shadow-md transition duration-300"
            >
              Reset Password
            </button>
          </form>

          {/* Back Button */}
          <button
            onClick={handleBack}
            className="mt-4 text-emerald-600 hover:underline text-md font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider ";
import { updateProfile } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiEdit,
  FiSave,
  FiX,
  FiUser,
  FiMail,
  FiCamera,
  FiXCircle,
} from "react-icons/fi";

const ProfilePage = () => {
  const { user, setLoading } = useContext(AuthContext);

  // Local states for edit mode, temp inputs, loading, and messages
  const [editMode, setEditMode] = useState(false);
  const [tempName, setTempName] = useState(user?.displayName || "");
  const [tempPhotoURL, setTempPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLocalLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Save updated profile info to Firebase
  const handleSave = async () => {
    if (!user) return;

    if (!tempName.trim()) {
      setError("Name cannot be empty");
      return;
    }

    setError(null);
    setLocalLoading(true);
    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: tempName,
        photoURL: tempPhotoURL,
      });
      setSuccess("Profile updated successfully!");
      setTimeout(() => setSuccess(null), 3000);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile. Please try again.");
    } finally {
      setLocalLoading(false);
      setLoading(false);
    }
  };

  // Reset form fields and exit edit mode
  const resetForm = () => {
    setTempName(user?.displayName || "");
    setTempPhotoURL(user?.photoURL || "");
    setEditMode(false);
    setError(null);
  };

  return (
    <>
      <Helmet>
        <title>My Profile | Greenish</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-[#fbf8fc] via-white to-[#e2f9f6] flex items-center justify-center lg:p-4"
      >
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 overflow-hidden">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
              My Profile
            </h2>

            {/* Profile Image */}
            <div className="relative flex justify-center mb-6 group">
              <div
                className="relative cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                <img
                  src={
                    tempPhotoURL ||
                    "https://i.postimg.cc/qB6MfzWf/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                  }
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-green-200 shadow-lg transition-all duration-300 hover:border-green-400"
                />
                {editMode && (
                  <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow">
                    <FiCamera className="text-green-600 text-xl" />
                  </div>
                )}
              </div>
            </div>

            {/* Error / Success Messages */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm"
              >
                {success}
              </motion.div>
            )}

            {/* Name Field */}
            <div className="mb-4">
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <FiUser className="mr-2" />
                Name
              </label>
              {editMode ? (
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  placeholder="Enter your name"
                />
              ) : (
                <p className="text-lg font-medium text-gray-800 px-2 py-1 rounded">
                  {user?.displayName || "User"}
                </p>
              )}
            </div>

            {/* Photo URL Input (Edit Mode) */}
            {editMode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-4 overflow-hidden"
              >
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <FiCamera className="mr-2" />
                  Photo URL
                </label>
                <input
                  type="text"
                  value={tempPhotoURL}
                  onChange={(e) => setTempPhotoURL(e.target.value)}
                  placeholder="Paste image URL"
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
                />
              </motion.div>
            )}

            {/* Email Display */}
            <div className="mb-6">
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <FiMail className="mr-2" />
                Email
              </label>
              <p className="text-gray-600 px-2 py-1 rounded">
                {user?.email || "No email available"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              {editMode ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetForm}
                    disabled={loading}
                    className="flex items-center px-6 py-2 border border-green-400 rounded-lg text-green-600 hover:bg-green-50 transition"
                  >
                    <FiX className="mr-2" />
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSave}
                    disabled={loading}
                    className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:bg-green-400"
                  >
                    <FiSave className="mr-2" />
                    {loading ? "Saving..." : "Save"}
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setEditMode(true)}
                  className="flex items-center px-8 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <FiEdit className="mr-2" />
                  Edit Profile
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enlarged Profile Image Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)} // Close modal on outside click
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
            >
              <img
                src={
                  tempPhotoURL ||
                  "https://i.postimg.cc/qB6MfzWf/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                }
                alt="Enlarged"
                className="w-[95vw] max-w-2xl rounded-2xl shadow-2xl border-4 border-white"
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-1 shadow-md hover:bg-red-100 transition"
                aria-label="Close enlarged image"
              >
                <FiXCircle className="text-red-500 text-2xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfilePage;

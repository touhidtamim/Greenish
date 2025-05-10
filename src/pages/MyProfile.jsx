import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiEdit,
  FiSave,
  FiCamera,
  FiUser,
  FiMail,
  FiAward,
} from "react-icons/fi";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    photoURL: "https://randomuser.me/api/portraits/men/32.jpg",
    joinDate: "Joined March 2023",
    plantsSaved: 24,
    level: "Plant Enthusiast",
  });

  const [editMode, setEditMode] = useState(false);
  const [tempName, setTempName] = useState(user.name);
  const [tempPhoto, setTempPhoto] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTempPhoto(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        ...user,
        name: tempName,
        photoURL: previewImage || user.photoURL,
      });
      setEditMode(false);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>My Profile | Greenish</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            {/* Profile Header */}
            <div className="relative">
              <div className="h-32 bg-gradient-to-r from-green-200 via-pink-200 to-blue-200"></div>
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="relative group">
                  <img
                    className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                    src={previewImage || user.photoURL}
                    alt="Profile"
                  />
                  {editMode && (
                    <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:scale-110">
                      <FiCamera className="text-green-600" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="pt-20 px-8 pb-8">
              <div className="text-center mb-8">
                {editMode ? (
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="text-2xl font-bold text-center bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                  />
                ) : (
                  <motion.h1
                    whileHover={{ scale: 1.02 }}
                    className="text-2xl font-bold text-gray-800"
                  >
                    {user.name}
                  </motion.h1>
                )}
                <p className="text-green-600 mt-2">{user.level}</p>
                <p className="text-gray-500 text-sm mt-1">{user.joinDate}</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-green-50 p-4 rounded-lg text-center border border-green-100"
                >
                  <FiAward className="text-green-600 text-2xl mx-auto mb-2" />
                  <p className="text-gray-600">Level</p>
                  <p className="font-bold text-green-700">{user.level}</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-green-50 p-4 rounded-lg text-center border border-green-100"
                >
                  <svg
                    className="w-6 h-6 text-green-600 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <p className="text-gray-600">Plants Saved</p>
                  <p className="font-bold text-green-700">{user.plantsSaved}</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-green-50 p-4 rounded-lg text-center border border-green-100 md:block hidden"
                >
                  <svg
                    className="w-6 h-6 text-green-600 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-600">Active Member</p>
                  <p className="font-bold text-green-700">1+ year</p>
                </motion.div>
              </div>

              {/* Profile Details */}
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <FiUser className="mr-2 text-green-600" />
                  Personal Information
                </h2>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 mb-2 sm:mb-0">
                      Name:
                    </span>
                    {editMode ? (
                      <input
                        type="text"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="w-full sm:w-2/3 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
                      />
                    ) : (
                      <span className="w-full sm:w-2/3 font-medium">
                        {user.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 mb-2 sm:mb-0">
                      Email:
                    </span>
                    <span className="w-full sm:w-2/3 font-medium flex items-center">
                      <FiMail className="mr-2 text-green-600" />
                      {user.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                {editMode ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setEditMode(false);
                        setTempName(user.name);
                        setPreviewImage(null);
                      }}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSave}
                      disabled={loading}
                      className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition flex items-center shadow-md"
                    >
                      {loading ? (
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <FiSave className="mr-2" />
                      )}
                      Save Changes
                    </motion.button>
                  </>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setEditMode(true)}
                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition flex items-center shadow-md"
                  >
                    <FiEdit className="mr-2" />
                    Edit Profile
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProfilePage;

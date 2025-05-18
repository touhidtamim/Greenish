import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state || {};

  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState([
    {
      name: "Afsana Rahman",
      rating: 5,
      review:
        "Absolutely love the Greenish care package! My plants are thriving like never before.",
      date: "May 5, 2025",
    },
    {
      name: "Tariq Hossain",
      rating: 4,
      review:
        "Very helpful subscription, though I wish it came with a few more detailed guides.",
      date: "May 3, 2025",
    },
    {
      name: "Nusrat Jahan",
      rating: 5,
      review:
        "Perfect for busy plant lovers. Hassle-free and beautifully packed!",
      date: "April 29, 2025",
    },
  ]);

  if (!service) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-red-600">No service data found.</p>
        <button
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleSubmitReview = () => {
    if (!review || !rating || rating < 1 || rating > 5) {
      Swal.fire({
        title: "Oops...",
        text: "Please enter a review and a valid rating between 1 and 5.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      return;
    }

    const newReview = {
      name: "You",
      review,
      rating,
      date: new Date().toLocaleDateString(),
    };
    setSubmittedReviews([newReview, ...submittedReviews]);
    setReview("");
    setRating("");

    Swal.fire({
      title: "Thank You!",
      text: "Your review has been submitted successfully.",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
  };

  const handleSubscribe = () => {
    Swal.fire({
      title: `<span style="color:#2F855A">Subscribe to ${service.title}</span>`,
      html: `
    <p>Price: <strong style="color:#2F855A;">${service.price}</strong></p>
    <p style="margin-top:6px; font-size:14px; color:#4A5568;">
      Confirm to get started.
    </p>
  `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#38A169",
      cancelButtonColor: "#E53E3E",
      confirmButtonText: "Subscribe",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "rounded-lg shadow-lg",
        confirmButton: "text-white px-4 py-2 rounded",
        cancelButton: "px-4 py-2 rounded",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setIsSubscribed(true);

        Swal.fire({
          title: `<span style="color:#2F855A">Subscribed!</span>`,
          html: `<p>You're now subscribed to <strong>${service.title}</strong>.</p>`,
          icon: "success",
          confirmButtonColor: "#38A169",
          confirmButtonText: "Awesome",
          customClass: {
            popup: "rounded-lg shadow-md",
            confirmButton: "text-white px-4 py-2 rounded",
          },
        });
      }
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 pb-12 rounded-xl shadow-lg mt-10">
      <div className="flex items-center mb-8">
        <button
          className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out"
          onClick={() => navigate(-1)}
        >
          <IoArrowBackOutline className="mr-2 text-xl" />
          Go Back
        </button>
      </div>

      <div className="text-center rounded-xl py-4 bg-gradient-to-br from-green-100 via-green-50 to-green-100 mb-8">
        <h1 className="text-2xl md:text-5xl font-bold text-green-800 mb-3">
          Service Details
        </h1>
        <p className="text-md md:text-lg text-gray-600">
          Discover all the details about our exclusive plant subscriptions!
        </p>
      </div>

      <img
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
        {service.title}
      </h2>
      <p className="text-lg text-gray-600 mb-6">{service.description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-6">
        {[
          ["What's Included:", service.benefits],
          ["Subscription Benefits:", service.subscriptionBenefits],
        ].map(([title, items], idx) => (
          <div key={idx} className="p-6 rounded-lg shadow-sm">
            <h4 className="text-2xl font-semibold text-green-700 mb-4">
              {title}
            </h4>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-md text-green-700 font-medium italic mb-8">
        <span className="font-semibold">Recommendation:</span>{" "}
        {service.recommendation}
      </p>

      <div className="flex justify-between items-center mb-8">
        <p className="text-xl font-bold text-green-800">{service.price}</p>
        <p className="text-sm text-gray-500">
          {service.frequency} Delivery • {service.reviewCount} Reviews
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleSubscribe}
          disabled={isSubscribed}
          className={`relative overflow-hidden px-6 py-3 rounded-lg text-white font-medium group transition 
            ${
              isSubscribed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:scale-105"
            }`}
        >
          <span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
          <span className="absolute top-0 left-0 w-10 h-full bg-white/30 -skew-x-12 transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out rounded-lg"></span>
          <span className="relative z-10">
            {isSubscribed ? "Subscribed" : "Subscribe Now"}
          </span>
        </button>
      </div>

      <div className="border-t border-gray-200 pt-8 mt-12">
        <h3 className="text-2xl md:text-4xl text-center rounded-xl py-4 md:py-8 bg-gradient-to-br from-green-100 via-green-50 to-green-100 font-bold text-green-700 mb-6">
          Customer Reviews
        </h3>

        {submittedReviews.length > 0 ? (
          <div className="space-y-6 mb-10 p-6 rounded-xl">
            {submittedReviews.map((item, idx) => (
              <div
                key={idx}
                className="border p-6 rounded-lg bg-gradient-to-br from-[#fcfffc] via-[#fbf8fc] to-[#fcfffc] shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < item.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <p className="text-gray-800 italic">"{item.review}"</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 mb-10 border border-dashed border-gray-300 rounded-lg bg-gradient-to-r from-green-50 to-white">
            <p className="text-gray-500 mb-2">No reviews yet</p>
            <p className="text-sm text-gray-400">
              Be the first to share your experience!
            </p>
          </div>
        )}

        <div className="border p-6 rounded-xl">
          <h4 className="text-lg font-semibold text-green-800 mb-4">
            Share your experience
          </h4>

          <div className="flex my-5 items-center space-x-4">
            <label className="text-gray-700 ml-3 font-medium">
              Your Rating:
            </label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star.toString())}
                  className={`text-2xl ${
                    rating >= star ? "text-yellow-400" : "text-gray-300"
                  } hover:text-yellow-400`}
                >
                  ★
                </button>
              ))}
            </div>
            {rating && (
              <span className="text-sm text-gray-500">{rating} out of 5</span>
            )}
          </div>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="How was your experience with this service?"
            className="w-full border border-green-200 rounded-lg p-4 h-32 resize-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex justify-center mt-4">
            <button
              onClick={handleSubmitReview}
              className="mt-4 px-4 md:px-6 py-1 md:py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;

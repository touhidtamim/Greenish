import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-green-900">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Get in Touch</h1>
      <p className="mb-8 text-lg">
        Whether you have a question, feedback, or just want to share your plant story — we’d love to hear from you!
      </p>

      {/* Contact Info */}
      <div className="mb-10">
        <p className="mb-2"><strong>Email:</strong> support@greenish.com</p>
        <p className="mb-2"><strong>Phone:</strong> +880 1234 567 890</p>
        <p className="mb-2"><strong>Address:</strong> Greenish HQ, Dhaka, Bangladesh</p>
      </div>

      {/* Contact Form */}
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">Your Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

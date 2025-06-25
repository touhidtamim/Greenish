import React from "react";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  // FAQ data: list of common questions and answers
  const faqs = [
    {
      question: "What is Greenish?",
      answer:
        "Greenish is a monthly subscription box that delivers curated plant-themed products, accessories, and care essentials to your doorstep. We aim to make plant care joyful and easy for everyone.",
    },
    {
      question: "How does the subscription work?",
      answer:
        "You subscribe once, and we send you a new box each month with exciting plant care goodies. You can cancel or pause your subscription anytime from your account settings.",
    },
    {
      question: "What’s inside the box?",
      answer:
        "Each box includes seasonal indoor plants, plant care tools, organic fertilizers, eco-friendly pots, and surprise items—all selected to suit your space and lifestyle.",
    },
    {
      question: "Do you deliver across Bangladesh?",
      answer:
        "Yes! We deliver to all major cities and towns in Bangladesh. Shipping times may vary slightly based on your location.",
    },
    {
      question: "Can I gift a Greenish box?",
      answer:
        "Absolutely! You can purchase a gift subscription and we’ll send a beautiful welcome message with the first box. Just check the 'Gift' option at checkout.",
    },
    {
      question: "What if my plant arrives damaged?",
      answer:
        "We carefully package all items, but if something arrives damaged, contact us within 48 hours with a photo and we’ll replace it or offer a refund.",
    },
  ];

  return (
    <>
      {/* SEO setup */}
      <Helmet>
        <title>
          Greenish | FAQ - Your Plant Subscription Questions Answered
        </title>
        <meta
          name="description"
          content="Got questions? Visit our FAQ page for answers to your most common queries about Greenish subscription boxes, plant care, and more!"
        />
      </Helmet>

      {/* Container */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-green-900">
        {/* Page heading */}
        <h1 className="text-3xl font-bold mb-8 text-green-800">
          Frequently Asked Questions
        </h1>

        {/* FAQ list */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-base text-green-800">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;

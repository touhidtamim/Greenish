import React from "react";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  return (
    <>
      {/* SEO meta tags for the page */}
      <Helmet>
        <title>Greenish | Terms and Conditions - Your Agreement with Us</title>
        <meta
          name="description"
          content="Read the Greenish Terms and Conditions to understand our policies, terms of service, and your rights when using our plant subscription service."
        />
      </Helmet>

      {/* Main content container with max width and padding */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-green-900">
        {/* Page heading */}
        <h1 className="text-3xl font-bold mb-6 text-green-800">
          Terms & Conditions
        </h1>

        {/* Introductory paragraph */}
        <p className="mb-4">
          Welcome to <strong>Greenish</strong> 🌿. By using our website and
          subscribing to our services, you agree to the following terms and
          conditions. Please read them carefully.
        </p>

        {/* Sections for terms */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Subscription & Billing
        </h2>
        <p className="mb-4">
          When you subscribe to Greenish, you agree to receive a curated
          selection of plant-related products each month. Subscriptions are
          billed monthly and renew automatically unless cancelled before the
          next billing date.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. Shipping & Delivery
        </h2>
        <p className="mb-4">
          We currently deliver across Bangladesh. Orders are usually shipped
          within 5–7 business days. Delays may occur due to holidays, natural
          conditions, or logistical issues. We’ll do our best to keep you
          informed.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Cancellation & Refunds
        </h2>
        <p className="mb-4">
          You may cancel your subscription at any time through your account.
          Cancellations made after billing will apply to the next month. Due to
          the perishable nature of some products, refunds are only available for
          damaged or missing items reported within 48 hours of delivery.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Product Availability
        </h2>
        <p className="mb-4">
          Product selections may vary each month based on availability and
          seasonality. We reserve the right to replace items of equal or greater
          value when necessary.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Use of Website</h2>
        <p className="mb-4">
          You agree not to misuse this website or access it for unauthorized
          purposes. All content, including images and branding, are property of
          Greenish and may not be reused without permission.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Privacy</h2>
        <p className="mb-4">
          Your privacy is important to us. We collect basic personal information
          to fulfill your subscription. We do not sell or share your data with
          third parties without your consent.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to Terms</h2>
        <p className="mb-4">
          We may update these terms from time to time. Significant changes will
          be communicated via email or website notice. Continued use of our
          services constitutes agreement to the revised terms.
        </p>

        {/* Last updated date */}
        <p className="mt-8 text-green-700 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;

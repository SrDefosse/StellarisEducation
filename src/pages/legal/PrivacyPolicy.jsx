import React from 'react';
// Removed: import './LegalPages.css'; // Shared CSS for legal pages

const PrivacyPolicy = () => {
  return (
  <div className="flex flex-col items-center justify-center bg-[#2D3540]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-24 py-10 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        Privacy Policy for Stellaris Education
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        <strong>Effective Date:</strong> April 14, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 leading-relaxed">
          We collect personal information that you voluntarily provide through our Contact Us form,
          including your name, email address, and any other information you choose to submit.
          We may also collect non-personal information automatically, such as your browser type,
          IP address, and how you interact with our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-700 leading-relaxed mb-3">We use the information you provide to:</p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 mb-3">
          <li>Respond to your inquiries or requests</li>
          <li>Share information about Stellaris programs or events</li>
          <li>Improve our website and communications</li>
        </ul>
        <p className="text-gray-700 leading-relaxed italic">We do not sell or rent your personal information.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Disclosure of Your Information</h2>
        <p className="text-gray-700 leading-relaxed mb-3">We may disclose your information:</p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 mb-3">
          <li>To service providers helping us manage this site or our communications</li>
          <li>If required by law or government request</li>
          <li>To protect the rights, safety, or property of Stellaris Education or others</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          We may share anonymized, non-personal data for analytics or reporting purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We use reasonable security measures to protect your personal information. However,
          no method of transmission over the Internet is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Your Rights</h2>
        <p className="text-gray-700 leading-relaxed mb-3">You may contact us at any time to:</p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
          <li>Request access to your personal data</li>
          <li>Ask us to correct or delete your data</li>
          <li>Withdraw consent for future communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Updates to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. Updates will be posted on this
          page with the new effective date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          For questions about this Privacy Policy or how we handle your data, please contact us at:
          <br />
          <a href="mailto:info@stellariseducation.com" className="text-blue-600 hover:text-blue-800 underline">
            info@stellariseducation.com
          </a>
        </p>
      </section>
    </div>
  </div>
  );
};

export default PrivacyPolicy; 
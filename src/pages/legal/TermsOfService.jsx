import React from 'react';
// Removed: import './LegalPages.css';

const TermsOfService = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#2D3540]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-24 py-10 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        Terms of Service for Stellaris Education
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        <strong>Effective Date:</strong> April 14, 2025
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Welcome to the Stellaris Education website. By accessing or using our site,
        you agree to the following terms and conditions. If you do not agree,
        please do not use our website.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Website Use</h2>
        <p className="text-gray-700 leading-relaxed">
          This website is provided for informational purposes only. The content is
          subject to change without notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Intellectual Property</h2>
        <p className="text-gray-700 leading-relaxed">
          All content on this website, including text, graphics, logos, and images,
          is the property of Stellaris Education and may not be copied, distributed,
          or used without prior written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Links to Other Sites</h2>
        <p className="text-gray-700 leading-relaxed">
          Our website may include links to third-party websites. We are not responsible
          for their content, privacy policies, or practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. User Submissions</h2>
        <p className="text-gray-700 leading-relaxed">
          Any information you submit via forms on this website must be accurate.
          Do not submit sensitive personal information or proprietary material
          through the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Disclaimer</h2>
        <p className="text-gray-700 leading-relaxed">
          Stellaris Education does not guarantee the accuracy or completeness of
          any information on the site. The site is provided "as is" without
          warranties of any kind.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed">
          We are not liable for any damages arising from the use of this website,
          including errors, interruptions, or third-party actions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Changes to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update these Terms of Service from time to time. Continued use
          of the website constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Governing Law</h2>
        <p className="text-gray-700 leading-relaxed">These Terms are governed by the laws of the State of Delaware.</p>
      </section>
    </div>
    </div>
  );
};

export default TermsOfService; 
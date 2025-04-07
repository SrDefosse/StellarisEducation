import { useState } from 'react';
// import Head from 'next/head'; // Removed Head import
// import Navbar from '@/components/layout/Navbar'; // Removed Navbar import
// import Footer from "@/components/layout/Footer"; // Removed Footer import
// Import components with relative paths
import { FAQSection } from '../../components/sections/contact/FAQSection'; // Check if path is correct
import AdmissionsHero from '../../components/sections/admissions/AdmissionsHero';
import ProcessandFees from '../../components/sections/admissions/ProcessandFees';

const AdmissionsPage = () => {
  const scrollToContent = (e) => {
    e.preventDefault();
    const element = document.getElementById('admissions-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Head component removed */}
      {/* Navbar component removed (assuming it's in App.jsx) */}

      {/* Hero Section */}
      <AdmissionsHero scrollToContent={scrollToContent} />

      {/* Main Content */}
      <ProcessandFees />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer component removed (assuming it's in App.jsx) */}
    </>
  );
};

export default AdmissionsPage;

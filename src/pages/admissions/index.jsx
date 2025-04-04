import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from "@/components/layout/Footer";
import { FAQSection } from '@/components/sections/contact/FAQSection';
import AdmissionsHero from '@/components/sections/admissions/AdmissionsHero';
import ProcessandFees from '@/components/sections/admissions/ProcessandFees';

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
      <Head>
        <title>Admissions | Stellaris Education</title>
        <meta name="description" content="Join the Stellaris Education community. Learn about our admissions process, tuition, and schedule a campus visit." />
      </Head>

      <Navbar isTransparent />

      {/* Hero Section */}
      <AdmissionsHero scrollToContent={scrollToContent} />

      {/* Main Content */}
      <ProcessandFees />
      
      {/* FAQ Section */}
      <FAQSection />
      
      <Footer />
    </>
  );
};

export default AdmissionsPage;

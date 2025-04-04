import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection';
import { FAQSection } from '@/components/sections/contact/FAQSection';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Stellaris Education</title>
        <meta 
          name="description" 
          content="Get in touch with Stellaris Education. We're here to answer your questions about our innovative bilingual education programs in Nashville."
        />
      </Head>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-white mt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-[#4081DE]">
            Contact Us
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Have questions or ready to start your child's journey with Stellaris? We're here to help every step of the way.
          </p>

          <ContactFormSection />
        </motion.div>
        
        <FAQSection />
      </div>
      <Footer />
    </>
  );
} 
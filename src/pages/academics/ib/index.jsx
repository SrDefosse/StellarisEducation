import Head from 'next/head';
import { PYPSection } from '@/components/sections/academics/PYPSection';
import { InquiryBasedLearningSection } from '@/components/sections/academics/InquiryBasedLearningSection';
import { LearnerProfileSection } from '@/components/sections/academics/LearnerProfileSection';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function IBPage() {
  return (
    <>
      <Head>
        <title>IB Programme | Stellaris Education</title>
        <meta 
          name="description" 
          content="Learn about the International Baccalaureate (IB) Primary Years Programme at Stellaris Education"
        />
      </Head>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gradient-to-b from-blue-50 to-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-indigo-900">
            International Baccalaureate
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Discover our transformative approach to education through the IB Primary Years Programme
          </p>

          <div className="space-y-32">
            <PYPSection />
            <InquiryBasedLearningSection />
            <LearnerProfileSection />
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

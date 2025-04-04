import Head from 'next/head';
import { PYPSection } from '@/components/sections/academics/PYPSection';
import { InquiryBasedLearningSection } from '@/components/sections/academics/InquiryBasedLearningSection';
import { LearnerProfileSection } from '@/components/sections/academics/LearnerProfileSection';
import { motion } from 'framer-motion';
import Footer from "@/components/layout/Footer";
import IbHero from '@/components/sections/academics/IbHero';
import Navbar from "@/components/layout/Navbar";

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
      
      <Navbar isTransparent />
      <IbHero />

      {/* Main Content */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          
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

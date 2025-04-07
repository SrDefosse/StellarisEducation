// import Head from 'next/head'; // Removed Head import
// Import components with relative paths
import { PYPSection } from '../../../components/sections/academics/PYPSection';
import { InquiryBasedLearningSection } from '../../../components/sections/academics/InquiryBasedLearningSection';
import { LearnerProfileSection } from '../../../components/sections/academics/LearnerProfileSection';
import { motion } from 'framer-motion';
// import Footer from "@/components/layout/Footer"; // Removed Footer import
import IbHero from '../../../components/sections/academics/IbHero';
// import Navbar from "@/components/layout/Navbar"; // Removed Navbar import

export default function IBPage() {
  return (
    <>
      {/* Head component removed */}
      {/* Navbar removed */}
      <IbHero />

      {/* Main Content */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          // Removed container mx-auto px-4 py-16 - Assuming MaxWidthWrapper handles this or sections do
        >

          <div className="space-y-32 py-16"> {/* Added padding here */} 
            <PYPSection />
            <InquiryBasedLearningSection />
            <LearnerProfileSection />
          </div>
        </motion.div>
      </div>
      {/* Footer removed */}
    </>
  );
}

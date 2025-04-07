// import Head from 'next/head'; // Removed Head import
import { motion } from 'framer-motion';
// import Navbar from "@/components/layout/Navbar"; // Removed Navbar import
// import Footer from "@/components/layout/Footer"; // Removed Footer import
// Import components with relative paths
import TeachersHero from '../../../components/sections/academics/TeachersHero'; // Import the new Hero
import { MulticulturalBenefitsSection } from '../../../components/sections/academics/MulticulturalBenefitsSection';
import { TalentedTeachersSection } from '../../../components/sections/academics/TalentedTeachersSection';
import { RecruitmentProcessSection } from '../../../components/sections/academics/RecruitmentProcessSection';
import { VideoSection } from '../../../components/sections/academics/VideoSection';

export default function InternationalTeachersPage() {
  return (
    <>
      {/* Head component removed */}
      {/* Navbar removed */}
      <TeachersHero /> {/* Use the new TeachersHero */}
      <div className="min-h-screen /* Removed mt-20 */ bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          {/* Assuming MaxWidthWrapper is used inside sections or needed here */} 
          <div className="container mx-auto px-4"> {/* Added container here for centering */}
            {/* Removed h1 and p as they are now in the Hero */}
            <div className="space-y-32">
              <MulticulturalBenefitsSection />
              <VideoSection />
              <TalentedTeachersSection />
              <RecruitmentProcessSection />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Footer removed */}
    </>
  );
}

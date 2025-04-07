// import Head from 'next/head'; // Removed Head import
import { motion } from 'framer-motion';
// import Navbar from "@/components/layout/Navbar"; // Removed Navbar import
// import Footer from "@/components/layout/Footer"; // Removed Footer import
// Import components with relative paths
import AfterSchoolHero from '../../components/sections/afterSchool/AfterSchoolHero'; // Import the new Hero
import { DescriptionSection } from '../../components/sections/afterSchool/DescriptionSection';
import { CoverageSection } from '../../components/sections/afterSchool/CoverageSection';
import { ProgramsSection } from '../../components/sections/afterSchool/ProgramsSection';
import { EnrollmentCTA } from '../../components/sections/afterSchool/EnrollmentCTA';

export default function AfterSchoolPage() {
  return (
    <>
      {/* Head component removed */}
      {/* Navbar removed */}
      <AfterSchoolHero /> {/* Use the new AfterSchoolHero */}
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
            <div className="space-y-12">
              <DescriptionSection />
              <CoverageSection />
              <ProgramsSection />
              <EnrollmentCTA />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Footer removed */}
    </>
  );
}

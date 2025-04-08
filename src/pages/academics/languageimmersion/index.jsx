// import Head from 'next/head'; // Removed Head import
import { motion } from 'framer-motion';
// import Navbar from "@/components/layout/Navbar"; // Removed Navbar import
// import Footer from "@/components/layout/Footer"; // Removed Footer import
// Import components with relative paths
import ImmersionHero from '../../../components/sections/academics/ImmersionHero'; // Import the new Hero
import { WhatIsLanguageImmersionSection } from '../../../components/sections/academics/WhatIsLanguageImmersionSection';
import { ImmersionBenefitsSection } from '../../../components/sections/academics/ImmersionBenefitsSection';
import { ImmersionMethodologySection } from '../../../components/sections/academics/ImmersionMethodologySection';
import { ImmersionCTA } from '../../../components/sections/academics/ImmersionCTA';

export default function LanguageImmersionPage() {
  return (
    <>
      {/* Head component removed */}
      {/* Navbar removed */}
      <ImmersionHero /> {/* Use the new ImmersionHero */}
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
              <WhatIsLanguageImmersionSection />
              <ImmersionBenefitsSection />
              <ImmersionMethodologySection />
            </div>
          </div>
        </motion.div>
        <ImmersionCTA />
      </div>
      {/* Footer removed */}
    </>
  );
}

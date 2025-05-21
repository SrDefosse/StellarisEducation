import { motion } from 'framer-motion';
import ImmersionHero from '../../../components/sections/academics/ImmersionHero';
import { WhatIsLanguageImmersionSection } from '../../../components/sections/academics/WhatIsLanguageImmersionSection';
import { ImmersionBenefitsSection } from '../../../components/sections/academics/ImmersionBenefitsSection';
import { ImmersionMethodologySection } from '../../../components/sections/academics/ImmersionMethodologySection';
import { ImmersionCTA } from '../../../components/sections/academics/ImmersionCTA';

export default function LanguageImmersionPage() {
  return (
    <>
      <ImmersionHero /> 
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          <div className="container mx-auto px-4"> 
            <div className="space-y-32">
              <WhatIsLanguageImmersionSection />
              <ImmersionBenefitsSection />
              <ImmersionMethodologySection />
            </div>
          </div>
        </motion.div>
        <ImmersionCTA />
      </div>
    </>
  );
}

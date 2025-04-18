import { motion } from 'framer-motion';
import TeachersHero from '../../../components/sections/academics/TeachersHero';
import { MulticulturalBenefitsSection } from '../../../components/sections/academics/MulticulturalBenefitsSection';
import { RecruitmentProcessSection } from '../../../components/sections/academics/RecruitmentProcessSection';

export default function InternationalTeachersPage() {
  return (
    <>
      <TeachersHero /> 
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              <MulticulturalBenefitsSection />
              <RecruitmentProcessSection />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

import { motion } from 'framer-motion';
import AfterSchoolHero from '../../components/sections/afterSchool/AfterSchoolHero';
import { DescriptionSection } from '../../components/sections/afterSchool/DescriptionSection';
import { CoverageSection } from '../../components/sections/afterSchool/CoverageSection';
import { ProgramsSection } from '../../components/sections/afterSchool/ProgramsSection';
import { EnrollmentCTA } from '../../components/sections/afterSchool/EnrollmentCTA';

export default function AfterSchoolPage() {
  return (
    <>
      <AfterSchoolHero /> 
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          <div className="container mx-auto px-4"> 
            <div className="space-y-12">
              <DescriptionSection />
              <CoverageSection />
              <ProgramsSection />
              <EnrollmentCTA />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

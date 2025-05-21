
import { PYPSection } from '../../../components/sections/academics/PYPSection';
import { InquiryBasedLearningSection } from '../../../components/sections/academics/InquiryBasedLearningSection';
import { LearnerProfileSection } from '../../../components/sections/academics/LearnerProfileSection';
import { motion } from 'framer-motion';
import IbHero from '../../../components/sections/academics/IbHero';

export default function IBPage() {
  return (
    <>
      <IbHero />

      <div className="bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >

          <div className="space-y-32 py-16"> 
            <PYPSection />
            <InquiryBasedLearningSection />
            <LearnerProfileSection />
          </div>
        </motion.div>
      </div>
    </>
  );
}

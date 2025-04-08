import { motion } from 'framer-motion';
import TeachersHero from '../../../components/sections/academics/TeachersHero'; // Import the new Hero
import { MulticulturalBenefitsSection } from '../../../components/sections/academics/MulticulturalBenefitsSection';
import { RecruitmentProcessSection } from '../../../components/sections/academics/RecruitmentProcessSection';
import { VideoSection } from '../../../components/sections/academics/VideoSection';

export default function InternationalTeachersPage() {
  return (
    <>
      {/* Head component removed */}
      {/* Navbar removed */}
      <TeachersHero /> {/* Use the new TeachersHero */}
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
              <MulticulturalBenefitsSection />
              <VideoSection />
              <RecruitmentProcessSection />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Footer removed */}
    </>
  );
}

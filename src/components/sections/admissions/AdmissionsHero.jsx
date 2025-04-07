import { motion } from 'framer-motion';
// import Image from 'next/image'; // Removed next/image import
import MaxWidthWrapper from '../../ui/MaxWidthWrapper'; // Updated import path
import { PrimaryButton } from '../../ui/Button'; // Updated import path

const AdmissionsHero = ({ scrollToContent }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img /* Use img tag */
        src="/admissions-hero-bg.jpg"
        alt="Stellaris Education"
        className="absolute inset-0 w-full h-full object-cover" /* Updated className */
        loading="lazy"
        // Removed priority prop
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#303444',
          opacity: '0.7',
        }}
      />
      <div className="relative h-full flex items-center justify-center">
        <MaxWidthWrapper>
          <motion.div 
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join the Stellaris Community</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">Begin your child's journey to becoming a global citizen with a lifelong love of learning.</p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <PrimaryButton 
                variant="amber" 
                onClick={scrollToContent}
              >
                Explore Admissions
              </PrimaryButton>
            </motion.div>
          </motion.div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default AdmissionsHero;

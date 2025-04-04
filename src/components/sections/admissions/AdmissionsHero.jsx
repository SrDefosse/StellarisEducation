import { motion } from 'framer-motion';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper';
import { PrimaryButton } from '@/components/ui/Button';

const AdmissionsHero = ({ scrollToContent }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image 
        src="/admissions-hero-bg.jpg" 
        alt="Stellaris Education" 
        fill 
        className="object-cover"
        priority
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

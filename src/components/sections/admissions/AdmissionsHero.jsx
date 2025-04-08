import { motion } from 'framer-motion';
// import Image from 'next/image'; // Removed next/image import
import MaxWidthWrapper from '../../ui/MaxWidthWrapper'; // Updated import path
import ProcessandFees from './ProcessandFees'; // Import the ProcessandFees component

const AdmissionsHero = () => { // Removed scrollToContent prop
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
          {/* Removed original hero text and button */}
          <ProcessandFees /> {/* Added the ProcessandFees component */}
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default AdmissionsHero;

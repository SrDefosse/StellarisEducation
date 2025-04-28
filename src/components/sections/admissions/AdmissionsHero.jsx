import { motion } from 'framer-motion';
// import Image from 'next/image'; // Removed next/image import
import MaxWidthWrapper from '../../ui/MaxWidthWrapper'; // Updated import path
import ProcessandFees from './ProcessandFees'; // Import the ProcessandFees component

const AdmissionsHero = () => { // Removed scrollToContent prop
  return (
    <div className="relative min-h-screen overflow-hidden grid place-items-center">
      <img /* Use img tag */
        src="https://cdn.stellariseducation.com/admissions-hero-bg.jpg"
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
      <div className="relative w-full">
        <MaxWidthWrapper>
          {/* Removed original hero text and button */}
          <ProcessandFees /> {/* Added the ProcessandFees component */}
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default AdmissionsHero;

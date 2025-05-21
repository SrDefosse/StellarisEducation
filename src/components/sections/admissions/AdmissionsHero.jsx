import { motion } from 'framer-motion';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';
import ProcessandFees from './ProcessandFees';

const AdmissionsHero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden grid place-items-center">
      <img
        src="https://cdn.stellariseducation.com/admissions-hero-bg.jpg"
        alt="Stellaris Education"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
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
          <ProcessandFees />
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default AdmissionsHero;

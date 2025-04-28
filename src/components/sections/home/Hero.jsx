import { PrimaryButton } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.stellariseducation.com/hero-bg.mp4" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#303444',
          opacity: '0.7',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Lighting the Path of Dreams</h1>
          <p className="text-xl md:text-2xl mb-10">Stellaris provides an exceptional bilingual International Baccalaureate Pre-K program for ages 3-5 that inspires students to become skilled, curious, and compassionate risk takers that act with purpose to create a better world.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <PrimaryButton variant="white" onClick={() => navigate('/admissions')}>Enroll Now</PrimaryButton>
            <PrimaryButton onClick={() => navigate('/academics/prek')}>Learn More</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
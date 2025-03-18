import Image from 'next/image';
import DotExpandButton from '@/components/ui/DotExpandButton';
import GlowExpandButton from '@/components/ui/GlowExpandButton';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/hero_Image.jpg"
        alt="Hero Image"
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Empowering Young Minds Through Global Education</h1>
          <p className="text-xl md:text-2xl mb-10">Stellaris provides Pre-K programs for ages 3-5 in a nurturing environment where children develop a global perspective through language immersion and the International Baccalaureate program.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <GlowExpandButton primary>Enroll Now</GlowExpandButton>
            <DotExpandButton className="bg-white/10 backdrop-blur-sm hover:bg-[#3967a9] hover:text-white">Learn More</DotExpandButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
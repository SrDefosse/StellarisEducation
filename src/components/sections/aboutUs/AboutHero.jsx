import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div 
        className="absolute inset-0 bg-[url('https://cdn.stellariseducation.com/about-hero-bg.jpg')] bg-cover bg-center"
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#303444',
          opacity: '0.7',
        }}
      />
      <div className="absolute inset-0 flex items-center">
        <div className="text-white max-w-3xl px-[5%]">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">About Stellaris</h1>
          <p className="text-xl md:text-2xl">
            Empowering minds through innovative education. We are committed to delivering excellence in learning and shaping the future of education through cutting-edge methodologies and personalized approaches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

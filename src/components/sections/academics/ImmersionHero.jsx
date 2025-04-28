import React from 'react';

const ImmersionHero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.stellariseducation.com/immersion_hero_bg.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#303444',
          opacity: '0.7',
        }}
      />
      <div className="absolute inset-0 flex items-center">
        <div className="text-white max-w-3xl px-[5%]">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Spanish Immersion</h1>
          <p className="text-xl md:text-2xl">
            Explore our innovative Spanish immersion program designed to develop bilingual children with
            global perspectives and cognitive advantages 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImmersionHero;

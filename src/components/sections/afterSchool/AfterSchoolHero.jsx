import React from 'react';

const AfterSchoolHero = () => {
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
          src="https://cdn.stellariseducation.com/after_school_enrichment_hero.mp4"
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6">After School Enrichment</h1>
          <p className="text-xl md:text-2xl">
            Extending the learning day with engaging activities that develop skills, inspire creativity, and foster friendships
          </p>
        </div>
      </div>
    </div>
  );
};

export default AfterSchoolHero;

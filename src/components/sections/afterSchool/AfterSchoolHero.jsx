import React from 'react';

const AfterSchoolHero = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-[url('/afterschool-hero-bg.jpg')] bg-cover bg-center" // Added temporary background image path
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6">After School Enrichment</h1> {/* Updated Title */} 
          <p className="text-xl md:text-2xl">
            Extending the learning day with engaging activities that develop skills, inspire creativity, and foster friendships {/* Updated Description */} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AfterSchoolHero;

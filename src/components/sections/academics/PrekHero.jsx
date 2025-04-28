import React from 'react';

const PrekHero = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div 
        className="absolute inset-0 bg-[url('https://cdn.stellariseducation.com/prek-hero-bg.jpg')] bg-cover bg-center"
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Pre-K Program</h1>
          <p className="text-xl md:text-2xl">
            Where young minds begin their educational journey. Our Pre-K program provides a nurturing environment that encourages curiosity, creativity, and early learning through play-based activities and structured development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrekHero;
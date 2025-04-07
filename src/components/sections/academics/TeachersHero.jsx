import React from 'react';

const TeachersHero = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-[url('/teachers-hero-bg.jpg')] bg-cover bg-center" // Added temporary background image path
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6">International Teachers</h1> {/* Updated Title */} 
          <p className="text-xl md:text-2xl">
            Our diverse team of international educators create a multicultural learning environment
            that broadens perspectives and enhances language acquisition {/* Updated Description */} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeachersHero;

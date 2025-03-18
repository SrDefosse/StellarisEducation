'use client';
import Image from 'next/image';
import { PrimaryButton, SecondaryButton } from '../ui/Button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AcademicProgram = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 1,
      title: "PreK Offering",
      description: "Our PreK program for ages 3-5 provides a nurturing environment where children develop foundational skills through play-based learning and exploration.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/PreK_Offering.jpg"
    },
    {
      id: 2,
      title: "IB Program",
      description: "Our curriculum follows the inquiry-based IB framework, encouraging students to take ownership of their learning through exploration and discovery.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/IB_Program.jpg"
    },
    {
      id: 3,
      title: "Spanish Immersion",
      description: "Students are immersed in Spanish language environment, developing fluency naturally while learning academic content in both languages.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/Spanish_Immersion.jpg"
    },
    {
      id: 4,
      title: "International Teachers",
      description: "Our diverse faculty brings authentic cultural experiences and global perspectives to the classroom, enriching the educational journey.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/International_Teacher.jpg"
    }
  ];

  return (
    <div className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Academic Program</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Discover the pillars of our curriculum designed to nurture global citizens with a love for learning.</p>
        </div>
        
        {/* Vertical Accordion Slider */}
        <div className="max-w-4xl mx-auto mb-16 flex flex-col gap-3">
          {programs.map((program, index) => (
            <motion.div 
              key={program.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md cursor-pointer
                ${activeProgram === index ? 'border-l-4 border-amber-400' : 'border-l-4 border-transparent'}`}
              initial={{ borderColor: 'transparent' }}
              animate={{ 
                borderColor: activeProgram === index ? '#f59e0b' : 'transparent',
                boxShadow: activeProgram === index ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveProgram(index)}
            >
              {/* Title Bar - Always Visible */}
              <div className="flex items-center justify-between p-5">
                <h3 className={`font-semibold text-xl ${activeProgram === index ? 'text-amber-500' : 'text-indigo-900'}`}>
                  {program.title}
                </h3>
                <motion.div
                  animate={{ rotate: activeProgram === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${activeProgram === index ? 'text-amber-500' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {activeProgram === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row p-4">
                      {/* Image - More square and rounded */}
                      <div className="relative aspect-square w-full md:w-2/5 rounded-xl overflow-hidden mx-auto md:mx-0">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Description */}
                      <div className="p-6 w-full md:w-3/5 flex flex-col justify-between">
                        <p className="text-gray-700 mb-6">{program.description}</p>
                        <SecondaryButton>Learn More</SecondaryButton>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Call-to-action */}
        <div className="text-center">
          <PrimaryButton>
            <span>Explore Our Full Curriculum</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </PrimaryButton>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -z-10 top-1/2 -left-8 w-24 h-24 md:w-32 md:h-32 opacity-10">
        <motion.div 
          className="w-full h-full bg-amber-400 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
    </div>
  );
};

export default AcademicProgram; 
// 'use client'; // Remove use client directive if not needed
// import Image from 'next/image'; // Removed next/image import
import { PrimaryButton, SecondaryButton } from '../../ui/Button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { useRouter } from 'next/router'; // Removed next/router import
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

const AcademicProgram = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  // const router = useRouter(); // Removed useRouter
  const navigate = useNavigate(); // Use useNavigate

  const programs = [
    {
      id: 1,
      title: "Pre-K",
      description: "Our Pre-K program for ages 3-5 provides a nurturing and loving environment where children develop the foundations that allow them to become skilled, curious, and compassionate risk takers that act with purpose to create a better world",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/prek_offering.jpg",
      path: "/academics/prek"
    },
    {
      id: 2,
      title: "IB Program",
      description: <>Our curriculum follows the inquiry-based framework of the International Baccalaureate Primary Years Programme, encouraging students to take ownership of their learning through exploration and discovery. <br/><br/>It is a student-centered approach to education that reflects the best of educational research and has evolved to become a world leader in future-focused education</>,
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/IB_Program.jpg",
      path: "/academics/ib"
    },
    {
      id: 3,
      title: "Spanish Immersion",
      description: "Students are immersed in a Spanish language environment, developing fluency naturally while learning academic content in Spanish and English.  The foundations of a bilingual education, a norm in most of the world, allows children to develop cognitive flexibility, mental agility, cultural awareness, and empathy towards others",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/Spanish_Immersion.jpg",
      path: "/academics/languageimmersion"
    },
    {
      id: 4,
      title: "International Teachers",
      description: "An educational program is only as good as its teachers and we hire the best from around the world.  This diverse faculty brings authentic cultural experiences and global perspectives to the classroom, enriching the educational journey",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/international_teachers.jpg",
      path: "/academics/internationalteachers"
    }
  ];

  return (
    <div className="py-16 md:py-24 relative">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4081DE] mb-4">Our Academic Program</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Discover the pillars of our bilingual International Baccalaureate program designed to nurture students to develop a love of learning and set them on a path that will allow them to pursue their dreams while creating a better world.</p>
        </div>
        
        {/* Vertical Accordion Slider */}
        <div className="mx-auto mb-16 flex flex-col gap-3">
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
                    <div className="flex flex-col md:flex-row p-4 md:p-6">
                      {/* Image - More square and rounded */}
                      <div className="relative w-full md:w-2/5 h-[300px] md:h-[400px] rounded-xl overflow-hidden mx-auto md:mx-0">
                        <img /* Use img tag */
                          src={program.image}
                          alt={program.title}
                          className="absolute inset-0 w-full h-full object-cover" /* Updated className */
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Description */}
                      <div className="p-6 md:p-8 w-full md:w-3/5 flex flex-col justify-between">
                        <p className="text-gray-700 mb-6 text-lg">{program.description}</p>
                        <SecondaryButton onClick={() => navigate(program.path)}>Learn More</SecondaryButton> {/* Use navigate */}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>

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
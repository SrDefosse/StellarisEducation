import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
// import Image from 'next/image'; // Removed next/image import
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export const ProgramsSection = () => {
  // State to track if screen width is less than 768px (md breakpoint)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Effect to detect screen size on client-side
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 768);
    };
    
    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup
  }, []);
  
  const programs = {
    arts: {
      title: "Arts & Creativity",
      image: "https://cdn.stellariseducation.com/after_school_art_and_creativity.jpg",
      // span removed here, will be applied conditionally below
      aspect: {
        mobile: '3 / 2', // Aspect ratio for screens < 768px
        desktop: '2 / 1'  // Aspect ratio for screens >= 768px
      }
    },
    stem: {
      title: "STEM Discovery",
      image: "https://cdn.stellariseducation.com/after_school_stem.jpg",
      aspect: {
        mobile: '3 / 2',
        desktop: '1 / 1'
      }
    },
    languages: {
      title: "Language & Culture",
      image: "https://cdn.stellariseducation.com/after_school_language_and_culture.jpg",
      aspect: {
        mobile: '3 / 2',
        desktop: '1 / 1'
      }
    },
    physical: {
      title: "Physical Activity",
      image: "https://cdn.stellariseducation.com/after_school_physical_activity.jpg",
      aspect: {
        mobile: '3 / 2',
        desktop: '1 / 1'
      }
    },
    cooking: {
      title: "Cooking",
      image: "https://cdn.stellariseducation.com/after_school_cooking.jpg",
      aspect: {
        mobile: '3 / 2',
        desktop: '1 / 1'
      }
    }
  };

  const gridOrder = ['arts', 'stem', 'languages', 'physical', 'cooking'];

  // Determine the correct aspect ratio based on screen size
  const getAspectRatio = (program) => {
    return isMobileOrTablet ? program.aspect.mobile : program.aspect.desktop;
  };

  return (
    <section className="py-12 md:py-16">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3967a9]">
            Enrichment Programs
          </h2>
        </motion.div>

        <motion.div 
          // Grid: 1 column below md (768px), 3 columns at md and above
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {gridOrder.map((key) => {
            const program = programs[key];
            // Determine column span: arts spans 2 cols on desktop, 1 otherwise. Others always span 1.
            const colSpanClass = key === 'arts' && !isMobileOrTablet ? 'md:col-span-2' : 'col-span-1';
            
            return (
              <motion.div
                key={key}
                className={`relative rounded-xl overflow-hidden shadow-lg group cursor-pointer ${colSpanClass}`}
                style={{ aspectRatio: getAspectRatio(program) }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}; 
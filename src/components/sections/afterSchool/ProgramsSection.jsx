import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export const ProgramsSection = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const programs = {
    arts: {
      title: "Arts & Creativity",
      image: "https://cdn.stellariseducation.com/after_school_art_and_creativity.jpg",
      aspect: {
        mobile: '3 / 2',
        desktop: '2 / 1'
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
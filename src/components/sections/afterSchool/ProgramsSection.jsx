import { motion } from 'framer-motion';
// import Image from 'next/image'; // Removed next/image import
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export const ProgramsSection = () => {
  // const [activeTab, setActiveTab] = useState('arts'); // Removed state
  
  const programs = {
    arts: {
      title: "Arts & Creativity",
      image: "/after_school_art_and_creativity.jpg",
      span: "col-span-2", // Simplified span
      aspect: '2 / 1' // Aspect ratio for this item
    },
    stem: {
      title: "STEM Discovery",
      image: "/after_school_stem.jpg",
      span: "col-span-1",
      aspect: '1 / 1'
    },
    languages: {
      title: "Language & Culture",
      image: "/after_school_language_and_culture.jpg",
      span: "col-span-1",
      aspect: '1 / 1'
    },
    physical: {
      title: "Physical Activity",
      image: "/after_school_physical_activity.jpg",
      span: "col-span-1",
      aspect: '1 / 1'
    },
    cooking: {
      title: "Cooking",
      image: "/after_school_cooking.jpg",
      span: "col-span-1",
      aspect: '1 / 1'
    }
  };

  // Define the order for the grid layout (fits 3x2)
  const gridOrder = ['arts', 'stem', 'languages', 'physical', 'cooking'];

  return (
    <section className="py-16"> {/* Increased padding for visual balance */}
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12" // Increased margin bottom
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3967a9]">
            Enrichment Programs
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-3 grid-rows-2 gap-4" // Removed fixed height
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
            return (
              <motion.div
                key={key}
                className={`relative rounded-xl overflow-hidden shadow-lg group cursor-pointer ${program.span}`}
                style={{ aspectRatio: program.aspect }} // Apply dynamic aspect ratio
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Zoom effect
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
import { useRef } from "react";
import { motion } from "framer-motion";
// import Image from "next/image"; // Removed next/image import
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

// Faculty data
const facultyImages = [
  { id: 1, src: "https://cdn.stellariseducation.com/collage_1.jpg", alt: "Spanish language instructor" },
  { id: 2, src: "https://cdn.stellariseducation.com/collage_2.jpg", alt: "Science faculty member" },
  { id: 3, src: "https://cdn.stellariseducation.com/collage_3.jpg", alt: "Arts and music teacher" },
  { id: 4, src: "https://cdn.stellariseducation.com/collage_4.jpg", alt: "Mathematics instructor" },
  { id: 5, src: "https://cdn.stellariseducation.com/collage_5.jpg", alt: "Early childhood education specialist" },
  { id: 6, src: "https://cdn.stellariseducation.com/collage_6.jpg", alt: "Physical education teacher" },
];

// Faculty image component with hover effect
const FacultyImage = ({ image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg relative"
      style={{ height: '350px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
      <div className="relative w-full h-full">
        <img /* Use img tag */
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:scale-105" /* Updated className for img */
        />
      </div>
    </motion.div>
  );
};

export default function Faculty() {
  const sectionRef = useRef(null);
  
  return (
    <section ref={sectionRef} className="py-20 overflow-hidden relative">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Our Diverse Faculty</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Great loving mentors that bring an inspirational perspective into the classroom
          </p>
        </motion.div>
        
        {/* Faculty image collage */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[2100px] mx-auto">
            {facultyImages.map((image, index) => (
              <FacultyImage key={image.id} image={image} index={index} />
            ))}
          </div>
        </motion.div>
      </MaxWidthWrapper>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 top-20 -right-20 w-60 h-60 bg-blue-50 rounded-full opacity-60"></div>
    </section>
  );
}

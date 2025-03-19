import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaGlobe, FaAward, FaHeart } from "react-icons/fa";

// Faculty benefits data
const benefits = [
  {
    id: 1,
    title: "World-Class Educators",
    description: "Our faculty includes renowned educators with decades of experience and innovative teaching methods.",
    icon: <FaGraduationCap className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Continuous Development",
    description: "Regular professional development ensures our teachers stay at the forefront of educational practices.",
    icon: <FaChalkboardTeacher className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Diverse Perspectives",
    description: "Our global faculty brings diverse viewpoints and cultural insights to enrich the learning experience.",
    icon: <FaGlobe className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Low Student-Teacher Ratio",
    description: "Small class sizes ensure personalized attention and tailored guidance for each student.",
    icon: <FaUsers className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Award-Winning Expertise",
    description: "Our faculty includes award-winning educators recognized for excellence in their fields.",
    icon: <FaAward className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Passionate Mentors",
    description: "Beyond teaching subjects, our faculty serves as mentors dedicated to student success.",
    icon: <FaHeart className="w-6 h-6" />,
  }
];

// Sample faculty images (replace with actual images)
const facultyImages = [
  { id: 1, src: "/teacher1.jpg", alt: "Faculty member teaching" },
  { id: 2, src: "/teacher2.jpg", alt: "Professor in discussion with students" },
  { id: 3, src: "/students4.jpg", alt: "Science teacher in laboratory" },
  { id: 4, src: "/students1.jpg", alt: "Students drawing a plan" },
  { id: 5, src: "/students2.jpg", alt: "Students in a classroom" },
  { id: 6, src: "/students3.jpg", alt: "Pre K students" },
];

// Benefit card component
const BenefitCard = ({ benefit, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#3967a9]">
        {benefit.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
      <p className="text-gray-600 flex-grow">{benefit.description}</p>
    </motion.div>
  );
};

// Faculty image component with hover effect
const FacultyImage = ({ image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg relative"
      style={{ height: '250px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
      <div className="relative w-full h-full">
        <Image 
          src={image.src} 
          alt={image.alt} 
          fill 
          className="object-cover transition-all duration-500 hover:scale-105" 
        />
      </div>
    </motion.div>
  );
};

export default function Faculty() {
  const sectionRef = useRef(null);
  
  return (
    <section ref={sectionRef} className="py-20 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Benefits</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Our exceptional faculty is the cornerstone of the Stellaris education experience
          </p>
        </motion.div>
        
        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>
        
        {/* Faculty image collage */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold text-[#4081DE] mb-6 text-center">Our Diverse Faculty</h3>
          <motion.div 
            className="h-1 w-16 bg-amber-400 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facultyImages.map((image, index) => (
              <FacultyImage key={image.id} image={image} index={index} />
            ))}
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="#contact" 
            className="inline-block bg-[#3967a9] hover:bg-[#2d5285] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Meet Our Faculty
          </a>
        </motion.div>
      </div>
    </section>
  );
}

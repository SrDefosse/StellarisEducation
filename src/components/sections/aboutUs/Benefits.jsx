import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaGlobe, FaAward, FaHeart } from "react-icons/fa";

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

export default function Benefits() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Faculty Benefits</h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-50"></div>
      <div className="absolute -z-10 top-20 -left-20 w-64 h-64 bg-amber-50 rounded-full opacity-50"></div>
    </section>
  );
}

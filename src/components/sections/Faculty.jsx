import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaGlobeAmericas, FaGraduationCap, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

// Faculty values data
const facultyValues = [
  {
    id: 1,
    title: "Global Perspective",
    description: "Our faculty brings diverse international experience to create a truly global learning environment.",
    icon: <FaGlobeAmericas className="w-6 h-6" />,
    details: "With educators from over 25 countries, we integrate diverse teaching methodologies and cultural insights into our curriculum. This global perspective helps students develop a broad understanding of the world and prepares them for international opportunities."
  },
  {
    id: 2,
    title: "Academic Excellence",
    description: "World-class educators with proven track records in their specialized fields.",
    icon: <FaGraduationCap className="w-6 h-6" />,
    details: "Our faculty includes PhDs, award-winning researchers, and industry experts who bring cutting-edge knowledge to the classroom. We maintain rigorous academic standards while using innovative teaching methods to engage students fully."
  },
  {
    id: 3,
    title: "Innovative Teaching",
    description: "Pioneering new methods that combine traditional wisdom with technological advancement.",
    icon: <FaChalkboardTeacher className="w-6 h-6" />,
    details: "Our educators are trained in the latest teaching methodologies, from project-based learning to adaptive technology integration. We encourage creative approaches that cater to different learning styles and maximize student engagement."
  },
  {
    id: 4,
    title: "Mentorship Focus",
    description: "Faculty who go beyond teaching to become true mentors for students' lifelong journeys.",
    icon: <FaUsers className="w-6 h-6" />,
    details: "We believe in the power of mentorship. Our educators build meaningful relationships with students, providing guidance, encouragement, and personalized support to help each student discover and develop their unique talents and interests."
  },
];

// Faculty members data
const facultyMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Science Department",
    expertise: "Molecular Biology",
    background: "PhD from MIT, 12 years teaching experience",
    quote: "Science education should inspire wonder and critical thinking.",
    image: "/images/faculty/sarah-chen.jpg"
  },
  {
    id: 2,
    name: "Prof. Miguel Hernandez",
    role: "Arts Department",
    expertise: "Visual Arts & Design",
    background: "MFA from Royal College of Art, former museum curator",
    quote: "Art allows us to see the world through multiple perspectives.",
    image: "/images/faculty/miguel-hernandez.jpg"
  },
  {
    id: 3,
    name: "Dr. Amara Okafor",
    role: "Mathematics Department",
    expertise: "Applied Mathematics",
    background: "PhD from Oxford, researcher in mathematical education",
    quote: "Mathematics is not about numbers, but about patterns and relationships.",
    image: "/images/faculty/amara-okafor.jpg"
  },
  {
    id: 4,
    name: "Prof. James Park",
    role: "Humanities Department",
    expertise: "World History",
    background: "PhD from Harvard, published author",
    quote: "History teaches us not just what happened, but how to think critically about our world.",
    image: "/images/faculty/james-park.jpg"
  },
  {
    id: 5,
    name: "Dr. Sophia Gonzalez",
    role: "Technology Department",
    expertise: "Computer Science",
    background: "Former Silicon Valley engineer, PhD from Stanford",
    quote: "Technology should empower students to become creators, not just consumers.",
    image: "/images/faculty/sophia-gonzalez.jpg"
  },
  {
    id: 6,
    name: "Prof. Akira Tanaka",
    role: "Language Department",
    expertise: "Linguistics",
    background: "Polyglot, PhD in Applied Linguistics",
    quote: "Learning a new language opens doors to new ways of thinking.",
    image: "/images/faculty/akira-tanaka.jpg"
  }
];

// Value Card component
const ValueCard = ({ value, isActive, onClick }) => {
  return (
    <motion.div 
      className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
        isActive ? "bg-[#3967a9] text-white shadow-lg" : "bg-white hover:bg-blue-50"
      }`}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className={`mt-1 ${isActive ? "text-white" : "text-[#3967a9]"}`}>
          {value.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">{value.title}</h3>
          <p className={`text-sm ${isActive ? "text-blue-100" : "text-gray-600"}`}>
            {value.description}
          </p>
          
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-[#6288c0]"
            >
              <p className="text-sm text-blue-100">{value.details}</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Faculty Card component
const FacultyCard = ({ member, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-xl overflow-hidden max-w-md w-full shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 w-full">
          <div className="absolute inset-0 bg-blue-100 animate-pulse"></div>
          {/* <Image src={member.image} alt={member.name} fill className="object-cover" /> */}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-[#3967a9] font-medium">{member.role}</p>
          
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-gray-700">Expertise</h4>
              <p className="text-gray-600">{member.expertise}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700">Background</h4>
              <p className="text-gray-600">{member.background}</p>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <blockquote className="italic text-gray-700">"{member.quote}"</blockquote>
            </div>
          </div>
          
          <button 
            className="mt-6 px-4 py-2 bg-[#3967a9] text-white rounded-lg w-full hover:bg-[#2d5285] transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Faculty() {
  const [activeValue, setActiveValue] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  
  const titleRef = useRef(null);
  const valuesRef = useRef(null);
  const collageRef = useRef(null);
  
  const isInView = useInView(titleRef, { once: false, amount: 0.3 });
  const areValuesInView = useInView(valuesRef, { once: false, amount: 0.3 });
  const isCollageInView = useInView(collageRef, { once: false, amount: 0.2 });
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">International Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting the World Through Education
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Text - Benefits */}
          <motion.div 
            ref={valuesRef}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Benefits</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {facultyValues.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={areValuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ValueCard 
                    value={value} 
                    isActive={activeValue === value.id}
                    onClick={() => setActiveValue(value.id)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Images - Interactive Collage */}
          <motion.div 
            ref={collageRef}
            className="relative"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Interactive Collage</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {facultyMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isCollageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  onClick={() => setSelectedFaculty(member)}
                >
                  <div className="absolute inset-0 bg-blue-100 animate-pulse"></div>
                  {/* <Image src={member.image} alt={member.name} fill className="object-cover" /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                    <h4 className="text-white font-medium text-sm">{member.name}</h4>
                    <p className="text-blue-200 text-xs">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Faculty detail modal */}
        {selectedFaculty && (
          <FacultyCard 
            member={selectedFaculty} 
            onClose={() => setSelectedFaculty(null)} 
          />
        )}
      </div>
    </section>
  );
} 
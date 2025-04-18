import { useState, useRef } from "react";
import { motion } from "framer-motion";
// import Image from "next/image"; // Removed next/image import
import { FaArrowRight } from "react-icons/fa";
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Erin Defosse",
    role: "CEO",
    shortBio: "Visionary leader with 20+ years in educational innovation.",
    longBio: "Erin Defosse is the visionary leader behind Stellaris Education, bringing over two decades of experience in educational innovation. With a background in both technology and pedagogy, Erin is dedicated to reimagining how we prepare students for the rapidly changing world. Before founding Stellaris, Erin led transformative initiatives at leading educational institutions and tech companies, always with a focus on student-centered learning approaches. Her philosophy combines traditional educational wisdom with cutting-edge technological insights to create truly transformative learning experiences.",
    image: "/ErinDefosse.jpg",
  },
  {
    id: 2,
    name: "Alexandra Castro",
    role: "Head of PreK",
    shortBio: "Early childhood education specialist with innovative teaching methods.",
    longBio: "Alexandra Castro leads our PreK program with passion and expertise, bringing innovative approaches to early childhood education. With specialized training in developmental psychology and over 15 years of classroom experience, Alexandra has pioneered methods that make learning both fun and effective for our youngest students. Her curriculum design emphasizes play-based learning while building crucial foundational skills. Alexandra regularly presents her research at educational conferences and has published numerous articles on early childhood development strategies.",
    image: "/AlexandraCastro.jpg",
  },
  {
    id: 3,
    name: "Matt Ford",
    role: "CFO",
    shortBio: "Managerial Finance Consultant, Former Treasurer at the Magellan International School, Senior finance executive at Dell",
    longBio: "Matt Ford brings over 15 years of financial leadership experience to Stellaris Education, with specialized knowledge in sustainable funding models for educational institutions. His strategic vision ensures that Stellaris can deliver exceptional educational experiences while maintaining financial sustainability. Prior to joining Stellaris, Matt managed financial operations for several innovative educational organizations, implementing budget frameworks that maximized resources allocated to student learning. His background in both finance and education gives him a unique perspective on balancing educational excellence with fiscal responsibility.",
    image: "/MattFord.jpg",
  }
];

// Improved Card component with hover effects and smoother animations
const ProfileCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image section with gradient overlay on hover */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img /* Use img tag */
          src={member.image} 
          alt={member.name} 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105" /* Updated className for img */
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content section with improved styling */}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-blue-50/30 min-h-[300px]">
        <h3 className="text-2xl font-bold text-indigo-900 mb-1">{member.name}</h3>
        <p className="text-[#3967a9] font-medium mb-3">{member.role}</p>
        
        <div className="h-px w-16 bg-amber-400 mb-4"></div>
        
        <p className="text-gray-600 mb-4">{member.shortBio}</p>
        
        <div className="flex-grow">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-3 pt-3 border-t border-gray-100"
            >
              <p className="text-gray-700">{member.longBio}</p>
            </motion.div>
          )}
        </div>
        
        <button 
          className="mt-4 text-[#3967a9] hover:text-[#2d5285] font-medium flex items-center gap-2 self-start group/btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0, x: isExpanded ? 0 : 0 }}
            whileHover={{ x: isExpanded ? -3 : 3 }}
            transition={{ duration: 0.3 }}
            className="group-hover/btn:text-amber-500"
          >
            <FaArrowRight className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
};

export default function Team() {
  const titleRef = useRef(null);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <MaxWidthWrapper>
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Our Team</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Meet the passionate leaders behind Stellaris Education
          </p>
        </div>
        
        {/* Improved grid with responsive layout and animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProfileCard member={member} />
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 top-1/4 -right-16 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute -z-10 bottom-1/4 -left-16 w-40 h-40 bg-amber-100 rounded-full opacity-40"></div>
    </section>
  );
} 
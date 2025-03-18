import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

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
  }
];

// Card component - simplified with fixed height
const ProfileCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
      {/* Image section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover transition-all duration-500 hover:scale-105" 
        />
      </div>
      
      {/* Content section - with flex-grow to fill available space */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-[#3967a9] font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm mb-4">{member.shortBio}</p>
        
        <div className="flex-grow">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-3 pt-3 border-t border-gray-100"
            >
              <p className="text-gray-700 text-sm">{member.longBio}</p>
            </motion.div>
          )}
        </div>
        
        <button 
          className="mt-4 text-[#3967a9] hover:text-[#2d5285] text-sm font-medium flex items-center gap-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowRight className="w-3 h-3" />
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default function Team() {
  const titleRef = useRef(null);
  
  return (
    <section className="py-20 mt-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Team</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            The Minds Behind Stellaris Education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="h-full">
              <ProfileCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
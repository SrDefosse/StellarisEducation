import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Erin Defosse",
    role: "CEO",
    shortBio: "Visionary leader with 20+ years in educational innovation.",
    longBio: "Erin Defosse is the visionary leader behind Stellaris Education, bringing over two decades of experience in educational innovation. With a background in both technology and pedagogy, Erin is dedicated to reimagining how we prepare students for the rapidly changing world. Before founding Stellaris, Erin led transformative initiatives at leading educational institutions and tech companies, always with a focus on student-centered learning approaches. Her philosophy combines traditional educational wisdom with cutting-edge technological insights to create truly transformative learning experiences.",
    image: "/images/team/erin-defosse.jpg",
  },
  {
    id: 2,
    name: "Alexandra Castro",
    role: "Head of PreK",
    shortBio: "Early childhood education specialist with innovative teaching methods.",
    longBio: "Alexandra Castro leads our PreK program with passion and expertise, bringing innovative approaches to early childhood education. With specialized training in developmental psychology and over 15 years of classroom experience, Alexandra has pioneered methods that make learning both fun and effective for our youngest students. Her curriculum design emphasizes play-based learning while building crucial foundational skills. Alexandra regularly presents her research at educational conferences and has published numerous articles on early childhood development strategies.",
    image: "/images/team/alexandra-castro.jpg",
  }
];

// Card flip component
const ProfileCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="relative w-full h-[400px] md:h-[450px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => {setIsFlipped(false); setIsExpanded(false);}}
    >
      <motion.div 
        className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg"
        animate={{ rotateY: isFlipped ? 180 : 0, opacity: isFlipped ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        style={{ zIndex: isFlipped ? 0 : 1 }}
      >
        {/* Front of Card */}
        <div className="relative w-full h-full bg-white p-6 flex flex-col">
          <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[#e0e8f5] animate-pulse"></div>
            {/* Replace with actual image */}
            {/* <Image 
              src={member.image} 
              alt={member.name} 
              fill 
              className="object-cover transition-all duration-500 filter hover:grayscale" 
            /> */}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-[#3967a9] font-medium">{member.role}</p>
          <p className="text-gray-600 mt-2 text-sm">{member.shortBio}</p>
        </div>
      </motion.div>

      <motion.div 
        className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl"
        animate={{ 
          rotateY: isFlipped ? 0 : -180, 
          opacity: isFlipped ? 1 : 0,
          height: isExpanded ? "auto" : "100%" 
        }}
        transition={{ duration: 0.6 }}
        style={{ zIndex: isFlipped ? 1 : 0 }}
      >
        {/* Back of Card */}
        <div className="relative w-full h-full bg-gradient-to-br from-[#e0e8f5] to-white p-6 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
          <p className="text-[#3967a9] font-medium mb-4">{member.role}</p>
          
          <div className="flex-1 overflow-hidden">
            <p className="text-gray-700">
              {isExpanded ? member.longBio : `${member.longBio.substring(0, 180)}...`}
            </p>
          </div>
          
          <button 
            className="mt-4 text-[#3967a9] hover:text-[#2d5285] text-sm font-medium"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function Team() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, amount: 0.3 });
  
  return (
    <section className="py-20 mt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Minds Behind Stellaris Education
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProfileCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
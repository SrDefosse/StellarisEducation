import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image"; // Removed next/image import
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

// Faculty data
const facultyImages = [
  { id: 1, src: "/teacher1.jpg", alt: "Spanish language instructor" },
  { id: 2, src: "/teacher2.jpg", alt: "Science faculty member" },
  { id: 3, src: "/students1.jpg", alt: "Arts and music teacher" },
  { id: 4, src: "/students2.jpg", alt: "Mathematics instructor" },
  { id: 5, src: "/students3.jpg", alt: "Early childhood education specialist" },
  { id: 6, src: "/students4.jpg", alt: "Physical education teacher" },
];

// Case studies for featured teachers
const featuredTeachers = [
  {
    id: 1,
    name: "Mara Rodríguez",
    position: "Spanish Immersion Lead",
    origin: "Madrid, Spain",
    experience: "12 years",
    specialization: "Early Childhood Bilingual Education",
    quote: "Watching children naturally absorb a second language while exploring their world is the most rewarding experience. At Stellaris, we don't just teach Spanish – we create authentic cultural experiences.",
    impact: "Mara has developed our innovative Spanish immersion curriculum that integrates language learning with cultural exploration. Her students consistently achieve bilingual proficiency well beyond grade-level expectations.",
    image: "/mara-rodriguez.jpg",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    position: "IB Program Coordinator",
    origin: "Bogotá, Colombia",
    experience: "10 years",
    specialization: "International Baccalaureate",
    quote: "Teaching children to be inquisitive is the foundation of lifelong learning. Our IB approach encourages children to ask questions and seek answers through discovery and exploration.",
    impact: "Carlos has transformed our curriculum with inquiry-based projects that engage students' natural curiosity. His methods have been recognized by the IB organization as exemplary practice for early years education.",
    image: "/carlos-mendoza.jpg",
  },
  {
    id: 3,
    name: "Sofia Patel",
    position: "Arts Integration Specialist",
    origin: "Barcelona, Spain",
    experience: "8 years",
    specialization: "Creative Arts & Language Development",
    quote: "Art is a universal language that breaks barriers and allows children to express themselves in ways words sometimes can't. Our creative approach bridges cultures and enhances language acquisition.",
    impact: "Sofia has pioneered art-based language acquisition techniques that have significantly improved student engagement and retention. Her methodology has been featured in multiple educational journals.",
    image: "/sofia-patel.jpg",
  }
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
  const [showMore, setShowMore] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(0);
  
  const nextTeacher = () => {
    setCurrentTeacher((prev) => (prev + 1) % featuredTeachers.length);
    setShowMore(false);
  };
  
  const prevTeacher = () => {
    setCurrentTeacher((prev) => 
      prev === 0 ? featuredTeachers.length - 1 : prev - 1
    );
    setShowMore(false);
  };
  
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
        
        {/* Featured Teacher Case Study Slider */}
        <div className="max-w-[2100px] mx-auto mb-16">
          <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Meet Our Faculty</h3>
          <motion.div 
            className="h-1 w-16 bg-amber-400 mx-auto rounded-full mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          <div className="relative">
            {/* Navigation arrows */}
            <div className="absolute top-1/2 -left-5 md:-left-10 z-10 transform -translate-y-1/2">
              <button 
                onClick={prevTeacher}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous teacher"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-5 md:-right-10 z-10 transform -translate-y-1/2">
              <button 
                onClick={nextTeacher}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next teacher"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Slider dots */}
            <div className="flex justify-center gap-2 absolute -bottom-10 left-0 right-0">
              {featuredTeachers.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => {
                    setCurrentTeacher(index);
                    setShowMore(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTeacher === index ? 'bg-amber-500 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`View teacher ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Teacher cards */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTeacher}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="md:flex">
                    {/* Teacher Image */}
                    <div className="md:w-1/3 relative">
                      <div className="relative h-80 md:h-full min-h-[400px]">
                        <img /* Use img tag */
                          src={featuredTeachers[currentTeacher].image}
                          alt={featuredTeachers[currentTeacher].name}
                          className="absolute inset-0 w-full h-full object-cover" /* Updated className for img */
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent md:hidden"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:hidden">
                        <h4 className="text-2xl font-bold">{featuredTeachers[currentTeacher].name}</h4>
                        <p className="text-amber-300">{featuredTeachers[currentTeacher].position}</p>
                      </div>
                    </div>
                    
                    {/* Teacher Info */}
                    <div className="p-6 md:p-8 md:w-2/3">
                      <div className="hidden md:block">
                        <h4 className="text-2xl font-bold text-indigo-900">{featuredTeachers[currentTeacher].name}</h4>
                        <p className="text-[#3967a9] font-medium mb-4">{featuredTeachers[currentTeacher].position}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6 mt-4 md:mt-0">
                        <div>
                          <p className="text-sm text-gray-500">Origin</p>
                          <p className="font-medium">{featuredTeachers[currentTeacher].origin}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Experience</p>
                          <p className="font-medium">{featuredTeachers[currentTeacher].experience}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-500">Specialization</p>
                          <p className="font-medium">{featuredTeachers[currentTeacher].specialization}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-start mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                          <p className="italic text-gray-600">{featuredTeachers[currentTeacher].quote}</p>
                        </div>
                        
                        {showMore && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.4 }}
                          >
                            <p className="text-gray-700">{featuredTeachers[currentTeacher].impact}</p>
                          </motion.div>
                        )}
                        
                        <button 
                          className="text-[#3967a9] font-medium mt-2 flex items-center gap-1"
                          onClick={() => setShowMore(!showMore)}
                        >
                          {showMore ? "Show Less" : "Read More"}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 top-20 -right-20 w-60 h-60 bg-blue-50 rounded-full opacity-60"></div>
    </section>
  );
}

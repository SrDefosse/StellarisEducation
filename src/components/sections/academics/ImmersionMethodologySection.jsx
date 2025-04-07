import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaWater, FaPuzzlePiece, FaMusic, FaTheaterMasks, FaChalkboardTeacher, FaCheck } from 'react-icons/fa';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export function ImmersionMethodologySection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true, amount: 0.3 });
  
  const methodologies = [
    {
      title: "Total Immersion Approach",
      description: "Our teachers conduct 90% of daily instruction and interaction in Spanish, creating a natural language environment where children are constantly exposed to Spanish in meaningful contexts.",
      icon: <FaWater />
    },
    {
      title: "Thematic Learning Units",
      description: "We organize our curriculum around engaging thematic units that integrate language with content learning, allowing children to develop vocabulary and language structures in context.",
      icon: <FaPuzzlePiece />
    },
    {
      title: "Multi-Sensory Activities",
      description: "Our classrooms incorporate songs, movement, art, and hands-on activities that engage multiple senses, providing various pathways for language acquisition and reinforcement.",
      icon: <FaMusic />
    },
    {
      title: "Authentic Cultural Experiences",
      description: "We integrate authentic cultural practices, celebrations, and materials from Spanish-speaking countries, making language learning culturally relevant and engaging.",
      icon: <FaTheaterMasks />
    }
  ];
  
  const teacherQualities = [
    "Native or near-native Spanish fluency",
    "Specialized training in language immersion pedagogy",
    "Cultural awareness and appreciation",
    "Understanding of language acquisition principles",
    "Ability to make content comprehensible through context"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="immersion-methodology" className="relative mb-24">
      <div className="absolute -top-24" id="how-we-do-it"></div>
      
      <MaxWidthWrapper>
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#4081DE]">
            How We Implement Immersion
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Our approach combines research-based methodologies with the expertise of our bilingual educators to create 
            an effective and engaging Spanish immersion experience.
          </p>
        </motion.div>
        
        {/* Methodology Showcase with single image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Interactive Feature Selector */}
          <motion.div 
            ref={featuresRef}
            className="bg-white rounded-2xl shadow-lg p-6 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#4081DE] mb-6">Our Methodologies</h3>
            
            <div className="space-y-4">
              {methodologies.map((method, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-amber-100 text-amber-900 shadow-md border border-amber-200' 
                      : 'bg-white text-[#4081DE] hover:bg-amber-50 border border-gray-100'
                  }`}
                  initial={isInView ? { opacity: 0, x: -20 } : false}
                  animate={isInView ? { opacity: 1, x: 0 } : false}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-4">
                    <span className={`${activeFeature === index ? 'text-amber-600' : 'text-[#4081DE]'} text-2xl`}>{method.icon}</span>
                    <div>
                      <h4 className="font-bold text-lg">{method.title}</h4>
                      {activeFeature === index && (
                        <motion.p 
                          className="mt-2 text-sm text-gray-700"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          {method.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Single Image Container */}
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                src={`/images/immersion/${activeFeature + 1}.jpg`}
                alt={methodologies[activeFeature].title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4081DE]/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <h3 className="text-2xl font-bold mb-2 text-[#4081DE]">{methodologies[activeFeature].title}</h3>
                <p className="text-sm text-gray-700">{methodologies[activeFeature].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bilingual Teachers Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-24" id="bilingual-teachers"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Image Side */}
              <div className="md:w-1/3 flex justify-center">
                <motion.div 
                  className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <img
                    src="/images/bilingual-teacher.jpg"
                    alt="Bilingual Teacher"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
              
              {/* Content Side */}
              <div className="md:w-2/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-[#4081DE] mb-6">Expert Bilingual Educators</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    At the heart of our Spanish immersion program are our talented bilingual teachers who bring language and culture to life in our classrooms. Our educators are not only fluent in Spanish but also specifically trained in immersion teaching techniques.
                  </p>
                </motion.div>
                
                <motion.ul
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {teacherQualities.map((quality, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-3"
                      variants={itemVariants}
                    >
                      <div className="bg-amber-500 text-white p-1 rounded-md">
                        <FaCheck className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700">{quality}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
} 
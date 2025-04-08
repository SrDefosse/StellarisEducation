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
                src={`/${
                  activeFeature === 0 ? 'immersion_approach' :
                  activeFeature === 1 ? 'learning_units' :
                  activeFeature === 2 ? 'activities' :
                  'cultural_experiences'
                }.jpg`}
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
      </MaxWidthWrapper>
    </section>
  );
} 
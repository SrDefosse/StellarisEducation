import { motion } from 'framer-motion';
import { useState } from 'react';
// import Image from 'next/image'; // Removed next/image import
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export function PYPSection() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabVariants = {
    inactive: { opacity: 0.7, y: 0 },
    active: { opacity: 1, y: -5, scale: 1.05 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="pyp" className="relative mb-24">
      <div className="absolute -top-24" id="what-is-pyp"></div>
      
      <MaxWidthWrapper>
        {/* Heading with neutral background */}
        <motion.div 
          className="mb-16 relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative z-10">
            <div className="flex-grow">
              <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">
                What is the IB Primary Years Programme?
              </h2>
              <div className="h-1 w-32 bg-amber-400 rounded-full mb-4" />
              <p className="text-gray-700 text-lg max-w-3xl">
              The International Baccalaureate Primary Years Programme (PYP) is a globally recognized, inquiry-based curriculum designed for students aged 3 to 12. It fosters curiosity, 
              creativity, and critical thinking through a transdisciplinary framework. Students explore traditional subjects like language, math, science, and arts while connecting learning 
              to real-world issues. Emphasizing student agency, the PYP nurtures lifelong learners who are internationally minded, compassionate, and equipped with skills for a changing world. 
              The programme culminates in the PYP Exhibition, a collaborative project showcasing students' growth.
              </p>
            </div>
            
            {/* IB PYP Logo Container */}
            <motion.div 
              className="flex-shrink-0 w-64 flex items-center justify-center mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-64 h-64 flex items-center justify-center">
                <img /* Use img tag */
                  src="https://cdn.stellariseducation.com/ib-pyp-logo.png"
                  alt="IB Primary Years Programme Logo"
                  width="256" /* Keep width/height for aspect ratio */
                  height="256"
                  className="object-contain" /* Class remains similar */
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Interactive Tabs */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-gray-100">
              <div className="flex flex-col space-y-3">
                <motion.button
                  className={`text-left p-4 rounded-xl ${activeTab === 'overview' ? 'bg-amber-50 text-amber-900 border border-amber-200' : 'bg-gray-50 text-gray-700 border border-gray-100'}`}
                  variants={tabVariants}
                  animate={activeTab === 'overview' ? 'active' : 'inactive'}
                  onClick={() => setActiveTab('overview')}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold text-lg mb-1">Overview</h3>
                  <p className="text-sm opacity-80">Understanding the IB PYP framework</p>
                </motion.button>
                
                <motion.button
                  className={`text-left p-4 rounded-xl ${activeTab === 'approach' ? 'bg-amber-50 text-amber-900 border border-amber-200' : 'bg-gray-50 text-gray-700 border border-gray-100'}`}
                  variants={tabVariants}
                  animate={activeTab === 'approach' ? 'active' : 'inactive'}
                  onClick={() => setActiveTab('approach')}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold text-lg mb-1">Learning Approach</h3>
                  <p className="text-sm opacity-80">How PYP learning is structured</p>
                </motion.button>
                
                <motion.button
                  className={`text-left p-4 rounded-xl ${activeTab === 'stellaris' ? 'bg-amber-50 text-amber-900 border border-amber-200' : 'bg-gray-50 text-gray-700 border border-gray-100'}`}
                  variants={tabVariants}
                  animate={activeTab === 'stellaris' ? 'active' : 'inactive'}
                  onClick={() => setActiveTab('stellaris')}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold text-lg mb-1">Stellaris Implementation</h3>
                  <p className="text-sm opacity-80">How we integrate PYP in our program</p>
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          {/* Content area */}
          <motion.div 
            className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg min-h-[300px] flex flex-col border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {activeTab === 'overview' && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                key="overview"
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#4081DE] mb-4">The IB PYP Framework</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The International Baccalaureate (IB) Primary Years Programme (PYP) is a curriculum framework designed for students aged 3 to 12. It focuses on the development of the whole child as an inquirer, both in the classroom and in the world outside.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The PYP is guided by six transdisciplinary themes of global significance that help children explore the interconnectedness of knowledge and develop a deeper understanding of important concepts across multiple subject areas.
                  </p>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'approach' && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                key="approach"
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#4081DE] mb-4">Inquiry-Based Learning</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The PYP offers a transdisciplinary, inquiry-based approach to learning that is engaging, relevant, challenging, and significant. It is built on the belief that students learn best when the learning is authentic and connected to the world around them.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Through inquiry, students actively construct meaning by building on prior knowledge, exploring new ideas, and reflecting on their learning experiences. This approach nurtures curiosity, critical thinking, and a lifelong love of learning.
                  </p>
                </div>              
              </motion.div>
            )}
            
            {activeTab === 'stellaris' && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                key="stellaris"
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#4081DE] mb-4">Our Unique Implementation</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    At Stellaris, we implement the PYP with fidelity while integrating our language immersion approach to create a truly unique educational experience for children ages 3-5. Our program merges the inquiry-based learning of the PYP with Spanish immersion.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This powerful combination gives children the opportunity to develop as global citizens with multilingual capabilities. They explore transdisciplinary themes and develop key concepts through the lens of a second language, enhancing both their cognitive abilities and cultural understanding.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
        
        {/* Video section moved to bottom */}
        <motion.div 
          className="mt-12 relative overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-full relative" style={{ paddingBottom: "56.25%" }}> {/* 16:9 Aspect Ratio */}
            <iframe 
              src="https://www.youtube.com/embed/phI-H9-cDVc?si=h-xS2SqbnR1zxTeL&start=4" 
              title="What is the IB Primary Years Programme?"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent pointer-events-none" />
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
} 
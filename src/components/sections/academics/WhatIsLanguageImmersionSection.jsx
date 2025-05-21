import { motion } from 'framer-motion';
import { useState } from 'react';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export function WhatIsLanguageImmersionSection() {
  const [activeTab, setActiveTab] = useState('definition');
  
  const tabVariants = {
    inactive: { opacity: 0.7, y: 0 },
    active: { opacity: 1, y: -5, scale: 1.05 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="what-is-immersion" className="relative mb-24">
      <div className="absolute -top-24" id="what-is-language-immersion"></div>
      
      <MaxWidthWrapper>
        {/* Heading  */}
        <motion.div 
          className="mb-16 relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">
              What is Language Immersion?
            </h2>
            <div className="h-1 w-32 bg-amber-400 rounded-full mb-4" />
            <p className="text-gray-700 text-lg max-w-3xl">
              A comprehensive approach to language learning where students learn content through a second language, creating an environment that fosters natural acquisition, fluency, and cultural understanding. Research shows immersion students develop stronger cognitive flexibility and problem-solving skills while achieving bilingual proficiency.
            </p>
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
                  className={`text-left p-4 rounded-xl ${activeTab === 'definition' ? 'bg-amber-50 text-amber-900 border border-amber-200' : 'bg-gray-50 text-gray-700 border border-gray-100'}`}
                  variants={tabVariants}
                  animate={activeTab === 'definition' ? 'active' : 'inactive'}
                  onClick={() => setActiveTab('definition')}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold text-lg mb-1">What is it?</h3>
                  <p className="text-sm opacity-80">Understanding the immersion approach</p>
                </motion.button>
                
                <motion.button
                  className={`text-left p-4 rounded-xl ${activeTab === 'process' ? 'bg-amber-50 text-amber-900 border border-amber-200' : 'bg-gray-50 text-gray-700 border border-gray-100'}`}
                  variants={tabVariants}
                  animate={activeTab === 'process' ? 'active' : 'inactive'}
                  onClick={() => setActiveTab('process')}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold text-lg mb-1">The Process</h3>
                  <p className="text-sm opacity-80">How immersion learning works</p>
                </motion.button>
                
                <motion.button
                  className={`text-left p-4 rounded-xl ${activeTab === 'environment' ? 'bg-amber-50 text-amber-900 border border-amber-200' : 'bg-gray-50 text-gray-700 border border-gray-100'}`}
                  variants={tabVariants}
                  animate={activeTab === 'environment' ? 'active' : 'inactive'}
                  onClick={() => setActiveTab('environment')}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold text-lg mb-1">Immersive Environment</h3>
                  <p className="text-sm opacity-80">Creating a language-rich setting</p>
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
            {activeTab === 'definition' && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                key="definition"
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#4081DE] mb-4">The Immersion Approach</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Language immersion is an educational approach where students learn subject content through a second language. 
                    At Stellaris, our Spanish immersion program surrounds children with Spanish language throughout the day, 
                    creating a natural environment for language acquisition.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Rather than studying Spanish as a separate subject, children experience their daily activities, lessons, and 
                    social interactions in Spanish, allowing them to absorb the language organically—similar to how they 
                    learned their first language.
                  </p>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'process' && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                key="process"
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#4081DE] mb-4">Natural Language Acquisition</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    In our immersion program, children learn Spanish through context, repetition, and meaningful interactions. 
                    Teachers use visual cues, body language, and consistent routines to help children understand and 
                    internalize new vocabulary and expressions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This process mimics how we all learned our first language—not through formal instruction, but through 
                    exposure, trial and error, and the natural human drive to communicate. Children develop language 
                    fluency in a stress-free environment where making mistakes is part of the learning journey.
                  </p>
                </div>              
              </motion.div>
            )}
            
            {activeTab === 'environment' && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                key="environment"
                className="flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#4081DE] mb-4">A Rich Language Environment</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our classrooms are designed as language-rich environments where Spanish is used for instruction, 
                    daily routines, play, and social interaction. Teachers are native or fluent Spanish speakers who 
                    maintain a Spanish-only environment throughout most of the day.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Children are surrounded by Spanish through books, songs, games, and cultural activities. This 
                    multisensory approach engages different learning styles and creates multiple pathways for language 
                    acquisition. The classroom becomes a microcosm of a Spanish-speaking world, giving children authentic 
                    opportunities to use and experience the language.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
} 
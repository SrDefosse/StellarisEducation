import { motion } from 'framer-motion';
import { FaBrain, FaLightbulb, FaGlobe, FaBook, FaBriefcase } from 'react-icons/fa';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export function ImmersionBenefitsSection() {
  const benefits = [
    {
      title: "Cognitive Flexibility",
      description: "Develop greater cognitive flexibility and problem-solving skills",
      icon: <FaBrain />,
    },
    {
      title: "Creativity & Mental Agility",
      description: "Show enhanced creativity and mental agility",
      icon: <FaLightbulb />,
    },
    {
      title: "Cultural Awareness",
      description: "Demonstrate better cultural awareness and empathy",
      icon: <FaGlobe />,
    },
    {
      title: "Academic Performance",
      description: "Achieve higher academic performance across all subjects",
      icon: <FaBook />,
    },
    {
      title: "Career Opportunities",
      description: "Have increased career opportunities later in life",
      icon: <FaBriefcase />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="immersion-benefits" className="relative mb-24">
      <div className="absolute -top-24" id="benefits"></div>
      
      <MaxWidthWrapper>
        {/* Main content */}
        <div className="relative z-10">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 text-[#4081DE]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Benefits of Language Immersion
            </motion.h2>
            
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Stellaris, we believe that learning a second language is essential for success in our increasingly 
                interconnected world. Our Spanish immersion program provides students with the opportunity to become truly 
                bilingual while developing cultural awareness and cognitive advantages.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Research shows that children who learn a second language during their early years gain numerous benefits:
              </p>
            </motion.div>
          </motion.div>
          
          {/* Benefits bento grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Cognitive Flexibility - Large card */}
            <motion.div
              className="lg:col-span-6 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-100"
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-[#4081DE] mb-3">{benefits[0].title}</h3>
                <span className="text-[#4081DE] text-3xl">{benefits[0].icon}</span>
              </div>
              <p className="text-gray-700 mt-2">{benefits[0].description}</p>
            </motion.div>
            
            {/* Creativity & Mental Agility - Medium card */}
            <motion.div
              className="lg:col-span-6 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-100"
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-[#4081DE] mb-2">{benefits[1].title}</h3>
                <span className="text-[#4081DE] text-2xl">{benefits[1].icon}</span>
              </div>
              <p className="text-gray-700 mt-2">{benefits[1].description}</p>
            </motion.div>
            
            {/* Cultural Awareness - Medium card */}
            <motion.div
              className="lg:col-span-4 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-100"
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-[#4081DE] mb-2">{benefits[2].title}</h3>
                <span className="text-[#4081DE] text-2xl">{benefits[2].icon}</span>
              </div>
              <p className="text-gray-700 mt-2">{benefits[2].description}</p>
            </motion.div>
            
            {/* Academic Performance - Small card */}
            <motion.div
              className="lg:col-span-4 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-100"
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-[#4081DE] mb-2">{benefits[3].title}</h3>
                <span className="text-[#4081DE] text-2xl">{benefits[3].icon}</span>
              </div>
              <p className="text-gray-700 mt-2">{benefits[3].description}</p>
            </motion.div>
            
            {/* Career Opportunities - Wide card */}
            <motion.div
              className="lg:col-span-4 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-100"
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-[#4081DE] mb-2">{benefits[4].title}</h3>
                <span className="text-[#4081DE] text-2xl">{benefits[4].icon}</span>
              </div>
              <p className="text-gray-700 mt-2">{benefits[4].description}</p>
            </motion.div>
          </motion.div>
          
          {/* Conclusion callout */}
          <motion.div 
            className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-4xl text-amber-500">
                <FaLightbulb />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#4081DE] mb-2">A Gift for Life</h3>
                <p className="text-gray-700 leading-relaxed">
                  The cognitive and cultural benefits of early language immersion extend far beyond childhood, 
                  providing advantages throughout education and into adulthood. By giving your child the gift of 
                  bilingualism, you're opening doors to global opportunities and fostering a mindset of openness 
                  and cultural appreciation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
} 
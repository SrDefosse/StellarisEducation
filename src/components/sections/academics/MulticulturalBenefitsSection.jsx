import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaBrain, FaHandshake, FaUsers, FaBookOpen } from 'react-icons/fa';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export function MulticulturalBenefitsSection() {
  const benefits = [
    {
      icon: <FaGlobeAmericas />,
      title: "Global Perspectives",
      description: "Teachers from diverse backgrounds bring authentic global viewpoints directly to the classroom."
    },
    {
      icon: <FaBrain />,
      title: "Cultural Intelligence",
      description: "Students develop enhanced cultural sensitivity through daily interactions with teachers from different countries."
    },
    {
      icon: <FaHandshake />,
      title: "Authentic Language Learning",
      description: "Native speakers create an immersive environment for genuine language acquisition."
    },
    {
      icon: <FaUsers />,
      title: "Diverse Teaching Methods",
      description: "International educators introduce innovative approaches from educational systems worldwide."
    },
    {
      icon: <FaBookOpen />,
      title: "Global Citizenship",
      description: "Students become prepared for success in our interconnected, multicultural world."
    }
  ];

  // Animation variants
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
    <section id="multicultural-benefits" className="relative mb-24">
      <div className="absolute -top-24" id="benefits"></div>
      
      <MaxWidthWrapper>
        {/* Header */}
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
            The Benefits of Multicultural Educators
          </motion.h2>
          
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 text-lg">
              Our international teaching team creates a rich, diverse learning environment that prepares students 
              to thrive in our globally connected world.
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
          {/* Global Perspectives - Large card */}
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
          
          {/* Cultural Intelligence - Medium card */}
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
          
          {/* Authentic Language Learning - Medium card */}
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
          
          {/* Diverse Teaching Methods - Small card */}
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
          
          {/* Global Citizenship - Wide card */}
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
        
        {/* Quote section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#3967a9] to-[#4081DE] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <FaGlobeAmericas className="text-[200px]" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 text-blue-300 opacity-60 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl font-light italic mb-6">
              Children with teachers from different cultural backgrounds develop more nuanced perspectives 
              and greater empathy for diverse ways of thinking and living.
            </p>
            <p className="font-medium text-blue-300">— Journal of Multicultural Education</p>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
} 
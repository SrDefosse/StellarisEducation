import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaBrain, FaHandshake, FaUsers, FaBookOpen } from 'react-icons/fa';

export function MulticulturalBenefitsSection() {
  const benefits = [
    {
      icon: <FaGlobeAmericas className="text-blue-500 text-3xl" />,
      title: "Global Perspectives",
      description: "Teachers from diverse backgrounds bring authentic global viewpoints directly to the classroom."
    },
    {
      icon: <FaBrain className="text-blue-500 text-3xl" />,
      title: "Cultural Intelligence",
      description: "Students develop enhanced cultural sensitivity through daily interactions with teachers from different countries."
    },
    {
      icon: <FaHandshake className="text-blue-500 text-3xl" />,
      title: "Authentic Language Learning",
      description: "Native speakers create an immersive environment for genuine language acquisition."
    },
    {
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      title: "Diverse Teaching Methods",
      description: "International educators introduce innovative approaches from educational systems worldwide."
    },
    {
      icon: <FaBookOpen className="text-blue-500 text-3xl" />,
      title: "Global Citizenship",
      description: "Students become prepared for success in our interconnected, multicultural world."
    }
  ];

  return (
    <section id="multicultural-benefits" className="relative mb-24">
      <div className="absolute -top-24" id="benefits"></div>
      
      {/* Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">
          The Benefits of Multicultural Educators
        </h2>
        <div className="h-1 w-32 bg-amber-400 rounded-full mx-auto mb-6" />
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Our international teaching team creates a rich, diverse learning environment that prepares students 
          to thrive in our globally connected world.
        </p>
      </motion.div>
      
      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="bg-white rounded-2xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Quote */}
      <motion.div
        className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
    </section>
  );
} 
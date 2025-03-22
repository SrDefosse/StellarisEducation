import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaGraduationCap, FaGlobeAmericas, FaClock, FaLaptop } from 'react-icons/fa';

export const PreKQuickFactsSection = () => {
  const facts = [
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-[#3967a9]" />,
      title: "Schedule",
      description: "Monday to Friday, 8:30 AM to 3:15 PM"
    },
    {
      icon: <FaUsers className="w-8 h-8 text-[#3967a9]" />,
      title: "Student-Teacher Ratio",
      description: "8:1 with maximum class size of 16 students"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-[#3967a9]" />,
      title: "Curriculum",
      description: "IB Primary Years Programme and Spanish Immersion"
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8 text-[#3967a9]" />,
      title: "Language",
      description: "90% Spanish / 10% English immersion model"
    },
    {
      icon: <FaClock className="w-8 h-8 text-[#3967a9]" />,
      title: "Extended Care",
      description: "Available from 7:30 AM to 6:00 PM"
    },
    {
      icon: <FaLaptop className="w-8 h-8 text-[#3967a9]" />,
      title: "Technology",
      description: "Age-appropriate technology integration"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3967a9]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Pre-K Quick Facts
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{fact.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{fact.title}</h3>
              <p className="text-gray-600">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
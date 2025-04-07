import { motion } from 'framer-motion';

const quickFacts = [
  { label: "Age Range", value: "3-5 years" },
  { label: "Schedule", value: "Full day, 8:00 AM - 3:00 PM" },
  { label: "Extended Care", value: "Available 7:00 AM - 6:00 PM" },
  { label: "Student-Teacher Ratio", value: "8:1" },
  { label: "Languages", value: "English and Spanish" },
  { label: "Class Size", value: "Maximum 16 students" }
];

export const PreKQuickFacts = () => {
  return (
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">Quick Facts</h2>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {quickFacts.map((fact, index) => (
            <div 
              key={index} 
              className={`p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
            >
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-1">{fact.label}</h3>
              <p className="text-lg font-semibold text-indigo-900">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}; 
import { motion } from 'framer-motion';
import { FaRegClock } from 'react-icons/fa';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';
import { PrimaryButton } from '../../ui/Button';

export const CoverageSection = () => {
  const programHoursInfo = {
    icon: <FaRegClock className="w-12 h-12 text-[#3967a9]" />,
    title: "Program Hours",
    description: "Monday to Friday, 3:15 PM to 6:00 PM, with early dismissal day coverage"
  };

  return (
    <section className="py-16">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3967a9]">
            Coverage & Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our after school program is designed to be convenient for families while providing exceptional experiences for students
          </p>
        </motion.div>

        <div className="flex justify-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-10 max-w-md flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6">{programHoursInfo.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{programHoursInfo.title}</h3>
            <p className="text-gray-600 text-center text-lg">{programHoursInfo.description}</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center py-10 px-8 max-w-2xl mx-auto"
        >
          <p className="text-xl text-gray-700 mb-6">Contact us for more details</p>
          <a href="/contact">
            <PrimaryButton className="px-10">Get in Touch</PrimaryButton>
          </a>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}; 
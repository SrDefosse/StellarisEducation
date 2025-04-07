import { motion } from 'framer-motion';
import { FaRegClock, FaCalendarAlt, FaMoneyBillWave, FaUserFriends } from 'react-icons/fa';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export const CoverageSection = () => {
  const coverageDetails = [
    {
      icon: <FaRegClock className="w-10 h-10 text-[#3967a9]" />,
      title: "Program Hours",
      description: "Monday to Friday, 3:15 PM to 6:00 PM, with early dismissal day coverage"
    },
    {
      icon: <FaCalendarAlt className="w-10 h-10 text-[#3967a9]" />,
      title: "Schedule Options",
      description: "Full-week enrollment or flexible 2-3 day options to meet your family's needs"
    },
    {
      icon: <FaMoneyBillWave className="w-10 h-10 text-[#3967a9]" />,
      title: "Tuition & Fees",
      description: "Monthly tuition of $350 for 5 days/week, $250 for 3 days/week, with sibling discounts"
    },
    {
      icon: <FaUserFriends className="w-10 h-10 text-[#3967a9]" />,
      title: "Staff Ratio",
      description: "1:10 staff-to-student ratio with specialized instructors for activities"
    }
  ];

  return (
    <section className="py-16">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3967a9]">
            Coverage & Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our after school program is designed to be convenient for families while providing exceptional experiences for students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coverageDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 flex items-start gap-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}; 
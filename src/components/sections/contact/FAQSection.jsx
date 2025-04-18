import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Our admission process includes an information session, campus tour, and application review. We evaluate each student individually, considering their academic potential, language aptitude, and family commitment to our educational philosophy."
    },
    {
      question: "Do you offer financial aid or scholarships?",
      answer: "Yes, we offer need-based financial aid to qualified families. In addition, qualified families in Tennessee can apply for a variety of Federal and State funded child care financial assistance programs.  Our goal is to make quality education accessible to diverse families. Please contact us for more information."
    },
    {
      question: "What makes Stellaris different from other schools?",
      answer: "Stellaris combines the International Baccalaureate framework with Spanish language immersion, creating a unique bilingual and inquiry-based learning environment. Our international faculty and small class sizes ensure personalized attention and authentic cultural experiences."
    },
    {
      question: "How do you support non-Spanish speaking families?",
      answer: "We provide extensive support for non-Spanish speaking families, including parent education sessions, bilingual communication materials, and regular updates on student progress. Our community embraces families from all linguistic backgrounds."
    },
    {
      question: "What are your school hours and calendar?",
      answer: "Regular school hours are 8:00 AM to 3:00 PM, with extended care available from 7:00 AM to 6:00 PM"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our programs, admissions process, and school community
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4 pb-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <FaChevronDown
                  className={`w-5 h-5 text-[#3967a9] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}; 
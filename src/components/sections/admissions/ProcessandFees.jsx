import { motion } from 'framer-motion';

const ProcessandFees = () => {
  return (
    <div id="admissions-process" className="py-16">
        {/* Content Section */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Join The Stellaris Community</h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Begin your child's journey to becoming a global citizen with a lifelong love of learning.
              </p>
            </div>

            <div className="flex justify-center">
              {/* Step 1: Information Session */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md flex flex-col" // Adjusted width and shadow
              >
                <div className="bg-[#4081DE] p-8 text-white text-center"> {/* Increased padding */}
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5"> {/* Larger icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Information Session</h3> {/* Larger text */}
                </div>
                <div className="p-8 flex-grow"> {/* Increased padding */}
                  <p className="text-gray-700 text-lg mb-6 text-center"> {/* Larger text */}
                    Learn about our philosophy, curriculum, and what makes Stellaris Education special.
                  </p>

                  <div className="space-y-4 text-center">
                    <div>
                      <p className="font-semibold text-gray-800 mb-2 text-lg">Next Session:</p> {/* Larger text */}
                      <p className="text-gray-600 text-lg"> {/* Larger text */}
                        <span className="font-medium">April 26, 2024</span> - Nashville, TN
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-4">
                  <a 
                    href="https://lu.ma/nnce6azs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-semibold text-lg shadow-md hover:shadow-lg text-center">
                    Register to Attend
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
    </div>
  );
};

export default ProcessandFees;

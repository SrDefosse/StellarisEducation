import { useState } from 'react';
import { motion } from 'framer-motion';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

const ProcessandFees = () => {
  const [activeTab, setActiveTab] = useState('process');

  return (
    <div id="admissions-content" className="bg-gradient-to-b from-blue-50 to-white py-16">
      <MaxWidthWrapper>
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1 rounded-xl shadow-md">
            <button
              onClick={() => setActiveTab('process')}
              className={`py-3 px-6 rounded-lg font-medium text-lg transition-all ${
                activeTab === 'process'
                  ? 'bg-[#3967a9] text-white shadow-md'
                  : 'bg-transparent text-gray-600 hover:bg-gray-100'
              }`}
            >
              Admissions Process
            </button>
            <button
              onClick={() => setActiveTab('tuition')}
              className={`py-3 px-6 rounded-lg font-medium text-lg transition-all ${
                activeTab === 'tuition'
                  ? 'bg-[#3967a9] text-white shadow-md'
                  : 'bg-transparent text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tuition & Fees
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'process' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#3967a9] mb-4">Our Admissions Process</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We've designed a simple three-step process to help your family join our community
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Step 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
                >
                  <div className="bg-[#4081DE] p-6 text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">01</span>
                    </div>
                    <h3 className="text-xl font-bold">Information Session</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-6">Learn about our educational philosophy, curriculum, and what makes Stellaris unique.</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-gray-700 mb-2">Upcoming Sessions:</p>
                        <ul className="text-gray-600 space-y-1">
                          <li>February 15, 2024 - 10:00 AM</li>
                          <li>March 12, 2024 - 4:00 PM</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button className="w-full px-5 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-medium">
                      Register to Attend
                    </button>
                  </div>
                </motion.div>
                
                {/* Step 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
                >
                  <div className="bg-[#4081DE] p-6 text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">02</span>
                    </div>
                    <h3 className="text-xl font-bold">Campus Tour</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-6">Experience our learning environment firsthand and see our programs in action.</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-gray-700 mb-2">Tour Options:</p>
                        <ul className="space-y-2">
                          <li className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>In-Person Campus Tours</span>
                          </li>
                          <li className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Virtual Tours Available</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button className="w-full px-5 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-medium">
                      Schedule a Tour
                    </button>
                  </div>
                </motion.div>
                
                {/* Step 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
                >
                  <div className="bg-[#4081DE] p-6 text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">03</span>
                    </div>
                    <h3 className="text-xl font-bold">Application</h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-6">Complete our application process to secure your child's place at Stellaris Education.</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-gray-700 mb-2">Application Requirements:</p>
                        <ul className="space-y-2">
                          <li className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3967a9] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Student Information Form</span>
                          </li>
                          <li className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3967a9] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Family Questionnaire</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button className="w-full px-5 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-medium">
                      Start Application
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'tuition' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#3967a9] mb-4">Tuition & Fees</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Investing in your child's education and future
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-[#3967a9] text-white p-6">
                  <h3 className="text-2xl font-semibold">2024-2025 Academic Year</h3>
                  <p className="text-white/80 mt-2">
                    Our tuition reflects our commitment to providing a high-quality education with small class sizes, experienced international teachers, and a rich curriculum.
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b">
                      <div>
                        <h4 className="text-xl font-medium text-gray-800">Pre-K Program (Ages 3-5)</h4>
                        <p className="text-gray-500 mt-1">Full-day program with Spanish immersion</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="text-2xl font-bold text-[#4081DE]">$18,500</span>
                        <span className="text-gray-500 ml-1">per year</span>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-gray-800 mb-4">Additional Fees</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-gray-700 mb-1">Application Fee</p>
                          <p className="text-xl font-semibold text-[#3967a9]">$100</p>
                          <p className="text-sm text-gray-500">Non-refundable</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-gray-700 mb-1">Enrollment Deposit</p>
                          <p className="text-xl font-semibold text-[#3967a9]">$1,500</p>
                          <p className="text-sm text-gray-500">Applied to tuition</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-gray-700 mb-1">Materials Fee</p>
                          <p className="text-xl font-semibold text-[#3967a9]">$500</p>
                          <p className="text-sm text-gray-500">Annual fee</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-4">Payment Plans Available</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-200 p-4 rounded-lg text-center hover:border-[#3967a9] hover:shadow-md transition-all">
                          <p className="font-medium">Annual</p>
                          <p className="text-sm text-gray-500">Single payment</p>
                        </div>
                        <div className="border border-gray-200 p-4 rounded-lg text-center hover:border-[#3967a9] hover:shadow-md transition-all">
                          <p className="font-medium">Semi-annual</p>
                          <p className="text-sm text-gray-500">Two payments</p>
                        </div>
                        <div className="border border-gray-200 p-4 rounded-lg text-center hover:border-[#3967a9] hover:shadow-md transition-all">
                          <p className="font-medium">10-month plan</p>
                          <p className="text-sm text-gray-500">Monthly payments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="px-8 py-3 bg-[#4081DE] text-white rounded-lg hover:bg-[#3670B5] transition-colors shadow-md">
                      Contact Us About Financial Aid
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProcessandFees;

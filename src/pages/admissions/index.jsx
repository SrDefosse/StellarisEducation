import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from "@/components/layout/Footer";

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState('process');

  return (
    <>
      <Head>
        <title>Admissions | Stellaris Education</title>
        <meta name="description" content="Join the Stellaris Education community. Learn about our admissions process, tuition, and schedule a campus visit." />
      </Head>

      <Navbar />

      {/* Hero Banner */}
      <div className="bg-[#4081DE] text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join the Stellaris Community</h1>
            <p className="text-xl md:text-2xl opacity-90">Begin your child's journey to becoming a global citizen with a lifelong love of learning.</p>
          </motion.div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('process')}
              className={`py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'process'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Admissions Process
            </button>
            <button
              onClick={() => setActiveTab('tuition')}
              className={`py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'tuition'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Tuition & Fees
            </button>
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === 'process' && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">Our Admissions Process</h2>
            
            <div className="space-y-12">
              {/* Step 1: Information Session */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[#4081DE] text-white p-8 md:w-1/3">
                    <span className="text-6xl font-bold opacity-50">01</span>
                    <h3 className="text-2xl font-bold mt-4">Information Session</h3>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <p className="text-gray-600 mb-6">Learn about our educational philosophy, curriculum, and what makes Stellaris unique.</p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <div className="font-medium text-gray-700 sm:w-1/3">Upcoming Sessions:</div>
                        <div className="sm:w-2/3 text-gray-600">
                          <div>February 15, 2024 - 10:00 AM</div>
                          <div>March 12, 2024 - 4:00 PM</div>
                        </div>
                      </div>
                      
                      <button className="px-5 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                        Register to Attend
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2: Campus Tour */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[#4081DE] text-white p-8 md:w-1/3">
                    <span className="text-6xl font-bold opacity-50">02</span>
                    <h3 className="text-2xl font-bold mt-4">Campus Tour</h3>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <p className="text-gray-600 mb-6">Experience our learning environment firsthand and see our programs in action.</p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row">
                        <div className="font-medium text-gray-700 sm:w-1/3">Tour Options:</div>
                        <div className="sm:w-2/3 space-y-2">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>In-Person Campus Tours</span>
                          </div>
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Virtual Tours Available</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="px-5 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                        Schedule a Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3: Application */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[#4081DE] text-white p-8 md:w-1/3">
                    <span className="text-6xl font-bold opacity-50">03</span>
                    <h3 className="text-2xl font-bold mt-4">Application</h3>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <p className="text-gray-600 mb-6">Complete our application process to secure your child's place at Stellaris Education.</p>
                    
                    <button className="px-5 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                      Start Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'tuition' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">Tuition & Fees</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-indigo-900 mb-4">2024-2025 Academic Year</h3>
                <p className="text-gray-600">Our tuition reflects our commitment to providing a high-quality education with small class sizes, experienced international teachers, and a rich curriculum.</p>
              </div>
              
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-medium">Pre-K Program (Ages 3-5)</h4>
                    <span className="text-2xl font-bold text-[#4081DE]">$18,500</span>
                  </div>
                  <p className="text-gray-500 mt-2">Full-day program with Spanish immersion</p>
                </div>
                
                <div className="border-b pb-4">
                  <h4 className="text-lg font-medium mb-2">Additional Fees</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Application Fee (non-refundable)</span>
                      <span className="font-medium">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Enrollment Deposit (applied to tuition)</span>
                      <span className="font-medium">$1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Materials Fee</span>
                      <span className="font-medium">$500</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-2">Payment Plans Available:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Annual (single payment)</li>
                  <li>Semi-annual (two payments)</li>
                  <li>10-month payment plan</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <button className="px-6 py-3 bg-[#4081DE] text-white rounded-lg hover:bg-[#3670B5] transition-colors">
                Contact Us About Financial Aid
              </button>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </>
  );
};

export default AdmissionsPage;

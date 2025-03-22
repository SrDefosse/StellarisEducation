import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PreKPage() {
  // Quick facts about Pre-K program
  const quickFacts = [
    { label: "Age Range", value: "3-5 years" },
    { label: "Schedule", value: "Full day, 8:00 AM - 3:00 PM" },
    { label: "Extended Care", value: "Available 7:00 AM - 6:00 PM" },
    { label: "Student-Teacher Ratio", value: "8:1" },
    { label: "Languages", value: "English and Spanish" },
    { label: "Class Size", value: "Maximum 16 students" }
  ];

  return (
    <>
      <Head>
        <title>Pre-K Program | Stellaris Education</title>
        <meta name="description" content="Discover our innovative Pre-K program for ages 3-5 at Stellaris Education, featuring Spanish immersion and inquiry-based learning." />
      </Head>

      <Navbar />

      {/* Hero Banner */}
      <div className="bg-[#4081DE] text-white">
        <div className="container mx-auto px-4 pt-28 pb-20">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Pre-K Program</h1>
            <p className="text-xl md:text-2xl opacity-90">Building the foundation for lifelong learning through play, exploration, and language immersion.</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Program Description */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">The Stellaris Pre-K Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Our Pre-K program provides a nurturing environment where children ages 3-5 develop foundational skills through play-based learning and exploration. The curriculum balances structured activities with open-ended exploration, allowing children to follow their natural curiosity.
                </p>
                <p className="text-gray-700">
                  As a Spanish immersion school, Pre-K students at Stellaris naturally absorb a second language during these formative years when language acquisition comes most easily. Our bilingual teachers create an immersive environment where children learn through daily activities, songs, stories, and play.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Our Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Child-centered and play-based learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Natural Spanish language immersion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Inquiry-based IB framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Small class sizes with personalized attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Outdoor exploration and nature-based activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Quick Facts */}
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

          {/* CTA Section */}
          <motion.section
            className="bg-[#3B6FB5] rounded-xl text-white p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to join our Pre-K program?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Begin your child's educational journey with our innovative Pre-K program. Limited spaces available for the upcoming school year.
            </p>
            <button 
              onClick={() => window.location.href = '/admissions'}
              className="px-8 py-3 bg-white text-[#3B6FB5] rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Apply for Admissions
            </button>
          </motion.section>
        </div>
      </div>

      <Footer />
    </>
  );
} 
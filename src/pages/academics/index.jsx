import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AcademicsPage() {
  const sections = [
    { 
      title: "IB Programme", 
      description: "Discover our implementation of the International Baccalaureate Primary Years Programme and how it develops inquiring, knowledgeable, and caring young people.",
      href: "/academics/ib",
      color: "from-indigo-500 to-blue-600",
      icon: "🌎"
    },
    { 
      title: "Spanish Immersion", 
      description: "Learn how our language immersion approach helps students develop fluency in Spanish while gaining cognitive benefits and cultural awareness.",
      href: "/academics/languageimmersion",
      color: "from-amber-500 to-orange-600",
      icon: "🗣️"
    },
    { 
      title: "International Teachers", 
      description: "Meet our talented, multicultural educators who bring global perspectives and diverse teaching experiences to our classrooms.",
      href: "/academics/internationalteachers",
      color: "from-emerald-500 to-teal-600",
      icon: "👩‍🏫"
    }
  ];

  return (
    <>
      <Head>
        <title>Academics | Stellaris Education</title>
        <meta 
          name="description" 
          content="Explore the academic approach at Stellaris Education, featuring the IB Primary Years Programme, Spanish language immersion, and our team of international teachers."
        />
      </Head>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/90 z-10" />
          <div className="absolute inset-0 opacity-40 z-0">
            <div className="absolute inset-0 bg-[url('/inquiryBased.jpg')] bg-cover bg-center" />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Academic Approach
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Stellaris Education, we combine the International Baccalaureate framework with language immersion and multicultural perspectives to provide a truly global education.
            </motion.p>
          </div>
        </section>

        {/* Academic Programs Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-indigo-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Academic Programs
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div 
                  key={section.title}
                  className="relative overflow-hidden rounded-2xl shadow-xl h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                >
                  <Link href={section.href} className="block h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-90 z-0 transition-all duration-300 group-hover:opacity-100`} />
                    
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      <div className="text-4xl mb-4">{section.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                      <p className="text-white/90 mb-6 flex-grow">{section.description}</p>
                      
                      <div className="flex items-center text-white mt-4">
                        <span className="mr-2">Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <motion.h2 
                className="text-3xl font-bold text-indigo-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Educational Philosophy
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-gray-700 mb-4">
                  Our approach to education is built on the belief that children thrive in environments where they are encouraged to explore, question, and connect with the world around them.
                </p>
                <p className="text-gray-700 mb-4">
                  By combining the inquiry-based IB framework with language immersion and diverse cultural perspectives, we create learning experiences that develop the whole child—intellectually, socially, emotionally, and physically.
                </p>
                <p className="text-gray-700">
                  Our goal is to nurture lifelong learners who are curious, critical thinkers with the skills and mindset to succeed in an increasingly interconnected world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
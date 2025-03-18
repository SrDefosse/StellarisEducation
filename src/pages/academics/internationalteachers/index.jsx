import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function InternationalTeachersPage() {
  return (
    <>
      <Head>
        <title>International Teachers | Stellaris Education</title>
        <meta 
          name="description" 
          content="Meet our talented multicultural educators at Stellaris Education"
        />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white mt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-emerald-900">
            International Teachers
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Coming soon! This page is under development.
          </p>

          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl">
              <p className="text-gray-700 mb-4">
                Our team of international teachers brings diverse cultural perspectives and teaching experiences to our classrooms, enriching our students' educational journey.
              </p>
              <p className="text-gray-700">
                Please check back soon to learn more about our talented educators and how we recruit them from around the world.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

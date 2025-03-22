import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { DescriptionSection } from '@/components/sections/afterSchool/DescriptionSection';
import { CoverageSection } from '@/components/sections/afterSchool/CoverageSection';
import { ProgramsSection } from '@/components/sections/afterSchool/ProgramsSection';
import { EnrollmentCTA } from '@/components/sections/afterSchool/EnrollmentCTA';

export default function AfterSchoolPage() {
  return (
    <>
      <Head>
        <title>After School Enrichment | Stellaris Education</title>
        <meta 
          name="description" 
          content="Discover our engaging After School Enrichment program at Stellaris Education, offering arts, STEM, languages, and physical activities in a supportive environment."
        />
      </Head>
      <Navbar />
      <div className="min-h-screen mt-20 bg-gradient-to-b from-blue-50 to-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-[#4081DE]">
            After School Enrichment
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Extending the learning day with engaging activities that develop skills, inspire creativity, and foster friendships
          </p>

          <div className="space-y-12">
            <DescriptionSection />
            <CoverageSection />
            <ProgramsSection />
            <EnrollmentCTA />
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

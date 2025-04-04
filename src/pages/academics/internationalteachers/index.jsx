import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MulticulturalBenefitsSection } from '@/components/sections/academics/MulticulturalBenefitsSection';
import { TalentedTeachersSection } from '@/components/sections/academics/TalentedTeachersSection';
import { RecruitmentProcessSection } from '@/components/sections/academics/RecruitmentProcessSection';
import { VideoSection } from '@/components/sections/academics/VideoSection';

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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="text-5xl font-bold text-center mb-4 text-[#4081DE]">
            International Teachers
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Our diverse team of international educators create a multicultural learning environment
            that broadens perspectives and enhances language acquisition
          </p>

          <div className="space-y-32">
            <MulticulturalBenefitsSection />
            <VideoSection />
            <TalentedTeachersSection />
            <RecruitmentProcessSection />
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

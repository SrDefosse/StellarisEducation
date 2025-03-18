import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WhatIsLanguageImmersionSection } from '@/components/sections/academics/WhatIsLanguageImmersionSection';
import { ImmersionBenefitsSection } from '@/components/sections/academics/ImmersionBenefitsSection';
import { ImmersionMethodologySection } from '@/components/sections/academics/ImmersionMethodologySection';

export default function LanguageImmersionPage() {
  return (
    <>
      <Head>
        <title>Spanish Immersion | Stellaris Education</title>
        <meta 
          name="description" 
          content="Learn about our Spanish language immersion program at Stellaris Education, its benefits, and implementation"
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
          <h1 className="text-5xl font-bold text-center mb-4 text-indigo-900">
            Spanish Immersion
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Explore our innovative Spanish immersion program designed to develop bilingual children with 
            global perspectives and cognitive advantages
          </p>

          <div className="space-y-32">
            <WhatIsLanguageImmersionSection />
            <ImmersionBenefitsSection />
            <ImmersionMethodologySection />
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

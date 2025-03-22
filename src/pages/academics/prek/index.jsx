import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PreKDescriptionSection } from '@/components/sections/academics/PreKDescriptionSection';
import { PreKQuickFactsSection } from '@/components/sections/academics/PreKQuickFactsSection';
import { PreKAdmissionsCTA } from '@/components/sections/academics/PreKAdmissionsCTA';

export default function PreKPage() {
  return (
    <>
      <Head>
        <title>Pre-K Program | Stellaris Education</title>
        <meta 
          name="description" 
          content="Discover our innovative Pre-K program at Stellaris Education, combining play-based learning with Spanish immersion and IB curriculum."
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
            Pre-K
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Where early childhood development meets language immersion and inquiry-based learning
          </p>

          <div className="space-y-12">
            <PreKDescriptionSection />
            <PreKQuickFactsSection />
            <PreKAdmissionsCTA />
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

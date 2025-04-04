import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PreKDescriptionSection } from '@/components/sections/academics/PreKDescriptionSection';
import { PreKAdmissionsCTA } from '@/components/sections/academics/PreKAdmissionsCTA';
import { PreKQuickFacts } from '@/components/sections/academics/PreKQuickFacts';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper';
import PrekHero from '@/components/sections/academics/PrekHero';

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
      <Navbar isTransparent />
      <PrekHero />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          <MaxWidthWrapper>
            <div className="space-y-12">
              <PreKDescriptionSection />
              <PreKQuickFacts />
              <PreKAdmissionsCTA />
            </div>
          </MaxWidthWrapper>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

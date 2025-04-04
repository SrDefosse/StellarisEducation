import Head from 'next/head';
import { PYPSection } from '@/components/sections/academics/PYPSection';
import { InquiryBasedLearningSection } from '@/components/sections/academics/InquiryBasedLearningSection';
import { LearnerProfileSection } from '@/components/sections/academics/LearnerProfileSection';
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function IBPage() {
  return (
    <>
      <Head>
        <title>IB Programme | Stellaris Education</title>
        <meta 
          name="description" 
          content="Learn about the International Baccalaureate (IB) Primary Years Programme at Stellaris Education"
        />
      </Head>
      
      {/* Hero Section with Transparent Navbar */}
      <div className="relative h-screen">
        <Navbar className="absolute top-0 left-0 right-0 z-50" isTransparent />
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/hero-ib.mp4" type="video/mp4" />
          </video>
          <motion.div 
            className="relative z-20 h-full flex items-center justify-center text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                International Baccalaureate
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Discover our transformative approach to education through the IB Primary Years Programme
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="space-y-32">
            <PYPSection />
            <InquiryBasedLearningSection />
            <LearnerProfileSection />
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

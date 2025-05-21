import { useState, useRef } from "react";
import { motion } from "framer-motion";
// import Image from "next/image"; // Removed next/image import
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import { Link } from "react-router-dom";

const announcementData = {
  phone: "+1 (629) 205-6525",
  email: "info@stellariseducation.com",
  description: "We're thrilled to announce that Stellaris Education will soon be opening its first campus in Nashville, Tennessee during the Fall of 2025.",
  plannedFeatures: [
    "Centrally located for easy access from a number of neighborhoods in and around Nashville",
    "Classrooms designed to allow for movement and exploration",
    "Plenty of outdoor space for play and guided physical activity",
    "Healthy snacks for kids",
  ],
  images: [
    {
      src: "https://cdn.stellariseducation.com/campus-concept.jpg",
      alt: "Architectural concept of future Stellaris Education campus"
    }
  ]
};

export default function Locations() {
  const titleRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Coming Soon</h2>
            <motion.div 
              className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Our Future Home of Learning Excellence
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Announcement Image */}
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-xl relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-amber-50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-indigo-900 mb-4">Opening Soon</h3>
                <p className="text-lg text-gray-700">Be part of our educational journey</p>
              </div>
            </div>
          </motion.div>
          
          {/* Announcement Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6 border-l-4 border-amber-400 pl-3">
                Future Campus Announcement
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {announcementData.description}
              </p>
              
              <h4 className="text-lg font-semibold text-indigo-900 mb-4">Planned Features</h4>
              <ul className="space-y-2 mb-8">
                {announcementData.plannedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#3967a9] flex-shrink-0" />
                  <p className="text-gray-600">{announcementData.phone}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#3967a9] flex-shrink-0" />
                  <p className="text-gray-600">{announcementData.email}</p>
                </div>

                <Link to="/contact">
                  <motion.button
                    className="mt-4 w-full bg-[#4081DE] hover:bg-[#3967a9] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 top-40 -right-20 w-72 h-72 bg-amber-50 rounded-full opacity-60"></div>
      <div className="absolute -z-10 bottom-40 -left-20 w-60 h-60 bg-blue-50 rounded-full opacity-70"></div>
    </section>
  );
} 
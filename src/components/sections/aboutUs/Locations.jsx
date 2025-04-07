import { useState, useRef } from "react";
import { motion } from "framer-motion";
// import Image from "next/image"; // Removed next/image import
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";

// Locations data
const campusData = {
  name: "Nashville",
  address: "123 Education Avenue, Nashville, TN 37203",
  phone: "+1 (615) 555-1234",
  email: "nashville@stellariseducation.com",
  website: "nashville.stellariseducation.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206156.15845842287!2d-87.03998905729805!3d36.18812730828452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2s!4v1659632984562!5m2!1sen!2s",
  description: "Our Nashville campus is nestled in a serene, tree-lined neighborhood, providing the perfect environment for young minds to flourish. The campus features spacious, light-filled classrooms designed specifically for our inquiry-based learning approach and language immersion program.",
  features: [
    "10 acres of beautiful grounds with modern facilities",
    "State-of-the-art classrooms with cutting-edge educational technology",
    "Dedicated language immersion spaces",
    "Natural playgrounds promoting outdoor exploration",
    "Multi-purpose activity center for community events",
    "Sustainable gardens managed by students"
  ],
  images: [
    {
      src: "/campus-main.jpg",
      alt: "Main entrance to Stellaris Education Nashville campus"
    },
    {
      src: "/campus-classroom.jpg",
      alt: "Modern classroom with interactive learning spaces"
    },
    {
      src: "/campus-playground.jpg",
      alt: "Natural playground with adventure elements"
    },
    {
      src: "/campus-garden.jpg",
      alt: "Student-managed sustainable garden"
    }
  ]
};

export default function Locations() {
  const titleRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <MaxWidthWrapper>
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Our Campus</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Where Learning Comes to Life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Campus Images Carousel */}
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-xl relative aspect-[4/3]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full">
              {campusData.images.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="w-full h-full bg-blue-100 animate-pulse"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={() => setActiveImage(prev => prev === 0 ? campusData.images.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setActiveImage(prev => (prev + 1) % campusData.images.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {campusData.images.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeImage === index ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Campus Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6 border-l-4 border-amber-400 pl-3">
                {campusData.name} Campus
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {campusData.description}
              </p>
              
              <h4 className="text-lg font-semibold text-indigo-900 mb-4">Campus Features</h4>
              <ul className="space-y-2 mb-8">
                {campusData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3 border-t border-gray-100 pt-6">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#3967a9] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{campusData.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#3967a9] flex-shrink-0" />
                  <p className="text-gray-600">{campusData.phone}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#3967a9] flex-shrink-0" />
                  <p className="text-gray-600">{campusData.email}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div 
          className="mt-16 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">Location</h3>
          <div className="relative h-96 w-full">
            <iframe 
              src={campusData.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Map showing Stellaris Education Nashville Campus location"
            ></iframe>
          </div>
        </motion.div>
      </MaxWidthWrapper>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 top-40 -right-20 w-72 h-72 bg-amber-50 rounded-full opacity-60"></div>
      <div className="absolute -z-10 bottom-40 -left-20 w-60 h-60 bg-blue-50 rounded-full opacity-70"></div>
    </section>
  );
} 
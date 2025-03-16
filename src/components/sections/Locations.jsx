import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

// Locations data
const locations = [
  {
    id: 1,
    name: "Nashville",
    address: "123 Education Avenue, Nashville, TN 37203",
    phone: "+1 (615) 555-1234",
    email: "nashville@stellariseducation.com",
    website: "nashville.stellariseducation.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206156.15845842287!2d-87.03998905729805!3d36.18812730828452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2s!4v1659632984562!5m2!1sen!2s",
    images: [
      "/images/locations/nashville-1.jpg",
      "/images/locations/nashville-2.jpg",
      "/images/locations/nashville-3.jpg",
    ]
  }
];

export default function Locations() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  
  const isInView = useInView(titleRef, { once: false, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: false, amount: 0.3 });
  
  // Default to first location
  const location = locations[0];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Global Presence
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Location Details */}
          <motion.div 
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative h-64 w-full">
              {/* Embedded Google Map */}
              <iframe 
                src={location.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{location.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#3967a9] mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{location.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#3967a9] flex-shrink-0" />
                  <p className="text-gray-600">{location.phone}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#3967a9] flex-shrink-0" />
                  <p className="text-gray-600">{location.email}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-[#3967a9] flex-shrink-0" />
                  <p className="text-gray-600">{location.website}</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Campus Images</h4>
              <div className="grid grid-cols-3 gap-2">
                {location.images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-[#e0e8f5] animate-pulse"></div>
                    {/* <Image src={image} alt={`${location.name} campus ${index+1}`} fill className="object-cover" /> */}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
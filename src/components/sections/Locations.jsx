import { useState, useRef } from "react";
import { motion } from "framer-motion";
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
  
  // Default to first location
  const location = locations[0];
  
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Locations</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Our Global Presence
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Location Details */}
          <div 
            ref={contentRef}
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
              <h3 className="text-2xl font-bold text-indigo-900 mb-4 border-l-4 border-amber-400 pl-3">{location.name}</h3>
              
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
              
              <h4 className="text-lg font-semibold text-indigo-900 mb-3 border-l-4 border-amber-400 pl-3">Campus Images</h4>
              <div className="grid grid-cols-3 gap-2">
                {location.images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-amber-100 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
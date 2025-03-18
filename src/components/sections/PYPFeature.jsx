import React from 'react';
import { FaBookReader, FaGlobeAmericas, FaSearch, FaPuzzlePiece, FaSeedling } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PYPFeature = () => {
  const features = [
    {
      id: 1,
      title: "Inquiry-based learning",
      description: "Encourages curiosity and critical thinking through exploration",
      icon: FaBookReader,
    },
    {
      id: 2,
      title: "Transdisciplinary themes",
      description: "Connects learning across different subject areas",
      icon: FaGlobeAmericas,
    },
    {
      id: 3,
      title: "Global Perspectives",
      description: "Develops international-mindedness and cultural awareness",
      icon: FaSearch,
    },
    {
      id: 4,
      title: "Student Agency",
      description: "Empowers children with voice and choice in their learning",
      icon: FaPuzzlePiece,
    },
    {
      id: 5,
      title: "Holistic Assessment",
      description: "Focuses on the whole child's development and growth",
      icon: FaSeedling,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4081DE]">PYP Framework</h2>
        <motion.div 
          className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
        The International Baccalaureate Primary Years Programme (PYP) is a curriculum framework designed for students aged 3-12. At Stellaris, we implement this framework for our Pre-K students ages 3-5, focusing on:
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 - Large Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:col-span-2 row-span-1 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#4081DE]/20">
          <div className="text-[#4081DE] mb-4 group-hover:scale-110 transition-transform duration-300">
            {React.createElement(features[0].icon, { size: 40 })}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[#303444]">{features[0].title}</h3>
          <p className="text-gray-600">{features[0].description}</p>
        </div>

        {/* Feature 2 - Tall Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:row-span-2 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#3967a9]/20">
          <div className="text-[#4081DE] mb-4 group-hover:scale-110 transition-transform duration-300">
            {React.createElement(features[1].icon, { size: 40 })}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[#303444]">{features[1].title}</h3>
          <p className="text-gray-600">{features[1].description}</p>
        </div>

        {/* Feature 3 - Medium Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#3967a9]/20">
          <div className="text-[#4081DE] mb-4 group-hover:scale-110 transition-transform duration-300">
            {React.createElement(features[2].icon, { size: 40 })}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[#303444]">{features[2].title}</h3>
          <p className="text-gray-600">{features[2].description}</p>
        </div>

        {/* Feature 4 - Medium Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#3967a9]/20">
          <div className="text-[#4081DE] mb-4 group-hover:scale-110 transition-transform duration-300">
            {React.createElement(features[3].icon, { size: 40 })}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[#303444]">{features[3].title}</h3>
          <p className="text-gray-600">{features[3].description}</p>
        </div>

        {/* Feature 5 - Wide Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:col-span-3 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#3967a9]/20">
          <div className="text-[#4081DE] mb-4 group-hover:scale-110 transition-transform duration-300">
            {React.createElement(features[4].icon, { size: 40 })}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[#303444]">{features[4].title}</h3>
          <p className="text-gray-600">{features[4].description}</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/phI-H9-cDVc"
              title="International Baccalaureate Primary Years Programme"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-lg">Learn more about the IB Primary Years Programme</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PYPFeature;

import { motion } from 'framer-motion';
// import Image from 'next/image'; // Removed next/image import
import { useState } from 'react';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper'; // Updated import path

export const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState('arts');
  
  const programs = {
    arts: {
      title: "Arts & Creativity",
      description: "Students explore visual arts, music, theater, and dance through hands-on projects and performances that build creativity and self-expression.",
      image: "/images/after-school-arts.jpg",
      activities: ["Drawing & Painting", "Music Lessons", "Drama Club", "Dance Classes", "Crafting & DIY Projects"]
    },
    stem: {
      title: "STEM Discovery",
      description: "Young scientists and engineers develop critical thinking and problem-solving skills through engaging experiments, coding, and design challenges.",
      image: "/images/after-school-stem.jpg",
      activities: ["Coding Club", "Robotics", "Science Experiments", "Math Enrichment", "Engineering Challenges"]
    },
    languages: {
      title: "Language & Culture",
      description: "Building on our immersion approach, students deepen their language skills while exploring global cultures through games, stories, and traditions.",
      image: "/images/after-school-language.jpg",
      activities: ["Spanish Conversation", "Cultural Celebrations", "Storytelling", "Global Games", "Cooking Classes"]
    },
    physical: {
      title: "Physical Activity",
      description: "Active play and organized sports help students develop coordination, teamwork, and healthy habits while burning energy after the school day.",
      image: "/images/after-school-sports.jpg",
      activities: ["Team Sports", "Yoga & Mindfulness", "Outdoor Adventures", "Dance & Movement", "Playground Games"]
    }
  };

  return (
    <section className="py-16">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3967a9]">
            Enrichment Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse after-school activities are designed to engage, inspire, and develop well-rounded students
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {Object.keys(programs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                activeTab === key 
                  ? 'bg-[#3967a9] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {programs[key].title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
            <img /* Use img tag */
              src={programs[activeTab].image}
              alt={programs[activeTab].title}
              className="absolute inset-0 w-full h-full object-cover" /* Updated className */
              loading="lazy"
            />
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#3967a9]">
              {programs[activeTab].title}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {programs[activeTab].description}
            </p>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Activities Include:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {programs[activeTab].activities.map((activity, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#3967a9]"></div>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}; 
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

// Dummy timeline data - replace with actual content
const journeyEvents = [
  {
    id: 1,
    year: "2010",
    title: "Stellaris Founded",
    description: "The beginning of our journey to transform education.",
    image: "/images/timeline/founding.jpg",
  },
  {
    id: 2,
    year: "2013",
    title: "First Campus",
    description: "Opening our first educational campus.",
    image: "/images/timeline/campus.jpg",
  },
  {
    id: 3,
    year: "2015",
    title: "International Expansion",
    description: "Taking our educational philosophy worldwide.",
    image: "/images/timeline/international.jpg",
  },
  {
    id: 4,
    year: "2018",
    title: "Digital Transformation",
    description: "Embracing technology for enhanced learning experiences.",
    image: "/images/timeline/digital.jpg",
  },
  {
    id: 5,
    year: "2023",
    title: "Future Vision",
    description: "Setting new standards in global education.",
    image: "/images/timeline/future.jpg",
  },
];

// Magellan story items
const magellanStory = [
  {
    id: 1,
    quote: "Education is not the filling of a pail, but the lighting of a fire.",
    image: "/images/magellan/explorer.jpg",
    description: "Our philosophy is inspired by the spirit of exploration."
  },
  {
    id: 2,
    quote: "The journey of discovery begins with curiosity.",
    image: "/images/magellan/discovery.jpg",
    description: "We nurture curiosity as the foundation of learning."
  },
  {
    id: 3,
    quote: "True education prepares you for the voyage of life.",
    image: "/images/magellan/voyage.jpg",
    description: "Our curriculum is designed to prepare students for life's journey."
  }
];

export default function Journey() {
  const [activeEvent, setActiveEvent] = useState(1);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const storyRef = useRef(null);
  const historyRef = useRef(null);
  
  const isInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isStoryInView = useInView(storyRef, { once: false, amount: 0.3 });
  const isHistoryInView = useInView(historyRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });

  const storyOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const storyY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Voyage Through Knowledge
          </p>
        </motion.div>

        {/* History Section - New Design */}
        <div className="mb-24" ref={historyRef}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">History</h3>
          
          <div className="relative max-w-5xl mx-auto">
            {journeyEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isHistoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                    <div className="absolute inset-0 bg-blue-100 animate-pulse"></div>
                    {/* Replace with actual image */}
                    {/* <Image src={event.image} alt={event.title} fill className="object-cover" /> */}
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full font-bold">
                      {event.year}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className={`p-6 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl ${
                    index % 2 === 0 ? 'md:-ml-8' : 'md:-mr-8'
                  }`}>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h4>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <motion.button 
                      className="flex items-center text-blue-600 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Learn more <FaArrowRight className="ml-2" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Magellan Story Section */}
        <motion.div 
          ref={storyRef}
          className="relative py-12"
          style={{ opacity: storyOpacity, y: storyY }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-10 text-center">The Magellan Story</h3>
          
          <div className="max-w-4xl mx-auto">
            {magellanStory.map((item, index) => (
              <motion.div 
                key={item.id}
                className="flex flex-col md:flex-row items-center mb-16 gap-8"
                initial={{ opacity: 0, y: 50 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`relative w-64 h-64 rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="absolute inset-0 bg-blue-100 animate-pulse"></div>
                  {/* Replace with actual images */}
                  {/* <Image src={item.image} alt="" fill className="object-cover" /> */}
                </div>
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                  <blockquote className="text-xl italic font-medium text-gray-700 mb-4">
                    "{item.quote}"
                  </blockquote>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
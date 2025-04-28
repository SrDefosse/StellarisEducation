import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

const timelineData = [
  {
    year: "2009",
    title: "Magellan Foundation",
    description: "The Magellan International School was founded by Erin Defossé and his team with a vision to create a truly bilingual and multicultural learning environment. Starting with just a handful of students, the school established its foundation on the principles of inquiry-based learning and global citizenship.",
    image: "https://cdn.stellariseducation.com/foundation.jpg"
  },
  {
    year: "2014",
    title: "Middle Years Program",
    description: "The Middle Years Program was inaugurated as a natural progression of our educational journey. This expansion allowed Magellan to extend our innovative bilingual curriculum to older students, fostering critical thinking and international mindedness through the IB framework.",
    image: "https://cdn.stellariseducation.com/middle_years.jpg"
  },
  {
    year: "2024",
    title: "Campus Extension to High School",
    description: "A significant milestone in Magellan’s growth, the forever home project. This expansion includes state-of-the-art facilities designed to support advanced learning programs and accommodate Magellan’s growing community.",
    image: "https://cdn.stellariseducation.com/campus_expansion.jpg"
  },
  {
    year: "2025",
    title: "Stellaris Foundation",
    description: "Looking to expand the founder’s vision of accessible quality education, Stellaris emerges as a beacon of innovative early education. Building upon years of experience in bilingual education, we're creating new opportunities for young learners to thrive in a global context.",
    image: "https://cdn.stellariseducation.com/stellaris_journey.jpg"
  }
];

const TimelineItem = ({ item, index }) => {
  return (
    <div className="timeline-item">
      {/* Desktop Layout */}
      <div className="hidden md:block relative py-20">
        <div className={`flex items-center gap-20 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
          {/* Image Side */}
          <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Central Timeline Element */}
          <div className="w-2/12 flex justify-center relative">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-10 border-4 border-blue-500">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className={`w-5/12 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
            <div className={`space-y-4 ${index % 2 === 0 ? "pl-6" : "pr-6"}`}>
              <div className={`inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white text-2xl font-bold px-5 py-2 rounded-lg shadow-md ${index % 2 === 0 ? "" : "ml-auto"}`}>
                {item.year}
              </div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden py-16 px-4">
        <div className="flex">
          {/* Left side timeline */}
          <div className="w-1/5 flex flex-col items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10 border-4 border-blue-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="w-4/5 pl-4">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xl font-bold px-4 py-2 rounded-lg shadow-md mb-4">
              {item.year}
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="py-16 mt-20 md:py-24" ref={containerRef}>
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Our Journey</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Discover how Stellaris Education has evolved to become a leader in innovative early education
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-gray-200 h-full transform -translate-x-1/2" />
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 w-1 bg-amber-400 h-full transform -translate-x-1/2"
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
          />
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-[10%] top-0 w-1 bg-gray-200 h-full" />
          <motion.div
            className="md:hidden absolute left-[10%] top-0 w-1 bg-amber-400 h-full" 
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
          />
          
          {/* Timeline Items */}
          <div className="relative z-10">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Journey;

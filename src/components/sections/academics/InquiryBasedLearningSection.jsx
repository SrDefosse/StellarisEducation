import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import useMeasure from 'react-use-measure';

export function InquiryBasedLearningSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [ref, bounds] = useMeasure();
  
  const inquirySteps = [
    { title: "Exploring and Questioning", content: "Exploring, wondering, and questioning" },
    { title: "Experimenting", content: "Experimenting and playing with possibilities" },
    { title: "Making Connections", content: "Making connections between previous learning and current experiences" },
    { title: "Predicting", content: "Making predictions and acting purposefully to see what happens" },
    { title: "Collecting Data", content: "Collecting data and reporting findings" },
    { title: "Clarifying Ideas", content: "Clarifying existing ideas and reappraising perceptions of events" },
    { title: "Deepening Understanding", content: "Deepening understanding through the application of a concept" },
    { title: "Research", content: "Researching and seeking information" },
    { title: "Taking Position", content: "Taking and defending a position" },
    { title: "Problem Solving", content: "Solving problems in a variety of ways" },
  ];

  return (
    <section id="inquiry-based-learning" className="relative">
      <div className="absolute -top-24" id="inquiry-based"></div>

      {/* Hexagon background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 17.32v34.64L30 60 0 51.96V17.32L30 0zm0 12l-18 10.392v20.785L30 48l18-10.392V27.608L30 12z\' fill=\'%236366F1\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}/>
      </div>

      {/* Heading */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-2 text-[#4081DE]">
          Inquiry Based Learning
        </h2>
        <motion.div 
          className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left side - Description */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-700 mb-6 leading-relaxed">
            Inquiry-based learning prioritizes problems that require critical and creative thinking so students can develop their abilities to ask questions, design investigations, interpret evidence, form explanations and arguments, and communicate findings.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At the heart of the PYP is a commitment to structured, purposeful inquiry as the leading vehicle for learning. Through the inquiry process, students actively construct meaning by:
          </p>
          <div className="border-l-4 border-amber-400 pl-4 py-2 bg-amber-50 rounded-r-lg mb-6">
            <p className="text-gray-700 italic">
              This approach develops students who are active, lifelong learners with the skills and dispositions needed to tackle complex problems and contribute positively to the world around them.
            </p>
          </div>
        </motion.div>

        {/* Right side - Video */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-full relative" style={{ paddingBottom: "56.25%" }}> {/* 16:9 Aspect Ratio */}
            <iframe 
              src="https://player.vimeo.com/video/358043187?h=ff4db7533d" 
              title="Inquiry Based Learning"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Interactive steps carousel */}
      <motion.div
        className="p-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-8 text-[#4081DE]">
          The Inquiry Process
        </h3>
        
        <div className="relative" ref={ref}>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-indigo-200 transform -translate-x-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {inquirySteps.map((step, index) => (
              <motion.div
                key={index}
                className={`${
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'
                } relative cursor-pointer`}
                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index
                }}
              >
                <motion.div 
                  className={`absolute top-1/2 ${
                    index % 2 === 0 ? 'right-0 md:translate-x-1/2' : 'left-0 md:-translate-x-1/2'
                  } transform -translate-y-1/2 w-6 h-6 rounded-full z-20 ${
                    selectedIndex === index ? 'bg-amber-400' : 'bg-[#4081DE]'
                  }`}
                  animate={{ 
                    scale: selectedIndex === index ? [1, 1.2, 1] : 1
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: selectedIndex === index ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                />
                
                <div 
                  className={`bg-white p-6 rounded-xl shadow ${
                    selectedIndex === index ? 'ring-2 ring-amber-400' : ''
                  }`}
                >
                  <h4 className="font-semibold text-lg text-[#4081DE] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSearch, FaVideo, FaCheckCircle, FaPlane, FaGraduationCap } from 'react-icons/fa';

export function RecruitmentProcessSection() {
  const [activeStep, setActiveStep] = useState(1);
  
  const recruitmentSteps = [
    {
      id: 1,
      title: "Global Talent Search",
      description: "We actively recruit from top education programs worldwide, seeking multilingual educators with experience in international curriculum frameworks.",
      icon: <FaSearch className="text-white text-xl" />,
      details: "Our talent acquisition team builds relationships with leading education programs across the globe, participating in international education job fairs and maintaining a network of school partnerships. We specifically look for educators with experience in multilingual environments who share our passion for innovative early childhood education."
    },
    {
      id: 2,
      title: "Comprehensive Screening",
      description: "Candidates undergo a rigorous selection process including teaching demonstrations, language proficiency assessments, and background checks.",
      icon: <FaVideo className="text-white text-xl" />,
      details: "Our selection process includes multiple interviews with leadership team members, virtual classroom observations, and thorough background checks. We evaluate candidates not only for their teaching skills and language proficiency but also for their cultural fit with our school's values and commitment to student-centered learning environments."
    },
    {
      id: 3,
      title: "Professional Development",
      description: "Selected educators receive specialized training in our dual-language immersion approach and International Baccalaureate methodologies.",
      icon: <FaGraduationCap className="text-white text-xl" />,
      details: "Before beginning in the classroom, our teachers participate in a comprehensive onboarding program that includes training in our dual-language immersion model, the IB Primary Years Programme framework, and culturally responsive teaching practices. This professional development continues throughout their time at Stellaris with regular workshops and collaboration opportunities."
    },
    {
      id: 4,
      title: "Relocation Support",
      description: "We provide comprehensive support for international educators including visa assistance, housing guidance, and cultural adaptation resources.",
      icon: <FaPlane className="text-white text-xl" />,
      details: "Our dedicated HR team assists international teachers with visa applications, travel arrangements, and finding suitable housing. We also provide cultural orientation sessions, community introductions, and ongoing support to ensure a smooth transition to their new home."
    },
    {
      id: 5,
      title: "Continuous Mentorship",
      description: "New teachers are paired with experienced mentors who provide guidance, classroom support, and help integrating into our school community.",
      icon: <FaCheckCircle className="text-white text-xl" />,
      details: "Our mentorship program pairs new international teachers with experienced staff members who provide regular classroom support, professional guidance, and help with cultural integration. This relationship continues throughout their first year, with structured check-ins and collaborative planning sessions to ensure their success."
    }
  ];

  return (
    <section id="recruitment-process" className="relative mb-24">
      <div className="absolute -top-24" id="recruitment"></div>
      
      {/* Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">
          How We Recruit
        </h2>
        <div className="h-1 w-32 bg-amber-400 rounded-full mx-auto mb-6" />
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Our comprehensive recruitment process ensures we find exceptional international 
          educators who will thrive in our unique educational environment.
        </p>
      </motion.div>
      
      {/* Interactive Timeline */}
      <div className="mb-16">
        <div className="hidden md:flex justify-between items-center mb-8 relative">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 h-1 bg-blue-200 top-1/2 transform -translate-y-1/2 z-0"></div>
          
          {/* Timeline Steps */}
          {recruitmentSteps.map((step) => (
            <motion.div 
              key={step.id}
              className={`w-14 h-14 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-300 ${
                activeStep === step.id ? 'bg-blue-600 scale-110 shadow-lg' : 'bg-blue-300 hover:bg-blue-400'
              }`}
              onClick={() => setActiveStep(step.id)}
              whileHover={{ scale: 1.1 }}
            >
              {step.icon}
              <span className="absolute -bottom-8 text-sm font-medium text-blue-900 whitespace-nowrap">
                Step {step.id}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Steps Selector */}
        <div className="flex md:hidden space-x-2 mb-6 overflow-x-auto pb-2">
          {recruitmentSteps.map((step) => (
            <button
              key={step.id}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                activeStep === step.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-800'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              Step {step.id}
            </button>
          ))}
        </div>
        
        {/* Step Content */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {recruitmentSteps.map((step) => (
            step.id === activeStep && (
              <div key={step.id}>
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">{step.title}</h3>
                </div>
                <p className="text-gray-700 text-lg mb-6">{step.description}</p>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-medium text-blue-800 mb-2">Process Details:</h4>
                  <p className="text-gray-700">{step.details}</p>
                </div>
              </div>
            )
          ))}
        </motion.div>
      </div>
      
      {/* Call to Action */}
      <motion.div
        className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Global Teaching Team</h3>
          <p className="text-blue-100 mb-8">
            We're always looking for passionate international educators to join our innovative school community.
          </p>
          <motion.button
            className="bg-white text-blue-800 px-8 py-3 rounded-full font-medium hover:bg-amber-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Current Openings
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
} 
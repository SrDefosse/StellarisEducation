import { motion } from 'framer-motion';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

const ExperienceStellaris = () => {
  return (
    <div className="py-16 md:py-24">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4081DE] mb-4">Experience Stellaris</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">A day in the life of a student at Stellaris</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
            <img 
              src="/experience_stellaris.jpg" 
              alt="Experience Stellaris"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Description */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold text-indigo-900">Morning to Afternoon: A Journey Through Learning</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-amber-400">
                <h4 className="font-bold text-lg text-amber-500 mb-2">Morning Arrival</h4>
                <p className="text-gray-700">Students are greeted by our international faculty in both English and Spanish, starting the day with a warm welcome and setting the tone for bilingual immersion.</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[#4081DE]">
                <h4 className="font-bold text-lg text-[#4081DE] mb-2">Inquiry-Based Learning</h4>
                <p className="text-gray-700">Classes engage in IB framework activities where students take ownership of their learning through exploration and collaborative projects.</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-amber-400">
                <h4 className="font-bold text-lg text-amber-500 mb-2">Cultural Exchange</h4>
                <p className="text-gray-700">Throughout the day, students experience global perspectives and cultural elements naturally integrated into their educational journey.</p>
              </div>
            </div>
            
            <motion.div 
              className="mt-4 text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href="/contact" className="text-[#4081DE] font-medium flex items-center justify-end gap-2 group">
                <span>Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ExperienceStellaris; 
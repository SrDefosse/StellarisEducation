import { motion } from 'framer-motion';
import Link from 'next/link';

export const EnrollmentCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-[#3967a9] to-[#4081DE] rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="px-6 py-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Enroll?
              </h2>
              <p className="text-xl text-white/90 mb-4">
                Space in our after-school program is limited to ensure quality and personalized attention. Secure your child's spot today.
              </p>
              <p className="text-lg text-white/80">
                Current Stellaris students receive priority enrollment. Non-Stellaris students may join based on availability.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link 
                href="/contact?subject=After%20School%20Enrollment" 
                className="inline-block px-8 py-4 bg-white text-[#3967a9] font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center text-lg"
              >
                Enroll Now
              </Link>
              <Link 
                href="/admissions" 
                className="inline-block px-8 py-4 bg-white/10 text-white border border-white/30 font-semibold rounded-full shadow-lg hover:bg-white/20 hover:shadow-xl transition-all duration-300 text-center text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 
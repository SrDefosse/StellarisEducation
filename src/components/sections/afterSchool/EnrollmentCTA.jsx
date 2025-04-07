import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../ui/Button';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

export const EnrollmentCTA = () => {
  return (
    <section className="py-20">
      <MaxWidthWrapper>
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
            
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 mt-6 md:mt-0">
              <Link to="/contact">
                <PrimaryButton variant="white" className="text-lg w-full sm:w-auto md:w-full">
                  Enroll Now
                </PrimaryButton>
              </Link>
              <Link to="/admissions">
                <PrimaryButton 
                  variant="default" 
                  className="text-lg w-full sm:w-auto md:w-full bg-transparent border border-white/50 text-white hover:bg-white/10 focus:ring-white/50"
                >
                  Learn More
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}; 
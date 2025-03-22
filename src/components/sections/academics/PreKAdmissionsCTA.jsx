import { motion } from 'framer-motion';
import Link from 'next/link';

export const PreKAdmissionsCTA = () => {
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
          <div className="px-6 py-12 md:p-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Join Our Pre-K Program?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Give your child the gift of early bilingualism and a strong foundation for their educational journey. Our admissions team is ready to guide you through the process.
            </p>
            <Link 
              href="/admissions" 
              className="inline-block px-8 py-4 bg-white text-[#3967a9] font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 
import { motion } from 'framer-motion';
// import Image from 'next/image'; // Removed next/image import
import MaxWidthWrapper from '../../ui/MaxWidthWrapper'; // Updated import path

export const DescriptionSection = () => {
  return (
    <section className="py-16">
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3967a9]">
              After School Enrichment Program
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg">
                Our After School Enrichment Program extends the Stellaris learning experience beyond regular school hours, providing a safe, engaging environment where students continue to thrive.
              </p>
              <p className="text-lg">
                We offer a variety of enrichment activities designed to complement our curriculum while allowing children to explore their interests in arts, sports, STEM, languages, and more.
              </p>
              <p className="text-lg">
                Led by our dedicated staff and specialist instructors, the program balances structured activities with flexible time for homework, socializing, and free play—helping children develop new skills while having fun.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <img /* Use img tag */
              src="/images/after-school.jpg"
              alt="Stellaris After School Program"
              className="absolute inset-0 w-full h-full object-cover" /* Updated className */
              loading="lazy"
            />
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}; 
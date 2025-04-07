import { motion } from 'framer-motion';
// import Image from 'next/image'; // Removed next/image import

export const PreKDescriptionSection = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3967a9]">
            Our Pre-K Program
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg">
              At Stellaris, our Pre-K program provides a foundation for lifelong learning through a playful, inquiry-based approach. Our classrooms offer a nurturing environment where children develop socially, emotionally, and academically.
            </p>
            <p className="text-lg">
              Using the International Baccalaureate framework along with language immersion, our youngest learners begin their educational journey by exploring concepts through guided play, stimulating activities, and meaningful interactions with our international faculty.
            </p>
            <p className="text-lg">
              Children are natural inquirers, and our curriculum builds on their curiosity by encouraging questions, exploration, and discovery—establishing the skills they will use throughout their academic career.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl"
        >
          <img /* Use img tag */
            src="/images/prek-classroom.jpg"
            alt="Stellaris Pre-K Classroom"
            className="absolute inset-0 w-full h-full object-cover" /* Updated className */
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}; 
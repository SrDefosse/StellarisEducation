import { motion } from 'framer-motion';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';
// import Image from 'next/image'; // Removed next/image import

const OurStory = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">Our Story</h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            The journey that led to Stellaris Education
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img /* Use img tag */
              src="/school-building.jpg"
              alt="Stellaris Education Building"
              className="absolute inset-0 w-full h-full object-cover" /* Updated className for img */
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
          </motion.div>

          {/* Text Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-400"
            >
              <h3 className="text-2xl font-semibold text-amber-500 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                Stellaris Education was born from a vision to create an innovative early education environment where children could thrive in a truly bilingual and multicultural setting. We believed that the early years were crucial for developing global citizens of tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#4081DE]"
            >
              <h3 className="text-2xl font-semibold text-[#4081DE] mb-3">Our Mission</h3>
              <p className="text-gray-700">
                Today, we continue our mission of providing exceptional early education through our unique combination of Spanish immersion and the IB framework. We're committed to nurturing curious minds, fostering cultural understanding, and building strong foundations for lifelong learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-400"
            >
              <h3 className="text-2xl font-semibold text-amber-500 mb-3">Looking Forward</h3>
              <p className="text-gray-700">
                As we grow, we remain dedicated to our founding principles while continuously evolving our programs to meet the changing needs of our community. Our story is still being written, with each student adding their own unique chapter to our journey.
              </p>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Decorative Elements */}
      <div className="absolute -z-10 top-1/4 -right-16 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute -z-10 bottom-1/4 -left-16 w-40 h-40 bg-amber-100 rounded-full opacity-40"></div>
    </section>
  );
};

export default OurStory;

import { motion } from 'framer-motion';

export function PYPSection() {
  return (
    <section id="pyp" className="relative">
      <div className="absolute -top-24" id="what-is-pyp"></div>
      
      {/* Heading with animated underline */}
      <motion.div 
        className="mb-12 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-2 text-indigo-800">
          What is the IB Primary Years Programme?
        </h2>
        <motion.div 
          className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
        {/* Content */}
        <motion.div 
          className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-700 mb-4 leading-relaxed">
            The International Baccalaureate (IB) Primary Years Programme (PYP) is a curriculum framework designed for students aged 3 to 12. It focuses on the development of the whole child as an inquirer, both in the classroom and in the world outside.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The PYP offers a transdisciplinary, inquiry-based approach to learning that is engaging, relevant, challenging, and significant. It is built on the belief that students learn best when the learning is authentic and connected to the world around them.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Stellaris, we implement the PYP with fidelity while integrating our language immersion approach to create a truly unique educational experience for children ages 3-5.
          </p>
        </motion.div>
        
        {/* Video */}
        <motion.div 
          className="lg:col-span-2 relative overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-full relative" style={{ paddingBottom: "56.25%" }}> {/* 16:9 Aspect Ratio */}
            <iframe 
              src="https://www.youtube.com/embed/nPUMwr4-y6o" 
              title="What is the IB Primary Years Programme?"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-semibold text-xl">Explore the PYP</h3>
            <p className="text-sm text-white/90">International Baccalaureate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
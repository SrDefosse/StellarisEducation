import { motion } from 'framer-motion';

export default function IbHero() {
  return (
    <div className="relative h-screen">
      <div className="relative w-full h-full overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/hero-ib.mp4" type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#303444',
            opacity: '0.7',
          }}
        />
        <motion.div 
          className="relative z-20 h-full flex items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              International Baccalaureate
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover our transformative approach to education through the IB Primary Years Programme
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

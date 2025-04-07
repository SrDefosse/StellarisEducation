import MaxWidthWrapper from '../../ui/MaxWidthWrapper';
import { motion } from 'framer-motion';

export function VideoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-[#4081DE]">
            See Our School in Action
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Watch how our multicultural environment and innovative teaching methods come together to create an exceptional learning experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D9376458575781322&show_text=false"
              className="absolute top-0 left-0 w-full h-full"
              style={{ 
                border: 'none',
                borderRadius: '1rem',
                backgroundColor: '#000'
              }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
} 
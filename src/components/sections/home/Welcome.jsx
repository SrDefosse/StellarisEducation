// import Image from 'next/image'; // Removed next/image import
import { PrimaryButton, SecondaryButton } from '../../ui/Button';
import { motion } from 'framer-motion';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <MaxWidthWrapper>
        {/* Content grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
          {/* Content Card - spans 6 columns on desktop */}
          <div className="lg:col-span-6 lg:pr-6 h-full">
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
              {/* Heading with amber underline */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4081DE] mb-4">Welcome to Stellaris</h2>
                <motion.div 
                  className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
              
              <div className="space-y-4 text-gray-700 flex-grow">
                <p className="text-base md:text-lg leading-relaxed">
                At Stellaris, we believe in nurturing curious minds and fostering a love for learning from an early age. Our innovative Pre-K programs for children ages 3-5 combine the International Baccalaureate framework with language immersion to create a truly exceptional educational experience.
                </p>
                
                <div className="border-l-4 border-amber-400 pl-4 py-2 bg-amber-50 rounded-r-lg">
                  <p className="text-base md:text-lg leading-relaxed">
                  Our mission is to light the path of dreams by creating exceptional educational environments that champion humanity and inspire students to become skilled, curious, and compassionate risk takers that act with purpose to create a better world.
                  </p>
                </div>
                
                <div className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2"></span>
                      <span>IB Primary Years Programme curriculum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2"></span>
                      <span>Full language immersion in Spanish</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2"></span>
                      <span>International faculty from around the world</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2"></span>
                      <span>Extended day programs and enrichment activities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 pt-6 mt-auto">
                <Link to="/contact">
                  <PrimaryButton className="w-full">Contact Us</PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Image section - spans 6 columns on desktop */}
          <div className="lg:col-span-6">
            {/* Desktop view (collage) */}
            <div className="hidden lg:grid grid-cols-2 gap-4 h-full">
              {/* Main large image */}
              <div className="relative col-span-2 h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <img /* Use img tag */
                  src="/StellarisWelcome.jpg"
                  alt="Stellaris Education Main"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" /* Updated className */
                  loading="lazy" /* Added loading lazy */
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              {/* Two smaller images in a row */}
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg">
                <img /* Use img tag */
                  src="/StellarisKids1.jpg"
                  alt="Stellaris Education Activities"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" /* Updated className */
                  loading="lazy" /* Added loading lazy */
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg">
                <img /* Use img tag */
                  src="/StellarisKids2.jpg"
                  alt="Stellaris Education Learning"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" /* Updated className */
                  loading="lazy" /* Added loading lazy */
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>

            {/* Mobile view (single image) */}
            <div className="lg:hidden relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img /* Use img tag */
                src="/StellarisWelcome.jpg"
                alt="Stellaris Education Main"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" /* Updated className */
                loading="lazy" /* Added loading lazy */
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Welcome; 
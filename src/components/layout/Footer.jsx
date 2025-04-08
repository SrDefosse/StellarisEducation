import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import StellarisLogo from '/StellarisLogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#2D3540] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <div className="relative h-16 w-48">
                <img
                  src={StellarisLogo}
                  alt="Stellaris Education Logo"
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-300">
              Transforming education for a brighter future through innovative learning approaches and dedicated mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/academics/prek" className="text-gray-300 hover:text-white transition-colors">
                Pre-K Program
              </Link>
              <Link to="/academics/ib" className="text-gray-300 hover:text-white transition-colors">
                IB Programme
              </Link>
              <Link to="/academics/languageimmersion" className="text-gray-300 hover:text-white transition-colors">
                Spanish Immersion
              </Link>
              <Link to="/afterschool" className="text-gray-300 hover:text-white transition-colors">
                After School
              </Link>
              <Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">
                Admissions
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+15129815402" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <FaPhone className="text-[#3967a9] flex-shrink-0" />
                <span>(512) 981 5402</span>
              </a>
              <a href="mailto:info@stellariseducation.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <FaEnvelope className="text-[#3967a9] flex-shrink-0" />
                <span>info@stellariseducation.com</span>
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <FaMapMarkerAlt className="text-[#3967a9] flex-shrink-0" />
                <span>Nashville, Tennessee</span>
              </a>
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-[#3967a9] transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3967a9] transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3967a9] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#3967a9] transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Stellaris Education. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

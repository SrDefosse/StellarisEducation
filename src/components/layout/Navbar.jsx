import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import StellarisLogo from '/StellarisLogo.png';

const Navbar = ({ className = '', isTransparent = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isAcademicsPage = location.pathname.startsWith('/academics');
  const isContactPage = location.pathname === '/contact';
  const isAfterSchoolPage = location.pathname === '/afterSchool';
  const shouldHaveBackground = !isTransparent || scrolled || mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAcademicsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAcademicsDropdown = () => {
    setAcademicsDropdownOpen(!academicsDropdownOpen);
  };

  const toggleMobileAcademics = () => {
    setMobileAcademicsOpen(!mobileAcademicsOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    scrollToTop();
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          shouldHaveBackground
            ? 'py-2 md:py-3 backdrop-blur-md backdrop-saturate-150 bg-[#2d3540]/85 shadow-lg shadow-[#3967a9]/10' 
            : 'py-2 md:py-3 bg-transparent'
        } ${className}`}
        style={{
          borderBottom: shouldHaveBackground ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        }}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <div className="relative h-12 w-48 sm:h-16 sm:w-56 md:h-16 md:w-60 transition-all duration-300">
              <img 
                src={StellarisLogo} 
                alt="Stellaris Education Logo"
                className="h-full w-full object-contain object-left"
              />
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 overflow-visible">
            <NavLink to="/" onClick={scrollToTop}>Home</NavLink>
            <NavLink to="/about" onClick={scrollToTop}>About Us</NavLink>
            
            {/* Academics Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleAcademicsDropdown}
                className={`text-white font-medium px-2 xl:px-3 py-2 transition-all relative group rounded-full hover:bg-white/10 text-[13px] xl:text-[15px] flex items-center whitespace-nowrap ${
                  isAcademicsPage ? 'bg-white/10' : ''
                }`}
              >
                Academics
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-1 transition-transform ${academicsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#3967a9] transition-all duration-300 ${
                  isAcademicsPage ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                }`}></span>
              </button>
              
              {academicsDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-[#303444]/95 backdrop-blur-sm rounded-md shadow-lg overflow-hidden z-20 transform origin-top-right transition-all duration-200 ease-out py-1">
                  <Link 
                    to="/academics/prek" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#3967a9]/40 transition-colors"
                    onClick={() => {
                      setAcademicsDropdownOpen(false);
                      scrollToTop();
                    }}
                  >
                    Pre-K
                  </Link>
                  <Link 
                    to="/academics/ib" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#3967a9]/40 transition-colors"
                    onClick={() => {
                      setAcademicsDropdownOpen(false);
                      scrollToTop();
                    }}
                  >
                    IB Programme
                  </Link>
                  <Link 
                    to="/academics/languageimmersion" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#3967a9]/40 transition-colors"
                    onClick={() => {
                      setAcademicsDropdownOpen(false);
                      scrollToTop();
                    }}
                  >
                    Spanish Immersion
                  </Link>
                  <Link 
                    to="/academics/internationalteachers" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#3967a9]/40 transition-colors"
                    onClick={() => {
                      setAcademicsDropdownOpen(false);
                      scrollToTop();
                    }}
                  >
                    International Teachers
                  </Link>
                </div>
              )}
            </div>
            
            <NavLink to="/afterSchool" onClick={scrollToTop}>After School Enrichment</NavLink>
            <NavLink to="/admissions" onClick={scrollToTop}>Admissions</NavLink>
            <NavLink to="https://blog.stellariseducation.com/" onClick={scrollToTop}>Blog</NavLink>
            <NavLink to="/contact" isButton onClick={scrollToTop}>Contact Us</NavLink>
          </div>
          
          <button 
            className="lg:hidden text-white focus:outline-none p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 backdrop-blur-md backdrop-saturate-150 bg-[#2d3540]/85 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
        style={{ top: '60px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 py-8">
          <MobileNavLink to="/" onClick={handleLinkClick}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={handleLinkClick}>About Us</MobileNavLink>
          
          {/* Mobile Academics Dropdown */}
          <div className="w-full flex flex-col items-center">
            <button 
              onClick={toggleMobileAcademics}
              className={`text-white text-xl font-medium transition-all flex items-center gap-2 px-4 py-2 rounded-lg ${
                isAcademicsPage ? 'bg-white/10' : ''
              }`}
            >
              <span className={`w-2 h-2 rounded-full bg-white transition-all ${isAcademicsPage ? 'w-3' : ''}`}></span>
              Academics
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ml-1 transition-transform ${mobileAcademicsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {mobileAcademicsOpen && (
              <div className="w-full flex flex-col items-center mt-2 space-y-2 py-2 px-4 bg-white/5 rounded-lg">
                <Link 
                  to="/academics/prek" 
                  className="text-white text-lg w-full text-center py-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  Pre-K Program
                </Link>
                <Link 
                  to="/academics/ib" 
                  className="text-white text-lg w-full text-center py-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  IB Programme
                </Link>
                <Link 
                  to="/academics/languageimmersion" 
                  className="text-white text-lg w-full text-center py-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  Spanish Immersion
                </Link>
                <Link 
                  to="/academics/internationalteachers" 
                  className="text-white text-lg w-full text-center py-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  International Teachers
                </Link>
              </div>
            )}
          </div>
          
          <MobileNavLink to="/afterSchool" onClick={() => setMobileMenuOpen(false)}>After School Enrichment</MobileNavLink>
          <MobileNavLink to="/admissions" onClick={() => setMobileMenuOpen(false)}>Admissions</MobileNavLink>
          <a 
            href="https://blog.stellariseducation.com/"
            className="text-white text-xl font-medium transition-all flex items-center gap-2 px-4 py-2 rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-white transition-all"></span>
            Blog
          </a>
          <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</MobileNavLink>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ to, children, isButton = false, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  if (isButton) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className="text-white font-medium px-3 xl:px-4 py-2 ml-1 xl:ml-2 rounded-full bg-[#3967a9] hover:bg-[#3967a9]/80 transition-all shadow-md hover:shadow-lg hover:shadow-[#3967a9]/20 text-[13px] xl:text-[15px] whitespace-nowrap"
      >
        {children}
      </Link>
    );
  }
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-white font-medium px-2 xl:px-3 py-2 transition-all relative group rounded-full hover:bg-white/10 text-[13px] xl:text-[15px] whitespace-nowrap ${
        isActive ? 'bg-white/10' : ''
      }`}
    >
      {children}
      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#3967a9] transition-all duration-300 ${
        isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
      }`}></span>
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`text-white text-xl font-medium transition-all flex items-center gap-2 px-4 py-2 rounded-lg ${
        isActive ? 'bg-white/10' : ''
      }`}
      onClick={onClick}
    >
      <span className={`w-2 h-2 rounded-full bg-white transition-all ${isActive ? 'w-3' : ''}`}></span>
      {children}
    </Link>
  );
};

export default Navbar; 
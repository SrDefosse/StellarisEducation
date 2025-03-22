import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const isAboutPage = router.pathname === '/about' || router.pathname === '/about/';
  const isAcademicsPage = router.pathname.startsWith('/academics');
  const isContactPage = router.pathname === '/contact' || router.pathname === '/contact/';
  const isAfterSchoolPage = router.pathname === '/afterSchool' || router.pathname === '/afterSchool/';
  const shouldHaveBackground = scrolled || isAboutPage || isAcademicsPage || isContactPage || isAfterSchoolPage;

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

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          shouldHaveBackground
            ? 'py-2 md:py-3 backdrop-blur-md backdrop-saturate-150 shadow-lg shadow-[#3967a9]/10' 
            : 'py-2 md:py-3'
        }`}
        style={{
          backgroundColor: shouldHaveBackground ? 'rgba(45, 53, 64, 0.85)' : 'transparent',
          borderBottom: shouldHaveBackground ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        }}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48 sm:h-16 sm:w-56 md:h-16 md:w-60 transition-all duration-300">
              <Image 
                src="/StellarisLogo.png" 
                alt="Stellaris Education Logo"
                fill
                priority
                sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, 15rem"
                className="object-contain object-left"
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            
            {/* Academics Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleAcademicsDropdown}
                className={`text-white font-medium px-3 py-2 transition-all relative group rounded-full hover:bg-white/10 text-sm sm:text-base flex items-center ${
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
                    href="/academics/prek" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#3967a9]/40 transition-colors"
                    onClick={() => setAcademicsDropdownOpen(false)}
                  >
                    Pre-K
                  </Link>
                  <Link 
                    href="/academics/ib" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#3967a9]/40 transition-colors"
                    onClick={() => setAcademicsDropdownOpen(false)}
                  >
                    IB Programme
                  </Link>
                  <Link 
                    href="/academics/languageimmersion" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#3967a9]/40 transition-colors"
                    onClick={() => setAcademicsDropdownOpen(false)}
                  >
                    Spanish Immersion
                  </Link>
                  <Link 
                    href="/academics/internationalteachers" 
                    className="block px-4 py-2 text-sm text-white hover:bg-[#3967a9]/40 transition-colors"
                    onClick={() => setAcademicsDropdownOpen(false)}
                  >
                    International Teachers
                  </Link>
                </div>
              )}
            </div>
            
            <NavLink href="/afterSchool">After School Enrichment</NavLink>
            <NavLink href="/admissions">Admissions</NavLink>
            <NavLink href="/contact" isButton>Contact Us</NavLink>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none p-2"
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
        className={`fixed inset-0 z-40 bg-gradient-to-b from-[#303444] to-[#3967a9] transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 py-8">
          <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileNavLink>
          
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
                  href="/academics/prek" 
                  className="text-white text-lg w-full text-center py-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pre-K Program
                </Link>
                <Link 
                  href="/academics/ib" 
                  className="text-white text-lg w-full text-center py-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  IB Programme
                </Link>
                <Link 
                  href="/academics/languageimmersion" 
                  className="text-white text-lg w-full text-center py-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Spanish Immersion
                </Link>
                <Link 
                  href="/academics/internationalteachers" 
                  className="text-white text-lg w-full text-center py-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  International Teachers
                </Link>
              </div>
            )}
          </div>
          
          <MobileNavLink href="/afterSchool" onClick={() => setMobileMenuOpen(false)}>After School Enrichment</MobileNavLink>
          <MobileNavLink href="/admissions" onClick={() => setMobileMenuOpen(false)}>Admissions</MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</MobileNavLink>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ href, children, isButton = false }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  
  if (isButton) {
    return (
      <Link 
        href={href} 
        className="text-white font-medium px-4 py-2 ml-2 rounded-full bg-[#3967a9] hover:bg-[#3967a9]/80 transition-all shadow-md hover:shadow-lg hover:shadow-[#3967a9]/20"
      >
        {children}
      </Link>
    );
  }
  
  return (
    <Link 
      href={href} 
      className={`text-white font-medium px-3 py-2 transition-all relative group rounded-full hover:bg-white/10 text-sm sm:text-base ${
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

const MobileNavLink = ({ href, children, onClick }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  
  return (
    <Link 
      href={href} 
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
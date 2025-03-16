import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const isAboutPage = router.pathname === '/about' || router.pathname === '/about/';

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isAboutPage
            ? 'py-2 md:py-3 backdrop-blur-md backdrop-saturate-150 shadow-lg shadow-[#3967a9]/10' 
            : 'py-2 md:py-3'
        }`}
        style={{
          backgroundColor: scrolled || isAboutPage ? 'rgba(48, 52, 68, 0.85)' : 'transparent',
          borderBottom: scrolled || isAboutPage ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
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
            <NavLink href="/academics">Academics</NavLink>
            <NavLink href="/after-school-care">After School Care</NavLink>
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
          <MobileNavLink href="/academics" onClick={() => setMobileMenuOpen(false)}>Academics</MobileNavLink>
          <MobileNavLink href="/after-school-care" onClick={() => setMobileMenuOpen(false)}>After School Care</MobileNavLink>
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
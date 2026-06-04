import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-navy-950/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-gold-500/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Dr. Majo's Ortho & Pain Clinic Logo" width="160" height="40" className="h-8 md:h-10 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#home" className="hover:text-gold-400 transition-colors">Home</a>
            <a href="#specialities" className="hover:text-gold-400 transition-colors">Specialities</a>
            <a href="#treatments" className="hover:text-gold-400 transition-colors">Treatments</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
            <a href="#appointment" className="px-6 py-2.5 rounded-sm bg-gradient-to-r from-gold-600 to-gold-400 text-navy-950 font-bold hover:shadow-[0_0_20px_rgba(201,167,100,0.4)] transition-all duration-300">
              Book Appointment
            </a>
          </div>

          <button aria-label="Toggle navigation menu" className="md:hidden text-gold-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-cinzel hover:text-gold-400">Home</a>
          <a href="#specialities" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-cinzel hover:text-gold-400">Specialities</a>
          <a href="#treatments" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-cinzel hover:text-gold-400">Treatments</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-cinzel hover:text-gold-400">Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;

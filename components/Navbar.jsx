import React, { useState, useEffect } from 'react';
import { Menu, X, Aperture } from 'lucide-react';
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from '../constants';

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-white/95 backdrop-blur-md py-2 shadow-sm border-b border-brand-gold/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 relative flex items-center justify-between md:justify-center">
        
        {/* Mobile Logo (Visible only on mobile) */}
        <div className="md:hidden flex items-center gap-2">
            <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-brand-black' : 'text-brand-white'}`}>
                Royal<span className="text-brand-gold">Lens</span>
            </span>
        </div>

        <div className="hidden md:flex items-center justify-between w-full px-6">
    
    {/* Left Links */}
    <div className="flex items-center gap-10">
        {NAV_LINKS_LEFT.map((link) => (
            <a
                key={link.name}
                href={link.href}
                className={`font-sans text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                  isScrolled ? 'text-brand-charcoal' : 'text-brand-white'
                } hover:text-brand-gold`}
            >
              {link.name}
            </a>
        ))}
    </div>

    {/* Center Logo */}
    <div className="flex flex-col items-center">
        <div className={`w-14 h-14 border-2 rotate-45 flex items-center justify-center ${
           isScrolled ? 'bg-white border-brand-gold' : 'bg-black/20 border-brand-gold'
        }`}>
            <Aperture className="w-7 h-7 text-brand-gold -rotate-45" />
        </div>

        <span className={`font-serif text-xl font-bold tracking-wider mt-2 ${
          isScrolled ? 'text-brand-black' : 'text-brand-white'
        }`}>
            ROYAL
        </span>

        <span className="text-brand-gold text-[0.6rem] tracking-[0.3em] uppercase">
            Studios
        </span>
    </div>

    {/* Right Links */}
    <div className="flex items-center gap-10">
        {NAV_LINKS_RIGHT.map((link) => (
            <a
                key={link.name}
                href={link.href}
                className={`font-sans text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                  isScrolled ? 'text-brand-charcoal' : 'text-brand-white'
                } hover:text-brand-gold`}
            >
              {link.name}
            </a>
        ))}
    </div>
</div>


        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`focus:outline-none ${isScrolled ? 'text-brand-black' : 'text-brand-white'}`}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
  className={`fixed top-0 right-0 h-full w-72 bg-white/90 backdrop-blur-lg shadow-xl z-40 
              flex flex-col items-center py-20 gap-6 transition-transform duration-500 md:hidden
              ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
>
    {/* Close Button */}
  <button
    onClick={() => setMobileMenuOpen(false)}
    className="absolute top-6 right-6 text-brand-black"
  >
    <X className="w-7 h-7" />
  </button>
        <div className="flex flex-col gap-6 text-center">
            {/* Mobile Links */}
  {[...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT].map((link) => (
    <a
      key={link.name}
      href={link.href}
      onClick={() => setMobileMenuOpen(false)}
      className="font-serif text-xl text-brand-black hover:text-brand-gold transition-colors"
    >
      {link.name}
    </a>
  ))}
</div>
      </div>
    </nav>
  );
};

export default Navbar;

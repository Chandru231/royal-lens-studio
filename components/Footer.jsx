import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-brand-charcoal 
                   bg-gradient-to-b from-white via-[#f8e9c7] to-[#d6b46c]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
      
      {/* Brand */}
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
          <div className="w-8 h-8 border border-brand-gold flex items-center justify-center rounded-full">
          <Camera className="w-4 h-4 text-brand-gold" />
          </div>
          <span className="font-serif text-xl font-bold tracking-wide text-brand-black">
            Luxe<span className="text-brand-gold">Frame</span>
          </span>
        </div>

        <p className="text-brand-black/70 font-sans text-sm max-w-xs leading-relaxed">
          Elevating photography to an art form. We capture your moments with unmatched style and precision.
        </p>
      </div>

      {/* Links */}
      <div className="flex gap-12">
        <div className="text-center md:text-left">
          <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#hero" className="text-brand-black/70 hover:text-brand-black text-sm">Home</a></li>
            <li><a href="#services" className="text-brand-black/70 hover:text-brand-black text-sm">Services</a></li>
            <li><a href="#portfolio" className="text-brand-black/70 hover:text-brand-black text-sm">Portfolio</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-brand-black/70 hover:text-brand-black text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-brand-black/70 hover:text-brand-black text-sm">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Socials */}
      <div className="text-center md:text-left">
        <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-4">Follow Us</h4>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all text-brand-black"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all text-brand-black"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all text-brand-black"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="w-10 h-10 bg-white shadow-md flex items-center justify-center rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all text-brand-black"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </div>

    <div className="border-t border-brand-charcoal mt-12 pt-8 text-center">
      <p className="text-brand-black/70 text-xs font-sans">
        © {new Date().getFullYear()} LuxeFrame Studios. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;

import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1511285560982-1356c11d4606?auto=format&fit=crop&q=80&w=1920"
        >
            <source src="./videos/Hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for text readability - Lighter for Gold/White theme */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-4 mt-12">
        <div className="inline-block mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-brand-gold"></div>
                <p className="text-white font-sans tracking-[0.4em] uppercase text-xs md:text-sm font-semibold">
                    Photography & Cinematography
                </p>
                <div className="h-[1px] w-12 bg-brand-gold"></div>
            </div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-medium mb-8 leading-none animate-slide-up opacity-0 drop-shadow-xl" style={{ animationDelay: '0.4s' }}>
          Capture The <br/>
          <span className="italic text-brand-gold font-serif">Extraordinary</span>
        </h1>
        
        <p className="text-brand-cream font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
          From royal weddings to high-fashion editorials. We craft timeless visual stories that last forever.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <a
            href="#portfolio"
            className="px-10 py-4 bg-brand-white text-brand-black font-sans font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-white transition-all duration-300"
          >
            Explore Portfolio
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-brand-white text-brand-white font-sans font-bold tracking-widest uppercase hover:bg-brand-white hover:text-brand-black transition-all duration-300 backdrop-blur-sm"
          >
            Book A Shoot
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Heart, Camera, Baby, Briefcase } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Unique Background Image for Services */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1589825666687-0b1a2ee7b275?auto=format&fit=crop&q=80&w=2000" 
            alt="Texture" 
            className="w-full h-full object-cover opacity-10"
         />
         <div className="absolute inset-0 bg-brand-cream/90 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <span className="text-brand-gold font-sans tracking-[0.2em] uppercase text-xs font-bold border border-brand-gold/30 px-4 py-1 rounded-full bg-white">
              What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-black mt-6">Our Services</h2>
          <p className="text-brand-charcoal/60 mt-4 max-w-2xl mx-auto font-sans">
              Comprehensive photography solutions for every milestone and need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1: Wedding */}
            <div className="group bg-brand-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                  <img src="/images/Royal Weddings.jpg" alt="Royal Weddings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 right-4 bg-brand-white p-3 rounded-full shadow-lg">
                      <Heart className="w-6 h-6 text-brand-gold" />
                  </div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl text-brand-black mb-3 group-hover:text-brand-gold transition-colors">Royal Weddings</h3>
                <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed mb-6">
                  Specializing in traditional and modern wedding ceremonies. From the Haldi to the Reception, we capture every ritual with grandeur.
                </p>
                <a href="#contact" className="inline-block text-xs uppercase tracking-widest text-brand-black border-b border-brand-gold/50 pb-1 hover:border-brand-gold transition-all font-semibold">
                    Inquire Now
                </a>
              </div>
            </div>

            {/* Service 2: Fashion */}
            <div className="group bg-brand-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                  <img src="/images/fashion.jpg" alt="Fashion & Portfolio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 right-4 bg-brand-white p-3 rounded-full shadow-lg">
                      <Camera className="w-6 h-6 text-brand-gold" />
                  </div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl text-brand-black mb-3 group-hover:text-brand-gold transition-colors">Fashion & Portfolio</h3>
                <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed mb-6">
                  High-end editorial shoots for models, actors, and influencers. Professional lighting and direction to build your perfect portfolio.
                </p>
                <a href="#contact" className="inline-block text-xs uppercase tracking-widest text-brand-black border-b border-brand-gold/50 pb-1 hover:border-brand-gold transition-all font-semibold">
                    Inquire Now
                </a>
              </div>
            </div>

            {/* Service 3: Maternity */}
            <div className="group bg-brand-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                  <img src="/images/Baby.jpg" alt="Maternity & Baby" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 right-4 bg-brand-white p-3 rounded-full shadow-lg">
                      <Baby className="w-6 h-6 text-brand-gold" />
                  </div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl text-brand-black mb-3 group-hover:text-brand-gold transition-colors">Maternity & Baby</h3>
                <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed mb-6">
                  Celebrating new life with artistic maternity shoots and adorable newborn photography. Gentle, safe, and beautiful memories.
                </p>
                <a href="#contact" className="inline-block text-xs uppercase tracking-widest text-brand-black border-b border-brand-gold/50 pb-1 hover:border-brand-gold transition-all font-semibold">
                    Inquire Now
                </a>
              </div>
            </div>

            {/* Service 4: Corporate */}
            <div className="group bg-brand-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                  <img src="/images/Corporate & Events.jpg" alt="Corporate & Events" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 right-4 bg-brand-white p-3 rounded-full shadow-lg">
                      <Briefcase className="w-6 h-6 text-brand-gold" />
                  </div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl text-brand-black mb-3 group-hover:text-brand-gold transition-colors">Corporate & Events</h3>
                <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed mb-6">
                  Professional headshots, brand campaigns, and event coverage for businesses. Elevate your brand image with crisp visuals.
                </p>
                <a href="#contact" className="inline-block text-xs uppercase tracking-widest text-brand-black border-b border-brand-gold/50 pb-1 hover:border-brand-gold transition-all font-semibold">
                    Inquire Now
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

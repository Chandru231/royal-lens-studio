import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      {/* Background Image for Testimonials */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
            alt="Celebration" 
            className="w-full h-full object-cover grayscale"
          />
           <div className="absolute inset-0 bg-brand-gold/90 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-white/50 mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-white">Client Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-brand-white p-10 shadow-xl border-t-4 border-brand-gold relative transform hover:-translate-y-2 transition-transform duration-300">
              <p className="font-sans text-brand-charcoal/80 leading-relaxed mb-8 italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-brand-gray pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-brand-gold/30" />
                <div>
                  <h4 className="font-serif text-lg text-brand-black font-bold">{t.name}</h4>
                  <p className="font-sans text-xs text-brand-gold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

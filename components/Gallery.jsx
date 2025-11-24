import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Sparkles } from 'lucide-react';

const Gallery = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-brand-white">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-texture-white opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-gold/20 pb-8">
            <div>
              <span className="text-brand-gold font-sans tracking-widest uppercase text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Portfolio
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-black mt-2">Captured Moments</h2>
            </div>
            <div className="flex gap-4">
                 <button className="text-sm font-sans font-medium text-brand-black hover:text-brand-gold transition-colors">All</button>
                 <button className="text-sm font-sans font-medium text-brand-charcoal/50 hover:text-brand-gold transition-colors">Wedding</button>
                 <button className="text-sm font-sans font-medium text-brand-charcoal/50 hover:text-brand-gold transition-colors">Fashion</button>
                 <button className="text-sm font-sans font-medium text-brand-charcoal/50 hover:text-brand-gold transition-colors">Commercial</button>
            </div>
         </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[300px] gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <div 
              key={item.id}
              className={`relative group overflow-hidden cursor-pointer ${
                item.cols === 2 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              <img 
                src={item.src} 
                alt={item.category} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
              {/* Gold Frame Overlay */}
              <div className="absolute inset-4 border border-brand-white/30 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-10"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-white font-serif text-2xl italic">{item.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

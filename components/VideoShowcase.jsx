import React from 'react';
import { Film } from 'lucide-react';
import { VIDEOS } from '../constants';

const VideoShowcase = () => {
  return (
    <section id="films" className="relative py-28 overflow-hidden">

      {/* Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/.mp4" type="video/mp4" />
      </video>

      {/* Soft Gold/White Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#f7e8c6]/60 to-[#d8b764]/70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Film className="text-brand-gold w-7 h-7" />
            <span className="text-brand-gold font-sans tracking-[0.25em] uppercase text-sm">
              Cinematography
            </span>
          </div>

          <h2 className="font-serif text-5xl md:text-7xl text-brand-black">
            Motion Pictures
          </h2>

          <p className="text-brand-black/70 mt-5 max-w-2xl mx-auto font-sans text-lg">
            We craft cinematic stories that blend emotion and artistry.
          </p>
        </div>

        {/* Video Grid (unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="group relative bg-black rounded-md overflow-hidden 
                         shadow-xl border border-brand-gold/20 hover:border-brand-gold/60 
                         transition-all duration-500"
            >
              <div className="aspect-video w-full overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-105 group-hover:scale-110
                             opacity-80 group-hover:opacity-100 transition-all duration-700"
                  poster={video.thumbnail}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>

              <div className="absolute bottom-0 left-0 w-full 
                              bg-gradient-to-t from-black/70 to-transparent p-6">

                <h3 className="font-serif text-2xl text-white">{video.title}</h3>
                <span className="text-xs text-brand-gold uppercase tracking-widest">
                  {video.duration}
                </span>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default VideoShowcase;

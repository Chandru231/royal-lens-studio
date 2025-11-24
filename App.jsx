import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import VideoShowcase from './components/VideoShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black font-sans selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <VideoShowcase />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

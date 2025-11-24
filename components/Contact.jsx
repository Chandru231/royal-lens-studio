import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Wedding Photography',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: '', phone: '', type: 'Wedding Photography', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Contact Specific Background */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2000" 
                alt="Camera Lens" 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-brand-black/90"></div>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="flex flex-col justify-center text-white">
            <span className="text-brand-gold font-sans tracking-widest uppercase text-sm font-semibold">Get in Touch</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-4 mb-8">Let's Create<br/><span className="italic text-brand-gold">Magic</span></h2>
            <p className="text-brand-white/70 mb-12 font-sans leading-relaxed text-lg font-light">
              Available for assignments worldwide. Whether it's a grand wedding or a private portrait session, we'd love to hear from you.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <p className="text-brand-white/60 font-sans">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email</h4>
                  <p className="text-brand-white/60 font-sans">hello@royallens.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Studio</h4>
                  <p className="text-brand-white/60 font-sans">Jubilee Hills, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-8 border-brand-gold">
            <h3 className="font-serif text-3xl text-brand-black mb-8">Send a Request</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-charcoal/50 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray/30 border-b-2 border-brand-gray p-3 focus:outline-none focus:border-brand-gold transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-brand-charcoal/50 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-gray/30 border-b-2 border-brand-gray p-3 focus:outline-none focus:border-brand-gold transition-colors font-sans"
                    />
                  </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-charcoal/50 mb-2">Interest</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-brand-gray/30 border-b-2 border-brand-gray p-3 focus:outline-none focus:border-brand-gold transition-colors font-sans appearance-none"
                >
                  <option>Wedding Photography</option>
                  <option>Fashion / Model Portfolio</option>
                  <option>Maternity / Baby Shoot</option>
                  <option>Corporate Event</option>
                  <option>Commercial / Product</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-charcoal/50 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full bg-brand-gray/30 border-b-2 border-brand-gray p-3 focus:outline-none focus:border-brand-gold transition-colors font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-black text-white font-sans font-bold uppercase tracking-widest py-4 hover:bg-brand-gold transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

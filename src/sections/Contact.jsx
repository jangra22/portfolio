import React, { useState } from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <RevealOnScroll>
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-white">
            Get in Touch
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors peer placeholder-transparent"
                placeholder="Name"
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] peer-valid:-top-3 peer-valid:text-xs">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors peer placeholder-transparent"
                placeholder="Email"
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] peer-valid:-top-3 peer-valid:text-xs">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors peer placeholder-transparent resize-none"
                placeholder="Message"
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] peer-valid:-top-3 peer-valid:text-xs">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#d4af37] text-black font-bold tracking-widest hover:bg-[#b5952f] transition-colors rounded-sm"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;

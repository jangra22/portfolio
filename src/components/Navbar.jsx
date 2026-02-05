import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-luxury-black/90 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:text-[#d4af37] transition-colors">
          Ritik Jangra<span className="text-[#d4af37]">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#about" className="hover-underline-animation">About</a>
          <a href="#skills" className="hover-underline-animation">Skills</a>
          <a href="#projects" className="hover-underline-animation">Projects</a>
          <a href="#contact" className="hover-underline-animation">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

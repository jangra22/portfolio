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
          ? 'bg-surface border-b-4 border-black shadow-brutal'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors">
          Ritik Jangra<span className="text-primary">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8 text-sm font-mono font-medium tracking-wide">
          <a href="#about" className="hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">About</a>
          <a href="#skills" className="hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">Skills</a>
          <a href="#projects" className="hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">Projects</a>
          <a href="#contact" className="hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

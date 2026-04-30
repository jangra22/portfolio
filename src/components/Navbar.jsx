import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-surface border-b-4 border-black shadow-brutal'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors">
          Ritik Jangra<span className="text-primary">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-mono font-medium tracking-wide">
          <a href="#about" className="hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">About</a>
          <a href="#skills" className="hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">Skills</a>
          <a href="#projects" className="hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">Projects</a>
          <a href="#contact" className="hover:bg-primary hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className={`block w-8 h-1 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-1 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-8 h-1 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-surface-bright shadow-brutal transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 border-b-4 border-t-4 border-black' : 'max-h-0 border-transparent'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 font-mono font-medium text-lg text-center">
          <a href="#about" onClick={toggleMenu} className="bg-white hover:bg-primary hover:text-white py-2 border-4 border-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">About</a>
          <a href="#skills" onClick={toggleMenu} className="bg-white hover:bg-primary hover:text-white py-2 border-4 border-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Skills</a>
          <a href="#projects" onClick={toggleMenu} className="bg-white hover:bg-primary hover:text-white py-2 border-4 border-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="bg-white hover:bg-primary hover:text-white py-2 border-4 border-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

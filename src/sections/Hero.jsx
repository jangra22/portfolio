import React, { useEffect, useRef } from 'react';
import heroProfile from '../assets/images/hero-profile.jpg';
import resumePdf from '../assets/Ritikresumeupdated.pdf';

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      
      // Opacity Calculation:
      // Start fading immediately.
      // Fully invisible by 500px scroll (approx 50-60vh).
      const opacity = Math.max(0, 1 - scrollY / 500);
      
      // Optional: Add a slight scale down or blur for "dissolve" effect
      const scale = 1 - scrollY / 2000;
      const blur = scrollY / 50;

      imageRef.current.style.opacity = opacity;
      imageRef.current.style.transform = `scale(${scale})`;
      imageRef.current.style.filter = `blur(${blur}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden bg-background"
    >
      {/* Background brutalist accents */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary border-4 border-black rotate-12 -z-10 shadow-brutal opacity-30" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary border-4 border-black -rotate-6 -z-10 shadow-brutal opacity-30" />

      {/* FIXED Image Container */}
      <div 
        ref={imageRef}
        className="fixed top-24 left-0 w-full flex justify-center z-0 will-change-transform pointer-events-none"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 aspect-square border-4 border-black shadow-brutal animate-scale-in">
          <div className="absolute -inset-2 bg-secondary border-4 border-black -z-10 translate-x-4 translate-y-4" />
          <img 
            src={heroProfile} 
            alt="Ritik Jangra" 
            className="w-full h-full object-cover object-top relative z-10"
          />
        </div>
      </div>

      {/* SCROLLABLE Text Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center pt-[380px] md:pt-[420px] pb-20">
        <div className="inline-block mb-4">
          <h2 className="text-sm md:text-base font-mono font-bold tracking-[0.2em] bg-secondary text-white px-4 py-2 border-2 border-black uppercase animate-slide-up inline-block shadow-brutal-sm" style={{ animationDelay: '0.1s' }}>
            Full Stack & AI Generalist
          </h2>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-tight text-foreground">
          <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>Building Intelligent</span>
          <span className="block text-primary animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Web Solutions.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant font-medium mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          I craft performant, neo-brutalist digital experiences that merge bold aesthetic with powerful AI integrations.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <a
            href="#projects"
            className="flex items-center justify-center w-full md:w-auto text-center px-8 py-4 bg-primary text-white font-mono font-bold tracking-wide border-4 border-black shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            View Projects
          </a>
          
          <a
            href={resumePdf}
            download="Ritik_Jangra_Resume.pdf"
            className="flex items-center justify-center w-full md:w-auto text-center px-8 py-4 bg-white text-black font-mono font-bold tracking-wide border-4 border-black shadow-brutal transition-all hover:bg-surface-dim hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Download Resume
          </a>
        </div>
        
        {/* Connect With Me Section */}
        <div className="mt-16 flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
           <span className="text-sm font-mono font-bold bg-surface-dim border-2 border-black px-3 py-1 tracking-[0.2em] text-foreground uppercase mb-6 shadow-brutal-sm">Connect With Me</span>
           <div className="flex gap-6 items-center">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/jangraritik2208/" className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center shadow-brutal text-black hover:bg-tertiary hover:text-white transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Gmail (Mail) */}
              <a href="mailto:jangraritik1@gmail.com?subject=Inquiry%20from%20Portfolio" className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center shadow-brutal text-black hover:bg-primary hover:text-white transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/jangra22" className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center shadow-brutal text-black hover:bg-black hover:text-white transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

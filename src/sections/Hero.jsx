import React, { useEffect, useRef } from 'react';
import heroProfile from '../assets/images/hero-profile.jpg';
import resumePdf from '../assets/RitikResume(AI).pdf_20251219_221914_0000.pdf';

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
      className="min-h-screen relative overflow-hidden" // Removed flex centering, let flow handle it
    >
      {/* Background elements - Fixed to stay with viewport for premium feel? Or scroll? 
          Let's make them fixed so they don't scroll away quickly. */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-[128px] opacity-5 animate-float -z-10" />
      <div className="fixed bottom-20 left-20 w-72 h-72 bg-purple-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-5 animate-float -z-10" style={{ animationDelay: '2s' }} />

      {/* FIXED Image Container */}
      {/* Centered horizontally, fixed to top. z-0 to sit behind scrolling text */}
      <div 
        ref={imageRef}
        className="fixed top-24 left-0 w-full flex justify-center z-0 will-change-transform pointer-events-none"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-scale-in">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-purple-600 rounded-2xl blur opacity-20 animate-pulse" />
          <img 
            src={heroProfile} 
            alt="Ritik Jangra" 
            className="w-full h-full object-cover object-top relative z-10"
          />
        </div>
      </div>

      {/* SCROLLABLE Text Content */}
      {/* relative z-10 ensures it scrolls OVER the fixed image. 
          pt-[350px] or similar pushes it down to start BELOW the image. */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center pt-[380px] md:pt-[420px] pb-20">
        <div className="inline-block mb-4">
          <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-[#d4af37] uppercase animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Full Stack & AI Generalist
          </h2>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
          <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>Building Intelligent</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Web Solutions.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          I craft performant, luxury digital experiences that merge clean aesthetic with powerful AI integrations.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-semibold tracking-wide overflow-hidden rounded-sm transition-transform hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-[#d4af37] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="absolute inset-0 z-10 mix-blend-multiply opacity-0 group-hover:opacity-20 bg-white" />
          </a>
          
          <a
            href={resumePdf}
            download="Ritik_Jangra_Resume.pdf"
            className="px-8 py-4 border border-gray-700 font-bold tracking-wide text-white hover:border-white transition-colors rounded-sm hover:bg-white/5"
          >
            Download Resume
          </a>
        </div>
        <br></br>
        <br></br>
        {/* Connect With Me Section */}
        <div className="mt-12 flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
           <span className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Connect With Me</span>
           <div className="flex gap-6 items-center">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/jangraritik2208/" className="text-gray-400 hover:text-[#0077b5] transition-colors transform hover:scale-110 duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Gmail (Mail) */}
              <a href="mailto:jangraritik1@gmail.com?subject=Inquiry%20from%20Portfolio" className="text-gray-400 hover:text-[#EA4335] transition-colors transform hover:scale-110 duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/jangra22" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Contact (Scroll Down) */}
              <a href="#contact" className="text-gray-400 hover:text-[#d4af37] transition-colors transform hover:scale-110 duration-300 pt-1">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
              </a>
           </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-20 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const Resume = () => {
  return (
    <section id="resume" className="py-32 px-6 flex items-center justify-center bg-gradient-to-b from-luxury-black to-luxury-charcoal/20">
      <RevealOnScroll>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Ready to collaborate?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            I am currently open to new opportunities and interesting projects.
            Let's build something exceptional together.
          </p>
          
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-luxury-black font-bold tracking-wide overflow-hidden hover:bg-gray-200 transition-colors rounded-sm"
          >
            <span>Download Resume</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Resume;

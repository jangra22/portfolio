import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';
import resumePdf from '../assets/Ritik_Resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="py-32 px-6 flex items-center justify-center bg-surface-dim">
      <RevealOnScroll>
        <div className="text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white bg-primary px-6 py-3 border-4 border-black inline-block shadow-brutal rotate-1">
              Ready to collaborate?
            </h2>
          </div>
          <p className="text-on-surface-variant font-medium mb-10 max-w-xl mx-auto text-lg">
            I am currently open to new opportunities and interesting projects.
            Let's build something exceptional together.
          </p>
          
          <a
            href={resumePdf}
            download="Ritik_Jangra_Resume.pdf"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold tracking-wide border-4 border-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase"
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

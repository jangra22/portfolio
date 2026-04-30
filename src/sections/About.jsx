import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-surface-dim">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative element */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary border-4 border-black -z-10" />
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-foreground bg-secondary px-6 py-3 border-4 border-black inline-block shadow-brutal">
            About Me
          </h2>
          
          <div className="border-4 border-black p-8 bg-white shadow-brutal transition-transform duration-300">
            <p className="text-on-surface-variant font-medium text-lg md:text-xl leading-relaxed mb-6">
              I am a passionate Full Stack Developer and AI Enthusiast with a deep interest in building intelligent, scalable web solutions. 
              My journey bridges the gap between robust software engineering and cutting-edge artificial intelligence.
            </p>
            
            <p className="text-on-surface-variant font-medium text-lg md:text-xl leading-relaxed mb-6">
              With a strong foundation in the MERN stack and a growing expertise in Machine Learning, 
              I strive to create applications that are not only visually striking but also functionally superior.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-surface-bright border-4 border-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <h3 className="text-xl font-display font-bold mb-2 text-primary">Frontend Architecture</h3>
                <p className="text-foreground font-medium text-sm">
                  Crafting responsive, high-performance user interfaces with React, Tailwind, and bold neo-brutalist techniques.
                </p>
              </div>
              <div className="p-6 bg-tertiary border-4 border-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <h3 className="text-xl font-display font-bold mb-2 text-white">AI Integration</h3>
                <p className="text-white font-medium text-sm">
                  Leveraging LLMs and ML models to add intelligent features and automation to web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;

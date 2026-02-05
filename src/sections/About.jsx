import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          
          <div className="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              I am a passionate Full Stack Developer and AI Enthusiast with a deep interest in building intelligent, scalable web solutions. 
              My journey bridges the gap between robust software engineering and cutting-edge artificial intelligence.
            </p>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              With a strong foundation in the MERN stack and a growing expertise in Machine Learning, 
              I strive to create applications that are not only visually stunning but also functionally superior.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-lg bg-black/30 border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-white">Frontend Architecture</h3>
                <p className="text-gray-400 text-sm">
                  Crafting responsive, high-performance user interfaces with React, Tailwind, and modern CSS techniques.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-black/30 border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-white">AI Integration</h3>
                <p className="text-gray-400 text-sm">
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

import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const AIProjects = () => {
  return (
    <section id="ai-projects" className="min-h-screen flex items-center justify-center py-20 px-6 bg-luxury-charcoal/30">
      <div className="max-w-5xl mx-auto w-full">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            AI <span className="text-[#d4af37]">&</span> Innovation
          </h2>
        </RevealOnScroll>

        <div className="space-y-12">
          {/* Project 1 */}
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">Sentiment Analysis Engine</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Developed a custom NLP model capable of detecting subtle emotional nuances in customer feedback. 
                  Used Python and PyTorch, achieving 92% accuracy on benchmark datasets.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-xs">NLP</span>
                  <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-xs">Python</span>
                </div>
              </div>
              <div className="flex-1 w-full h-48 bg-black/50 rounded-lg border border-white/5 flex items-center justify-center text-gray-600 font-mono text-xs">
                 [Interactive Demo Placeholder]
              </div>
            </div>
          </RevealOnScroll>

          {/* Project 2 */}
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">Generative Art Pipeline</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Created an automated pipeline for generating abstract architectural concepts using Stable Diffusion 
                  and custom ControlNet adapters.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-xs">Generative AI</span>
                  <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-xs">Stable Diffusion</span>
                </div>
              </div>
              <div className="flex-1 w-full h-48 bg-black/50 rounded-lg border border-white/5 flex items-center justify-center text-gray-600 font-mono text-xs">
                [Generative Output Preview]
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AIProjects;

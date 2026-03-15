import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const Projects = () => {
  const projects = [
    {
      title: "Lost and found Portal For College",
      description: "A full-stack web platform designed to streamline lost and found item reporting within a college campus. Features secure authentication, real-time item listings, and an efficient claim workflow.",
      tags: ["React", "Next.js", "TailwindCSS", "D3.js"],
      link: "https://silly-dusk-155e98.netlify.app/"
    },
    {
      title: "StreakForge",
      description: "A full-stack habit tracker with weekly checkbox grid, real-time progress bars, and streak counters.",
      tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
      link: "https://streakforge2208.vercel.app/"
    },
    {
      title: "E-Commerce",
      description: "A modern full-stack e-commerce solution featuring dynamic product management, secure user authentication, and seamless checkout flow.",
      tags: ["React", "Express.js", "TailwindCSS", "MongoDB"],
      link: "https://dancing-kataifi-0d5287.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={index}>
              <div
                className="group relative p-6 h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#d4af37] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-black/50 rounded-md text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block text-[#d4af37] text-sm font-medium hover:underline hover:text-white transition-colors"
                >
                  View Project →
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

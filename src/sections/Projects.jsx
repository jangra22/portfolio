import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';

const Projects = () => {
  const projects = [
    {
      title: "EasyPay",
      description: "Developing with React, Django, and MongoDB to enable barcode-based self-checkout with instant payments and QR exit verification, integrating Google Gemini API for personalized health scoring across 12+ medical conditions (diabetes, hypertension, allergies)..",
      tags: ["Django", "Fast API", "TailwindCSS", "PostgreSQL"],
      link: "https://healthscan-kappa.vercel.app/"
    },
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
      link: "https://streakfforge.vercel.app/"
    },
    {
      title: "E-Commerce",
      description: "A modern full-stack e-commerce solution featuring dynamic product management, secure user authentication, and seamless checkout flow.",
      tags: ["React", "Express.js", "TailwindCSS", "MongoDB"],
      link: "https://dancing-kataifi-0d5287.netlify.app/"
    },
    {
      title: "Spend-Sphere",
      description: "A modern UI/UX expense tracking website.",
      tags: ["React", "Express.js", "TailwindCSS"],
      link: "https://spend-sphere-mu.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground bg-primary text-white border-4 border-black px-6 py-3 inline-block shadow-brutal rotate-2">
              Featured Projects
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = [
              // Theme 1: Primary (Reds)
              { cardBg: "bg-[#ffe2de]", btnBg: "bg-[#b70011]", accent: "bg-[#dc2626]", text: "text-[#281715]", btnText: "text-white" },
              // Theme 2: Secondary (Yellows)
              { cardBg: "bg-[#fed01b]", btnBg: "bg-[#735c00]", accent: "bg-[#ffffff]", text: "text-[#281715]", btnText: "text-white" },
              // Theme 3: Tertiary (Blues)
              { cardBg: "bg-[#0081bf]", btnBg: "bg-[#005e8d]", accent: "bg-[#ffffff]", text: "text-white", btnText: "text-white" },
              // Theme 4: Dim Surface (Pinkish)
              { cardBg: "bg-[#f3d3cf]", btnBg: "bg-[#bf0715]", accent: "bg-[#e6bdb8]", text: "text-[#281715]", btnText: "text-white" },
              // Theme 5: Inverse/Neutral
              { cardBg: "bg-[#ffffff]", btnBg: "bg-[#3f2c29]", accent: "bg-[#916f6b]", text: "text-[#281715]", btnText: "text-[#ffedea]" },
            ];
            const theme = colors[index % colors.length];

            return (
              <RevealOnScroll key={index}>
                <div
                  className={`group relative p-6 h-full ${theme.cardBg} border-4 border-black shadow-brutal transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none flex flex-col`}
                >
                  <div className={`absolute -top-3 -right-3 w-6 h-6 ${theme.accent} border-2 border-black rounded-full`} />
                  
                  <h3 className={`text-xl font-display font-bold mb-3 ${theme.text}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`${theme.text} font-medium mb-6 text-sm leading-relaxed flex-grow opacity-90`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-mono font-bold bg-white text-black border-2 border-black shadow-brutal-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block ${theme.btnBg} ${theme.btnText} font-mono font-bold px-4 py-2 border-4 border-black shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-center`}
                  >
                    View Project →
                  </a>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

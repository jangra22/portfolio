import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiVite, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiPython, SiCplusplus, SiC,
  SiGit, SiFigma, SiOpenai, SiAnthropic
} from 'react-icons/si';
import { FaJava, FaBrain } from 'react-icons/fa';

const Skills = () => {
  const skills = {
    Frontend: [
      { name: "React", icon: <SiReact className="text-cyan-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "Vite", icon: <SiVite className="text-purple-600" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> }
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "My SQL", icon: <SiMysql className="text-blue-500" /> }
    ],
    Languages: [
      { name: "Python", icon: <SiPython className="text-blue-700" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-800" /> },
      { name: "C", icon: <SiC className="text-blue-600" /> },
      { name: "Java", icon: <FaJava className="text-orange-600" /> }
    ],
    Tools: [
      { name: "Git", icon: <SiGit className="text-red-600" /> },
      { name: "Chat GPT", icon: <SiOpenai className="text-teal-500" /> },
      { name: "Grok AI", icon: <FaBrain className="text-purple-500" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-600" /> },
      { name: "Claude", icon: <SiAnthropic className="text-orange-400" /> }
    ]
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-surface-dim">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground bg-secondary px-8 py-3 border-4 border-black inline-block shadow-brutal rotate-1">
              Full Stack Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 border-4 border-black shadow-brutal hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-300">
                <h3 className="text-xl font-display font-bold mb-6 text-primary text-center border-b-4 border-black pb-2">{category}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {items.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center justify-center gap-2 group p-2 border-2 border-transparent hover:border-black hover:bg-surface-bright transition-all"
                    >
                      <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-foreground transition-colors text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;

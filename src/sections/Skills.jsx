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
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> }
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> }, // Express is minimal
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "My SQL", icon: <SiMysql className="text-blue-400" /> }
    ],
    Languages: [
      { name: "Python", icon: <SiPython className="text-blue-600" /> },
      { name: "C++", icon: <SiCplusplus className="text-green-600" /> },
      { name: "C", icon: <SiC className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-orange-500" /> }
    ],
    Tools: [
      { name: "Git", icon: <SiGit className="text-red-500" /> },
      { name: "Chat GPT", icon: <SiOpenai className="text-teal-300" /> },
      { name: "Grok AI", icon: <FaBrain className="text-purple-400" /> }, // Generic Brain for Grok
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Claude", icon: <SiAnthropic className="text-orange-200" /> }
    ]
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Full Stack Arsenal</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-6 text-[#d4af37] text-center border-b border-white/10 pb-2">{category}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {items.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center justify-center gap-2 group p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
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

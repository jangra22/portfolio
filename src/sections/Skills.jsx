import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiVite, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiPython, SiCplusplus, SiC,
  SiGit, SiFigma, SiOpenai, SiAnthropic
} from 'react-icons/si';
import { FaJava, FaBrain, FaDatabase, FaServer, FaCode } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-background px-4 md:px-8">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto w-full border-[6px] border-black bg-surface-bright p-6 md:p-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          
          {/* Top Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
            <h2 className="font-mono text-2xl md:text-3xl font-bold uppercase tracking-tight">TECH_ARSENAL</h2>
            <div className="flex gap-4 items-center w-full md:w-auto">
              <div className="bg-black text-white px-3 py-1 font-mono text-sm font-bold">MANIFEST_V2.0.4</div>
              <div className="text-primary border-2 border-primary px-3 py-1 font-mono text-sm font-bold whitespace-nowrap">STATUS: OPERATIONAL</div>
            </div>
            <div className="hidden md:block flex-grow border-b-2 border-dashed border-black opacity-50 relative top-1"></div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column (Span 8) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Frontend Core */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 border-b-4 border-primary"></div>
                  <h3 className="font-mono font-bold text-xl tracking-widest">[FRONTEND_CORE]</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* React Card */}
                  <div className="border-4 border-black p-5 relative bg-white shadow-brutal hover:-translate-y-1 transition-transform">
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-mono font-bold px-2 py-1 border-b-4 border-l-4 border-black">
                      VERSION: 18.2.0
                    </div>
                    <div className="flex items-center gap-3 mb-6 mt-2">
                      <SiReact className="text-3xl text-primary" />
                      <h4 className="font-sans font-black italic text-2xl uppercase">REACT_CORE</h4>
                    </div>
                    <div className="space-y-3 font-mono text-sm font-bold text-foreground">
                      <div className="flex justify-between items-center border-b-2 border-dotted border-gray-300 pb-1">
                        <span>VIRTUAL_DOM</span>
                        <span className="text-primary">OPTIMIZED</span>
                      </div>
                      <div className="flex justify-between items-center border-b-2 border-dotted border-gray-300 pb-1">
                        <span>HOOKS_STATE</span>
                        <span className="text-primary">DEPLOYED</span>
                      </div>
                      <div className="flex justify-between items-center border-b-2 border-dotted border-gray-300 pb-1">
                        <span>CONCURRENT_UI</span>
                        <span className="text-primary">ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Style Engine */}
                  <div className="border-4 border-black p-5 relative bg-white shadow-brutal hover:-translate-y-1 transition-transform">
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-mono font-bold px-2 py-1 border-b-4 border-l-4 border-black">
                      VERSION: 3.4.1
                    </div>
                    <div className="flex items-center gap-3 mb-6 mt-2">
                      <SiTailwindcss className="text-3xl text-primary" />
                      <h4 className="font-sans font-black italic text-2xl uppercase">STYLE_ENGINE</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3 font-mono text-xs font-bold">
                      <div className="border-2 border-black text-center py-2 hover:bg-black hover:text-white transition-colors cursor-default">TAILWIND_CSS</div>
                      <div className="border-2 border-black text-center py-2 hover:bg-black hover:text-white transition-colors cursor-default">VITE_BUNDLER</div>
                      <div className="border-2 border-black text-center py-2 hover:bg-black hover:text-white transition-colors cursor-default col-span-2 flex justify-center items-center gap-2">
                        <SiTypescript className="text-lg" /> TYPESCRIPT
                      </div>
                    </div>
                  </div>

                  {/* Next.js Infrastructure */}
                  <div className="md:col-span-2 border-4 border-black bg-black text-white p-6 relative shadow-brutal">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="hidden sm:flex w-24 h-32 border-2 border-gray-700 bg-gray-900 items-center justify-center shrink-0">
                        <SiNextdotjs className="text-5xl text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-sans font-black italic text-2xl md:text-3xl uppercase mb-3 text-white">NEXT_JS_INFRASTRUCTURE</h4>
                        <p className="font-mono text-sm text-gray-400 mb-6 max-w-md">
                          Full-stack rendering optimization. SSR, ISR, and Edge Runtime capabilities integrated for maximum node response speeds.
                        </p>
                        <div className="flex flex-wrap gap-3 font-mono text-xs font-bold text-black">
                          <div className="bg-white px-3 py-1">SERVER_COMPONENTS</div>
                          <div className="bg-white px-3 py-1">APP_ROUTER</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Infrastructure */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 border-b-4 border-primary"></div>
                  <h3 className="font-mono font-bold text-xl tracking-widest">[BACKEND_INFRASTRUCTURE]</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* DB Layers */}
                  <div className="border-4 border-black p-6 bg-white shadow-brutal hover:-translate-y-1 transition-transform">
                    <div className="bg-primary w-12 h-12 flex items-center justify-center mb-6 border-2 border-black">
                      <FaDatabase className="text-white text-2xl" />
                    </div>
                    <h4 className="font-sans font-black italic text-2xl uppercase mb-3">DB_LAYERS</h4>
                    <p className="font-mono text-sm text-foreground mb-6 h-10">
                      Relational and Non-Relational data orchestration.
                    </p>
                    <div className="space-y-2 font-mono text-xs font-bold">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary"></div> MONGODB_NOSQL
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary"></div> MYSQL_RELATIONAL
                      </div>
                    </div>
                  </div>

                  {/* Server Nodes */}
                  <div className="border-4 border-black p-6 bg-white shadow-brutal hover:-translate-y-1 transition-transform">
                    <div className="bg-black w-12 h-12 flex items-center justify-center mb-6 border-2 border-black">
                      <FaServer className="text-white text-2xl" />
                    </div>
                    <h4 className="font-sans font-black italic text-2xl uppercase mb-3">RUNTIME_NODES</h4>
                    <p className="font-mono text-sm text-foreground mb-6 h-10">
                      Scalable backend execution and API routing.
                    </p>
                    <div className="space-y-2 font-mono text-xs font-bold">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2"><SiNodedotjs className="text-lg" /> NODE.JS</span>
                        <span className="text-primary">[CONNECTED]</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2"><SiExpress className="text-lg" /> EXPRESS_JS</span>
                        <span className="text-primary">[CONNECTED]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (Span 4) */}
            <div className="lg:col-span-4 space-y-10">
              
              {/* System Langs */}
              <div>
                <h3 className="font-mono font-bold text-xl tracking-widest mb-6">[SYSTEM_LANGS]</h3>
                <div className="space-y-4">
                  
                  <div className="border-4 border-black bg-white p-3 flex justify-between items-center shadow-brutal-sm hover:translate-x-1 hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 font-sans font-black italic text-lg uppercase">
                      <FaCode className="text-primary" /> C++
                    </div>
                    <div className="border-2 border-black px-2 py-1 text-[10px] font-mono font-bold">HIGH_PERF</div>
                  </div>
                  <div className="border-4 border-black bg-white p-3 flex justify-between items-center shadow-brutal-sm hover:translate-x-1 hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 font-sans font-black italic text-lg uppercase">
                      <FaCode className="text-primary" /> PYTHON
                    </div>
                    <div className="border-2 border-black px-2 py-1 text-[10px] font-mono font-bold">ML_READY</div>
                  </div>


                  {/* <div className="border-4 border-black bg-white p-3 flex justify-between items-center shadow-brutal-sm hover:translate-x-1 hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 font-sans font-black italic text-lg uppercase">
                      <FaCode className="text-primary" /> JAVA
                    </div>
                    <div className="bg-primary text-white border-2 border-black px-2 py-1 text-[10px] font-mono font-bold">ENTERPRISE</div>
                  </div> */}

                  <div className="border-4 border-black bg-white p-3 flex justify-between items-center shadow-brutal-sm hover:translate-x-1 hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 font-sans font-black italic text-lg uppercase">
                      <FaCode className="text-primary" /> C
                    </div>
                    <div className="border-2 border-black px-2 py-1 text-[10px] font-mono font-bold">LOW_LEVEL</div>
                  </div>

                </div>
              </div>

              {/* Tooling */}
              <div>
                <h3 className="font-mono font-bold text-xl tracking-widest mb-6">[TOOLING_&_AI]</h3>
                <div className="border-4 border-black bg-surface-dim p-5 shadow-brutal">
                  <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
                    <span className="font-mono text-[10px] font-bold text-foreground">ID: TOOL_STACK_01</span>
                    <span className="font-mono text-[10px] font-bold text-primary">ENCRYPTED</span>
                  </div>
                  <div className="flex flex-wrap gap-3 font-mono text-xs font-bold">
                    <div className="bg-white border-2 border-black px-2 py-1 flex items-center gap-2"><SiGit className="text-primary" /> GIT_VCS</div>
                    <div className="bg-white border-2 border-black px-2 py-1 flex items-center gap-2"><SiOpenai className="text-primary" /> CHAT_GPT</div>
                    <div className="bg-white border-2 border-black px-2 py-1 flex items-center gap-2"><FaBrain className="text-primary" /> GROK_AI</div>
                    <div className="bg-white border-2 border-black px-2 py-1 flex items-center gap-2"><SiAnthropic className="text-primary" /> CLAUDE</div>
                    <div className="bg-white border-2 border-black px-2 py-1 flex items-center gap-2"><SiFigma className="text-primary" /> STITCH</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;

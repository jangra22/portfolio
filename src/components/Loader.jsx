import React, { useState, useEffect } from 'react';

const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);

  const bootSequence = [
    "LOADING_SKILLS_ARSENAL: MERN_STACK, AI_TOOLS... OK",
    "FETCHING_DEVELOPER_PROFILE: RITIK_JANGRA... OK",
    "INITIALIZING_FEATURED_PROJECTS... LOADED",
    "COMPILING_FRONTEND_ARCHITECTURE... SUCCESS",
    "INJECTING_NEO_BRUTALISM_STYLES... APPLIED",
    "ESTABLISHING_CONTACT_LINKS... CONNECTED",
    "RENDERING_USER_INTERFACE... STANDBY",
    "FINALIZING_PORTFOLIO_LAUNCH..."
  ];

  useEffect(() => {
    let currentProgress = 0;
    let logIndex = 0;
    
    // Staccato progress
    const interval = setInterval(() => {
      // jump randomly between 5 and 15
      currentProgress += Math.floor(Math.random() * 11) + 5;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          onLoaded();
        }, 500); // Wait a bit at 100%
      }
      setProgress(currentProgress);
      
      if (logIndex < bootSequence.length && Math.random() > 0.2) {
        setLogs(prev => {
          // Keep only last 5 logs so it doesn't overflow
          const newLogs = [...prev, bootSequence[logIndex]];
          return newLogs.slice(-5);
        });
        logIndex++;
      }
    }, 300); // 300ms stepped intervals
    
    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-50 bg-background text-foreground flex flex-col justify-between p-6 md:p-8 border-[12px] md:border-[20px] border-black box-border overflow-hidden">
      
      {/* Corner L-brackets */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 w-8 h-8 border-t-8 border-l-8 border-black z-0"></div>
      <div className="absolute top-4 md:top-8 right-4 md:right-8 w-8 h-8 border-t-8 border-r-8 border-black z-0"></div>
      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-8 h-8 border-b-8 border-l-8 border-black z-0"></div>
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-8 h-8 border-b-8 border-r-8 border-black z-0"></div>

      {/* Crosshairs */}
      <div className="absolute top-1/2 left-0 w-8 h-[4px] bg-black -translate-y-1/2 z-0"></div>
      <div className="absolute top-1/2 right-0 w-8 h-[4px] bg-black -translate-y-1/2 z-0"></div>
      <div className="absolute top-0 left-1/2 w-[4px] h-8 bg-black -translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-1/2 w-[4px] h-8 bg-black -translate-x-1/2 z-0"></div>

      {/* Top HUD */}
      <div className="flex flex-col md:flex-row justify-between items-start font-mono font-bold text-xs md:text-sm z-10 gap-2">
        <div className="bg-surface-dim border-2 border-black px-2 py-1 shadow-brutal-sm">
          LOC: GRID_SECTOR_7
        </div>
        <div className="bg-secondary text-white border-2 border-black px-2 py-1 shadow-brutal-sm">
          PHASE_04: INTERFACE_SYNCHRONIZATION
        </div>
      </div>

      {/* Center Display */}
      <div className="flex flex-col items-center justify-center flex-grow z-10 my-8">
        <div className="bg-white border-4 md:border-8 border-black p-6 md:p-12 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center relative">
          
          <h1 className="font-sans font-black italic text-2xl md:text-5xl mb-2 md:mb-6 uppercase tracking-tighter">
            LOADING PORTFOLIO...
          </h1>
          
          <div className="text-7xl md:text-[180px] font-display font-bold leading-none mb-6 tracking-tighter text-primary" style={{ textShadow: '4px 4px 0 #000, 8px 8px 0 #000' }}>
            {progress}%
          </div>
          
          <div className="w-full max-w-sm md:max-w-xl h-8 md:h-12 border-4 border-black bg-surface-dim relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-primary border-r-4 border-black transition-all duration-75"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="flex flex-col md:flex-row justify-between items-end font-mono text-xs md:text-sm z-10 gap-4">
        {/* Terminal Logs */}
        <div className="bg-black text-primary p-4 border-4 border-black shadow-[4px_4px_0_0_#b70011] w-full md:w-1/2 lg:w-1/3 h-40 overflow-hidden flex flex-col justify-end">
          {logs.map((log, i) => (
            <div key={i} className="whitespace-nowrap overflow-hidden text-ellipsis">{'>'} {log}</div>
          ))}
          <div className="animate-pulse">{'>'} _</div>
        </div>

        {/* Operator Info */}
        <div className="bg-surface-bright border-4 border-black p-4 shadow-brutal text-right">
          <div className="font-bold border-b-2 border-black pb-1 mb-2">OPERATOR INFO</div>
          <div>ID: RJ-2026</div>
          <div>STATUS: AUTHORIZED</div>
          <div>NET: ONLINE</div>
        </div>
      </div>

    </div>
  );
};

export default Loader;

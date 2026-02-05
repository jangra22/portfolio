// import React, { useEffect } from 'react';

// const Loader = ({ onLoaded }) => {
//   const message = "Turning Expertise Into Impact";
//   const letters = message.split('');

//   useEffect(() => {
//     const duration = 5500;
//     const timer = setTimeout(() => {
//       onLoaded();
//     }, duration);
//     return () => clearTimeout(timer);
//   }, [onLoaded]);

//   return (
//     <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
//       <div className="relative w-full h-full flex items-center justify-center launch-container">
//         {letters.map((letter, index) => {
//           const randomX = Math.random() * 80 - 40;
//           const randomY = Math.random() * 80 - 40;
//           const randomRotate = Math.random() * 360;
//           const delay = index * 0.05;

//           return (
//             <span
//               key={index}
//               className="absolute font-bold font-mono text-sm md:text-2xl lg:text-3xl tracking-widest launch-letter"
//               style={{
//                 color: '#ee1717ff',
//                 left: '50%',
//                 top: '50%',
//                 transform: `translate(-50%, -50%)`,
//                 animation: `
//                   ignite 0.8s ease-out forwards,
//                   scatter 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards,
//                   gather 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${2.6 + delay}s forwards,
//                   launch 1.4s cubic-bezier(0.4, 0, 0.2, 1) ${4.2 + delay}s forwards
//                 `,
//                 '--random-x': `${randomX}vw`,
//                 '--random-y': `${randomY}vh`,
//                 '--random-rotate': `${randomRotate}deg`,
//                 '--final-x': `${(index - letters.length / 2) * 1.2}em`,
//                 textShadow:
//                   '0 0 10px rgba(238, 23, 23, 0.6), 0 0 30px rgba(238, 23, 23, 0.4)',
//               }}
//             >
//               {letter === ' ' ? '\u00A0' : letter}
//             </span>
//           );
//         })}
//       </div>

//       <style>{`
//         /* Phase 1: Ignition */
//         @keyframes ignite {
//           0% {
//             opacity: 0;
//             filter: blur(12px);
//             transform: translate(-50%, -50%) scale(0.8);
//           }
//           100% {
//             opacity: 1;
//             filter: blur(0);
//             transform: translate(-50%, -50%) scale(1);
//           }
//         }

//         /* Phase 2: Scatter */
//         @keyframes scatter {
//           100% {
//             transform: translate(
//               calc(-50% + var(--random-x)),
//               calc(-50% + var(--random-y))
//             ) rotate(var(--random-rotate));
//           }
//         }

//         /* Phase 3: Alignment */
//         @keyframes gather {
//           0% {
//             letter-spacing: 0.6em;
//           }
//           100% {
//             transform: translate(
//               calc(-50% + var(--final-x)),
//               -50%
//             ) rotate(0deg);
//             letter-spacing: normal;
//           }
//         }

//         /* Phase 4: Launch 🚀 */
//         @keyframes launch {
//           0% {
//             opacity: 1;
//             transform: translate(
//               calc(-50% + var(--final-x)),
//               -50%
//             ) scale(1);
//             filter: blur(0);
//           }
//           100% {
//             opacity: 0;
//             transform: translate(
//               calc(-50% + var(--final-x)),
//               -140%
//             ) scale(0.9);
//             filter: blur(6px);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;


/* HTML: <div class="loader"></div> */

import React, { useEffect } from 'react';

const Loader = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="loader"></div>
      <style>{`
        .loader {
          display: inline-flex;
          gap: 10px;
        }
        .loader:before,
        .loader:after {
          content: "";
          height: 100px;
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            linear-gradient(#222 0 0) top/100% 0% no-repeat,
            radial-gradient(farthest-side,#000 95%,#0000) 50%/8px 8px no-repeat
            #fff;
          animation: l9 4s infinite ease-in;
        }
        @keyframes l9 {
          0%  { background-size:100% 0%, 8px 8px; background-position:top, 50% 50% }
          80% { background-size:100% 70%, 8px 8px; background-position:top, 50% 70% }
          84%,
          100%{ background-size:100% 0%, 8px 8px; background-position:top, 50% 50% }
        }
      `}</style>
    </div>
  );
};

export default Loader;

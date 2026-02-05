import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import AIProjects from './sections/AIProjects';
import Blog from './sections/Blog';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader onLoaded={() => setIsLoading(false)} />
      ) : (
        <div className="animate-fade-in relative">
          <Navbar />
          <main className="min-h-screen bg-luxury-black text-off-white selection:bg-white selection:text-luxury-black">
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <AIProjects /> */}
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-foreground font-mono font-bold text-sm uppercase">
          &copy; {new Date().getFullYear()} Ritik Jangra. Crafted with purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

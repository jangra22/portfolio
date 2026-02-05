import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-luxury-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#666] text-sm">
          &copy; {new Date().getFullYear()} Ritik Jangra. Crafted with purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

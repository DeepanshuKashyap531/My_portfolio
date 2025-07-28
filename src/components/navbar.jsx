import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#0A0A0A] to-[#1A2A2A] text-white p-4 z-50 shadow-lg shadow-[#00FF99]/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-inter text-[#00FF99]">Deepanshu Kashyap</div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-[#00FF99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#00FF99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-inter">
          {['intro', 'about', 'education', 'certificates', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              className="hover:text-[#00FF99] font-semibold transition-colors duration-300 capitalize relative group"
              onClick={() => scrollToSection(section)}
            >
              {section}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#00FF99] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#0A0A0A] to-[#1A2A2A] shadow-lg shadow-[#00FF99]/20 mt-2 rounded-b-lg transition-all duration-300">
          <div className="flex flex-col items-center space-y-4 py-4 font-inter">
            {['intro', 'about', 'education', 'certificates', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                className="hover:text-[#00FF99] text-lg font-semibold transition-colors duration-300 capitalize"
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

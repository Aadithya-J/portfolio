import React, { useState, useEffect } from 'react';
import { Section } from '../types';

interface HeaderProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: Section.ABOUT },
    { label: 'Works', id: Section.WORKS },
    { label: 'Contact', id: Section.CONTACT },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-paper/80 backdrop-blur-md py-4 border-b border-stone-900' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection(Section.HOME)}
          className="font-serif text-2xl font-bold tracking-tight text-stone-100 hover:opacity-70 transition-opacity"
        >
          Aadithya.me
        </button>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                activeSection === item.id ? 'text-stone-100' : 'text-stone-400 hover:text-stone-100'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-stone-100 transition-all duration-300 ${
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </nav>

        <button className="md:hidden text-stone-100">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
        </button>
      </div>
    </header>
  );
};
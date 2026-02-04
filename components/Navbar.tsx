
import React, { useState } from 'react';
import { InternshipLevel } from '../types';

interface NavbarProps {
  activeLevel: InternshipLevel | 'HOME';
  onSelect: (level: InternshipLevel | 'HOME') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeLevel, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Level 2 Task 2: Mobile-friendly navigation with hamburger
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onSelect('HOME')}>
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">C</div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Cognifyz</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onSelect('HOME')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${activeLevel === 'HOME' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Home
            </button>
            {Object.values(InternshipLevel).map((level) => (
              <button
                key={level}
                onClick={() => onSelect(level)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${activeLevel === level ? 'text-blue-600 underline underline-offset-8' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {level}
              </button>
            ))}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-shadow shadow-md">
              Apply Now
            </button>
          </div>

          {/* Level 2 Task 2: Hamburger Menu Icon */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-2">
          <button 
            onClick={() => { onSelect('HOME'); setIsOpen(false); }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
          >
            Home
          </button>
          {Object.values(InternshipLevel).map((level) => (
            <button
              key={level}
              onClick={() => { onSelect(level); setIsOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
            >
              {level}
            </button>
          ))}
          <button className="w-full bg-blue-600 text-white px-3 py-3 rounded-md text-base font-semibold">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

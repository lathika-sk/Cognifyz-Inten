
import React, { useState } from 'react';
import { InternshipLevel } from '../types';
import Calculator from './Calculator';
import ImageGallery from './ImageGallery';

interface LevelSectionProps {
  level: InternshipLevel;
}

const LevelSection: React.FC<LevelSectionProps> = ({ level }) => {
  const [btnColor, setBtnColor] = useState('bg-blue-600');
  
  // Level 1 Task 2: Change button color logic
  const toggleBtnColor = () => {
    const colors = ['bg-blue-600', 'bg-red-500', 'bg-green-500', 'bg-purple-600', 'bg-orange-500', 'bg-indigo-600'];
    const next = colors[(colors.indexOf(btnColor) + 1) % colors.length];
    setBtnColor(next);
  };

  return (
    <div className="space-y-12 pb-16">
      <header className="border-b border-gray-200 pb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">{level} Challenges</h2>
        <p className="mt-2 text-gray-600">Complete these tasks to advance your career.</p>
      </header>

      {/* LEVEL 1 TASKS */}
      {level === InternshipLevel.LEVEL_1 && (
        <div className="space-y-16">
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <span className="p-1 bg-blue-100 text-blue-600 rounded">Task 1</span> HTML/CSS Fundamentals
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 glass-card rounded-2xl space-y-4">
                <h4 className="text-lg font-semibold">Simple Webpage Structure</h4>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                   <h1 className="text-2xl font-bold text-gray-800 mb-2">Sample Heading</h1>
                   <p className="text-gray-600 mb-4">This is a sample paragraph showcasing HTML and CSS styling.</p>
                   <img src="https://picsum.photos/400/200?random=1" className="rounded-lg w-full h-32 object-cover" alt="Task" />
                </div>
              </div>
              <div className="p-8 glass-card rounded-2xl space-y-4">
                <h4 className="text-lg font-semibold">Basic Form Component</h4>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                   <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                     <label className="block text-sm font-medium text-gray-700">Name</label>
                     <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your name..." />
                     <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Submit Form</button>
                   </form>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <span className="p-1 bg-blue-100 text-blue-600 rounded">Task 2</span> JavaScript Logic
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 glass-card rounded-2xl space-y-4">
                <h4 className="text-lg font-semibold">Color Changing Button</h4>
                <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <button 
                    onClick={toggleBtnColor}
                    className={`${btnColor} text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all active:scale-95`}
                  >
                    Click to Change My Color
                  </button>
                  <p className="mt-4 text-xs text-gray-400">Current class: {btnColor}</p>
                </div>
              </div>
              <div className="p-8 glass-card rounded-2xl space-y-4">
                <h4 className="text-lg font-semibold">Basic Calculator</h4>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <Calculator />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* LEVEL 2 TASKS */}
      {level === InternshipLevel.LEVEL_2 && (
        <div className="space-y-16">
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <span className="p-1 bg-blue-100 text-blue-600 rounded">Task 1</span> Front-end Frameworks (Responsive Grid)
            </h3>
            {/* Level 2 Task 1: Responsive Card & Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img src={`https://picsum.photos/seed/card${i}/400/250`} alt="Task" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">Framework Component {i}</h4>
                    <p className="text-gray-600 text-sm">Building responsive interfaces using modern front-end concepts and grid layouts.</p>
                    <button className="mt-4 text-blue-600 font-semibold text-sm hover:underline">Read More →</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <span className="p-1 bg-blue-100 text-blue-600 rounded">Task 2</span> Advanced Responsive Design
            </h3>
            <div className="p-12 glass-card rounded-2xl text-center">
              <p className="text-gray-600 mb-6">Resize your browser to see the responsive behavior of this entire portal, including the navbar's hamburger menu!</p>
              <div className="inline-block p-4 bg-white rounded-full border border-blue-100 shadow-sm animate-pulse">
                📱 Tablet & Mobile Ready
              </div>
            </div>
          </section>
        </div>
      )}

      {/* LEVEL 3 TASKS */}
      {level === InternshipLevel.LEVEL_3 && (
        <div className="space-y-16">
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <span className="p-1 bg-blue-100 text-blue-600 rounded">Task 1</span> Image Manipulation & Slideshow
            </h3>
            <ImageGallery />
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <span className="p-1 bg-blue-100 text-blue-600 rounded">Task 2</span> Internship Landing Page
            </h3>
            <div className="p-8 glass-card rounded-2xl border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "The homepage of this application is designed as the professional landing page for the Cognifyz Web Development Internship program, meeting all Level 3 Task 2 requirements including headlines, highlights, and clear CTAs."
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default LevelSection;

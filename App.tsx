
import React, { useState, useEffect } from 'react';
import { InternshipLevel } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LevelSection from './components/LevelSection';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<InternshipLevel | 'HOME'>('HOME');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    let message = "";
    if (hour < 12) message = "Good Morning!";
    else if (hour < 18) message = "Good Afternoon!";
    else message = "Good Evening!";
    
    setGreeting(message);
    
    // Level 1 Task 2: Alert greeting based on time
    const timer = setTimeout(() => {
      // We'll use a subtle notification instead of a blocking alert for better UX
      console.log(`${message} Welcome to Cognifyz!`);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    if (activeLevel === 'HOME') {
      return (
        <>
          <Hero onExplore={() => setActiveLevel(InternshipLevel.LEVEL_1)} />
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Internship Structure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.values(InternshipLevel).map((level) => (
                <div 
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className="p-8 glass-card rounded-2xl cursor-pointer hover:shadow-xl transition-all border border-blue-100 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {level.slice(-1)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{level}</h3>
                  <p className="text-gray-600">
                    {level === InternshipLevel.LEVEL_1 && "Foundations of Web Development: HTML, CSS, and basic JavaScript."}
                    {level === InternshipLevel.LEVEL_2 && "Intermediate Skills: Front-end frameworks and responsive design."}
                    {level === InternshipLevel.LEVEL_3 && "Advanced Projects: Image manipulation and professional landing pages."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }

    return (
      <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-500">
        <button 
          onClick={() => setActiveLevel('HOME')}
          className="mb-8 flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          ← Back to Home
        </button>
        <LevelSection level={activeLevel} />
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeLevel={activeLevel} onSelect={setActiveLevel} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
      
      {/* Level 1 Task 2 Greeting Overlay (Visual alternative to alert) */}
      <div className="fixed top-24 right-4 z-50">
        <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-blue-100 flex items-center gap-3 animate-bounce">
          <span className="text-blue-600 text-xl font-bold">👋</span>
          <span className="font-medium text-gray-800">{greeting}</span>
        </div>
      </div>

      <ChatAssistant />
    </div>
  );
};

export default App;

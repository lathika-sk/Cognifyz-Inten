
import React from 'react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20 pointer-events-none">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-blue-600 to-indigo-600"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-blue-600">Web Developer Internship</span>
              <span className="block">Opportunities at Cognifyz Technologies</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Step into the world of professional web development with our immersive 3-level internship program. 
              Designed for aspiring developers, our program bridges the gap between data and intelligence. 
              Duration: 8-12 weeks of hands-on learning and project building.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <button 
                onClick={onExplore}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
              >
                Explore Tasks
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all">
                Apply Now
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Highlights</h4>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">✅ Real-world project experience</li>
                  <li className="flex items-center gap-2">✅ Dedicated mentorship</li>
                  <li className="flex items-center gap-2">✅ Industry certificate</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Qualifications</h4>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">🛠️ HTML5 / CSS3 / Modern UI</li>
                  <li className="flex items-center gap-2">🛠️ JavaScript & Frameworks</li>
                  <li className="flex items-center gap-2">🛠️ Passion for Learning</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden group">
               <img 
                 src="https://picsum.photos/seed/cognifyz/800/600" 
                 alt="Internship Workspace"
                 className="w-full transform group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium opacity-80">Where Data Meets Intelligence</p>
                  <p className="text-xl font-bold">Empowering Future Developers</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

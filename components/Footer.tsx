
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">Cognifyz</span>
          </div>
          <p className="text-gray-600 max-w-sm">
            Empowering the next generation of web developers through expert mentorship and real-world project experience. Where Data Meets Intelligence.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li>📧 contact@cognifyz.com</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>📍 123 Tech Avenue, Silicon Valley</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Social Media</h4>
          <div className="flex gap-4">
            {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map(platform => (
              <a key={platform} href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">{platform}</span>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  {platform[0]}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-100 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Cognifyz Technologies. All rights reserved.</p>
        <p className="mt-2 uppercase tracking-widest opacity-50">Web Development Internship Program</p>
      </div>
    </footer>
  );
};

export default Footer;

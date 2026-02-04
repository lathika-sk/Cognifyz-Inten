
import React, { useState, useEffect } from 'react';

const images = [
  'https://picsum.photos/seed/img1/800/500',
  'https://picsum.photos/seed/img2/800/500',
  'https://picsum.photos/seed/img3/800/500',
  'https://picsum.photos/seed/img4/800/500',
];

const ImageGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Level 3 Task 1: Automatic slideshow transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12">
      {/* Slideshow */}
      <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Slideshow"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-white w-6' : 'bg-white/40'}`} 
            />
          ))}
        </div>
      </div>

      {/* Gallery with thumbnails that enlarge */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Interactive Thumbnail Gallery</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div 
              key={img} 
              onClick={() => setSelectedImage(img)}
              className="group relative cursor-pointer overflow-hidden rounded-xl h-32 md:h-40"
            >
              <img 
                src={img} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt="Thumbnail"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-sm">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition-transform">✕</button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in duration-300"
            alt="Full size"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

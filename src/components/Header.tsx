import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="relative px-6 py-16 md:px-24 max-w-6xl mx-auto">
      <div className="relative">
        <h1 className="text-5xl md:text-6xl font-semibold mb-4">Adarsh Pawar</h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">Frontend Developer | Accessibility Specialist</h2>
        
        <div className="flex flex-col md:flex-row gap-4 text-gray-600">
          <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <MapPin size={18} />
            <span>Pune, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <a href="mailto:adarshpawar28@gmail.com" className="hover:text-blue-600 underline transition-colors">
              adarshpawar28@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Phone size={18} />
            <span>+91-9115511004</span>
          </div>
        </div>
      </div>
    </header>
  );
}
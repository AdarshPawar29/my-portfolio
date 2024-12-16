import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 py-8 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600">© 2024 Adarsh Pawar. All rights reserved.</p>
        <div className="flex gap-4">
          <a 
            href="https://github.com" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
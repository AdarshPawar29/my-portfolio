import React from 'react';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Awards } from './components/Awards';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-[SF Pro Display]">
      <Header />
      <main className="px-6 md:px-24 max-w-6xl mx-auto">
        <Summary />
        <Skills />
        <Experience />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
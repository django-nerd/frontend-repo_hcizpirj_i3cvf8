import React from 'react';
import Hero from './components/Hero';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-white/10 bg-black/60 px-6 py-3 backdrop-blur">
        <a href="#" className="text-sm font-semibold tracking-wide text-white">
          AI Researcher
        </a>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#publications" className="hover:text-white">Publications</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Publications />
        <Experience />
        <Contact />
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-12 text-center text-xs text-white/50">
        © {new Date().getFullYear()} AI Researcher. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

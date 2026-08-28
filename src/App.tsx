import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-blue-500/30">
      <Hero />
      <About />
      <Projects />
      <Skills />
      
      <footer className="py-8 text-center text-slate-500 text-sm mt-20 border-t border-slate-800">
        <p>© {new Date().getFullYear()} Kerem Barbaros Karnabat. All rights reserved.</p>
        <p className="mt-2">Built with React, Vite & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;

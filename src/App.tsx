import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />

        <footer className="py-8 text-center text-slate-500 text-sm mt-10 border-t border-slate-800/50 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} Kerem Barbaros Karnabat. All rights reserved.</p>
          <p className="mt-2">Built with React, Vite & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

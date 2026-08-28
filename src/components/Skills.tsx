import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["C#", "Python", "MonoGame", ".NET", "React", "TypeScript", "Node.js", "Go"]
  },
  {
    title: "Game Engines & 3D",
    skills: ["Unity", "Autodesk Maya", "Machinations"]
  },
  {
    title: "Data & Automation",
    skills: ["n8n", "Pandas", "Backtrader", "yfinance", "GitHub Actions"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto text-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 inline-block border-b-2 border-purple-500/50 pb-2">Tech Stack & Tools</h2>
      <div className="space-y-12">
        {skillCategories.map((category, idx) => {
          // Double the skills array to create a seamless loop
          const infiniteSkills = [...category.skills, ...category.skills, ...category.skills];
          
          return (
            <div key={idx} className="relative">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">{category.title}</h3>
              
              {/* Marquee Container */}
              <div className="flex overflow-hidden relative w-full">
                {/* Left/Right Fade Masks */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
                
                <motion.div 
                  className="flex gap-4 w-max"
                  animate={{ x: ["0%", "-33.33%"] }}
                  transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: category.skills.length * 2.5 // Speed depends on item count
                  }}
                >
                  {infiniteSkills.map((skill, i) => (
                    <div 
                      key={`${skill}-${i}`} 
                      className="bg-slate-900/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-slate-700/50 text-slate-300 font-medium hover:border-emerald-400/50 hover:text-emerald-300 transition-colors cursor-default whitespace-nowrap"
                    >
                      {skill}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

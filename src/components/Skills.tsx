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
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 border-b border-slate-700 pb-2">Tech Stack & Tools</h2>
      <div className="space-y-8">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map(skill => (
                <div key={skill} className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-slate-300 font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

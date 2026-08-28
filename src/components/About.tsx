import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900/30 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-slate-800/60"
      >
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-700 pb-2">About Me</h2>
        <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
          <p>
            I'm a software developer with a background in <strong>Computer Programming</strong>, currently studying <strong>Digital Game Design</strong>. 
            I focus on gameplay programming, workflow automation, and building useful tools.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li><strong>Game Development:</strong> Programming core mechanics, character controllers, and interactive systems (C#, Unity, MonoGame).</li>
            <li><strong>Workflow & Automation:</strong> Building CLIs, plugins, and backend tools to optimize development and daily tasks (Python, Go).</li>
            <li><strong>3D Pipeline:</strong> Modeling, rigging, and animation workflows for real-time engines (Autodesk Maya).</li>
            <li><strong>Algorithmic Trading:</strong> Developing quantitative trading scripts, market scanners, and backtests (Python, Pandas, yfinance).</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

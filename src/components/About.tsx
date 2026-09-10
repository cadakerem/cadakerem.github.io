import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900/30 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-slate-800/60 text-center shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-8 inline-block border-b-2 border-emerald-500/50 pb-2">About Me</h2>
        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
          <p>
            Hi! I'm an engineer dedicated to making the lives of developers and artists easier. While my academic roots lie in <strong>Computer Programming</strong> and <strong>Digital Game Design</strong>, my true passion is building the invisible infrastructure that makes software development fast, secure, and friction-free.
          </p>
          <p>
            My current focus heavily revolves around <strong>Developer Tooling</strong> and <strong>AI-Assisted Workflows</strong>. Whether I'm architecting a local LLM proxy to bypass enterprise restrictions, designing autonomous code review agents, or crafting keyless, privacy-focused Linux environments, I love solving complex systemic bottlenecks.
          </p>
          <p>
            I believe that the best tools are the ones that get out of your way. From automation scripts in Python to sleek CLI utilities and asset pipelines in C#, my goal is always the same: empowering developers to write better code, faster.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

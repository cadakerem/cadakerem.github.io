import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900/30 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-slate-800/60 text-center"
      >
        <h2 className="text-3xl font-bold mb-8 inline-block border-b-2 border-emerald-500/50 pb-2">About Me</h2>
        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
          <p>
            Hi! I'm a software developer with a strong foundation in <strong>Computer Programming</strong> and an ongoing passion for <strong>Digital Game Design</strong>. 
            I thrive at the intersection of logical problem-solving and creative interactive experiences.
          </p>
          <p>
            Recently, my work has heavily focused on <strong>SecOps, AI Agents, and Web Tooling</strong>. From architecting privacy-focused Linux environments and autonomous LLM code reviewers, to building client-side React applications for game developers, my goal is always to engineer robust, fail-safe systems.
          </p>
          <p>
            Whether I'm programming core game mechanics in C#, automating workflows with TypeScript and Python, or developing quantitative trading bots, I love bridging the gap between low-level system architecture and high-level user experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

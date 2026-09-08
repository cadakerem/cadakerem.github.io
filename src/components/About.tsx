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
            Hi! I'm a software developer who loves building practical tools and interactive experiences. With a background in <strong>Computer Programming</strong> and a current focus on <strong>Digital Game Design</strong>, I enjoy finding the sweet spot between creative problem-solving and writing clean, reliable code.
          </p>
          <p>
            Lately, I've been diving into <strong>Security, AI Integrations, and Web Tooling</strong>. Whether it's putting together a privacy-focused Linux environment, building an AI code reviewer, or creating React tools for game developers, I'm always looking to build things that are genuinely useful.
          </p>
          <p>
            At the end of the day, whether I'm working on game mechanics in C#, automating workflows with TypeScript and Python, or tinkering with data, I just really enjoy making different technologies work together seamlessly.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

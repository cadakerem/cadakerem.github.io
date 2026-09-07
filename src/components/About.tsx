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
            Recently, I've been focusing on <strong>Security, AI Integrations, and Web Tooling</strong>. I enjoy building practical solutions—whether that's a privacy-focused Linux setup, an AI-powered code reviewer, or React-based tools for game developers. My goal is always to write clean code that solves real problems.
          </p>
          <p>
            Whether I'm developing core game mechanics in C#, automating daily workflows with TypeScript and Python, or experimenting with data and trading bots, I love connecting different technologies to create seamless experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

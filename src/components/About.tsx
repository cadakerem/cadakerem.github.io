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
            Hi! I'm a software developer with a background in <strong>Computer Programming</strong>, currently studying <strong>Digital Game Design</strong>. I focus on building tools, pipelines, and automations that remove friction from software and game development workflows.
          </p>
          <p>
            Whether it's automating repetitive asset tasks for games, building CLI utilities, or setting up workflow automations, I enjoy solving practical development bottlenecks. I care about writing tools that actually get used and make day-to-day development simpler.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

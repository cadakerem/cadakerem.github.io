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
            Hi! I'm a software developer with a background in <strong>Computer Programming</strong>, currently studying <strong>Digital Game Design</strong>. I work across different areas of software and game development, building tools, systems, and automations that solve practical problems and make development workflows more efficient.
          </p>
          <p>
            My work covers a variety of projects, from developer tools and automation to game development and other software projects. I enjoy exploring new technologies, experimenting with different ideas, and finding practical ways to improve the development process.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

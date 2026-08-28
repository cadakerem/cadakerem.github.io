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
            Whether I'm engineering core mechanics in Unity, building automated workflow tools with Python and Go, or designing 3D character pipelines, my goal is always to create seamless and optimized systems. I love bridging the gap between game development and backend engineering.
          </p>
          <p>
            Beyond game engines, I also have a deep interest in financial technology—developing algorithmic trading scripts, market scanners, and bots that analyze real-time data to make smart decisions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

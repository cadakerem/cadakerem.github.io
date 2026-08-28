import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900/30 backdrop-blur-md p-10 md:p-14 rounded-2xl border border-slate-800/60 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Whether you have a project in mind, a job opportunity, or just want to say hi — my inbox is always open.
        </p>

        <a
          href="mailto:kbarbaros@hotmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 mb-10 text-lg"
          aria-label="E-posta gönder"
        >
          <FaEnvelope size={20} />
          Say Hello
        </a>

        <div className="flex gap-8 justify-center mt-4">
          <a
            href="https://github.com/cadakerem"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors flex flex-col items-center gap-2 text-sm"
            aria-label="GitHub profili"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kerembarbaroskarnabat/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors flex flex-col items-center gap-2 text-sm"
            aria-label="LinkedIn profili"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

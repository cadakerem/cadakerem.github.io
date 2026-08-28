import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8 relative w-40 h-40 mx-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 blur-md opacity-50"></div>
          <img
            src="https://github.com/cadakerem.png"
            alt="Kerem Barbaros Karnabat - Profile Photo"
            className="relative w-full h-full object-cover rounded-full border-2 border-slate-700/50 shadow-2xl"
          />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Kerem Barbaros Karnabat
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Software Developer · Digital Game Designer · Workflow Automation
        </h2>

        <div className="flex gap-6 justify-center mb-8">
          <a
            href="https://github.com/cadakerem"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub profili"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/kerembarbaroskarnabat/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn profili"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:kbarbaros@hotmail.com"
            className="text-slate-400 hover:text-red-400 transition-colors"
            aria-label="E-posta gönder"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

      </motion.div>
    </section>
  );
}

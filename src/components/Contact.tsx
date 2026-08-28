import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegCopy, FaCheck } from 'react-icons/fa';

const EMAIL = 'kbarbaros@hotmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900/30 backdrop-blur-md p-10 md:p-14 rounded-2xl border border-slate-800/60 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          For project ideas, collaboration opportunities, or any questions — feel free to reach out via email.
        </p>

        {/* Mail buttons row */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            aria-label="E-posta gönder"
          >
            <FaEnvelope size={18} />
            Send an Email
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="E-posta adresini kopyala"
          >
            {copied ? (
              <>
                <FaCheck size={16} className="text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <FaRegCopy size={16} />
                Copy Email
              </>
            )}
          </button>
        </div>

        <div className="flex gap-8 justify-center">
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

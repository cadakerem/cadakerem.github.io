import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "ReviewForge",
    description: "A GitHub Action that reviews Pull Requests for security flaws and provides auto-fixes.",
    link: "https://github.com/cadakerem/ReviewForge",
    tags: ["GitHub Actions", "AI", "Security"]
  },
  {
    title: "Agentic Vault",
    description: "An Obsidian plugin for automated Git sync and Issue-Driven Development workflows.",
    link: "https://github.com/cadakerem/agentic-vault",
    tags: ["Obsidian", "TypeScript", "Automation"]
  },
  {
    title: "Sprite Packer Web",
    description: "A browser-based tool for game developers to pack PNGs into optimized sprite sheets.",
    link: "https://github.com/cadakerem/sprite-packer-web",
    tags: ["Web", "Tooling", "GameDev"]
  },
  {
    title: "Portfolio AI",
    description: "A Telegram bot for tracking stocks and TEFAS mutual funds.",
    link: "https://github.com/cadakerem/portfolio-ai",
    tags: ["Python", "Telegram Bot", "Finance"]
  },
  {
    title: "Coffin Clash",
    description: "A local 2-player combat and wave-defense game.",
    link: "https://github.com/cadakerem/coffin-clash",
    tags: ["Unity", "C#", "Game"]
  },
  {
    title: "TLOU Simulation",
    description: "A Machinations simulation analyzing resource management and combat pressure.",
    link: "https://github.com/cadakerem/tlou-simulation",
    tags: ["Game Design", "Machinations", "Simulation"]
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 border-b border-slate-700 pb-2">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-900/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/40 transition-all flex flex-col h-full hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <FaGithub size={20} />
              </a>
            </div>
            <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

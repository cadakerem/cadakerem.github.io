import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import fetchedProjects from '../data/projects.json';

// Fallback manual projects to mix with fetched ones until user tags more repos with 'portfolio'
const manualProjects = [
  {
    title: "Amnesic Ghost Framework",
    description: "Fail-closed OpSec architecture for plausible deniability and anonymous RAM-OS routing.",
    link: "https://github.com/cadakerem/amnesic-ghost-framework",
    demo: null,
    tags: ["Bash", "Security", "OpSec"]
  },
  {
    title: "ReviewForge",
    description: "A GitHub Action that reviews Pull Requests for security flaws and provides auto-fixes.",
    link: "https://github.com/cadakerem/ReviewForge",
    demo: null,
    tags: ["GitHub Actions", "AI", "Security"]
  },
  {
    title: "Agentic Vault",
    description: "An Obsidian plugin for automated Git sync and Issue-Driven Development workflows.",
    link: "https://github.com/cadakerem/agentic-vault",
    demo: null,
    tags: ["Obsidian", "TypeScript", "Automation"]
  },
  {
    title: "Sprite Packer Web",
    description: "A browser-based tool for game developers to pack PNGs into optimized sprite sheets.",
    link: "https://github.com/cadakerem/sprite-packer-web",
    demo: "https://cadakerem.github.io/sprite-packer-web/",
    tags: ["Web", "Tooling", "GameDev"]
  }
];

// Combine and format fetched projects
const apiProjects = fetchedProjects.map((p: any) => ({
  title: p.title,
  description: p.description,
  link: p.github,
  demo: p.link !== p.github ? p.link : null,
  tags: p.tech
}));

// Use API projects if we have enough, otherwise merge
const displayProjects = apiProjects.length > 3 ? apiProjects : [...apiProjects, ...manualProjects].filter((v, i, a) => a.findIndex(t => (t.title === v.title)) === i);

// Duplicate the array for infinite marquee effect
const marqueeProjects = [...displayProjects, ...displayProjects];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-full mx-auto text-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 inline-block border-b-2 border-blue-500/50 pb-2">Featured Projects</h2>
      
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left/Right Fade Gradients */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee gap-6 px-3">
          {marqueeProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="bg-slate-900/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/40 transition-all flex flex-col w-80 sm:w-96 flex-shrink-0 text-left"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                <div className="flex gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      aria-label={`${project.title} canlıı demo`}
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={`${project.title} GitHub reposu`}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-slate-700/60 text-slate-300 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

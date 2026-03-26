
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon, ExternalLinkIcon } from './Icons';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group flex flex-col bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-all ${!isExpanded ? 'hover:-translate-y-3 hover:shadow-3xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5' : 'shadow-2xl shadow-indigo-500/20'}`}>
      <div className="relative h-64 overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center gap-4 p-8">
          <a href={project.link} className="bg-white text-slate-900 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all delay-75 hover:bg-indigo-600 hover:text-white">
            Code <GithubIcon />
          </a>
          {project.liveLink && (
            <a href={project.liveLink} className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all delay-100 hover:bg-indigo-700">
              Live Demo <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors cursor-default">{tag}</span>
          ))}
        </div>
        <h3 className="text-2xl font-black mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors dark:text-white">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-indigo-600 dark:text-indigo-400 text-sm font-bold hover:underline mb-6 text-left"
        >
          {isExpanded ? 'Read less...' : 'Read more...'}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">Summary</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.summary}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">Details</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.details}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">Technical Challenge</h4>
          <p className="text-xs text-slate-500 dark:text-slate-500 italic leading-relaxed">
            {project.challenges}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

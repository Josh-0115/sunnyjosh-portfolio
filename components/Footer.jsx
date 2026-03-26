
import React from 'react';
import { GithubIcon, LinkedInIcon, MailIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform overflow-hidden">
              <img 
                src="https://avatars.githubusercontent.com/u/193494114?v=4" 
                alt="Sunny" 
                className="w-full h-full object-cover scale-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-black text-2xl tracking-tighter dark:text-white group-hover:text-indigo-600 transition-colors">Sunny Josh.</span>
          </div>
          <p className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest">Designed for Impact • 2024</p>
        </div>
        <div className="flex gap-8 text-slate-400 dark:text-slate-600">
          <a href="https://github.com/Josh-0115/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-all hover:scale-125  active:scale-95 p-2 bg-slate-100 dark:bg-slate-800 rounded-xl" aria-label="GitHub"><GithubIcon size={28} /></a>
          <a href="https://www.linkedin.com/in/sunny-josh/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-125  active:scale-95 p-2 bg-slate-100 dark:bg-slate-800 rounded-xl" aria-label="LinkedIn"><LinkedInIcon size={28} /></a>
          <a href="mailto:sunnyjosh0115@gmail.com" className="hover:text-red-500 dark:hover:text-red-400 transition-all hover:scale-125  active:scale-95 p-2 bg-slate-100 dark:bg-slate-800 rounded-xl" aria-label="Email"><MailIcon size={28} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

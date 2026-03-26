
import React from 'react';
import { motion } from 'motion/react';
import { GithubIcon, LinkedInIcon, MailIcon, BriefcaseIcon, DownloadIcon, TechIcon } from './Icons';

const Hero = ({ downloadResume }) => {
  return (
    <header id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 dark:bg-indigo-500/2 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
            </span>
            Sunny Josh is building the future of web
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.95]">
            Building Scalable <br />
            <span className="gradient-text">Digital Solutions.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
            Software Developer building scalable web applications with <span className="text-slate-900 dark:text-white font-bold underline decoration-indigo-500 decoration-4 underline-offset-4">modern technologies</span> and <span className="text-slate-900 dark:text-white font-bold underline decoration-indigo-500 decoration-4 underline-offset-4">AI-driven solutions.</span> 
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <a href="#work" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold shadow-2xl shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 hover:shadow-indigo-300 dark:hover:shadow-indigo-900 transition-all active:scale-95 flex items-center justify-center gap-2.5 group hover:-translate-y-1">
              <BriefcaseIcon />
              Explore Portfolio
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
            <button 
              onClick={downloadResume}
              className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl font-bold border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all flex items-center justify-center gap-2.5 shadow-sm hover:-translate-y-1 hover:shadow-md"
            >
              <DownloadIcon />
              View Resume
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start gap-8 text-slate-400 dark:text-slate-600">
             <a href="https://github.com/Josh-0115/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-all hover:scale-125   active:scale-95 inline-block p-2 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-xl" aria-label="GitHub"><GithubIcon size={24} /></a>
             <a href="https://www.linkedin.com/in/sunny-josh/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-125  active:scale-95 inline-block p-2 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl" aria-label="LinkedIn"><LinkedInIcon size={24} /></a>
             <a href="mailto:sunnyjosh0115@gmail.com" className="hover:text-red-500 dark:hover:text-red-400 transition-all hover:scale-125  active:scale-95 inline-block p-2 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl" aria-label="Email"><MailIcon size={24} /></a>
          </div>
        </div>

        {/* Profile Picture Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="shrink-0 order-1 md:order-2 relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-112.5 lg:h-112.5 mx-auto">
            {/* Animated background rings */}
            <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-[80px] rotate-12 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-0 border-2 border-indigo-500/10 rounded-[80px] -rotate-12 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Main Image with custom mask/shape */}
            <div className="relative w-full h-full p-4 group">
              <motion.div 
                whileHover={{ rotate: 0, scale: 0.98 }}
                className="relative w-full h-full overflow-hidden rounded-[70px] md:rounded-[100px] border-4 border-white dark:border-slate-800 shadow-3xl transition-transform duration-700"
              >
                <img 
                  src="https://avatars.githubusercontent.com/u/193494114?v=4" 
                  alt="Sunny" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>

            {/* Status Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 whitespace-nowrap"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">Available for Hire</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;

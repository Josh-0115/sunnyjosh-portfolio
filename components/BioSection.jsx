
import React from 'react';
import { motion } from 'motion/react';
import { GithubIcon, LinkedInIcon, BriefcaseIcon, TechIcon } from './Icons';
import { SKILLS } from '../constants';

const BioSection = () => {
  return (
    <section id="bio" className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-20 animate-in fade-in slide-in-from-bottom-6 duration-500">
        {/* Profile & Bio Section */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[320px] md:max-w-none md:w-2/5"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-indigo-600 rounded-[60px] rotate-6 scale-105 opacity-10 group-hover:rotate-12 transition-transform duration-700"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[60px] border-8 border-white dark:border-slate-800 shadow-3xl">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczOhoX8PVj6yD3LJF7rsZHgD2f0CnFyy87vjU_Ye-GgKJyhlp9ZmAvDI6RupjWqv2_pxgxTInj8j9034a3KUjfOcInTOKeu-VRXEZ8YgMfCVzndKbZm1e7qa9IkSDtYaqAwIqx_2lJFjwdlcJsjclq1-=w676-h869-s-no-gm?authuser=0"
                  alt="Sunny Josh"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-3xl border border-slate-100 dark:border-slate-700 transform group-hover:-translate-y-2 transition-transform hidden lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                    <BriefcaseIcon />
                  </div>
                  <div>
                    <p className="text-2xl font-black dark:text-white">6+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Projects Developed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="w-full md:w-3/5 space-y-8 md:space-y-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-2xl text-xs font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-900/50">
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-ping"></span>
              Available for new projects
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-black dark:text-white leading-[1.1]">
              I build digital products that <span className="text-indigo-600">move the needle</span>.
            </h3>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Based in India, I work with modern technologies to turn ideas into real-world applications that solve problems.
              </p>
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-500 leading-relaxed italic">
                "Sunny doesn't just write code; he engineers intelligence, using prompts and AI to build smarter digital experiences."
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400">
                <a href="https://github.com/Josh-0115/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-all hover:scale-125  active:scale-95 p-2 bg-slate-100 dark:bg-slate-800 rounded-xl" aria-label="GitHub"><GithubIcon size={28} /></a>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400">
                <a href="https://www.linkedin.com/in/sunny-josh/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-125  active:scale-95 p-2 bg-slate-100 dark:bg-slate-800 rounded-xl" aria-label="LinkedIn"><LinkedInIcon size={28} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pt-20 border-t border-slate-200 dark:border-slate-800">
          <div className="md:col-span-7 space-y-8">
            <h3 className="text-4xl md:text-5xl font-black dark:text-white leading-tight">
              Blending engineering <br />with <span className="text-indigo-600">Practical Impact</span>.
            </h3>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I’m Sunny Josh, a developer driven by curiosity and problem-solving, <span className="font-bold text-slate-900 dark:text-slate-100">Who loves turning ideas into efficient, user-focused web applications.</span>
              </p>
              <p>
                I don’t just write code—I focus on creating efficient, scalable, and user-friendly solutions. From debugging complex issues to optimizing performance, I care about the details that improve both user experience and system reliability.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 flex-1 min-w-[200px] hover:border-indigo-500 transition-colors">
                <p className="text-3xl font-black text-indigo-600 mb-1">0-1</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years of Experience</p>
              </div>
              <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 flex-1 min-w-[200px] hover:border-indigo-500 transition-colors">
                <p className="text-3xl font-black text-indigo-600 mb-1">3+</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Projects Deployed</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="md:col-span-5 bg-white dark:bg-slate-800 p-10 rounded-[48px] border-4 border-slate-100 dark:border-slate-700 shadow-2xl shadow-indigo-500/5">
            <h4 className="text-2xl font-black mb-10 dark:text-white">Technical Arsenal</h4>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map(skill => (
                <div key={skill.name} className="px-6 py-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all hover:-translate-y-1 group shadow-sm hover:shadow-indigo-500/40">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="pt-20 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-3xl font-black mb-12 dark:text-white flex items-center gap-4">
            <span className="w-12 h-1 bg-indigo-600 rounded-full"></span>
            My Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative pl-10 border-l-4 border-slate-200 dark:border-slate-700 pb-12">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white dark:bg-slate-950 border-4 border-indigo-600 rounded-full group-hover:scale-150 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/50"></div>
              <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 block">2024 — (sep-Nov)</span>
              <h4 className="text-2xl font-black dark:text-white mb-2 transition-colors group-hover:text-indigo-600">Assistant Software Developer Intern</h4>
              <p className="font-bold text-slate-800 dark:text-slate-200 mb-4">AMARAVATHI Software Innovations Pvt. Ltd., </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
                <li> Designed and developed 2+ responsive web applications using HTML, CSS, and JavaScript following SDLC practices.</li>
                <li>mplemented CRUD operations and integrated REST APIs, improving data processing efficiency by ~30%. </li>
                <li> Performed debugging and testing to resolve application issues and enhance performance. </li>
                <li>Collaborated with cross-functional teams to implement new features and fix production issues.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;

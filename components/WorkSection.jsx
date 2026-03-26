
import React from 'react';
import ProjectCard from './ProjectCard';
import CertificateCard from './CertificateCard';
import BioSection from './BioSection';
import { PROJECTS, CERTIFICATES } from '../constants';

const WorkSection = ({ activeTab, setActiveTab, setCurrentPage }) => {
  return (
    <section id="work" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-16 px-6">
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-[20px] shadow-inner overflow-x-auto max-w-full no-scrollbar">
            <button
              onClick={() => setActiveTab('projects')}
              className={`whitespace-nowrap px-6 sm:px-8 py-3 rounded-[16px] text-xs sm:text-sm font-bold transition-all active:scale-95 ${activeTab === 'projects' ? 'bg-white dark:bg-slate-700 shadow-lg text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              Showcase
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`whitespace-nowrap px-6 sm:px-8 py-3 rounded-[16px] text-xs sm:text-sm font-bold transition-all active:scale-95 ${activeTab === 'certificates' ? 'bg-white dark:bg-slate-700 shadow-lg text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              Credentials
            </button>
            <button
              onClick={() => setActiveTab('bio')}
              className={`whitespace-nowrap px-6 sm:px-8 py-3 rounded-[16px] text-xs sm:text-sm font-bold transition-all active:scale-95 ${activeTab === 'bio' ? 'bg-white dark:bg-slate-700 shadow-lg text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
            >
              About Me
            </button>
          </div>
        </div>

        <div className="min-h-[500px]">
          {activeTab === 'projects' && (
            <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
              {PROJECTS
                .filter(project => project.showOnHome)
                .slice(0, 3)
                .map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div><div className="flex justify-center mt-10">
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105"
                >
                  View More Projects →
                </button>
              </div></>
          )}

          {activeTab === 'certificates' && (
            <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
              {CERTIFICATES
                .filter(cert => cert.showOnHome)
                .slice(0, 3)
                .map(cert => (
                  <CertificateCard key={cert.id} cert={cert} />
                ))}
            </div><div className="flex justify-center mt-10">
                <button
                  onClick={() => setCurrentPage('certifications')}
                  className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105"
                >
                  View More Certificates →
                </button>
              </div></>
          )}

          {activeTab === 'bio' && <BioSection />}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

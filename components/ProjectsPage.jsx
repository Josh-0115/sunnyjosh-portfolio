
import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const ProjectsPage = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black mb-6 dark:text-white">All <span className="text-indigo-600">Projects</span></h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive showcase of my technical work, ranging from high-performance dashboards to AI-driven mobile applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

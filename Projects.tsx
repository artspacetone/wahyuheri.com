import React from 'react';
import { PROJECTS_DATA } from './constants';
import type { Project } from './types';
import { ProjectIcon } from './components/icons/ProjectIcon';

interface ProjectCardProps {
  project: Project;
  onCardClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCardClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group"
    >
      <div className="relative">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 mb-4 text-sm flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="bg-slate-200 text-slate-700 text-xs font-medium px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
        <button
            onClick={onCardClick}
            className="mt-auto w-full text-center px-4 py-2 bg-sky-50 text-sky-700 font-semibold rounded-md hover:bg-sky-100 transition-colors"
        >
            View Details
        </button>
      </div>
    </div>
  );
};

interface ProjectsProps {
    onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <ProjectIcon className="w-7 h-7 text-sky-600" />
        <h2 className="text-2xl font-bold text-slate-800">Key Achievements & Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onCardClick={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

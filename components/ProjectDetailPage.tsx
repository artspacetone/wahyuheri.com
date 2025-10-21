import React from 'react';
import type { Project } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl animate-fade-in-up">
        <header className="bg-slate-50 rounded-t-lg p-6 border-b border-slate-200 flex justify-between items-center">
            <h2 id="project-title" className="text-2xl font-bold text-slate-900">{project.title}</h2>
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold"
                aria-label="Back to projects"
            >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Back</span>
            </button>
        </header>

        <div className="p-8">
          <p className="text-slate-600 leading-relaxed mb-8 border-l-4 border-sky-500 pl-4 bg-slate-50 p-4 rounded-r-md">
            {project.detailedDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mb-6">Project Workflow</h3>

          <div className="space-y-4">
            {project.flowchartSteps.map((step, index, arr) => (
              <React.Fragment key={step.step}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white font-bold rounded-full flex items-center justify-center ring-4 ring-sky-100">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
                {index < arr.length - 1 && (
                  <div className="pl-5">
                    <ArrowDownIcon className="w-5 h-5 text-slate-300 ml-2.5 my-1" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 transition-colors">
                  <ExternalLinkIcon className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 text-white font-semibold rounded-md hover:bg-slate-700 transition-colors">
                  <ExternalLinkIcon className="w-5 h-5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
  );
};

export default ProjectDetailPage;

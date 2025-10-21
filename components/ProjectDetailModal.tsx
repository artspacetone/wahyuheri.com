import React from 'react';
import type { Project } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { ArrowDownIcon } from './icons/ArrowDownIcon';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sticky top-0 bg-white border-b border-slate-200 p-6 z-10 flex justify-between items-center">
            <h2 id="project-title" className="text-2xl font-bold text-slate-900">{project.title}</h2>
            <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close project details"
            >
                <CloseIcon className="w-7 h-7" />
            </button>
        </header>

        <div className="p-8">
          <p className="text-slate-600 leading-relaxed mb-8 border-l-4 border-sky-500 pl-4">
            {project.detailedDescription || project.description}
          </p>

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

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;

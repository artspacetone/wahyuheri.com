import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import type { Experience } from '../types';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const ExperienceItem: React.FC<{ experience: Experience; isLast: boolean }> = ({ experience, isLast }) => (
  <div className="flex">
    {/* Timeline Column */}
    <div className="flex flex-col items-center mr-6">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center ring-8 ring-white">
         <div className="w-3 h-3 bg-sky-100 rounded-full"></div>
      </div>
      {!isLast && <div className="w-px flex-grow bg-slate-200 mt-2"></div>}
    </div>

    {/* Content Column */}
    <div className={`pb-12 w-full`}>
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
        <h3 className="text-xl font-bold text-slate-900">{experience.role}</h3>
        <p className="text-sm text-slate-500 sm:text-right flex-shrink-0 mt-1 sm:mt-0">{experience.period}</p>
      </div>
      <p className="text-md font-medium text-slate-600 mb-3">{experience.company}, {experience.location}</p>
      <ul className="list-disc pl-5 space-y-2 text-slate-600">
        {experience.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <BriefcaseIcon className="w-7 h-7 text-sky-600" />
        <h2 className="text-2xl font-bold text-slate-800">Work Experience</h2>
      </div>
      <div>
        {EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceItem
            key={index}
            experience={exp}
            isLast={index === EXPERIENCE_DATA.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
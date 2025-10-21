import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { EducationIcon } from './icons/EducationIcon';

const Education: React.FC = () => {
  return (
    <section>
       <div className="flex items-center gap-3 mb-4">
        <EducationIcon className="w-7 h-7 text-sky-600" />
        <h2 className="text-2xl font-bold text-slate-800">Education</h2>
      </div>
      {EDUCATION_DATA.map((edu, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">{edu.degree}</h3>
          <p className="text-slate-600">{edu.institution}</p>
          {edu.gpa && (
            <p className="text-sm text-slate-500 mt-1">GPA: {edu.gpa}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;
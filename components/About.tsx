import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-sky-500 pb-2 mb-4">
        Professional Summary
      </h2>
      <p className="text-base leading-relaxed">
        {PERSONAL_INFO.professionalSummary}
      </p>
    </section>
  );
};

export default About;
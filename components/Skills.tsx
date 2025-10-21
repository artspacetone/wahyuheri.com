import React, { useState, useEffect } from 'react';
import { SKILLS_DATA } from '../constants';

const SkillBar: React.FC<{ name: string; proficiency: number }> = ({ name, proficiency }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Memberikan sedikit penundaan untuk memicu animasi CSS saat komponen dipasang
    const timer = setTimeout(() => {
      setWidth(proficiency);
    }, 100);
    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <div className="w-full group" role="progressbar" aria-valuenow={proficiency} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} proficiency`}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-sm font-medium text-slate-500">{proficiency}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div
          className="bg-sky-500 group-hover:bg-sky-600 h-2.5 rounded-full"
          style={{
            width: `${width}%`,
            transition: 'width 1.2s cubic-bezier(0.25, 1, 0.5, 1)' 
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-sky-500 pb-2 mb-6">
        Core Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
        {SKILLS_DATA.map((skillCategory) => (
          <div key={skillCategory.category}>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">{skillCategory.category}</h3>
            <div className="space-y-4">
              {skillCategory.items.map((item) => (
                <SkillBar key={item.name} name={item.name} proficiency={item.proficiency} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

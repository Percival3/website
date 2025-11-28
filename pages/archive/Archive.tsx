import React from 'react';

export const Archive: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-surface-on mb-8">Project Archive</h1>
      <div className="relative border-l-2 border-outline-variant ml-3 space-y-12 pb-12">
        {[
          { year: '2022', title: 'Legacy System Migration', desc: 'Migrated a 10-year-old monolithic app to microservices.' },
          { year: '2021', title: 'Educational Portal', desc: 'Developed a learning management system for a local university.' },
          { year: '2019', title: 'First Open Source Contribution', desc: 'Merged first PR to a major React UI library.' }
        ].map((item, idx) => (
          <div key={idx} className="relative pl-8">
            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-surface-bright"></span>
            <span className="text-sm font-bold text-primary mb-1 block">{item.year}</span>
            <h3 className="text-xl font-bold text-surface-on">{item.title}</h3>
            <p className="mt-2 text-surface-onVariant">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
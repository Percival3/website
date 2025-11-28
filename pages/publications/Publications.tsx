import React from 'react';

export const Publications: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-surface-on border-b border-outline-variant/50 pb-4">Selected Publications</h1>
      
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-surface-bright/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-outline-variant/30 hover:border-primary-container hover:bg-surface-bright/80 transition-all duration-300">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold text-surface-on">Research Paper Title #{item}: A Deep Dive into Structured Web Apps</h2>
            <span className="inline-block bg-secondary-container/80 text-secondary-onContainer rounded-full px-3 py-1 text-xs font-semibold">2023</span>
          </div>
          <p className="mt-2 text-surface-onVariant">
            A. Developer, B. Colleague, C. Mentor. Published in <em>Journal of Web Engineering</em>.
          </p>
          <div className="mt-4 flex gap-3">
             <button className="text-primary text-sm font-medium hover:underline hover:text-primary-onContainer">PDF</button>
             <button className="text-primary text-sm font-medium hover:underline hover:text-primary-onContainer">Cite</button>
             <button className="text-primary text-sm font-medium hover:underline hover:text-primary-onContainer">Abstract</button>
          </div>
        </div>
      ))}
    </div>
  );
};
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-6 py-12 sm:px-12">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">About This Project</h1>
            
            <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    This template demonstrates how to structure a modern frontend application with a focus on maintainability and separation of concerns. While utilizing React's component-based architecture, we've organized the file system to mimic the clarity found in static site generators.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Why this structure?</h3>
                <ul className="list-disc pl-6 space-y-3 text-slate-600">
                    <li>
                        <strong className="text-slate-900">Scalability:</strong> As the application grows, having dedicated folders for pages prevents the root directory from becoming cluttered.
                    </li>
                    <li>
                        <strong className="text-slate-900">Discoverability:</strong> New developers can easily locate where a route is defined by looking at the <code>pages</code> directory.
                    </li>
                    <li>
                        <strong className="text-slate-900">Consistency:</strong> Using a shared Layout component ensures navigation, footers, and global styles remain consistent across all views.
                    </li>
                </ul>

                <div className="mt-10 p-6 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {['React 18', 'TypeScript', 'Tailwind CSS', 'Vite-ready Structure'].map((tech) => (
                            <span key={tech} className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';

export const Article: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-surface-bright/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-sm border border-outline-variant/50">
       <h1 className="text-4xl font-bold text-surface-on mb-8 tracking-tight">Articles & Essays</h1>
       
       {/* Use prose-slate for better color contrast with the light blue theme, customized with theme colors */}
       <div className="prose prose-slate dark:prose-invert lg:prose-lg max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary-onContainer prose-strong:text-surface-on">
          <p className="lead text-surface-onVariant">
            This section lists informal articles, blog posts, and thoughts that don't fit into formal publications. 
            The layout below demonstrates standard Markdown rendering styles.
          </p>

          <hr className="border-outline-variant" />

          {/* Example of Markdown-like content structure */}
          <div className="not-prose grid gap-6 mt-8">
             <div className="group cursor-pointer p-6 rounded-2xl bg-surface-bright/50 hover:bg-surface-bright/80 border border-transparent hover:border-primary-container transition-all duration-300 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary bg-primary-container/50 px-3 py-1 rounded-full">Engineering</span>
                    <span className="text-sm text-surface-onVariant">October 12, 2023</span>
                </div>
                <h3 className="text-2xl font-bold text-surface-on group-hover:text-primary transition-colors mb-2">The Future of React Server Components</h3>
                <p className="text-surface-onVariant line-clamp-2">
                    An exploration of how server-side rendering is evolving to reduce client-side bundle sizes while maintaining the interactivity we love. We dive deep into the architecture...
                </p>
             </div>

             <div className="group cursor-pointer p-6 rounded-2xl bg-surface-bright/50 hover:bg-surface-bright/80 border border-transparent hover:border-primary-container transition-all duration-300 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-tertiary bg-tertiary-container/50 px-3 py-1 rounded-full">Architecture</span>
                    <span className="text-sm text-surface-onVariant">September 05, 2023</span>
                </div>
                <h3 className="text-2xl font-bold text-surface-on group-hover:text-primary transition-colors mb-2">Why Folder Structure Matters</h3>
                <p className="text-surface-onVariant line-clamp-2">
                    Structuring large applications for maintainability is often overlooked. In this essay, we discuss the "Screaming Architecture" pattern and how it applies to modern React apps.
                </p>
             </div>
          </div>
       </div>
    </div>
  );
};
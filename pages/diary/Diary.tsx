import React from 'react';

export const Diary: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-surface-on mb-8">Personal Diary</h1>
      
      <div className="space-y-8">
         <article className="bg-secondary-container/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-outline-variant/20 rotate-1 transform hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-4">
               <span className="font-handwriting text-2xl text-secondary-onContainer">Dear Diary...</span>
               <span className="text-sm text-secondary-onContainer/70 ml-auto">Oct 24, 2023</span>
            </div>
            <p className="text-secondary-onContainer italic font-serif leading-relaxed">
               Today I finally figured out the complex state management issue in the new archive project. 
               It feels amazing when the pieces of the puzzle just click together. Also, had great coffee this morning.
            </p>
         </article>

         <article className="bg-surface-bright/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-outline-variant/30 -rotate-1 transform hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-4">
               <span className="font-handwriting text-2xl text-surface-on">Reflection</span>
               <span className="text-sm text-surface-onVariant ml-auto">Oct 20, 2023</span>
            </div>
            <p className="text-surface-onVariant italic font-serif leading-relaxed">
               Reading about historical social work practices. It is fascinating how much the methodology has evolved, 
               yet the core empathy remains the same.
            </p>
         </article>
      </div>
    </div>
  );
};
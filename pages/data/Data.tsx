import React from 'react';

export const Data: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-surface-on mb-8">Datasets & Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-surface-bright/60 backdrop-blur-md rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-primary-container/80 p-4 border-b border-primary/10">
               <h3 className="font-semibold text-primary-onContainer">Social Mobility Dataset 2023</h3>
            </div>
            <div className="p-6">
               <p className="text-surface-onVariant mb-4 text-sm">A comprehensive dataset tracking social mobility trends across 50 major cities.</p>
               <div className="flex gap-2">
                  <span className="text-xs bg-surface-container/50 border border-outline-variant/20 text-surface-onVariant px-2 py-1 rounded">CSV</span>
                  <span className="text-xs bg-surface-container/50 border border-outline-variant/20 text-surface-onVariant px-2 py-1 rounded">JSON</span>
                  <span className="text-xs bg-surface-container/50 border border-outline-variant/20 text-surface-onVariant px-2 py-1 rounded">45 MB</span>
               </div>
               <button className="mt-4 w-full bg-primary/90 text-primary-on py-2 rounded-xl text-sm hover:bg-primary hover:shadow transition-all font-medium">Download</button>
            </div>
         </div>
         {/* More placeholders */}
         <div className="bg-surface-bright/60 backdrop-blur-md rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-tertiary-container/80 p-4 border-b border-tertiary/10">
               <h3 className="font-semibold text-tertiary-onContainer">Archive Metadata Collection</h3>
            </div>
            <div className="p-6">
               <p className="text-surface-onVariant mb-4 text-sm">Metadata extracts from the national social work archive project.</p>
               <div className="flex gap-2">
                  <span className="text-xs bg-surface-container/50 border border-outline-variant/20 text-surface-onVariant px-2 py-1 rounded">SQL</span>
                  <span className="text-xs bg-surface-container/50 border border-outline-variant/20 text-surface-onVariant px-2 py-1 rounded">12 MB</span>
               </div>
               <button className="mt-4 w-full bg-tertiary/90 text-tertiary-on py-2 rounded-xl text-sm hover:bg-tertiary hover:shadow transition-all font-medium">Download</button>
            </div>
         </div>
      </div>
    </div>
  );
};
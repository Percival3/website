import React from 'react';

export const SocialWork: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-surface-on mb-6">Social Work & Community Service</h1>
      
      <div className="space-y-12">
         <section>
            <h2 className="text-2xl font-semibold text-surface-on mb-4">Community Outreach Program</h2>
            <div className="bg-surface-bright/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-outline-variant/30 hover:bg-surface-bright/80 transition-all">
               <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800&h=300" alt="Community work" className="w-full h-48 object-cover rounded-xl mb-4" />
               <p className="text-surface-onVariant leading-relaxed">
                  Leading a local initiative to provide digital literacy training to elderly community members. 
                  The program has helped over 200 seniors connect with their families through technology.
               </p>
               <div className="mt-4 flex gap-4 text-sm text-surface-onVariant font-medium">
                  <span className="bg-primary-container/30 px-2 py-1 rounded">Started: Jan 2022</span>
                  <span className="text-outline">|</span>
                  <span className="bg-primary-container/30 px-2 py-1 rounded">Role: Coordinator</span>
               </div>
            </div>
         </section>
      </div>
    </div>
  );
};
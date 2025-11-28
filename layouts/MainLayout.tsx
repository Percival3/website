import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageRoute } from '../types';
import { BackgroundEffect } from '../components/BackgroundEffect';

interface MainLayoutProps {
  children: React.ReactNode;
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  title?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  currentRoute, 
  onNavigate,
  title 
}) => {
  React.useEffect(() => {
    document.title = title ? `${title} | AstroStructure` : 'AstroStructure';
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col relative text-surface-on selection:bg-primary-container selection:text-primary-onContainer overflow-x-hidden transition-colors duration-500">
      {/* Dynamic Background Layer */}
      <div className="fixed inset-0 z-0 bg-background transition-colors duration-500">
        {/* Soft Mesh Gradient - Adaptive via CSS variables (background color) and opacity classes */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-sky-50/50 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 transition-colors duration-500"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary-container/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        
        {/* Animated Particles/Sakura or Rain */}
        <BackgroundEffect />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar currentRoute={currentRoute} onNavigate={onNavigate} />
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

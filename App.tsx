import React, { useState } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/home/Home';
import { Publications } from './pages/publications/Publications';
import { Article } from './pages/article/Article';
import { Data } from './pages/data/Data';
import { SocialWork } from './pages/social-work/SocialWork';
import { Archive } from './pages/archive/Archive';
import { Diary } from './pages/diary/Diary';
import { PageRoute } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(PageRoute.HOME);
  const { t } = useLanguage();

  const renderPage = () => {
    switch (currentRoute) {
      case PageRoute.HOME:
        return <Home />;
      case PageRoute.PUBLICATIONS:
        return <Publications />;
      case PageRoute.ARTICLE:
        return <Article />;
      case PageRoute.DATA:
        return <Data />;
      case PageRoute.SOCIAL_WORK:
        return <SocialWork />;
      case PageRoute.ARCHIVE:
        return <Archive />;
      case PageRoute.DIARY:
        return <Diary />;
      default:
        return <Home />;
    }
  };

  const getPageTitle = () => {
    // Attempt to use translation for title, fallback to capitalized route
    const translatedNav = t(`nav.${currentRoute}`);
    if (translatedNav && !translatedNav.startsWith('nav.')) {
        return translatedNav;
    }
    return currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1).replace('_', ' ');
  };

  return (
    <MainLayout 
      currentRoute={currentRoute} 
      onNavigate={setCurrentRoute}
      title={getPageTitle()}
    >
      {renderPage()}
    </MainLayout>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

import React, { useState } from 'react';
import { PageRoute, Language } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: t(`nav.${PageRoute.PUBLICATIONS}`), route: PageRoute.PUBLICATIONS },
    { label: t(`nav.${PageRoute.ARTICLE}`), route: PageRoute.ARTICLE },
    { label: t(`nav.${PageRoute.DATA}`), route: PageRoute.DATA },
    { label: t(`nav.${PageRoute.SOCIAL_WORK}`), route: PageRoute.SOCIAL_WORK },
    { label: t(`nav.${PageRoute.ARCHIVE}`), route: PageRoute.ARCHIVE },
    { label: t(`nav.${PageRoute.DIARY}`), route: PageRoute.DIARY },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-surface-bright/80 border-b border-outline-variant transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left Section: Theme Toggle & Logo */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-surface-onVariant hover:bg-surface-container hover:text-primary transition-colors focus:outline-none"
              title={theme === 'light' ? "Switch to Night Mode" : "Switch to Day Mode"}
            >
              {theme === 'light' ? (
                // Sun Icon
                <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => onNavigate(PageRoute.HOME)}>
              <span className="text-xl font-bold text-surface-on tracking-tight group-hover:text-primary transition-colors">
                My Portfolio
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => onNavigate(item.route)}
                className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  currentRoute === item.route
                    ? 'bg-primary-container text-primary-onContainer'
                    : 'text-surface-onVariant hover:bg-surface-container hover:text-surface-on'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Switcher Desktop */}
            <div className="ml-4 flex items-center bg-surface-container rounded-full p-1 border border-outline-variant">
                {[Language.EN, Language.ZH, Language.JA].map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            language === lang 
                            ? 'bg-surface-bright shadow-sm text-primary' 
                            : 'text-surface-onVariant hover:text-surface-on'
                        }`}
                    >
                        {lang === Language.EN ? 'EN' : lang === Language.ZH ? '中' : '日'}
                    </button>
                ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             {/* Simple Language Toggle Mobile */}
             <button 
                onClick={() => setLanguage(language === Language.EN ? Language.ZH : language === Language.ZH ? Language.JA : Language.EN)}
                className="text-primary font-bold text-sm bg-primary-container/50 px-2 py-1 rounded-md"
             >
                {language === Language.EN ? 'EN' : language === Language.ZH ? '中' : '日'}
             </button>

             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-surface-onVariant hover:text-surface-on p-2 rounded-md hover:bg-surface-container transition-colors"
                aria-label="Open menu"
             >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-bright border-b border-outline-variant shadow-lg animate-fade-in-down absolute w-full left-0 top-16">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => {
                  onNavigate(item.route);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  currentRoute === item.route
                    ? 'bg-primary-container text-primary-onContainer'
                    : 'text-surface-onVariant hover:bg-surface-container hover:text-surface-on'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-outline-variant mt-2 pt-2">
                 <button 
                    onClick={() => {
                        onNavigate(PageRoute.HOME);
                        setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-surface-onVariant hover:bg-surface-container"
                >
                    {t('nav.backToHome')}
                 </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

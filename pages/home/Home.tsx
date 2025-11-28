import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { PageRoute } from '../../types';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  const quotes = [
    "Stay hungry, stay foolish. - Steve Jobs",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "Code is poetry. - Unknown",
    "The only way to do great work is to love what you do. - Jobs"
  ];

  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16">
        
        {/* Left Column: Profile, Quotes, Contact */}
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-6 md:space-y-8 flex-shrink-0">
          
          {/* Avatar */}
          <div className="relative group mt-2 md:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-surface-bright/50 backdrop-blur-sm shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Scrolling Quotes (Marquee) */}
          <div className="w-full max-w-sm md:max-w-full bg-surface-bright/40 backdrop-blur-md rounded-2xl p-4 overflow-hidden relative h-24 flex items-center border border-outline-variant/30 shadow-sm transition-colors duration-500">
             <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-surface-bright/10 via-transparent to-surface-bright/10 z-10"></div>
             <div className="animate-marquee-vertical flex flex-col items-center space-y-6 w-full text-center">
                {[...quotes, ...quotes].map((quote, i) => (
                  <p key={i} className="text-xs md:text-sm text-surface-onVariant italic font-medium px-2 min-h-[20px]">
                    "{quote}"
                  </p>
                ))}
             </div>
             <style>{`
               @keyframes marquee-vertical {
                 0% { transform: translateY(0); }
                 100% { transform: translateY(-50%); }
               }
               .animate-marquee-vertical {
                 animation: marquee-vertical 15s linear infinite;
               }
             `}</style>
          </div>

          {/* Contact Links */}
          <div className="w-full max-w-sm md:max-w-full space-y-4">
            <h3 className="text-sm font-bold text-surface-on uppercase tracking-wide text-center">{t('home.getInTouch')}</h3>
            
            {/* Email - Full width button */}
            <a href="mailto:example@email.com" className="flex items-center justify-center space-x-3 p-3 rounded-2xl bg-surface-bright/60 backdrop-blur-md hover:bg-primary-container hover:text-primary-onContainer transition-colors text-surface-onVariant border border-outline-variant/30 shadow-sm group">
                <svg className="w-5 h-5 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span className="text-sm font-medium">example@email.com</span>
            </a>

            {/* Horizontal Social Icons */}
            <div className="flex justify-center gap-4 pt-2 flex-wrap bg-surface-bright/30 backdrop-blur-sm p-3 rounded-2xl border border-outline-variant/30">
               {/* Bilibili */}
               <a href="#" className="p-2 text-surface-onVariant hover:text-[#00AEEC] hover:bg-[#00AEEC]/10 rounded-full transition-all transform hover:scale-110" title="Bilibili">
                  <span className="sr-only">Bilibili</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.758v6.842c-.054 1.51-.56 2.769-1.56 3.773-.995 1.004-2.254 1.524-3.773 1.56H5.333c-1.51-.054-2.769-.578-3.773-1.574-1.004-.995-1.524-2.254-1.56-3.773V9.985c.054-1.51.56-2.769 1.56-3.758.995-1.004 2.254-1.524 3.773-1.574h.854l-1.9-1.9c-.224-.224-.235-.584-.037-.796.223-.224.588-.224.814 0l3.078 3.078h7.715l3.078-3.078c.224-.224.59-.224.814 0 .2.212.187.572-.037.796l-1.9 1.9ZM7.5 13.609c-.896 0-1.625.728-1.625 1.625s.729 1.625 1.625 1.625 1.625-.728 1.625-1.625-.728-1.625-1.625-1.625Z" />
                  </svg>
               </a>

               {/* Youtube */}
               <a href="#" className="p-2 text-surface-onVariant hover:text-[#FF0000] hover:bg-[#FF0000]/10 rounded-full transition-all transform hover:scale-110" title="Youtube">
                  <span className="sr-only">Youtube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
               </a>
               
               {/* X (formerly Twitter) */}
               <a href="#" className="p-2 text-surface-onVariant hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-all transform hover:scale-110" title="X">
                  <span className="sr-only">X</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
               </a>

               {/* Rednote (Xiaohongshu) */}
               <a href="#" className="p-2 text-surface-onVariant hover:text-[#FF2442] hover:bg-[#FF2442]/10 rounded-full transition-all transform hover:scale-110" title="Rednote">
                   <span className="sr-only">Rednote</span>
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" fillRule="evenodd" clipRule="evenodd"/>
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                   </svg>
               </a>

               {/* Telegram */}
               <a href="#" className="p-2 text-surface-onVariant hover:text-[#24A1DE] hover:bg-[#24A1DE]/10 rounded-full transition-all transform hover:scale-110" title="Telegram">
                   <span className="sr-only">Telegram</span>
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                   </svg>
               </a>
            </div>
          </div>

          {/* CV Download */}
          <button className="w-full max-w-sm md:max-w-full bg-primary/90 backdrop-blur-sm text-primary-on font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-primary hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            {t('home.downloadCv')}
          </button>
        </div>

        {/* Right Column: About Content */}
        <div className="w-full md:w-2/3 bg-surface-bright/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-sm border border-outline-variant/20 transition-colors duration-500">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-surface-on mb-2">Alex Developer</h1>
            <p className="text-lg md:text-xl text-primary font-medium mb-8">{t('home.role')}</p>
            
            <h3 className="text-2xl font-semibold text-surface-on border-b border-outline-variant pb-2 mb-4">{t('home.aboutTitle')}</h3>
            <p className="text-surface-onVariant">
              {t('home.aboutText1')}
            </p>
            <p className="text-surface-onVariant">
              {t('home.aboutText2')}
            </p>

            <h3 className="text-2xl font-semibold text-surface-on border-b border-outline-variant pb-2 mt-8 mb-4">{t('home.researchInterests')}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                <li className="bg-surface-container/50 backdrop-blur-md p-4 rounded-xl border border-transparent hover:border-primary-container transition-colors">
                    <strong className="block text-surface-on mb-1">{t('home.interestHCI')}</strong>
                    <span className="text-sm text-surface-onVariant">{t('home.interestHCIDesc')}</span>
                </li>
                <li className="bg-surface-container/50 backdrop-blur-md p-4 rounded-xl border border-transparent hover:border-primary-container transition-colors">
                    <strong className="block text-surface-on mb-1">{t('home.interestA11y')}</strong>
                    <span className="text-sm text-surface-onVariant">{t('home.interestA11yDesc')}</span>
                </li>
                <li className="bg-surface-container/50 backdrop-blur-md p-4 rounded-xl border border-transparent hover:border-primary-container transition-colors">
                    <strong className="block text-surface-on mb-1">{t('home.interestDataViz')}</strong>
                    <span className="text-sm text-surface-onVariant">{t('home.interestDataVizDesc')}</span>
                </li>
            </ul>

            <h3 className="text-2xl font-semibold text-surface-on border-b border-outline-variant pb-2 mt-8 mb-4">{t('home.currentFocus')}</h3>
            <p className="text-surface-onVariant">
              {t('home.focusText')} 
              <span className="ml-1 inline-flex gap-1">
                 <a href="#" className="text-primary hover:text-primary-container font-medium">{t(`nav.${PageRoute.PUBLICATIONS}`)}</a>
                 /
                 <a href="#" className="text-primary hover:text-primary-container font-medium">{t(`nav.${PageRoute.DIARY}`)}</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
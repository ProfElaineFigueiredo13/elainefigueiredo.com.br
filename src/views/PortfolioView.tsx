import React from 'react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { ViewMode } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedPortfolioItem } from '../i18n/localizedData';

interface PortfolioViewProps {
  setCurrentView: (view: ViewMode) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ setCurrentView }) => {
  const { language, t } = useLanguage();

  return (
    <div className="py-12 px-4 md:px-6 max-w-[1200px] mx-auto min-h-[80vh]">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass-card-bright border-[#D1C4E9]/20 font-mono text-xs text-[#D1C4E9]">
          <span className="material-symbols-outlined text-sm">folder_open</span>
          {t.portfolioView.badge}
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-[#D1C4E9] mb-4">
          {t.portfolioView.title}
        </h1>
        <p className="font-sans text-lg text-[#d0c5af] max-w-3xl leading-relaxed">
          {t.portfolioView.subtitle}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8 mb-16">
        {PORTFOLIO_ITEMS.map((rawItem) => {
          const item = getLocalizedPortfolioItem(rawItem, language);
          return (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#D1C4E9]/40 transition-all grid md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-5">
                <div className="aspect-video rounded-xl overflow-hidden relative group bg-black/50 border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute top-3 left-3 bg-[#D1C4E9] text-[#381e72] font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {item.year}
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <span className="font-mono text-xs text-[#9685B5] uppercase tracking-wider block">
                  {item.category} • {item.clientOrProject}
                </span>

                <h2 className="font-headline text-2xl font-bold text-[#D1C4E9]">
                  {item.title}
                </h2>

                <p className="font-sans text-sm text-[#d0c5af] leading-relaxed">
                  {item.description}
                </p>

                <div>
                  <h3 className="font-mono text-xs font-bold text-[#D1C4E9] uppercase mb-2">
                    {t.portfolioView.resultsTitle}
                  </h3>
                  <ul className="space-y-1.5 font-sans text-xs text-[#d0c5af]/90">
                    {item.results.map((res, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#D1C4E9] text-base">task_alt</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 border border-white/10 text-[#D1C4E9] font-mono text-[10px] px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Banner */}
      <div className="glass-card rounded-2xl p-8 border border-[#D1C4E9]/30 text-center max-w-2xl mx-auto">
        <h2 className="font-headline text-2xl font-bold text-[#D1C4E9] mb-3">
          {t.portfolioView.ctaTitle}
        </h2>
        <p className="font-sans text-xs text-[#d0c5af] mb-6">
          {t.portfolioView.ctaSub}
        </p>
        <button
          onClick={() => setCurrentView('contact')}
          className="bg-[#D1C4E9] text-[#381e72] font-mono font-bold text-xs px-6 py-3 rounded-xl hover:bg-[#D1C4E9]/90 transition-all inline-flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(209,196,233,0.3)]"
        >
          <span className="material-symbols-outlined text-sm">calendar_month</span>
          {t.portfolioView.ctaBtn}
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { ViewMode } from '../types';
import { DRAWER_IMAGES, SOCIAL_LINKS } from '../data/mockData';
import { SocialIcon } from './SocialIcon';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: ViewMode;
  setCurrentView: (view: ViewMode) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  currentView,
  setCurrentView,
}) => {
  const { t } = useLanguage();

  const handleSelect = (view: ViewMode) => {
    setCurrentView(view);
    onClose();
  };

  const whatsapp = SOCIAL_LINKS.find((s) => s.id === 'whatsapp');

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[55] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <aside
        className={`bg-[#1D1926] h-full w-80 md:w-96 fixed right-0 top-0 z-[60] border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-5 p-6 md:p-7 h-full bg-[radial-gradient(circle_at_top_right,rgba(209,196,233,0.08),transparent_60%)] overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <span className="font-headline text-xl font-bold text-[#D1C4E9] block">
                Elaine Figueiredo
              </span>
              <span className="font-mono text-[10px] text-[#9685B5] uppercase tracking-widest block">
                {t.nav.menuTitle}
              </span>
            </div>
            <button
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-[#eae1d4] cursor-pointer"
              onClick={onClose}
              aria-label={t.nav.closeMenu}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Language Selector inside Drawer */}
          <div className="p-3 bg-black/40 rounded-2xl border border-white/10 flex flex-col gap-2">
            <span className="font-mono text-[10px] text-[#9685B5] uppercase tracking-wider font-bold">
              {t.footer.selectLanguage}
            </span>
            <LanguageSelector showLabels className="w-full justify-between" />
          </div>

          {/* Navigation Matrix 6 Circle Bento Items */}
          <nav className="grid grid-cols-2 gap-4 py-1">
            {/* Home */}
            <button
              onClick={() => handleSelect('home')}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-16 h-16 rounded-full glass-card-bright border-primary/30 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(209,196,233,0.2)] ${
                  currentView === 'home'
                    ? 'border-[#D1C4E9] ring-2 ring-[#D1C4E9]/50 scale-105'
                    : 'border-white/20'
                }`}
              >
                <div
                  className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity bg-cover bg-center"
                  style={{ backgroundImage: `url('${DRAWER_IMAGES.home}')` }}
                />
                <span className="material-symbols-outlined text-[#D1C4E9] text-2xl relative z-10">
                  home
                </span>
              </div>
              <span
                className={`font-mono text-[11px] uppercase tracking-widest font-bold transition-colors ${
                  currentView === 'home'
                    ? 'text-[#D1C4E9]'
                    : 'text-[#d0c5af] group-hover:text-[#D1C4E9]'
                }`}
              >
                {t.nav.home}
              </span>
            </button>

            {/* About */}
            <button
              onClick={() => handleSelect('about')}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-16 h-16 rounded-full glass-card-bright border-primary/30 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(209,196,233,0.2)] ${
                  currentView === 'about'
                    ? 'border-[#D1C4E9] ring-2 ring-[#D1C4E9]/50 scale-105'
                    : 'border-white/20'
                }`}
              >
                <div
                  className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity bg-cover bg-center"
                  style={{ backgroundImage: `url('${DRAWER_IMAGES.about}')` }}
                />
                <span className="material-symbols-outlined text-[#D1C4E9] text-2xl relative z-10">
                  person
                </span>
              </div>
              <span
                className={`font-mono text-[11px] uppercase tracking-widest font-bold transition-colors ${
                  currentView === 'about'
                    ? 'text-[#D1C4E9]'
                    : 'text-[#d0c5af] group-hover:text-[#D1C4E9]'
                }`}
              >
                {t.nav.about}
              </span>
            </button>

            {/* Courses */}
            <button
              onClick={() => handleSelect('courses')}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-16 h-16 rounded-full glass-card-bright border-primary/30 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(209,196,233,0.2)] ${
                  currentView === 'courses'
                    ? 'border-[#D1C4E9] ring-2 ring-[#D1C4E9]/50 scale-105'
                    : 'border-white/20'
                }`}
              >
                <div
                  className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity bg-cover bg-center"
                  style={{ backgroundImage: `url('${DRAWER_IMAGES.courses}')` }}
                />
                <span className="material-symbols-outlined text-[#D1C4E9] text-2xl relative z-10">
                  school
                </span>
              </div>
              <span
                className={`font-mono text-[11px] uppercase tracking-widest font-bold transition-colors ${
                  currentView === 'courses'
                    ? 'text-[#D1C4E9]'
                    : 'text-[#d0c5af] group-hover:text-[#D1C4E9]'
                }`}
              >
                {t.nav.courses}
              </span>
            </button>

            {/* Resume */}
            <button
              onClick={() => handleSelect('resume')}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-16 h-16 rounded-full glass-card-bright border-primary/30 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(209,196,233,0.2)] ${
                  currentView === 'resume'
                    ? 'border-[#D1C4E9] ring-2 ring-[#D1C4E9]/50 scale-105'
                    : 'border-white/20'
                }`}
              >
                <div
                  className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity bg-cover bg-center"
                  style={{ backgroundImage: `url('${DRAWER_IMAGES.resume}')` }}
                />
                <span className="material-symbols-outlined text-[#D1C4E9] text-2xl relative z-10">
                  description
                </span>
              </div>
              <span
                className={`font-mono text-[11px] uppercase tracking-widest font-bold transition-colors ${
                  currentView === 'resume'
                    ? 'text-[#D1C4E9]'
                    : 'text-[#d0c5af] group-hover:text-[#D1C4E9]'
                }`}
              >
                {t.nav.resume}
              </span>
            </button>

            {/* Blog */}
            <button
              onClick={() => handleSelect('blog')}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-16 h-16 rounded-full glass-card-bright border-primary/30 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(209,196,233,0.2)] ${
                  currentView === 'blog'
                    ? 'border-[#D1C4E9] ring-2 ring-[#D1C4E9]/50 scale-105'
                    : 'border-white/20'
                }`}
              >
                <div
                  className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity bg-cover bg-center"
                  style={{ backgroundImage: `url('${DRAWER_IMAGES.blog}')` }}
                />
                <span className="material-symbols-outlined text-[#D1C4E9] text-2xl relative z-10">
                  rss_feed
                </span>
              </div>
              <span
                className={`font-mono text-[11px] uppercase tracking-widest font-bold transition-colors ${
                  currentView === 'blog'
                    ? 'text-[#D1C4E9]'
                    : 'text-[#d0c5af] group-hover:text-[#D1C4E9]'
                }`}
              >
                {t.nav.blog}
              </span>
            </button>

            {/* Contact */}
            <button
              onClick={() => handleSelect('contact')}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-16 h-16 rounded-full glass-card-bright border-primary/30 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(209,196,233,0.2)] ${
                  currentView === 'contact'
                    ? 'border-[#D1C4E9] ring-2 ring-[#D1C4E9]/50 scale-105'
                    : 'border-white/20'
                }`}
              >
                <div
                  className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity bg-cover bg-center"
                  style={{ backgroundImage: `url('${DRAWER_IMAGES.contact}')` }}
                />
                <span className="material-symbols-outlined text-[#D1C4E9] text-2xl relative z-10">
                  mail
                </span>
              </div>
              <span
                className={`font-mono text-[11px] uppercase tracking-widest font-bold transition-colors ${
                  currentView === 'contact'
                    ? 'text-[#D1C4E9]'
                    : 'text-[#d0c5af] group-hover:text-[#D1C4E9]'
                }`}
              >
                {t.nav.contact}
              </span>
            </button>
          </nav>

          {/* Quick Portfolio Button */}
          <button
            onClick={() => handleSelect('portfolio')}
            className="w-full py-2.5 px-4 rounded-xl glass-card text-xs font-mono text-[#D1C4E9] border border-[#D1C4E9]/30 hover:bg-[#D1C4E9]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">folder_special</span>
            {t.nav.portfolio.toUpperCase()}
          </button>

          {/* Idioma / Language Selector with Country Flags */}
          <div className="border-t border-white/10 pt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#9685B5] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs text-[#D1C4E9]">language</span>
                {t.footer.selectLanguage}
              </span>
            </div>
            <LanguageSelector variant="grid" />
          </div>

          {/* Social Networks & WhatsApp Section */}
          <div className="border-t border-white/10 pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#9685B5] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs text-[#D1C4E9]">hub</span>
                {t.nav.contact}
              </span>
              <a
                href="https://www.elainefigueiredo.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] text-[#D1C4E9] hover:underline"
              >
                elainefigueiredo.com.br ↗
              </a>
            </div>

            {/* Direct WhatsApp Callout */}
            {whatsapp && (
              <a
                href={whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366] text-black flex items-center justify-center shadow-[0_0_10px_rgba(37,211,102,0.4)]">
                    <SocialIcon name="whatsapp" size={18} />
                  </div>
                  <div className="text-left">
                    <span className="font-mono text-[11px] font-bold text-[#25D366] block">
                      {t.nav.whatsapp}
                    </span>
                    <span className="font-mono text-[9px] text-[#d0c5af]/70 block">
                      +55 (11) 98218-1313
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-sm text-[#25D366] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            )}

            {/* Social Links List */}
            <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
              {SOCIAL_LINKS.filter((s) => s.id !== 'whatsapp').map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black/30 border border-white/5 hover:border-[#D1C4E9]/40 hover:bg-white/5 transition-all flex items-center gap-2 text-[#d0c5af] hover:text-[#D1C4E9]"
                  title={social.description}
                >
                  <span className="text-[#D1C4E9]">
                    <SocialIcon name={social.icon} size={14} />
                  </span>
                  <span className="truncate">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer Footer System Status */}
          <div className="mt-auto pt-4 border-t border-white/5 flex flex-col items-center justify-center text-center">
            <p className="font-mono text-[9px] text-[#eae1d4]/40">
              ELAINE FIGUEIREDO // AURA_INT_V4
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

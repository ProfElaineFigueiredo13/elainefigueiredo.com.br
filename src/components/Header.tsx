import React from 'react';
import { ViewMode } from '../types';
import { SOCIAL_LINKS } from '../data/mockData';
import { SocialIcon } from './SocialIcon';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  currentView: ViewMode;
  setCurrentView: (view: ViewMode) => void;
  toggleDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ setCurrentView, toggleDrawer }) => {
  const lattes = SOCIAL_LINKS.find((s) => s.id === 'lattes');
  const youtube = SOCIAL_LINKS.find((s) => s.id === 'youtube');
  const email = SOCIAL_LINKS.find((s) => s.id === 'email');

  return (
    <header className="bg-[#0B0910]/85 backdrop-blur-xl text-[#D1C4E9] sticky top-0 z-50 border-b border-white/5 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-3 md:px-6 max-w-[1240px] mx-auto h-20 gap-2">
        {/* Logo Brand */}
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
          title="Ir para o Início"
        >
          <div className="relative flex items-center justify-center">
            <span className="material-symbols-outlined text-[#D1C4E9] text-2xl sm:text-3xl group-hover:rotate-90 transition-transform duration-500">
              memory
            </span>
            <div className="absolute inset-0 bg-[#D1C4E9]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-base sm:text-lg md:text-xl font-extrabold tracking-tighter text-[#D1C4E9]">
              ELAINE FIGUEIREDO
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#9685B5] opacity-80 -mt-1 hidden md:inline">
              AI & DATA CONSULTANCY
            </span>
          </div>
        </button>

        {/* Right Section: Language Flags, Socials, Highlights, Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Flag Buttons: 🇧🇷 PT | 🇺🇸 EN | 🇪🇸 ES | 🇫🇷 FR | 🇮🇹 IT */}
          <LanguageSelector compact />

          {/* Social Icons Dock */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-black/40 border border-white/10 p-1 rounded-full backdrop-blur-md"
            aria-label="Redes Sociais e Canais"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target={social.id === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                title={`${social.name}: ${social.handle}`}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group relative ${
                  social.id === 'youtube'
                    ? 'text-[#FF4444] hover:bg-[#FF0000]/20 hover:text-white hover:shadow-[0_0_12px_rgba(255,0,0,0.5)]'
                    : social.id === 'lattes'
                    ? 'text-[#60a5fa] hover:bg-[#3B82F6]/20 hover:text-white hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                    : social.id === 'linkedin'
                    ? 'text-[#38bdf8] hover:bg-[#0A66C2]/20 hover:text-white hover:shadow-[0_0_12px_rgba(10,102,194,0.5)]'
                    : social.id === 'instagram'
                    ? 'text-[#f472b6] hover:bg-[#E4405F]/20 hover:text-white hover:shadow-[0_0_12px_rgba(228,64,95,0.5)]'
                    : social.id === 'whatsapp'
                    ? 'text-[#25D366] hover:bg-[#25D366]/20 hover:text-white hover:shadow-[0_0_12px_rgba(37,211,102,0.5)]'
                    : social.id === 'email'
                    ? 'text-[#c4b5fd] hover:bg-[#A78BFA]/20 hover:text-white hover:shadow-[0_0_12px_rgba(167,139,250,0.5)]'
                    : 'text-[#d0c5af]/80 hover:text-[#D1C4E9] hover:bg-white/10'
                }`}
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} size={13} />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </nav>

          {/* Quick Highlight Buttons: Lattes & YouTube (Desktop) */}
          <div className="hidden xl:flex items-center gap-1.5 font-mono text-xs">
            {lattes && (
              <a
                href={lattes.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Currículo Lattes (CNPq)"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#3B82F6]/20 border border-white/10 hover:border-[#3B82F6]/50 text-[#eae1d4] hover:text-white transition-all duration-300 group"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#3B82F6]/20 text-[#60a5fa] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <SocialIcon name="lattes" size={10} />
                </div>
                <span className="font-bold tracking-wide text-[10px]">LATTES</span>
              </a>
            )}

            {youtube && (
              <a
                href={youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Canal no YouTube: @profelainefigueiredo"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#FF0000]/20 border border-white/10 hover:border-[#FF0000]/50 text-[#eae1d4] hover:text-white transition-all duration-300 group"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF0000]/20 text-[#FF4444] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <SocialIcon name="youtube" size={10} />
                </div>
                <span className="font-bold tracking-wide text-[10px]">YOUTUBE</span>
              </a>
            )}
          </div>

          {/* Hamburger / Menu Matrix Trigger */}
          <button
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-[#D1C4E9] flex items-center justify-center border border-white/10 cursor-pointer ml-1"
            onClick={toggleDrawer}
            aria-label="Abrir Menu Completo"
            title="Menu de Navegação & Seções"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

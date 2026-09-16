import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../types';
import { CountryFlag } from './CountryFlag';

interface LanguageSelectorProps {
  compact?: boolean;
  className?: string;
  showLabels?: boolean;
  variant?: 'pills' | 'dropdown' | 'grid';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  compact = false,
  className = '',
  showLabels = false,
  variant = 'pills',
}) => {
  const { language, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const currentLangObj = availableLanguages.find((l) => l.code === language) || availableLanguages[0];

  // Grid variant: Ideal for mobile drawer or footer modal
  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 ${className}`}>
        {availableLanguages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code as Language)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                isActive
                  ? 'bg-[#D1C4E9]/20 border-[#D1C4E9] text-[#eae1d4] shadow-[0_0_15px_rgba(209,196,233,0.25)]'
                  : 'bg-black/30 border-white/10 text-[#d0c5af]/80 hover:bg-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <CountryFlag code={lang.code} size="md" className="shadow-sm" />
                <div>
                  <span className="font-headline text-xs font-bold block text-[#eae1d4]">
                    {lang.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#9685B5] block">
                    {lang.country}
                  </span>
                </div>
              </div>
              {isActive && (
                <span className="material-symbols-outlined text-[#D1C4E9] text-base">
                  check_circle
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  // Dropdown variant: Single button that opens a list of countries with flags
  if (variant === 'dropdown') {
    return (
      <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/10 text-[#eae1d4] hover:border-[#D1C4E9]/50 hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md text-xs font-mono"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <CountryFlag code={currentLangObj.code} size="sm" />
          <span className="font-bold uppercase text-[11px] tracking-wider text-[#D1C4E9]">
            {currentLangObj.code}
          </span>
          <span className="hidden sm:inline text-[#d0c5af]/70 text-[11px]">
            {currentLangObj.country}
          </span>
          <span className={`material-symbols-outlined text-xs text-[#9685B5] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#14101E] border border-[#D1C4E9]/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-2 border-b border-white/10 mb-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#9685B5] block font-bold">
                Selecionar País & Idioma
              </span>
            </div>
            <div className="space-y-1">
              {availableLanguages.map((lang) => {
                const isActive = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code as Language);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#D1C4E9] text-[#381E72] font-bold shadow-md'
                        : 'text-[#d0c5af] hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <CountryFlag code={lang.code} size="sm" />
                      <div className="text-left">
                        <span className="block font-headline leading-tight">
                          {lang.label}
                        </span>
                        <span className={`block font-mono text-[10px] leading-tight ${isActive ? 'text-[#381E72]/80' : 'text-[#9685B5]'}`}>
                          {lang.country}
                        </span>
                      </div>
                    </div>
                    {isActive && (
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default 'pills' variant with interactive flags
  return (
    <div
      className={`inline-flex items-center gap-1 bg-black/60 border border-white/10 p-1 rounded-full backdrop-blur-md shadow-inner ${className}`}
      role="group"
      aria-label="Selecionar Idioma / Select Language"
    >
      {availableLanguages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code as Language)}
            title={`${lang.label} - ${lang.country}`}
            aria-label={`${lang.label} (${lang.country})`}
            aria-pressed={isActive}
            className={`cursor-pointer transition-all duration-300 flex items-center gap-1.5 rounded-full font-mono font-bold ${
              compact
                ? 'px-2 py-1 text-xs'
                : 'px-2.5 py-1.5 text-xs'
            } ${
              isActive
                ? 'bg-[#D1C4E9] text-[#381e72] shadow-[0_0_12px_rgba(209,196,233,0.6)] scale-105'
                : 'text-[#d0c5af]/80 hover:text-white hover:bg-white/10 hover:scale-105'
            }`}
          >
            {/* Bandeira oficial em alta definição vetorial */}
            <CountryFlag
              code={lang.code}
              size={compact ? 'xs' : 'sm'}
              className={`transition-transform duration-200 ${isActive ? 'scale-110 drop-shadow-md' : 'opacity-85 hover:opacity-100'}`}
            />
            
            {/* Código do idioma com suporte responsivo */}
            <span
              className={`uppercase text-[10px] tracking-wider ${
                !showLabels && compact ? 'hidden md:inline' : 'inline'
              }`}
            >
              {lang.code}
            </span>
          </button>
        );
      })}
    </div>
  );
};

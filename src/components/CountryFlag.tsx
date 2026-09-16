import React from 'react';
import { Language } from '../types';

interface CountryFlagProps {
  code: Language | string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  rounded?: boolean;
  border?: boolean;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  code,
  className = '',
  size = 'sm',
  rounded = true,
  border = true,
}) => {
  const sizeClasses = {
    xs: 'w-4 h-2.5',
    sm: 'w-5 h-3.5',
    md: 'w-6 h-4',
    lg: 'w-8 h-5.5',
  }[size];

  const roundClass = rounded ? 'rounded-[3px]' : '';
  const borderClass = border ? 'ring-1 ring-white/20' : '';

  const langCode = code.toLowerCase();

  switch (langCode) {
    case 'pt':
    case 'br':
      // Bandeira do Brasil 🇧🇷
      return (
        <svg
          viewBox="0 0 24 16"
          className={`${sizeClasses} ${roundClass} ${borderClass} shadow-sm overflow-hidden flex-shrink-0 inline-block align-middle ${className}`}
          aria-label="Bandeira do Brasil"
          role="img"
        >
          {/* Fundo Verde */}
          <rect width="24" height="16" fill="#009B3A" />
          {/* Losango Amarelo */}
          <polygon points="12,1.8 22.2,8 12,14.2 1.8,8" fill="#FEDF00" />
          {/* Círculo Azul */}
          <circle cx="12" cy="8" r="4.3" fill="#002776" />
          {/* Faixa Branca 'Ordem e Progresso' */}
          <path
            d="M 8.1 8.8 C 9.5 7.4 12.2 6.8 15.9 8.2"
            stroke="#FFFFFF"
            strokeWidth="0.85"
            fill="none"
          />
          {/* Estrelas */}
          <circle cx="12" cy="6.2" r="0.25" fill="#FFFFFF" />
          <circle cx="10.8" cy="9.4" r="0.25" fill="#FFFFFF" />
          <circle cx="12.2" cy="9.8" r="0.25" fill="#FFFFFF" />
          <circle cx="13.5" cy="9.2" r="0.25" fill="#FFFFFF" />
          <circle cx="12.8" cy="10.5" r="0.25" fill="#FFFFFF" />
        </svg>
      );

    case 'en':
    case 'us':
      // Bandeira dos Estados Unidos 🇺🇸
      return (
        <svg
          viewBox="0 0 24 16"
          className={`${sizeClasses} ${roundClass} ${borderClass} shadow-sm overflow-hidden flex-shrink-0 inline-block align-middle ${className}`}
          aria-label="United States Flag"
          role="img"
        >
          {/* Listras vermelhas e brancas (13 listras) */}
          <rect width="24" height="16" fill="#B22234" />
          <rect y="1.23" width="24" height="1.23" fill="#FFFFFF" />
          <rect y="3.69" width="24" height="1.23" fill="#FFFFFF" />
          <rect y="6.15" width="24" height="1.23" fill="#FFFFFF" />
          <rect y="8.61" width="24" height="1.23" fill="#FFFFFF" />
          <rect y="11.07" width="24" height="1.23" fill="#FFFFFF" />
          <rect y="13.53" width="24" height="1.23" fill="#FFFFFF" />
          {/* Cantão Azul */}
          <rect width="10.5" height="8.61" fill="#3C3B6E" />
          {/* Pontos de estrelas representativos */}
          <circle cx="2" cy="1.8" r="0.55" fill="#FFFFFF" />
          <circle cx="5.2" cy="1.8" r="0.55" fill="#FFFFFF" />
          <circle cx="8.5" cy="1.8" r="0.55" fill="#FFFFFF" />
          <circle cx="3.6" cy="3.5" r="0.55" fill="#FFFFFF" />
          <circle cx="6.8" cy="3.5" r="0.55" fill="#FFFFFF" />
          <circle cx="2" cy="5.2" r="0.55" fill="#FFFFFF" />
          <circle cx="5.2" cy="5.2" r="0.55" fill="#FFFFFF" />
          <circle cx="8.5" cy="5.2" r="0.55" fill="#FFFFFF" />
          <circle cx="3.6" cy="6.9" r="0.55" fill="#FFFFFF" />
          <circle cx="6.8" cy="6.9" r="0.55" fill="#FFFFFF" />
        </svg>
      );

    case 'es':
      // Bandeira da Espanha 🇪🇸
      return (
        <svg
          viewBox="0 0 24 16"
          className={`${sizeClasses} ${roundClass} ${borderClass} shadow-sm overflow-hidden flex-shrink-0 inline-block align-middle ${className}`}
          aria-label="Bandera de España"
          role="img"
        >
          {/* Faixas Vermelhas e Amarela Central (1:2:1) */}
          <rect width="24" height="16" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#F1BF00" />
          {/* Brasão Espanhol simplificado */}
          <g transform="translate(6, 8)">
            <rect x="-1.8" y="-2.5" width="3.6" height="4.5" rx="0.8" fill="#AA151B" opacity="0.9" />
            <circle cx="0" cy="-2.6" r="0.9" fill="#F1BF00" />
            <rect x="-0.8" y="-1.5" width="1.6" height="2.5" fill="#FFFFFF" opacity="0.8" />
          </g>
        </svg>
      );

    case 'fr':
      // Bandeira da França 🇫🇷
      return (
        <svg
          viewBox="0 0 24 16"
          className={`${sizeClasses} ${roundClass} ${borderClass} shadow-sm overflow-hidden flex-shrink-0 inline-block align-middle ${className}`}
          aria-label="Drapeau de la France"
          role="img"
        >
          {/* Tricolor Vertical: Azul, Branco, Vermelho */}
          <rect width="8" height="16" fill="#002654" />
          <rect x="8" width="8" height="16" fill="#FFFFFF" />
          <rect x="16" width="8" height="16" fill="#CE1126" />
        </svg>
      );

    case 'it':
      // Bandeira da Itália 🇮🇹
      return (
        <svg
          viewBox="0 0 24 16"
          className={`${sizeClasses} ${roundClass} ${borderClass} shadow-sm overflow-hidden flex-shrink-0 inline-block align-middle ${className}`}
          aria-label="Bandiera d'Italia"
          role="img"
        >
          {/* Tricolor Vertical: Verde, Branco, Vermelho */}
          <rect width="8" height="16" fill="#009246" />
          <rect x="8" width="8" height="16" fill="#FFFFFF" />
          <rect x="16" width="8" height="16" fill="#CE2B37" />
        </svg>
      );

    default:
      return (
        <span className="text-xs font-mono font-bold uppercase text-[#D1C4E9]">
          {code}
        </span>
      );
  }
};

import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/mockData';
import { SocialIcon } from './SocialIcon';
import { buildAttributedWhatsAppUrl, getAttributionString } from '../utils/utm';
import { trackEvent } from '../utils/analytics';
import { useLanguage } from '../i18n/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useLanguage();
  const whatsapp = SOCIAL_LINKS.find((s) => s.id === 'whatsapp');
  const [isHovered, setIsHovered] = useState(false);

  if (!whatsapp) return null;

  const targetUrl = buildAttributedWhatsAppUrl(
    '5511999479666',
    t.floatingWa.defaultMsg,
    'botao_flutuante'
  );

  const handleClick = () => {
    trackEvent('whatsapp_click', {
      placement: 'floating_button',
      attribution: getAttributionString('botao_flutuante'),
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Prompt Label */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-[#0B0910]/90 backdrop-blur-md text-[#eae1d4] px-4 py-2 rounded-full border border-[#25D366]/40 shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span className="font-mono text-xs font-semibold">
          {t.floatingWa.tooltipText} <strong className="text-[#25D366]">WhatsApp</strong>
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={t.floatingWa.ariaLabel}
        title={t.floatingWa.title}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Animated Radial Pulse Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>
        <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/60 group-hover:border-[#25D366] transition-colors pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <div className="relative z-10">
          <SocialIcon name="whatsapp" size={28} />
        </div>
      </a>
    </div>
  );
};

import React, { useState } from 'react';
import { trackEvent } from '../utils/analytics';
import { useLanguage } from '../i18n/LanguageContext';

interface ShareBarProps {
  title?: string;
  url?: string;
  summary?: string;
  className?: string;
  compact?: boolean;
}

export const ShareBar: React.FC<ShareBarProps> = ({
  title = 'Elaine Figueiredo: Inteligência Artificial e Inovação que Transformam',
  url,
  summary = 'Conheça o trabalho de Elaine Figueiredo: especialista em IA, palestras magnas e cursos transformadores.',
  className = '',
  compact = false,
}) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const currentUrl =
    url || (typeof window !== 'undefined' ? window.location.href : 'https://elainefigueiredo.com.br');

  const shareLabels = {
    pt: {
      share: 'Compartilhar:',
      copied: 'Link copiado!',
      copy: 'Copiar link',
      linkedin: 'Compartilhar no LinkedIn',
      whatsapp: 'Enviar no WhatsApp',
      twitter: 'Compartilhar no X (Twitter)',
      facebook: 'Compartilhar no Facebook',
    },
    en: {
      share: 'Share:',
      copied: 'Link copied!',
      copy: 'Copy link',
      linkedin: 'Share on LinkedIn',
      whatsapp: 'Send on WhatsApp',
      twitter: 'Share on X (Twitter)',
      facebook: 'Share on Facebook',
    },
    es: {
      share: 'Compartir:',
      copied: '¡Enlace copiado!',
      copy: 'Copiar enlace',
      linkedin: 'Compartir en LinkedIn',
      whatsapp: 'Enviar por WhatsApp',
      twitter: 'Compartir en X (Twitter)',
      facebook: 'Compartir en Facebook',
    },
    fr: {
      share: 'Partager:',
      copied: 'Lien copié !',
      copy: 'Copier le lien',
      linkedin: 'Partager sur LinkedIn',
      whatsapp: 'Envoyer sur WhatsApp',
      twitter: 'Partager sur X (Twitter)',
      facebook: 'Partager sur Facebook',
    },
    it: {
      share: 'Condividi:',
      copied: 'Link copiato!',
      copy: 'Copia link',
      linkedin: 'Condividi su LinkedIn',
      whatsapp: 'Invia su WhatsApp',
      twitter: 'Condividi su X (Twitter)',
      facebook: 'Condividi su Facebook',
    },
  }[language] || {
    share: 'Compartilhar:',
    copied: 'Link copiado!',
    copy: 'Copiar link',
    linkedin: 'Compartilhar no LinkedIn',
    whatsapp: 'Enviar no WhatsApp',
    twitter: 'Compartilhar no X (Twitter)',
    facebook: 'Compartilhar no Facebook',
  };

  const createShareUrl = (network: string) => {
    const shareUrlWithUtm = new URL(currentUrl);
    shareUrlWithUtm.searchParams.set('utm_source', `${network}_share`);
    shareUrlWithUtm.searchParams.set('utm_medium', 'social_share');
    shareUrlWithUtm.searchParams.set('utm_campaign', 'site_share');
    const encodedUrl = encodeURIComponent(shareUrlWithUtm.toString());
    const encodedTitle = encodeURIComponent(title);
    const encodedSummary = encodeURIComponent(summary);

    switch (network) {
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(
          `*${title}*\n${summary}\n\nConfira: `
        )}${encodedUrl}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=InteligenciaArtificial,IA,Tech,ElaineFigueiredo`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      default:
        return currentUrl;
    }
  };

  const handleShare = (network: string) => {
    trackEvent('social_share_click', {
      network,
      content_title: title,
      content_url: currentUrl,
    });
    const urlToOpen = createShareUrl(network);
    window.open(urlToOpen, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleCopyLink = () => {
    const copyUrl = new URL(currentUrl);
    copyUrl.searchParams.set('utm_source', 'direct_copy');
    copyUrl.searchParams.set('utm_medium', 'share_link');
    copyUrl.searchParams.set('utm_campaign', 'site_share');

    navigator.clipboard.writeText(copyUrl.toString()).then(() => {
      setCopied(true);
      trackEvent('copy_link_click', { content_title: title });
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {!compact && (
        <span className="font-mono text-xs text-[#9685B5] flex items-center gap-1 mr-1">
          <span className="material-symbols-outlined text-sm">share</span>
          {shareLabels.share}
        </span>
      )}

      {/* LinkedIn */}
      <button
        type="button"
        onClick={() => handleShare('linkedin')}
        title={shareLabels.linkedin}
        aria-label={shareLabels.linkedin}
        className="w-8 h-8 rounded-full bg-[#0A66C2]/15 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white border border-[#0A66C2]/30 flex items-center justify-center transition-all cursor-pointer shadow-sm"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 0 0-1.64 1.64c0 .9.74 1.64 1.64 1.64s1.64-.74 1.64-1.64a1.64 1.64 0 0 0-1.64-1.64Z" />
        </svg>
      </button>

      {/* WhatsApp */}
      <button
        type="button"
        onClick={() => handleShare('whatsapp')}
        title={shareLabels.whatsapp}
        aria-label={shareLabels.whatsapp}
        className="w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-black border border-[#25D366]/30 flex items-center justify-center transition-all cursor-pointer shadow-sm"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.214 8.214 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-3.53 3.32c-.19 0-.42.07-.63.3-.23.23-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.76 2.69 4.27 3.77 2.5 1.09 2.5.73 2.96.69.45-.05 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.49-.3-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8 1-.15.19-.29.21-.55.08-.25-.13-1.08-.4-2.05-1.27-.76-.68-1.27-1.52-1.42-1.77-.15-.25-.02-.39.11-.52.11-.11.25-.29.38-.44.13-.15.17-.25.26-.42.08-.17.04-.32-.02-.45s-.56-1.35-.77-1.85c-.2-.49-.41-.42-.56-.43Z" />
        </svg>
      </button>

      {/* X / Twitter */}
      <button
        type="button"
        onClick={() => handleShare('twitter')}
        title={shareLabels.twitter}
        aria-label={shareLabels.twitter}
        className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-sm"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>

      {/* Facebook */}
      <button
        type="button"
        onClick={() => handleShare('facebook')}
        title={shareLabels.facebook}
        aria-label={shareLabels.facebook}
        className="w-8 h-8 rounded-full bg-[#1877F2]/15 text-[#1877F2] hover:bg-[#1877F2] hover:text-white border border-[#1877F2]/30 flex items-center justify-center transition-all cursor-pointer shadow-sm"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </button>

      {/* Copy Link Button */}
      <button
        type="button"
        onClick={handleCopyLink}
        title={shareLabels.copy}
        aria-label={shareLabels.copy}
        className={`px-3 py-1 rounded-full font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer border ${
          copied
            ? 'bg-[#25D366]/20 text-[#25D366] border-[#25D366]/50 shadow-[0_0_10px_rgba(37,211,102,0.2)]'
            : 'bg-white/5 text-[#eae1d4] hover:bg-[#D1C4E9]/20 hover:text-[#D1C4E9] border-white/10'
        }`}
      >
        <span className="material-symbols-outlined text-sm">
          {copied ? 'check' : 'link'}
        </span>
        <span>{copied ? shareLabels.copied : shareLabels.copy}</span>
      </button>
    </div>
  );
};

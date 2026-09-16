import React, { useState } from 'react';
import { generateSocialShareUrl } from '../utils/utm';
import { trackSocialShare } from '../utils/analytics';
import { SocialIcon } from './SocialIcon';
import { useLanguage } from '../i18n/LanguageContext';

interface SocialShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  customText?: string;
  url?: string;
}

export const SocialShareModal: React.FC<SocialShareModalProps> = ({
  isOpen,
  onClose,
  title = 'Elaine Figueiredo: Inteligência Artificial e Inovação que Transformam',
  customText,
  url = typeof window !== 'undefined' ? window.location.href : 'https://elainefigueiredo.com.br',
}) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleShareNetwork = (channel: 'whatsapp' | 'linkedin' | 'twitter' | 'facebook' | 'telegram' | 'email') => {
    trackSocialShare(channel, title);
    const targetUrl = generateSocialShareUrl(channel, currentUrl, title, customText);

    if (channel === 'email') {
      window.location.href = targetUrl;
    } else {
      window.open(targetUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
    }
  };

  const handleCopyLink = () => {
    const trackedUrl = generateSocialShareUrl('copy', currentUrl, title, customText);
    navigator.clipboard.writeText(trackedUrl);
    setCopied(true);
    trackSocialShare('copy_link', title);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      trackSocialShare('native_share', title);
      navigator
        .share({
          title,
          text: customText || t.shareModal.description,
          url: currentUrl,
        })
        .catch(() => {
          // fallback if user cancels
        });
    }
  };

  const shareChannels = [
    {
      id: 'whatsapp' as const,
      name: 'WhatsApp',
      icon: 'whatsapp',
      color: 'bg-[#25D366] text-black hover:bg-[#25D366]/90 shadow-[0_0_15px_rgba(37,211,102,0.3)]',
      description: 'Conversas & Grupos',
    },
    {
      id: 'linkedin' as const,
      name: 'LinkedIn',
      icon: 'linkedin',
      color: 'bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 shadow-[0_0_15px_rgba(10,102,194,0.3)]',
      description: 'Feed Profissional',
    },
    {
      id: 'twitter' as const,
      name: 'X (Twitter)',
      icon: 'twitter',
      color: 'bg-black text-white border border-white/20 hover:bg-white/10',
      description: 'Post / Tweet',
    },
    {
      id: 'telegram' as const,
      name: 'Telegram',
      icon: 'telegram',
      color: 'bg-[#229ED9] text-white hover:bg-[#229ED9]/90',
      description: 'Mensagem Direta',
    },
    {
      id: 'facebook' as const,
      name: 'Facebook',
      icon: 'facebook',
      color: 'bg-[#1877F2] text-white hover:bg-[#1877F2]/90',
      description: 'Compartilhar no Feed',
    },
    {
      id: 'email' as const,
      name: 'E-mail',
      icon: 'email',
      color: 'bg-[#9685B5] text-black hover:bg-[#D1C4E9]',
      description: 'Indicar por E-mail',
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      <div className="glass-card bg-[#151120] p-6 md:p-8 rounded-3xl max-w-lg w-full border border-[#D1C4E9]/30 relative shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#eae1d4]/60 hover:text-[#eae1d4] p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          aria-label={t.shareModal.closeBtn}
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[#D1C4E9] text-xl">share</span>
          <span className="font-mono text-xs text-[#9685B5] font-bold uppercase tracking-wider">
            {t.shareModal.badge}
          </span>
        </div>

        <h3 id="share-modal-title" className="font-headline text-xl md:text-2xl font-bold text-white mb-2">
          {t.shareModal.title}
        </h3>
        <p className="font-sans text-xs text-[#d0c5af] mb-6 leading-relaxed">
          {t.shareModal.description}
        </p>

        {/* Social Share Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
          {shareChannels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => handleShareNetwork(channel.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-200 cursor-pointer text-center group ${channel.color}`}
              title={`Compartilhar no ${channel.name}`}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full mb-1">
                <SocialIcon name={channel.icon} size={18} />
              </div>
              <span className="font-headline text-xs font-bold block">{channel.name}</span>
              <span className="text-[10px] opacity-75 block">{channel.description}</span>
            </button>
          ))}
        </div>

        {/* Native Web Share Button (if supported) */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            onClick={handleNativeShare}
            className="w-full mb-4 py-2.5 px-4 rounded-xl bg-white/5 border border-white/15 hover:bg-[#D1C4E9]/15 hover:border-[#D1C4E9]/40 text-[#D1C4E9] font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">ios_share</span>
            {t.shareModal.nativeBtn}
          </button>
        )}

        {/* Direct Link Copy with Tracking */}
        <div className="space-y-1.5">
          <label className="block font-mono text-[10px] uppercase text-[#9685B5] font-bold">
            {t.shareModal.directLabel}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="bg-black/50 border border-white/10 text-xs font-mono rounded-xl px-3 py-2 text-[#D1C4E9] flex-1 outline-none truncate"
            />
            <button
              onClick={handleCopyLink}
              className={`font-mono text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                copied
                  ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                  : 'bg-[#D1C4E9] text-[#381e72] hover:bg-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied ? t.shareModal.copiedBtn : t.shareModal.copyBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

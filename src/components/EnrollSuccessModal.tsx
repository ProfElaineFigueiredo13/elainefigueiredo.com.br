import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface EnrollSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle?: string;
  recipientEmail?: string;
}

export const EnrollSuccessModal: React.FC<EnrollSuccessModalProps> = ({
  isOpen,
  onClose,
  courseTitle,
  recipientEmail = 'contato@elainefigueiredo.com.br',
}) => {
  const { t } = useLanguage();
  const [secondsLeft, setSecondsLeft] = useState(3);

  useEffect(() => {
    if (!isOpen) {
      setSecondsLeft(3);
      return;
    }

    setSecondsLeft(3);

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div className="bg-[#1D1926] border-2 border-[#D1C4E9]/60 rounded-3xl p-8 max-w-md w-full text-center shadow-[0_0_50px_rgba(209,196,233,0.3)] relative transform transition-all animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label={t.coursesView.btnClose}
          className="absolute top-4 right-4 text-[#eae1d4]/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-[#D1C4E9]/20 border border-[#D1C4E9]/50 flex items-center justify-center text-[#D1C4E9] shadow-[0_0_25px_rgba(209,196,233,0.4)]">
          <span className="material-symbols-outlined text-5xl font-bold">check_circle</span>
        </div>

        {/* Localized Required Text */}
        <h3
          id="success-modal-title"
          className="font-headline text-2xl md:text-3xl font-black text-[#D1C4E9] mb-3 tracking-tight"
        >
          {t.successModal.title}
        </h3>

        {/* Details and recipient confirmation */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-3.5 mb-6 text-xs font-mono text-[#d0c5af] space-y-1">
          {courseTitle && (
            <p className="text-[#D1C4E9] font-bold truncate">
              {courseTitle}
            </p>
          )}
          <p className="text-[#9685B5]">
            {t.successModal.dispatchedTo}: <span className="text-[#D1C4E9] underline">{recipientEmail}</span>
          </p>
        </div>

        {/* 3-Second Visual Progress Timer */}
        <div className="space-y-2">
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#D1C4E9] h-full transition-all duration-1000 ease-linear shadow-[0_0_8px_#D1C4E9]"
              style={{ width: `${(secondsLeft / 3) * 100}%` }}
            />
          </div>
          <p className="font-mono text-[11px] text-[#9685B5]">
            {t.successModal.closingIn.replace('{s}', secondsLeft.toString())}
          </p>
        </div>
      </div>
    </div>
  );
};

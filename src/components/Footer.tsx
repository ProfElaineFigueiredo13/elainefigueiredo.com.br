import React, { useState } from 'react';
import { ViewMode } from '../types';
import { SOCIAL_LINKS } from '../data/mockData';
import { SocialIcon } from './SocialIcon';
import { LanguageSelector } from './LanguageSelector';
import { SocialShareModal } from './SocialShareModal';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  setCurrentView: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  const { t } = useLanguage();
  const [showShareModal, setShowShareModal] = useState(false);
  const [showAiDiagnosisModal, setShowAiDiagnosisModal] = useState(false);

  // Diagnosis Modal state
  const [diagDomain, setDiagDomain] = useState('Letramento em IA & Capacitação');
  const [diagStage, setDiagStage] = useState('Explorando oportunidades e capacitação de times');
  const [diagGenerated, setDiagGenerated] = useState(false);

  const whatsappLink = SOCIAL_LINKS.find((s) => s.id === 'whatsapp')?.url;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Elaine Figueiredo | IA & Tecnologia',
          text: t.footer.description,
          url: window.location.href,
        })
        .catch(() => {
          setShowShareModal(true);
        });
    } else {
      setShowShareModal(true);
    }
  };

  const handleOpenContact = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenResume = () => {
    setCurrentView('resume');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050408] border-t border-white/5 pt-16 pb-14 text-[#eae1d4]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Strategic Credentials & Action Bar */}
        <div className="mb-14 pb-14 border-b border-white/5">
          {/* Top 4 Credentials Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Card 1: Mestrado CS */}
            <div className="bg-[#120E1C] rounded-2xl p-5 border border-white/10 hover:border-[#D1C4E9]/40 transition-all group">
              <span className="font-mono text-xs text-[#D1C4E9] block mb-1.5 opacity-90">
                {t.footer.csTitle}
              </span>
              <h4 className="font-headline text-base md:text-lg font-bold text-white tracking-tight group-hover:text-[#D1C4E9] transition-colors">
                {t.footer.csSub}
              </h4>
            </div>

            {/* Card 2: Governança */}
            <div className="bg-[#120E1C] rounded-2xl p-5 border border-white/10 hover:border-[#F59E0B]/40 transition-all group">
              <span className="font-mono text-xs text-[#FBBF24] block mb-1.5 font-medium">
                {t.footer.govTitle}
              </span>
              <h4 className="font-headline text-base md:text-lg font-bold text-white tracking-tight group-hover:text-[#FBBF24] transition-colors">
                {t.footer.govSub}
              </h4>
            </div>

            {/* Card 3: Cloud Native */}
            <div className="bg-[#120E1C] rounded-2xl p-5 border border-white/10 hover:border-[#D1C4E9]/40 transition-all group">
              <span className="font-mono text-xs text-[#D1C4E9] block mb-1.5 opacity-90">
                {t.footer.cloudTitle}
              </span>
              <h4 className="font-headline text-base md:text-lg font-bold text-white tracking-tight group-hover:text-[#D1C4E9] transition-colors">
                {t.footer.cloudSub}
              </h4>
            </div>

            {/* Card 4: Consultoria */}
            <div className="bg-[#120E1C] rounded-2xl p-5 border border-white/10 hover:border-[#D1C4E9]/40 transition-all group">
              <span className="font-mono text-xs text-[#D1C4E9] block mb-1.5 opacity-90">
                {t.footer.consultingTitle}
              </span>
              <h4 className="font-headline text-base md:text-lg font-bold text-white tracking-tight group-hover:text-[#D1C4E9] transition-colors">
                {t.footer.consultingSub}
              </h4>
            </div>
          </div>

          {/* Bottom 3 Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Button 1: Vamos construir o futuro? */}
            <button
              onClick={handleOpenContact}
              className="sm:col-span-12 md:col-span-5 bg-[#D1C4E9] hover:bg-white text-[#2a134d] font-headline font-extrabold text-lg md:text-xl p-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(209,196,233,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] flex items-center justify-between cursor-pointer group text-left"
            >
              <div>
                <span className="block leading-tight">{t.footer.ctaFutureFirst}</span>
                <span className="block leading-tight">{t.footer.ctaFutureSecond}</span>
              </div>
              <span className="material-symbols-outlined text-3xl group-hover:translate-x-1.5 transition-transform shrink-0 ml-3">
                arrow_forward
              </span>
            </button>

            {/* Button 2: Diagnóstico com Elaine AI */}
            <button
              onClick={() => {
                setShowAiDiagnosisModal(true);
                setDiagGenerated(false);
              }}
              className="sm:col-span-7 md:col-span-4 bg-[#120E1C] hover:bg-[#1A1528] text-white p-5 rounded-2xl border border-white/10 hover:border-[#D1C4E9]/40 transition-all flex items-center justify-center gap-3.5 cursor-pointer group text-left"
            >
              <span className="material-symbols-outlined text-[#FBBF24] text-2xl group-hover:rotate-12 group-hover:scale-110 transition-transform shrink-0">
                auto_awesome
              </span>
              <div className="font-headline font-bold text-sm md:text-base text-white group-hover:text-[#D1C4E9] transition-colors">
                <span className="block leading-tight">{t.footer.aiDiagnosisFirst}</span>
                <span className="block leading-tight">{t.footer.aiDiagnosisSecond}</span>
              </div>
            </button>

            {/* Button 3: Ver Expertise */}
            <button
              onClick={handleOpenResume}
              className="sm:col-span-5 md:col-span-3 bg-[#120E1C] hover:bg-[#1A1528] text-white p-5 rounded-2xl border border-white/10 hover:border-[#D1C4E9]/40 transition-all flex items-center justify-center cursor-pointer group text-center"
            >
              <div className="font-headline font-bold text-sm md:text-base text-white group-hover:text-[#D1C4E9] transition-colors">
                <span className="block leading-tight">{t.footer.viewExpertiseFirst}</span>
                <span className="block leading-tight">{t.footer.viewExpertiseSecond}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setCurrentView('home')}>
            <span className="material-symbols-outlined text-[#D1C4E9] text-4xl group-hover:rotate-45 transition-transform duration-500">
              memory
            </span>
            <div>
              <span className="font-headline text-xl md:text-2xl font-bold text-[#D1C4E9] tracking-tighter block">
                ELAINE FIGUEIREDO
              </span>
              <span className="font-mono text-[10px] text-[#9685B5] uppercase tracking-widest block">
                {t.footer.brandSubtitle}
              </span>
            </div>
          </div>

          {/* Social Icons & Action Hub */}
          <div className="flex flex-wrap items-center gap-2.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${social.name}: ${social.handle}`}
                className={`w-10 h-10 rounded-full glass-card flex items-center justify-center border transition-all duration-300 ${
                  social.id === 'whatsapp'
                    ? 'border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]'
                    : 'border-white/10 text-[#d0c5af] hover:text-[#D1C4E9] hover:bg-white/10 hover:border-[#D1C4E9]/40'
                }`}
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} size={18} />
              </a>
            ))}

            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#D1C4E9] hover:text-[#381e72] transition-all border border-white/10 text-[#d0c5af] cursor-pointer"
              title={t.footer.shareTooltip}
              aria-label={t.footer.shareTooltip}
            >
              <span className="material-symbols-outlined text-base">share</span>
            </button>
          </div>
        </div>

        {/* Language Selection Bar with Country Flags */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-[#9685B5] flex items-center gap-1.5 font-bold">
              <span className="material-symbols-outlined text-sm text-[#D1C4E9]">language</span>
              {t.footer.selectLanguage}:
            </span>
            <LanguageSelector showLabels />
          </div>
          <span className="font-mono text-[11px] text-[#d0c5af]/50 text-center sm:text-right">
            {t.footer.flagInstruction}
          </span>
        </div>

        {/* Footer Sub-links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="font-mono text-xs text-[#d0c5af]/50 text-center md:text-left">
            © 2026 Elaine Figueiredo. {t.footer.rightsReserved} •{' '}
            <a
              href="https://www.elainefigueiredo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D1C4E9] transition-colors"
            >
              elainefigueiredo.com.br
            </a>
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-[#d0c5af]/60">
            <button onClick={() => setCurrentView('about')} className="hover:text-[#D1C4E9] transition-colors cursor-pointer">
              {t.footer.linkAbout}
            </button>
            <button onClick={() => setCurrentView('resume')} className="hover:text-[#D1C4E9] transition-colors cursor-pointer">
              {t.footer.linkResume}
            </button>
            <a
              href="?view=curriculo-pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D1C4E9] transition-colors flex items-center gap-1"
              title="Abrir Currículo em PDF (_blank)"
            >
              <span>{t.footer.linkResumePdf}</span>
              <span className="material-symbols-outlined text-[10px]">open_in_new</span>
            </a>
            <button onClick={() => setCurrentView('courses')} className="hover:text-[#D1C4E9] transition-colors cursor-pointer">
              {t.footer.linkCourses}
            </button>
            <button onClick={() => setCurrentView('portfolio')} className="hover:text-[#D1C4E9] transition-colors cursor-pointer">
              {t.footer.linkPortfolio}
            </button>
            <button onClick={() => setCurrentView('contact')} className="hover:text-[#D1C4E9] transition-colors cursor-pointer">
              {t.footer.linkContact}
            </button>
          </div>
        </div>
      </div>

      {/* SMO Social Share Modal */}
      <SocialShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title={t.home.headline}
        customText={t.footer.description}
      />

      {/* Diagnóstico com Elaine AI Modal */}
      {showAiDiagnosisModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-card bg-[#151120] p-6 md:p-8 rounded-3xl max-w-xl w-full border border-[#D1C4E9]/30 relative my-8 shadow-[0_0_30px_rgba(209,196,233,0.15)]">
            <button
              onClick={() => setShowAiDiagnosisModal(false)}
              className="absolute top-5 right-5 text-[#eae1d4]/60 hover:text-[#eae1d4] p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[#FBBF24] text-xl animate-pulse">auto_awesome</span>
              <span className="font-mono text-xs text-[#D1C4E9] font-bold uppercase tracking-wider">
                {t.footer.diagModalBadge}
              </span>
            </div>

            <h3 className="font-headline text-2xl font-bold text-white mb-2">
              {t.footer.diagModalTitle}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#d0c5af] mb-6 leading-relaxed">
              {t.footer.diagModalDesc}
            </p>

            {!diagGenerated ? (
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-[#D1C4E9] font-bold mb-2">
                    {t.footer.diagQ1}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Letramento em IA & Capacitação',
                      'Engenharia de Prompt & Contexto',
                      'Arquitetura Cloud & Soluções RAG',
                      'Governança, Ética & ESG Tech',
                      'Estratégia C-Level & Diagnóstico',
                      'Palestra Magna / Keynote',
                    ].map((domain) => (
                      <button
                        key={domain}
                        type="button"
                        onClick={() => setDiagDomain(domain)}
                        className={`p-3 rounded-xl text-left font-sans text-xs border transition-all cursor-pointer ${
                          diagDomain === domain
                            ? 'bg-[#D1C4E9]/20 border-[#D1C4E9] text-white font-semibold'
                            : 'bg-black/30 border-white/10 text-[#d0c5af] hover:border-white/20'
                        }`}
                      >
                        {domain}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#D1C4E9] font-bold mb-2">
                    {t.footer.diagQ2}
                  </label>
                  <div className="space-y-2">
                    {[
                      'Explorando oportunidades e capacitação de times',
                      'Pilotos e MVPs em andamento precisando de validação',
                      'Escala em produção exigindo governança e alta performance',
                    ].map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => setDiagStage(stage)}
                        className={`w-full p-3 rounded-xl text-left font-sans text-xs border transition-all cursor-pointer ${
                          diagStage === stage
                            ? 'bg-[#D1C4E9]/20 border-[#D1C4E9] text-white font-semibold'
                            : 'bg-black/30 border-white/10 text-[#d0c5af] hover:border-white/20'
                        }`}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setDiagGenerated(true)}
                  className="w-full mt-4 py-3.5 bg-[#D1C4E9] hover:bg-white text-[#2a134d] font-mono text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(209,196,233,0.3)]"
                >
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  {t.footer.diagBtnGenerate}
                </button>
              </div>
            ) : (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="p-5 rounded-2xl bg-black/40 border border-[#D1C4E9]/30 space-y-3 font-sans text-xs text-[#eae1d4]">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-mono text-[#FBBF24] font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      {t.footer.diagRecommendation}
                    </span>
                    <span className="font-mono text-[10px] text-[#9685B5]">Aura Matrix AI</span>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] text-[#9685B5] block">{t.footer.diagSelectedFocus}:</span>
                    <strong className="text-white text-sm">{diagDomain}</strong>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] text-[#9685B5] block">{t.footer.diagOperationalContext}:</span>
                    <span className="text-[#d0c5af]">{diagStage}</span>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <span className="font-mono text-[11px] text-[#D1C4E9] block font-bold mb-1">
                      {t.footer.diagSuggestedPath}:
                    </span>
                    <p className="text-[#d0c5af] leading-relaxed">
                      {diagDomain.includes('Palestra')
                        ? t.footer.diagDomainKeynote
                        : diagDomain.includes('Letramento')
                        ? t.footer.diagDomainTraining
                        : t.footer.diagDomainArchitecture}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {whatsappLink && (
                    <a
                      href={`${whatsappLink}&text=${encodeURIComponent(`Olá Elaine, fiz o diagnóstico com Elaine AI no seu portal!\n- Foco: ${diagDomain}\n- Momento: ${diagStage}\nGostaria de agendar uma conversa para detalhar essa proposta.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                      {t.footer.diagSendWhatsApp}
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setShowAiDiagnosisModal(false);
                      handleOpenContact();
                    }}
                    className="flex-1 bg-[#D1C4E9] hover:bg-white text-[#2a134d] font-mono text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">mail</span>
                    {t.footer.diagSendForm}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setDiagGenerated(false)}
                  className="w-full text-center font-mono text-xs text-[#9685B5] hover:text-[#D1C4E9] py-1 transition-colors cursor-pointer"
                >
                  {t.footer.diagReset}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

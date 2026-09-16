import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/mockData';
import { SocialIcon } from '../components/SocialIcon';
import { buildAttributedWhatsAppUrl, getAttributionString } from '../utils/utm';
import { trackEvent } from '../utils/analytics';
import { ShareBar } from '../components/ShareBar';
import { useLanguage } from '../i18n/LanguageContext';

export const ContactView: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Consultoria de IA & Arquitetura',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const recipientEmail = 'contato@elainefigueiredo.com.br';
    const attribution = getAttributionString('formulario_contato');
    const emailSubject = `[Contato Web] ${formData.subject} - ${formData.name}${attribution}`;

    const payload = {
      _subject: emailSubject,
      _replyto: formData.email,
      _template: 'table',
      _captcha: 'false',
      _target: recipientEmail,
      Nome: formData.name,
      Email: formData.email,
      Assunto: formData.subject,
      Mensagem: formData.message,
      Rastreamento_Campanha: attribution || 'Acesso Direto / Orgânico',
    };

    trackEvent('lead_submit', {
      subject: formData.subject,
      email: formData.email,
      name: formData.name,
      attribution,
    });

    let sent = false;
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (resp.ok) {
        sent = true;
      }
    } catch {
      // fallback
    }

    if (!sent) {
      try {
        await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        // fallback
      }
    }

    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Consultoria de IA & Arquitetura', message: '' });
    }, 6000);
  };

  const whatsapp = SOCIAL_LINKS.find((s) => s.id === 'whatsapp');

  return (
    <div className="py-12 px-4 md:px-6 max-w-[1200px] mx-auto min-h-[80vh]">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass-card-bright border-[#D1C4E9]/20 font-mono text-xs text-[#D1C4E9]">
          <span className="material-symbols-outlined text-sm">mail</span>
          {t.contactView.badge}
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-[#D1C4E9] mb-4">
          {t.contactView.title}
        </h1>
        <p className="font-sans text-lg text-[#d0c5af] max-w-3xl leading-relaxed">
          {t.contactView.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10">
            <h2 className="font-headline text-xl font-bold text-[#D1C4E9] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D1C4E9]">send</span>
              {t.contactView.formCardTitle}
            </h2>

            {submitted ? (
              <div className="p-6 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-emerald-200 text-sm font-mono text-center space-y-2">
                <span className="material-symbols-outlined text-3xl block text-emerald-400">mark_email_read</span>
                <p className="font-bold text-white text-base">{t.contactView.successTitle}</p>
                <p className="text-xs text-emerald-300">
                  {t.contactView.successSubtitle}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block font-mono text-[#D1C4E9] mb-1">{t.contactView.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contactView.namePlaceholder}
                    className="w-full bg-black/40 border border-white/10 text-[#eae1d4] px-4 py-3 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[#D1C4E9] mb-1">{t.contactView.emailLabel}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contactView.emailPlaceholder}
                    className="w-full bg-black/40 border border-white/10 text-[#eae1d4] px-4 py-3 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[#D1C4E9] mb-1">{t.contactView.subjectLabel}</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#1D1926] border border-white/10 text-[#eae1d4] px-4 py-3 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                  >
                    <option value="Palestra: Letramento Digital x Letramento em IA">{t.contactView.subjectLetramento}</option>
                    <option value="Consultoria de IA & Arquitetura">{t.contactView.subjectConsultoria}</option>
                    <option value="Treinamento de Equipe / Cursos">{t.contactView.subjectTreinamento}</option>
                    <option value="Mentoria Executiva">{t.contactView.subjectMentoria}</option>
                    <option value="Palestras & Eventos (Outros temas)">{t.contactView.subjectPalestras}</option>
                    <option value="Outro assunto">{t.contactView.subjectOutro}</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[#D1C4E9] mb-1">{t.contactView.messageLabel}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contactView.messagePlaceholder}
                    className="w-full bg-black/40 border border-white/10 text-[#eae1d4] px-4 py-3 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 font-mono font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(209,196,233,0.25)] ${
                    isSubmitting
                      ? 'bg-[#D1C4E9]/70 text-[#381e72] cursor-not-allowed'
                      : 'bg-[#D1C4E9] text-[#381e72] hover:bg-[#D1C4E9]/90'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                      {t.contactView.btnSubmitting}
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm">send</span>
                      {t.contactView.btnSubmit}
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-1.5 font-mono text-[11px] text-center text-[#9685B5]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{t.contactView.autoSentLabel}</span>
                  <strong className="text-[#D1C4E9]">contato@elainefigueiredo.com.br</strong>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Direct Links & Social Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* WhatsApp Spotlight Card */}
          {whatsapp && (
            <div className="glass-card rounded-2xl p-6 border border-[#25D366]/40 bg-[#25D366]/5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-black flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.4)]">
                  <SocialIcon name="whatsapp" size={22} />
                </div>
                <div>
                  <h3 className="font-headline text-base font-bold text-white">
                    {t.contactView.whatsappCardTitle}
                  </h3>
                  <span className="font-mono text-xs text-[#25D366]">
                    {t.contactView.whatsappCardNumber}
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs text-[#d0c5af]">
                {t.contactView.whatsappCardText}
              </p>
              <a
                href={buildAttributedWhatsAppUrl(
                  '5511999479666',
                  t.floatingWa.defaultMsg,
                  'pagina_contato'
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('whatsapp_click', {
                    placement: 'contact_page_card',
                  })
                }
                className="w-full py-3 bg-[#25D366] text-black font-mono font-bold text-xs rounded-xl hover:bg-[#25D366]/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <SocialIcon name="whatsapp" size={16} />
                {t.contactView.whatsappCardBtn}
              </a>
            </div>
          )}

          {/* Share with Colleagues (SMO) */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
            <h3 className="font-headline text-base font-bold text-[#D1C4E9]">
              {t.contactView.shareTitle}
            </h3>
            <p className="font-sans text-xs text-[#d0c5af]/80">
              {t.footer.description}
            </p>
            <ShareBar
              title={t.home.headline}
              summary={t.home.subtitle}
              compact={false}
            />
          </div>

          {/* Social Profiles Direct Links */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
            <h3 className="font-headline text-lg font-bold text-[#D1C4E9]">
              {t.contactView.directTitle}
            </h3>

            <div className="space-y-2.5 font-mono text-xs text-[#d0c5af]">
              {SOCIAL_LINKS.filter((s) => s.id !== 'whatsapp').map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/30 rounded-xl border border-white/5 flex items-center justify-between hover:border-[#D1C4E9]/50 hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#D1C4E9] group-hover:scale-110 transition-transform">
                      <SocialIcon name={social.icon} size={18} />
                    </span>
                    <div>
                      <span className="text-[10px] text-[#9685B5] block">{social.name}:</span>
                      <span className="text-[#D1C4E9] font-bold">{social.handle}</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-sm text-[#9685B5] group-hover:translate-x-0.5 group-hover:text-[#D1C4E9] transition-all">
                    open_in_new
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

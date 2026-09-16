import React, { useState, useEffect } from 'react';
import { getCurriculumByLanguage, CurriculumContent } from '../data/curriculumData';
import { Language } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface CurriculoPdfViewProps {
  onBack?: () => void;
}

export const CurriculoPdfView: React.FC<CurriculoPdfViewProps> = ({ onBack }) => {
  const { language, setLanguage } = useLanguage();
  const [lang, setLang] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Language;
    if (urlLang && ['pt', 'en', 'es', 'fr', 'it'].includes(urlLang)) {
      return urlLang;
    }
    return language || 'pt';
  });

  useEffect(() => {
    if (language && language !== lang) {
      setLang(language);
    }
  }, [language]);
  const [isCopied, setIsCopied] = useState(false);

  const data: CurriculumContent = getCurriculumByLanguage(lang);

  useEffect(() => {
    // Check if url contains print instruction
    const params = new URLSearchParams(window.location.search);
    if (params.get('print') === 'true' || params.get('autoprint') === 'true') {
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownloadHtml = () => {
    const element = document.getElementById('curriculum-document');
    if (!element) return;

    const fullHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <title>${data.name} - Curriculo / Resume</title>
  <style>
    @page { size: A4; margin: 15mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.35; color: #111; margin: 0; padding: 20px; font-size: 11px; }
    h1 { font-size: 20px; margin: 0 0 4px 0; text-align: center; font-weight: 800; letter-spacing: 0.5px; }
    .subtitle { text-align: center; font-size: 11px; margin-bottom: 4px; color: #222; }
    .contacts { text-align: center; font-size: 10px; margin-bottom: 12px; color: #444; border-bottom: 1px solid #ddd; padding-bottom: 8px; }
    .section-title { font-size: 11.5px; font-weight: 800; text-transform: uppercase; margin: 12px 0 4px 0; border-bottom: 1px solid #111; padding-bottom: 2px; letter-spacing: 0.5px; }
    p { margin: 0 0 6px 0; text-align: justify; }
    ul { margin: 2px 0 6px 16px; padding: 0; }
    li { margin-bottom: 3px; }
    .exp-header { font-weight: 700; margin-top: 6px; font-size: 11px; }
    .skills-row { margin-bottom: 3px; }
    .skills-title { font-weight: 700; }
    a { color: #111; text-decoration: none; }
  </style>
</head>
<body>
  ${element.innerHTML}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Curriculo_Elaine_Figueiredo_${lang.toUpperCase()}.html`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#120F1D] text-[#1E1E24] print:bg-white print:text-black print:min-h-0 print:p-0 py-8 px-4 flex flex-col items-center">
      
      {/* Top Floating Control Bar (Hidden on Print) */}
      <div className="no-print w-full max-w-[850px] mb-6 bg-[#1D182C] border border-[#D1C4E9]/30 rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4 text-white">
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onBack) {
                onBack();
              } else if (window.opener || window.history.length > 1) {
                window.close();
                // If window.close didn't close it, go back
                window.history.back();
              } else {
                window.location.href = '/';
              }
            }}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all flex items-center gap-1.5 text-xs font-mono text-[#D1C4E9] cursor-pointer"
            title="Voltar ao Portal"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Voltar ao Portal</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-xs font-mono text-[#eae1d4]">
            <span className="material-symbols-outlined text-sm text-[#D1C4E9]">picture_as_pdf</span>
            <span>Modelo Oficial A4</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Language Switcher */}
          <div className="flex flex-wrap bg-black/40 p-1 rounded-xl border border-white/10 text-xs font-mono">
            {[
              { code: 'pt' as Language, label: '🇧🇷 PT' },
              { code: 'en' as Language, label: '🇺🇸 EN' },
              { code: 'es' as Language, label: '🇪🇸 ES' },
              { code: 'fr' as Language, label: '🇫🇷 FR' },
              { code: 'it' as Language, label: '🇮🇹 IT' },
            ].map(item => (
              <button
                key={item.code}
                onClick={() => {
                  setLang(item.code);
                  setLanguage(item.code);
                }}
                className={`px-2.5 py-1 rounded-lg transition-all text-xs font-mono cursor-pointer ${
                  lang === item.code
                    ? 'bg-[#D1C4E9] text-[#281442] font-bold shadow-sm'
                    : 'text-[#d0c5af] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="p-2 sm:px-3 sm:py-2 bg-white/5 hover:bg-white/10 text-[#eae1d4] rounded-xl border border-white/10 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
            title="Copiar Link"
          >
            <span className="material-symbols-outlined text-sm">
              {isCopied ? 'check' : 'link'}
            </span>
            <span className="hidden md:inline">{isCopied ? 'Copiado!' : 'Compartilhar'}</span>
          </button>

          {/* Download HTML */}
          <button
            onClick={handleDownloadHtml}
            className="p-2 sm:px-3 sm:py-2 bg-white/5 hover:bg-white/10 text-[#eae1d4] rounded-xl border border-white/10 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
            title="Download Arquivo"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            <span className="hidden md:inline">Download</span>
          </button>

          {/* Print / Save PDF Primary Action */}
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-[#D1C4E9] hover:bg-white text-[#2a134d] rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(209,196,233,0.3)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">print</span>
            <span>IMPRIMIR / SALVAR PDF</span>
          </button>
        </div>

      </div>

      {/* Tip Banner (no-print) */}
      <div className="no-print w-full max-w-[850px] mb-4 px-4 py-2.5 bg-[#1B1627] border border-[#D1C4E9]/20 rounded-xl text-xs text-[#d0c5af] flex items-center justify-between gap-2 font-sans">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#FBBF24] text-base">info</span>
          <span>
            {lang === 'pt'
              ? 'Dica de Impressão: na janela de impressão, escolha "Salvar como PDF", selecione formato A4 e marque "Gráficos de segundo plano" se desejar.'
              : 'Print Tip: In the print dialog, choose "Save as PDF", select A4 paper size, and enable "Background graphics" if desired.'}
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#9685B5] shrink-0">Ctrl + P</span>
      </div>

      {/* Printable Paper Canvas (A4 Dimensions simulation on screen, exact on print) */}
      <div
        id="curriculum-document"
        className="print-paper w-full max-w-[850px] bg-white text-[#111827] shadow-2xl rounded-none sm:rounded-sm p-8 sm:p-12 md:p-14 print:p-0 print:m-0 print:shadow-none print:w-full print:max-w-none text-left font-sans text-[11px] leading-[1.4] transition-all"
        style={{ color: '#111827' }}
      >
        {/* Header Name & Roles */}
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-[26px] font-extrabold tracking-wide text-black uppercase mb-1 font-sans">
            {data.name}
          </h1>
          <p className="text-[12px] sm:text-[13px] text-gray-800 font-medium tracking-tight mb-2">
            {data.headline}
          </p>

          {/* Contact Bar */}
          <div className="text-[10px] sm:text-[10.5px] text-gray-600 flex flex-wrap justify-center items-center gap-x-2 gap-y-1 pb-3 border-b border-gray-300">
            <span>{data.contact.location}</span>
            <span>|</span>
            <a href={`tel:${data.contact.phone.replace(/\D/g, '')}`} className="text-gray-700 hover:text-black">
              {data.contact.phone}
            </a>
            <span>|</span>
            <a href={`mailto:${data.contact.email}`} className="text-gray-700 hover:text-black">
              {data.contact.email}
            </a>
            <span>|</span>
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              {data.contact.linkedin}
            </a>
            <span>|</span>
            <a
              href="https://www.elainefigueiredo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              {lang === 'pt' ? 'Portfólio/Site: ' : 'Portfolio/Site: '}
              {data.contact.portfolio}
            </a>
          </div>
        </div>

        {/* 1. PROFESSIONAL SUMMARY */}
        <section className="mb-4">
          <h2 className="text-[11.5px] font-bold text-black uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 font-mono">
            {lang === 'pt' ? 'RESUMO PROFISSIONAL' : 'PROFESSIONAL SUMMARY'}
          </h2>
          <p className="text-gray-800 text-[10.5px] leading-relaxed text-justify">
            {data.summary}
          </p>
        </section>

        {/* 2. KEY COMPETENCIES */}
        <section className="mb-4">
          <h2 className="text-[11.5px] font-bold text-black uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 font-mono">
            {lang === 'pt' ? 'COMPETÊNCIAS-CHAVE' : 'KEY COMPETENCIES'}
          </h2>
          <div className="space-y-1.5 text-[10.5px]">
            {data.keyCompetencies.map((comp, idx) => (
              <p key={idx} className="leading-snug">
                <strong className="font-bold text-black">{comp.title}: </strong>
                <span className="text-gray-800">{comp.description}</span>
              </p>
            ))}
          </div>
        </section>

        {/* 3. PROFESSIONAL EXPERIENCE */}
        <section className="mb-4">
          <h2 className="text-[11.5px] font-bold text-black uppercase tracking-wider border-b border-black pb-0.5 mb-2 font-mono">
            {lang === 'pt' ? 'EXPERIÊNCIA PROFISSIONAL' : 'PROFESSIONAL EXPERIENCE'}
          </h2>

          <div className="space-y-3">
            {data.professionalExperience.map((exp, idx) => (
              <div key={idx} className="leading-snug">
                <div className="flex flex-wrap justify-between items-baseline gap-1 mb-1">
                  <h3 className="font-bold text-black text-[11px]">
                    {exp.role} <span className="font-normal text-gray-700">| {exp.company} | {exp.location}</span>
                  </h3>
                  <span className="text-[10px] font-bold text-gray-700 whitespace-nowrap">
                    | {exp.period}
                  </span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[10.5px] leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-justify">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. KEY RESULTS AND MEASURABLE ACHIEVEMENTS */}
        <section className="mb-4">
          <h2 className="text-[11.5px] font-bold text-black uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 font-mono">
            {lang === 'pt' ? 'PRINCIPAIS RESULTADOS E CONQUISTAS MENSURÁVEIS' : 'KEY RESULTS AND MEASURABLE ACHIEVEMENTS'}
          </h2>
          <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[10.5px] leading-relaxed">
            {data.measurableAchievements.map((item, idx) => (
              <li key={idx} className="text-justify">{item}</li>
            ))}
          </ul>
        </section>

        {/* 5. TECHNICAL AND BEHAVIORAL SKILLS */}
        <section className="mb-4">
          <h2 className="text-[11.5px] font-bold text-black uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 font-mono">
            {lang === 'pt' ? 'HABILIDADES TÉCNICAS E COMPORTAMENTAIS' : 'TECHNICAL AND BEHAVIORAL SKILLS'}
          </h2>
          <div className="space-y-1 text-[10.5px] text-gray-800">
            {data.skills.map((skill, idx) => (
              <p key={idx} className="leading-snug">
                <strong className="font-bold text-black">{skill.category}: </strong>
                <span>{skill.items}</span>
              </p>
            ))}
          </div>
        </section>

        {/* 6. EDUCATION */}
        <section className="mb-4">
          <h2 className="text-[11.5px] font-bold text-black uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 font-mono">
            {lang === 'pt' ? 'FORMAÇÃO ACADÊMICA' : 'EDUCATION'}
          </h2>
          <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[10.5px] leading-snug">
            {data.education.map((edu, idx) => (
              <li key={idx}>
                <strong className="font-bold text-black">{edu.degree}</strong> – {edu.institution}
                {edu.year && `, ${edu.year}`}
                {edu.details && `. ${edu.details}`}
              </li>
            ))}
          </ul>
        </section>

        {/* 7. RELEVANT CERTIFICATIONS AND COURSES */}
        <section className="mb-4">
          <h2 className="text-[11.5px] font-bold text-black uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 font-mono">
            {lang === 'pt' ? 'CERTIFICAÇÕES E CURSOS RELEVANTES' : 'RELEVANT CERTIFICATIONS AND COURSES'}
          </h2>
          <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[10.5px] leading-snug">
            {data.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* 8. PUBLICATIONS, LECTURES AND SELECTED PROJECTS */}
        <section className="mb-4">
          <h2 className="text-[11.5px] font-bold text-black uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 font-mono">
            {lang === 'pt' ? 'PUBLICAÇÕES, PALESTRAS E PROJETOS SELECIONADOS' : 'PUBLICATIONS, LECTURES AND SELECTED PROJECTS'}
          </h2>
          <ul className="list-disc pl-4 space-y-1 text-gray-800 text-[10.5px] leading-relaxed">
            {data.publicationsAndLectures.map((pub, idx) => (
              <li key={idx} className="text-justify">{pub}</li>
            ))}
          </ul>
        </section>

        {/* 9. KEYWORDS */}
        <section className="mb-2">
          <h2 className="text-[11.5px] font-bold text-black uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 font-mono">
            {lang === 'pt' ? 'PALAVRAS-CHAVE - Keywords' : 'KEYWORDS'}
          </h2>
          <p className="text-[10px] text-gray-700 leading-normal">
            {data.keywords.join(' | ')}
          </p>
        </section>

      </div>

      {/* Print Specific CSS */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm 15mm;
          }
          body {
            background-color: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          .print-paper {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: #000000 !important;
          }
          a {
            text-decoration: none !important;
            color: #000000 !important;
          }
          h1, h2, h3, strong {
            color: #000000 !important;
          }
          p, li, span {
            color: #111111 !important;
          }
        }
      `}</style>

    </div>
  );
};

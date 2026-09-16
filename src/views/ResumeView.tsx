import React from 'react';
import { getCurriculumByLanguage } from '../data/curriculumData';
import { useLanguage } from '../i18n/LanguageContext';

export const ResumeView: React.FC = () => {
  const { language } = useLanguage();
  const curriculum = getCurriculumByLanguage(language);

  const handleOpenPdfBlank = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.open(`?view=curriculo-pdf&lang=${language}`, '_blank', 'noopener,noreferrer');
  };

  const uiLabels = {
    pt: {
      badge: 'DIR_003 // CURRÍCULO E EXPERIÊNCIA',
      printBtn: 'IMPRIMIR / GERAR PDF',
      achieve1Val: '60% Redução',
      achieve1Desc: 'no tempo de análise, documentação ou execução de processos via IA generativa.',
      achieve2Val: '10.000+ Alunos',
      achieve2Desc: 'capacitados em Dados, IA, Arquitetura e Engenharia (Avaliação média 9 - Promotor).',
      achieve3Val: '20+ Projetos',
      achieve3Desc: 'estratégicos de consultoria, pesquisa aplicada e governança de tecnologia.',
      summaryTitle: 'Resumo Profissional',
      competenciesTitle: 'Competências-Chave',
      experienceTitle: 'Experiência Profissional',
      publicationsTitle: 'Publicações Científicas, Palestras e Workshops',
      pdfCardTitle: 'Versão Oficial para Impressão',
      pdfCardDesc: 'Visualize o modelo oficial padronizado em formato A4, pronto para download em PDF ou impressão direta.',
      pdfCardBtn: 'ABRIR EM NOVA ABA (_BLANK)',
      educationTitle: 'Formação Acadêmica',
      certificationsTitle: 'Certificações & Cursos',
      skillsTitle: 'Habilidades Técnicas',
      keywordsTitle: 'Palavras-Chave // Keywords'
    },
    en: {
      badge: 'DIR_003 // RESUME & EXPERIENCE',
      printBtn: 'PRINT / EXPORT PDF',
      achieve1Val: '60% Reduction',
      achieve1Desc: 'in analysis, documentation, and process cycle time via generative AI automation.',
      achieve2Val: '10,000+ Students',
      achieve2Desc: 'trained in Data Science, AI, Architecture, and Software Engineering (Avg. score 9).',
      achieve3Val: '20+ Projects',
      achieve3Desc: 'strategic consulting, applied biomedical research, and AI technology governance.',
      summaryTitle: 'Professional Summary',
      competenciesTitle: 'Core Competencies',
      experienceTitle: 'Professional Experience',
      publicationsTitle: 'Scientific Publications, Keynotes & Workshops',
      pdfCardTitle: 'Official Print Version',
      pdfCardDesc: 'Access the official A4 formatted resume document, ready for PDF export or immediate printing.',
      pdfCardBtn: 'OPEN IN NEW TAB (_BLANK)',
      educationTitle: 'Education',
      certificationsTitle: 'Certifications & Courses',
      skillsTitle: 'Technical Skills',
      keywordsTitle: 'Keywords'
    },
    es: {
      badge: 'DIR_003 // CURRÍCULUM Y EXPERIENCIA',
      printBtn: 'IMPRIMIR / GENERAR PDF',
      achieve1Val: '60% Reducción',
      achieve1Desc: 'en tiempo de análisis, documentación o ejecución de procesos con IA generativa.',
      achieve2Val: '10.000+ Alumnos',
      achieve2Desc: 'capacitados en Datos, IA y Arquitectura de Software (Evaluación promedio 9).',
      achieve3Val: '20+ Proyectos',
      achieve3Desc: 'estratégicos en consultoría, investigación aplicada y gobernanza de IA.',
      summaryTitle: 'Resumen Profesional',
      competenciesTitle: 'Competencias Clave',
      experienceTitle: 'Experiencia Profesional',
      publicationsTitle: 'Publicaciones Científicas, Conferencias y Talleres',
      pdfCardTitle: 'Versión Oficial para Imprimir',
      pdfCardDesc: 'Visualice el formato oficial A4 estandarizado, listo para exportar a PDF o imprimir directamente.',
      pdfCardBtn: 'ABRIR EN NUEVA PESTAÑA (_BLANK)',
      educationTitle: 'Formación Académica',
      certificationsTitle: 'Certificaciones y Cursos',
      skillsTitle: 'Habilidades Técnicas',
      keywordsTitle: 'Palabras Clave // Keywords'
    },
    fr: {
      badge: 'DIR_003 // CURRICULUM ET EXPÉRIENCE',
      printBtn: 'IMPRIMER / EXPORTER PDF',
      achieve1Val: '60% Gain de temps',
      achieve1Desc: 'sur l’analyse, la documentation et l’automatisation des processus par l’IA générative.',
      achieve2Val: '10 000+ Étudiants',
      achieve2Desc: 'formés en Data Science, IA et Génie Logiciel (Note moyenne : 9/10).',
      achieve3Val: '20+ Projets',
      achieve3Desc: 'missions stratégiques de conseil, recherche biomédicale et gouvernance IA.',
      summaryTitle: 'Résumé Professionnel',
      competenciesTitle: 'Compétences Clés',
      experienceTitle: 'Expérience Professionnelle',
      publicationsTitle: 'Publications Scientifiques, Conférences & Ateliers',
      pdfCardTitle: 'Version Officielle d’Impression',
      pdfCardDesc: 'Consultez le modèle officiel standardisé au format A4, prêt pour l’export PDF ou l’impression.',
      pdfCardBtn: 'OUVRIR DANS UN NOUVEL ONGLET (_BLANK)',
      educationTitle: 'Formation Académique',
      certificationsTitle: 'Certifications & Diplômes',
      skillsTitle: 'Compétences Techniques',
      keywordsTitle: 'Mots-Clés // Keywords'
    },
    it: {
      badge: 'DIR_003 // CURRICULUM ED ESPERIENZA',
      printBtn: 'STAMPA / SCARICA PDF',
      achieve1Val: '60% Riduzione',
      achieve1Desc: 'dei tempi di analisi, documentazione e automazione dei processi con IA generativa.',
      achieve2Val: '10.000+ Studenti',
      achieve2Desc: 'formati in Data Science, IA e Architetture Software (Valutazione media: 9/10).',
      achieve3Val: '20+ Progetti',
      achieve3Desc: 'consulenze strategiche, ricerca applicata e governance di sistemi di IA.',
      summaryTitle: 'Profilo Professionale',
      competenciesTitle: 'Competenze Chiave',
      experienceTitle: 'Esperienza Professionale',
      publicationsTitle: 'Pubblicazioni Scientifiche, Conferenze e Workshop',
      pdfCardTitle: 'Versione Ufficiale per la Stampa',
      pdfCardDesc: 'Visualizza il modello ufficiale in formato A4, pronto per la stampa o l’esportazione in PDF.',
      pdfCardBtn: 'APRI IN UNA NUOVA SCHEDA (_BLANK)',
      educationTitle: 'Percorso Accademico',
      certificationsTitle: 'Certificazioni & Corsi',
      skillsTitle: 'Competenze Tecniche',
      keywordsTitle: 'Parole Chiave // Keywords'
    }
  }[language] || {
    badge: 'DIR_003 // CURRÍCULO E EXPERIÊNCIA',
    printBtn: 'IMPRIMIR / GERAR PDF',
    achieve1Val: '60% Redução',
    achieve1Desc: 'no tempo de análise, documentação ou execução de processos via IA generativa.',
    achieve2Val: '10.000+ Alunos',
    achieve2Desc: 'capacitados em Dados, IA, Arquitetura e Engenharia.',
    achieve3Val: '20+ Projetos',
    achieve3Desc: 'estratégicos de consultoria e pesquisa aplicada.',
    summaryTitle: 'Resumo Profissional',
    competenciesTitle: 'Competências-Chave',
    experienceTitle: 'Experiência Profissional',
    publicationsTitle: 'Publicações Científicas, Palestras e Workshops',
    pdfCardTitle: 'Versão Oficial para Impressão',
    pdfCardDesc: 'Visualize o modelo oficial padronizado em formato A4, pronto para download em PDF ou impressão direta.',
    pdfCardBtn: 'ABRIR EM NOVA ABA (_BLANK)',
    educationTitle: 'Formação Acadêmica',
    certificationsTitle: 'Certificações & Cursos',
    skillsTitle: 'Habilidades Técnicas',
    keywordsTitle: 'Palavras-Chave // Keywords'
  };

  return (
    <div className="py-12 px-4 md:px-6 max-w-[1200px] mx-auto min-h-[80vh]">
      
      {/* Header Banner */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass-card-bright border-[#D1C4E9]/20 font-mono text-xs text-[#D1C4E9]">
            <span className="material-symbols-outlined text-sm">description</span>
            {uiLabels.badge}
          </div>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-[#D1C4E9] mb-2 tracking-tight">
            {curriculum.name}
          </h1>
          <p className="font-sans text-base md:text-lg text-[#d0c5af] max-w-3xl leading-relaxed">
            {curriculum.headline}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-[#9685B5]">
            <span>{curriculum.contact.location}</span>
            <span>•</span>
            <span>{curriculum.contact.phone}</span>
            <span>•</span>
            <a href={`mailto:${curriculum.contact.email}`} className="hover:text-[#D1C4E9] underline">
              {curriculum.contact.email}
            </a>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={`?view=curriculo-pdf&lang=${language}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenPdfBlank}
            className="bg-[#D1C4E9] hover:bg-white text-[#2a134d] font-mono text-xs font-bold px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_0_20px_rgba(209,196,233,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)]"
          >
            <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
            <span>{uiLabels.printBtn}</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>

      {/* Measurable Achievements Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#D1C4E9]/10 border border-[#D1C4E9]/30 flex items-center justify-center text-[#D1C4E9] shrink-0">
            <span className="material-symbols-outlined text-xl">speed</span>
          </div>
          <div>
            <span className="font-headline text-2xl font-extrabold text-[#D1C4E9] block">
              {uiLabels.achieve1Val}
            </span>
            <span className="font-sans text-xs text-[#d0c5af] leading-tight block mt-0.5">
              {uiLabels.achieve1Desc}
            </span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#D1C4E9]/10 border border-[#D1C4E9]/30 flex items-center justify-center text-[#D1C4E9] shrink-0">
            <span className="material-symbols-outlined text-xl">school</span>
          </div>
          <div>
            <span className="font-headline text-2xl font-extrabold text-[#D1C4E9] block">
              {uiLabels.achieve2Val}
            </span>
            <span className="font-sans text-xs text-[#d0c5af] leading-tight block mt-0.5">
              {uiLabels.achieve2Desc}
            </span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#D1C4E9]/10 border border-[#D1C4E9]/30 flex items-center justify-center text-[#D1C4E9] shrink-0">
            <span className="material-symbols-outlined text-xl">account_tree</span>
          </div>
          <div>
            <span className="font-headline text-2xl font-extrabold text-[#D1C4E9] block">
              {uiLabels.achieve3Val}
            </span>
            <span className="font-sans text-xs text-[#d0c5af] leading-tight block mt-0.5">
              {uiLabels.achieve3Desc}
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Professional Summary */}
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10">
            <h2 className="font-headline text-lg font-bold text-[#D1C4E9] flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[#D1C4E9]">person_outline</span>
              {uiLabels.summaryTitle}
            </h2>
            <p className="font-sans text-sm text-[#d0c5af] leading-relaxed text-justify">
              {curriculum.summary}
            </p>
          </div>

          {/* Key Competencies */}
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10">
            <h2 className="font-headline text-lg font-bold text-[#D1C4E9] flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#D1C4E9]">stars</span>
              {uiLabels.competenciesTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {curriculum.keyCompetencies.map((comp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                  <h3 className="font-mono text-xs font-bold text-[#D1C4E9]">
                    {comp.title}
                  </h3>
                  <p className="font-sans text-xs text-[#d0c5af]/90 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Column */}
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-bold text-[#D1C4E9] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D1C4E9]">work</span>
              {uiLabels.experienceTitle}
            </h2>

            <div className="space-y-6 relative border-l-2 border-[#D1C4E9]/20 ml-3 pl-6">
              {curriculum.professionalExperience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0B0910] border-2 border-[#D1C4E9] group-hover:scale-125 group-hover:bg-[#D1C4E9] transition-all" />

                  <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#D1C4E9]/40 transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <div>
                        <h3 className="font-headline text-lg font-bold text-[#D1C4E9]">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-xs text-[#9685B5] block">
                          {exp.company} • {exp.location}
                        </span>
                      </div>
                      <span className="bg-[#D1C4E9]/10 text-[#D1C4E9] border border-[#D1C4E9]/20 font-mono text-[11px] font-bold px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mt-4 font-sans text-xs text-[#d0c5af] leading-relaxed list-disc pl-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-justify">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications & Lectures */}
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10">
            <h2 className="font-headline text-lg font-bold text-[#D1C4E9] flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#D1C4E9]">menu_book</span>
              {uiLabels.publicationsTitle}
            </h2>
            <div className="space-y-3 font-sans text-xs text-[#d0c5af] leading-relaxed">
              {curriculum.publicationsAndLectures.map((pub, idx) => (
                <div key={idx} className="p-3 bg-black/30 rounded-xl border border-white/5 flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D1C4E9] text-base mt-0.5 shrink-0">
                    article
                  </span>
                  <span>{pub}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick PDF Card */}
          <div className="glass-card rounded-2xl p-6 border border-[#D1C4E9]/30 bg-gradient-to-br from-[#1A1528] to-[#120E1C] text-center">
            <span className="material-symbols-outlined text-3xl text-[#D1C4E9] mb-2 block">
              picture_as_pdf
            </span>
            <h3 className="font-headline text-base font-bold text-white mb-1">
              {uiLabels.pdfCardTitle}
            </h3>
            <p className="font-sans text-xs text-[#d0c5af] mb-4 leading-relaxed">
              {uiLabels.pdfCardDesc}
            </p>
            <a
              href={`?view=curriculo-pdf&lang=${language}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOpenPdfBlank}
              className="w-full py-2.5 px-4 bg-[#D1C4E9] hover:bg-white text-[#2a134d] font-mono text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{uiLabels.pdfCardBtn}</span>
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          </div>

          {/* Education Box */}
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="font-headline text-lg font-bold text-[#D1C4E9] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D1C4E9]">school</span>
              {uiLabels.educationTitle}
            </h3>
            
            <div className="space-y-4 font-sans text-xs">
              {curriculum.education.map((edu, idx) => (
                <div key={idx} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                  <span className="font-bold text-[#D1C4E9] block text-sm">
                    {edu.degree}
                  </span>
                  <span className="text-[#9685B5] block mt-0.5">
                    {edu.institution}
                  </span>
                  {edu.details && (
                    <span className="text-[#d0c5af]/80 block text-[11px] mt-1 leading-snug">
                      {edu.details}
                    </span>
                  )}
                  {edu.year && (
                    <span className="text-[#d0c5af]/60 block text-[10px] mt-1 font-mono">
                      {edu.year}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Box */}
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="font-headline text-lg font-bold text-[#D1C4E9] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D1C4E9]">verified</span>
              {uiLabels.certificationsTitle}
            </h3>
            <div className="space-y-2.5 font-sans text-xs text-[#d0c5af]">
              {curriculum.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#D1C4E9] text-sm mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="font-headline text-lg font-bold text-[#D1C4E9] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D1C4E9]">code</span>
              {uiLabels.skillsTitle}
            </h3>

            <div className="space-y-3 font-sans text-xs text-[#d0c5af]">
              {curriculum.skills.map((s, idx) => (
                <div key={idx} className="pb-2 border-b border-white/5 last:border-b-0">
                  <strong className="font-mono text-[11px] text-[#D1C4E9] block mb-0.5">
                    {s.category}
                  </strong>
                  <span className="text-xs leading-relaxed text-[#d0c5af]/90">
                    {s.items}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="font-headline text-sm font-bold text-[#D1C4E9] mb-3 uppercase tracking-wider">
              {uiLabels.keywordsTitle}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {curriculum.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="bg-white/5 text-[#D1C4E9] font-mono text-[10px] px-2 py-0.5 rounded border border-white/5"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};


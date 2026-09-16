import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { TESTIMONIALS, getLocalizedTestimonial } from '../data/testimonialsData';
import { Testimonial, ViewMode } from '../types';

interface TestimonialCarouselProps {
  setCurrentView?: (view: ViewMode) => void;
}

type FilterCategory = 'all' | 'client' | 'student';

const I18N_TEXTS = {
  pt: {
    badge: 'FEEDBACK_MATRIX // DEPOIMENTOS',
    title: 'O Que Dizem Nossos Clientes & Alunos',
    subtitle: 'Resultados comprovados, excelência técnica e transformação real gerada em palestras executivas, consultorias e cursos da Academy.',
    filterAll: 'Todos',
    filterClients: 'Clientes & Empresas',
    filterStudents: 'Alunos & Profissionais',
    clientBadge: 'CLIENTE CORPORATIVO',
    studentBadge: 'ALUNO ACADEMY',
    verified: 'Verificado',
    pageText: 'Página',
    ofText: 'de',
    prevBtn: 'Anterior',
    nextBtn: 'Próximo',
    autoplayActive: 'Rotação automática ativa',
    autoplayPaused: 'Rotação automática pausada',
    ctaContact: 'Solicitar Proposta ou Palestra',
    ctaCourses: 'Explorar Cursos',
    statsTrained: '+3.000 profissionais e líderes capacitados',
    statsSatisfaction: '99.4% de satisfação e recomendação',
  },
  en: {
    badge: 'FEEDBACK_MATRIX // TESTIMONIALS',
    title: 'What Our Clients & Students Say',
    subtitle: 'Proven business outcomes, technical rigor, and real-world transformation delivered through executive keynotes, consulting, and Academy masterclasses.',
    filterAll: 'All',
    filterClients: 'Clients & Enterprises',
    filterStudents: 'Students & Professionals',
    clientBadge: 'CORPORATE CLIENT',
    studentBadge: 'ACADEMY STUDENT',
    verified: 'Verified',
    pageText: 'Page',
    ofText: 'of',
    prevBtn: 'Previous',
    nextBtn: 'Next',
    autoplayActive: 'Auto-play active',
    autoplayPaused: 'Auto-play paused',
    ctaContact: 'Request Proposal or Keynote',
    ctaCourses: 'Explore Courses',
    statsTrained: '+3,000 leaders & professionals trained',
    statsSatisfaction: '99.4% satisfaction and recommendation rate',
  },
  es: {
    badge: 'FEEDBACK_MATRIX // TESTIMONIOS',
    title: 'Lo Que Dicen Nuestros Clientes y Alumnos',
    subtitle: 'Resultados comprobados, excelencia técnica y transformación real generada en conferencias ejecutivas, consultorías y cursos de la Academia.',
    filterAll: 'Todos',
    filterClients: 'Clientes & Empresas',
    filterStudents: 'Alumnos & Profesionales',
    clientBadge: 'CLIENTE CORPORATIVO',
    studentBadge: 'ALUMNO ACADEMY',
    verified: 'Verificado',
    pageText: 'Página',
    ofText: 'de',
    prevBtn: 'Anterior',
    nextBtn: 'Siguiente',
    autoplayActive: 'Rotación automática activa',
    autoplayPaused: 'Rotación automática pausada',
    ctaContact: 'Solicitar Propuesta o Conferencia',
    ctaCourses: 'Explorar Cursos',
    statsTrained: '+3.000 profesionales y líderes capacitados',
    statsSatisfaction: '99.4% de satisfacción y recomendación',
  },
  fr: {
    badge: 'FEEDBACK_MATRIX // TÉMOIGNAGES',
    title: 'Ce Que Disent Nos Clients & Étudiants',
    subtitle: 'Des résultats éprouvés, une rigueur technologique de pointe et un impact stratégique direct lors des conférences, conseils et formations.',
    filterAll: 'Tous',
    filterClients: 'Entreprises & Clients',
    filterStudents: 'Étudiants & Professionnels',
    clientBadge: 'CLIENT ENTREPRISE',
    studentBadge: 'ÉTUDIANT ACADÉMIE',
    verified: 'Vérifié',
    pageText: 'Page',
    ofText: 'sur',
    prevBtn: 'Précédent',
    nextBtn: 'Suivant',
    autoplayActive: 'Lecture automatique active',
    autoplayPaused: 'Lecture automatique en pause',
    ctaContact: 'Demander une Conférence ou un Conseil',
    ctaCourses: 'Découvrir les Cours',
    statsTrained: '+3 000 professionnels et décideurs formés',
    statsSatisfaction: '99,4 % de taux de satisfaction',
  },
  it: {
    badge: 'FEEDBACK_MATRIX // TESTIMONIANZE',
    title: 'Cosa Dicono i Nostri Clienti e Studenti',
    subtitle: 'Risultati concreti, rigore scientifico e trasformazione aziendale generati attraverso keynote esecutivi, consulenze e corsi Academy.',
    filterAll: 'Tutti',
    filterClients: 'Clienti & Aziende',
    filterStudents: 'Studenti & Professionisti',
    clientBadge: 'CLIENTE AZIENDALE',
    studentBadge: 'STUDENTE ACADEMY',
    verified: 'Verificato',
    pageText: 'Pagina',
    ofText: 'di',
    prevBtn: 'Precedente',
    nextBtn: 'Successivo',
    autoplayActive: 'Riproduzione automatica attiva',
    autoplayPaused: 'Riproduzione automatica in pausa',
    ctaContact: 'Richiedi Proposta o Keynote',
    ctaCourses: 'Esplora i Corsi',
    statsTrained: '+3.000 professionisti e dirigenti formati',
    statsSatisfaction: '99,4% di soddisfazione e raccomandazione',
  },
};

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ setCurrentView }) => {
  const { language } = useLanguage();
  const t = I18N_TEXTS[language] || I18N_TEXTS.pt;

  const [filter, setFilter] = useState<FilterCategory>('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Responsive items-per-page detection
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Filter and localize testimonials
  const filteredTestimonials = useMemo(() => {
    const list = TESTIMONIALS.filter((item) => {
      if (filter === 'all') return true;
      return item.type === filter;
    });
    return list.map((item) => getLocalizedTestimonial(item, language));
  }, [filter, language]);

  const totalPages = Math.max(1, Math.ceil(filteredTestimonials.length / itemsPerPage));

  // Reset page when filter or itemsPerPage changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filter, itemsPerPage]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoPlay || isHovered || totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  // Slice testimonials for current page
  const visibleTestimonials = useMemo(() => {
    const startIdx = currentPage * itemsPerPage;
    return filteredTestimonials.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredTestimonials, currentPage, itemsPerPage]);

  const clientCount = TESTIMONIALS.filter((t) => t.type === 'client').length;
  const studentCount = TESTIMONIALS.filter((t) => t.type === 'student').length;

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de Clientes e Alunos"
      className="py-20 px-4 md:px-6 relative overflow-hidden bg-[#07050A] border-t border-b border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background radial glow ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#9685B5]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D1C4E9]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full bg-[#D1C4E9]/10 border border-[#D1C4E9]/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D1C4E9] animate-ping"></span>
              <span className="font-mono text-[11px] text-[#D1C4E9] uppercase tracking-[0.2em] font-semibold">
                {t.badge}
              </span>
            </div>

            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-[#D1C4E9] tracking-tight">
              {t.title}
            </h2>

            <p className="font-sans text-sm md:text-base text-[#d0c5af]/80 mt-3 max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>

            {/* Quick Metrics Pills */}
            <div className="flex flex-wrap items-center gap-4 mt-4 font-mono text-xs text-[#9685B5]">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <span className="material-symbols-outlined text-sm text-[#D1C4E9]">groups</span>
                {t.statsTrained}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <span className="material-symbols-outlined text-sm text-[#E0C475]">star</span>
                {t.statsSatisfaction}
              </span>
            </div>
          </div>

          {/* Controls: Filter Tabs & Navigation Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 shrink-0">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl glass-card border border-white/10 bg-black/40">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#D1C4E9] text-[#381E72] font-bold shadow-md'
                    : 'text-[#d0c5af]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {t.filterAll} ({TESTIMONIALS.length})
              </button>

              <button
                type="button"
                onClick={() => setFilter('client')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === 'client'
                    ? 'bg-[#D1C4E9] text-[#381E72] font-bold shadow-md'
                    : 'text-[#d0c5af]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="material-symbols-outlined text-sm">business</span>
                {t.filterClients} ({clientCount})
              </button>

              <button
                type="button"
                onClick={() => setFilter('student')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === 'student'
                    ? 'bg-[#D1C4E9] text-[#381E72] font-bold shadow-md'
                    : 'text-[#d0c5af]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="material-symbols-outlined text-sm">school</span>
                {t.filterStudents} ({studentCount})
              </button>
            </div>

            {/* Navigation Buttons + Autoplay Toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                title={isAutoPlay ? t.autoplayPaused : t.autoplayActive}
                aria-label={isAutoPlay ? t.autoplayPaused : t.autoplayActive}
                className="w-9 h-9 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#9685B5] hover:text-[#D1C4E9] hover:border-[#D1C4E9]/40 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">
                  {isAutoPlay ? 'pause' : 'play_arrow'}
                </span>
              </button>

              <div className="flex items-center gap-1 glass-card px-2.5 py-1 rounded-xl border border-white/10 font-mono text-xs text-[#9685B5]">
                <span className="text-[#D1C4E9] font-bold">{currentPage + 1}</span>
                <span>/</span>
                <span>{totalPages}</span>
              </div>

              <button
                type="button"
                onClick={handlePrev}
                disabled={totalPages <= 1}
                aria-label={t.prevBtn}
                className="w-9 h-9 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#D1C4E9] hover:bg-[#D1C4E9]/10 hover:border-[#D1C4E9]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={totalPages <= 1}
                aria-label={t.nextBtn}
                className="w-9 h-9 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#D1C4E9] hover:bg-[#D1C4E9]/10 hover:border-[#D1C4E9]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Grid View */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {visibleTestimonials.map((testimonial) => {
              const isClient = testimonial.type === 'client';

              return (
                <div
                  key={testimonial.id}
                  className="glass-card rounded-2xl p-6 md:p-7 border border-white/10 hover:border-[#D1C4E9]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group bg-gradient-to-br from-[#1D1926]/70 via-[#0B0910]/80 to-black/90 shadow-[0_4px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(209,196,233,0.12)] hover:-translate-y-1.5"
                >
                  {/* Subtle top ambient glow inside the card */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D1C4E9]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Card Top Row: Type Badge + Star Rating */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider ${
                          isClient
                            ? 'bg-[#7C4DFF]/15 text-[#D1C4E9] border border-[#7C4DFF]/30'
                            : 'bg-[#00B4D8]/15 text-[#48CAE4] border border-[#00B4D8]/30'
                        }`}
                      >
                        <span className="material-symbols-outlined text-xs">
                          {isClient ? 'business' : 'school'}
                        </span>
                        {isClient ? t.clientBadge : t.studentBadge}
                      </span>

                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-0.5 text-[#E0C475]" aria-label="Avaliação 5 estrelas">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-sm">
                            star
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlight Quote (Key Takeaway) */}
                    {testimonial.highlight && (
                      <h3 className="font-headline text-base md:text-lg font-bold text-[#eae1d4] mb-3 leading-snug group-hover:text-white transition-colors">
                        “{testimonial.highlight}”
                      </h3>
                    )}

                    {/* Full Quote Body */}
                    <p className="font-sans text-xs md:text-sm text-[#d0c5af]/85 leading-relaxed mb-6 line-clamp-5">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Card Bottom Area: Project Tag & Author Details */}
                  <div className="pt-4 border-t border-white/5 mt-auto">
                    {testimonial.projectOrCourse && (
                      <div className="mb-4">
                        <span className="inline-block font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/5 text-[#9685B5] border border-white/5 line-clamp-1">
                          {testimonial.projectOrCourse}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Avatar with Gradient Initials */}
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                            testimonial.avatarGradient || 'from-[#7C4DFF] to-[#381E72]'
                          } flex items-center justify-center text-white font-headline text-xs font-bold shrink-0 shadow-inner border border-white/20`}
                        >
                          {testimonial.avatarInitials}
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-headline text-sm font-bold text-[#D1C4E9] group-hover:text-white transition-colors truncate">
                            {testimonial.author}
                          </h4>
                          <p className="font-mono text-[11px] text-[#9685B5] truncate">
                            {testimonial.role}
                          </p>
                          <p className="font-sans text-[11px] text-[#d0c5af]/60 truncate">
                            {testimonial.companyOrContext}
                          </p>
                        </div>
                      </div>

                      {/* Verified Badge */}
                      <span
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full border border-[#25D366]/20 shrink-0"
                        title={t.verified}
                      >
                        <span className="material-symbols-outlined text-[12px]">check_circle</span>
                        <span className="hidden sm:inline">{t.verified}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx)}
                aria-label={`${t.pageText} ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  currentPage === idx
                    ? 'w-8 h-2 bg-[#D1C4E9] shadow-[0_0_10px_#D1C4E9]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Call to action bottom bar inside section */}
        {setCurrentView && (
          <div className="mt-12 p-6 md:p-8 rounded-2xl glass-card border border-[#D1C4E9]/20 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#1D1926]/80 via-[#0B0910] to-[#1D1926]/80">
            <div>
              <span className="font-mono text-[11px] text-[#9685B5] uppercase tracking-wider block mb-1 font-semibold">
                PRÓXIMO PASSO // PARCERIA E FORMAÇÃO
              </span>
              <h3 className="font-headline text-lg md:text-xl font-bold text-[#D1C4E9]">
                Pronto para acelerar sua organização ou carreira com Inteligência Artificial?
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setCurrentView('contact')}
                className="bg-[#D1C4E9] text-[#381E72] px-5 py-2.5 rounded-xl font-headline font-bold text-xs md:text-sm hover:translate-y-[-2px] transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(209,196,233,0.3)]"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                {t.ctaContact}
              </button>

              <button
                type="button"
                onClick={() => setCurrentView('courses')}
                className="border border-[#D1C4E9]/30 text-[#D1C4E9] px-5 py-2.5 rounded-xl font-headline font-bold text-xs md:text-sm hover:bg-[#D1C4E9]/10 transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">school</span>
                {t.ctaCourses}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

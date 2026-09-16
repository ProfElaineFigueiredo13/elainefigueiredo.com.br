import React from 'react';
import { ViewMode } from '../types';
import { DRAWER_IMAGES, COURSES, BLOG_POSTS, KEYNOTE_LECTURES } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedCourse, getLocalizedLecture, getLocalizedBlogPost } from '../i18n/localizedData';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

interface HomeViewProps {
  setCurrentView: (view: ViewMode) => void;
  onSelectCourse: (courseId: string) => void;
  onSelectPost: (postId: string) => void;
  onSelectLecture?: (lectureId: string) => void;
}

const REQUESTED_LECTURE_IDS = [
  'talk-inteligencia-burra-ia',
  'talk-governanca-curadoria-desastres',
  'talk-gemini-notebook-notebooklm',
  'talk-ai-security-essencial',
  'talk-o-humano-essencial-ia',
];

const REQUESTED_COURSE_IDS = [
  'course-intro-rags',
  'course-intro-langchain',
  'course-masterclass-letramento-ia',
  'course-masterclass-prompt-context',
  'course-intro-notebooklm',
  'course-notebooklm-concursos',
];

export const HomeView: React.FC<HomeViewProps> = ({
  setCurrentView,
  onSelectCourse,
  onSelectPost,
  onSelectLecture,
}) => {
  const { language, t } = useLanguage();

  const homeLectures = REQUESTED_LECTURE_IDS.map((id) =>
    KEYNOTE_LECTURES.find((l) => l.id === id)
  ).filter((l): l is (typeof KEYNOTE_LECTURES)[number] => Boolean(l));

  const homeCourses = REQUESTED_COURSE_IDS.map((id) =>
    COURSES.find((c) => c.id === id)
  ).filter((c): c is (typeof COURSES)[number] => Boolean(c));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-4 md:px-6 py-20 overflow-hidden">
        {/* Background Layer with Neural Glow */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full object-cover opacity-40 mix-blend-screen grayscale brightness-75 contrast-125"
            style={{
              backgroundImage: `url('${DRAWER_IMAGES.heroBg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0910] via-[#0B0910]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0910] via-transparent to-transparent" />
          <div className="neural-bg" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass-card-bright border-[#D1C4E9]/20">
            <span className="w-2 h-2 rounded-full bg-[#D1C4E9] animate-pulse shadow-[0_0_10px_#D1C4E9]"></span>
            <span className="font-mono text-xs text-[#D1C4E9] uppercase tracking-[0.2em] font-medium">
              {t.home.badge}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl text-[#D1C4E9] mb-4 leading-[1.05] tracking-tighter font-extrabold">
            {t.home.titleFirst} <br />
            <span className="text-[#eae1d4] opacity-90 mix-blend-lighten font-bold">
              {t.home.titleLast}
            </span>
          </h1>

          {/* Headline Statement */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#D1C4E9]/60 shrink-0 hidden sm:block"></span>
            <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-extrabold text-[#D1C4E9] tracking-tight">
              {t.home.headline}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="font-sans text-lg md:text-xl text-[#d0c5af] mb-10 max-w-xl leading-relaxed opacity-90">
            {t.home.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setCurrentView('courses')}
              className="bg-[#D1C4E9] text-[#381e72] py-4 px-8 font-headline font-bold rounded-2xl violet-glow hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              {t.home.ctaCourses}
              <span className="material-symbols-outlined">trending_flat</span>
            </button>

            <button
              onClick={() => setCurrentView('portfolio')}
              className="border border-[#D1C4E9]/30 text-[#D1C4E9] py-4 px-8 font-headline font-bold rounded-2xl hover:bg-[#D1C4E9]/10 transition-all backdrop-blur-xl cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">folder_open</span>
              {t.home.ctaPortfolio}
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Matrix (Bento Cards) */}
      <section className="py-16 px-4 md:px-6 bg-[#050408] relative border-t border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(209,196,233,0.03),transparent)]" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs text-[#9685B5] tracking-[0.3em] uppercase block mb-2 font-medium">
                {t.home.matrixBadge}
              </span>
              <h2 className="font-headline text-3xl font-bold text-[#D1C4E9] text-glow">
                {t.home.matrixTitle}
              </h2>
            </div>
            <div className="h-px flex-grow bg-gradient-to-r from-[#D1C4E9]/30 to-transparent mx-4 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* About Card */}
            <button
              onClick={() => setCurrentView('about')}
              className="col-span-1 aspect-square glass-card rounded-2xl p-6 flex flex-col matrix-item group text-left cursor-pointer border border-white/10"
            >
              <div className="bg-[#D1C4E9]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#D1C4E9] group-hover:bg-[#D1C4E9] group-hover:text-[#381e72] transition-all duration-500">
                <span className="material-symbols-outlined text-2xl">person</span>
              </div>
              <div className="mt-auto">
                <span className="font-mono text-[10px] text-[#9685B5] mb-1 block opacity-60">
                  DIR_001
                </span>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-[#D1C4E9] group-hover:translate-x-1 transition-transform">
                  {t.nav.about}
                </h3>
                <div className="h-0.5 w-0 group-hover:w-full bg-[#D1C4E9]/50 transition-all duration-500 mt-2"></div>
              </div>
            </button>

            {/* Courses Card */}
            <button
              onClick={() => setCurrentView('courses')}
              className="col-span-1 aspect-square glass-card rounded-2xl p-6 flex flex-col matrix-item group text-left cursor-pointer border border-white/10"
            >
              <div className="bg-[#D1C4E9]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#D1C4E9] group-hover:bg-[#D1C4E9] group-hover:text-[#381e72] transition-all duration-500">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <div className="mt-auto">
                <span className="font-mono text-[10px] text-[#9685B5] mb-1 block opacity-60">
                  DIR_002
                </span>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-[#D1C4E9] group-hover:translate-x-1 transition-transform">
                  {t.nav.courses}
                </h3>
                <div className="h-0.5 w-0 group-hover:w-full bg-[#D1C4E9]/50 transition-all duration-500 mt-2"></div>
              </div>
            </button>

            {/* Resume Card */}
            <button
              onClick={() => setCurrentView('resume')}
              className="col-span-1 aspect-square glass-card rounded-2xl p-6 flex flex-col matrix-item group text-left cursor-pointer border border-white/10"
            >
              <div className="bg-[#D1C4E9]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#D1C4E9] group-hover:bg-[#D1C4E9] group-hover:text-[#381e72] transition-all duration-500">
                <span className="material-symbols-outlined text-2xl">description</span>
              </div>
              <div className="mt-auto">
                <span className="font-mono text-[10px] text-[#9685B5] mb-1 block opacity-60">
                  DIR_003
                </span>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-[#D1C4E9] group-hover:translate-x-1 transition-transform">
                  {t.nav.resume}
                </h3>
                <div className="h-0.5 w-0 group-hover:w-full bg-[#D1C4E9]/50 transition-all duration-500 mt-2"></div>
              </div>
            </button>

            {/* Blog Card */}
            <button
              onClick={() => setCurrentView('blog')}
              className="col-span-1 aspect-square glass-card rounded-2xl p-6 flex flex-col matrix-item group text-left cursor-pointer border border-white/10"
            >
              <div className="bg-[#D1C4E9]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#D1C4E9] group-hover:bg-[#D1C4E9] group-hover:text-[#381e72] transition-all duration-500">
                <span className="material-symbols-outlined text-2xl">rss_feed</span>
              </div>
              <div className="mt-auto">
                <span className="font-mono text-[10px] text-[#9685B5] mb-1 block opacity-60">
                  DIR_004
                </span>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-[#D1C4E9] group-hover:translate-x-1 transition-transform">
                  {t.nav.blog}
                </h3>
                <div className="h-0.5 w-0 group-hover:w-full bg-[#D1C4E9]/50 transition-all duration-500 mt-2"></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Manifesto Core Section */}
      <section className="py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#D1C4E9]/5 blur-[120px] rounded-full" />

        <div className="max-w-[1200px] mx-auto relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <span className="font-mono text-xs text-[#9685B5] uppercase tracking-[0.4em] block mb-6">
                {t.home.manifestoBadge}
              </span>

              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-[#eae1d4] mb-8 leading-tight manifesto-border pb-6 italic">
                {t.home.manifestoQuote}
              </h2>

              <div className="space-y-6">
                <p className="font-sans text-lg text-[#d0c5af] leading-relaxed">
                  {t.home.missionText}
                </p>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => setCurrentView('about')}
                  className="inline-flex items-center gap-4 text-[#D1C4E9] font-bold group text-lg cursor-pointer hover:underline"
                >
                  <span>{t.home.missionLink}</span>
                  <div className="w-10 h-10 rounded-full border border-[#D1C4E9]/30 flex items-center justify-center group-hover:bg-[#D1C4E9] group-hover:text-[#381e72] transition-all">
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Tech Status Box */}
            <div className="md:col-span-4 hidden md:block">
              <div className="p-8 glass-card rounded-2xl border border-[#D1C4E9]/20 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#D1C4E9]" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#D1C4E9]" />

                <div className="space-y-4 font-mono text-xs text-[#9685B5]">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>AI_RESEARCH_LINKS</span>
                    <span className="text-[#D1C4E9] font-bold">{t.home.statusActive}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>DATA_SYNERGY</span>
                    <span className="text-[#D1C4E9] font-bold">{t.home.statusOptimized}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>TECH_EVOLUTION</span>
                    <span className="text-[#D1C4E9] font-bold">v2.0.4</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2 pt-4">
                    <div className="h-1 bg-[#D1C4E9]" />
                    <div className="h-1 bg-[#D1C4E9]/40" />
                    <div className="h-1 bg-[#D1C4E9]" />
                    <div className="h-1 bg-[#D1C4E9]/20" />
                    <div className="h-1 bg-[#D1C4E9]" />
                    <div className="h-1 bg-[#D1C4E9]/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Keynote Lectures Section */}
      <section className="py-16 px-4 md:px-6 bg-[#050408] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="bg-[#D1C4E9]/10 text-[#D1C4E9] font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3 border border-[#D1C4E9]/30">
                {t.home.keynoteBadge}
              </span>
              <h2 className="font-headline text-2xl md:text-4xl font-extrabold text-[#D1C4E9]">
                {t.home.keynoteSectionTitle}
              </h2>
              <p className="font-sans text-xs md:text-sm text-[#d0c5af]/80 mt-2 max-w-2xl">
                {t.home.keynoteSectionSub}
              </p>
            </div>
            <button
              onClick={() => setCurrentView('courses')}
              className="text-xs font-mono text-[#D1C4E9] hover:underline flex items-center gap-1 cursor-pointer shrink-0 self-start md:self-end"
            >
              {t.home.viewAllKeynotes}
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>

          {/* Top Row: 2 Strategic Flagship Keynotes */}
          {homeLectures.length >= 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {homeLectures.slice(0, 2).map((rawLecture) => {
                const lecture = getLocalizedLecture(rawLecture, language);
                return (
                  <div
                    key={lecture.id}
                    onClick={() => {
                      if (onSelectLecture) {
                        onSelectLecture(lecture.id);
                      } else {
                        setCurrentView('courses');
                      }
                    }}
                    className="p-6 md:p-8 rounded-2xl glass-card border border-[#D1C4E9]/30 hover:border-[#D1C4E9] transition-all cursor-pointer bg-gradient-to-br from-[#381e72]/30 via-[#1D1926]/70 to-black/80 shadow-[0_0_20px_rgba(209,196,233,0.08)] group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="bg-[#D1C4E9] text-[#381e72] font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          KEYNOTE // PALESTRA MAGNA
                        </span>
                        <span className="text-[#9685B5] font-mono text-xs">
                          {lecture.duration} • {lecture.format.split('•')[0]}
                        </span>
                      </div>

                      <h3 className="font-headline text-xl md:text-2xl font-extrabold text-[#D1C4E9] group-hover:text-white transition-colors mb-2">
                        {lecture.title}
                      </h3>
                      <p className="font-mono text-xs text-[#9685B5] mb-3">
                        {lecture.subtitle}
                      </p>
                      <p className="font-sans text-xs md:text-sm text-[#d0c5af]/90 mb-4 line-clamp-3">
                        {lecture.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                        {lecture.skills.slice(0, 4).map((skill, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-white/5 text-[#d0c5af]/90 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[#9685B5] font-mono text-[11px]">
                          {lecture.targetAudience.split(',')[0]}
                        </span>
                        <span className="bg-[#D1C4E9] text-[#381e72] font-mono text-xs font-bold px-4 py-2 rounded-xl group-hover:bg-white transition-all flex items-center gap-1">
                          {t.home.keynoteCta}
                          <span className="material-symbols-outlined text-sm">east</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Row: 3 Specialized Keynotes */}
          {homeLectures.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {homeLectures.slice(2, 5).map((rawLecture) => {
                const lecture = getLocalizedLecture(rawLecture, language);
                return (
                  <div
                    key={lecture.id}
                    onClick={() => {
                      if (onSelectLecture) {
                        onSelectLecture(lecture.id);
                      } else {
                        setCurrentView('courses');
                      }
                    }}
                    className="p-6 rounded-2xl glass-card border border-white/10 hover:border-[#D1C4E9]/50 transition-all cursor-pointer bg-black/40 hover:bg-[#1D1926]/50 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="bg-white/10 text-[#D1C4E9] font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                          KEYNOTE
                        </span>
                        <span className="text-[#9685B5] font-mono text-[11px]">
                          {lecture.duration.split('(')[0].trim()}
                        </span>
                      </div>

                      <h3 className="font-headline text-lg font-bold text-[#D1C4E9] group-hover:text-white transition-colors mb-2">
                        {lecture.title}
                      </h3>
                      <p className="font-mono text-[11px] text-[#9685B5] mb-3 line-clamp-1">
                        {lecture.subtitle}
                      </p>
                      <p className="font-sans text-xs text-[#d0c5af]/80 mb-4 line-clamp-3">
                        {lecture.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-white/5">
                        {lecture.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-[#9685B5]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-mono text-[#D1C4E9] group-hover:underline flex items-center justify-end gap-1">
                          {t.home.keynoteCta}
                          <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Featured Courses Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pt-6 border-t border-white/5">
            <div>
              <span className="font-mono text-xs text-[#9685B5] uppercase tracking-widest block mb-1">
                {t.home.academyBadge}
              </span>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#D1C4E9]">
                {t.home.featuredCoursesTitle}
              </h2>
              <p className="font-sans text-xs md:text-sm text-[#d0c5af]/80 mt-1 max-w-2xl">
                {t.home.featuredCoursesSub}
              </p>
            </div>
            <button
              onClick={() => setCurrentView('courses')}
              className="text-xs font-mono text-[#D1C4E9] hover:underline flex items-center gap-1 cursor-pointer shrink-0 self-start md:self-end"
            >
              {t.home.viewAllCourses}
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeCourses.map((rawCourse) => {
              const course = getLocalizedCourse(rawCourse, language);
              return (
                <div
                  key={course.id}
                  onClick={() => {
                    setCurrentView('courses');
                    onSelectCourse(course.id);
                  }}
                  className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#D1C4E9]/40 transition-all cursor-pointer flex flex-col group bg-black/30 hover:bg-[#1D1926]/40"
                >
                  <div className="h-44 relative overflow-hidden bg-black/40">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 opacity-60"
                      style={{ backgroundImage: `url('${course.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D1926] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-[#D1C4E9] text-[#381e72] font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shadow-md">
                      {course.level}
                    </span>
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-[#D1C4E9] font-mono text-[11px] px-2 py-0.5 rounded-md border border-white/10">
                      {course.duration}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline text-lg font-bold text-[#D1C4E9] mb-1 group-hover:text-white transition-colors">
                        {course.title}
                      </h3>
                      <p className="font-mono text-[11px] text-[#9685B5] mb-3 line-clamp-1">
                        {course.subtitle}
                      </p>
                      <p className="font-sans text-xs text-[#d0c5af]/80 mb-4 line-clamp-2">
                        {course.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-white/5">
                        {course.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 text-[#9685B5]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-xs text-[#9685B5]">
                        <span className="flex items-center gap-1 text-[11px]">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {course.duration}
                        </span>
                        <span className="text-[#D1C4E9] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          {t.home.viewSyllabus}{' '}
                          <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials (Depoimentos) Carousel Section */}
      <TestimonialCarousel setCurrentView={setCurrentView} />

      {/* Recent Blog Posts Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="font-mono text-xs text-[#9685B5] uppercase tracking-widest block mb-1">
                {t.home.recentBlogBadge}
              </span>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#D1C4E9]">
                {t.home.recentBlogTitle}
              </h2>
            </div>
            <button
              onClick={() => setCurrentView('blog')}
              className="text-xs font-mono text-[#D1C4E9] hover:underline flex items-center gap-1 cursor-pointer"
            >
              {t.home.viewAllArticles}
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((rawPost) => {
              const post = getLocalizedBlogPost(rawPost, language);
              return (
                <div
                  key={post.id}
                  onClick={() => {
                    setCurrentView('blog');
                    onSelectPost(post.id);
                  }}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#D1C4E9]/40 transition-all cursor-pointer flex flex-col group"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#9685B5] mb-3">
                    <span className="bg-white/5 px-2.5 py-0.5 rounded text-[#D1C4E9]">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-[#D1C4E9] mb-3 group-hover:text-white transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-sans text-xs text-[#d0c5af]/80 mb-6 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs font-mono text-[#D1C4E9] font-semibold pt-4 border-t border-white/5">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {t.home.readArticle} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

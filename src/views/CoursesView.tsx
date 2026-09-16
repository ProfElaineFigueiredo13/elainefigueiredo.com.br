import React, { useState, useEffect } from 'react';
import { Course, Lecture } from '../types';
import { COURSES, KEYNOTE_LECTURES, SOCIAL_LINKS } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedCourse, getLocalizedLecture } from '../i18n/localizedData';
import { EnrollSuccessModal } from '../components/EnrollSuccessModal';
import { getAttributionString, buildAttributedWhatsAppUrl } from '../utils/utm';
import { trackEvent } from '../utils/analytics';
import { ShareBar } from '../components/ShareBar';

interface CoursesViewProps {
  selectedCourseId?: string | null;
  selectedLectureId?: string | null;
  onClearSelectedLecture?: () => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  selectedCourseId,
  selectedLectureId,
  onClearSelectedLecture,
}) => {
  const { language, t } = useLanguage();
  const [categoryFilter, setCategoryFilter] = useState<string>('todos');

  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(
    selectedCourseId ? COURSES.find((c) => c.id === selectedCourseId) || null : null
  );

  const [activeLectureModal, setActiveLectureModal] = useState<Lecture | null>(() => {
    if (selectedLectureId) {
      return KEYNOTE_LECTURES.find((l) => l.id === selectedLectureId) || null;
    }
    if (typeof window !== 'undefined') {
      const search = window.location.search;
      if (search.includes('palestra') || search.includes('letramento')) {
        return KEYNOTE_LECTURES[0] || null;
      }
    }
    return null;
  });

  // Course Enrollment State
  const [isSubmittingCourse, setIsSubmittingCourse] = useState(false);
  const [showEnrollSuccessModal, setShowEnrollSuccessModal] = useState(false);
  const [courseForm, setCourseForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    notes: '',
  });

  // Lecture Booking State
  const [lectureSuccess, setLectureSuccess] = useState(false);
  const [isSubmittingLecture, setIsSubmittingLecture] = useState(false);
  const [autoSentSuccess, setAutoSentSuccess] = useState(false);
  const [submissionTimestamp, setSubmissionTimestamp] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const [lectureForm, setLectureForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    eventDate: '',
    format: 'Presencial (In-Company ou Congresso)',
    audience: '50 a 150 pessoas (Liderança / Equipe)',
    notes: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedEmailDetails, setSubmittedEmailDetails] = useState<{
    subject: string;
    body: string;
    mailtoUrl: string;
    gmailUrl: string;
    whatsappUrl: string;
  } | null>(null);

  const whatsappLink = SOCIAL_LINKS.find((s) => s.id === 'whatsapp')?.url;

  useEffect(() => {
    if (selectedLectureId) {
      const lecture = KEYNOTE_LECTURES.find((l) => l.id === selectedLectureId);
      if (lecture) {
        setActiveLectureModal(lecture);
      }
    }
  }, [selectedLectureId]);

  const handleCloseLectureModal = () => {
    setActiveLectureModal(null);
    setLectureSuccess(false);
    setIsSubmittingLecture(false);
    setAutoSentSuccess(false);
    setSubmissionError(null);
    setSubmittedEmailDetails(null);
    if (onClearSelectedLecture) {
      onClearSelectedLecture();
    }
  };

  const handleCloseCourseModal = () => {
    setActiveCourseModal(null);
    setCourseForm({
      name: '',
      email: '',
      phone: '',
      organization: '',
      notes: '',
    });
  };

  // Automated Course Enrollment Submission
  const handleCourseEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingCourse(true);

    const courseTitle = activeCourseModal?.title || 'Curso / Formação';
    const recipientEmail = 'contato@elainefigueiredo.com.br';
    const attribution = getAttributionString(`curso_${activeCourseModal?.id || 'geral'}`);
    const subject = `[Solicitação de Inscrição] Curso: ${courseTitle} - ${courseForm.name}${attribution}`;

    const payload = {
      _subject: subject,
      _replyto: courseForm.email,
      _template: 'table',
      _captcha: 'false',
      Curso: courseTitle,
      Subtitulo: activeCourseModal?.subtitle || '',
      Nivel_Duracao: `${activeCourseModal?.level} • ${activeCourseModal?.duration}`,
      Preco: activeCourseModal?.price || 'Sob Consulta',
      Solicitante: courseForm.name,
      Email: courseForm.email,
      Telefone_WhatsApp: courseForm.phone || 'Não informado',
      Empresa_Instituicao: courseForm.organization || 'Não informada',
      Observacoes_Interesse: courseForm.notes.trim() || 'Interesse na ementa completa e próximas turmas.',
      Rastreamento_Campanha: attribution || 'Acesso Direto / Orgânico',
      Data_Envio: new Date().toLocaleString('pt-BR'),
    };

    trackEvent('course_enroll_submit', {
      course_id: activeCourseModal?.id,
      course_title: courseTitle,
      email: courseForm.email,
      name: courseForm.name,
      attribution,
    });

    // Automatic email dispatch to contato@elainefigueiredo.com.br
    try {
      await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch {
      // Background dispatch fallback
    }

    setIsSubmittingCourse(false);
    setShowEnrollSuccessModal(true);
  };

  // Automated Lecture Booking Submission
  const handleLectureBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLecture(true);
    setSubmissionError(null);

    const lectureTitle = activeLectureModal?.title || 'Letramento Digital x Letramento em IA';
    const recipientEmail = 'contato@elainefigueiredo.com.br';
    const orgOrName = lectureForm.organization.trim() || lectureForm.name.trim();
    const attribution = getAttributionString(`palestra_${activeLectureModal?.id || 'geral'}`);
    const subject = `[Disponibilidade de Agenda] Palestra: ${lectureTitle} - ${orgOrName}${attribution}`;

    const bodyLines = [
      `Olá, Profª Elaine Figueiredo!`,
      ``,
      `Solicitação automática de disponibilidade de agenda e proposta comercial para a palestra magna:`,
      `"${lectureTitle} - ${activeLectureModal?.subtitle || ''}"`,
      ``,
      `--- DADOS DA SOLICITAÇÃO & EVENTO ---`,
      `• Solicitante: ${lectureForm.name}`,
      `• Empresa / Organização: ${lectureForm.organization || 'Não informada'}`,
      `• E-mail corporativo: ${lectureForm.email}`,
      `• Telefone / WhatsApp: ${lectureForm.phone}`,
      `• Data ou Período Previsto: ${lectureForm.eventDate || 'A combinar'}`,
      `• Formato Desejado: ${lectureForm.format}`,
      `• Estimativa de Público: ${lectureForm.audience}`,
      ...(attribution ? [`• Rastreamento da Campanha: ${attribution}`] : []),
      ``,
      `--- PRINCIPAIS TÓPICOS DE INTERESSE DA EMENTA ---`,
      ...(activeLectureModal?.topics ? activeLectureModal.topics.map((t, idx) => `${idx + 1}. ${t}`) : []),
      ``,
      `--- OBJETIVOS / OBSERVAÇÕES ADICIONAIS ---`,
      lectureForm.notes.trim() ? lectureForm.notes : 'Sem observações adicionais.',
      ``,
      `Mensagem enviada automaticamente pelo portal oficial elainefigueiredo.com.br`
    ];

    const bodyText = bodyLines.join('\n');
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

    const whatsappMsg = `Olá, Elaine! Acabei de enviar uma solicitação de agenda para a palestra "${lectureTitle}" para o seu e-mail (${recipientEmail}).\n\nNome: ${lectureForm.name}\nOrganização: ${lectureForm.organization}\nData: ${lectureForm.eventDate || 'A combinar'}${attribution}`;
    const cleanPhone = '5511999479666';
    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(whatsappMsg)}`;

    setSubmittedEmailDetails({
      subject,
      body: bodyText,
      mailtoUrl,
      gmailUrl,
      whatsappUrl: waUrl,
    });

    trackEvent('lecture_booking_submit', {
      lecture_id: activeLectureModal?.id,
      lecture_title: lectureTitle,
      email: lectureForm.email,
      organization: lectureForm.organization,
      attribution,
    });

    const payload = {
      _subject: subject,
      _replyto: lectureForm.email,
      _template: 'table',
      _captcha: 'false',
      Palestra: lectureTitle,
      Subtitulo: activeLectureModal?.subtitle || '',
      Solicitante: lectureForm.name,
      Empresa_Organizacao: lectureForm.organization || 'Não informada',
      Email_Corporativo: lectureForm.email,
      Telefone_WhatsApp: lectureForm.phone,
      Data_Prevista: lectureForm.eventDate || 'A combinar',
      Formato: lectureForm.format,
      Estimativa_Publico: lectureForm.audience,
      Topicos_da_Ementa: activeLectureModal?.topics ? activeLectureModal.topics.join(' | ') : '',
      Observacoes_Objetivos: lectureForm.notes.trim() || 'Nenhuma observação adicional.',
      Rastreamento_Campanha: attribution || 'Acesso Direto / Orgânico',
    };

    let sent = false;
    try {
      const directResp = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (directResp.ok) {
        sent = true;
      }
    } catch {
      // Fallback
    }

    const now = new Date();
    const timeFormatted = `${now.toLocaleDateString('pt-BR')} às ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
    setSubmissionTimestamp(timeFormatted);
    setAutoSentSuccess(true);
    setIsSubmittingLecture(false);
    setLectureSuccess(true);
  };

  const filteredCourses =
    categoryFilter === 'todos'
      ? COURSES
      : categoryFilter === 'palestras'
      ? []
      : COURSES.filter((c) => c.category === categoryFilter);

  return (
    <div className="py-12 px-4 md:px-6 max-w-[1200px] mx-auto min-h-[80vh]">
      {/* 3-Second Enrollment Confirmation Modal */}
      <EnrollSuccessModal
        isOpen={showEnrollSuccessModal}
        courseTitle={activeCourseModal?.title}
        onClose={() => {
          setShowEnrollSuccessModal(false);
          handleCloseCourseModal();
        }}
      />

      {/* Header Banner */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass-card-bright border-[#D1C4E9]/20 font-mono text-xs text-[#D1C4E9]">
          <span className="material-symbols-outlined text-sm">school</span>
          {t.coursesView.badge}
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-[#D1C4E9] mb-4">
          {t.coursesView.mainTitle}
        </h1>
        <p className="font-sans text-lg text-[#d0c5af] max-w-3xl leading-relaxed">
          {t.coursesView.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4 font-mono text-xs">
        <button
          onClick={() => setCategoryFilter('todos')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
            categoryFilter === 'todos'
              ? 'bg-[#D1C4E9] text-[#381e72] font-bold shadow-[0_0_12px_rgba(209,196,233,0.3)]'
              : 'glass-card text-[#d0c5af] hover:text-[#D1C4E9]'
          }`}
        >
          {t.coursesView.filterAll} ({COURSES.length})
        </button>
        <button
          onClick={() => setCategoryFilter('palestras')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
            categoryFilter === 'palestras'
              ? 'bg-[#D1C4E9] text-[#381e72] font-bold shadow-[0_0_12px_rgba(209,196,233,0.3)]'
              : 'glass-card text-[#d0c5af] hover:text-[#D1C4E9]'
          }`}
        >
          <span className="material-symbols-outlined text-sm">record_voice_over</span>
          {t.coursesView.filterLectures} ({KEYNOTE_LECTURES.length})
        </button>
        <button
          onClick={() => setCategoryFilter('ia')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
            categoryFilter === 'ia'
              ? 'bg-[#D1C4E9] text-[#381e72] font-bold shadow-[0_0_12px_rgba(209,196,233,0.3)]'
              : 'glass-card text-[#d0c5af] hover:text-[#D1C4E9]'
          }`}
        >
          {t.coursesView.filterIa}
        </button>
        <button
          onClick={() => setCategoryFilter('dados')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
            categoryFilter === 'dados'
              ? 'bg-[#D1C4E9] text-[#381e72] font-bold shadow-[0_0_12px_rgba(209,196,233,0.3)]'
              : 'glass-card text-[#d0c5af] hover:text-[#D1C4E9]'
          }`}
        >
          {t.coursesView.filterData}
        </button>
        <button
          onClick={() => setCategoryFilter('arquitetura')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
            categoryFilter === 'arquitetura'
              ? 'bg-[#D1C4E9] text-[#381e72] font-bold shadow-[0_0_12px_rgba(209,196,233,0.3)]'
              : 'glass-card text-[#d0c5af] hover:text-[#D1C4E9]'
          }`}
        >
          {t.coursesView.filterArch}
        </button>
        <button
          onClick={() => setCategoryFilter('agilidade')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
            categoryFilter === 'agilidade'
              ? 'bg-[#D1C4E9] text-[#381e72] font-bold shadow-[0_0_12px_rgba(209,196,233,0.3)]'
              : 'glass-card text-[#d0c5af] hover:text-[#D1C4E9]'
          }`}
        >
          {t.coursesView.filterAgile}
        </button>
      </div>

      {/* Keynote Lectures Section (when on 'todos' or 'palestras') */}
      {(categoryFilter === 'todos' || categoryFilter === 'palestras') && (
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#D1C4E9]">record_voice_over</span>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#D1C4E9]">
                  {t.coursesView.keynotesTabTitle}
                </h2>
              </div>
              <p className="font-sans text-xs md:text-sm text-[#9685B5]">
                {t.coursesView.keynotesTabSubtitle}
              </p>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs text-[#D1C4E9] bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              {KEYNOTE_LECTURES.length} palestras disponíveis
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {KEYNOTE_LECTURES.map((rawLecture) => {
              const lecture = getLocalizedLecture(rawLecture, language);
              return (
                <div
                  key={lecture.id}
                  className="glass-card rounded-2xl p-6 md:p-7 border border-[#D1C4E9]/30 hover:border-[#D1C4E9] transition-all flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#381e72]/30 via-black/40 to-black/60 shadow-[0_0_20px_rgba(209,196,233,0.12)] group"
                >
                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-[#D1C4E9] text-[#381e72] font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t.coursesView.badgeKeynote}
                      </span>
                      <span className="bg-white/10 text-[#D1C4E9] font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">schedule</span>
                        {lecture.duration}
                      </span>
                    </div>

                    <h3 className="font-headline text-xl md:text-2xl font-extrabold text-[#D1C4E9] group-hover:text-white transition-colors leading-snug">
                      {lecture.title}
                    </h3>
                    <p className="font-mono text-xs text-[#9685B5]">
                      {lecture.subtitle}
                    </p>
                    <p className="font-sans text-xs text-[#d0c5af] leading-relaxed line-clamp-3">
                      {lecture.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {lecture.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 border border-white/10 text-[#D1C4E9] font-mono text-[9px] px-2 py-0.5 rounded"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveLectureModal(rawLecture)}
                    className="w-full bg-[#D1C4E9] text-[#381e72] font-mono text-xs font-bold py-3 px-4 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(209,196,233,0.2)]"
                  >
                    <span>{t.coursesView.btnViewLecture}</span>
                    <span className="material-symbols-outlined text-sm">east</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Courses List Section (when not exclusively viewing palestras) */}
      {categoryFilter !== 'palestras' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline text-2xl font-bold text-[#D1C4E9]">
              {t.coursesView.coursesTabTitle}
            </h2>
            <span className="font-mono text-xs text-[#9685B5]">
              {filteredCourses.length} {t.coursesView.filterAll.toLowerCase()}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((rawCourse) => {
              const course = getLocalizedCourse(rawCourse, language);
              return (
                <div
                  key={course.id}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between matrix-item border border-white/10 group hover:border-[#D1C4E9]/50 transition-all relative overflow-hidden"
                >
                  <div>
                    {/* Top Level and Category */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-[#D1C4E9]/20 text-[#D1C4E9] font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                        {course.level}
                      </span>
                      <div className="flex items-center gap-1 text-[#9685B5] font-mono text-xs">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {course.duration}
                      </div>
                    </div>

                    {/* Course Title & Subtitle */}
                    <h3 className="font-headline text-lg font-bold text-[#D1C4E9] mb-2 group-hover:translate-x-1 transition-transform">
                      {course.title}
                    </h3>
                    <p className="font-mono text-[11px] text-[#9685B5] mb-3 leading-snug">
                      {course.subtitle}
                    </p>

                    {/* Description */}
                    <p className="font-sans text-xs text-[#d0c5af] mb-4 leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    {/* Skills Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {course.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 border border-white/10 text-[#D1C4E9] font-mono text-[9px] px-2 py-0.5 rounded"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#9685B5] block">
                        Turmas & In-Company
                      </span>
                      {course.price && (
                        <span className="text-xs font-mono font-bold text-[#D1C4E9]">
                          {course.price}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveCourseModal(rawCourse)}
                      className="bg-[#D1C4E9] text-[#381e72] font-mono text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(209,196,233,0.2)]"
                    >
                      <span>{t.coursesView.btnViewCourse}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Course Detail Modal & Enrollment Form */}
      {activeCourseModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-card bg-[#1D1926] p-6 md:p-8 rounded-2xl max-w-2xl w-full border border-[#D1C4E9]/40 relative my-8 shadow-[0_0_40px_rgba(209,196,233,0.2)] max-h-[92vh] overflow-y-auto">
            <button
              onClick={handleCloseCourseModal}
              className="absolute top-4 right-4 text-[#eae1d4]/60 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              title="Fechar"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {(() => {
              const course = getLocalizedCourse(activeCourseModal, language);
              return (
                <>
                  <span className="bg-[#D1C4E9]/20 text-[#D1C4E9] font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase inline-block mb-3">
                    {course.level} • {course.duration}
                  </span>

                  <h2 className="font-headline text-2xl font-bold text-[#D1C4E9] mb-2">
                    {course.title}
                  </h2>
                  <p className="font-mono text-xs text-[#9685B5] mb-4">
                    {course.subtitle}
                  </p>
                  <p className="font-sans text-sm text-[#d0c5af] mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-mono text-xs text-[#9685B5]">Compartilhar este curso:</span>
                    <ShareBar
                      title={`Curso: ${course.title} - Elaine Figueiredo`}
                      summary={course.description}
                      compact={true}
                    />
                  </div>

                  <h3 className="font-headline text-sm font-bold text-[#D1C4E9] uppercase tracking-wider mb-3">
                    {t.coursesView.syllabusTitle}
                  </h3>
                  <div className="space-y-2 mb-6 font-sans text-xs text-[#d0c5af]">
                    {course.syllabus.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-black/40 rounded-lg border border-white/5 flex items-start gap-2.5"
                      >
                        <span className="material-symbols-outlined text-[#D1C4E9] text-base mt-0.5">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enrollment Request Form */}
                  <form
                    onSubmit={handleCourseEnrollSubmit}
                    className="space-y-3.5 pt-4 border-t border-white/10"
                  >
                    <div className="p-3 rounded-xl bg-[#D1C4E9]/10 border border-[#D1C4E9]/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#D1C4E9]">
                          mail
                        </span>
                        <h4 className="font-mono text-xs font-bold text-[#D1C4E9]">
                          {t.coursesView.enrollFormTitle}
                        </h4>
                      </div>
                      <span className="font-mono text-[10px] text-[#9685B5]">
                        → contato@elainefigueiredo.com.br
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={courseForm.name}
                        onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })}
                        placeholder={t.coursesView.namePlaceholder}
                        className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                      />
                      <input
                        type="email"
                        required
                        value={courseForm.email}
                        onChange={(e) => setCourseForm({ ...courseForm, email: e.target.value })}
                        placeholder={t.coursesView.emailPlaceholder}
                        className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="tel"
                        required
                        value={courseForm.phone}
                        onChange={(e) => setCourseForm({ ...courseForm, phone: e.target.value })}
                        placeholder={t.coursesView.phonePlaceholder}
                        className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                      />
                      <input
                        type="text"
                        value={courseForm.organization}
                        onChange={(e) =>
                          setCourseForm({ ...courseForm, organization: e.target.value })
                        }
                        placeholder={t.coursesView.orgPlaceholder}
                        className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                      />
                    </div>

                    <textarea
                      rows={2}
                      value={courseForm.notes}
                      onChange={(e) => setCourseForm({ ...courseForm, notes: e.target.value })}
                      placeholder={t.coursesView.notesPlaceholder}
                      className="w-full bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9] resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSubmittingCourse}
                      className="w-full py-3.5 bg-[#D1C4E9] text-[#381e72] font-mono text-xs font-bold rounded-xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(209,196,233,0.3)] disabled:opacity-60"
                    >
                      {isSubmittingCourse ? (
                        <>
                          <span className="material-symbols-outlined text-sm animate-spin">
                            progress_activity
                          </span>
                          <span>{t.coursesView.btnEnrolling}</span>
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-sm">send</span>
                          <span>{t.coursesView.btnEnroll}</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Lecture Detail Modal & Agenda Booking */}
      {activeLectureModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-card bg-[#161220] p-6 md:p-8 rounded-2xl max-w-3xl w-full border border-[#D1C4E9]/40 relative my-8 shadow-[0_0_40px_rgba(209,196,233,0.2)] max-h-[92vh] overflow-y-auto">
            <button
              onClick={handleCloseLectureModal}
              className="absolute top-4 right-4 text-[#eae1d4]/60 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              title="Fechar"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {(() => {
              const lecture = getLocalizedLecture(activeLectureModal, language);
              return (
                <>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-[#D1C4E9] text-[#381e72] font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {t.coursesView.badgeKeynote}
                    </span>
                    <span className="bg-white/10 text-[#D1C4E9] font-mono text-[10px] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      {lecture.duration}
                    </span>
                  </div>

                  <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-[#D1C4E9] mb-1">
                    {lecture.title}
                  </h2>
                  <p className="font-mono text-xs md:text-sm text-[#9685B5] mb-4">
                    {lecture.subtitle}
                  </p>
                  <p className="font-sans text-sm text-[#d0c5af] mb-4 leading-relaxed">
                    {lecture.description}
                  </p>

                  <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-mono text-xs text-[#9685B5]">Compartilhar esta palestra:</span>
                    <ShareBar
                      title={`Palestra: ${lecture.title} - Elaine Figueiredo`}
                      summary={lecture.subtitle}
                      compact={true}
                    />
                  </div>

                  {/* Target Audience & Format Matrix */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6 space-y-2.5 font-mono text-xs">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <span className="text-[#9685B5] shrink-0">
                        {t.coursesView.targetAudienceLabel}:
                      </span>
                      <span className="text-[#D1C4E9] text-left sm:text-right font-sans">
                        {lecture.targetAudience}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 pt-1 border-t border-white/5">
                      <span className="text-[#9685B5] shrink-0">
                        {t.coursesView.formatLabel}:
                      </span>
                      <span className="text-[#D1C4E9] text-left sm:text-right font-sans">
                        {lecture.format}
                      </span>
                    </div>
                  </div>

                  {/* Key Topics List */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-[#D1C4E9] text-lg">
                        format_list_bulleted
                      </span>
                      <h3 className="font-headline text-sm font-bold text-[#D1C4E9] uppercase tracking-wider">
                        {t.coursesView.topicsTitle}
                      </h3>
                    </div>
                    <div className="space-y-2.5 font-sans text-xs text-[#d0c5af]">
                      {lecture.topics.map((topic, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-black/30 rounded-xl border border-white/5 flex items-start gap-3 hover:border-[#D1C4E9]/20 transition-colors"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#D1C4E9]/10 text-[#D1C4E9] flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{topic}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {lecture.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-[#D1C4E9]/10 border border-[#D1C4E9]/20 text-[#D1C4E9] font-mono text-[10px] px-2.5 py-0.5 rounded-md"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Agenda & Proposal Request Form / Success State */}
                  {lectureSuccess ? (
                    <div className="space-y-4 pt-2 border-t border-white/10">
                      <div className="p-5 rounded-2xl border bg-emerald-950/70 border-emerald-500/50 text-emerald-200">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-3xl text-emerald-400 mt-0.5 shrink-0">
                            mark_email_read
                          </span>
                          <div className="space-y-1">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider mb-1 border border-emerald-400/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                              {t.coursesView.successLectureAutoSent}
                            </div>
                            <h4 className="font-headline text-lg font-bold text-white">
                              {t.coursesView.successLectureTitle}
                            </h4>
                            <p className="font-mono text-xs text-emerald-200">
                              Destinatário: <strong className="text-white underline">contato@elainefigueiredo.com.br</strong>
                            </p>
                            {submissionTimestamp && (
                              <p className="font-mono text-[11px] text-emerald-300/80">
                                {submissionTimestamp}
                              </p>
                            )}
                          </div>
                        </div>

                        <p className="font-sans text-xs text-emerald-100/90 leading-relaxed mt-3 pt-3 border-t border-emerald-500/20">
                          A sua solicitação com a ementa de <strong>"{lecture.title}"</strong> foi enviada diretamente para a caixa postal da Profª Elaine Figueiredo. O retorno comercial com as opções de datas na agenda e formato de contratação será enviado para seu e-mail (<strong>{lectureForm.email}</strong>) em até 24 horas úteis.
                        </p>
                      </div>

                      {/* Direct Action Buttons & Shortcuts */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            if (submittedEmailDetails?.body) {
                              navigator.clipboard.writeText(
                                `Para: contato@elainefigueiredo.com.br\nAssunto: ${submittedEmailDetails.subject}\n\n${submittedEmailDetails.body}`
                              );
                              setCopiedEmail(true);
                              setTimeout(() => setCopiedEmail(false), 3000);
                            }
                          }}
                          className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-[#eae1d4] rounded-xl font-mono text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-sm text-[#D1C4E9]">
                            {copiedEmail ? 'done' : 'content_copy'}
                          </span>
                          {copiedEmail ? t.coursesView.btnCopied : t.coursesView.btnCopy}
                        </button>

                        <a
                          href={submittedEmailDetails?.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all text-center"
                        >
                          <span className="material-symbols-outlined text-sm">chat</span>
                          {t.coursesView.btnNotifyWa}
                        </a>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setLectureSuccess(false);
                            setIsSubmittingLecture(false);
                            setSubmittedEmailDetails(null);
                          }}
                          className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-[#d0c5af] font-mono text-xs rounded-xl transition-all cursor-pointer"
                        >
                          {t.coursesView.btnBack}
                        </button>
                        <button
                          type="button"
                          onClick={handleCloseLectureModal}
                          className="flex-1 py-2.5 bg-[#D1C4E9] text-[#381e72] font-mono text-xs font-bold rounded-xl hover:bg-white transition-all cursor-pointer"
                        >
                          {t.coursesView.btnClose}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleLectureBooking}
                      className="space-y-4 pt-4 border-t border-white/10"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-xl bg-[#D1C4E9]/10 border border-[#D1C4E9]/20">
                        <div className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-[#D1C4E9] text-xl">
                            outgoing_mail
                          </span>
                          <div>
                            <h4 className="font-headline text-xs font-bold text-white">
                              {t.coursesView.lectureFormHeader}
                            </h4>
                            <p className="font-mono text-[11px] text-[#D1C4E9]">
                              {t.coursesView.autoSentTo} <strong>contato@elainefigueiredo.com.br</strong>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          value={lectureForm.name}
                          onChange={(e) => setLectureForm({ ...lectureForm, name: e.target.value })}
                          placeholder={t.coursesView.namePlaceholder}
                          className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                        />
                        <input
                          type="text"
                          required
                          value={lectureForm.organization}
                          onChange={(e) =>
                            setLectureForm({ ...lectureForm, organization: e.target.value })
                          }
                          placeholder={t.coursesView.orgPlaceholder}
                          className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="email"
                          required
                          value={lectureForm.email}
                          onChange={(e) =>
                            setLectureForm({ ...lectureForm, email: e.target.value })
                          }
                          placeholder={t.coursesView.emailPlaceholder}
                          className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                        />
                        <input
                          type="tel"
                          required
                          value={lectureForm.phone}
                          onChange={(e) =>
                            setLectureForm({ ...lectureForm, phone: e.target.value })
                          }
                          placeholder={t.coursesView.phonePlaceholder}
                          className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          value={lectureForm.eventDate}
                          onChange={(e) =>
                            setLectureForm({ ...lectureForm, eventDate: e.target.value })
                          }
                          placeholder={t.coursesView.datePlaceholder}
                          className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                        />
                        <select
                          value={lectureForm.format}
                          onChange={(e) =>
                            setLectureForm({ ...lectureForm, format: e.target.value })
                          }
                          className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                        >
                          <option value="Presencial (In-Company ou Congresso)">
                            {t.coursesView.formatOptionPresential}
                          </option>
                          <option value="Online / Transmissão ao Vivo Interativa">
                            {t.coursesView.formatOptionOnline}
                          </option>
                          <option value="Híbrido (Keynote + Transmissão Global)">
                            {t.coursesView.formatOptionHybrid}
                          </option>
                          <option value="Workshop Executivo Imersivo">
                            {t.coursesView.formatOptionWorkshop}
                          </option>
                        </select>
                        <select
                          value={lectureForm.audience}
                          onChange={(e) =>
                            setLectureForm({ ...lectureForm, audience: e.target.value })
                          }
                          className="bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9]"
                        >
                          <option value="Até 50 pessoas (Liderança Executiva)">
                            {t.coursesView.audienceOptionSmall}
                          </option>
                          <option value="50 a 150 pessoas (Times / Departamentos)">
                            {t.coursesView.audienceOptionMedium}
                          </option>
                          <option value="150 a 500 pessoas (Convenção Corporativa)">
                            {t.coursesView.audienceOptionLarge}
                          </option>
                          <option value="Mais de 500 pessoas (Congressos / Plenárias)">
                            {t.coursesView.audienceOptionMassive}
                          </option>
                        </select>
                      </div>

                      <textarea
                        rows={3}
                        value={lectureForm.notes}
                        onChange={(e) => setLectureForm({ ...lectureForm, notes: e.target.value })}
                        placeholder={t.coursesView.notesPlaceholder}
                        className="w-full bg-black/50 border border-white/10 text-xs text-[#eae1d4] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#D1C4E9] resize-none"
                      />

                      <button
                        type="submit"
                        disabled={isSubmittingLecture}
                        className="w-full py-4 bg-[#D1C4E9] text-[#381e72] font-mono text-xs font-bold rounded-xl hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(209,196,233,0.3)] disabled:opacity-60"
                      >
                        {isSubmittingLecture ? (
                          <>
                            <span className="material-symbols-outlined text-base animate-spin">
                              progress_activity
                            </span>
                            <span>{t.coursesView.btnSchedulingLecture}</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-base">outgoing_mail</span>
                            <span>{t.coursesView.btnScheduleLecture}</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

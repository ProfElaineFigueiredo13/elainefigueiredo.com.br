import { Language } from '../types';
import { ptTranslations } from './locales/pt';
import { enTranslations } from './locales/en';
import { esTranslations } from './locales/es';
import { frTranslations } from './locales/fr';
import { itTranslations } from './locales/it';

export interface TranslationDict {
  // Navigation & Header
  nav: {
    home: string;
    about: string;
    courses: string;
    resume: string;
    blog: string;
    portfolio: string;
    contact: string;
    curriculoPdf: string;
    brandSubtitle: string;
    menuTitle: string;
    closeMenu: string;
    lattes: string;
    youtube: string;
    email: string;
    whatsapp: string;
  };

  // Home View
  home: {
    badge: string;
    titleFirst: string;
    titleLast: string;
    headline: string;
    subtitle: string;
    ctaCourses: string;
    ctaPortfolio: string;
    matrixBadge: string;
    matrixTitle: string;
    matrixAboutDesc: string;
    matrixCoursesDesc: string;
    matrixResumeDesc: string;
    matrixBlogDesc: string;
    matrixPortfolioDesc: string;
    matrixContactDesc: string;
    missionText: string;
    missionLink: string;
    keynoteBadge: string;
    keynoteCta: string;
    keynoteSectionTitle: string;
    keynoteSectionSub: string;
    viewAllKeynotes: string;
    academyBadge: string;
    featuredCoursesTitle: string;
    featuredCoursesSub: string;
    viewAllCourses: string;
    viewSyllabus: string;
    manifestoBadge: string;
    manifestoQuote: string;
    statusActive: string;
    statusOptimized: string;
    recentBlogBadge: string;
    recentBlogTitle: string;
    viewAllArticles: string;
    readArticle: string;
  };

  // Courses & Lectures View
  coursesView: {
    badge: string;
    mainTitle: string;
    subtitle: string;
    keynotesTabTitle: string;
    keynotesTabSubtitle: string;
    coursesTabTitle: string;
    filterAll: string;
    filterIa: string;
    filterData: string;
    filterArch: string;
    filterAgile: string;
    filterLectures: string;
    badgeKeynote: string;
    badgeCourse: string;
    durationLabel: string;
    targetAudienceLabel: string;
    formatLabel: string;
    btnViewLecture: string;
    btnViewCourse: string;
    btnEnroll: string;
    btnEnrolling: string;
    btnScheduleLecture: string;
    btnSchedulingLecture: string;
    syllabusTitle: string;
    topicsTitle: string;
    enrollFormTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    orgPlaceholder: string;
    notesPlaceholder: string;
    datePlaceholder: string;
    formatOptionPresential: string;
    formatOptionOnline: string;
    formatOptionHybrid: string;
    formatOptionWorkshop: string;
    audienceOptionSmall: string;
    audienceOptionMedium: string;
    audienceOptionLarge: string;
    audienceOptionMassive: string;
    successModalTitle: string;
    successModalSub: string;
    successLectureTitle: string;
    successLectureAutoSent: string;
    btnCopy: string;
    btnCopied: string;
    btnNotifyWa: string;
    btnOpenGmail: string;
    btnLocalMail: string;
    btnClose: string;
    btnBack: string;
    lectureFormHeader: string;
    autoSentTo: string;
    hours: string;
    students: string;
  };

  // Portfolio View
  portfolioView: {
    badge: string;
    title: string;
    subtitle: string;
    resultsTitle: string;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
  };

  // Blog View
  blogView: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    categoryAll: string;
    categoryAi: string;
    categorySoftEng: string;
    categoryReqAi: string;
    readArticle: string;
    closeReading: string;
    authorRole: string;
  };

  // Contact View
  contactView: {
    badge: string;
    title: string;
    subtitle: string;
    directTitle: string;
    directSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    btnSubmit: string;
    btnSubmitting: string;
    successMessage: string;
    officialEmail: string;
    formCardTitle: string;
    successTitle: string;
    successSubtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    subjectLetramento: string;
    subjectConsultoria: string;
    subjectTreinamento: string;
    subjectMentoria: string;
    subjectPalestras: string;
    subjectOutro: string;
    autoSentLabel: string;
    whatsappCardTitle: string;
    whatsappCardNumber: string;
    whatsappCardText: string;
    whatsappCardBtn: string;
    shareTitle: string;
  };

  // Footer
  footer: {
    description: string;
    quickLinks: string;
    channels: string;
    rights: string;
    madeWith: string;
    selectLanguage: string;
    csTitle: string;
    csSub: string;
    govTitle: string;
    govSub: string;
    cloudTitle: string;
    cloudSub: string;
    consultingTitle: string;
    consultingSub: string;
    ctaFutureFirst: string;
    ctaFutureSecond: string;
    aiDiagnosisFirst: string;
    aiDiagnosisSecond: string;
    viewExpertiseFirst: string;
    viewExpertiseSecond: string;
    brandSubtitle: string;
    shareTooltip: string;
    flagInstruction: string;
    rightsReserved: string;
    linkAbout: string;
    linkResume: string;
    linkResumePdf: string;
    linkCourses: string;
    linkPortfolio: string;
    linkContact: string;
    diagModalBadge: string;
    diagModalTitle: string;
    diagModalDesc: string;
    diagQ1: string;
    diagQ2: string;
    diagBtnGenerate: string;
    diagRecommendation: string;
    diagSelectedFocus: string;
    diagOperationalContext: string;
    diagSuggestedPath: string;
    diagSendWhatsApp: string;
    diagSendForm: string;
    diagReset: string;
    diagDomainKeynote: string;
    diagDomainTraining: string;
    diagDomainArchitecture: string;
  };

  // Social Share Modal
  shareModal: {
    badge: string;
    title: string;
    description: string;
    nativeBtn: string;
    directLabel: string;
    copyBtn: string;
    copiedBtn: string;
    closeBtn: string;
  };

  // Floating WhatsApp
  floatingWa: {
    tooltipText: string;
    ariaLabel: string;
    title: string;
    defaultMsg: string;
  };

  // Success Modal
  successModal: {
    title: string;
    dispatchedTo: string;
    closingIn: string;
  };
}

export const LANGUAGES: { code: Language; label: string; flag: string; country: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷', country: 'Brasil' },
  { code: 'en', label: 'English', flag: '🇺🇸', country: 'United States' },
  { code: 'es', label: 'Español', flag: '🇪🇸', country: 'España' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', country: 'France' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹', country: 'Italia' },
];

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  pt: ptTranslations,
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  it: itTranslations,
};

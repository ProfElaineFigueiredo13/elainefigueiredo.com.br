/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ViewMode } from './types';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { useLanguage } from './i18n/LanguageContext';
import { updateDocumentSeo } from './utils/seo';
import { captureUtmParameters } from './utils/utm';
import { trackEvent } from './utils/analytics';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { CoursesView } from './views/CoursesView';
import { ResumeView } from './views/ResumeView';
import { BlogView } from './views/BlogView';
import { PortfolioView } from './views/PortfolioView';
import { ContactView } from './views/ContactView';
import { CurriculoPdfView } from './views/CurriculoPdfView';

export default function App() {
  const { language } = useLanguage();
  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const search = window.location.search;
      const hash = window.location.hash;
      if (
        search.includes('view=curriculo') ||
        search.includes('curriculo') ||
        hash.includes('curriculo')
      ) {
        return 'curriculo-pdf';
      }
    }
    return 'home';
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedLectureId, setSelectedLectureId] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    const handleUrlChange = () => {
      const search = window.location.search;
      const hash = window.location.hash;
      if (
        search.includes('view=curriculo') ||
        search.includes('curriculo') ||
        hash.includes('curriculo')
      ) {
        setCurrentView('curriculo-pdf');
      } else if (search.includes('palestra') || search.includes('letramento')) {
        setSelectedLectureId('talk-letramento-digital-ia');
        setCurrentView('courses');
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Update dynamic SEO tags (title, og:meta, twitter:meta, canonical) & track page views and UTMs
  useEffect(() => {
    captureUtmParameters();
    updateDocumentSeo(currentView, language);
    trackEvent('page_view', {
      view: currentView,
      language,
      url: typeof window !== 'undefined' ? window.location.href : '',
    });
  }, [currentView, language]);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setSelectedLectureId(null);
    setCurrentView('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLecture = (lectureId: string) => {
    setSelectedLectureId(lectureId);
    setSelectedCourseId(null);
    setCurrentView('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (postId: string) => {
    setSelectedPostId(postId);
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavView = (view: ViewMode) => {
    if (view !== 'curriculo-pdf' && window.location.search.includes('curriculo')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'curriculo-pdf') {
    return (
      <CurriculoPdfView
        onBack={() => {
          if (window.location.search.includes('curriculo')) {
            window.history.replaceState(null, '', window.location.pathname);
          }
          handleNavView('resume');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0910] text-[#eae1d4] flex flex-col font-sans selection:bg-[#D1C4E9]/30">
      
      {/* Sticky Top Bar */}
      <Header
        currentView={currentView}
        setCurrentView={handleNavView}
        toggleDrawer={toggleDrawer}
      />

      {/* Side Bento Matrix Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentView={currentView}
        setCurrentView={handleNavView}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            setCurrentView={handleNavView}
            onSelectCourse={handleSelectCourse}
            onSelectPost={handleSelectPost}
            onSelectLecture={handleSelectLecture}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            setCurrentView={handleNavView}
            onSelectLecture={handleSelectLecture}
          />
        )}

        {currentView === 'courses' && (
          <CoursesView
            selectedCourseId={selectedCourseId}
            selectedLectureId={selectedLectureId}
            onClearSelectedLecture={() => setSelectedLectureId(null)}
          />
        )}

        {currentView === 'resume' && <ResumeView />}

        {currentView === 'blog' && (
          <BlogView selectedPostId={selectedPostId} />
        )}

        {currentView === 'portfolio' && (
          <PortfolioView setCurrentView={handleNavView} />
        )}

        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Global Footer */}
      <Footer setCurrentView={handleNavView} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}

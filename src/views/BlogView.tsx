import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedBlogPost } from '../i18n/localizedData';

interface BlogViewProps {
  selectedPostId?: string | null;
}

// Lightweight structured content formatter for clean article reading
const ArticleContentRenderer: React.FC<{ content: string }> = ({ content }) => {
  const parseInline = (text: string) => {
    // Replace **bold** with <strong> and *italic* with <em>
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-[#D1C4E9] font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={i} className="text-[#eae1d4] italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];

  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;

  const flushList = () => {
    if (currentList) {
      if (currentList.type === 'ul') {
        elements.push(
          <ul key={`list-${elements.length}`} className="space-y-2 my-3 pl-4 list-disc marker:text-[#D1C4E9]">
            {currentList.items.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                {parseInline(item)}
              </li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={`list-${elements.length}`} className="space-y-2 my-3 pl-5 list-decimal marker:text-[#D1C4E9] marker:font-bold marker:font-mono">
            {currentList.items.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                {parseInline(item)}
              </li>
            ))}
          </ol>
        );
      }
      currentList = null;
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    if (line === '---') {
      flushList();
      elements.push(<hr key={`hr-${index}`} className="my-6 border-white/10" />);
      return;
    }

    if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${index}`} className="font-headline text-lg sm:text-xl font-bold text-[#D1C4E9] mt-6 mb-2">
          {parseInline(line.replace('### ', ''))}
        </h3>
      );
      return;
    }

    if (line.startsWith('#### ')) {
      flushList();
      elements.push(
        <h4 key={`h4-${index}`} className="font-headline text-base font-semibold text-[#D1C4E9] mt-4 mb-2">
          {parseInline(line.replace('#### ', ''))}
        </h4>
      );
      return;
    }

    if (line.startsWith('- ')) {
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(line.replace(/^- /, ''));
      return;
    }

    const orderedMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (orderedMatch) {
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(orderedMatch[2]);
      return;
    }

    flushList();
    elements.push(
      <p key={`p-${index}`} className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed my-2">
        {parseInline(line)}
      </p>
    );
  });

  flushList();

  return <div className="space-y-1">{elements}</div>;
};

export const BlogView: React.FC<BlogViewProps> = ({ selectedPostId }) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeArticleId, setActiveArticleId] = useState<string | null>(selectedPostId || null);

  const localizedPosts = BLOG_POSTS.map(rawPost => getLocalizedBlogPost(rawPost, language));

  const activeArticle = activeArticleId 
    ? localizedPosts.find(p => p.id === activeArticleId) || null 
    : null;

  const filteredPosts = localizedPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory =
      activeCategory === 'all' || 
      (activeCategory === 'ia' && (post.category.toLowerCase().includes('intelig') || post.category.toLowerCase().includes('artificial') || post.category.toLowerCase().includes('intelligence'))) ||
      (activeCategory === 'eng' && (post.category.toLowerCase().includes('engenharia') || post.category.toLowerCase().includes('software') || post.category.toLowerCase().includes('engineering') || post.category.toLowerCase().includes('génie') || post.category.toLowerCase().includes('ingegneria')));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 px-4 md:px-6 max-w-[1200px] mx-auto min-h-[80vh]">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass-card-bright border-[#D1C4E9]/20 font-mono text-xs text-[#D1C4E9]">
          <span className="material-symbols-outlined text-sm">rss_feed</span>
          {t.blogView.badge}
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-[#D1C4E9] mb-4">
          {t.blogView.title}
        </h1>
        <p className="font-sans text-lg text-[#d0c5af] max-w-3xl leading-relaxed">
          {t.blogView.subtitle}
        </p>
      </div>

      {/* Search & Categories Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-stretch md:items-center">
        {/* Search Field */}
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#9685B5]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.blogView.searchPlaceholder}
            className="w-full bg-black/40 border border-white/10 text-xs font-mono text-[#eae1d4] pl-10 pr-4 py-2.5 rounded-xl outline-none focus:border-[#D1C4E9] transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#D1C4E9] text-[#381e72] font-bold'
                : 'glass-card text-[#d0c5af]'
            }`}
          >
            {t.blogView.categoryAll}
          </button>
          <button
            onClick={() => setActiveCategory('ia')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
              activeCategory === 'ia'
                ? 'bg-[#D1C4E9] text-[#381e72] font-bold'
                : 'glass-card text-[#d0c5af]'
            }`}
          >
            {t.blogView.categoryAi}
          </button>
          <button
            onClick={() => setActiveCategory('eng')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
              activeCategory === 'eng'
                ? 'bg-[#D1C4E9] text-[#381e72] font-bold'
                : 'glass-card text-[#d0c5af]'
            }`}
          >
            {t.blogView.categorySoftEng}
          </button>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setActiveArticleId(post.id)}
            className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#D1C4E9]/40 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#9685B5] mb-3">
                <span className="bg-[#D1C4E9]/10 text-[#D1C4E9] px-2.5 py-0.5 rounded border border-[#D1C4E9]/20 font-bold">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="font-headline text-xl font-bold text-[#D1C4E9] mb-3 group-hover:text-white transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="font-sans text-xs text-[#d0c5af]/80 mb-6 leading-relaxed line-clamp-3">
                {post.summary}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-white/5 text-[10px] font-mono px-2 py-0.5 rounded text-[#9685B5]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-[#D1C4E9]">
              <span className="text-[#9685B5] text-[11px]">{post.date}</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                {t.blogView.readArticle}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Overlay */}
      {activeArticle && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-card bg-[#1D1926] p-6 md:p-10 rounded-2xl max-w-3xl w-full border border-[#D1C4E9]/30 relative my-8">
            <button
              onClick={() => setActiveArticleId(null)}
              className="absolute top-4 right-4 text-[#eae1d4]/60 hover:text-[#eae1d4] p-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="flex items-center gap-3 font-mono text-xs text-[#9685B5] mb-4">
              <span className="bg-[#D1C4E9]/20 text-[#D1C4E9] font-bold px-3 py-1 rounded-full">
                {activeArticle.category}
              </span>
              <span>{activeArticle.date}</span>
              <span>• {activeArticle.readTime}</span>
            </div>

            <h1 className="font-headline text-2xl md:text-3xl font-extrabold text-[#D1C4E9] mb-4 leading-tight">
              {activeArticle.title}
            </h1>

            <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6 font-mono text-xs text-[#d0c5af]">
              <div className="w-8 h-8 rounded-full bg-[#D1C4E9]/20 border border-[#D1C4E9] flex items-center justify-center text-[#D1C4E9] font-bold">
                EF
              </div>
              <div>
                <span className="font-bold text-[#D1C4E9] block">{activeArticle.author}</span>
                <span className="text-[10px] text-[#9685B5]">{t.blogView.authorRole}</span>
              </div>
            </div>

            <div className="font-sans text-sm text-[#d0c5af] leading-relaxed mb-8 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">
              <ArticleContentRenderer content={activeArticle.content} />
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <div className="flex flex-wrap gap-1.5">
                {activeArticle.tags.map((tag, idx) => (
                  <span key={idx} className="bg-white/5 text-xs font-mono px-2.5 py-1 rounded text-[#D1C4E9]">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveArticleId(null)}
                className="bg-[#D1C4E9] text-[#381e72] font-mono text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#D1C4E9]/90 transition-all cursor-pointer"
              >
                {t.blogView.closeReading}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

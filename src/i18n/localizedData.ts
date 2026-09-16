import { Course, Lecture, BlogPost, PortfolioItem, ExperienceItem, Language } from '../types';
import { LOCALIZED_COURSES_DATA } from './localizedCourses';
import { LOCALIZED_LECTURES_DATA } from './localizedLectures';
import {
  LOCALIZED_BLOG_POSTS,
  LOCALIZED_PORTFOLIO,
  LOCALIZED_EXPERIENCES,
} from './localizedOther';
import { getLocalizedTestimonial } from '../data/testimonialsData';

export { LOCALIZED_COURSES_DATA, LOCALIZED_LECTURES_DATA, LOCALIZED_BLOG_POSTS, LOCALIZED_PORTFOLIO, LOCALIZED_EXPERIENCES, getLocalizedTestimonial };

// Backward compatibility alias
export const LOCALIZED_COURSES = LOCALIZED_COURSES_DATA;
export const LOCALIZED_LECTURES = LOCALIZED_LECTURES_DATA;

export function getLocalizedCourse(course: Course, lang: Language): Course {
  if (lang === 'pt') return course;
  const translation = LOCALIZED_COURSES_DATA[course.id]?.[lang];
  if (!translation) return course;

  return {
    ...course,
    title: translation.title || course.title,
    subtitle: translation.subtitle || course.subtitle,
    description: translation.description || course.description,
    level: translation.level || course.level,
    duration: translation.duration || course.duration,
    syllabus: translation.syllabus && translation.syllabus.length > 0 ? translation.syllabus : course.syllabus,
    skills: translation.skills && translation.skills.length > 0 ? translation.skills : course.skills,
  };
}

export function getLocalizedLecture(lecture: Lecture, lang: Language): Lecture {
  if (lang === 'pt') return lecture;
  const translation = LOCALIZED_LECTURES_DATA[lecture.id]?.[lang];
  if (!translation) return lecture;

  return {
    ...lecture,
    title: translation.title || lecture.title,
    subtitle: translation.subtitle || lecture.subtitle,
    description: translation.description || lecture.description,
    targetAudience: translation.targetAudience || lecture.targetAudience,
    duration: translation.duration || lecture.duration,
    format: translation.format || lecture.format,
    topics: translation.topics && translation.topics.length > 0 ? translation.topics : lecture.topics,
    skills: translation.skills && translation.skills.length > 0 ? translation.skills : lecture.skills,
  };
}

export function getLocalizedBlogPost(post: BlogPost, lang: Language): BlogPost {
  if (lang === 'pt') return post;
  const translation = LOCALIZED_BLOG_POSTS[post.id]?.[lang];
  if (!translation) return post;

  return {
    ...post,
    title: translation.title || post.title,
    summary: translation.summary || post.summary,
    category: translation.category || post.category,
    readTime: translation.readTime || post.readTime,
    tags: translation.tags && translation.tags.length > 0 ? translation.tags : post.tags,
  };
}

export function getLocalizedPortfolioItem(item: PortfolioItem, lang: Language): PortfolioItem {
  if (lang === 'pt') return item;
  const translation = LOCALIZED_PORTFOLIO[item.id]?.[lang];
  if (!translation) return item;

  return {
    ...item,
    title: translation.title || item.title,
    clientOrProject: translation.clientOrProject || item.clientOrProject,
    category: translation.category || item.category,
    description: translation.description || item.description,
    results: translation.results && translation.results.length > 0 ? translation.results : item.results,
  };
}

export function getLocalizedExperience(exp: ExperienceItem, lang: Language): ExperienceItem {
  if (lang === 'pt') return exp;
  const translation = LOCALIZED_EXPERIENCES[exp.id]?.[lang];
  if (!translation) return exp;

  return {
    ...exp,
    role: translation.role || exp.role,
    period: translation.period || exp.period,
    description: translation.description || exp.description,
    achievements: translation.achievements && translation.achievements.length > 0 ? translation.achievements : exp.achievements,
    skills: translation.skills && translation.skills.length > 0 ? translation.skills : exp.skills,
  };
}

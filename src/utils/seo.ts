import { ViewMode, Language } from '../types';

interface SeoMetadata {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}

const BASE_URL = 'https://elainefigueiredo.com.br';
const DEFAULT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBMj8vvqIuX_A0tuErUJ0ekzufdVtCfbuGYmTgAxskwuod_Hb-STNugy9fuGxDcTYGuLTj9ZhSWugzuOk2s5SHc72eTTF8QMpJH6ByDe3-tW4wsXuiqTPcKgBc1CvDadsWRnd3_s790cruC-RGpRPODLlKqmV25gAPGw-F5E8GIjv7HjkXRBssuLxyz5u-LAUXV8TE0sVMagg3qTFtusUZtvDUkBdBvPdWCE3fHi2AeGpkWtRryzBagdL7FHNGN7pbUmQ';

export const SEO_CONFIG_BY_VIEW: Record<
  ViewMode,
  Record<Language, { title: string; description: string }>
> = {
  home: {
    pt: {
      title: 'Elaine Figueiredo: Inteligência Artificial e Inovação que Transformam',
      description:
        'Elaine Figueiredo: Inteligência Artificial e Inovação que Transformam. Especialista em IA, Arquitetura de Software, Dados, Cursos e Consultoria Estratégica.',
    },
    en: {
      title: 'Elaine Figueiredo: Artificial Intelligence & Transformative Innovation',
      description:
        'Elaine Figueiredo: AI Specialist, Software Architecture, Data Governance, Executive Keynotes and Corporate Education.',
    },
    es: {
      title: 'Elaine Figueiredo: Inteligencia Artificial e Innovación que Transforman',
      description:
        'Elaine Figueiredo: Especialista en IA, Arquitectura de Software, Gobernanza de Datos, Conferencias Magistrales y Capacitación Ejecutiva.',
    },
    fr: {
      title: 'Elaine Figueiredo: Intelligence Artificielle & Innovation Transformatrice',
      description:
        'Elaine Figueiredo: Spécialiste en IA, Architecture Logicielle, Données, Conférences Magistrales et Formations d’Élite.',
    },
    it: {
      title: 'Elaine Figueiredo: Intelligenza Artificiale e Innovazione che Trasformano',
      description:
        'Elaine Figueiredo: Specialista in IA, Architettura Software, Dati, Conferenze Magistrali e Formazione Aziendale.',
    },
  },
  about: {
    pt: {
      title: 'Sobre Elaine Figueiredo | Trajetória, Propósito e Carreira em IA',
      description:
        'Conheça a trajetória de Elaine Figueiredo: +25 anos em tecnologia, mestranda na USP, pós-graduada na FGV e pioneira na intersecção entre IA, dados e propósito humano.',
    },
    en: {
      title: 'About Elaine Figueiredo | Trajectory, Purpose & AI Leadership',
      description:
        'Learn about Elaine Figueiredo: 25+ years in tech, MSc researcher at USP, FGV postgraduate, and pioneer in human-centered AI strategy.',
    },
    es: {
      title: 'Sobre Elaine Figueiredo | Trayectoria, Propósito y Carrera en IA',
      description:
        'Conozca la trayectoria de Elaine Figueiredo: más de 25 años en tecnología, investigadora en la USP y líder en IA humanizada.',
    },
    fr: {
      title: 'À Propos d’Elaine Figueiredo | Parcours, Sens & Leadership en IA',
      description:
        'Découvrez le parcours d’Elaine Figueiredo: 25+ ans d’expérience tech, chercheuse à l’USP et pionnière de l’IA responsable.',
    },
    it: {
      title: 'Chi È Elaine Figueiredo | Percorso, Visione e Leadership nell’IA',
      description:
        'Scopri la storia di Elaine Figueiredo: oltre 25 anni nel settore tecnologico, ricercatrice USP e leader nell’IA umana.',
    },
  },
  courses: {
    pt: {
      title: 'Cursos & Palestras Magnas em IA | Elaine Figueiredo Academy',
      description:
        'Formações práticas e palestras magnas em RAGs, LangChain, NotebookLM, Engenharia de Prompt, Governança e Letramento em IA para profissionais e empresas.',
    },
    en: {
      title: 'Courses & Keynote Lectures in AI | Elaine Figueiredo Academy',
      description:
        'Hands-on courses and executive keynotes on RAGs, LangChain, NotebookLM, Prompt Engineering, AI Governance, and Tech Literacy.',
    },
    es: {
      title: 'Cursos y Conferencias Magistrales en IA | Elaine Figueiredo',
      description:
        'Programas prácticos y conferencias ejecutivas sobre RAGs, LangChain, NotebookLM, Ingeniería de Prompts y Gobernanza de IA.',
    },
    fr: {
      title: 'Formations & Conférences Magistrales en IA | Elaine Figueiredo',
      description:
        'Formations opérationnelles et keynotes d’impact sur les RAGs, LangChain, NotebookLM, Prompt Engineering et Gouvernance de l’IA.',
    },
    it: {
      title: 'Corsi e Conferenze Magistrali in IA | Elaine Figueiredo',
      description:
        'Percorsi formativi e keynote strategici su RAG, LangChain, NotebookLM, Prompt Engineering e Governance dell’Intelligenza Artificiale.',
    },
  },
  resume: {
    pt: {
      title: 'Currículo & Qualificações Profissionais | Elaine Figueiredo',
      description:
        'Experiência profissional consolidada, formação acadêmica (USP, FGV), certificações em Nuvem e IA, histórico corporativo e Lattes de Elaine Figueiredo.',
    },
    en: {
      title: 'Curriculum Vitae & Qualifications | Elaine Figueiredo',
      description:
        'Executive CV, academic achievements at USP & FGV, Cloud & AI certifications, and 25+ years track record of Elaine Figueiredo.',
    },
    es: {
      title: 'Currículum Vitae y Experiencia | Elaine Figueiredo',
      description:
        'Trayectoria profesional, formación académica en USP y FGV, certificaciones de nube e IA, y logros ejecutivos de Elaine Figueiredo.',
    },
    fr: {
      title: 'Curriculum Vitae & Qualifications | Elaine Figueiredo',
      description:
        'Parcours professionnel, diplômes USP et FGV, certifications Cloud & IA, et réalisations de haut niveau d’Elaine Figueiredo.',
    },
    it: {
      title: 'Curriculum Vitae e Qualifiche | Elaine Figueiredo',
      description:
        'Curriculum vitae esecutivo, formazione accademica USP e FGV, certificazioni Cloud & IA di Elaine Figueiredo.',
    },
  },
  'curriculo-pdf': {
    pt: {
      title: 'Currículo Executivo Completo para Impressão | Elaine Figueiredo',
      description:
        'Versão executiva completa e diagramada para impressão e download do currículo de Elaine Figueiredo.',
    },
    en: {
      title: 'Printable Executive Curriculum Vitae | Elaine Figueiredo',
      description:
        'Full executive formatted printable CV for Elaine Figueiredo.',
    },
    es: {
      title: 'Currículum Ejecutivo Imprimible | Elaine Figueiredo',
      description:
        'Versión ejecutiva estructurada para impresión del currículum de Elaine Figueiredo.',
    },
    fr: {
      title: 'CV Exécutif Imprimable | Elaine Figueiredo',
      description:
        'Version exécutive imprimable du curriculum vitae d’Elaine Figueiredo.',
    },
    it: {
      title: 'Curriculum Esecutivo Stampabile | Elaine Figueiredo',
      description:
        'Versione esecutiva stampabile del curriculum di Elaine Figueiredo.',
    },
  },
  blog: {
    pt: {
      title: 'Artigos, Reflexões & Insights de IA | Elaine Figueiredo',
      description:
        'Análises aprofundadas sobre o futuro da Inteligência Artificial, governança, dados, engenharia de software e a essencialidade humana.',
    },
    en: {
      title: 'Articles & AI Insights | Elaine Figueiredo',
      description:
        'In-depth perspectives on the future of AI, governance, data architecture, prompt engineering, and human-centric technology.',
    },
    es: {
      title: 'Artículos y Reflexiones de IA | Elaine Figueiredo',
      description:
        'Análisis profundos sobre Inteligencia Artificial, gobernanza, arquitectura de datos y la centralidad humana en la era digital.',
    },
    fr: {
      title: 'Articles & Réflexions sur l’IA | Elaine Figueiredo',
      description:
        'Perspectives stratégiques sur l’IA, la gouvernance des données, le génie logiciel et la place de l’humain.',
    },
    it: {
      title: 'Articoli e Riflessioni sull’IA | Elaine Figueiredo',
      description:
        'Approfondimenti sul futuro dell’Intelligenza Artificiale, governance dei dati e leadership etica.',
    },
  },
  portfolio: {
    pt: {
      title: 'Portfólio de Soluções & Casos de Sucesso | Elaine Figueiredo',
      description:
        'Projetos de alta relevância em Inteligência Artificial Generativa, Data Lakes corporativos, modernização de sistemas e consultoria estratégica.',
    },
    en: {
      title: 'Portfolio & Enterprise Case Studies | Elaine Figueiredo',
      description:
        'Enterprise solutions in Generative AI, modern data platforms, distributed software architecture, and strategic advisory.',
    },
    es: {
      title: 'Portafolio de Proyectos y Casos de Éxito | Elaine Figueiredo',
      description:
        'Proyectos de IA generativa, modernización de arquitectura de datos y consultoría estratégica empresarial.',
    },
    fr: {
      title: 'Portfolio de Solutions & Études de Cas | Elaine Figueiredo',
      description:
        'Réalisations d’envergure en IA générative, plateformes de données modernes et conseil stratégique.',
    },
    it: {
      title: 'Portfolio Soluzioni e Case Study | Elaine Figueiredo',
      description:
        'Progetti innovativi in Intelligenza Artificiale Generativa, architetture dati e consulenza direzionale.',
    },
  },
  contact: {
    pt: {
      title: 'Contato & Propostas para Palestras e Consultoria | Elaine Figueiredo',
      description:
        'Entre em contato direto com Elaine Figueiredo para palestras magnas, treinamentos corporativos, consultorias em IA ou parcerias institucionais.',
    },
    en: {
      title: 'Contact & Proposals for Keynotes and Advisory | Elaine Figueiredo',
      description:
        'Get in touch with Elaine Figueiredo for keynote talks, corporate training, AI consulting, or executive workshops.',
    },
    es: {
      title: 'Contacto y Propuestas para Conferencias | Elaine Figueiredo',
      description:
        'Contacte a Elaine Figueiredo para conferencias magistrales, capacitación corporativa y consultoría estratégica en IA.',
    },
    fr: {
      title: 'Contact & Devis pour Conférences et Conseil | Elaine Figueiredo',
      description:
        'Contactez directement Elaine Figueiredo pour des conférences magistrales, des formations d’entreprise et du conseil en IA.',
    },
    it: {
      title: 'Contatto e Proposte per Conferenze e Consulenza | Elaine Figueiredo',
      description:
        'Contatta Elaine Figueiredo per conferenze aziendali, formazione corporate e consulenza in intelligenza artificiale.',
    },
  },
};

/**
 * Updates DOM head elements dynamically for client-side SEO and SMO crawlers
 */
export function updateDocumentSeo(
  view: ViewMode,
  language: Language,
  customTitle?: string,
  customDesc?: string
): void {
  if (typeof document === 'undefined') return;

  const viewConfig = SEO_CONFIG_BY_VIEW[view]?.[language] || SEO_CONFIG_BY_VIEW.home.pt;
  const title = customTitle || viewConfig.title;
  const description = customDesc || viewConfig.description;
  const pageUrl = `${BASE_URL}/?view=${view}&lang=${language}`;

  // Update HTML document lang
  const htmlLangMap: Record<Language, string> = {
    pt: 'pt-BR',
    en: 'en',
    es: 'es',
    fr: 'fr',
    it: 'it',
  };
  document.documentElement.lang = htmlLangMap[language] || 'pt-BR';

  // Update Title
  document.title = title;

  // Helper to set or update meta tag
  const setMeta = (name: string, content: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let tag = document.querySelector(`meta[${attr}="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attr, name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  // Standard SEO Meta
  setMeta('description', description);
  setMeta(
    'keywords',
    'Elaine Figueiredo, Inteligência Artificial, IA Generativa, RAG, LangChain, Google Gemini, NotebookLM, Engenharia de Prompt, Governança de IA, Consultoria IA, Palestras IA, USP, FGV'
  );

  // Open Graph (SMO)
  const ogLocaleMap: Record<Language, string> = {
    pt: 'pt_BR',
    en: 'en_US',
    es: 'es_ES',
    fr: 'fr_FR',
    it: 'it_IT',
  };

  setMeta('og:site_name', 'Elaine Figueiredo', true);
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:url', pageUrl, true);
  setMeta('og:image', DEFAULT_IMAGE, true);
  setMeta('og:image:alt', 'Elaine Figueiredo - Especialista em Inteligência Artificial e Inovação', true);
  setMeta('og:locale', ogLocaleMap[language] || 'pt_BR', true);

  // Twitter Cards (SMO)
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:site', '@profelainefigueiredo');
  setMeta('twitter:creator', '@profelainefigueiredo');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', DEFAULT_IMAGE);
  setMeta('twitter:image:alt', 'Elaine Figueiredo - Inteligência Artificial e Inovação');

  // Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', pageUrl);
}

import { Testimonial, Language } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-client-1',
    author: 'Carlos Eduardo Mendes',
    role: 'CTO & Diretor de Engenharia',
    companyOrContext: 'FinTech de Pagamentos e Crédito',
    type: 'client',
    highlight: 'Redução de 75% no tempo de busca com 100% de compliance.',
    quote: 'A consultoria da Elaine na arquitetura do nosso pipeline de RAG e governança de IA foi transformadora. Conseguimos estruturar bases vetoriais robustas e reduzir em 75% o tempo de busca documental, mantendo total conformidade com a LGPD e regras do Banco Central.',
    rating: 5,
    avatarInitials: 'CM',
    avatarGradient: 'from-[#7C4DFF] to-[#381E72]',
    projectOrCourse: 'Consultoria RAG Enterprise & Governança',
    date: '2024'
  },
  {
    id: 'test-student-1',
    author: 'Lucas Bertolini',
    role: 'Engenheiro de Software Sênior',
    companyOrContext: 'Plataforma SaaS B2B',
    type: 'student',
    highlight: 'O curso de RAG mais aprofundado e prático do mercado brasileiro.',
    quote: 'O curso de Introdução às RAGs da Elaine é disparado o melhor investimento técnico que fiz este ano. Vai direto ao ponto com embeddings, bancos vetoriais, rerankers e tratamento de alucinações sem enrolação e com arquitetura de verdade.',
    rating: 5,
    avatarInitials: 'LB',
    avatarGradient: 'from-[#00B4D8] to-[#0077B6]',
    projectOrCourse: 'Curso Introdução às RAGs',
    date: '2024'
  },
  {
    id: 'test-client-2',
    author: 'Dra. Vanessa Alcântara',
    role: 'Diretora de Inovação & Transformação Digital',
    companyOrContext: 'Rede Hospitalar & HealthTech',
    type: 'client',
    highlight: 'Uma palestra magna que uniu rigor acadêmico e impacto executivo.',
    quote: 'A palestra magna sobre Letramento e IA nos Negócios ministrada pela Elaine foi um divisor de águas para o nosso comitê executivo e corpo clínico. Ela desmistificou conceitos complexos e nos deu um roteiro prático para adoção ética e produtiva da IA.',
    rating: 5,
    avatarInitials: 'VA',
    avatarGradient: 'from-[#E040FB] to-[#7B1FA2]',
    projectOrCourse: 'Palestra Magna: Letramento em IA e Futuro dos Negócios',
    date: '2024'
  },
  {
    id: 'test-student-2',
    author: 'Camila Fontes',
    role: 'Tech Lead & Pesquisadora',
    companyOrContext: 'HealthTech Analytics',
    type: 'student',
    highlight: 'Padrões avançados de instrução e raciocínio aplicados ao mundo real.',
    quote: 'A MasterClass de Engenharia de Prompt e Contexto elevou o patamar dos nossos sistemas conversacionais. Padrões como ReAct, CoT e gestão de janelas de contexto foram explicados com precisão cirúrgica.',
    rating: 5,
    avatarInitials: 'CF',
    avatarGradient: 'from-[#FF6B6B] to-[#C82333]',
    projectOrCourse: 'MasterClass Engenharia de Prompt e Contexto',
    date: '2024'
  },
  {
    id: 'test-client-3',
    author: 'Rodrigo Silveira',
    role: 'Arquiteto Corporativo de Soluções',
    companyOrContext: 'Telecom & Infraestrutura Cloud',
    type: 'client',
    highlight: 'Evolução ágil de sistemas monolíticos para serviços com IA integrada.',
    quote: 'Trabalhar com a Elaine na transição de sistemas legados para arquiteturas orientadas a eventos com IA foi uma aula contínua. Sua clareza sobre DDD, modelagem de dados e governança acelerou nossa entrega em meses.',
    rating: 5,
    avatarInitials: 'RS',
    avatarGradient: 'from-[#3A86FF] to-[#03045E]',
    projectOrCourse: 'Modernização Arquitetural & Agilidade Corporativa',
    date: '2024'
  },
  {
    id: 'test-student-3',
    author: 'Felipe Albuquerque',
    role: 'Senior Product Manager',
    companyOrContext: 'Fintech & Inteligência de Negócio',
    type: 'student',
    highlight: 'Clareza cristalina para construir agentes autônomos em produção.',
    quote: 'O curso de LangChain me deu a fundamentação que eu precisava para liderar a concepção dos novos agentes de inteligência da nossa empresa. Excelente harmonia entre código, arquitetura e estratégia de produto.',
    rating: 5,
    avatarInitials: 'FA',
    avatarGradient: 'from-[#48CAE4] to-[#023E8A]',
    projectOrCourse: 'Curso Introdução ao LangChain',
    date: '2024'
  },
  {
    id: 'test-client-4',
    author: 'Mariana Prado Guimarães',
    role: 'Head de Desenvolvimento Humano e Tech',
    companyOrContext: 'Varejo Omnichannel Nacional',
    type: 'client',
    highlight: '120 líderes capacitados com aplicabilidade prática e imediata.',
    quote: 'O treinamento in-company sobre NotebookLM e Google Gemini capacitou nossas equipes de operações e marketing em tempo recorde. Todos saíram aplicando pesquisa assistida e síntese inteligente em suas rotinas de trabalho.',
    rating: 5,
    avatarInitials: 'MG',
    avatarGradient: 'from-[#F72585] to-[#7209B7]',
    projectOrCourse: 'Treinamento Corporativo NotebookLM & Gemini',
    date: '2024'
  },
  {
    id: 'test-student-4',
    author: 'Beatriz Sampaio',
    role: 'Consultora Jurídica & Especialista em Compliance',
    companyOrContext: 'Escritório de Direito Corporativo & Mestranda',
    type: 'student',
    highlight: 'Revolucionou a análise de pareceres complexos e grounding confiável.',
    quote: 'O curso de Gemini Notebook (NotebookLM) mudou totalmente a minha rotina de pesquisa jurídica. A Elaine ensina a fazer grounding estrito e estruturar cadernos de estudo com rigor e velocidade inacreditáveis.',
    rating: 5,
    avatarInitials: 'BS',
    avatarGradient: 'from-[#06D6A0] to-[#0F9D58]',
    projectOrCourse: 'Curso Introdução ao Gemini Notebook',
    date: '2024'
  }
];

export interface LocalizedTestimonialItem {
  role: string;
  companyOrContext: string;
  highlight: string;
  quote: string;
  projectOrCourse: string;
}

export const LOCALIZED_TESTIMONIALS: Record<string, Partial<Record<Language, LocalizedTestimonialItem>>> = {
  'test-client-1': {
    en: {
      role: 'CTO & Engineering Director',
      companyOrContext: 'Payments & Credit FinTech',
      highlight: '75% reduction in search time with 100% compliance.',
      quote: "Elaine's consulting on our enterprise RAG pipeline architecture and AI governance was transformative. We established robust vector stores and reduced document discovery time by 75% while fully complying with regulations.",
      projectOrCourse: 'Enterprise RAG Consulting & AI Governance'
    },
    es: {
      role: 'CTO & Director de Ingeniería',
      companyOrContext: 'FinTech de Pagos y Crédito',
      highlight: 'Reducción del 75% en tiempo de búsqueda con 100% de cumplimiento.',
      quote: 'La consultoría de Elaine en la arquitectura de RAG y gobernanza de IA fue transformadora. Logramos estructurar bases vectoriales robustas y reducir en un 75% el tiempo de búsqueda documental con total cumplimiento regulatorio.',
      projectOrCourse: 'Consultoría RAG Enterprise & Gobernanza'
    },
    fr: {
      role: 'CTO & Directeur de l’Ingénierie',
      companyOrContext: 'FinTech de Paiements et Crédit',
      highlight: 'Réduction de 75 % du temps de recherche avec une conformité totale.',
      quote: 'Le conseil d’Elaine sur l’architecture RAG d’entreprise et la gouvernance de l’IA a été transformateur. Nous avons structuré des bases vectorielles solides et réduit de 75 % le temps de recherche documentaire.',
      projectOrCourse: 'Conseil RAG Enterprise & Gouvernance IA'
    },
    it: {
      role: 'CTO & Direttore di Ingegneria',
      companyOrContext: 'FinTech di Pagamenti e Credito',
      highlight: 'Riduzione del 75% nei tempi di ricerca con il 100% di conformità.',
      quote: 'La consulenza di Elaine sull’architettura delle pipeline RAG e sulla governance dell’IA è stata trasformativa. Abbiamo strutturato archivi vettoriali solidi riducendo del 75% i tempi di reperimento documentale.',
      projectOrCourse: 'Consulenza RAG Enterprise & Governance IA'
    }
  },
  'test-student-1': {
    en: {
      role: 'Senior Software Engineer',
      companyOrContext: 'B2B SaaS Platform',
      highlight: 'The most comprehensive, hands-on RAG course in the market.',
      quote: "Elaine's Introduction to RAGs course is by far the best technical investment I made this year. Straight to the point with embeddings, vector databases, rerankers, and hallucination mitigation with real production architecture.",
      projectOrCourse: 'Introduction to RAGs Course'
    },
    es: {
      role: 'Ingeniero de Software Senior',
      companyOrContext: 'Plataforma SaaS B2B',
      highlight: 'El curso de RAG más completo y práctico del mercado.',
      quote: 'El curso de Introducción a RAGs de Elaine es por lejos la mejor inversión técnica que hice este año. Directo al grano con embeddings, bases vectoriales y mitigación de alucinaciones con arquitectura de nivel de producción.',
      projectOrCourse: 'Curso Introducción a RAGs'
    },
    fr: {
      role: 'Ingénieur Logiciel Senior',
      companyOrContext: 'Plateforme SaaS B2B',
      highlight: 'La formation RAG la plus approfondie et pratique du marché.',
      quote: 'La formation sur les systèmes RAG d’Elaine est de loin le meilleur investissement technique de mon année. Droit au but avec les plongements (embeddings), bases vectorielles et architectures de production fiables.',
      projectOrCourse: 'Formation Introduction aux RAGs'
    },
    it: {
      role: 'Senior Software Engineer',
      companyOrContext: 'Piattaforma SaaS B2B',
      highlight: 'Il corso sui sistemi RAG più completo e pratico sul mercato.',
      quote: 'Il corso di Introduzione ai sistemi RAG di Elaine è senza dubbio il miglior investimento tecnico fatto quest’anno. Diretto al sodo con embeddings, banche dati vettoriali e mitigazione delle allucinazioni.',
      projectOrCourse: 'Corso Introduzione ai Sistemi RAG'
    }
  },
  'test-client-2': {
    en: {
      role: 'Director of Innovation & Digital Transformation',
      companyOrContext: 'Hospital Network & HealthTech',
      highlight: 'A keynote that combined academic rigor with executive business impact.',
      quote: "The keynote on AI Literacy and Strategy delivered by Elaine was a turning point for our executive board and medical staff. She demystified complex concepts and provided a practical roadmap for ethical AI adoption.",
      projectOrCourse: 'Keynote: AI Literacy & Future of Business'
    },
    es: {
      role: 'Directora de Innovación y Transformación Digital',
      companyOrContext: 'Red Hospitalaria & HealthTech',
      highlight: 'Una conferencia magistral que unió rigor académico e impacto ejecutivo.',
      quote: 'La conferencia magistral sobre Alfabetización en IA impartida por Elaine fue un punto de inflexión para nuestro comité ejecutivo. Desmitificó conceptos complejos y nos entregó una hoja de ruta clara para la adopción ética.',
      projectOrCourse: 'Conferencia Magistral: Alfabetización en IA'
    },
    fr: {
      role: 'Directrice de l’Innovation & Transformation Numérique',
      companyOrContext: 'Réseau Hospitalier & HealthTech',
      highlight: 'Une conférence plénière alliant rigueur académique et impact exécutif.',
      quote: 'La conférence plénière d’Elaine sur la littératie et la gouvernance en IA a marqué un tournant pour notre comité exécutif. Elle a su vulgariser des concepts complexes et proposer une feuille de route concrète.',
      projectOrCourse: 'Conférence Magistrale : Littératie en IA'
    },
    it: {
      role: 'Direttrice Innovazione e Trasformazione Digitale',
      companyOrContext: 'Rete Ospedaliera & HealthTech',
      highlight: 'Un keynote magistrale che ha unito rigore accademico e impatto esecutivo.',
      quote: 'La conferenza plenaria sull’Alfabetizzazione e la Governance dell’IA tenuta da Elaine è stata una svolta per il nostro comitato esecutivo. Ha spiegato concetti complessi offrendo una chiara roadmap operativa.',
      projectOrCourse: 'Keynote: Alfabetizzazione in IA e Strategia'
    }
  },
  'test-student-2': {
    en: {
      role: 'Tech Lead & Researcher',
      companyOrContext: 'HealthTech Analytics',
      highlight: 'Advanced instruction and reasoning patterns applied to real scenarios.',
      quote: 'The MasterClass in Prompt & Context Engineering upgraded our conversational systems. Patterns like ReAct, CoT, and context window management were explained with surgical precision.',
      projectOrCourse: 'MasterClass: Prompt & Context Engineering'
    },
    es: {
      role: 'Tech Lead e Investigadora',
      companyOrContext: 'HealthTech Analytics',
      highlight: 'Patrones avanzados de instrucción y razonamiento aplicados al mundo real.',
      quote: 'La MasterClass de Ingeniería de Prompt y Contexto elevó la calidad de nuestros sistemas de IA. Patrones como ReAct, CoT y gestión de contexto fueron explicados con precisión quirúrgica.',
      projectOrCourse: 'MasterClass Ingeniería de Prompt y Contexto'
    },
    fr: {
      role: 'Tech Lead & Chercheuse',
      companyOrContext: 'HealthTech Analytics',
      highlight: 'Des motifs avancés d’instruction et de raisonnement appliqués au terrain.',
      quote: 'La MasterClass d’ingénierie de prompts et de contexte a transformé nos systèmes conversationnels. Les patterns comme ReAct, CoT et l’optimisation de contexte ont été détaillés avec une clarté remarquable.',
      projectOrCourse: 'MasterClass Ingénierie de Prompt et Contexte'
    },
    it: {
      role: 'Tech Lead e Ricercatrice',
      companyOrContext: 'HealthTech Analytics',
      highlight: 'Pattern avanzati di istruzione e ragionamento applicati al mondo reale.',
      quote: 'La MasterClass di Ingegneria di Prompt e Contesto ha innalzato il livello dei nostri sistemi conversazionali. Tecniche come ReAct e gestione delle finestre di contesto sono state spiegate con maestria.',
      projectOrCourse: 'MasterClass Ingegneria di Prompt e Contesto'
    }
  },
  'test-client-3': {
    en: {
      role: 'Enterprise Solutions Architect',
      companyOrContext: 'Telecom & Cloud Infrastructure',
      highlight: 'Agile modernization from monoliths to intelligent, AI-integrated services.',
      quote: "Working alongside Elaine in transitioning legacy monoliths to event-driven architectures with embedded AI was an exceptional masterclass. Her expertise in DDD and data requirements accelerated our delivery by months.",
      projectOrCourse: 'Architecture Modernization & Agile Governance'
    },
    es: {
      role: 'Arquitecto Corporativo de Soluciones',
      companyOrContext: 'Telecom e Infraestructura Cloud',
      highlight: 'Evolución ágil de monolitos a servicios inteligentes con IA integrada.',
      quote: 'Trabajar con Elaine en la transición de sistemas heredados a arquitecturas orientadas a eventos con IA fue un aprendizaje continuo. Su dominio de DDD y modelado de datos aceleró nuestros objetivos meses antes de lo previsto.',
      projectOrCourse: 'Modernización Arquitectónica & Agilidad'
    },
    fr: {
      role: 'Architecte Solutions Entreprise',
      companyOrContext: 'Télécoms & Infrastructure Cloud',
      highlight: 'Modernisation agile de monolithes vers des services intelligents avec IA.',
      quote: 'Collaborer avec Elaine sur la migration d’architectures monolithiques vers des microservices orientés événements assistés par l’IA a été une expérience d’une valeur inestimable.',
      projectOrCourse: 'Modernisation d’Architecture & Agilité'
    },
    it: {
      role: 'Architetto di Soluzioni Enterprise',
      companyOrContext: 'Telecomunicazioni e Cloud',
      highlight: 'Evoluzione agile da monoliti a servizi intelligenti con IA integrata.',
      quote: 'Lavorare con Elaine nella transizione da sistemi legacy ad architetture event-driven con IA integrata ha accelerato il nostro rilascio di mesi con una padronanza eccezionale di DDD.',
      projectOrCourse: 'Modernizzazione Architetturale & Agilità'
    }
  },
  'test-student-3': {
    en: {
      role: 'Senior Product Manager',
      companyOrContext: 'Fintech & Business Intelligence',
      highlight: 'Crystal clarity on architecting autonomous agents for production.',
      quote: "The LangChain course gave me the exact architectural foundation required to lead the rollout of smart autonomous agents at our company. A perfect balance between engineering, architecture, and product value.",
      projectOrCourse: 'Introduction to LangChain Course'
    },
    es: {
      role: 'Senior Product Manager',
      companyOrContext: 'Fintech & Inteligencia de Negocio',
      highlight: 'Claridad total para construir agentes autónomos en producción.',
      quote: 'El curso de LangChain me brindó los fundamentos precisos para liderar el lanzamiento de agentes autónomos en nuestra empresa. Equilibrio impecable entre código, arquitectura y producto.',
      projectOrCourse: 'Curso Introducción a LangChain'
    },
    fr: {
      role: 'Senior Product Manager',
      companyOrContext: 'Fintech & Intelligence d’Affaires',
      highlight: 'Une vision limpide pour concevoir des agents autonomes en production.',
      quote: 'La formation LangChain m’a apporté le socle architectural indispensable pour piloter le déploiement de nos agents IA autonomes. Un équilibre parfait entre code, architecture et vision produit.',
      projectOrCourse: 'Formation Introduction à LangChain'
    },
    it: {
      role: 'Senior Product Manager',
      companyOrContext: 'Fintech & Business Intelligence',
      highlight: 'Massima chiarezza per costruire agenti autonomi in ambienti di produzione.',
      quote: 'Il corso su LangChain mi ha fornito le solide basi architetturali necessarie per guidare lo sviluppo dei nostri agenti intelligenti. Straordinario equilibrio tra codice e visione di prodotto.',
      projectOrCourse: 'Corso Introduzione a LangChain'
    }
  },
  'test-client-4': {
    en: {
      role: 'Head of People & Tech Development',
      companyOrContext: 'National Omnichannel Retail',
      highlight: '120 leaders upskilled with immediate practical applicability.',
      quote: "The corporate workshop on NotebookLM and Google Gemini upskilled our operations and product teams in record time. Everyone left applying assisted research and cognitive synthesis in their daily workflows.",
      projectOrCourse: 'Corporate Training: NotebookLM & Gemini'
    },
    es: {
      role: 'Líder de Desarrollo de Talento y Tech',
      companyOrContext: 'Retail Omnicanal Nacional',
      highlight: '120 líderes capacitados con aplicabilidad práctica e inmediata.',
      quote: 'El entrenamiento corporativo de NotebookLM y Google Gemini capacitó a nuestros equipos en tiempo récord. Todos salieron aplicando investigación asistida y síntesis inteligente en su día a día.',
      projectOrCourse: 'Entrenamiento Corporativo NotebookLM & Gemini'
    },
    fr: {
      role: 'Responsable Développement des Talents Tech',
      companyOrContext: 'Distribution Omnicanale',
      highlight: '120 leaders formés avec une mise en pratique immédiate sur le terrain.',
      quote: 'L’atelier sur mesure consacré à NotebookLM et Google Gemini a permis de former nos équipes opérationnelles en un temps record avec des gains d’efficacité directs.',
      projectOrCourse: 'Formation Entreprise NotebookLM & Gemini'
    },
    it: {
      role: 'Responsabile People & Tech Development',
      companyOrContext: 'Retail Omnichannel',
      highlight: '120 leader formati con applicabilità immediata nei flussi di lavoro.',
      quote: 'Il workshop aziendale su NotebookLM e Google Gemini ha potenziato le competenze dei nostri team operativi in tempi record, con una soddisfazione unanime.',
      projectOrCourse: 'Formazione Aziendale NotebookLM & Gemini'
    }
  },
  'test-student-4': {
    en: {
      role: 'Legal Tech Consultant & Compliance Specialist',
      companyOrContext: 'Corporate Law Firm & Researcher',
      highlight: 'Revolutionized complex legal analysis with verifiable grounding.',
      quote: "The Gemini Notebook (NotebookLM) course completely elevated my legal research routine. Elaine teaches strict grounding and notebook organization with unbelievable precision and speed.",
      projectOrCourse: 'Introduction to Gemini Notebook Course'
    },
    es: {
      role: 'Consultora Jurídica & Especialista en Compliance',
      companyOrContext: 'Firma de Derecho Corporativo',
      highlight: 'Revolucionó el análisis de dictámenes complejos y grounding verificable.',
      quote: 'El curso de Gemini Notebook (NotebookLM) cambió por completo mi rutina de investigación jurídica. Elaine enseña grounding estricto y organización de notas con rigor y velocidad inigualables.',
      projectOrCourse: 'Curso Introducción a Gemini Notebook'
    },
    fr: {
      role: 'Consultante Juridique & Spécialiste Compliance',
      companyOrContext: 'Cabinet d’Avocats d’Affaires',
      highlight: 'A révolutionné l’analyse de rapports complexes avec un ancrage vérifiable.',
      quote: 'La formation Gemini Notebook (NotebookLM) a métamorphosé ma méthode de recherche et de synthèse juridique. Elaine enseigne le grounding strict avec une précision magistrale.',
      projectOrCourse: 'Formation Introduction à Gemini Notebook'
    },
    it: {
      role: 'Consulente Legale & Compliance Specialist',
      companyOrContext: 'Studio Legale d’Impresa',
      highlight: 'Ha rivoluzionato l’analisi di perizie complesse con fonti verificate.',
      quote: 'Il corso su Gemini Notebook (NotebookLM) ha trasformato le mie metodologie di ricerca normativa. Elaine insegna la verifica e la sintesi di fonti proprietarie con rara precisione.',
      projectOrCourse: 'Corso Introduzione a Gemini Notebook'
    }
  }
};

export function getLocalizedTestimonial(testimonial: Testimonial, lang: Language): Testimonial {
  if (lang === 'pt') return testimonial;
  const translation = LOCALIZED_TESTIMONIALS[testimonial.id]?.[lang];
  if (!translation) return testimonial;

  return {
    ...testimonial,
    role: translation.role || testimonial.role,
    companyOrContext: translation.companyOrContext || testimonial.companyOrContext,
    highlight: translation.highlight || testimonial.highlight,
    quote: translation.quote || testimonial.quote,
    projectOrCourse: translation.projectOrCourse || testimonial.projectOrCourse
  };
}

import { Language } from '../types';

export interface LocalizedBlogPostItem {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  tags: string[];
}

export interface LocalizedPortfolioItem {
  title: string;
  clientOrProject: string;
  category: string;
  description: string;
  results: string[];
}

export interface LocalizedExperienceItem {
  role: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const LOCALIZED_BLOG_POSTS: Record<string, Partial<Record<Language, LocalizedBlogPostItem>>> = {
  'post-rag-security': {
    en: {
      title: 'Security Risks in Enterprise RAG & Agents',
      summary: 'Implementing RAG architectures and autonomous agents introduces unique attack vectors. Discover the top 5 vulnerability vectors and battle-tested mitigation strategies.',
      category: 'Artificial Intelligence',
      readTime: '9 min read',
      tags: ['RAG', 'AISecurity', 'PromptInjection', 'DataLeakage', 'AIGovernance', 'LLM', 'AutonomousAgents', 'OWASP', 'Guardrails']
    },
    es: {
      title: 'Riesgos de Seguridad en RAG y Agentes',
      summary: 'La implementación de sistemas RAG y agentes autónomos abre nuevos vectores de ataque. Conoce los 5 principales riesgos y sus estrategias de mitigación y gobernanza.',
      category: 'Inteligencia Artificial',
      readTime: '9 min de lectura',
      tags: ['RAG', 'SeguridadEnIA', 'PromptInjection', 'FugaDeDatos', 'GobernanzaIA', 'LLM', 'AgentesAutonomos', 'OWASP', 'Guardrails']
    },
    fr: {
      title: 'Risques de Sécurité dans les Systèmes RAG et Agents',
      summary: 'Le déploiement de solutions RAG et d’agents autonomes crée des vulnérabilités inédites. Découvrez les 5 vecteurs d’attaque majeurs et les tactiques de mitigation.',
      category: 'Intelligence Artificielle',
      readTime: '9 min de lecture',
      tags: ['RAG', 'SécuritéIA', 'PromptInjection', 'FuiteDeDonnées', 'GouvernanceIA', 'LLM', 'AgentsAutonomes', 'OWASP', 'Guardrails']
    },
    it: {
      title: 'Rischi di Sicurezza nelle Architetture RAG e Agenti',
      summary: 'L’integrazione di sistemi RAG e agenti autonomi espande la superficie di attacco. Scopri i 5 principali vettori di vulnerabilità e le strategie di mitigazione.',
      category: 'Intelligenza Artificiale',
      readTime: '9 min di lettura',
      tags: ['RAG', 'SicurezzaIA', 'PromptInjection', 'DataLeakage', 'GovernanceIA', 'LLM', 'AgentiAutonomi', 'OWASP', 'Guardrails']
    }
  },
  'post-1': {
    en: {
      title: 'Designing Resilient RAG Architectures for Production',
      summary: 'Exploring re-ranking strategies, chunking optimization, and faithfulness benchmarking to eliminate hallucinations in enterprise systems.',
      category: 'Artificial Intelligence',
      readTime: '6 min read',
      tags: ['GenAI', 'RAG', 'Architecture', 'Python', 'VectorDB']
    },
    es: {
      title: 'Cómo Diseñar Arquitecturas RAG Resilientes para Producción',
      summary: 'Explorando estrategias de re-ranking, optimización de fragmentación y evaluación de fidelidad para evitar alucinaciones en sistemas empresariales.',
      category: 'Inteligencia Artificial',
      readTime: '6 min de lectura',
      tags: ['GenAI', 'RAG', 'Arquitectura', 'Python', 'VectorDB']
    },
    fr: {
      title: 'Concevoir des Architectures RAG Résilientes en Production',
      summary: 'Stratégies de re-ranking, découpage sémantique et métriques de fidélité pour éradiquer les hallucinations dans les environnements d’entreprise.',
      category: 'Intelligence Artificielle',
      readTime: '6 min de lecture',
      tags: ['GenAI', 'RAG', 'Architecture', 'Python', 'VectorDB']
    },
    it: {
      title: 'Come Progettare Architetture RAG Resilienti per la Produzione',
      summary: 'Esplorazione di re-ranking multi-livello, ottimizzazione del chunking e benchmark di fedeltà per prevenire allucinazioni nei sistemi aziendali.',
      category: 'Intelligenza Artificiale',
      readTime: '6 min di lettura',
      tags: ['GenAI', 'RAG', 'Architettura', 'Python', 'VectorDB']
    }
  },
  'post-2': {
    en: {
      title: 'Synergy Between Data, Technology, and Agility: The Golden Triangle',
      summary: 'Why AI and Data Science projects fail without seamless alignment across technical architecture, product specifications, and agile execution.',
      category: 'Software Engineering',
      readTime: '8 min read',
      tags: ['Agility', 'DataEngineering', 'ITManagement', 'DataModeling']
    },
    es: {
      title: 'Sinergia entre Datos, Tecnología y Agilidad: El Triángulo de Oro',
      summary: 'Por qué los proyectos de IA y Ciencia de Datos fracasan sin una alineación nítida entre arquitectura técnica, requisitos de producto y agilidad.',
      category: 'Ingeniería de Software',
      readTime: '8 min de lectura',
      tags: ['Agilidad', 'IngenieríaDeDatos', 'GestiónTI', 'Modelado']
    },
    fr: {
      title: 'Synergie entre Données, Technologie et Agilité : Le Triangle d’Or',
      summary: 'Pourquoi les projets d’IA échouent sans un alignement sans faille entre architecture logicielle, exigences produit et cycles agiles.',
      category: 'Ingénierie Logicielle',
      readTime: '8 min de lecture',
      tags: ['Agilité', 'IngénierieDonnées', 'ManagementIT', 'Modélisation']
    },
    it: {
      title: 'Sinergia tra Dati, Tecnologia e Agilità: Il Triangolo d’Oro',
      summary: 'Perché le iniziative di IA e Data Science falliscono in assenza di un allineamento chiaro tra architettura, requisiti di prodotto e agilità.',
      category: 'Ingegneria del Software',
      readTime: '8 min di lettura',
      tags: ['Agilità', 'IngegneriaDeiDati', 'GestioneIT', 'Modellazione']
    }
  },
  'post-3': {
    en: {
      title: 'Requirements Engineering for Autonomous Agent Systems',
      summary: 'A practical playbook for eliciting, documenting, and benchmarking non-deterministic behavior in LLM and multi-agent architectures.',
      category: 'Requirements & AI',
      readTime: '5 min read',
      tags: ['AIAgents', 'Requirements', 'ProductEngineering', 'LangGraph']
    },
    es: {
      title: 'Ingeniería de Requisitos para Sistemas con Agentes Autónomos',
      summary: 'Una guía práctica para elicitar, documentar y evaluar comportamientos no deterministas en arquitecturas basadas en LLM y agentes.',
      category: 'Requisitos e IA',
      readTime: '5 min de lectura',
      tags: ['AgentesIA', 'Requisitos', 'IngenieríaDeProducto', 'LangGraph']
    },
    fr: {
      title: 'Ingénierie des Exigences pour Systèmes à Agents Autonomes',
      summary: 'Un guide pratique pour recueillir, spécifier et valider les comportements non déterministes dans les architectures à base de LLM.',
      category: 'Exigences & IA',
      readTime: '5 min de lecture',
      tags: ['AgentsIA', 'Exigences', 'IngénierieProduit', 'LangGraph']
    },
    it: {
      title: 'Ingegneria dei Requisiti per Sistemi basati su Agenti Autonomi',
      summary: 'Una guida operativa per mappare, formalizzare e testare comportamenti non deterministici in architetture guidate da LLM e agenti.',
      category: 'Requisiti & IA',
      readTime: '5 min di lettura',
      tags: ['AgentiIA', 'Requisiti', 'ProductEngineering', 'LangGraph']
    }
  }
};

export const LOCALIZED_PORTFOLIO: Record<string, Partial<Record<Language, LocalizedPortfolioItem>>> = {
  'port-1': {
    en: {
      title: 'Enterprise Data Intelligence Platform & LLM Copilot',
      clientOrProject: 'Financial Services & Investment Banking',
      category: 'AI & Data Architecture',
      description: 'Enterprise Lakehouse architecture and intelligent compliance copilot with corporate RAG for regulatory audit and financial reporting.',
      results: [
        '65% reduction in compliance analysis turnaround time',
        'Over 10M documents indexed in real-time vector database',
        'Automated data governance compliant with banking regulatory standards'
      ]
    },
    es: {
      title: 'Plataforma de Inteligencia de Datos y Copiloto LLM',
      clientOrProject: 'Sector Financiero e Inversiones',
      category: 'IA y Arquitectura de Datos',
      description: 'Arquitectura Lakehouse y asistente inteligente con RAG corporativo para auditoría de informes normativos y cumplimiento financiero.',
      results: [
        'Reducción del 65% en el tiempo de análisis de compliance',
        'Más de 10 millones de documentos en base vectorial en tiempo real',
        'Gobernanza automatizada compatible con regulaciones bancarias'
      ]
    },
    fr: {
      title: 'Plateforme d’Intelligence des Données & Copilote LLM',
      clientOrProject: 'Secteur Financier & Banque d’Investissement',
      category: 'IA & Architecture de Données',
      description: 'Architecture Lakehouse et copilote intelligent avec RAG d’entreprise pour l’analyse des rapports réglementaires et la conformité bancaire.',
      results: [
        'Réduction de 65% du délai d’instruction de conformité',
        'Plus de 10 millions de documents indexés en base vectorielle temps réel',
        'Gouvernance automatisée conforme aux exigences bancaires strictes'
      ]
    },
    it: {
      title: 'Piattaforma di Data Intelligence & Copilota LLM',
      clientOrProject: 'Settore Finanziario & Banche d’Investimento',
      category: 'IA & Architettura dei Dati',
      description: 'Architettura Lakehouse e assistente cognitivo con RAG aziendale per la verifica dei report normativi e compliance bancaria.',
      results: [
        'Riduzione del 65% dei tempi di analisi di conformità',
        'Oltre 10 milioni di documenti vettorizzati in tempo reale',
        'Governance automatizzata pienamente allineata ai requisiti di vigilanza'
      ]
    }
  },
  'port-2': {
    en: {
      title: 'Agile Transformation & Legacy Architecture Modernization',
      clientOrProject: 'Enterprise Healthcare Corporation',
      category: 'Software Architecture & Agility',
      description: 'Complete re-engineering from a monolithic legacy system to event-driven microservices with real-time distributed synchronization.',
      results: [
        'System uptime elevated to 99.98%',
        'Feature delivery cycle compressed from 3 weeks to 2 days',
        'Trained and mentored over 80 software engineers and product managers'
      ]
    },
    es: {
      title: 'Transformación Ágil y Modernización de Arquitectura Legacy',
      clientOrProject: 'Gran Empresa del Sector Salud',
      category: 'Arquitectura de Software y Agilidad',
      description: 'Reformulación de ingeniería de software de un monolito legado a microservicios orientados a eventos con sincronización en tiempo real.',
      results: [
        'Aumento del uptime del sistema al 99.98%',
        'Reducción del ciclo de entrega de features de 3 semanas a 2 días',
        'Capacitación y mentoría a más de 80 ingenieros y product managers'
      ]
    },
    fr: {
      title: 'Transformation Agile & Modernisation d’Architecture Legacy',
      clientOrProject: 'Grand Groupe du Secteur de la Santé',
      category: 'Architecture Logicielle & Agilité',
      description: 'Refonte globale d’un système monolithique vers des microservices orientés événements avec synchronisation distribuée en temps réel.',
      results: [
        'Disponibilité du système portée à 99,98%',
        'Cycle de livraison de fonctionnalités réduit de 3 semaines à 2 jours',
        'Montée en compétences de plus de 80 ingénieurs et chefs de produit'
      ]
    },
    it: {
      title: 'Trasformazione Agile & Modernizzazione di Sistemi Legacy',
      clientOrProject: 'Grande Gruppo Ospedaliero e Sanitario',
      category: 'Architettura Software & Agilità',
      description: 'Reingegnerizzazione completa da architettura monolitica legacy a microservizi event-driven con sincronizzazione real-time.',
      results: [
        'Uptime del sistema incrementato al 99.98%',
        'Ciclo di rilascio delle feature ridotto da 3 settimane a 2 giorni',
        'Formazione e mentoring per oltre 80 software engineer e product manager'
      ]
    }
  }
};

export const LOCALIZED_EXPERIENCES: Record<string, Partial<Record<Language, LocalizedExperienceItem>>> = {
  'exp-1': {
    en: {
      role: 'Principal Consultant in AI, Data & Enterprise Architecture',
      period: '2021 - Present',
      description: 'Strategic advisory for market-leading corporations seeking to implement production GenAI systems, scalable data architectures, and agile transformation.',
      achievements: [
        'Engineered enterprise AI architectures for tier-one finance, education, and tech enterprises',
        'Mentored over 3,000 professionals across AI, Prompt Engineering, and Requirements Masterclasses',
        'Implemented enterprise data governance frameworks and high-performing data-driven cultures'
      ],
      skills: ['GenAI', 'Enterprise Architecture', 'Data Mesh', 'Executive Mentorship', 'Agile Governance']
    },
    es: {
      role: 'Consultora Especialista en IA, Datos y Arquitectura',
      period: '2021 - Presente',
      description: 'Consultoría estratégica para empresas líderes que implementan soluciones avanzadas de IA, arquitectura de datos escalable y agilidad corporativa.',
      achievements: [
        'Diseño de arquitecturas de IA para clientes en finanzas, educación y tecnología',
        'Mentoría a más de 3.000 profesionales en cursos y talleres de IA e Ingeniería de Requisitos',
        'Implementación de pipelines de gobernanza de datos y cultura data-driven'
      ],
      skills: ['GenAI', 'Arquitectura Empresarial', 'Data Mesh', 'Mentoría Ejecutiva', 'Gobernanza Ágil']
    },
    fr: {
      role: 'Consultante Experte en IA, Données et Architecture',
      period: '2021 - Présent',
      description: 'Conseil stratégique auprès d’entreprises majeures pour le déploiement d’architectures d’IA avancées, de plateformes de données et de gouvernance agile.',
      achievements: [
        'Conception d’architectures d’IA pour des leaders de la finance, de l’éducation et de la tech',
        'Mentorat de plus de 3 000 professionnels en formations d’IA et ingénierie des exigences',
        'Déploiement de cadres de gouvernance des données et diffusion de la culture data-driven'
      ],
      skills: ['GenAI', 'Architecture d’Entreprise', 'Data Mesh', 'Mentorat Exécutif', 'Gouvernance Agile']
    },
    it: {
      role: 'Consulente Esperta in IA, Dati e Architetture Software',
      period: '2021 - Presente',
      description: 'Consulenza strategica per aziende leader nell’adozione di intelligenza artificiale avanzata, architetture dati scalabili e agilità organizzativa.',
      achievements: [
        'Progettazione di architetture IA per clienti nei settori fintech, educational e tech',
        'Mentoring per oltre 3.000 professionisti in corsi, masterclass e workshop specialistici',
        'Implementazione di framework di data governance e consolidamento della cultura data-driven'
      ],
      skills: ['GenAI', 'Enterprise Architecture', 'Data Mesh', 'Executive Mentorship', 'Agile Governance']
    }
  },
  'exp-2': {
    en: {
      role: 'M.Sc. in Computer Science (AI Researcher)',
      period: '2019 - 2021',
      description: 'Academic research focused on Artificial Intelligence, Machine Learning, Natural Language Processing, and Computational Modeling.',
      achievements: [
        'Published scientific papers in peer-reviewed venues on applied Artificial Intelligence',
        'Developed advanced algorithmic pipelines for high-dimensional data analytics',
        'University teaching across Database Systems and Software Engineering courses'
      ],
      skills: ['Machine Learning', 'AI Research', 'Python', 'Data Science', 'Academic Publishing']
    },
    es: {
      role: 'Máster en Ciencias de la Computación (Investigadora en IA)',
      period: '2019 - 2021',
      description: 'Investigación académica enfocada en Inteligencia Artificial, Aprendizaje Automático, Procesamiento del Lenguaje Natural y Modelado Computacional.',
      achievements: [
        'Publicación de artículos científicos en el área de Inteligencia Artificial aplicada',
        'Desarrollo de modelos algorítmicos para el análisis de grandes volúmenes de datos',
        'Docencia universitaria en asignaturas de Bases de Datos e Ingeniería de Software'
      ],
      skills: ['Machine Learning', 'Investigación en IA', 'Python', 'Ciencia de Datos', 'Publicación Académica']
    },
    fr: {
      role: 'Master Recherche en Informatique (Chercheuse en IA)',
      period: '2019 - 2021',
      description: 'Recherche académique axée sur l’Intelligence Artificielle, le Machine Learning, le Traitement Automatique du Langage Naturel et la Modélisation.',
      achievements: [
        'Publication d’articles scientifiques dans le domaine de l’IA appliquée',
        'Conception de modèles algorithmiques pour l’analyse de données massives',
        'Enseignement universitaire en Systèmes de Gestion de Bases de Données et Génie Logiciel'
      ],
      skills: ['Machine Learning', 'Recherche en IA', 'Python', 'Data Science', 'Publications Scientifiques']
    },
    it: {
      role: 'Laurea Magistrale in Informatica (Ricercatrice in IA)',
      period: '2019 - 2021',
      description: 'Ricerca accademica orientata all’Intelligenza Artificiale, Machine Learning, Elaborazione del Linguaggio Naturale (NLP) e Modellazione Computazionale.',
      achievements: [
        'Pubblicazione di paper scientifici nel campo dell’Intelligenza Artificiale applicata',
        'Sviluppo di modelli algoritmici per l’elaborazione e l’analisi di grandi moli di dati',
        'Docenza universitaria in insegnamenti di Basi di Dati e Ingegneria del Software'
      ],
      skills: ['Machine Learning', 'Ricerca in IA', 'Python', 'Data Science', 'Pubblicazioni Accademiche']
    }
  },
  'exp-3': {
    en: {
      role: 'Software Architecture & Business Requirements Lead',
      period: '2016 - 2019',
      description: 'Technical leadership on enterprise software initiatives, architectural standards definition, and alignment between product and development teams.',
      achievements: [
        'Technical leadership on legacy monolith migrations to microservices architecture',
        'Engineered an internal framework for agile requirements elicitation and traceability'
      ],
      skills: ['Software Architecture', 'UML & Data Modeling', 'Scrum/Kanban', 'Microservices']
    },
    es: {
      role: 'Líder de Arquitectura de Software y Requisitos de Negocio',
      period: '2016 - 2019',
      description: 'Coordinación técnica de proyectos complejos, definición de patrones de arquitectura y sincronización entre equipos de producto y desarrollo.',
      achievements: [
        'Liderazgo técnico en la migración de sistemas heredados a microservicios',
        'Creación del framework interno de elicitación de requisitos ágiles'
      ],
      skills: ['Arquitectura de Software', 'Modelado UML y Datos', 'Scrum/Kanban', 'Microservicios']
    },
    fr: {
      role: 'Lead Architecte Logiciel et Exigences Métier',
      period: '2016 - 2019',
      description: 'Direction technique de projets logiciels d’envergure, définition des standards d’architecture et coordination entre équipes produit et tech.',
      achievements: [
        'Pilotage technique de la migration de monolithes vers une architecture de microservices',
        'Création d’un référentiel interne de recueil et traçabilité des exigences agiles'
      ],
      skills: ['Architecture Logicielle', 'Modélisation UML & Données', 'Scrum/Kanban', 'Microservices']
    },
    it: {
      role: 'Lead Software Architect & Responsabile Requisiti di Business',
      period: '2016 - 2019',
      description: 'Coordinamento tecnico di sistemi complessi, definizione di standard architetturali e allineamento tra team di prodotto e team di sviluppo.',
      achievements: [
        'Guida tecnica nella transizione da architetture monolitiche legacy a microservizi',
        'Creazione di un framework aziendale di elicitazione e tracciabilità dei requisiti agili'
      ],
      skills: ['Architettura Software', 'Modellazione Dati & UML', 'Scrum/Kanban', 'Microservices']
    }
  }
};

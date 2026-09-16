import { Language } from '../types';

export interface LocalizedCourseItem {
  title: string;
  subtitle: string;
  level: string;
  duration: string;
  description: string;
  syllabus: string[];
  skills: string[];
}

export const LOCALIZED_COURSES_DATA: Record<string, Partial<Record<Language, LocalizedCourseItem>>> = {
  'course-intro-ai-lit': {
    en: {
      title: 'Introduction to AI Literacy',
      subtitle: 'Fundamentals, Practical Fluency, and Critical Awareness for Daily Professional Life',
      level: 'Beginner',
      duration: '16 hours',
      description: 'A welcoming, hands-on, and transformative training to demystify Artificial Intelligence. Understand how generative models work, learn to use them safely, and cultivate critical discernment regarding impacts and opportunities.',
      syllabus: [
        'Module 1: What AI Is and Isn’t: Demystifying Generative Models and LLMs',
        'Module 2: The Tool Ecosystem: Text, Image, Analytics, and Productivity Applications',
        'Module 3: First Steps in Prompting: Formulating Clear and Effective Instructions',
        'Module 4: Critical Thinking: Spotting Hallucinations, Biases, Privacy, and Security',
        'Module 5: The Future of Work: Developing Continuous Fluency Without Fear of Automation'
      ],
      skills: ['AI Literacy', 'Generative AI', 'Critical Thinking', 'Productivity', 'Ethics & Security']
    },
    es: {
      title: 'Introducción a la Alfabetización en IA',
      subtitle: 'Fundamentos, Fluidez Práctica y Conciencia Crítica para el Día a Día Profesional',
      level: 'Principiante',
      duration: '16 horas',
      description: 'Una formación cercana, práctica y transformadora para desmitificar la Inteligencia Artificial. Comprende cómo funcionan los modelos generativos, úsalos con seguridad y desarrolla juicio crítico sobre impactos y oportunidades.',
      syllabus: [
        'Módulo 1: Qué es y qué no es la IA: Desmitificando Modelos Generativos y LLMs',
        'Módulo 2: Ecosistema de Herramientas: Aplicaciones de Texto, Imagen, Análisis y Productividad',
        'Módulo 3: Primeros Pasos en Prompts: Cómo Formular Instrucciones Claras y Efectivas',
        'Módulo 4: Pensamiento Crítico: Identificación de Alucinaciones, Sesgos, Privacidad y Seguridad',
        'Módulo 5: El Futuro del Trabajo: Desarrollando Fluidez Continua sin Miedo a la Automatización'
      ],
      skills: ['Alfabetización en IA', 'IA Generativa', 'Pensamiento Crítico', 'Productividad', 'Ética y Seguridad']
    },
    fr: {
      title: 'Introduction à la Littératie en IA',
      subtitle: 'Fondamentaux, Maîtrise Pratique et Esprit Critique pour le Quotidien Professionnel',
      level: 'Débutant',
      duration: '16 heures',
      description: 'Une formation accessible, pratique et transformatrice pour démystifier l’Intelligence Artificielle. Comprenez le fonctionnement des modèles génératifs, apprenez à les utiliser en toute sécurité et développez un discernement critique.',
      syllabus: [
        'Module 1 : Ce qu’est et n’est pas l’IA : Démystifier les Modèles Génératifs et LLMs',
        'Module 2 : L’Écosystème des Outils : Applications Texte, Image, Analyse et Productivité',
        'Module 3 : Premiers Pas en Prompting : Formuler des Instructions Claires et Efficaces',
        'Module 4 : Pensée Critique : Identifier Hallucinations, Biais, RGPD et Sécurité',
        'Module 5 : L’Avenir du Travail : Développer une Maîtrise Continue sans Peur de l’Automatisation'
      ],
      skills: ['Littératie en IA', 'IA Générative', 'Pensée Critique', 'Productivité', 'Éthique & Sécurité']
    },
    it: {
      title: 'Introduzione all’Alfabetizzazione all’IA',
      subtitle: 'Fondamenti, Padronanza Pratica e Consapevolezza Critica per la Vita Professionale',
      level: 'Principiante',
      duration: '16 ore',
      description: 'Un percorso formativo accogliente, pratico e trasformativo per demistificare l’Intelligenza Artificiale. Comprendi il funzionamento dei modelli generativi, utilizzali in sicurezza e sviluppa discernimento critico su opportunità e rischi.',
      syllabus: [
        'Modulo 1: Cos’è e cosa non è l’IA: Demistificare Modelli Generativi e LLM',
        'Modulo 2: L’Ecosistema degli Strumenti: Testo, Immagini, Analitica e Produttività',
        'Modulo 3: Primi Passi nel Prompting: Formulare Istruzioni Chiare ed Efficaci',
        'Modulo 4: Pensiero Critico: Riconoscere Allucinazioni, Bias, Privacy e Sicurezza',
        'Modulo 5: Il Futuro del Lavoro: Coltivare Competenze Continue senza Timore dell’Automazione'
      ],
      skills: ['Alfabetizzazione all’IA', 'IA Generativa', 'Pensiero Critico', 'Produttività', 'Etica & Sicurezza']
    }
  },
  'course-prompt-eng': {
    en: {
      title: 'Prompt Engineering',
      subtitle: 'Advanced Reasoning Patterns, Few-Shot, ReAct, and LLM Structuring',
      level: 'Intermediate',
      duration: '20 hours',
      description: 'Master rigorous techniques to instruct Large Language Models (LLMs). Learn reasoning prompt design, structured outputs in JSON/SQL, Chain-of-Thought, meta-prompts, and defense against prompt injection attacks.',
      syllabus: [
        'Module 1: LLM Fundamentals, Attention Windows, and Token Mechanics',
        'Module 2: Foundational Patterns: Zero-Shot, Few-Shot, Role Prompting, and Delimiters',
        'Module 3: Advanced Reasoning Patterns: Chain-of-Thought, Tree-of-Thoughts, and ReAct',
        'Module 4: Prompts for Structured Outputs, Function Calling, and Tool APIs',
        'Module 5: Systematic Evaluation, Guardrails, and Defense Against Jailbreaks and Injections'
      ],
      skills: ['Prompt Engineering', 'Chain-of-Thought', 'Function Calling', 'LLM Guardrails', 'Meta-Prompting']
    },
    es: {
      title: 'Ingeniería de Prompt',
      subtitle: 'Patrones Avanzados de Razonamiento, Few-Shot, ReAct y Estructuración de LLMs',
      level: 'Intermedio',
      duration: '20 horas',
      description: 'Domina técnicas rigurosas para instruir Grandes Modelos de Lenguaje (LLMs). Aprende elaboración de prompts de razonamiento, salidas estructuradas en JSON/SQL, Chain-of-Thought, meta-prompts y prevención de inyecciones de prompt.',
      syllabus: [
        'Módulo 1: Fundamentos de LLMs, Ventanas de Atención y Mecánica de Tokens',
        'Módulo 2: Patrones Fundamentales: Zero-Shot, Few-Shot, Role Prompting y Delimitadores',
        'Módulo 3: Patrones Avanzados de Razonamiento: Chain-of-Thought, Tree-of-Thoughts y ReAct',
        'Módulo 4: Prompts para Salidas Estructuradas, Llamadas de Función (Function Calling) y APIs',
        'Módulo 5: Evaluación Sistemática, Guardrails y Defensa contra Jailbreaks e Inyecciones'
      ],
      skills: ['Ingeniería de Prompt', 'Chain-of-Thought', 'Function Calling', 'LLM Guardrails', 'Meta-Prompting']
    },
    fr: {
      title: 'Ingénierie de Prompt',
      subtitle: 'Modèles de Raisonnement Avancés, Few-Shot, ReAct et Structuration des LLMs',
      level: 'Intermédiaire',
      duration: '20 heures',
      description: 'Maîtrisez les techniques rigoureuses pour guider les Grands Modèles de Langage (LLMs). Apprenez la conception de prompts de raisonnement, sorties structurées en JSON/SQL, Chain-of-Thought, méta-prompts et protection contre l’injection de prompts.',
      syllabus: [
        'Module 1 : Fondamentaux des LLMs, Fenêtres d’Attention et Mécanique des Tokens',
        'Module 2 : Modèles Fondamentaux : Zero-Shot, Few-Shot, Attribution de Rôle et Délimiteurs',
        'Module 3 : Raisonnement Avancé : Chain-of-Thought, Tree-of-Thoughts et ReAct',
        'Module 4 : Prompts pour Sorties Structurées, Appels de Fonctions (Function Calling) et APIs',
        'Module 5 : Évaluation Systématique, Guardrails et Défense contre Jailbreaks et Injections'
      ],
      skills: ['Ingénierie de Prompt', 'Chain-of-Thought', 'Function Calling', 'Guardrails LLM', 'Méta-Prompting']
    },
    it: {
      title: 'Prompt Engineering',
      subtitle: 'Pattern Avanzati di Ragionamento, Few-Shot, ReAct e Strutturazione di LLM',
      level: 'Intermedio',
      duration: '20 ore',
      description: 'Padroneggia tecniche rigorose per istruire i Large Language Model (LLM). Impara a formulare prompt di ragionamento, output strutturati in JSON/SQL, Chain-of-Thought, meta-prompt e difese contro il prompt injection.',
      syllabus: [
        'Modulo 1: Fondamenti dei LLM, Finestre di Attenzione e Meccanica dei Token',
        'Modulo 2: Pattern Fondamentali: Zero-Shot, Few-Shot, Ruolo e Delimitatori',
        'Modulo 3: Pattern di Ragionamento Avanzato: Chain-of-Thought, Tree-of-Thoughts e ReAct',
        'Modulo 4: Prompt per Output Strutturati, Chiamata di Funzioni (Function Calling) e API',
        'Modulo 5: Valutazione Sistematica, Guardrail e Difesa contro Jailbreak e Iniezioni'
      ],
      skills: ['Prompt Engineering', 'Chain-of-Thought', 'Function Calling', 'LLM Guardrails', 'Meta-Prompting']
    }
  },
  'course-context-eng': {
    en: {
      title: 'Context Engineering',
      subtitle: 'Dynamic Curation, Advanced RAG, and Memory Management for Long-Context Models',
      level: 'Advanced',
      duration: '28 hours',
      description: 'Go beyond the isolated prompt: learn how to select, filter, compress, and enrich the context window of language models. Covers advanced RAG strategies, episodic/semantic memory, and token cost/latency optimization.',
      syllabus: [
        'Module 1: Limits, Costs, and Mechanics of Long-Context Windows',
        'Module 2: Semantic Chunking Strategies, Enriched Metadata, and Hybrid Indexing',
        'Module 3: Re-ranking, Context Compression, and Mitigating the "Lost in the Middle" Effect',
        'Module 4: Memory Architectures for Agents: Short-Term vs Long-Term Memory',
        'Module 5: Context Governance, Security, and Compliance in Enterprise Data'
      ],
      skills: ['Context Engineering', 'Advanced RAG', 'Long-Context Window', 'Semantic Chunking', 'Memory Architecture']
    },
    es: {
      title: 'Ingeniería de Contexto',
      subtitle: 'Curaduría Dinámica, RAG Avanzado y Gestión de Memoria para Modelos de Contexto Largo',
      level: 'Avanzado',
      duration: '28 horas',
      description: 'Ve más allá del prompt aislado: aprende a seleccionar, filtrar, comprimir y enriquecer la ventana de contexto de los modelos de lenguaje. Incluye estrategias avanzadas de RAG, memoria episódica/semántica y optimización de costes y latencia.',
      syllabus: [
        'Módulo 1: Límites, Costes y Dinámica de Modelos de Ventana Larga (Long-Context)',
        'Módulo 2: Estrategias de Fragmentación Semántica, Metadatos Enriquecidos e Indexación Híbrida',
        'Módulo 3: Re-ranking, Compresión de Contexto y Mitigación del Efecto "Lost in the Middle"',
        'Módulo 4: Arquitecturas de Memoria para Agentes: Memoria a Corto y Largo Plazo',
        'Módulo 5: Gobernanza de Contexto, Seguridad y Cumplimiento en Datos Corporativos'
      ],
      skills: ['Ingeniería de Contexto', 'RAG Avanzado', 'Ventana de Contexto Largo', 'Chunking Semántico', 'Arquitectura de Memoria']
    },
    fr: {
      title: 'Ingénierie de Contexte',
      subtitle: 'Curation Dynamique, RAG Avancé et Gestion de la Mémoire pour Modèles à Contexte Long',
      level: 'Avancé',
      duration: '28 heures',
      description: 'Allez au-delà du prompt isolé : apprenez à sélectionner, filtrer, compresser et enrichir la fenêtre de contexte des modèles de langage. Comprend les stratégies RAG avancées, mémoire épisodique/sémantique et optimisation des coûts et latences.',
      syllabus: [
        'Module 1 : Limites, Coûts et Dynamique des Modèles à Contexte Étendu (Long-Context)',
        'Module 2 : Découpage Sémantique, Métadonnées Enrichies et Indexation Hybride',
        'Module 3 : Re-ranking, Compression de Contexte et Atténuation de l’Effet "Lost in the Middle"',
        'Module 4 : Architectures de Mémoire pour Agents : Court Terme vs Long Terme',
        'Module 5 : Gouvernance du Contexte, Sécurité et Conformité des Données d’Entreprise'
      ],
      skills: ['Ingénierie de Contexte', 'RAG Avancé', 'Long Contexte', 'Découpage Sémantique', 'Architecture de Mémoire']
    },
    it: {
      title: 'Context Engineering',
      subtitle: 'Curatela Dinamica, RAG Avanzato e Gestione della Memoria per Modelli a Lungo Contesto',
      level: 'Avanzato',
      duration: '28 ore',
      description: 'Vai oltre il singolo prompt: impara a selezionare, filtrare, comprimere e arricchire la finestra di contesto dei modelli linguistici. Include strategie avanzate di RAG, memoria episodica/semantica e ottimizzazione di costi e latenza.',
      syllabus: [
        'Modulo 1: Limiti, Costi e Dinamiche dei Modelli con Finestra Estesa (Long-Context)',
        'Modulo 2: Chunking Semantico, Metadati Arricchiti e Indicizzazione Ibrida',
        'Modulo 3: Re-ranking, Compressione del Contesto e Mitigazione dell’Effetto "Lost in the Middle"',
        'Modulo 4: Architetture di Memoria per Agenti: Memoria a Breve e Lungo Termine',
        'Modulo 5: Governance del Contesto, Sicurezza e Conformità nei Dati Aziendali'
      ],
      skills: ['Context Engineering', 'RAG Avanzato', 'Long-Context Window', 'Chunking Semantico', 'Architettura di Memoria']
    }
  },
  'course-ai-arch': {
    en: {
      title: 'AI Solution Architecture & Engineering',
      subtitle: 'From Prototype to Scalable Production-Ready Products',
      level: 'Advanced',
      duration: '40 hours',
      description: 'Learn to design resilient enterprise systems powered by LLMs, advanced RAG pipelines, autonomous multi-agents, and real-time observability with modern orchestration frameworks.',
      syllabus: [
        'Module 1: AI & GenAI-Driven Architecture Fundamentals',
        'Module 2: Design Patterns for RAG (Retrieval-Augmented Generation) & Embeddings',
        'Module 3: Multi-Agent Autonomous Architectures with LangGraph and AutoGen',
        'Module 4: Governance, MLOps, LLMOps, Cost Metrics, and Latency Optimization',
        'Module 5: Hands-on Case Study: Enterprise Cloud-Native Financial LLM Application'
      ],
      skills: ['GenAI Architecture', 'RAG Pipelines', 'Vector Databases', 'LangChain/LangGraph', 'LLMOps']
    },
    es: {
      title: 'Arquitectura e Ingeniería de Soluciones con IA',
      subtitle: 'Del Modelo al Producto Escalable en Producción',
      level: 'Avanzado',
      duration: '40 horas',
      description: 'Aprende a diseñar sistemas resilientes integrados con LLMs, RAG avanzado, agentes autónomos y monitorización en tiempo real con orquestación moderna.',
      syllabus: [
        'Módulo 1: Fundamentos de Arquitectura Orientada a IA y GenAI',
        'Módulo 2: Patrones de Diseño para RAG (Retrieval-Augmented Generation) y Embeddings',
        'Módulo 3: Construcción de Agentes Autónomos Multi-Agente con LangGraph y AutoGen',
        'Módulo 4: Gobernanza, MLOps, LLMOps y Métricas de Coste y Latencia',
        'Módulo 5: Caso Práctico: Aplicación Financiera con LLM en la Nube'
      ],
      skills: ['Arquitectura GenAI', 'Pipelines RAG', 'Bases de Datos Vectoriales', 'LangChain/LangGraph', 'LLMOps']
    },
    fr: {
      title: 'Architecture et Ingénierie de Solutions d’IA',
      subtitle: 'Du Modèle au Produit Évolutif en Production',
      level: 'Avancé',
      duration: '40 heures',
      description: 'Apprenez à concevoir des systèmes résilients intégrant LLMs, RAG avancé, agents autonomes et surveillance en temps réel avec orchestration moderne.',
      syllabus: [
        'Module 1 : Fondamentaux d’Architecture Orientée IA et GenAI',
        'Module 2 : Patrons de Conception pour RAG (Retrieval-Augmented Generation) et Plongements',
        'Module 3 : Conception d’Agents Autonomes Multi-Agents avec LangGraph et AutoGen',
        'Module 4 : Gouvernance, MLOps, LLMOps, Métriques de Coût et de Latence',
        'Module 5 : Étude de Cas Pratique : Application Financière avec LLM dans le Cloud'
      ],
      skills: ['Architecture GenAI', 'Pipelines RAG', 'Bases Vectorielles', 'LangChain/LangGraph', 'LLMOps']
    },
    it: {
      title: 'Architettura e Ingegneria di Soluzioni con IA',
      subtitle: 'Dal Modello al Prodotto Scalabile in Produzione',
      level: 'Avanzato',
      duration: '40 ore',
      description: 'Impara a progettare sistemi resilienti integrati con LLM, pipeline RAG avanzate, agenti autonomi multi-agente e monitoraggio in tempo reale con orchestrazione moderna.',
      syllabus: [
        'Modulo 1: Fondamenti di Architettura Orientata all’IA e alla GenAI',
        'Modulo 2: Pattern di Progettazione per RAG (Retrieval-Augmented Generation) ed Embedding',
        'Modulo 3: Creazione di Agenti Autonomi Multi-Agente con LangGraph e AutoGen',
        'Modulo 4: Governance, MLOps, LLMOps e Metriche di Costo e Latenza',
        'Modulo 5: Caso Studio Pratico: Applicazione Finanziaria Cloud-Native con LLM'
      ],
      skills: ['GenAI Architecture', 'Pipeline RAG', 'Database Vettoriali', 'LangChain/LangGraph', 'LLMOps']
    }
  },
  'course-data-gov': {
    en: {
      title: 'Data Modeling & Governance for Innovation',
      subtitle: 'Building Solid Foundations for Analytics, Machine Learning, and Enterprise AI',
      level: 'Intermediate',
      duration: '32 hours',
      description: 'Master structuring Data Lakes, Lakehouses, data ontologies, and automated metadata catalogs with a direct focus on business value and regulatory compliance.',
      syllabus: [
        'Module 1: Data Mesh vs Lakehouse: Selecting the Ideal Architectural Pattern',
        'Module 2: Modern Dimensional Modeling and Data Vault 2.0',
        'Module 3: Active Data Governance and Automated Data Quality Frameworks',
        'Module 4: Data Lineage, Privacy, and Regulatory Compliance (LGPD / GDPR in AI)'
      ],
      skills: ['Data Modeling', 'Data Governance', 'Lakehouse Architecture', 'Data Quality', 'dbt & Airflow']
    },
    es: {
      title: 'Modelado y Gobernanza de Datos para la Innovación',
      subtitle: 'Construyendo Cimientos Sólidos para Analytics y Machine Learning',
      level: 'Intermedio',
      duration: '32 horas',
      description: 'Domina el arte de estructurar Data Lakes, Lakehouses, ontologías de datos y catálogos automatizados con foco en valor de negocio y cumplimiento normativo.',
      syllabus: [
        'Módulo 1: Data Mesh vs Lakehouse: Eligiendo el Modelo Ideal',
        'Módulo 2: Modelado Dimensional Moderno y Data Vault 2.0',
        'Módulo 3: Gobernanza Activa y Calidad de Datos Automatizada',
        'Módulo 4: Linaje de Datos y Privacidad (LGPD / GDPR en IA)'
      ],
      skills: ['Modelado de Datos', 'Gobernanza de Datos', 'Arquitectura Lakehouse', 'Calidad de Datos', 'dbt & Airflow']
    },
    fr: {
      title: 'Modélisation et Gouvernance des Données pour l’Innovation',
      subtitle: 'Bâtir des Fondations Solides pour l’Analytics et le Machine Learning',
      level: 'Intermédiaire',
      duration: '32 heures',
      description: 'Maîtrisez la structuration de Data Lakes, Lakehouses, ontologies et catalogues automatisés avec un focus sur la valeur métier et la conformité réglementaire.',
      syllabus: [
        'Module 1 : Data Mesh vs Lakehouse : Choisir le Modèle Idéal',
        'Module 2 : Modélisation Dimensionnelle Moderne et Data Vault 2.0',
        'Module 3 : Gouvernance Active et Qualité des Données Automatisée',
        'Module 4 : Traçabilité des Données et Confidentialité (RGPD / LGPD en IA)'
      ],
      skills: ['Modélisation de Données', 'Gouvernance des Données', 'Architecture Lakehouse', 'Qualité des Données', 'dbt & Airflow']
    },
    it: {
      title: 'Modellazione e Governance dei Dati per l’Innovazione',
      subtitle: 'Costruire Fondamenta Solide per Analytics e Machine Learning',
      level: 'Intermedio',
      duration: '32 ore',
      description: 'Padroneggia la progettazione di Data Lake, Lakehouse, ontologie dei dati e cataloghi automatizzati con forte enfasi sul valore di business e sulla conformità normativa.',
      syllabus: [
        'Modulo 1: Data Mesh vs Lakehouse: Scegliere il Modello Ideale',
        'Modulo 2: Modellazione Dimensionale Moderna e Data Vault 2.0',
        'Modulo 3: Governance Attiva e Controllo Automatizzato della Qualità dei Dati',
        'Modulo 4: Data Lineage e Privacy (GDPR / LGPD nell’IA)'
      ],
      skills: ['Data Modeling', 'Data Governance', 'Lakehouse Architecture', 'Data Quality', 'dbt & Airflow']
    }
  },
  'course-req-ai': {
    en: {
      title: 'Requirements Engineering & Product Management with AI',
      subtitle: 'Bridging Business Expectations and Technical Model Feasibility',
      level: 'Intermediate',
      duration: '24 hours',
      description: 'Learn to elicit, specify, and validate non-functional and probabilistic requirements for Artificial Intelligence products, bridging product, data science, and engineering teams.',
      syllabus: [
        'Module 1: Requirements Elicitation for Predictive and Generative AI Models',
        'Module 2: Business Success Metrics vs Algorithmic Model Metrics',
        'Module 3: User Stories and Epics Tailored for Data and AI Initiatives',
        'Module 4: Risk Mitigation, Bias Auditing, and Explainability (XAI) in Practice'
      ],
      skills: ['Product Ownership', 'AI Requirements', 'Agile Governance', 'Business Analysis', 'UX for AI']
    },
    es: {
      title: 'Ingeniería de Requisitos y Gestión de Productos con IA',
      subtitle: 'Alineando Expectativas de Negocio con Capacidad Técnica',
      level: 'Intermedio',
      duration: '24 horas',
      description: 'Aprende a mapear requisitos no funcionales específicos de Inteligencia Artificial, alineando equipos de producto, ciencia de datos e ingeniería de software.',
      syllabus: [
        'Módulo 1: Elicitación de Requisitos para Modelos Predictivos y Generativos',
        'Módulo 2: Métricas de Éxito de Negocio vs Métricas del Modelo',
        'Módulo 3: Historias de Usuario y Épicas para Proyectos de Datos e IA',
        'Módulo 4: Mitigación de Riesgos, Sesgo y Explicabilidad en IA'
      ],
      skills: ['Product Ownership', 'Requisitos de IA', 'Gobernanza Ágil', 'Análisis de Negocio', 'UX para IA']
    },
    fr: {
      title: 'Ingénierie des Exigences et Gestion de Produits avec l’IA',
      subtitle: 'Aligner les Attentes Métier avec la Faisabilité Technique',
      level: 'Intermédiaire',
      duration: '24 heures',
      description: 'Apprenez à définir et valider les exigences non fonctionnelles propres à l’IA, en alignant les équipes produit, data science et ingénierie logicielle.',
      syllabus: [
        'Module 1 : Recueil des Exigences pour Modèles Prédictifs et Génératifs',
        'Module 2 : Métriques de Succès Métier vs Métriques d’Évaluation des Modèles',
        'Module 3 : User Stories et Epics pour Projets de Données et d’IA',
        'Module 4 : Gestion des Risques, Audit des Biais et Explicabilité (XAI)'
      ],
      skills: ['Product Ownership', 'Exigences IA', 'Gouvernance Agile', 'Analyse Métier', 'UX pour l’IA']
    },
    it: {
      title: 'Ingegneria dei Requisiti e Gestione di Prodotti con IA',
      subtitle: 'Allineare le Aspettative di Business con la Fattibilità Tecnica',
      level: 'Intermedio',
      duration: '24 ore',
      description: 'Impara a definire requisiti probabilistici e non funzionali per prodotti basati su Intelligenza Artificiale, connettendo team di prodotto, data science e ingegneria del software.',
      syllabus: [
        'Modulo 1: Elicitazione dei Requisiti per Modelli Predittivi e Generativi',
        'Modulo 2: Metriche di Business vs Metriche di Valutazione dei Modelli',
        'Modulo 3: User Story ed Epiche per Iniziative di Dati e IA',
        'Modulo 4: Mitigazione dei Rischi, Analisi dei Bias ed Esplicabilità (XAI)'
      ],
      skills: ['Product Ownership', 'Requisiti IA', 'Agile Governance', 'Business Analysis', 'UX per IA']
    }
  },
  'course-soft-arch': {
    en: {
      title: 'Modern Software Architecture & Event-Driven Microservices',
      subtitle: 'High Availability, Scalability, and Resilient Distributed Systems',
      level: 'Advanced',
      duration: '36 hours',
      description: 'Build enterprise distributed architectures using Apache Kafka, CQRS, Event Sourcing, container orchestration, and robust observability patterns.',
      syllabus: [
        'Module 1: Practical Domain-Driven Design (DDD) Principles',
        'Module 2: Event-Driven Architecture with Kafka and RabbitMQ',
        'Module 3: CQRS and Event Sourcing Implementation Patterns',
        'Module 4: Full-Stack Observability with OpenTelemetry, Prometheus, and Grafana'
      ],
      skills: ['DDD', 'Event-Driven', 'Kafka', 'Microservices', 'Observability']
    },
    es: {
      title: 'Arquitectura de Software Moderna y Microservicios Event-Driven',
      subtitle: 'Sistemas Distribuidos y Alta Disponibilidad',
      level: 'Avanzado',
      duration: '36 horas',
      description: 'Construye arquitecturas distribuidas y resilientes utilizando Apache Kafka, CQRS, Event Sourcing y contenerización en microservicios.',
      syllabus: [
        'Módulo 1: Principios de Domain-Driven Design (DDD) en la Práctica',
        'Módulo 2: Arquitectura Event-Driven con Kafka y RabbitMQ',
        'Módulo 3: Patrones CQRS y Event Sourcing',
        'Módulo 4: Observabilidad con OpenTelemetry, Prometheus y Grafana'
      ],
      skills: ['DDD', 'Event-Driven', 'Kafka', 'Microservicios', 'Observabilidad']
    },
    fr: {
      title: 'Architecture Logicielle Moderne et Microservices Event-Driven',
      subtitle: 'Systèmes Distribués, Haute Disponibilité et Résilience',
      level: 'Avancé',
      duration: '36 heures',
      description: 'Construisez des architectures distribuées résilientes à l’aide d’Apache Kafka, CQRS, Event Sourcing et conteneurisation de microservices.',
      syllabus: [
        'Module 1 : Principes Pratiques de Domain-Driven Design (DDD)',
        'Module 2 : Architecture Orientée Événements avec Kafka et RabbitMQ',
        'Module 3 : Patrons CQRS et Event Sourcing',
        'Module 4 : Observabilité avec OpenTelemetry, Prometheus et Grafana'
      ],
      skills: ['DDD', 'Event-Driven', 'Kafka', 'Microservices', 'Observabilité']
    },
    it: {
      title: 'Architettura Software Moderna e Microservizi Event-Driven',
      subtitle: 'Sistemi Distribuiti, Alta Disponibilità e Resilienza',
      level: 'Avanzato',
      duration: '36 ore',
      description: 'Costruisci architetture distribuite scalabili con Apache Kafka, CQRS, Event Sourcing, container e standard moderni di osservabilità.',
      syllabus: [
        'Modulo 1: Principi Pratici di Domain-Driven Design (DDD)',
        'Modulo 2: Architettura Event-Driven con Kafka e RabbitMQ',
        'Modulo 3: Pattern CQRS ed Event Sourcing',
        'Modulo 4: Osservabilità Completa con OpenTelemetry, Prometheus e Grafana'
      ],
      skills: ['DDD', 'Event-Driven', 'Kafka', 'Microservices', 'Observability']
    }
  },
  'course-intro-rags': {
    en: {
      title: 'Introduction to RAGs',
      subtitle: 'Retrieval-Augmented Generation: from Theory to Hands-on Vector Databases',
      level: 'Intermediate',
      duration: '20 hours',
      description: 'Master the end-to-end RAG pipeline. Learn how to connect LLMs to enterprise data using embeddings, semantic chunking, vector databases, hybrid search, and cross-encoder re-ranking.',
      syllabus: [
        'Module 1: RAG Fundamentals: Why Fine-Tuning Isn’t Everything & How Dynamic Retrieval Works',
        'Module 2: Vectorization & Embeddings: Selecting and Benchmarking Semantic Models',
        'Module 3: Chunking Strategies & Vector Indexing (Chroma, Pinecone, Qdrant, PGVector)',
        'Module 4: Hybrid Search (Dense + Sparse/BM25) and Semantic Re-Ranking with Cross-Encoders',
        'Module 5: RAG Evaluation with Ragas Metrics, Hallucination Prevention, and Guardrails'
      ],
      skills: ['RAG', 'Embeddings', 'Vector Databases', 'ChromaDB', 'Hybrid Search', 'Ragas & Evaluation']
    },
    es: {
      title: 'Introducción a las RAGs',
      subtitle: 'Generación Aumentada por Recuperación: de la Teoría a la Práctica con Bases Vectoriales',
      level: 'Intermedio',
      duration: '20 horas',
      description: 'Domina el pipeline completo de RAG. Aprende a conectar LLMs a datos empresariales usando embeddings, fragmentación semántica, bases vectoriales, búsqueda híbrida y re-ranking semántico.',
      syllabus: [
        'Módulo 1: Fundamentos de RAG: Por qué Fine-Tuning no resuelve todo y cómo opera la Recuperación Dinámica',
        'Módulo 2: Vectorización y Embeddings: Selección y Evaluación de Modelos Semánticos',
        'Módulo 3: Estrategias de Chunking e Indexación en Bases Vectoriales (Chroma, Pinecone, Qdrant, PGVector)',
        'Módulo 4: Técnicas de Búsqueda Híbrida (Dense + BM25) y Re-ranking Semántico con Cross-Encoders',
        'Módulo 5: Evaluación de RAG con Métricas Ragas, Mitigación de Alucinaciones y Guardrails'
      ],
      skills: ['RAG', 'Embeddings', 'Bases de Datos Vectoriales', 'ChromaDB', 'Búsqueda Híbrida', 'Ragas & Evaluación']
    },
    fr: {
      title: 'Introduction aux RAGs',
      subtitle: 'Génération Augmentée par Récupération : de la Théorie à la Pratique avec Bases Vectorielles',
      level: 'Intermédiaire',
      duration: '20 heures',
      description: 'Maîtrisez le pipeline complet de RAG. Connectez les LLMs aux données d’entreprise avec embeddings, découpage sémantique, bases vectorielles, recherche hybride et re-ranking.',
      syllabus: [
        'Module 1 : Fondamentaux du RAG : Pourquoi le Fine-Tuning ne fait pas tout et rôle de la Récupération',
        'Module 2 : Vectorisation et Plongements : Sélection et Évaluation des Modèles Sémantiques',
        'Module 3 : Stratégies de Chunking et Indexation en Bases Vectorielles (Chroma, Pinecone, Qdrant, PGVector)',
        'Module 4 : Recherche Hybride (Dense + Sparse/BM25) et Re-ranking Sémantique avec Cross-Encoders',
        'Module 5 : Évaluation du RAG avec Métriques Ragas, Réduction des Hallucinations et Guardrails'
      ],
      skills: ['RAG', 'Embeddings', 'Bases Vectorielles', 'ChromaDB', 'Recherche Hybride', 'Ragas & Évaluation']
    },
    it: {
      title: 'Introduzione ai RAG',
      subtitle: 'Generazione Aumentata dal Recupero: dalla Teoria alla Pratica con Database Vettoriali',
      level: 'Intermedio',
      duration: '20 ore',
      description: 'Padroneggia l’intera pipeline RAG. Connetti i modelli LLM ai dati aziendali con embeddings, chunking semantico, database vettoriali, ricerca ibrida e re-ranking.',
      syllabus: [
        'Modulo 1: Fondamenti del RAG: Perché il Fine-Tuning non basta e come funziona il Recupero Dinamico',
        'Modulo 2: Vettorizzazione ed Embeddings: Selezione e Benchmark dei Modelli Semantici',
        'Modulo 3: Strategie di Chunking e Indicizzazione in Database Vettoriali (Chroma, Pinecone, Qdrant, PGVector)',
        'Modulo 4: Tecniche di Ricerca Ibrida (Dense + Sparse/BM25) e Re-ranking Semantico con Cross-Encoder',
        'Modulo 5: Valutazione di Pipeline RAG con Metriche Ragas, Prevenzione Allucinazioni e Guardrail'
      ],
      skills: ['RAG', 'Embeddings', 'Database Vettoriali', 'ChromaDB', 'Ricerca Ibrida', 'Ragas & Valutazione']
    }
  },
  'course-intro-langchain': {
    en: {
      title: 'Introduction to LangChain',
      subtitle: 'Language Model Orchestration, Chains, Memory, and Data Connectors',
      level: 'Intermediate',
      duration: '24 hours',
      description: 'Build enterprise-grade AI applications with the LangChain ecosystem. Master LCEL (LangChain Expression Language), modular chains, autonomous agents with custom tools, and conversational state graphs.',
      syllabus: [
        'Module 1: LangChain Architecture & LangChain Expression Language (LCEL)',
        'Module 2: Core Components: PromptTemplates, ChatModels, Output Parsers, and Callbacks',
        'Module 3: Document Loaders, Text Splitters, and Integrated Vector Retrievers',
        'Module 4: Building Custom Tools and Reasoning Agents (ReAct Pattern)',
        'Module 5: Transition to LangGraph: Stateful Graphs and Resilient Multi-Agent Workflows'
      ],
      skills: ['LangChain', 'LCEL', 'Autonomous Agents', 'LangGraph', 'Python/TypeScript', 'LLM Integration']
    },
    es: {
      title: 'Introducción a LangChain',
      subtitle: 'Orquestación de Modelos de Lenguaje, Chains, Memoria y Conectores de Datos',
      level: 'Intermedio',
      duration: '24 horas',
      description: 'Construye aplicaciones inteligentes con LangChain. Domina LCEL, cadenas modulares, agentes autónomos con herramientas personalizadas y memoria conversacional.',
      syllabus: [
        'Módulo 1: Arquitectura LangChain y LangChain Expression Language (LCEL)',
        'Módulo 2: Componentes Core: PromptTemplates, ChatModels, Output Parsers y Callbacks',
        'Módulo 3: Document Loaders, Text Splitters y Recuperadores Vectoriales Integrados',
        'Módulo 4: Creación de Herramientas Personalizadas (Custom Tools) y Agentes ReAct',
        'Módulo 5: Transición a LangGraph: Grafos con Estado y Flujos Multi-Agente Resilientes'
      ],
      skills: ['LangChain', 'LCEL', 'Agentes Autónomos', 'LangGraph', 'Python/TypeScript', 'Integración LLM']
    },
    fr: {
      title: 'Introduction à LangChain',
      subtitle: 'Orchestration de Modèles de Langage, Chaînes, Mémoire et Connecteurs de Données',
      level: 'Intermédiaire',
      duration: '24 heures',
      description: 'Développez des applications d’IA robustes avec l’écosystème LangChain. Maîtrisez LCEL, chaînes modulaires, agents autonomes avec outils et graphes d’états avec LangGraph.',
      syllabus: [
        'Module 1 : Architecture LangChain et LangChain Expression Language (LCEL)',
        'Module 2 : Composants Clés : PromptTemplates, ChatModels, Parsers de Sortie et Callbacks',
        'Module 3 : Chargeurs de Documents, Découpeurs de Texte et Récupérateurs Vectoriels',
        'Module 4 : Création d’Outils Personnalisés et Agents de Raisonnement (ReAct)',
        'Module 5 : Transition vers LangGraph : Graphes avec État et Flux Multi-Agents Résilients'
      ],
      skills: ['LangChain', 'LCEL', 'Agents Autonomes', 'LangGraph', 'Python/TypeScript', 'Intégration LLM']
    },
    it: {
      title: 'Introduzione a LangChain',
      subtitle: 'Orchestrazione di Modelli di Linguaggio, Catene, Memoria e Connettori di Dati',
      level: 'Intermedio',
      duration: '24 ore',
      description: 'Sviluppa applicazioni IA intelligenti con LangChain. Scopri LCEL, catene modulari, agenti autonomi provvisti di strumenti personalizzati e grafi con memoria persistente.',
      syllabus: [
        'Modulo 1: Architettura LangChain e LangChain Expression Language (LCEL)',
        'Modulo 2: Componenti Core: PromptTemplates, ChatModels, Output Parser e Callback',
        'Modulo 3: Document Loaders, Text Splitter e Recuperatori Vettoriali Integrati',
        'Modulo 4: Creazione di Strumenti Personalizzati (Custom Tools) e Agenti ReAct',
        'Modulo 5: Passaggio a LangGraph: Grafi con Stato e Workflow Multi-Agente Resilienti'
      ],
      skills: ['LangChain', 'LCEL', 'Agenti Autonomi', 'LangGraph', 'Python/TypeScript', 'Integrazione LLM']
    }
  },
  'course-masterclass-letramento-ia': {
    en: {
      title: 'MasterClass - AI Literacy',
      subtitle: 'Strategic Immersion in AI Fluency, Culture, and Governance for Leaders and Professionals',
      level: 'Executive',
      duration: '12 hours',
      description: 'An executive immersion for managers and professionals who need to lead AI transformation. Develop critical thinking, adoption roadmaps, and decision-making confidence with clear ethical governance.',
      syllabus: [
        'Module 1: Global Generative AI Landscape: Distinguishing Real Value from Market Hype',
        'Module 2: The New Professional Profile: Augmented Capabilities and Critical Fluency',
        'Module 3: Data & AI-Driven Decision Making Free from Technological Illusions',
        'Module 4: Cultural Transformation, Team Upskilling, and Change Management',
        'Module 5: Applied Ethics, Privacy (LGPD/GDPR), and Corporate Risk Mitigation'
      ],
      skills: ['AI Literacy', 'Strategic Leadership', 'Governance', 'Digital Transformation', 'Upskilling']
    },
    es: {
      title: 'MasterClass - Alfabetización en IA',
      subtitle: 'Inmersión Estratégica en Fluidez, Cultura y Gobernanza de IA para Líderes',
      level: 'Ejecutivo',
      duration: '12 horas',
      description: 'Formación ejecutiva para directivos y profesionales que lideran la adopción de IA. Desarrolla pensamiento crítico, visión estratégica de adopción y seguridad en la toma de decisiones.',
      syllabus: [
        'Módulo 1: Panorama Global de la IA Generativa: Realidad vs Hype de Mercado',
        'Módulo 2: El Nuevo Perfil Profesional: Competencias Aumentadas y Fluidez Crítica',
        'Módulo 3: Toma de Decisiones Basada en Datos e IA sin Ilusiones Tecnológicas',
        'Módulo 4: Transformación Cultural, Upskilling de Equipos y Gestión del Cambio',
        'Módulo 5: Gobernanza, Ética Aplicada, Privacidad (LGPD/GDPR) y Mitigación de Riesgos'
      ],
      skills: ['Alfabetización en IA', 'Liderazgo Estratégico', 'Gobernanza', 'Transformación Digital', 'Upskilling']
    },
    fr: {
      title: 'MasterClass - Littératie en IA',
      subtitle: 'Immersion Stratégique en Maîtrise, Culture et Gouvernance de l’IA pour Dirigeants',
      level: 'Exécutif',
      duration: '12 heures',
      description: 'Formation exécutive pour décideurs menant la transformation par l’IA. Développez l’esprit critique, les feuilles de route stratégiques et la confiance décisionnelle.',
      syllabus: [
        'Module 1 : Panorama Mondial de l’IA Générative : Réalité vs Illusion Médiatique',
        'Module 2 : Le Nouveau Profil Professionnel : Compétences Augmentées et Maîtrise Critique',
        'Module 3 : Prise de Décision Éclairée par les Données et l’IA sans Illusions',
        'Module 4 : Transformation Culturelle, Montée en Compétences et Conduite du Changement',
        'Module 5 : Gouvernance, Éthique Appliquée, Confidentialité (RGPD) et Maîtrise des Risques'
      ],
      skills: ['Littératie en IA', 'Leadership Stratégique', 'Gouvernance', 'Transformation Digitale', 'Montée en Compétences']
    },
    it: {
      title: 'MasterClass - Alfabetizzazione all’IA',
      subtitle: 'Immersione Strategica in Fluenza, Cultura e Governance dell’IA per Leader',
      level: 'Esecutivo',
      duration: '12 ore',
      description: 'Formazione esecutiva per manager che guidano l’adozione dell’IA. Sviluppa pensiero critico, visione strategica e conformità etica per decisioni aziendali sicure.',
      syllabus: [
        'Modulo 1: Panorama Globale dell’IA Generativa: Valore Reale vs Hype di Mercato',
        'Modulo 2: Il Nuovo Profilo Professionale: Competenze Aumentate e Fluenza Critica',
        'Modulo 3: Processo Decisionale Guidato da Dati e IA senza Illusioni Tecnologiche',
        'Modulo 4: Trasformazione Culturale, Upskilling dei Team e Gestione del Cambiamento',
        'Modulo 5: Governance, Etica Applicata, Privacy (GDPR) e Mitigazione dei Rischi Aziendali'
      ],
      skills: ['Alfabetizzazione all’IA', 'Leadership Strategica', 'Governance', 'Trasformazione Digitale', 'Upskilling']
    }
  },
  'course-masterclass-prompt-context': {
    en: {
      title: 'MasterClass Prompt & Context Engineering - Exploring Possibilities',
      subtitle: 'Elite Techniques in Instruction Architecture, Long-Context Windows, and Cognitive Orchestration',
      level: 'Advanced',
      duration: '18 hours',
      description: 'A deep dive bridging the best of Prompt and Context Engineering. Master advanced reasoning patterns, massive context windows, self-improving metaprompts, and multi-model workflows.',
      syllabus: [
        'Module 1: Attention Anatomy and Token Mechanics in Long-Context Windows',
        'Module 2: Advanced Reasoning Patterns: Chain-of-Thought, Tree-of-Thoughts, and Reflective Metaprompting',
        'Module 3: Dynamic Context Engineering: Semantic Injection, Context Compression, and Lost-in-the-Middle',
        'Module 4: Prompts for Rigorous Structured Outputs (JSON Schemas, SQL) and Tool Calling',
        'Module 5: Guardrails, Defense Against Prompt Injection, Cost Optimization, and A/B Evaluation'
      ],
      skills: ['Prompt Engineering', 'Context Engineering', 'Metaprompting', 'Long Context', 'LLM Orchestration']
    },
    es: {
      title: 'MasterClass Ingeniería de Prompt y Contexto - Explorando Posibilidades',
      subtitle: 'Técnicas de Élite en Arquitectura de Instrucciones, Ventanas Largas y Orquestación Cognitiva',
      level: 'Avanzado',
      duration: '18 horas',
      description: 'Inmersión profunda que une Ingeniería de Prompts y Contexto. Aprende a estructurar prompts complejos, gestionar ventanas de contexto masivas y orquestar múltiples modelos.',
      syllabus: [
        'Módulo 1: Anatomía de la Atención y Mecánica de Tokens en Modelos de Contexto Largo',
        'Módulo 2: Patrones Avanzados de Razonamiento: Chain-of-Thought, Tree-of-Thoughts y Metaprompting Reflexivo',
        'Módulo 3: Ingeniería de Contexto Dinámica: Inyección Semántica, Compresión y Efecto Lost-in-the-Middle',
        'Módulo 4: Prompts para Salidas Estructuradas Rigurosas (JSON Schemas, SQL) y Uso de Herramientas',
        'Módulo 5: Guardrails, Defensa contra Prompt Injection, Optimización de Costes y Pruebas A/B'
      ],
      skills: ['Ingeniería de Prompt', 'Ingeniería de Contexto', 'Metaprompting', 'Contexto Largo', 'Orquestación LLM']
    },
    fr: {
      title: 'MasterClass Ingénierie de Prompt et de Contexte - Explorer les Possibilités',
      subtitle: 'Techniques d’Élite en Architecture d’Instructions, Fenêtres Longues et Orchestration',
      level: 'Avancé',
      duration: '18 heures',
      description: 'Immersion associant le meilleur du Prompt et de l’Ingénierie de Contexte. Maîtrisez les fenêtres de contexte étendues, métaprompts réflexifs et sorties structurées rigoureuses.',
      syllabus: [
        'Module 1 : Anatomie de l’Attention et Mécanique des Tokens dans les Modèles à Contexte Long',
        'Module 2 : Raisonnement Avancé : Chain-of-Thought, Tree-of-Thoughts et Métaprompting Réflexif',
        'Module 3 : Ingénierie de Contexte Dynamique : Injection Sémantique, Compression et Effet Lost-in-the-Middle',
        'Module 4 : Prompts pour Sorties Rigoureusement Structurées (JSON Schemas, SQL) et Appels d’Outils',
        'Module 5 : Guardrails, Défense contre l’Injection de Prompt, Optimisation des Coûts et Tests A/B'
      ],
      skills: ['Ingénierie de Prompt', 'Ingénierie de Contexte', 'Métaprompting', 'Long Contexte', 'Orchestration LLM']
    },
    it: {
      title: 'MasterClass Prompt & Context Engineering - Esplorando le Possibilità',
      subtitle: 'Tecniche d’Élite nell’Architettura delle Istruzioni, Finestre Lunghe e Orchestrazione Cognitiva',
      level: 'Avanzato',
      duration: '18 ore',
      description: 'Unione avanzata di Prompt e Context Engineering. Padroneggia il ragionamento riflessivo, finestre di contesto ampie, meta-prompt auto-miglioranti e schemi JSON rigorosi.',
      syllabus: [
        'Modulo 1: Anatomia dell’Attenzione e Dinamica dei Token nei Modelli a Lungo Contesto',
        'Modulo 2: Pattern di Ragionamento Avanzato: Chain-of-Thought, Tree-of-Thoughts e Metaprompting Riflessivo',
        'Modulo 3: Context Engineering Dinamico: Iniezione Semantica, Compressione ed Effetto Lost-in-the-Middle',
        'Modulo 4: Prompt per Output Strutturati Rigorosi (JSON Schema, SQL) e Tool Calling',
        'Modulo 5: Guardrail, Difesa contro Prompt Injection, Ottimizzazione dei Costi e Test A/B'
      ],
      skills: ['Prompt Engineering', 'Context Engineering', 'Metaprompting', 'Long Context', 'Orchestrazione LLM']
    }
  },
  'course-intro-notebooklm': {
    en: {
      title: 'Introduction to Gemini Notebook (NotebookLM)',
      subtitle: 'Practical Guide for Knowledge Organization, Critical Reading, and Smart Synthesis',
      level: 'Beginner',
      duration: '8 hours',
      description: 'Master Google NotebookLM from scratch. Learn source grounding, document curating, interactive queries, Audio Overviews, and turning raw notes into actionable insights.',
      syllabus: [
        'Module 1: What NotebookLM Is: The Core Concept of Source Grounding and Privacy',
        'Module 2: Importing and Curating Sources: PDFs, Google Docs, Slides, and Text Notes',
        'Module 3: Querying Techniques: Formulating Inquiries for Deep Summaries and Cross-Comparisons',
        'Module 4: Audio Overviews in Practice: Creating and Leveraging AI Study Podcasts',
        'Module 5: Organizing Notebooks for Academic Research, Enterprise Projects, and Knowledge Management'
      ],
      skills: ['NotebookLM', 'Google Gemini', 'Grounding', 'Content Synthesis', 'Audio Overviews', 'Productivity']
    },
    es: {
      title: 'Introducción a Gemini Notebook (NotebookLM)',
      subtitle: 'Guía Práctica para Organización del Conocimiento, Lectura Crítica y Síntesis Inteligente',
      level: 'Principiante',
      duration: '8 horas',
      description: 'Domina Google NotebookLM desde cero. Aprende grounding estricto, gestión de fuentes, consultas interactivas, Audio Overviews y síntesis acelerada de información.',
      syllabus: [
        'Módulo 1: Qué es NotebookLM: El Concepto de Grounding y Privacidad de Fuentes',
        'Módulo 2: Importación y Curaduría de Fuentes: PDFs, Google Docs, Diapositivas y Textos',
        'Módulo 3: Técnicas de Consulta: Cómo Formular Preguntas para Extraer Síntesis y Comparaciones',
        'Módulo 4: Audio Overviews en la Práctica: Creación y Aprovechamiento de Podcasts de Estudio por IA',
        'Módulo 5: Organización de Cuadernos para Investigación, Proyectos Profesionales y Gestión del Conocimiento'
      ],
      skills: ['NotebookLM', 'Google Gemini', 'Grounding', 'Síntesis de Contenido', 'Audio Overviews', 'Productividad']
    },
    fr: {
      title: 'Introduction à Gemini Notebook (NotebookLM)',
      subtitle: 'Guide Pratique pour l’Organisation des Connaissances, Lecture Critique et Synthèse',
      level: 'Débutant',
      duration: '8 heures',
      description: 'Maîtrisez Google NotebookLM dès le départ. Découvrez l’ancrage sur vos sources exclusives (Grounding), la génération d’Audio Overviews et la synthèse intelligente.',
      syllabus: [
        'Module 1 : Qu’est-ce que NotebookLM : Le Concept de Grounding et la Confidentialité des Sources',
        'Module 2 : Importation et Curation de Sources : PDFs, Google Docs, Présentations et Notes',
        'Module 3 : Techniques d’Interrogation : Poser les Bonnes Questions pour Synthèses et Comparaisons Précises',
        'Module 4 : Audio Overviews en Pratique : Création et Exploitation de Podcasts d’Étude par IA',
        'Module 5 : Organisation de Carnets pour la Recherche Académique, Projets et Gestion des Connaissances'
      ],
      skills: ['NotebookLM', 'Google Gemini', 'Grounding', 'Synthèse de Contenu', 'Audio Overviews', 'Productivité']
    },
    it: {
      title: 'Introduzione a Gemini Notebook (NotebookLM)',
      subtitle: 'Guida Pratica all’Organizzazione della Conoscenza, Lettura Critica e Sintesi Intelligente',
      level: 'Principiante',
      duration: '8 ore',
      description: 'Padroneggia Google NotebookLM da zero. Scopri il grounding sicuro sulle tue fonti, la generazione di Audio Overviews e l’apprendimento rapido di documenti complessi.',
      syllabus: [
        'Modulo 1: Cos’è NotebookLM: Il Concetto di Grounding e la Privacy dei Documenti',
        'Modulo 2: Importazione e Curatela delle Fonti: PDF, Google Doc, Presentazioni e Testi',
        'Modulo 3: Tecniche di Interrogazione: Formulare Domande per Sintesi e Confronti Precisi',
        'Modulo 4: Audio Overviews nella Pratica: Creare e Sfruttare Podcast di Studio Generati da IA',
        'Modulo 5: Organizzare Taccuini per Ricerca Accademica, Progetti Aziendali e Knowledge Management'
      ],
      skills: ['NotebookLM', 'Google Gemini', 'Grounding', 'Sintesi dei Contenuti', 'Audio Overviews', 'Produttività']
    }
  },
  'course-notebooklm-concursos': {
    en: {
      title: 'Gemini Notebook (NotebookLM) for Competitive Exams',
      subtitle: 'Accelerated Study Methodology, Mock Questions, and Active Recall with AI',
      level: 'Beginner',
      duration: '12 hours',
      description: 'The definitive guide for public exam candidates using NotebookLM as their 24/7 study mentor. Structure edicts, legislation, case law, and generate grounded mock tests and audio reviews.',
      syllabus: [
        'Module 1: Structuring Edicts and Legislation in NotebookLM with Zero Hallucination Guarantee',
        'Module 2: Generating Question Banks and Custom Mock Exams Grounded in Statutory Law',
        'Module 3: Textual Mind Maps, Comparative Deadlines Tables, and Schematized Summaries',
        'Module 4: Studying on the Move: Converting Lengthy Topics into Audio Revision Podcasts',
        'Module 5: Spaced Repetition Techniques and Mitigating Exam Anxiety with AI Mentorship'
      ],
      skills: ['NotebookLM for Exams', 'Memorization Techniques', 'Smart Mock Tests', 'Active Recall', 'Edict Management']
    },
    es: {
      title: 'Gemini Notebook (NotebookLM) para Oposiciones y Concursos',
      subtitle: 'Metodología Acelerada de Estudio, Resolución de Preguntas y Memorización Activa con IA',
      level: 'Principiante',
      duration: '12 horas',
      description: 'La guía definitiva para aspirantes a oposiciones utilizando NotebookLM como mentor 24/7. Organiza convocatorias, legislación, jurisprudencia y genera simulacros fundamentados.',
      syllabus: [
        'Módulo 1: Estructuración de Convocatorias y Legislación en NotebookLM con Garantía de Fidelidad',
        'Módulo 2: Creación de Baterías de Preguntas y Simulacros Inéditos Basados en la Letra de la Ley',
        'Módulo 3: Mapas Conceptuales Textuales, Tablas Comparativas de Plazos y Resúmenes Esquematizados',
        'Módulo 4: Estudio en Movimiento: Convirtiendo Materias Extensas en Podcasts de Repaso Auditivo',
        'Módulo 5: Técnicas de Repaso Espaciado y Mitigación de Ansiedad en la Recta Final con IA'
      ],
      skills: ['NotebookLM para Oposiciones', 'Técnicas de Memorización', 'Simulacros Inteligentes', 'Repaso Activo', 'Gestión de Temarios']
    },
    fr: {
      title: 'Gemini Notebook (NotebookLM) pour Concours & Examens',
      subtitle: 'Méthodologie Accélérée d’Étude, Quiz d’Entraînement et Mémorisation Active avec l’IA',
      level: 'Débutant',
      duration: '12 heures',
      description: 'Le guide complet pour réussir vos concours grâce à NotebookLM comme tuteur 24/7. Structurez textes de loi, fiches de révision et générez des podcasts audio personnalisés.',
      syllabus: [
        'Module 1 : Structuration des Programmes et Textes Juridiques dans NotebookLM avec Zéro Hallucination',
        'Module 2 : Création de Banques de Questions et Épreuves Blanches Fondées sur la Règle de Droit',
        'Module 3 : Cartes Mentales Textuelles, Tableaux Comparatifs de Délais et Synthèses Schématisées',
        'Module 4 : Révision Nomade : Convertir les Matières Denses en Podcasts Audio Éducatifs',
        'Module 5 : Techniques de Répétition Espacée et Gestion du Stress avant l’Épreuve avec l’IA'
      ],
      skills: ['NotebookLM pour Concours', 'Techniques de Mémorisation', 'Examens Blancs Intelligents', 'Rappel Actif', 'Gestion des Programmes']
    },
    it: {
      title: 'Gemini Notebook (NotebookLM) per Concorsi ed Esami',
      subtitle: 'Metodologia di Studio Accelerata, Risoluzione di Quesiti e Ripetizione Attiva con l’IA',
      level: 'Principiante',
      duration: '12 ore',
      description: 'La guida definitiva per concorsisti che usano NotebookLM come mentore h24. Struttura bandi, leggi, giurisprudenza e genera simulazioni basate rigorosamente sui testi normativi.',
      syllabus: [
        'Modulo 1: Strutturare Bandi e Codici Legislativi su NotebookLM con Fedeltà Assoluta alle Fonti',
        'Modulo 2: Generazione di Batterie di Quiz e Simulazioni d’Esame con Giustificazione Giuridica',
        'Modulo 3: Mappe Concettuali Testuali, Tabelle Sinottiche di Scadenze e Schemi di Ripasso',
        'Modulo 4: Studio in Movimento: Trasformare Materie Complesse in Podcast Audio di Ripasso',
        'Modulo 5: Tecniche di Ripetizione Dilazionata e Gestione dell’Ansia da Esame con l’IA'
      ],
      skills: ['NotebookLM per Concorsi', 'Tecniche di Memorizzazione', 'Simulazioni Intelligenti', 'Ripetizione Attiva', 'Gestione Bandi']
    }
  }
};

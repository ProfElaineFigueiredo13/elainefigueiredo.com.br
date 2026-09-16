import { Language } from '../types';

export interface LocalizedLectureItem {
  title: string;
  subtitle: string;
  targetAudience: string;
  duration: string;
  format: string;
  description: string;
  topics: string[];
  skills: string[];
}

export const LOCALIZED_LECTURES_DATA: Record<string, Partial<Record<Language, LocalizedLectureItem>>> = {
  'talk-letramento-digital-ia': {
    en: {
      title: 'Digital Literacy vs AI Literacy',
      subtitle: 'The Evolution of Technological Fluency in the Era of Generative Models and Autonomous Agents',
      targetAudience: 'Corporations, Universities, Executive Leaders, Educators, and Teams Navigating Digital Transformation',
      duration: '60 to 90 minutes (Customizable for Keynote or Workshop)',
      format: 'In-Person or Online • Live Streaming • In-Company or Industry Conferences',
      description: 'A provocative, deeply human, and transformative keynote on the fundamental distinction between operating traditional digital software and cultivating genuine critical reasoning and fluency in the Generative AI era.',
      topics: [
        'The critical divide: Digital Literacy (operating tools) vs AI Literacy (reasoning, context, and human-machine collaboration)',
        'The augmented cognition paradigm: overcoming fear of automation through critical empowerment',
        'Critical thinking and governance: spotting hallucinations, algorithmic bias, and ethical decision-making pitfalls',
        'Irreplaceable human agency: empathy, discernment, moral sensibility, and intentional leadership',
        'Curating AI and actionable organizational roadmaps to achieve high digital maturity with grace and confidence'
      ],
      skills: ['AI Literacy', 'Digital Literacy', 'Critical Thinking', 'Future of Work', 'Governance & Ethics', 'Cultural Transformation']
    },
    es: {
      title: 'Alfabetización Digital vs Alfabetización en IA',
      subtitle: 'La Evolución de la Fluidez Tecnológica en la Era de Modelos Generativos y Agentes Autónomos',
      targetAudience: 'Empresas, Universidades, Liderazgos Ejecutivos, Educadores y Equipos en Transformación Digital',
      duration: '60 a 90 minutos (Adaptable a Conferencia Magistral o Taller)',
      format: 'Presencial u Online • Transmisión en Vivo • In-Company o Congresos',
      description: 'Una conferencia provocadora, humana y transformadora sobre las diferencias esenciales entre operar herramientas digitales convencionales y desarrollar criterio propio y fluidez real en la era de la IA Generativa.',
      topics: [
        'La distinción fundamental: Alfabetización Digital (uso instrumental) vs Alfabetización en IA (razonamiento y colaboración humano-máquina)',
        'El nuevo paradigma de la cognición aumentada y cómo superar el temor a la automatización',
        'Pensamiento crítico y gobernanza: identificación de alucinaciones, sesgos algorítmicos y dilemas éticos en decisiones clave',
        'El protagonismo humano insustituible: sensibilidad, empatía, discernimiento e intencionalidad',
        'Curaduría de IA y estrategias prácticas para impulsar la madurez digital en personas y organizaciones'
      ],
      skills: ['Alfabetización en IA', 'Alfabetización Digital', 'Pensamiento Crítico', 'Futuro del Trabajo', 'Gobernanza y Ética', 'Transformación Cultural']
    },
    fr: {
      title: 'Littératie Numérique vs Littératie en IA',
      subtitle: 'L’Évolution de la Maîtrise Technologique à l’Ère des Modèles Génératifs et des Agents Autonomes',
      targetAudience: 'Entreprises, Universités, Dirigeants Exécutifs, Éducateurs et Équipes en Transformation Digitale',
      duration: '60 à 90 minutes (Adaptable en Conférence Plénière ou Atelier)',
      format: 'Présentiel ou En Ligne • Diffusion en Direct • En Entreprise ou Congrès',
      description: 'Une conférence stimulante, humaine et transformatrice sur la frontière essentielle entre savoir manipuler des logiciels classiques et développer un esprit critique et une réelle maîtrise de l’IA Générative.',
      topics: [
        'La frontière clé : Littératie Numérique (usage instrumental) vs Littératie en IA (raisonnement et symbiose humain-machine)',
        'Le paradigme de la cognition augmentée : dépasser la peur du grand remplacement par l’autonomisation',
        'Pensée critique et gouvernance : déjouer hallucinations, biais algorithmiques et pièges éthiques décisionnels',
        'Le rôle irremplaçable de l’humain : sensibilité, empathie, discernement et intentionnalité stratégique',
        'Curation d’IA et feuille de route opérationnelle pour élever la maturité digitale des organisations'
      ],
      skills: ['Littératie en IA', 'Littératie Numérique', 'Pensée Critique', 'Avenir du Travail', 'Gouvernance & Éthique', 'Transformation Culturelle']
    },
    it: {
      title: 'Alfabetizzazione Digitale vs Alfabetizzazione all’IA',
      subtitle: 'L’Evoluzione della Fluenza Tecnologica nell’Era dei Modelli Generativi e degli Agenti Autonomi',
      targetAudience: 'Aziende, Università, Dirigenti Esecutivi, Educatori e Team in Transizione Digitale',
      duration: 'Da 60 a 90 minuti (Adattabile per Keynote o Workshop)',
      format: 'In Presenza o Online • Diretta Streaming • In-Company o Congressi',
      description: 'Una conferenza stimolante, umana e trasformativa sulle differenze cruciali tra il semplice utilizzo di software digitali e lo sviluppo di un autentico pensiero critico nell’era dell’Intelligenza Artificiale Generativa.',
      topics: [
        'La differenza sostanziale: Alfabetizzazione Digitale (uso strumentale) vs Alfabetizzazione all’IA (ragionamento e sinergia uomo-macchina)',
        'Il paradigma della cognizione aumentata: superare l’ansia dell’automazione con la consapevolezza critica',
        'Pensiero critico e governance: identificare allucinazioni, bias algoritmici e dilemmi etici nelle decisioni aziendali',
        'Il ruolo insostituibile dell’essere umano: empatia, discernimento morale, sensibilità e scopo',
        'Curatela dell’IA e roadmap pratiche per accompagnare persone e imprese verso una maturità digitale sostenibile'
      ],
      skills: ['Alfabetizzazione all’IA', 'Alfabetizzazione Digitale', 'Pensiero Critico', 'Futuro del Lavoro', 'Governance & Etica', 'Trasformazione Culturale']
    }
  },
  'talk-inteligencia-burra-ia': {
    en: {
      title: '"Dumb" AI: The Illusion of Intelligence',
      subtitle: 'Demystifying Limitations, Hallucinations, and the Fallacy of Algorithmic Omniscience',
      targetAudience: 'Executive Leaders, Cross-Functional Professionals, Educators, and Tech Enthusiasts',
      duration: '60 to 90 minutes (Executive Keynote or Provocative Master Talk)',
      format: 'In-Person or Online • In-Company, Annual Conventions, and Corporate Summits',
      description: 'A sharp, witty, and illuminating reflection on why AI can be lightning-fast yet surprisingly "dumb" without human guidance. Demystifying hype and teaching how to avoid catastrophic corporate blunders.',
      topics: [
        'The illusion of understanding: why LLMs are probabilistic token predictors, not conscious minds',
        'Emblematic algorithmic blunders, absurd hallucinations, and inherent cognitive biases in foundation models',
        'Where artificial intelligence fails miserably and why human common sense has never been more indispensable',
        'Treating AI as a brilliant, hyper-fast intern and co-pilot without ever outsourcing critical judgment',
        'Practical protocols for validation, fact-checking, and constructive skepticism across organizations'
      ],
      skills: ['Critical Thinking', 'LLM Limitations', 'AI Hallucinations', 'Human Intelligence', 'Risk Mitigation', 'Discernment']
    },
    es: {
      title: 'Inteligencia "Tonta" de la IA',
      subtitle: 'Desmitificando Límites, Alucinaciones y la Falacia de la Omnisciencia Algorítmica',
      targetAudience: 'Líderes Ejecutivos, Profesionales de Todas las Áreas, Educadores y Entusiastas de la Tecnología',
      duration: '60 a 90 minutos (Keynote Ejecutivo o Charla Provocadora)',
      format: 'Presencial u Online • In-Company, Convenciones y Congresos Corporativos',
      description: 'Una reflexión lúcida, divertida y reveladora sobre por qué la IA puede ser brillante en velocidad pero torpe y vulnerable sin juicio humano. Desmontando mitos y enseñando a eludir errores costosos.',
      topics: [
        'La ilusión de comprensión: por qué los LLMs son motores probabilísticos de predicción y no cerebros conscientes',
        'Casos emblemáticos de pifias algorítmicas, alucinaciones absurdas y sesgos cognitivos en los modelos',
        'Dónde falla estrepitosamente la inteligencia artificial y por qué el sentido común humano es indispensable',
        'Cómo usar la IA como un becario incansable y copiloto ágil sin tercerizar jamás el pensamiento crítico',
        'Directrices prácticas de validación, verificación de hechos y escepticismo constructivo en la empresa'
      ],
      skills: ['Pensamiento Crítico', 'Límites de LLMs', 'Alucinaciones en IA', 'Inteligencia Humana', 'Mitigación de Riesgos', 'Discernimiento']
    },
    fr: {
      title: 'L’Intelligence "Bête" de l’IA',
      subtitle: 'Démystifier les Limites, Hallucinations et le Mythe de l’Omniscience Algorithmique',
      targetAudience: 'Dirigeants, Décideurs, Professionnels Tous Secteurs, Enseignants et Passionnés de Tech',
      duration: '60 à 90 minutes (Keynote Exécutif ou Conférence Provocatrice)',
      format: 'Présentiel ou En Ligne • Séminaires d’Entreprise, Congrès et Salons',
      description: 'Une réflexion percutante, drôle et démystificatrice sur les raisons pour lesquelles l’IA peut être ultra-rapide mais totalement dénuée de bon sens sans l’humain. Déjouer le mirage pour éviter les erreurs coûteuses.',
      topics: [
        'L’illusion de la compréhension : pourquoi les LLMs sont des moteurs probabilistes et non des consciences',
        'Bévues algorithmiques célèbres, hallucinations stupéfiantes et biais cognitifs inhérents aux modèles',
        'Les angles morts où l’IA échoue lamentablement et pourquoi le bon sens humain est vital',
        'Employer l’IA comme un stagiaire surdoué et un copilote rapide sans jamais lui déléguer l’esprit critique',
        'Protocoles pratiques de vérification, fact-checking et scepticisme constructif en milieu professionnel'
      ],
      skills: ['Pensée Critique', 'Limites des LLMs', 'Hallucinations IA', 'Intelligence Humaine', 'Maîtrise des Risques', 'Discernement']
    },
    it: {
      title: 'L’Intelligenza "Stupida" dell’IA',
      subtitle: 'Demistificare Limiti, Allucinazioni e l’Illusione dell’Onniscienza Algoritmica',
      targetAudience: 'Leader Esecutivi, Professionisti di ogni settore, Educatori e Appassionati di Tecnologia',
      duration: 'Da 60 a 90 minuti (Keynote Esecutivo o Talk Provocatorio)',
      format: 'In Presenza o Online • In-Company, Convention Aziendali e Congressi',
      description: 'Una riflessione arguta, brillante e illuminante su come l’IA possa essere rapidissima ma profondamente ingenua senza il discernimento umano. Smontare l’hype ed evitare errori madornali.',
      topics: [
        'L’illusione della comprensione: perché i LLM sono predittori statistici di token e non menti coscienti',
        'Casi emblematici di gaffe algoritmiche, allucinazioni clamorose e bias cognitivi dei modelli',
        'I punti in cui l’IA fallisce miseramente e perché il buon senso umano non è mai stato così indispensabile',
        'Usare l’IA come uno stagista infaticabile e un copilota agile senza mai cedere il giudizio critico',
        'Linee guida pratiche per validazione, fact-checking e scetticismo costruttivo nei processi aziendali'
      ],
      skills: ['Pensiero Critico', 'Limiti dei LLM', 'Allucinazioni nell’IA', 'Intelligenza Umana', 'Mitigazione del Rischio', 'Discernimento']
    }
  },
  'talk-governanca-curadoria-desastres': {
    en: {
      title: 'Governance & Curation - The Brake Against Disasters',
      subtitle: 'Ethical Safeguards, Data Quality, and Risk Management in AI Implementations',
      targetAudience: 'C-Levels, IT Directors, Legal Counsel, DPOs, Compliance Officers, Risk Managers, and Data Teams',
      duration: '60 to 90 minutes (Strategic Magna Keynote or Executive Panel)',
      format: 'In-Person or Online • Executive Summits, Board Meetings, and Leadership Forums',
      description: 'Deploying Artificial Intelligence without active governance and rigorous data curation is like driving a supercar at top speed without brakes. Discover vital safeguards to protect brand reputation, comply with laws, and avoid corporate disasters.',
      topics: [
        'Data Curation: "Garbage in, disaster out" — source quality as the non-negotiable foundation of AI',
        'AI Governance not as bureaucratic friction, but as the high-performance brake allowing companies to accelerate safely',
        'Setting up ethics committees, responsible usage policies, and algorithmic audit traceability',
        'Preventing sensitive data leakage (PII), intellectual property infringements, and legal liabilities',
        'Actionable frameworks for continuous auditing and compliance with LGPD, GDPR, and the EU AI Act'
      ],
      skills: ['AI Governance', 'Data Curation', 'Compliance & GDPR', 'Risk Management', 'Corporate Ethics', 'Information Security']
    },
    es: {
      title: 'Gobernanza y Curaduría - El Freno contra Desastres',
      subtitle: 'Salvaguardas Éticas, Calidad de Datos y Gestión de Riesgos en la Implementación de IA',
      targetAudience: 'C-Levels, Directores de TI, Jurídico, DPOs, Compliance, Gestores de Riesgos y Equipos de Datos',
      duration: '60 a 90 minutos (Conferencia Magistral Estratégica o Panel Ejecutivo)',
      format: 'Presencial u Online • Foros Ejecutivos y Encuentros de Liderazgo',
      description: 'Implementar Inteligencia Artificial sin gobernanza activa ni curaduría rigurosa de datos es como pilotar un bólido a alta velocidad sin frenos. Conoce las salvaguardas indispensables para proteger marcas y cumplir normativas.',
      topics: [
        'Curaduría de datos: "Basura entra, catástrofe sale" — la calidad de la fuente como cimiento innegociable',
        'La Gobernanza de IA no como traba burocrática, sino como el freno de alto rendimiento que permite acelerar seguros',
        'Estructuración de comités éticos, políticas de uso responsable y trazabilidad de decisiones automatizadas',
        'Prevención de fugas de datos confidenciales (PII), violaciones de propiedad intelectual y pasivos legales',
        'Frameworks prácticos de auditoría continua y cumplimiento con LGPD, RGPD y la Ley de IA de la UE'
      ],
      skills: ['Gobernanza de IA', 'Curaduría de Datos', 'Compliance y Privacidad', 'Gestión de Riesgos', 'Ética Corporativa', 'Seguridad de la Información']
    },
    fr: {
      title: 'Gouvernance & Curation - Le Frein contre les Désastres',
      subtitle: 'Garde-fous Éthiques, Qualité des Données et Maîtrise des Risques dans l’Adoption de l’IA',
      targetAudience: 'Membres du Comex, DSI, Directeurs Juridiques, DPO, Responsables Conformité et Risques',
      duration: '60 à 90 minutes (Conférence Plénière Stratégique ou Panel Exécutif)',
      format: 'Présentiel ou En Ligne • Sommets Exécutifs et Cercles de Dirigeants',
      description: 'Déployer l’Intelligence Artificielle sans gouvernance active ni curation rigoureuse des données équivaut à piloter un bolide sans freins. Découvrez les garde-fous pour protéger votre réputation et assurer la conformité.',
      topics: [
        'Curation des données : "Données corrompues, désastre assuré" — la qualité des sources comme impératif vital',
        'La gouvernance de l’IA : non pas un frein bureaucratique, mais le frein haute performance qui autorise à accélérer',
        'Mise en place de comités d’éthique, politiques d’usage responsable et traçabilité des décisions algorithmiques',
        'Prévention des fuites de données sensibles (PII), atteintes à la propriété intellectuelle et risques juridiques',
        'Méthodologies d’audit continu et conformité avec le RGPD, l’AI Act européen et les normes sectorielles'
      ],
      skills: ['Gouvernance de l’IA', 'Curation de Données', 'Conformité & RGPD', 'Gestion des Risques', 'Éthique d’Entreprise', 'Cybersécurité']
    },
    it: {
      title: 'Governance e Curatela - Il Freno contro i Disastri',
      subtitle: 'Tutele Etiche, Qualità dei Dati e Gestione dei Rischi nell’Adozione dell’IA',
      targetAudience: 'C-Level, Direttori IT, Legale, DPO, Responsabili Compliance, Risk Manager e Team Data',
      duration: 'Da 60 a 90 minuti (Keynote Strategico o Tavola Rotonda Esecutiva)',
      format: 'In Presenza o Online • Forum Esecutivi ed Eventi di Leadership',
      description: 'Introdurre l’Intelligenza Artificiale senza governance attiva e rigorosa curatela dei dati equivale a guidare un’auto da corsa a tutta velocità senza freni. Scopri le tutele per proteggere la reputazione e garantire la conformità.',
      topics: [
        'Curatela dei dati: "Dati scadenti, disastri annunciati" — l’integrità delle fonti come fondamento irrinunciabile',
        'La governance dell’IA: non un ostacolo burocratico, ma il freno che consente all’azienda di correre in sicurezza',
        'Creazione di comitati etici aziendali, policy d’uso responsabile e tracciabilità delle decisioni algoritmiche',
        'Prevenzione della fuga di dati sensibili (PII), violazioni di proprietà intellettuale e contenziosi legali',
        'Framework operativi di audit continuo e allineamento a GDPR, AI Act europeo e standard di settore'
      ],
      skills: ['Governance dell’IA', 'Curatela dei Dati', 'Compliance & GDPR', 'Gestione dei Rischi', 'Etica Aziendale', 'Sicurezza delle Informazioni']
    }
  },
  'talk-gemini-notebook-notebooklm': {
    en: {
      title: 'Gemini Notebook (NotebookLM): Breaking Learning Barriers',
      subtitle: 'Empowering Academic Research, Complex Analytics, and Accelerated Study with AI',
      targetAudience: 'Students, Academic Researchers, Professors, Lawyers, Analysts, and Knowledge Workers',
      duration: '60 to 90 minutes (Interactive Keynote or Hands-On Masterclass)',
      format: 'In-Person or Online • Live Hands-on Demonstration',
      description: 'Dive into the transformative power of Google NotebookLM (Gemini Notebook). Learn how to anchor artificial intelligence strictly to your verified sources (Grounding), generating flawless syntheses and immersive Audio Overviews.',
      topics: [
        'The game-changing power of Grounding: eliminating hallucinations by forcing the model to speak only from your sources',
        'Converting hundreds of pages of PDFs, technical manuals, and research notes into a personal cognitive intelligence hub',
        'Audio Overviews: the AI-generated study podcast revolution for passive and on-the-go knowledge retention',
        'Advanced cross-referencing query tactics to discover hidden contradictions and generate actionable deep insights',
        'Real-world blueprints for academic dissertations, public competitive exams, legal case research, and strategic dossiers'
      ],
      skills: ['NotebookLM', 'Gemini AI', 'Source Grounding', 'Academic Research', 'Rapid Synthesis', 'Audio Overview', 'Productivity']
    },
    es: {
      title: 'Gemini Notebook (NotebookLM): Rompiendo Barreras de Estudio',
      subtitle: 'Potenciando Investigación Académica, Análisis Complejos y Aprendizaje Acelerado',
      targetAudience: 'Estudiantes, Investigadores, Docentes, Abogados, Analistas y Profesionales del Conocimiento',
      duration: '60 a 90 minutos (Conferencia Interactiva o Masterclass Práctica)',
      format: 'Presencial u Online • Demostración Práctica en Vivo',
      description: 'Sumérgete en las capacidades transformadoras de Google NotebookLM (Gemini Notebook). Descubre cómo anclar la IA exclusivamente en tus fuentes de confianza (Grounding), generando síntesis rigurosas y Audio Overviews inmersivos.',
      topics: [
        'El poder del Grounding: cómo NotebookLM erradica las alucinaciones al responder únicamente con base en tus fuentes',
        'Transformar cientos de páginas de PDFs, informes y apuntes en un centro de inteligencia personal',
        'Audio Overviews: la revolución de los podcasts generados por IA para asimilar conocimiento en cualquier lugar',
        'Estrategias avanzadas de consulta para cruzar información, detectar contradicciones y extraer conclusiones clave',
        'Casos reales de aplicación en tesis, preparación de oposiciones, análisis jurisprudencial y planes estratégicos'
      ],
      skills: ['NotebookLM', 'Gemini AI', 'Grounding', 'Investigación Académica', 'Síntesis Acelerada', 'Audio Overview', 'Productividad']
    },
    fr: {
      title: 'Gemini Notebook (NotebookLM) : Briser les Barrières de l’Apprentissage',
      subtitle: 'Booster la Recherche Académique, l’Analyse Complexe et l’Étude Accélérée',
      targetAudience: 'Étudiants, Chercheurs, Enseignants, Juristes, Analystes et Professionnels du Savoir',
      duration: '60 à 90 minutes (Conférence Interactive ou Démonstration Masterclass)',
      format: 'Présentiel ou En Ligne • Démonstration Pratique en Direct',
      description: 'Plongez au cœur des capacités révolutionnaires de Google NotebookLM (Gemini Notebook). Découvrez comment ancrer l’IA exclusivement sur vos documents fiables (Grounding), produire des synthèses parfaites et des Audio Overviews captivants.',
      topics: [
        'La force du Grounding : éliminer les hallucinations en contraignant l’IA à ne puiser que dans vos sources vérifiées',
        'Transformer des centaines de pages de PDF, rapports et cours en une tour de contrôle cognitive personnelle',
        'Audio Overviews : la révolution des podcasts générés par IA pour écouter et mémoriser ses cours en déplacement',
        'Techniques avancées de requêtes pour croiser les données, débusquer les contradictions et dégager des insights inédits',
        'Cas d’usage concrets : thèses universitaires, concours administratifs, dossiers juridiques et veille stratégique'
      ],
      skills: ['NotebookLM', 'Gemini AI', 'Ancrage de Sources', 'Recherche Académique', 'Synthèse Rapide', 'Audio Overview', 'Productivité']
    },
    it: {
      title: 'Gemini Notebook (NotebookLM): Abbattere le Barriere dello Studio',
      subtitle: 'Potenziare Ricerca Accademica, Analisi Complesse e Apprendimento Rapido con l’IA',
      targetAudience: 'Studenti, Ricercatori, Docenti, Avvocati, Analisti e Professionisti della Conoscenza',
      duration: 'Da 60 a 90 minuti (Keynote Interattivo o Masterclass Pratica)',
      format: 'In Presenza o Online • Dimostrazione Pratica dal Vivo',
      description: 'Scopri le potenzialità trasformative di Google NotebookLM (Gemini Notebook). Impara ad ancorare l’IA esclusivamente alle tue fonti verificate (Grounding), generando sintesi infallibili e coinvolgenti podcast Audio Overviews.',
      topics: [
        'Il principio del Grounding: eliminare le allucinazioni costringendo il modello a rispondere solo sui documenti forniti',
        'Trasformare centinaia di pagine di PDF, manuali e appunti in una centrale personale di intelligence cognitiva',
        'Audio Overviews: la rivoluzione dei podcast di studio generati dall’IA per apprendere anche in movimento',
        'Strategie avanzate di interrogazione per incrociare dati, evidenziare contraddizioni ed estrarre insight profondi',
        'Esempi pratici: tesi di laurea, preparazione a concorsi pubblici, ricerca giuridica e pianificazione strategica'
      ],
      skills: ['NotebookLM', 'Gemini AI', 'Grounding', 'Ricerca Accademica', 'Sintesi Veloce', 'Audio Overview', 'Produttività']
    }
  },
  'talk-ai-security-essencial': {
    en: {
      title: 'AI Security - The Essential Defense',
      subtitle: 'Shielding Systems, Prompts, and Pipelines Against Modern Attacks and Breaches',
      targetAudience: 'Software Engineers, Solutions Architects, CISOs, Cybersecurity Specialists, and Engineering Leaders',
      duration: '60 to 90 minutes (Technical or Executive Keynote)',
      format: 'In-Person or Online • In-Company, Technical Summits, and Security Conferences',
      description: 'The explosive adoption of LLMs and Autonomous Agents has created an entirely new attack surface. Explore the OWASP Top 10 for LLMs, direct and indirect prompt injections, data poisoning, and resilient defensive guardrail architectures.',
      topics: [
        'Anatomy of modern AI exploits: direct & indirect prompt injection, jailbreaks, and context-based data exfiltration',
        'Silent vulnerabilities in RAG architectures and risks when consuming unprotected external model endpoints',
        'Implementing multi-layered defense lines: NeMo Guardrails, Llama Guard, input/output sanitization, and sandboxing',
        'Enterprise API secrets management, sensitive data masking (PII), and fine-grained access control (RBAC/ACL)',
        'Incident response playbooks and real-time anomaly telemetry across generative inference workflows'
      ],
      skills: ['AI Security', 'OWASP for LLM', 'Prompt Injection', 'Guardrails', 'Cybersecurity', 'RAG Security', 'DevSecOps']
    },
    es: {
      title: 'AI Security - La Seguridad Esencial',
      subtitle: 'Blindando Sistemas, Prompts y Pipelines de IA contra Amenazas Modernas',
      targetAudience: 'Ingenieros de Software, Arquitectos de Soluciones, CISOs, Especialistas en Ciberseguridad y Líderes Técnicos',
      duration: '60 a 90 minutos (Keynote Técnico o Ejecutivo)',
      format: 'Presencial u Online • In-Company, Conferencias Técnicas y Congresos de Seguridad',
      description: 'La adopción masiva de LLMs y Agentes Autónomos generó una superficie de ataque sin precedentes. Analiza los riesgos críticos del OWASP Top 10 para LLMs, inyecciones de prompt, envenenamiento de datos y guardrails defensivos.',
      topics: [
        'Anatomía de los ataques modernos: Prompt Injection directa e indirecta, Jailbreaks y fuga de datos vía contexto',
        'Vulnerabilidades silenciosas en sistemas RAG y riesgos al consumir APIs externas de modelos desprotegidos',
        'Implementación de defensas por capas: NeMo Guardrails, Llama Guard, sanitización de E/S y entornos aislados (sandboxing)',
        'Gestión de claves de API, secretos corporativos y control de acceso granular basado en roles (RBAC/ACL)',
        'Protocolos de respuesta ante incidentes y monitorización en tiempo real de anomalías en flujos generativos'
      ],
      skills: ['Seguridad en IA', 'OWASP para LLM', 'Prompt Injection', 'Guardrails', 'Ciberseguridad', 'Seguridad en RAG', 'DevSecOps']
    },
    fr: {
      title: 'AI Security - La Sécurité Essentielle',
      subtitle: 'Protéger Systèmes, Prompts et Pipelines d’IA contre les Nouvelles Vulnérabilités',
      targetAudience: 'Ingénieurs Logiciels, Architectes Solutions, RSSI, Experts en Cybersécurité et Directeurs Techniques',
      duration: '60 à 90 minutes (Keynote Technique ou Exécutif)',
      format: 'Présentiel ou En Ligne • Séminaires Techniques, Congrès et Hackathons Sécurité',
      description: 'L’essor fulgurant des LLMs et des Agents Autonomes a ouvert une surface d’attaque inédite. Maîtrisez le Top 10 OWASP pour LLMs, injections de prompts directes et indirectes, empoisonnement de données et architecture de guardrails.',
      topics: [
        'Anatomie des attaques contemporaines : injections de prompt directes/indirectes, jailbreaks et fuites via le contexte',
        'Vulnérabilités silencieuses dans les pipelines RAG et risques liés à la consommation d’APIs de modèles non protégées',
        'Mise en œuvre de défenses multicouches : NeMo Guardrails, Llama Guard, assainissement E/S et isolation en bac à sable',
        'Gestion des clés d’API, protection des secrets industriels et contrôle d’accès basé sur les rôles (RBAC/ACL)',
        'Plans de réponse aux incidents et surveillance télémétrique en temps réel des flux génératifs'
      ],
      skills: ['Sécurité de l’IA', 'OWASP pour LLM', 'Injection de Prompt', 'Guardrails', 'Cybersécurité', 'Sécurité RAG', 'DevSecOps']
    },
    it: {
      title: 'AI Security - La Sicurezza Essenziale',
      subtitle: 'Proteggere Sistemi, Prompt e Pipeline di IA contro le Nuove Minacce Cibernetiche',
      targetAudience: 'Ingegneri Software, Architetti di Sistemi, CISO, Specialisti di Cybersecurity e Leader Tecnologici',
      duration: 'Da 60 a 90 minuti (Keynote Tecnico o Esecutivo)',
      format: 'In Presenza o Online • In-Company, Conferenze Tecniche e Summit di Sicurezza',
      description: 'L’adozione massiccia di LLM e Agenti Autonomi ha inaugurato una superficie di attacco del tutto inedita. Esplora il framework OWASP Top 10 per LLM, injection di prompt diretti e indiretti, poisoning dei dati e guardrail resilienti.',
      topics: [
        'Anatomia dei vettori d’attacco attuali: prompt injection diretta e indiretta, jailbreak ed esfiltrazione di dati via contesto',
        'Vulnerabilità nascoste nelle architetture RAG e pericoli connessi all’uso disinvolto di API di modelli terzi',
        'Adozione di difese stratificate: NeMo Guardrails, Llama Guard, sanificazione I/O e sandboxing degli strumenti',
        'Gestione protetta di API secret, credenziali aziendali e controllo degli accessi basato su ruoli (RBAC/ACL)',
        'Piani di risposta agli incidenti e monitoraggio telemetrico in tempo reale di anomalie nei flussi generativi'
      ],
      skills: ['Sicurezza nell’IA', 'OWASP per LLM', 'Prompt Injection', 'Guardrails', 'Cybersecurity', 'RAG Security', 'DevSecOps']
    }
  },
  'talk-o-humano-essencial-ia': {
    en: {
      title: 'The Human is Essential in the Age of AI',
      subtitle: 'Empathy, Discernment, Sensitivity, and the Irreplaceable Power of Human Uniqueness',
      targetAudience: 'Leaders, Teams in Transformation, Academic Communities, Corporate Conventions, and Keynote Plenaries',
      duration: '60 to 90 minutes (Inspirational & Strategic Magna Keynote)',
      format: 'In-Person or Online • Major Summits, Year-End Conventions, and Corporate Kick-offs',
      description: 'An inspiring and deeply moving keynote on our irreplaceable role in an automated world. Machines calculate probabilities and process billions of parameters, but humans feel, dream, care, choose with ethics, and give true meaning to existence.',
      topics: [
        'The trap of competing with machines on their home turf: raw processing speed and mechanical scale',
        'Our irreducible human competencies: genuine empathy, deep listening, moral wisdom, intuition, and warmth',
        'From artificial intelligence to human wisdom: how to lead teams with heart and ethical discernment',
        'Conquering the fear of obsolescence: rediscovering the dignity, purpose, and beauty of human craft',
        'The fertile synergy blueprint: delegating the repetitive to algorithms to elevate what makes us truly human'
      ],
      skills: ['Humanity', 'Empathetic Leadership', 'Emotional Intelligence', 'Purpose', 'Future of Work', 'Ethics & Values', 'Sensitivity']
    },
    es: {
      title: 'El Humano es Esencial en la Era de la Inteligencia Artificial',
      subtitle: 'Empatía, Discernimiento, Sensibilidad y el Valor Inolvidable de la Singularidad Humana',
      targetAudience: 'Liderazgos, Equipos en Transformación, Comunidades Académicas, Congresos y Grandes Plenarias',
      duration: '60 a 90 minutos (Conferencia Magistral Inspiracional y Estratégica)',
      format: 'Presencial u Online • Grandes Eventos, Convenciones y Kick-offs Corporativos',
      description: 'Una conferencia conmovedora, profunda e inspiradora sobre el papel insustituible de las personas en un mundo hiperautomatizado. La tecnología calcula probabilidades, pero son los seres humanos quienes sienten, sueñan, cuidan y aportan propósito.',
      topics: [
        'La trampa de querer competir con las máquinas en su propio terreno: velocidad de procesamiento y escala fría',
        'Las competencias humanas irreductibles: empatía sincera, escucha activa, sabiduría moral e intuición',
        'De la inteligencia artificial a la sabiduría humana: cómo liderar personas con corazón y juicio ético',
        'Vencer el miedo a la obsolescencia: reencontrar el sentido, la dignidad y el propósito del trabajo humano',
        'El modelo de sinergia fértil: delegar lo repetitivo a los algoritmos para enaltecer lo que nos hace verdaderamente humanos'
      ],
      skills: ['Humanidad', 'Liderazgo Empático', 'Inteligencia Emocional', 'Propósito', 'Futuro del Trabajo', 'Ética y Valores', 'Sensibilidad']
    },
    fr: {
      title: 'L’Humain est Essentiel à l’Ère de l’Intelligence Artificielle',
      subtitle: 'Empathie, Discernement, Sensibilité et la Valeur Inégalée de la Singularité Humaine',
      targetAudience: 'Dirigeants, Équipes en Mutation, Universités, Congrès Annuels et Grandes Assemblées',
      duration: '60 à 90 minutes (Conférence Plénière Inspirante et Stratégique)',
      format: 'Présentiel ou En Ligne • Séminaires de Direction, Conventions et Kick-offs',
      description: 'Une conférence émouvante, profonde et inspirante sur la place centrale et irremplaçable de l’être humain dans un monde automatisé. La technologie calcule des probabilités, mais ce sont les personnes qui ressentent, rêvent, aiment et donnent un sens à la vie.',
      topics: [
        'Le piège de concurrencer les machines sur leur propre terrain : vitesse brute de calcul et automatisation aveugle',
        'Nos compétences humaines inaliénables : empathie sincère, écoute active, sagesse morale, intuition et chaleur humaine',
        'De l’intelligence artificielle à la sagesse humaine : diriger des équipes avec cœur et discernement éthique',
        'Surmonter la peur du déclassement : redécouvrir la dignité, la vocation et la valeur singulière du travail humain',
        'L’alliance féconde : confier le répétitif aux algorithmes pour magnifier ce qui fait notre humanité'
      ],
      skills: ['Humanité', 'Leadership Empathique', 'Intelligence Émotionnelle', 'Sens & Mission', 'Avenir du Travail', 'Éthique & Valeurs', 'Sensibilité']
    },
    it: {
      title: 'L’Umano è Essenziale nell’Era dell’Intelligenza Artificiale',
      subtitle: 'Empatia, Discernimento, Sensibilità e il Valore Irrinunciabile della Singolarità Umana',
      targetAudience: 'Leader, Team in Transizione, Comunità Accademiche, Convention e Grandi Plenarie',
      duration: 'Da 60 a 90 minuti (Keynote Ispirazionale e Strategico)',
      format: 'In Presenza o Online • Grandi Eventi, Convention Annuali e Kick-off Aziendali',
      description: 'Una conferenza emozionante e profonda sul ruolo fondamentale dell’essere umano in un mondo iper-automatizzato. La tecnologia calcola parametri e stime statistiche, ma sono le persone a sognare, curare, scegliere con etica e donare scopo all’esistenza.',
      topics: [
        'La trappola di competere con le macchine sul loro stesso terreno: velocità di calcolo e volumi meccanici',
        'Le competenze umane irriducibili: empatia autentica, ascolto attivo, saggezza morale, intuizione e calore umano',
        'Dall’intelligenza artificiale alla saggezza umana: guidare le persone con cuore, integrità e discernimento',
        'Superare la paura dell’obsolescenza: riscoprire il significato profondo e la dignità del lavoro umano',
        'Il modello di sinergia virtuosa: delegare il lavoro ripetitivo agli algoritmi per valorizzare ciò che ci rende unici'
      ],
      skills: ['Umanità', 'Leadership Empatica', 'Intelligenza Emotiva', 'Scopo & Senso', 'Futuro del Lavoro', 'Etica & Valori', 'Sensibilità']
    }
  }
};

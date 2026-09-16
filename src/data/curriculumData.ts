import { Language } from '../types';

export interface CurriculumContent {
  lang: Language;
  name: string;
  headline: string;
  contact: {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    portfolio: string;
  };
  summary: string;
  keyCompetencies: {
    title: string;
    description: string;
  }[];
  professionalExperience: {
    role: string;
    company: string;
    location: string;
    period: string;
    bullets: string[];
  }[];
  measurableAchievements: string[];
  skills: {
    category: string;
    items: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
    details?: string;
  }[];
  certifications: string[];
  publicationsAndLectures: string[];
  keywords: string[];
}

export const CURRICULUM_PT: CurriculumContent = {
  lang: 'pt',
  name: 'ELAINE FIGUEIREDO',
  headline: 'Consultora de Inteligência Artificial | Ciência de Dados | Análise de Negócios | Professora Universitária',
  contact: {
    location: 'SP',
    phone: '(11) 999479666',
    email: 'profelainefigueiredo@outlook.com',
    linkedin: 'https://www.linkedin.com/in/elainefigueiredo/',
    portfolio: 'www.elainefigueiredo.com.br'
  },
  summary:
    'Profissional de Tecnologia, Dados e Inteligência Artificial com trajetória multidisciplinar em docência universitária, análise de negócios, engenharia de software, banco de dados, ciência de dados e aplicação estratégica de IA. Desde 2006, atua na formação de profissionais de TI e na tradução de problemas complexos em soluções orientadas a dados, automação, governança e inovação. Diferencia-se pela combinação entre visão acadêmica, capacidade consultiva, pensamento analítico e comunicação executiva, conectando tecnologia, negócio, educação e transformação digital para gerar impacto mensurável em projetos, equipes e organizações. Busca oportunidades como Cientista de Dados / Consultora de IA / Analista de Negócios Sênior / Professora de Pós-graduação.',
  keyCompetencies: [
    {
      title: 'Inteligência Artificial e Dados',
      description:
        'IA aplicada, Machine Learning, ciência de dados, CRISP-DM, MLOps, engenharia de prompts, análise preditiva, modelagem semântica, ontologias, NLP.'
    },
    {
      title: 'Análise de Negócios e Produto',
      description:
        'Levantamento de requisitos, discovery, documentação funcional, análise de processos, priorização, gestão de stakeholders, OKRs/KPIs, tomada de decisão data-driven.'
    },
    {
      title: 'Banco de Dados e Engenharia',
      description:
        'SQL, modelagem relacional/dimensional, ETL/ELT, data warehouse, integração de sistemas, APIs, arquitetura de software, microsserviços Python | Java.'
    },
    {
      title: 'Educação e Liderança Técnica',
      description:
        'Docência no ensino superior, desenho instrucional, mentoria, palestras, facilitação de workshops, comunicação técnica para públicos executivos e acadêmicos.'
    }
  ],
  professionalExperience: [
    {
      role: 'Consultora em Tecnologia, Inteligência Artificial, Dados e Transformação Digital',
      company: 'Capco Consultoria',
      location: 'São Paulo-SP - Remoto',
      period: '07/2024 – 05/2026',
      bullets: [
        'Conduziu diagnósticos de maturidade digital e oportunidades de IA, traduzindo objetivos de negócio em roadmaps práticos com foco em [redução de custos / aumento de produtividade / crescimento de receita].',
        'Desenhou soluções orientadas a dados para [área/produto], estruturando indicadores, pipelines, modelos analíticos e critérios de governança para apoiar decisões executivas.',
        'Elaborou estratégias de adoção de IA generativa, engenharia de prompts e automação de processos, resultando em Automação e Documentação de Legados, Conversor de Código.',
        'Facilitou workshops, briefings executivos e treinamentos para equipes multidisciplinares, elevando a compreensão sobre IA, dados e inovação em torno de 200 pessoas por ano.'
      ]
    },
    {
      role: 'Professora Universitária em Tecnologia da Informação (Graduação e Pós)',
      company: 'USP-Esalq, SENAC-SP, SENAI-RS, Belas Artes',
      location: 'São Paulo (Remoto, Híbrido e Presencial)',
      period: '2022 – Atual',
      bullets: [
        'Ministra disciplinas de Banco de Dados, Design e Desenvolvimento de Serviços e Microsserviços, Interoperabilidade e Semântica, POO I e II (Programação Orientada a Objetos), Engenharia de Software, Cibersegurança em Sistemas de IA, Gestão de Projetos, Empreendedorismo e Liderança, Integração de Sistemas, Inteligência Artificial e temas correlatos para cursos de graduação e pós-graduação em tecnologia.',
        'Desenvolveu planos de aula, avaliações, estudos de caso e projetos aplicados, conectando fundamentos teóricos a cenários reais de mercado, indústria e transformação digital.',
        'Orientou estudantes em projetos acadêmicos e profissionais, apoiando a construção de soluções com [SQL / Python / APIs / BI / IA / Cloud], com impacto na vida de mais de 1000 alunos.',
        'Contribuiu para a atualização curricular e disseminação de boas práticas em dados, IA, arquitetura de software e metodologias ágeis, fortalecendo a empregabilidade dos alunos.'
      ]
    },
    {
      role: 'Analista de Negócios Sênior / Business Analyst',
      company: 'Setia, Prodata Mobility, Reportflex, Fortbras',
      location: 'São Paulo (Presencial/Híbrido)',
      period: '02/2011 - 10/2019',
      bullets: [
        'Atuou como ponte entre áreas de negócio, tecnologia e usuários finais, estruturando requisitos, regras de negócio, fluxos, documentação funcional e critérios de aceite.',
        'Mapeou processos críticos e identificou oportunidades de melhoria, apoiando iniciativas de digitalização, integração de sistemas e automação.',
        'Apoiou squads e equipes técnicas na priorização de backlog, refinamento de histórias de usuário, validação de entregas e comunicação com stakeholders estratégicos.',
        'Produziu análises, indicadores e relatórios executivos para tomada de decisão, reduzindo ambiguidades e aumentando a previsibilidade de entregas.'
      ]
    },
    {
      role: 'Pesquisadora em Inteligência Artificial, Ontologias e Informática Biomédica',
      company: 'FACCAMP / CTI – Renato Archer',
      location: 'Campinas-SP',
      period: '08/2018 - 02/2022',
      bullets: [
        'Realizou pesquisa aplicada em Inteligência Artificial, representação do conhecimento, ontologias biomédicas e modelagem semântica para apoio a contextos complexos de saúde.',
        'Investigou padrões, modelos e estruturas de interoperabilidade semântica, incluindo [OpenEHR/HL7/UMLS/ OWL / SPARQL / BioPortal], com foco em qualidade, interoperabilidade e reúso da informação.',
        'Produziu revisão bibliográfica, análise conceitual e artefatos acadêmicos alinhados ao estado da arte, fortalecendo a base científica para aplicações de IA em domínios especializados.',
        'Desenvolvimento do Framework BioFrame Semântico.'
      ]
    }
  ],
  measurableAchievements: [
    'Reduziu em 60% o tempo de análise, documentação ou execução de processos por meio de automação, padronização e uso de IA generativa.',
    'Capacitou 10000 alunos/profissionais em temas de dados, IA, engenharia de software e integração de sistemas, com avaliação média de 9 - Promotor.',
    'Contribuiu para 20 projetos de tecnologia, pesquisa ou consultoria, envolvendo requisitos, arquitetura, dados, IA, governança e comunicação com stakeholders.'
  ],
  skills: [
    {
      category: 'Linguagens e Dados',
      items: 'Python, SQL, JavaScript, R (Básico), Java, análise exploratória de dados, modelagem de dados, data storytelling.'
    },
    {
      category: 'IA, ML e Analytics',
      items: 'Machine Learning, IA generativa Life cycle, engenharia de prompts, NLP, ontologias, mineração de dados, CRISP-DM, SEMMA, KDD, MLOps.'
    },
    {
      category: 'Bancos e BI',
      items: 'SQL Server, PostgreSQL, MySQL, MongoDB, modelagem dimensional, ETL/ELT, data Warehouse, datalakes, Power BI.'
    },
    {
      category: 'Arquitetura e Integração',
      items: 'APIs REST, GraphQL, microsserviços, DDD, arquitetura hexagonal, mensageria, Docker, cloud [AWS/Azure/GCP].'
    },
    {
      category: 'Gestão e Métodos',
      items: 'Scrum, Kanban, OKRs, análise de requisitos, documentação técnica, priorização de backlog, governança de dados, LGPD.'
    },
    {
      category: 'Soft Skills',
      items: 'Comunicação executiva, didática, pensamento crítico, liderança técnica, facilitação, resolução de problemas, adaptabilidade, visão sistêmica.'
    }
  ],
  education: [
    {
      degree: 'Doutorado em Ciência da Computação / Inteligência Artificial',
      institution: 'UNICAMP',
      year: '2023 - Parcial',
      details: 'Pesquisa em ML Reinforcement Learning e Engenharia de Software Experimental.'
    },
    {
      degree: 'Mestrado em Ciência da Computação',
      institution: 'FACCAMP',
      year: '2022',
      details: 'Ênfase em Inteligência Artificial e Ontologias Biomédicas aplicadas à oncologia.'
    },
    {
      degree: 'Pós-graduação em Psicopedagogia',
      institution: 'FAIMI',
      year: '2008'
    },
    {
      degree: 'Bacharelado em Sistemas de Informação',
      institution: 'FAIMI',
      year: '2005'
    }
  ],
  certifications: [
    'SmallTalk English Speaking Level Test - Certificado oficial EF SET 46/100 (B1 Intermediário).',
    'Palc – Agile Leadership - AIB Institute'
  ],
  publicationsAndLectures: [
    'The reuse of electronic health records information models in the oncology domain: Studies with the bioframe framework. - JOURNAL OF BIOMEDICAL INFORMATICS, p. 104704, 2024. Citações: 2 | 1 2024. Impacto: , v. 157.',
    'Semântica em prontuários eletrônicos para oncologia pediátrica: uma revisão integrativa. - JHI - Journal Health Informatics, Journal Health Informatics, p. 61 - 69, 30 set. 2023.',
    'Combate ao Covid19: Detecção em tempo real de indivíduos sem máscara em ambiente escolar por meio de Deep Learning. Brazilian eScience Workshop, 2021, Brasil. Anais do XV Brazilian e-Science Workshop (BRESCI 2021), 2021. p. 113.',
    'A Multidimensional Framework for Semantic Electronic Health Records in Oncology Domain. 2021 IEEE 30th International Conference on Enabling Technologies: Infrastructure for Collaborative Enterprises (WETICE), 2021, Bayonne. 2021 IEEE 30th International Conference on Enabling Technologies: Infrastructure for Collaborative Enterprises (WETICE), 2021. p. 165.',
    'Workshop Lunch and Learning – Tendências da Tecnologia e IA 2026, com 209 participantes e avaliação Excelente. 2026 - Capco',
    'Workshop Lunch and Learning – Engenharia de Prompt e Contexto – não só de chatgpt vive o homem moderno, com 301 participantes e avaliação Excelente. 2025 - Capco',
    'Workshop Lunch and Learning – Data Science & Machine Learning – Overview & Frameworks, com 179 participantes e avaliação Excelente. 2025 - Capco',
    'Workshop Minicurso: TTS e STT com Whisper da Open AI & Natural Language Processing - Capacitação em IA, com 500 participantes e avaliação Excelente – 2024 – SENAC – SP'
  ],
  keywords: [
    'Inteligência Artificial',
    'Ciência de Dados',
    'Machine Learning',
    'IA Generativa',
    'Engenharia de Prompt',
    'Análise de Negócios',
    'Business Analysis',
    'SQL',
    'Python',
    'Banco de Dados',
    'BI',
    'ETL',
    'Data Warehouse',
    'MLOps',
    'Governança de Dados',
    'APIs',
    'Microsserviços',
    'Engenharia de Software',
    'Docência Superior',
    'Pesquisa Aplicada',
    'Transformação Digital',
    'Agile',
    'Scrum',
    'LGPD'
  ]
};

export const CURRICULUM_EN: CurriculumContent = {
  lang: 'en',
  name: 'ELAINE FIGUEIREDO',
  headline: 'Artificial Intelligence Consultant | Data Science | Business Analytics | University Professor',
  contact: {
    location: 'SP',
    phone: '(11) 999479666',
    email: 'profelainefigueiredo@outlook.com',
    linkedin: 'https://www.linkedin.com/in/elainefigueiredo/',
    portfolio: 'www.elainefigueiredo.com.br'
  },
  summary:
    'Technology, Data and Artificial Intelligence professional with a multidisciplinary trajectory in university teaching, business analysis, software engineering, database, data science and strategic application of AI. Since 2006, has been working in the training of IT professionals and in the translation of complex problems into data-driven solutions, automation, governance and innovation. Differentiated by the combination of academic vision, consultative skills, analytical thinking and executive communication, connecting technology, business, education and digital transformation to generate measurable impact on projects, teams and organizations. Seeks opportunities as a Data Scientist / AI Consultant / Senior Business Analyst / Graduate Professor.',
  keyCompetencies: [
    {
      title: 'Artificial Intelligence and Data',
      description:
        'Applied AI, Machine Learning, Data Science, CRISP-DM, MLOps, Prompt Engineering, Predictive Analytics, Semantic Modeling, Ontologies, NLP.'
    },
    {
      title: 'Business and Product Analysis',
      description:
        'Requirements gathering, discovery, functional documentation, process analysis, prioritization, stakeholder management, OKRs/KPIs, data-driven decision making.'
    },
    {
      title: 'Database & Engineering',
      description:
        'SQL, relational/dimensional modeling, ETL/ELT, data warehouse, systems integration, APIs, software architecture, Python microservices | Java.'
    },
    {
      title: 'Education and Technical Leadership',
      description:
        'Teaching in higher education, instructional design, mentoring, lectures, workshop facilitation, technical communication for executive and academic audiences.'
    }
  ],
  professionalExperience: [
    {
      role: 'Technology, Artificial Intelligence, Data and Digital Transformation Consultant',
      company: 'Capco Consulting',
      location: 'São Paulo-SP - Remote',
      period: '07/2024 – 05/2026',
      bullets: [
        'Conducted digital maturity diagnostics and AI opportunities, translating business objectives into actionable roadmaps focused on cost reduction, increased productivity, and revenue growth.',
        'Designed data-driven solutions structuring indicators, pipelines, analytical models, and governance criteria to support executive decisions.',
        'Developed strategies for adopting generative AI, prompt engineering, and process automation, resulting in Legacy Automation and Documentation, Code Converter.',
        'Facilitated workshops, executive briefings, and training for multidisciplinary teams, raising the understanding of AI, data, and innovation to around 200 people per year.'
      ]
    },
    {
      role: 'University Professor in Information Technology (Undergraduate and Postgraduate)',
      company: 'USP-Esalq, SENAC-SP, SENAI-RS, Belas Artes',
      location: 'São Paulo (Remote, Hybrid and Face-to-face)',
      period: '2022 – Current',
      bullets: [
        'Teaches courses in Database, Design and Development of Services and Microservices, Interoperability and Semantics, OOP I and II (Object-Oriented Programming), Software Engineering, Cybersecurity in AI Systems, Project Management, Entrepreneurship and Leadership, Systems Integration, Artificial Intelligence and related topics for undergraduate and graduate courses in technology.',
        'Developed lesson plans, assessments, case studies and applied projects, connecting theoretical foundations to real market, industry and digital transformation scenarios.',
        'Guided students in academic and professional projects, supporting the construction of solutions with SQL, Python, APIs, BI, AI, and Cloud, with an impact on the lives of more than 1000 students.',
        'Contributed to the curricular update and dissemination of good practices in data, AI, software architecture and agile methodologies, strengthening the employability of students.'
      ]
    },
    {
      role: 'Senior Business Analyst',
      company: 'Setia, Prodata Mobility, Reportflex, Fortbras',
      location: 'São Paulo (Face-to-face/Hybrid)',
      period: '02/2011 - 10/2019',
      bullets: [
        'Acted as a bridge between business areas, technology and end users, structuring requirements, business rules, flows, functional documentation and acceptance criteria.',
        'Mapped critical processes and identified opportunities for improvement, supporting digitalization, systems integration and automation initiatives.',
        'Supported squads and technical teams in prioritizing backlogs, refining user stories, validating deliveries, and communicating with strategic stakeholders.',
        'Produced analyses, indicators and executive reports for decision making, reducing ambiguities and increasing the predictability of deliveries.'
      ]
    },
    {
      role: 'Researcher in Artificial Intelligence, Ontologies and Biomedical Informatics',
      company: 'FACCAMP / CTI – Renato Archer',
      location: 'Campinas-SP',
      period: '08/2018 - 02/2022',
      bullets: [
        'Conducted applied research in Artificial Intelligence, knowledge representation, biomedical ontologies, and semantic modeling to support complex healthcare contexts.',
        'Investigated semantic interoperability standards, models and frameworks, including OpenEHR, HL7, UMLS, OWL, SPARQL, and BioPortal, with a focus on quality, interoperability and information reuse.',
        'Produced literature review, conceptual analysis and academic artifacts aligned with the state of the art, strengthening the scientific basis for AI applications in specialized domains.',
        'Development of the Semantic BioFrame Framework.'
      ]
    }
  ],
  measurableAchievements: [
    'Reduced the time to analyze, document, or execute processes by 60% through automation, standardization, and the use of generative AI.',
    'Trained 10000 students/professionals in data, AI, software engineering and systems integration topics, with an average rating of 9 - Promoter.',
    'Contributed to 20 technology, research or consulting projects, involving requirements, architecture, data, AI, governance and communication with stakeholders.'
  ],
  skills: [
    {
      category: 'Languages and Data',
      items: 'Python, SQL, JavaScript, R (Basic), Java, exploratory data analysis, data modeling, data storytelling.'
    },
    {
      category: 'AI, ML, and Analytics',
      items: 'Machine Learning, Generative AI Life cycle, prompt engineering, NLP, ontologies, data mining, CRISP-DM, SEMMA, KDD, MLOps.'
    },
    {
      category: 'Databases & BI',
      items: 'SQL Server, PostgreSQL, MySQL, MongoDB, dimensional modeling, ETL/ELT, data warehouse, datalakes, Power BI.'
    },
    {
      category: 'Architecture and Integration',
      items: 'REST APIs, GraphQL, microservices, DDD, hexagonal architecture, messaging, Docker, cloud [AWS/Azure/GCP].'
    },
    {
      category: 'Management and Methods',
      items: 'Scrum, Kanban, OKRs, requirements analysis, technical documentation, backlog prioritization, data governance, LGPD.'
    },
    {
      category: 'Soft Skills',
      items: 'Executive communication, didactics, critical thinking, technical leadership, facilitation, problem solving, adaptability, systemic vision.'
    }
  ],
  education: [
    {
      degree: 'PhD in Computer Science / Artificial Intelligence',
      institution: 'UNICAMP',
      year: '2023 - Partial',
      details: 'ML Reinforcement Learning Research and Experimental Software Engineering.'
    },
    {
      degree: "Master's Degree in Computer Science",
      institution: 'FACCAMP',
      year: '2022',
      details: 'Emphasis on Artificial Intelligence and Biomedical Ontologies applied to oncology.'
    },
    {
      degree: 'Post-graduation in Psychopedagogy',
      institution: 'FAIMI',
      year: '2008'
    },
    {
      degree: "Bachelor's degree in Information Systems",
      institution: 'FAIMI',
      year: '2005'
    }
  ],
  certifications: [
    'SmallTalk English Speaking Level Test - Official EF SET 46/100 certificate (B1 Intermediate).',
    'Palc – Agile Leadership - AIB Institute'
  ],
  publicationsAndLectures: [
    'The reuse of electronic health records information models in the oncology domain: Studies with the bioframe framework. - JOURNAL OF BIOMEDICAL INFORMATICS, p. 104704, 2024. Citations: 2 | 1 2024. Impact: , v. 157.',
    'Semantics in electronic medical records for pediatric oncology: an integrative review. - JHI - Journal Health Informatics, Journal Health Informatics, p. 61 - 69, 30 Sept. 2023.',
    'Combating Covid19: Real-time detection of individuals without a mask in a school environment through Deep Learning. Brazilian eScience Workshop, 2021, Brazil. Annals of the XV Brazilian e-Science Workshop (BRESCI 2021), 2021. p. 113.',
    'A Multidimensional Framework for Semantic Electronic Health Records in Oncology Domain. 2021 IEEE 30th International Conference on Enabling Technologies: Infrastructure for Collaborative Enterprises (WETICE), 2021, Bayonne. 2021 IEEE 30th International Conference on Enabling Technologies: Infrastructure for Collaborative Enterprises (WETICE), 2021. p. 165.',
    'Lunch and Learning Workshop – Technology and AI Trends 2026, with 209 participants and Excellent rating. 2026 - Capco',
    'Lunch and Learning Workshop – Prompt and Context Engineering – not only chatgpt lives the modern man, with 301 participants and Excellent rating. 2025 - Capco',
    'Workshop Lunch and Learning – Data Science & Machine Learning – Overview & Frameworks, with 179 participants and Excellent rating. 2025 - Capco',
    'Workshop Minicourse: TTS and STT with Whisper from Open AI & Natural Language Processing - AI Training, with 500 participants and Excellent evaluation – 2024 – SENAC – SP'
  ],
  keywords: [
    'Artificial Intelligence',
    'Data Science',
    'Machine Learning',
    'Generative AI',
    'Prompt Engineering',
    'Business Analytics',
    'Business Analysis',
    'SQL',
    'Python',
    'Database',
    'BI',
    'ETL',
    'Data Warehouse',
    'MLOps',
    'Data Governance',
    'APIs',
    'Microservices',
    'Software Engineering',
    'Higher Education',
    'Applied Research',
    'Digital Transformation',
    'Agile',
    'Scrum',
    'LGPD'
  ]
};

export const CURRICULUM_ES: CurriculumContent = {
  lang: 'es',
  name: 'ELAINE FIGUEIREDO',
  headline: 'Consultora de Inteligencia Artificial | Ciencia de Datos | Análisis de Negocios | Profesora Universitaria',
  contact: {
    location: 'São Paulo - SP / Remoto',
    phone: '(11) 999479666',
    email: 'profelainefigueiredo@outlook.com',
    linkedin: 'https://www.linkedin.com/in/elainefigueiredo/',
    portfolio: 'www.elainefigueiredo.com.br'
  },
  summary:
    'Profesional de Tecnología, Datos e Inteligencia Artificial con trayectoria multidisciplinaria en docencia universitaria, análisis de negocios, ingeniería de software, bases de datos y ciencia de datos. Desde 2006 impulsa la formación de talentos de TI y traduce desafíos complejos en soluciones de alto impacto con IA, automatización y gobernanza. Destaca por su combinación de visión académica, consultoría de negocio y comunicación ejecutiva clara y transformadora.',
  keyCompetencies: [
    {
      title: 'Inteligencia Artificial y Datos',
      description:
        'IA aplicada, Machine Learning, CRISP-DM, MLOps, ingeniería de prompt y contexto, análisis predictivo, ontologías y NLP.'
    },
    {
      title: 'Análisis de Negocios y Producto',
      description:
        'Elicitación de requisitos, discovery, documentación funcional, modelado de procesos, priorización, OKRs/KPIs y decisiones data-driven.'
    },
    {
      title: 'Bases de Datos e Integración',
      description:
        'SQL, modelado relacional y dimensional, ETL/ELT, data warehouse, APIs REST, microservicios, arquitecturas distribuidas Python y Java.'
    },
    {
      title: 'Educación y Liderazgo Técnico',
      description:
        'Docencia en grado y posgrado, diseño instruccional, conferencias magistrales, mentoría y comunicación técnica para líderes ejecutivos.'
    }
  ],
  professionalExperience: [
    {
      role: 'Consultora en Tecnología, Inteligencia Artificial, Datos y Transformación Digital',
      company: 'Capco Consultoría',
      location: 'São Paulo-SP - Remoto',
      period: '07/2024 – 05/2026',
      bullets: [
        'Diagnósticos de madurez digital y oportunidades de IA, traduciendo metas de negocio en roadmaps accionables enfocados en eficiencia y crecimiento.',
        'Diseño de soluciones data-driven con pipelines, modelos analíticos y gobernanza para soportar decisiones directivas.',
        'Estrategias de adopción de IA generativa, ingeniería de prompt y automatización de procesos y documentación legacy.',
        'Facilitación de workshops ejecutivos y capacitación para más de 200 profesionales al año.'
      ]
    },
    {
      role: 'Profesora Universitaria en Tecnología de la Información (Grado y Posgrado)',
      company: 'USP-Esalq, SENAC-SP, SENAI-RS, Belas Artes',
      location: 'São Paulo (Remoto, Híbrido y Presencial)',
      period: '2022 – Actualidad',
      bullets: [
        'Docente de Bases de Datos, Microservicios, Interoperabilidad Semántica, POO, Ciberseguridad en IA y Gestión de Proyectos.',
        'Diseño de planes docentes, casos prácticos y proyectos aplicados que conectan la teoría con la industria.',
        'Mentoría en proyectos con SQL, Python, APIs, BI e IA, impactando a más de 1.000 estudiantes.',
        'Actualización curricular y difusión de buenas prácticas en datos, arquitectura de software y agilidad.'
      ]
    },
    {
      role: 'Analista de Negocios Senior',
      company: 'Setia, Prodata Mobility, Reportflex, Fortbras',
      location: 'São Paulo',
      period: '02/2011 - 10/2019',
      bullets: [
        'Enlace estratégico entre áreas de negocio, tecnología y usuarios finales para especificación funcional y criterios de aceptación.',
        'Mapeo de procesos críticos e identificación de oportunidades de digitalización y automatización.',
        'Soporte a squads y equipos técnicos en refinamiento de historias de usuario y priorización de backlog.',
        'Elaboración de informes ejecutivos e indicadores que aumentaron la predictibilidad de las entregas.'
      ]
    },
    {
      role: 'Investigadora en Inteligencia Artificial, Ontologías e Informática Biomédica',
      company: 'FACCAMP / CTI – Renato Archer',
      location: 'Campinas-SP',
      period: '08/2018 - 02/2022',
      bullets: [
        'Investigación aplicada en IA, representación del conocimiento y ontologías biomédicas para salud.',
        'Estudio de estándares de interoperabilidad semántica (OpenEHR, HL7, UMLS, OWL, SPARQL).',
        'Desarrollo del Framework Semantic BioFrame y autoría de publicaciones científicas arbitradas.'
      ]
    }
  ],
  measurableAchievements: [
    'Reducción del 60% en tiempos de análisis y documentación mediante automatización e IA generativa.',
    'Capacitación de más de 10.000 estudiantes y profesionales en datos e IA con evaluación promedio 9 (Promotor).',
    'Participación destacada en más de 20 proyectos estratégicos de consultoría y arquitectura tecnológica.'
  ],
  skills: CURRICULUM_EN.skills,
  education: [
    {
      degree: 'Doctorado en Ciencias de la Computación / IA',
      institution: 'UNICAMP',
      year: '2023 - Parcial',
      details: 'Investigación en Aprendizaje por Refuerzo e Ingeniería Experimental de Software.'
    },
    {
      degree: 'Máster en Ciencias de la Computación',
      institution: 'FACCAMP',
      year: '2022',
      details: 'Énfasis en Inteligencia Artificial y Ontologías Biomédicas aplicadas a la oncología.'
    },
    {
      degree: 'Posgrado en Psicopedagogía',
      institution: 'FAIMI',
      year: '2008'
    },
    {
      degree: 'Licenciatura en Sistemas de Información',
      institution: 'FAIMI',
      year: '2005'
    }
  ],
  certifications: [
    'SmallTalk English Speaking Level Test - EF SET 46/100 (B1 Intermedio).',
    'PALC – Agile Leadership - Instituto AIB'
  ],
  publicationsAndLectures: CURRICULUM_EN.publicationsAndLectures,
  keywords: CURRICULUM_EN.keywords
};

export const CURRICULUM_FR: CurriculumContent = {
  lang: 'fr',
  name: 'ELAINE FIGUEIREDO',
  headline: 'Consultante en Intelligence Artificielle | Data Science | Analyse Métier | Professeure d’Université',
  contact: {
    location: 'São Paulo - SP / Distanciel',
    phone: '(11) 999479666',
    email: 'profelainefigueiredo@outlook.com',
    linkedin: 'https://www.linkedin.com/in/elainefigueiredo/',
    portfolio: 'www.elainefigueiredo.com.br'
  },
  summary:
    'Experte en Technologies, Données et Intelligence Artificielle avec un parcours pluridisciplinaire en enseignement supérieur, analyse métier, génie logiciel, bases de données et data science. Depuis 2006, elle forme les talents de la tech et traduit les problématiques complexes en solutions fondées sur les données, l’automatisation et la gouvernance. Elle se distingue par l’alliance d’une rigueur académique, d’une expertise consultative et d’une communication claire.',
  keyCompetencies: [
    {
      title: 'Intelligence Artificielle et Données',
      description:
        'IA appliquée, Machine Learning, CRISP-DM, MLOps, ingénierie de prompt et de contexte, modélisation sémantique, ontologies et NLP.'
    },
    {
      title: 'Analyse Métier et Gestion de Produit',
      description:
        'Recueil des besoins, discovery, spécifications fonctionnelles, analyse de processus, gestion des parties prenantes, OKRs/KPIs et pilotage data-driven.'
    },
    {
      title: 'Bases de Données et Architecture',
      description:
        'SQL, modélisation relationnelle et dimensionnelle, ETL/ELT, data warehouse, APIs REST, microservices, architectures Python et Java.'
    },
    {
      title: 'Enseignement et Leadership Technique',
      description:
        'Enseignement supérieur, ingénierie pédagogique, conférences plénières, mentorat et communication exécutive.'
    }
  ],
  professionalExperience: [
    {
      role: 'Consultante Senior en IA, Données et Transformation Digitale',
      company: 'Capco Consulting',
      location: 'São Paulo-SP - Télétravail',
      period: '07/2024 – 05/2026',
      bullets: [
        'Diagnostics de maturité digitale et opportunités IA, traduisant les objectifs métier en feuilles de route concrètes.',
        'Conception de solutions data-driven avec pipelines, modèles analytiques et gouvernance décisionnelle.',
        'Déploiement de stratégies d’IA générative, prompt engineering et automatisation des systèmes legacy.',
        'Animation d’ateliers de direction et formation de plus de 200 décideurs et ingénieurs par an.'
      ]
    },
    {
      role: 'Professeure d’Université en Technologies de l’Information',
      company: 'USP-Esalq, SENAC-SP, SENAI-RS, Belas Artes',
      location: 'São Paulo',
      period: '2022 – Actuel',
      bullets: [
        'Enseignement en Bases de Données, Microservices, Interopérabilité Sémantique, POO, Cybersécurité et Gestion de Projets.',
        'Création de programmes pédagogiques alliant fondements théoriques et cas d’usage industriels.',
        'Accompagnement de plus de 1 000 étudiants sur des projets SQL, Python, APIs, BI et IA.',
        'Actualisation des programmes académiques aux meilleures pratiques du marché et de l’agilité.'
      ]
    },
    {
      role: 'Lead Business Analyst',
      company: 'Setia, Prodata Mobility, Reportflex, Fortbras',
      location: 'São Paulo',
      period: '02/2011 - 10/2019',
      bullets: [
        'Interface stratégique entre directions métier, équipes d’ingénierie et utilisateurs finaux.',
        'Cartographie de processus critiques et identification des leviers d’automatisation.',
        'Pilotage de squads agiles, affinement des user stories et priorisation de backlog.',
        'Production de tableaux de bord exécutifs réduisant les incertitudes de livraison.'
      ]
    },
    {
      role: 'Chercheuse en Intelligence Artificielle et Informatique Biomédicale',
      company: 'FACCAMP / CTI – Renato Archer',
      location: 'Campinas-SP',
      period: '08/2018 - 02/2022',
      bullets: [
        'Recherche appliquée en IA, représentation des connaissances et ontologies pour la santé.',
        'Étude des standards d’interopérabilité sémantique (OpenEHR, HL7, UMLS, OWL, SPARQL).',
        'Création du framework Semantic BioFrame et publications scientifiques dans des revues internationales.'
      ]
    }
  ],
  measurableAchievements: [
    'Réduction de 60% des délais d’analyse et de documentation via automatisation et IA générative.',
    'Plus de 10 000 étudiants et professionnels formés en data et IA (Note moyenne de satisfaction : 9/10).',
    'Contribution majeure à plus de 20 projets d’envergure en gouvernance et architecture de données.'
  ],
  skills: CURRICULUM_EN.skills,
  education: [
    {
      degree: 'Doctorat en Informatique / IA',
      institution: 'UNICAMP',
      year: '2023 - En cours',
      details: 'Recherche en Apprentissage par Renforcement et Ingénierie Logicielle Expérimentale.'
    },
    {
      degree: 'Master Recherche en Informatique',
      institution: 'FACCAMP',
      year: '2022',
      details: 'Spécialisation en Intelligence Artificielle et Ontologies Biomédicales.'
    },
    {
      degree: 'Diplôme d’Études Supérieures en Psychopédagogie',
      institution: 'FAIMI',
      year: '2008'
    },
    {
      degree: 'Licence en Systèmes d’Information',
      institution: 'FAIMI',
      year: '2005'
    }
  ],
  certifications: [
    'Test d’Anglais EF SET 46/100 (Niveau B1 Intermédiaire).',
    'PALC – Agile Leadership - Institut AIB'
  ],
  publicationsAndLectures: CURRICULUM_EN.publicationsAndLectures,
  keywords: CURRICULUM_EN.keywords
};

export const CURRICULUM_IT: CurriculumContent = {
  lang: 'it',
  name: 'ELAINE FIGUEIREDO',
  headline: 'Consulente in Intelligenza Artificiale | Data Science | Business Analysis | Docente Universitaria',
  contact: {
    location: 'San Paolo - SP / Da remoto',
    phone: '(11) 999479666',
    email: 'profelainefigueiredo@outlook.com',
    linkedin: 'https://www.linkedin.com/in/elainefigueiredo/',
    portfolio: 'www.elainefigueiredo.com.br'
  },
  summary:
    'Professionista di Tecnologia, Dati e Intelligenza Artificiale con un percorso multidisciplinare nella docenza accademica, analisi di business, ingegneria del software e data science. Dal 2006 forma talenti dell’IT e trasforma sfide aziendali complesse in soluzioni data-driven, automazione e governance. Si distingue per la sinergia tra rigore accademico, capacità di consulenza e comunicazione esecutiva empatica ed efficace.',
  keyCompetencies: [
    {
      title: 'Intelligenza Artificiale e Dati',
      description:
        'IA applicata, Machine Learning, CRISP-DM, MLOps, ingegneria di prompt e contesto, analisi predittiva, ontologie e NLP.'
    },
    {
      title: 'Business Analysis e Gestione di Prodotto',
      description:
        'Raccolta requisiti, discovery, documentazione funzionale, mappatura processi, gestione stakeholder, OKR/KPI e decisioni data-driven.'
    },
    {
      title: 'Database e Integrazione',
      description:
        'SQL, modellazione relazionale e dimensionale, ETL/ELT, data warehouse, API REST, microservizi, architetture Python e Java.'
    },
    {
      title: 'Didattica e Leadership Tecnica',
      description:
        'Docenza universitaria, instructional design, keynote speaker, mentoring e comunicazione specialistica per dirigenti aziendali.'
    }
  ],
  professionalExperience: [
    {
      role: 'Consulente Senior in IA, Dati e Trasformazione Digitale',
      company: 'Capco Consulting',
      location: 'San Paolo-SP - Remoto',
      period: '07/2024 – 05/2026',
      bullets: [
        'Diagnosi di maturità digitale e opportunità di IA, traducendo obiettivi strategici in roadmap operative orientate all’efficienza.',
        'Progettazione di soluzioni data-driven con pipeline analitiche e criteri di governance a supporto delle decisioni di vertice.',
        'Strategie di adozione di IA generativa, prompt engineering e modernizzazione di documentazione e codice legacy.',
        'Workshop executive e formazione per oltre 200 professionisti all’anno.'
      ]
    },
    {
      role: 'Docente Universitaria in Tecnologie dell’Informazione',
      company: 'USP-Esalq, SENAC-SP, SENAI-RS, Belas Artes',
      location: 'San Paolo',
      period: '2022 – In corso',
      bullets: [
        'Insegnamento in Database, Microservizi, Interoperabilità Semantica, OOP, Cybersecurity per IA e Project Management.',
        'Sviluppo di piani didattici che connettono i principi teorici ai reali contesti industriali.',
        'Supervisione di progetti applicati con SQL, Python, API, BI e IA, coinvolgendo oltre 1.000 studenti.',
        'Diffusione delle best practice di ingegneria del software, architetture dati e metodologie agili.'
      ]
    },
    {
      role: 'Senior Business Analyst',
      company: 'Setia, Prodata Mobility, Reportflex, Fortbras',
      location: 'San Paolo',
      period: '02/2011 - 10/2019',
      bullets: [
        'Ponte tra aree di business, IT e utenti finali per requisiti, regole di business e criteri di collaudo.',
        'Mappatura di processi critici e individuazione di opportunità di automazione e digitalizzazione.',
        'Supporto a team tecnici e squad agili nel raffinamento del backlog e user story.',
        'Reportistica direzionale e indicatori per decisioni tempestive e prevedibilità dei rilasci.'
      ]
    },
    {
      role: 'Ricercatrice in Intelligenza Artificiale e Informatica Biomedica',
      company: 'FACCAMP / CTI – Renato Archer',
      location: 'Campinas-SP',
      period: '08/2018 - 02/2022',
      bullets: [
        'Ricerca applicata in IA, rappresentazione della conoscenza e ontologie biomediche.',
        'Indagine su standard di interoperabilità semantica (OpenEHR, HL7, UMLS, OWL, SPARQL).',
        'Sviluppo del framework Semantic BioFrame e pubblicazione di articoli scientifici peer-reviewed.'
      ]
    }
  ],
  measurableAchievements: [
    'Riduzione del 60% dei tempi di analisi e documentazione grazie ad automazione e IA generativa.',
    'Oltre 10.000 professionisti e studenti formati in data science e IA (Valutazione media: 9/10).',
    'Partecipazione a oltre 20 progetti complessi di consulenza, architettura dati e governance.'
  ],
  skills: CURRICULUM_EN.skills,
  education: [
    {
      degree: 'Dottorato di Ricerca in Informatica / IA',
      institution: 'UNICAMP',
      year: '2023 - In corso',
      details: 'Ricerca in Reinforcement Learning e Ingegneria Sperimentale del Software.'
    },
    {
      degree: 'Laurea Magistrale in Informatica',
      institution: 'FACCAMP',
      year: '2022',
      details: 'Specializzazione in Intelligenza Artificiale e Ontologie Biomediche applicate all’oncologia.'
    },
    {
      degree: 'Master di I Livello in Psicopedagogia',
      institution: 'FAIMI',
      year: '2008'
    },
    {
      degree: 'Laurea Triennale in Sistemi Informativi',
      institution: 'FAIMI',
      year: '2005'
    }
  ],
  certifications: [
    'Test di Inglese Parlato EF SET 46/100 (Livello B1 Intermedio).',
    'PALC – Agile Leadership - Istituto AIB'
  ],
  publicationsAndLectures: CURRICULUM_EN.publicationsAndLectures,
  keywords: CURRICULUM_EN.keywords
};

export function getCurriculumByLanguage(lang: Language): CurriculumContent {
  switch (lang) {
    case 'en':
      return CURRICULUM_EN;
    case 'es':
      return CURRICULUM_ES;
    case 'fr':
      return CURRICULUM_FR;
    case 'it':
      return CURRICULUM_IT;
    case 'pt':
    default:
      return CURRICULUM_PT;
  }
}


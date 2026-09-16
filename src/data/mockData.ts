import { Course, Lecture, BlogPost, PortfolioItem, ExperienceItem, SocialLink, Testimonial } from '../types';
export { TESTIMONIALS } from './testimonialsData';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'whatsapp',
    name: "WhatsApp",
    url: 'https://api.whatsapp.com/send?phone=5511999479666&text=Ol%C3%A1%20Elaine,%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20projetos,%20palestras,%20aulas%20e%20consultoria.',
    icon: 'whatsapp',
    handle: '+55 (11) 999479666',
    color: '#25D366',
    bgColor: 'rgba(37, 211, 102, 0.15)',
    description: 'Fale diretamente pelo WhatsApp'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/elainefigueiredo/',
    icon: 'linkedin',
    handle: '/in/elainefigueiredo',
    color: '#0A66C2',
    bgColor: 'rgba(10, 102, 194, 0.15)',
    description: 'Conecte-se profissionalmente'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/profelainefigueiredo/',
    icon: 'instagram',
    handle: '@profelainefigueiredo',
    color: '#E4405F',
    bgColor: 'rgba(228, 64, 95, 0.15)',
    description: 'Acompanhe conteúdos e novidades'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@profelainefigueiredo',
    icon: 'youtube',
    handle: '@profelainefigueiredo',
    color: '#FF0000',
    bgColor: 'rgba(255, 0, 0, 0.15)',
    description: 'Aulas, palestras, cursos e vídeos sobre IA'
  },
  {
    id: 'website',
    name: 'Site Oficial',
    url: 'https://www.elainefigueiredo.com.br/',
    icon: 'website',
    handle: 'elainefigueiredo.com.br',
    color: '#D1C4E9',
    bgColor: 'rgba(209, 196, 233, 0.15)',
    description: 'Portal oficial de Elaine Figueiredo'
  },
  {
    id: 'lattes',
    name: 'Currículo Lattes',
    url: 'http://lattes.cnpq.br/4207910254131414',
    icon: 'lattes',
    handle: 'http://lattes.cnpq.br/4207910254131414',
    color: '#3B82F6',
    bgColor: 'rgba(59, 130, 246, 0.15)',
    description: 'Produção científica e acadêmica'
  },
  {
    id: 'email',
    name: 'E-mail',
    url: 'mailto:contato@elainefigueiredo.com.br',
    icon: 'email',
    handle: 'contato@elainefigueiredo.com.br',
    color: '#A78BFA',
    bgColor: 'rgba(167, 139, 250, 0.15)',
    description: 'Envie uma mensagem direta'
  }
];

export const DRAWER_IMAGES = {
  home: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMj8vvqIuX_A0tuErUJ0ekzufdVtCfbuGYmTgAxskwuod_Hb-STNugy9fuGxDcTYGuLTj9ZhSWugzuOk2s5SHc72eTTF8QMpJH6ByDe3-tW4wsXuiqTPcKgBc1CvDadsWRnd3_s790cruC-RGpRPODLlKqmV25gAPGw-F5E8GIjv7HjkXRBssuLxyz5u-LAUXV8TE0sVMagg3qTFtusUZtvDUkBdBvPdWCE3fHi2AeGpkWtRryzBagdL7FHNGN7pbUmQ',
  about: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoWJYFDsreO8_86qOfD5BgtRHQeAEu233J366zcfVUraJ1cATrBDy_Gd3I8DpXDQ1txSkocJnMATLytIOuAoz6xARD5uTKOOzL-oBwMXiZasdWL986thEHjlow1WhZlksyQsu2KdM0nNa_BUWi9O9KflpuR-ItLaY1Y1CgUi-IaocGd0qNinwmPwFmhoxd6CTuXQPDKLUFam9xgoYgnO0Dhwig_F4UYa2tw3YT5_wzno2JIpU30xpapKhaSZC7HDGkHg',
  courses: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBg0EXb1vNMfetXuLRUEwaWtkIi_AnswFN1WlUQps6Gp7JTBF8JsMAge3bbEo3PU39kcUQ92X1JSlakAv6nfMWVAgsBdwu2cd_0HjW254JzDA-oM5WfpmK5_oc-j2a8t-5GxzjQZi-abT6bxqkpvXuZS-B2Pv4W0HqTg5xXSvoOHQfMhL6UE6liEfBsNV9V7QCdXsdgy81s9DNHbKkQ_oV6kuAP-UQKmJbHXv744NIoyFYHhfduHbdavm9OX-VBFU9bw',
  resume: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-bb5YTj1LWYJTO3prdm3fxQDb4brkJXS2o6BFULTD0lnXFQ53gx2HmRo2sVNflxtZmvZ_I9ISbFr3Pjy1KWX3ygrdtcxQPkoWJXRQM-pDUM8gyDmZmUPRalKeELiG_IH8cT7ybCH5R4fXQzkpPcxY-6fJd5aZvpuGLkAMiMJcwLo_MNJLIJhdE93U_3LPxP0qcJfeLdrQ4FLtNF95Rah9u8m8kS1h0OtJy1cnb2JtsZNPIFCn3wMen4jxaLBghRTUCQ',
  blog: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP_jTrpCS8SocYTc1lJnGPnXn3GsJk1udeFgJbc0fa9enrgwmLmJ_DIIwO6-PHD-FGngojBQSzpr4VVU3wO_rHCUwD_90eGPrp158PWG1hL5HjHa3co0z15s5KPnlQZQdR1qquOUPYJx8na94cZeecAFMGSNOECqr_VWmUwiegiH5--BEzEPjkI52uks3w1oQrco2v7MWKTfn15By_6_9-QjxJoYJWRS3ECYO-PTZm56tlu9kCWBEbW5zq2-Kldc_qng',
  contact: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDWcfl1zbbEO5eyh5Q_v6rMpbTYs-6-pjuhPHhQs_uCZL6_Rkw5CVdD2y3hVgAdAVKvOaTaH59ujSdzODa3trocTZgRGxYVfu1MCDEhK5NI1ijsmI4Zc7nYqiITDrqKbmBF5FoKGyh0AairOdYEF3-OW5xzUg2eJY1NArWQkbUHB7t3HQ7iYS9Cl2smDAVSiteChAe4NRrHzB-_0kCdly4ai25Ywqu0rStPtmzayNPmTVtX8wDa5X5zI8KjYAcYD2pWw',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeMwlIbwtZ5TARvPUX9aoFx0wP-IOAtlJaLk9nYmt9nlIOVWyWMlkJLHd6U1LluXOzAQ0cgD4jKFpKvrkIBRMoINBVe7nVzdVfy4Svu25WI2YqRH3TOOPjl3iRbKl8c-Dy0y-v94Uhb6n6jIHhpBruUGlCuxKe-IQFjxLi-NBmcuIjroEbjrbCwnwph8niHCTuu5qMknWYOoKfrHfl1z9HWgKb5nODaZlZnsB5jw72rR67rAC7v-EH',
};

export const COURSES: Course[] = [
  {
    id: 'course-intro-ai-lit',
    title: 'Introdução ao Letramento em IA',
    subtitle: 'Fundamentos, Fluência Prática e Consciência Crítica para o Cotidiano Profissional',
    category: 'ia',
    level: 'Iniciante',
    duration: '16 horas',
    rating: 5.0,
    students: 2480,
    featured: true,
    price: 'R$ 390,00',
    image: DRAWER_IMAGES.about,
    description: 'Uma formação acolhedora, prática e transformadora para desmistificar a Inteligência Artificial. Entenda o funcionamento dos modelos generativos, aprenda a utilizá-los com segurança e desenvolva discernimento crítico sobre impactos e oportunidades.',
    syllabus: [
      'Módulo 1: O que é e o que não é IA: Desmistificando Modelos Generativos e LLMs',
      'Módulo 2: O Ecossistema de Ferramentas: Aplicações de Texto, Imagem, Análise e Produtividade',
      'Módulo 3: Primeiros Passos em Prompts: Como Formular Instruções Claras e Eficazes',
      'Módulo 4: Pensamento Crítico: Identificação de Alucinações, Vieses, LGPD e Segurança',
      'Módulo 5: O Futuro do Trabalho: Desenvolvendo Fluência Contínua sem Medo da Automação'
    ],
    skills: ['Letramento em IA', 'IA Generativa', 'Pensamento Crítico', 'Produtividade', 'Ética & Segurança']
  },
  {
    id: 'course-prompt-eng',
    title: 'Engenharia de Prompt',
    subtitle: 'Padrões Avançados de Raciocínio, Few-Shot, ReAct e Estruturação de LLMs',
    category: 'ia',
    level: 'Intermediário',
    duration: '20 horas',
    rating: 5.0,
    students: 1840,
    featured: true,
    price: 'R$ 490,00',
    image: DRAWER_IMAGES.courses,
    description: 'Domine técnicas rigorosas para instruir Grandes Modelos de Linguagem (LLMs). Aprenda elaboração de prompts de raciocínio, saídas estruturadas em JSON/SQL, Chain-of-Thought, meta-prompts e prevenção contra injeções de prompt.',
    syllabus: [
      'Módulo 1: Fundamentos de LLMs, Janelas de Atenção e Mecânica dos Tokens',
      'Módulo 2: Padrões Fundamentais: Zero-Shot, Few-Shot, Role Prompting e Delimitadores',
      'Módulo 3: Padrões Avançados de Raciocínio: Chain-of-Thought, Tree-of-Thoughts e ReAct',
      'Módulo 4: Prompts para Saídas Estruturadas, Chamada de Funções (Function Calling) e APIs',
      'Módulo 5: Avaliação Sistemática, Guardrails e Defesa Contra Jailbreaks e Injeções'
    ],
    skills: ['Engenharia de Prompt', 'Chain-of-Thought', 'Function Calling', 'LLM Guardrails', 'Meta-Prompting']
  },
  {
    id: 'course-context-eng',
    title: 'Engenharia de Contexto',
    subtitle: 'Curadoria Dinâmica, RAG Avançado e Gestão de Memória para Modelos Long-Context',
    category: 'ia',
    level: 'Avançado',
    duration: '28 horas',
    rating: 4.9,
    students: 1120,
    featured: true,
    price: 'R$ 690,00',
    image: DRAWER_IMAGES.heroBg,
    description: 'Vá além do prompt isolado: aprenda como selecionar, filtrar, comprimir e enriquecer a janela de contexto de modelos de linguagem. Inclui estratégias avançadas de RAG, memória episódica/semântica e otimização de custo/latência de tokens.',
    syllabus: [
      'Módulo 1: Limites, Custos e a Dinâmica de Modelos de Janela Longa (Long-Context)',
      'Módulo 2: Estratégias de Chunking Semântico, Metadados Enriquecidos e Indexação Híbrida',
      'Módulo 3: Re-ranking, Compressão de Contexto e Mitigação do Efeito "Lost in the Middle"',
      'Módulo 4: Arquiteturas de Memória para Agentes: Memória de Curto e Longo Prazo',
      'Módulo 5: Governança de Contexto, Segurança e Conformidade em Dados Corporativos'
    ],
    skills: ['Engenharia de Contexto', 'RAG Avançado', 'Long-Context Window', 'Semantic Chunking', 'Memory Architecture']
  },
  {
    id: 'course-ai-arch',
    title: 'Arquitetura e Engenharia de Soluções com IA',
    subtitle: 'Do Modelo ao Produto Escalável em Produção',
    category: 'ia',
    level: 'Avançado',
    duration: '40 horas',
    rating: 4.9,
    students: 1240,
    featured: true,
    price: 'R$ 890,00',
    image: DRAWER_IMAGES.courses,
    description: 'Aprenda a projetar sistemas resilientes integrados a LLMs, RAG avançado, agentes autônomos e monitoramento em tempo real com orquestração moderna.',
    syllabus: [
      'Módulo 1: Fundamentos de Arquitetura Orientada a IA e GenAI',
      'Módulo 2: Padrões de Design para RAG (Retrieval-Augmented Generation) & Embeddings',
      'Módulo 3: Construção de Agentes Autônomos Multi-Agentes com LangGraph e AutoGen',
      'Módulo 4: Governança, MLOps, LLMOps e Métricas de Custo e Latência',
      'Módulo 5: Estudo de Caso Prático: Aplicação Financeira com LLM em Nuvem'
    ],
    skills: ['GenAI Architecture', 'RAG Pipelines', 'Vector Databases', 'LangChain/LangGraph', 'LLMOps']
  },
  {
    id: 'course-data-gov',
    title: 'Modelagem e Governança de Dados para Inovação',
    subtitle: 'Construindo Fundações Sólidas para Analytics e Machine Learning',
    category: 'dados',
    level: 'Intermediário',
    duration: '32 horas',
    rating: 4.8,
    students: 980,
    featured: true,
    price: 'R$ 690,00',
    image: DRAWER_IMAGES.about,
    description: 'Domine a arte de estruturar Data Lakes, Lakehouses, ontologias de dados e catálogos automatizados com foco em valor de negócio e conformidade.',
    syllabus: [
      'Módulo 1: Data Mesh vs Lakehouse: Escolhendo o Modelo Ideal',
      'Módulo 2: Modelagem Dimensional Moderna e Data Vault 2.0',
      'Módulo 3: Governança Ativa e Qualidade de Dados Automatizada',
      'Módulo 4: Linhagem de Dados e Privacidade (LGPD / GDPR em IA)'
    ],
    skills: ['Data Modeling', 'Data Governance', 'Lakehouse Architecture', 'Data Quality', 'dbt & Airflow']
  },
  {
    id: 'course-req-ai',
    title: 'Engenharia de Requisitos & Gestão de Produtos com IA',
    subtitle: 'Alinhando Expectativas do Negócio à Capacidade Técnica',
    category: 'agilidade',
    level: 'Intermediário',
    duration: '24 horas',
    rating: 4.9,
    students: 1530,
    featured: true,
    price: 'R$ 550,00',
    image: DRAWER_IMAGES.blog,
    description: 'Aprenda a mapear requisitos não funcionais específicos de Inteligência Artificial, alinhando times de produto, ciência de dados e engenharia de software.',
    syllabus: [
      'Módulo 1: Elicitação de Requisitos para Modelos Preditivos e Generativos',
      'Módulo 2: Métricas de Sucesso do Negócio vs Métricas do Modelo',
      'Módulo 3: User Stories e Épicos para Projetos de Dados e IA',
      'Módulo 4: Mitigação de Riscos, Viés e Explicabilidade em IA'
    ],
    skills: ['Product Ownership', 'AI Requirements', 'Agile Governance', 'Business Analysis', 'UX for AI']
  },
  {
    id: 'course-soft-arch',
    title: 'Arquitetura de Software Moderna & Microserviços Event-Driven',
    subtitle: 'Sistemas Distribuídos e Alta Disponibilidade',
    category: 'arquitetura',
    level: 'Avançado',
    duration: '36 horas',
    rating: 4.9,
    students: 810,
    featured: false,
    price: 'R$ 790,00',
    image: DRAWER_IMAGES.resume,
    description: 'Construa arquiteturas distribuídas resilientes utilizando Apache Kafka, CQRS, Event Sourcing e conteinerização em microsserviços.',
    syllabus: [
      'Módulo 1: Princípios de Domain-Driven Design (DDD) na Prática',
      'Módulo 2: Arquitetura Event-Driven com Kafka e RabbitMQ',
      'Módulo 3: Padrões CQRS e Event Sourcing',
      'Módulo 4: Observabilidade com OpenTelemetry, Prometheus e Grafana'
    ],
    skills: ['DDD', 'Event-Driven', 'Kafka', 'Microservices', 'Observability']
  },
  {
    id: 'course-intro-rags',
    title: 'Introdução às RAGs',
    subtitle: 'Geração Aumentada por Recuperação: da Teoria à Implementação Prática com Bancos Vetoriais',
    category: 'ia',
    level: 'Intermediário',
    duration: '20 horas',
    rating: 5.0,
    students: 1420,
    featured: true,
    price: 'R$ 490,00',
    image: DRAWER_IMAGES.courses,
    description: 'Domine o pipeline completo de RAG (Retrieval-Augmented Generation). Aprenda como integrar LLMs aos dados corporativos usando embeddings, chunking semântico, busca vetorial e re-ranking.',
    syllabus: [
      'Módulo 1: Fundamentos de RAG: Por que Fine-Tuning não resolve tudo e como funciona a Recuperação Dinâmica',
      'Módulo 2: Vetorização e Embeddings: Seleção e Avaliação de Modelos Semânticos',
      'Módulo 3: Estratégias de Chunking e Indexação em Bancos Vetoriais (Chroma, Pinecone, Qdrant, PGVector)',
      'Módulo 4: Técnicas de Busca Híbrida (Dense + Sparse/BM25) e Re-ranking Semântico com Cross-Encoders',
      'Módulo 5: Avaliação de RAG com Métricas Ragas, Mitigação de Alucinações e Guardrails'
    ],
    skills: ['RAG', 'Embeddings', 'Vector Databases', 'ChromaDB', 'Busca Híbrida', 'Ragas & Avaliação']
  },
  {
    id: 'course-intro-langchain',
    title: 'Introdução ao LangChain',
    subtitle: 'Orquestração de Modelos de Linguagem, Chains, Memória e Conectores de Dados',
    category: 'ia',
    level: 'Intermediário',
    duration: '24 horas',
    rating: 4.9,
    students: 1260,
    featured: true,
    price: 'R$ 520,00',
    image: DRAWER_IMAGES.heroBg,
    description: 'Construa aplicações de IA robustas com o ecossistema LangChain. Aprenda LCEL (LangChain Expression Language), criação de correntes modulares, agentes autônomos com ferramentas (Tools) e memória conversacional.',
    syllabus: [
      'Módulo 1: Arquitetura LangChain e LangChain Expression Language (LCEL)',
      'Módulo 2: Componentes Core: PromptTemplates, ChatModels, Output Parsers e Callbacks',
      'Módulo 3: Document Loaders, Text Splitters e Recuperadores Vetoriais Integrados',
      'Módulo 4: Criação de Ferramentas (Custom Tools) e Agentes de Raciocínio (ReAct)',
      'Módulo 5: Transição para LangGraph: Grafos com Estado e Fluxos Multi-Agentes Resilientes'
    ],
    skills: ['LangChain', 'LCEL', 'Agentes Autônomos', 'LangGraph', 'Python/TypeScript', 'Integração LLM']
  },
  {
    id: 'course-masterclass-letramento-ia',
    title: 'MasterClass - Letramento em IA',
    subtitle: 'Imersão Estratégica em Fluência, Cultura e Governança de IA para Líderes e Profissionais',
    category: 'ia',
    level: 'Executivo',
    duration: '12 horas',
    rating: 5.0,
    students: 2150,
    featured: true,
    price: 'R$ 590,00',
    image: DRAWER_IMAGES.about,
    description: 'Uma formação executiva imersiva para gestores e profissionais que precisam liderar a transformação com Inteligência Artificial. Desenvolva raciocínio crítico, visão estratégica de adoção e segurança na tomada de decisão.',
    syllabus: [
      'Módulo 1: Panorama Global da IA Generativa: O que é real vs hype mercadológico',
      'Módulo 2: O Novo Perfil Profissional: Competências Aumentadas e Fluência Crítica',
      'Módulo 3: Tomada de Decisão Baseada em Dados e IA sem Ilusões Tecnológicas',
      'Módulo 4: Transformação Cultural, Upskilling de Equipes e Gestão da Mudança',
      'Módulo 5: Governança, Ética Aplicada, Privacidade (LGPD) e Mitigação de Riscos Corporativos'
    ],
    skills: ['Letramento em IA', 'Liderança Estratégica', 'Governança', 'Transformação Digital', 'Upskilling']
  },
  {
    id: 'course-masterclass-prompt-context',
    title: 'MasterClass Engenharia de Prompt e Contexto - Explorando possibilidades',
    subtitle: 'Técnicas de Elite em Arquitetura de Instruções, Janelas Longas e Orquestração Cognitiva',
    category: 'ia',
    level: 'Avançado',
    duration: '18 horas',
    rating: 5.0,
    students: 1680,
    featured: true,
    price: 'R$ 650,00',
    image: DRAWER_IMAGES.courses,
    description: 'Uma imersão profunda unindo o melhor da Engenharia de Prompt e da Engenharia de Contexto. Aprenda a estruturar prompts complexos, gerenciar janelas de contexto massivas, construir metaprompts autoaperfeiçoáveis e orquestrar múltiplos modelos.',
    syllabus: [
      'Módulo 1: Anatomia da Atenção e Mecânica dos Tokens em Modelos de Janela Longa (Long-Context)',
      'Módulo 2: Padrões Avançados de Raciocínio: Chain-of-Thought, Tree-of-Thoughts e Metaprompting Reflexivo',
      'Módulo 3: Engenharia de Contexto Dinâmica: Injeção Semântica, Compressão de Contexto e Efeito Lost-in-the-Middle',
      'Módulo 4: Prompts para Saídas Estruturadas Rigorosas (JSON Schemas, SQL) e Chamada de Ferramentas (Tool Use)',
      'Módulo 5: Guardrails, Defesa Contra Prompt Injection, Otimização de Custo e Testes A/B'
    ],
    skills: ['Engenharia de Prompt', 'Engenharia de Contexto', 'Metaprompting', 'Long Context', 'Orquestração LLM']
  },
  {
    id: 'course-intro-notebooklm',
    title: 'Introdução ao Gemini Notebook (NotebookLM)',
    subtitle: 'Guia Prático para Organização do Conhecimento, Leitura Crítica e Síntese Inteligente',
    category: 'ia',
    level: 'Iniciante',
    duration: '8 horas',
    rating: 4.9,
    students: 1890,
    featured: true,
    price: 'R$ 290,00',
    image: DRAWER_IMAGES.blog,
    description: 'Domine o NotebookLM do Google do zero. Aprenda a carregar documentos, criar cadernos temáticos fundamentados exclusivamente nas suas fontes (Grounding), gerar Audio Overviews e transformar grandes volumes de informação em conhecimento acionável.',
    syllabus: [
      'Módulo 1: O que é o NotebookLM: O Conceito de Grounding e Privacidade das Fontes',
      'Módulo 2: Importação e Curadoria de Fontes: PDFs, Google Docs, Apresentações e Textos',
      'Módulo 3: Técnicas de Consulta: Como Fazer Perguntas para Extrair Sínteses e Comparações Precisas',
      'Módulo 4: Audio Overviews na Prática: Criação e Aproveitamento de Podcasts de Estudo por IA',
      'Módulo 5: Organização de Cadernos para Pesquisa Acadêmica, Projetos Profissionais e Gestão do Conhecimento'
    ],
    skills: ['NotebookLM', 'Google Gemini', 'Grounding', 'Síntese de Conteúdo', 'Audio Overviews', 'Produtividade']
  },
  {
    id: 'course-notebooklm-concursos',
    title: 'Gemini Notebook (NotebookLM) para concursos',
    subtitle: 'Metodologia Acelerada de Estudos, Resolução de Questões e Memorização Ativa com IA',
    category: 'ia',
    level: 'Iniciante',
    duration: '12 horas',
    rating: 5.0,
    students: 2310,
    featured: true,
    price: 'R$ 350,00',
    image: DRAWER_IMAGES.resume,
    description: 'O guia definitivo para candidatos a concursos públicos utilizarem o NotebookLM como mentor de estudos 24/7. Aprenda a alimentar editais, legislação seca, jurisprudência e resumos, gerando simulados fundamentados e revisões em áudio.',
    syllabus: [
      'Módulo 1: Estruturando o Edital e a Legislação no NotebookLM com Garantia de Fidedignidade',
      'Módulo 2: Criação de Baterias de Questões e Simulados Inéditos com Justificativa na Letra da Lei',
      'Módulo 3: Mapas Mentais Textuais, Tabelas Comparativas de Prazos e Resumos Esquematizados',
      'Módulo 4: Estudos em Movimento: Convertendo Matérias Extensas em Podcasts de Revisão Auditiva',
      'Módulo 5: Técnicas de Revisão Espaçada e Mitigação de Ansiedade na Reta Final com IA'
    ],
    skills: ['NotebookLM para Concursos', 'Técnicas de Memorização', 'Simulados Inteligentes', 'Revisão Ativa', 'Gestão de Editais']
  }
];

export const KEYNOTE_LECTURES: Lecture[] = [
  {
    id: 'talk-letramento-digital-ia',
    title: 'Letramento Digital x Letramento em IA',
    subtitle: 'A Evolução da Fluência Tecnológica na Era dos Modelos Generativos e Agentes',
    targetAudience: 'Empresas, Universidades, Lideranças Executivas, Educadores e Equipes em Transformação Digital',
    duration: '60 a 90 minutos (ajustável para Keynote ou Workshop)',
    format: 'Presencial ou Online • Transmissão ao Vivo • In-Company ou Congressos',
    description: 'Uma palestra provocativa, humana e transformadora sobre as diferenças fundamentais entre saber operar ferramentas digitais tradicionais e desenvolver pensamento crítico e fluência real na era da Inteligência Artificial Generativa.',
    topics: [
      'A distinção entre Letramento Digital (uso instrumental de ferramentas) e Letramento em IA (raciocínio, contexto e colaboração humano-máquina)',
      'O novo paradigma da cognição aumentada e a superação do medo da automação',
      'Pensamento crítico e governança: identificando alucinações, vieses algorítmicos e questões éticas na tomada de decisão',
      'O protagonismo humano insubstituível: sensibilidade, empatia, discernimento e intencionalidade',
      'Curadoria de IA e estratégia prática para capacitar pessoas e organizações rumo à maturidade digital com leveza'
    ],
    skills: ['Letramento em IA', 'Letramento Digital', 'Pensamento Crítico', 'Futuro do Trabalho', 'Governança & Ética', 'Transformação Cultural'],
    image: DRAWER_IMAGES.about,
    featured: true
  },
  {
    id: 'talk-inteligencia-burra-ia',
    title: 'Inteligência "Burra" da IA',
    subtitle: 'Desmistificando os Limites, Alucinações e a Falácia da Onisciência Algorítmica',
    targetAudience: 'Lideranças Executivas, Profissionais de Todas as Áreas, Educadores e Entusiastas de Tecnologia',
    duration: '60 a 90 minutos (Keynote Executivo ou Palestra Provocativa)',
    format: 'Presencial ou Online • In-Company, Convenções e Congressos Corporativos',
    description: 'Uma reflexão perspicaz, bem-humorada e desmistificadora sobre por que a IA pode ser veloz e brilhante em certas tarefas, mas ao mesmo tempo "burra" e vulnerável sem o discernimento humano. Desmontando a ilusão de onisciência e ensinando a evitar erros caros.',
    topics: [
      'A ilusão da compreensão: por que LLMs são motores probabilísticos de predição e não cérebros conscientes',
      'Casos emblemáticos de gafes algorítmicas, alucinações absurdas e vieses cognitivos nos modelos',
      'Onde a inteligência artificial falha miseravelmente e por que o bom senso humano nunca foi tão indispensável',
      'Como usar a IA como excelente estagiária e copiloto ágil sem jamais terceirizar o pensamento crítico',
      'Diretrizes práticas de validação, checagem de fatos e ceticismo construtivo nas organizações'
    ],
    skills: ['Pensamento Crítico', 'Limites de LLMs', 'Alucinações em IA', 'Inteligência Humana', 'Mitigação de Riscos', 'Discernimento'],
    image: DRAWER_IMAGES.heroBg,
    featured: true
  },
  {
    id: 'talk-governanca-curadoria-desastres',
    title: 'Governança e Curadoria - Freio contra desastres',
    subtitle: 'Salvaguardas Éticas, Qualidade de Dados e Gestão de Riscos na Implementação de IA',
    targetAudience: 'C-Levels, Diretores de TI, Jurídico, DPOs, Compliance, Gestores de Riscos e Equipes de Dados',
    duration: '60 a 90 minutos (Palestra Magna Estratégica ou Painel Executivo)',
    format: 'Presencial ou Online • Fóruns Executivos e Encontros de Liderança',
    description: 'Implementar Inteligência Artificial sem governança ativa e curadoria rigorosa de dados é como pilotar um carro de corrida em alta velocidade sem freios. Conheça as salvaguardas necessárias para proteger reputações, cumprir legislações e evitar desastres corporativos.',
    topics: [
      'Curadoria de dados: "Lixo entra, desastre sai" — a qualidade da fonte como alicerce inegociável da IA',
      'A Governança de IA não como barreira burocrática, mas como o freio que permite à empresa acelerar com segurança',
      'Estruturação de comitês de ética, políticas de uso responsável e rastreabilidade de decisões automatizadas',
      'Prevenção de vazamento de dados sensíveis (PII), violações de propriedade intelectual e passivos jurídicos',
      'Frameworks práticos de auditoria contínua e conformidade com LGPD, AI Act e normas setoriais'
    ],
    skills: ['Governança de IA', 'Curadoria de Dados', 'Compliance & LGPD', 'Gestão de Riscos', 'Ética Corporativa', 'Segurança da Informação'],
    image: DRAWER_IMAGES.resume,
    featured: true
  },
  {
    id: 'talk-gemini-notebook-notebooklm',
    title: 'Gemini Notebook (NotebookLM) explorando potenciais e quebrando barreiras de estudos',
    subtitle: 'Como Potencializar Pesquisas Acadêmicas, Análises Complexas e Aprendizado Acelerado',
    targetAudience: 'Estudantes, Pesquisadores, Professores, Advogados, Analistas e Profissionais do Conhecimento',
    duration: '60 a 90 minutos (Palestra Interativa ou Masterclass Prática)',
    format: 'Presencial ou Online • Demonstração Prática ao Vivo',
    description: 'Mergulhe nas capacidades transformadoras do Google NotebookLM (Gemini Notebook). Descubra como ancorar a inteligência artificial exclusivamente nas suas fontes confiáveis (Grounding), gerando sínteses precisas, Audio Overviews envolventes e acelerando o domínio de temas complexos.',
    topics: [
      'O poder do Grounding: por que o NotebookLM elimina as alucinações ao responder apenas com base nas suas fontes',
      'Transformando centenas de páginas de PDFs, relatórios e anotações em uma central de inteligência pessoal',
      'Audio Overviews: a revolução dos podcasts gerados por IA para absorção de conhecimento em movimento',
      'Estratégias avançadas de perguntas para cruzar dados, encontrar contradições e extrair insights profundos',
      'Casos práticos de uso em pesquisas científicas, preparação para concursos, advocacia e planejamento estratégico'
    ],
    skills: ['NotebookLM', 'Gemini AI', 'Grounding', 'Pesquisa Acadêmica', 'Síntese Acelerada', 'Audio Overview', 'Produtividade'],
    image: DRAWER_IMAGES.courses,
    featured: true
  },
  {
    id: 'talk-ai-security-essencial',
    title: 'AI Security - a segurança essencial',
    subtitle: 'Blindando Sistemas, Prompts e Pipelines de IA contra Ataques e Vulnerabilidades Modernas',
    targetAudience: 'Engenheiros de Software, Arquitetos de Soluções, CISOs, Especialistas em Cibersegurança e Líderes de Tecnologia',
    duration: '60 a 90 minutos (Keynote Técnico ou Executivo)',
    format: 'Presencial ou Online • In-Company, Conferências Técnicas e Congressos de Segurança',
    description: 'A rápida adoção de LLMs e Agentes Autônomos gerou uma superfície de ataque completamente nova. Explore os riscos críticos do OWASP Top 10 para LLMs, técnicas de injeção de prompt, envenenamento de dados e a arquitetura de guardrails resilientes.',
    topics: [
      'Anatomia dos ataques modernos: Prompt Injection direta e indireta, Jailbreaks e Data Exfiltration via contexto',
      'Vulnerabilidades silenciosas em sistemas RAG e riscos no consumo desprotegido de APIs de modelos externos',
      'Implementação de camadas defensivas: NeMo Guardrails, Llama Guard, sanitização de I/O e sandboxing de ferramentas',
      'Gestão de chaves de API, segredos corporativos e controle de acesso baseado em funções (RBAC/ACL) em IA',
      'Protocolos de resposta a incidentes e monitoramento em tempo real de anomalias em fluxos generativos'
    ],
    skills: ['AI Security', 'OWASP for LLM', 'Prompt Injection', 'Guardrails', 'Cibersegurança', 'RAG Security', 'DevSecOps'],
    image: DRAWER_IMAGES.blog,
    featured: true
  },
  {
    id: 'talk-o-humano-essencial-ia',
    title: 'O Humano é essencial na era da Inteligência Artificial',
    subtitle: 'Empatia, Discernimento, Sensibilidade e o Valor Insubstituível da Singularidade Humana',
    targetAudience: 'Lideranças, Equipes em Transformação, Comunidades Acadêmicas, Congressos e Grandes Plenárias',
    duration: '60 a 90 minutos (Palestra Magna Inspiracional e Estratégica)',
    format: 'Presencial ou Online • Grandes Eventos, Convenções de Fim de Ano e Kick-offs Corporativos',
    description: 'Uma palestra emocionante, profunda e inspiradora sobre o papel insubstituível do ser humano em um mundo hiper-automatizado. A tecnologia calcula probabilidades e processa bilhões de parâmetros, mas são as pessoas que sentem, sonham, cuidam, decidem com ética e dão propósito à existência.',
    topics: [
      'A armadilha de tentar competir com máquinas no terreno delas: velocidade de processamento e escala mecânica',
      'As competências humanas irredutíveis: empatia genuína, escuta ativa, sabedoria moral, intuição e calor humano',
      'Da inteligência artificial à sabedoria humana: como liderar pessoas com coração e discernimento ético',
      'Vencendo o medo da obsolescência: reencontrando o sentido, a dignidade e o propósito do trabalho humano',
      'O modelo de sinergia fértil: delegar o que é repetitivo aos algoritmos para elevar o que nos torna verdadeiramente humanos'
    ],
    skills: ['Humanidade', 'Liderança Empática', 'Inteligência Emocional', 'Propósito', 'Futuro do Trabalho', 'Ética & Valores', 'Sensibilidade'],
    image: DRAWER_IMAGES.about,
    featured: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-rag-security',
    title: 'Riscos de Segurança em RAG',
    summary: 'A implementação de sistemas RAG e agentes autônomos introduz desafios críticos que expandem a superfície de ataque. Conheça os 5 principais vetores de vulnerabilidade e suas estratégias de mitigação e governança.',
    category: 'Inteligência Artificial',
    date: '24 Ago, 2026',
    readTime: '9 min de leitura',
    image: DRAWER_IMAGES.blog,
    author: 'Elaine Figueiredo',
    tags: [
      'RAG',
      'SegurançaEmIA',
      'PromptInjection',
      'DataLeakage',
      'GovernançaIA',
      'LLM',
      'AgentesAutônomos',
      'OWASP',
      'Sandboxing',
      'Guardrails',
      'Cibersegurança'
    ],
    content: `A implementação de sistemas de Geração Aumentada por Recuperação (RAG) e de agentes autônomos introduz uma série de desafios e riscos de segurança significativos que vão além das vulnerabilidades tradicionais de software. Como os sistemas RAG conectam dinamicamente Grandes Modelos de Linguagem (LLMs) a fontes de dados externas, bancos de dados e ferramentas corporativas, eles expandem consideravelmente a superfície de ataque.

Com base nas fontes consolidadas, os principais riscos de segurança no RAG e suas respectivas formas de mitigação são detalhados a seguir:

---

### 1. Injeção Indireta de Prompt (Indirect Prompt Injection)
Este é apontado como o principal vetor de risco em aplicações de RAG e agentes, ocupando o primeiro lugar no ranking do OWASP Top 10 para Aplicações de LLM.

- **O Risco:** Os documentos recuperados de bases de conhecimento externas (páginas da web, arquivos carregados ou APIs) podem conter textos maliciosos disfarçados de instruções para o modelo. Como os fragmentos de dados recuperados (*chunks*) compartilham a mesma janela de contexto com a instrução do sistema (*system prompt*), o LLM pode ignorar as diretrizes originais do desenvolvedor e seguir as instruções maliciosas incorporadas no documento recuperado.
- **Consequência:** O modelo pode adotar comportamentos indesejados, vazando dados ou tomando ações não autorizadas sem que o usuário ou o desenvolvedor perceba. Estratégias puras de engenharia de prompt ou delimitadores de texto não fornecem proteção 100% confiável contra esse ataque.

---

### 2. Vazamento e Exposição de Dados Confidenciais (Data Leakage)
A integração de dados corporativos a fluxos de inteligência artificial eleva drasticamente o risco de exposição de dados.

- **O Risco:** Ao interagir com APIs de provedores externos de LLMs ou armazenar dados em nuvens de terceiros, informações confidenciais ou dados de identificação pessoal (PII) podem ser inadvertidamente expostos. Sem mecanismos robustos de criptografia e conformidade, segredos comerciais, chaves de API corporativas e dados pessoais podem vazar nas requisições enviadas aos provedores.
- **Consequência:** Exfiltração de dados através da janela de contexto ou vazamento de chaves de API centralizadas, o que compromete a conformidade com regulamentações rígidas (como LGPD, GDPR ou diretrizes setoriais de finanças e saúde).

---

### 3. Falhas no Controle de Acesso a Documentos (Access Control Lists - ACLs)
A facilidade de busca semântica em sistemas RAG pode ignorar as políticas de segurança de dados de uma organização.

- **O Risco:** Documentos corporativos geralmente possuem diferentes níveis de permissão de acesso (ACLs). Se a esteira de RAG e a solução de busca vetorial não respeitarem rigidamente essas permissões durante a fase de recuperação, o sistema de busca inteligente poderá recuperar e expor dados altamente confidenciais a colaboradores ou usuários que não teriam permissão para visualizá-los diretamente no sistema de origem.
- **Consequência:** Elevação do risco de vazamento interno de informações críticas (como dados financeiros, estratégicos ou de recursos humanos).

---

### 4. Vulnerabilidades de Integrações e Provedores de Terceiros
Os ecossistemas de RAG dependem de uma vasta cadeia de ferramentas, incluindo bancos de dados vetoriais, loaders e APIs externas.

- **O Risco:** Ao usar bibliotecas e serviços externos, as aplicações herdam as posturas de segurança de seus fornecedores. Qualquer comprometimento ou brecha na infraestrutura de um parceiro de nuvem ou banco de dados pode comprometer diretamente a aplicação RAG, gerando interrupções no serviço ou sequestro de dados.
- **Consequência:** Brechas de segurança difíceis de rastrear diretamente na aplicação primária, decorrentes de falhas em componentes externos do ecossistema.

---

### 5. Execução de Código Não Confiável e Ações Indesejadas (Blast Radius)
Agentes de RAG avançados frequentemente ganham autonomia para rodar scripts, analisar dados ou interagir com sistemas de registro através de ferramentas (*tool calling*).

- **O Risco:** Agentes de análise de dados que escrevem e executam códigos em Python ou SQL localmente expõem a infraestrutura hospedeira a riscos severos de segurança. Códigos gerados dinamicamente pela IA a partir de arquivos não revisados podem explorar falhas de sistema ou CVEs do kernel do sistema operacional.
- **Consequência:** Acesso não autorizado ao ambiente de produção ou propagação de malwares gerados em tempo de execução pela IA.

---

### Estratégias de Mitigação Apontadas pelas Fontes
Para conter esses riscos, as arquiteturas corporativas devem adotar controles de segurança robustos e em camadas:

1. **Gateways de LLM Centralizados:** Utilização de proxies centralizados (como o LLM Gateway do LangSmith) para mascarar dados sensíveis, remover PIIs e ocultar segredos corporativos antes que as informações saiam da infraestrutura da empresa.
2. **Ambientes Isolados de Execução (Sandboxing):** Executar qualquer código gerado pela IA ou ferramentas em máquinas virtuais ou contêineres rigidamente isolados e com barreiras de rede (privilégio mínimo), limitando o raio de destruição (*blast radius*) de possíveis códigos maliciosos.
3. **Filtros e Guardrails de Entrada/Saída:** Empregar lógicas de pré e pós-processamento (como o NeMo Guardrails) para higienizar perguntas recebidas e as respostas geradas antes de apresentá-las ao usuário.
4. **Governança de Conteúdo e Controle de Acesso:** Implementar indexadores que filtrem e limitem a busca vetorial estritamente às credenciais de acesso do usuário solicitante (compliance com ACLs).

---

### Palavras-Chave & Hashtags
- **Palavras-Chave:** RAG, Retrieval-Augmented Generation, Segurança da Informação em IA, Injeção Indireta de Prompt, Vazamento de Dados, OWASP LLM Top 10, Controle de Acesso (ACLs), Sandboxing, Guardrails, LLMOps, Governança de Inteligência Artificial, Agentes Autônomos.
- **Hashtags:** #SegurancaEmIA #RAG #PromptInjection #DataLeakage #GovernancaDeIA #CyberSecurity #LLMOps #LangChain #OWASP #Guardrails #Sandboxing #GenAI #InteligenciaArtificial #CloudSecurity

---

### Referências Bibliográficas (Normas ABNT)
KRISHNAN, Sanjana et al. **FACTS: A Framework for Building Effective RAG-Based Enterprise Chatbots**. NVIDIA, 2024. Disponível nos arquivos do ecossistema do projeto.

LANGCHAIN. **LangChain: Security and Permissions Management**. [S. l.]: LangChain Framework Docs, 2024. Documento técnico sobre segurança e controles de permissão.

LANGCHAIN BLOG. **Agents need their own computer. Here's how to give them one safely**. [S. l.]: LangChain Blog, 2025/2026. Artigo sobre isolamento de ambientes e sandboxing para execução de código por agentes.

LANGCHAIN DOCS. **Building Governed Agents: A Framework for Cost, Control, and Compliance**. [S. l.]: LangChain Product Documentation, 2025. Guia sobre governança de agentes corporativos e planos de controle.

LANGCHAIN DOCS. **Retrieval Augmented Generation (RAG) with Deep Agents**. [S. l.]: LangChain Product Documentation, 2024. Manual técnico sobre padrões e considerações de segurança em RAG.

SAPKOTA, S. et al. **LangChain vs. LangGraph vs. LangSmith: Taxonomies of Agentic AI Toolchains**. [S. l.: s. n.], 2025. Artigo acadêmico detalhando riscos éticos, governança e propagação de viés em IA agêntica.

THE AGENTIC OPERATING MODEL. **The Agentic Operating Model: Governance, Security, and Compliance**. [S. l.]: Documento de Governança Estratégica, 2025. Relatório técnico.`
  },
  {
    id: 'post-1',
    title: 'Como Projetar Arquiteturas RAG Resilientes para Ambientes de Produção',
    summary: 'Explorando estratégias de re-ranking, otimização de chuncking e avaliação de fidelidade para evitar alucinações em sistemas empresariais.',
    category: 'Inteligência Artificial',
    date: '28 Jul, 2026',
    readTime: '6 min de leitura',
    image: DRAWER_IMAGES.blog,
    author: 'Elaine Figueiredo',
    tags: ['GenAI', 'RAG', 'Arquitetura', 'Python', 'VectorDB'],
    content: `
### O Desafio da Fidelidade em Projetos RAG

Retrieval-Augmented Generation (RAG) tornou-se a espinha dorsal de assistentes corporativos modernos. No entanto, mover um protótipo de RAG para ambiente de produção exige superar barreiras críticas de latência, precisão e governança.

#### 1. Chuncking Estratégico e Semântico
Muitas equipes começam com estratégias de divisão por tamanho fixo (ex: 500 caracteres). Em ambientes complexos, essa abordagem quebra o contexto. Recomendamos a divisão baseada em estrutura de documentos (headers, parágrafos) ou chuncking semântico guiado por embeddings.

#### 2. Implementação de Re-ranking Multi-Etapa
A busca por similaridade de cosseno pura pode trazer documentos irrelevantes. Inserir uma camada de *Re-Ranking* (como Cohere Rerank ou BGE-Reranker) após a busca vetorial reduz drasticamente o ruído e eleva a precisão das respostas em até 40%.

#### 3. Avaliação Contínua e RAG Triad
Utilize estruturas de avaliação como Ragas ou TruLens para monitorar:
- **Faithfulness**: O modelo respondeu estritamente com base nos documentos recuperados?
- **Answer Relevance**: A resposta abordou a pergunta original do usuário?
- **Context Relevance**: Os trechos recuperados do banco vetorial são pertinentes?
    `
  },
  {
    id: 'post-2',
    title: 'Sinergia Entre Dados, Tecnologia e Agilidade: O Triângulo de Ouro',
    summary: 'Por que projetos de IA e Ciência de Dados falham sem um alinhamento claro entre arquitetura técnica, requisitos de produto e agilidade.',
    category: 'Engenharia de Software',
    date: '15 Jul, 2026',
    readTime: '8 min de leitura',
    image: DRAWER_IMAGES.heroBg,
    author: 'Elaine Figueiredo',
    tags: ['Agilidade', 'Engenharia de Dados', 'Gestão de TI', 'Modelagem'],
    content: `
### Por que Projetos de Dados Falham?

Segundo pesquisas da indústria, mais de 70% dos projetos de inteligência artificial não atingem produção com valor sustentável. A razão primária raramente é a escolha do algoritmo — é a falta de sinergia entre **Dados**, **Tecnologia** e **Agilidade**.

#### 1. O Pilar dos Dados
Dados sem governança e sem modelagem conceitual sólida são apenas ruído. O papel do arquiteto é garantir que as estruturas de dados sejam evolutivas e compreensíveis pelo negócio.

#### 2. O Pilar da Tecnologia
A tecnologia precisa servir à estratégia do produto, não ao entusiasmo do momento. Escolher microsserviços quando um monólito modular resolve o problema cria débito técnico precoce.

#### 3. O Pilar da Agilidade
Agilidade em IA não é rodar Sprints de duas semanas para entregar 'mágica'. Trata-se de ciclos curtos de hipóteses, validação incremental e métricas transparentes.
    `
  },
  {
    id: 'post-3',
    title: 'Modelagem de Requisitos para Sistemas com Agentes Autônomos',
    summary: 'Um guia prático para e-licitar, documentar e testar comportamentos não determinísticos em arquiteturas baseadas em LLM.',
    category: 'Requisitos & IA',
    date: '02 Jul, 2026',
    readTime: '5 min de leitura',
    image: DRAWER_IMAGES.courses,
    author: 'Elaine Figueiredo',
    tags: ['Agentes IA', 'Requisitos', 'Engenharia de Produtos', 'LangGraph'],
    content: `
### Requisitos Não Determinísticos

Projetos tradicionais baseiam-se na premissa $f(x) = y$. Em sistemas guiados por agentes autônomos, $f(x)$ pode variar dependendo do contexto e da memória do agente.

#### Como documentar?
1. **Definição de Guardrails**: Estabeleça limites rígidos para o agente antes das saídas chegarem ao usuário.
2. **Human-in-the-Loop**: Mapeie os pontos de decisão onde intervenção humana é mandatória (ex: aprovação de transações financeiras).
3. **Casos de Teste de Avaliação Antagônica**: Simule comportamentos adversariais no prompt para garantir robustez.
    `
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Plataforma de Inteligência de Dados & LLM Copilot',
    clientOrProject: 'Setor Financeiro & Investimentos',
    category: 'IA & Arquitetura de Dados',
    description: 'Arquitetura de Lakehouse e assistente inteligente com RAG corporativo para análise de relatórios regulatórios e compliance.',
    results: [
      'Redução de 65% no tempo de análise de compliance',
      'Inclusão de +10 milhões de documentos em Vector DB em tempo real',
      'Governança automatizada compatível com regulação bancária'
    ],
    technologies: ['Databricks', 'Python', 'LangChain', 'PGVector', 'Apache Kafka', 'Azure Cloud'],
    image: DRAWER_IMAGES.heroBg,
    year: '2025'
  },
  {
    id: 'port-2',
    title: 'Transformação Agil & Modernização de Arquitetura Legacy',
    clientOrProject: 'Empresa de Grande Porte em Saúde',
    category: 'Arquitetura de Software & Agilidade',
    description: 'Reformulação da engenharia de software de um sistema legado monolítico para microsserviços orientados a eventos com sincronização em tempo real.',
    results: [
      'Aumento do uptime do sistema para 99.98%',
      'Redução do ciclo de entrega de features de 3 semanas para 2 dias',
      'Capacitação de mais de 80 engenheiros e product managers'
    ],
    technologies: ['DDD', 'Event Sourcing', 'Docker', 'Kubernetes', 'dbt', 'GCP'],
    image: DRAWER_IMAGES.resume,
    year: '2024'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Consultora Especialista em IA, Dados e Arquitetura',
    organization: '',
    period: '2021 - Presente',
    location: '',
    description: 'Consultoria estratégica para empresas líderes que buscam implementar soluções avançadas de Inteligência Artificial, arquitetura de dados escalável e agilidade corporativa.',
    achievements: [
      'Desenho de arquiteturas de IA para clientes nas áreas financeira, educacional e de tecnologia',
      'Mentoria para mais de 3.000 profissionais em cursos e workshops de IA e Engenharia de Requisitos',
      'Implementação de pipelines de governança de dados e cultura data-driven'
    ],
    skills: ['GenAI', 'Enterprise Architecture', 'Data Mesh', 'Executive Mentorship', 'Agile Governance']
  },
  {
    id: 'exp-2',
    role: 'Mestre em Ciência da Computação (Pesquisadora em IA)',
    organization: '',
    period: '2019 - 2021',
    location: '',
    description: 'Pesquisa acadêmica focada em Inteligência Artificial, Aprendizado de Máquina, Processamento de Linguagem Natural e Modelagem Computacional.',
    achievements: [
      'Publicação de artigos científicos na área de Inteligência Artificial aplicada',
      'Desenvolvimento de modelos algorítmicos para análise de grandes volumes de dados',
      'Docência universitária em disciplinas de Banco de Dados e Engenharia de Software'
    ],
    skills: ['Machine Learning', 'AI Research', 'Python', 'Data Science', 'Academic Publishing']
  },
  {
    id: 'exp-3',
    role: 'Líder de Arquitetura de Software e Requisitos de Negócio',
    organization: '',
    period: '2016 - 2019',
    location: '',
    description: 'Coordenação técnica de projetos de software complexos, definição de padrões arquiteturais e alinhamento entre times de produto e desenvolvimento.',
    achievements: [
      'Liderança técnica na migração de sistemas legados para arquitetura de microserviços',
      'Criação do framework interno de e-licitação de requisitos ágeis'
    ],
    skills: ['Software Architecture', 'UML & Data Modeling', 'Scrum/Kanban', 'Microservices']
  }
];

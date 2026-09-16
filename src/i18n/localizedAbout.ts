import { Language } from '../types';

export interface AboutContentItem {
  badge: string;
  title: string;
  subtitle: string;
  quoteLyrical1: string;
  quoteLyrical2: string;
  quoteLyrical3: string;
  officialBadge: string;
  name: string;
  bioP1: string;
  bioP2: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  pillar4Title: string;
  pillar4Desc: string;
  badgeJourney: string;
  trajectoryTitle: string;
  trajectoryP1: string;
  trajectoryP2: string;
  trajectoryP3: string;
  humanPillarBadge: string;
  humanPillarTitle: string;
  humanPillarP1: string;
  humanPillarP2: string;
  featuredLectureBadge: string;
  featuredLectureTitle: string;
  featuredLectureSubtitle: string;
  featuredLectureDesc: string;
  ctaProposal: string;
  ctaCourses: string;
}

export const LOCALIZED_ABOUT_DATA: Record<Language, AboutContentItem> = {
  pt: {
    badge: 'DIR_001 // QUEM SOU EU • ELAINE FIGUEIREDO',
    title: 'Quem Sou Eu',
    subtitle: 'Educadora, consultora e pesquisadora em Inteligência Artificial. Unindo a sensibilidade humana, a música e a excelência tecnológica para transformar vidas e organizações.',
    quoteLyrical1: '“A música me ensina a sentir o mundo.',
    quoteLyrical2: 'A tecnologia me ensina a transformá-lo.',
    quoteLyrical3: 'E o conhecimento me permite conectá-los para transformar vidas.”',
    officialBadge: 'APRESENTAÇÃO OFICIAL',
    name: 'Elaine Figueiredo',
    bioP1: 'Sou apaixonada por tecnologia, educação e pelo poder transformador da inteligência artificial.',
    bioP2: 'Acredito que conhecimento só tem valor quando é acessível, prático e capaz de gerar impacto real na vida e na carreira das pessoas.',
    pillar1Title: 'Consultora & Treinadora',
    pillar1Desc: 'Em Tecnologia e Inteligência Artificial aplicada a negócios e inovação.',
    pillar2Title: 'Palestrante & Keynote',
    pillar2Desc: 'Palestras magnas transformadoras sobre IA, letramento e futuro do trabalho.',
    pillar3Title: 'Professora Universitária',
    pillar3Desc: 'Mais de 10.000 profissionais e estudantes formados em dados e engenharia.',
    pillar4Title: 'Mestra em Computação',
    pillar4Desc: 'Pesquisadora em IA, ontologias e representação semântica do conhecimento.',
    badgeJourney: 'FORMAÇÃO, DOCÊNCIA & MERCADO',
    trajectoryTitle: 'Uma trajetória de mais de 20 anos na vanguarda da tecnologia',
    trajectoryP1: 'Com sólida formação acadêmica como Mestra em Ciência da Computação e doutoranda em IA, atuo há mais de duas décadas conectando a complexidade dos algoritmos aos desafios estratégicos de negócio.',
    trajectoryP2: 'Minha experiência abrange liderança de projetos de Engenharia de Software, modelagem de dados para o setor bancário e de saúde, arquitetura de sistemas distribuídos e implementação de soluções com Large Language Models (LLMs) e RAG em produção.',
    trajectoryP3: 'Como educadora, já estive em salas de aula de graduação e pós-graduação das mais prestigiadas instituições brasileiras, além de conduzir workshops executivos e mentorias corporativas.',
    humanPillarBadge: 'FILOSOFIA // SENSIBILIDADE & MÚSICA',
    humanPillarTitle: 'A dimensão humana por trás do código e dos algoritmos',
    humanPillarP1: 'Acredito profundamente que a verdadeira revolução da Inteligência Artificial não reside na substituição do ser humano, mas na elevação de seu potencial criativo e empático. Como musicista e amante da arte, trago para a engenharia de tecnologia uma visão sensível e harmoniosa.',
    humanPillarP2: 'Ensinar tecnologia de forma leve, acolhedora e desmistificada é o meu propósito fundamental. Quando compreendemos a essência dos dados, tornamo-nos autores conscientes do nosso próprio futuro profissional.',
    featuredLectureBadge: 'PALESTRA MAGNA EM DESTAQUE',
    featuredLectureTitle: 'O Humano é Essencial na Era da Inteligência Artificial',
    featuredLectureSubtitle: 'Empatia, Discernimento, Sensibilidade e o Valor Irreversível da Singularidade Humana',
    featuredLectureDesc: 'Uma conferência emocionante que redefine o papel das pessoas frente à automação, inspirando líderes e colaboradores a cultivarem o que as máquinas jamais terão: coração, sabedoria e empatia.',
    ctaProposal: 'SOLICITAR PROPOSTA DA PALESTRA',
    ctaCourses: 'CONHECER MINHAS FORMAÇÕES'
  },
  en: {
    badge: 'DIR_001 // ABOUT ME • ELAINE FIGUEIREDO',
    title: 'About Me',
    subtitle: 'Educator, consultant, and AI researcher. Merging human sensibility, music, and technological excellence to transform lives and organizations.',
    quoteLyrical1: '“Music teaches me to feel the world.',
    quoteLyrical2: 'Technology teaches me to transform it.',
    quoteLyrical3: 'And knowledge allows me to connect them to empower lives.”',
    officialBadge: 'OFFICIAL PROFILE',
    name: 'Elaine Figueiredo',
    bioP1: 'Passionate about technology, education, and the transformative power of artificial intelligence.',
    bioP2: 'I believe that knowledge is only truly valuable when it is accessible, practical, and capable of driving real impact in people’s careers and lives.',
    pillar1Title: 'Consultant & Corporate Trainer',
    pillar1Desc: 'In enterprise AI solutions, data engineering, and agile business transformation.',
    pillar2Title: 'Keynote Speaker & Lecturer',
    pillar2Desc: 'Inspirational magna keynotes on AI literacy, governance, and the future of work.',
    pillar3Title: 'University Professor',
    pillar3Desc: 'Over 10,000 professionals and students mentored in data science and engineering.',
    pillar4Title: 'M.Sc. in Computer Science',
    pillar4Desc: 'Researcher in applied AI, knowledge ontologies, and semantic modeling.',
    badgeJourney: 'ACADEMIA, INDUSTRY & LEADERSHIP',
    trajectoryTitle: 'A 20+ year trajectory at the forefront of technology',
    trajectoryP1: 'With an M.Sc. in Computer Science and doctoral research in AI, I have spent over two decades bridging complex computational algorithms with strategic business challenges.',
    trajectoryP2: 'My background spans software engineering leadership, enterprise banking and healthcare data modeling, distributed architectures, and production-grade LLM and RAG pipelines.',
    trajectoryP3: 'As an educator, I have taught in undergraduate and postgraduate programs across top Brazilian institutions, while conducting executive masterclasses and corporate workshops.',
    humanPillarBadge: 'PHILOSOPHY // HUMAN SENSITIVITY & ART',
    humanPillarTitle: 'The human dimension behind algorithms and code',
    humanPillarP1: 'I firmly believe that the true revolution of Artificial Intelligence is not about replacing humans, but about elevating our creative and empathetic potential. As a musician, I bring harmony and discernment into engineering.',
    humanPillarP2: 'Teaching technology in an accessible, warm, and demystified manner is my core mission. When we truly comprehend data, we become conscious authors of our professional future.',
    featuredLectureBadge: 'FEATURED MAGNA KEYNOTE',
    featuredLectureTitle: 'The Human is Essential in the Age of AI',
    featuredLectureSubtitle: 'Empathy, Discernment, Sensitivity, and the Irreplaceable Power of Human Uniqueness',
    featuredLectureDesc: 'An inspiring keynote that redefines human leadership alongside automation, urging teams to cultivate what machines can never possess: heart, moral wisdom, and empathy.',
    ctaProposal: 'REQUEST KEYNOTE PROPOSAL',
    ctaCourses: 'EXPLORE ALL COURSES'
  },
  es: {
    badge: 'DIR_001 // QUIÉN SOY • ELAINE FIGUEIREDO',
    title: 'Quién Soy',
    subtitle: 'Educadora, consultora e investigadora en Inteligencia Artificial. Uniendo sensibilidad humana, música y excelencia tecnológica para transformar vidas y organizaciones.',
    quoteLyrical1: '“La música me enseña a sentir el mundo.',
    quoteLyrical2: 'La tecnología me enseña a transformarlo.',
    quoteLyrical3: 'Y el conocimiento me permite unirlos para transformar vidas.”',
    officialBadge: 'PRESENTACIÓN OFICIAL',
    name: 'Elaine Figueiredo',
    bioP1: 'Apasionada por la tecnología, la educación y el poder transformador de la inteligencia artificial.',
    bioP2: 'Creo que el conocimiento solo tiene valor real cuando es accesible, práctico y capaz de generar un impacto auténtico en la vida y carrera de las personas.',
    pillar1Title: 'Consultora y Formadora',
    pillar1Desc: 'En tecnología e Inteligencia Artificial aplicada a negocios e innovación.',
    pillar2Title: 'Conferencista Magistral',
    pillar2Desc: 'Conferencias inspiradoras sobre IA, alfabetización digital y el futuro del trabajo.',
    pillar3Title: 'Profesora Universitaria',
    pillar3Desc: 'Más de 10.000 profesionales y estudiantes formados en datos e ingeniería.',
    pillar4Title: 'Máster en Computación',
    pillar4Desc: 'Investigadora en IA, ontologías y representación semántica del conocimiento.',
    badgeJourney: 'TRAYECTORIA, ACADEMIA Y MERCADO',
    trajectoryTitle: 'Una trayectoria de más de 20 años a la vanguardia de la tecnología',
    trajectoryP1: 'Con sólida formación como Máster en Ciencias de la Computación e investigadora doctoral en IA, llevo más de dos décadas uniendo la complejidad técnica con las metas estratégicas de negocio.',
    trajectoryP2: 'Mi experiencia incluye liderazgo en ingeniería de software, modelado de datos en finanzas y salud, arquitecturas distribuidas y despliegue de sistemas con LLMs y RAG en producción.',
    trajectoryP3: 'Como docente, he impartido clases en prestigiosas universidades y facilitado masterclasses ejecutivas para líderes de grandes corporaciones.',
    humanPillarBadge: 'FILOSOFÍA // SENSIBILIDAD HUMANA Y MÚSICA',
    humanPillarTitle: 'La dimensión humana detrás de los códigos y algoritmos',
    humanPillarP1: 'Creo firmemente que la verdadera revolución de la IA no reside en reemplazar a las personas, sino en potenciar su creatividad y empatía. Como música, aporto armonía y calidez al diseño tecnológico.',
    humanPillarP2: 'Enseñar tecnología de manera cercana, clara y desmitificada es mi misión fundamental. Al comprender la esencia de los datos, nos convertimos en protagonistas conscientes de nuestro futuro.',
    featuredLectureBadge: 'CONFERENCIA MAGISTRAL DESTACADA',
    featuredLectureTitle: 'El Humano es Esencial en la Era de la Inteligencia Artificial',
    featuredLectureSubtitle: 'Empatía, Discernimiento, Sensibilidad y el Valor Inolvidable de la Singularidad Humana',
    featuredLectureDesc: 'Una conferencia conmovedora que redefine el protagonismo de las personas frente a la automatización, inspirando a cultivar lo que las máquinas jamás tendrán: corazón y empatía.',
    ctaProposal: 'SOLICITAR PROPUESTA DE CONFERENCIA',
    ctaCourses: 'CONOCER MIS FORMACIONES'
  },
  fr: {
    badge: 'DIR_001 // QUI SUIS-JE • ELAINE FIGUEIREDO',
    title: 'Qui Suis-Je',
    subtitle: 'Éducatrice, consultante et chercheuse en Intelligence Artificielle. Alliant sensibilité humaine, musique et rigueur technologique pour transformer vies et organisations.',
    quoteLyrical1: '“La musique m’apprend à ressentir le monde.',
    quoteLyrical2: 'La technologie m’apprend à le transformer.',
    quoteLyrical3: 'Et le savoir me permet de les unir pour enrichir les vies.”',
    officialBadge: 'PRÉSENTATION OFFICIELLE',
    name: 'Elaine Figueiredo',
    bioP1: 'Passionnée par la technologie, la pédagogie et la force émancipatrice de l’intelligence artificielle.',
    bioP2: 'Je suis convaincue que le savoir n’a de véritable valeur que lorsqu’il est accessible, concret et porteur d’un impact tangible dans la vie et la carrière de chacun.',
    pillar1Title: 'Consultante & Formatrice',
    pillar1Desc: 'En solutions d’IA, ingénierie des données et transformation numérique.',
    pillar2Title: 'Conférencière Keynote',
    pillar2Desc: 'Conférences plénières percutantes sur la littératie en IA et l’avenir du travail.',
    pillar3Title: 'Professeure d’Université',
    pillar3Desc: 'Plus de 10 000 professionnels et étudiants formés en data et génie logiciel.',
    pillar4Title: 'Master en Informatique',
    pillar4Desc: 'Chercheuse en IA appliquée, ontologies et modélisation sémantique.',
    badgeJourney: 'PARCOURS, RECHERCHE & ENTREPRISE',
    trajectoryTitle: 'Plus de 20 ans d’expertise à la pointe de l’innovation technologique',
    trajectoryP1: 'Titulaire d’un Master recherche en informatique et doctorante en IA, j’évolue depuis plus de deux décennies à la croisée des algorithmes de pointe et des impératifs métier.',
    trajectoryP2: 'Mon parcours réunit la direction de projets logiciels, la modélisation de données financières et médicales, l’architecture distribuée et le déploiement de modèles LLM et RAG en production.',
    trajectoryP3: 'Enseignante au sein de facultés réputées, j’anime également des masterclasses et séminaires de direction auprès d’entreprises internationales.',
    humanPillarBadge: 'PHILOSOPHIE // SENSIBILITÉ HUMAINE & MUSIQUE',
    humanPillarTitle: 'La dimension humaine au cœur des codes et des algorithmes',
    humanPillarP1: 'Je crois fermement que la vraie révolution de l’IA ne consiste pas à remplacer l’humain, mais à décupler son potentiel créatif et empathique. En tant que musicienne, j’insuffle sensibilité et harmonie dans la technologie.',
    humanPillarP2: 'Transmettre la tech avec clarté, bienveillance et rigueur est ma vocation première. Quand nous maîtrisons les données, nous redevenons les auteurs lucides de notre avenir.',
    featuredLectureBadge: 'CONFÉRENCE PLÉNIÈRE EN VEDETTE',
    featuredLectureTitle: 'L’Humain est Essentiel à l’Ère de l’Intelligence Artificielle',
    featuredLectureSubtitle: 'Empathie, Discernement, Sensibilité et la Valeur Inégalée de la Singularité Humaine',
    featuredLectureDesc: 'Une conférence vibrante qui replace l’être humain au centre de la révolution technologique, rappelant aux équipes ce qu’aucun algorithme ne pourra jamais égaler : le cœur et la sagesse.',
    ctaProposal: 'DEMANDER UNE PROPOSITION',
    ctaCourses: 'DÉCOUVRIR TOUTES LES FORMATIONS'
  },
  it: {
    badge: 'DIR_001 // CHI SONO • ELAINE FIGUEIREDO',
    title: 'Chi Sono',
    subtitle: 'Docente, consulente e ricercatrice in Intelligenza Artificiale. Unione di sensibilità umana, musica ed eccellenza tecnologica per trasformare persone e organizzazioni.',
    quoteLyrical1: '“La musica mi insegna a sentire il mondo.',
    quoteLyrical2: 'La tecnologia mi insegna a trasformarlo.',
    quoteLyrical3: 'E la conoscenza mi permette di unirle per trasformare le vite.”',
    officialBadge: 'PROFILO UFFICIALE',
    name: 'Elaine Figueiredo',
    bioP1: 'Appassionata di tecnologia, istruzione e dell’impatto trasformativo dell’intelligenza artificiale.',
    bioP2: 'Credo che la conoscenza abbia reale valore solo quando è accessibile, concreta e capace di produrre un cambiamento tangibile nella vita e nella carriera delle persone.',
    pillar1Title: 'Consulente & Formatrice',
    pillar1Desc: 'In soluzioni di IA, architetture dati e trasformazione digitale per le imprese.',
    pillar2Title: 'Relatrice & Keynote Speaker',
    pillar2Desc: 'Conferenze magistrali su alfabetizzazione all’IA, governance e futuro del lavoro.',
    pillar3Title: 'Docente Universitaria',
    pillar3Desc: 'Oltre 10.000 professionisti e studenti formati in data science e ingegneria.',
    pillar4Title: 'Laurea Magistrale in Informatica',
    pillar4Desc: 'Ricercatrice in IA applicata, ontologie e rappresentazione semantica della conoscenza.',
    badgeJourney: 'CARRIERA, RICERCA & DOCENZA',
    trajectoryTitle: 'Oltre 20 anni di esperienza all’avanguardia della tecnologia',
    trajectoryP1: 'Con una Laurea Magistrale in Informatica e un dottorato in corso in IA, da oltre due decenni collego la complessità degli algoritmi agli obiettivi strategici di business.',
    trajectoryP2: 'La mia esperienza comprende la guida di progetti software complessi, modellazione dati per banche e sanità, architetture distribuite e pipeline RAG ed LLM in produzione.',
    trajectoryP3: 'Come docente accademica, insegno in corsi di laurea e master universitari, tenendo inoltre masterclass per dirigenti d’azienda.',
    humanPillarBadge: 'FILOSOFIA // SENSIBILITÀ UMANA & MUSICA',
    humanPillarTitle: 'La dimensione umana al centro di algoritmi e codice',
    humanPillarP1: 'Credo profondamente che la vera rivoluzione dell’IA non risieda nel sostituire l’essere umano, ma nell’elevarne il potenziale creativo ed empatico. Come musicista, porto armonia e visione umanistica nell’ingegneria.',
    humanPillarP2: 'Insegnare la tecnologia in modo chiaro, empatico e demistificato è la mia vocazione. Quando comprendiamo i dati, diventiamo protagonisti consapevoli del nostro futuro.',
    featuredLectureBadge: 'KEYNOTE MAGNA IN EVIDENZA',
    featuredLectureTitle: 'L’Umano è Essenziale nell’Era dell’Intelligenza Artificiale',
    featuredLectureSubtitle: 'Empatia, Discernimento, Sensibilità e il Valore Irrinunciabile della Singolarità Umana',
    featuredLectureDesc: 'Una conferenza toccante che riscopre il primato dell’essere umano nei confronti dell’automazione, ispirando i team a coltivare ciò che le macchine non avranno mai: cuore ed empatia.',
    ctaProposal: 'RICHIEDI PROPOSTA DEL KEYNOTE',
    ctaCourses: 'SCOPRI TUTTI I CORSI'
  }
};

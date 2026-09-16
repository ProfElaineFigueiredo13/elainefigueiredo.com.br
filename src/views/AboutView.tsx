import React from 'react';
import { ViewMode } from '../types';
import { DRAWER_IMAGES, SOCIAL_LINKS } from '../data/mockData';
import { SocialIcon } from '../components/SocialIcon';
import { useLanguage } from '../i18n/LanguageContext';
import { LOCALIZED_ABOUT_DATA } from '../i18n/localizedAbout';

interface AboutViewProps {
  setCurrentView: (view: ViewMode) => void;
  onSelectLecture?: (lectureId: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setCurrentView, onSelectLecture }) => {
  const { language } = useLanguage();
  const content = LOCALIZED_ABOUT_DATA[language] || LOCALIZED_ABOUT_DATA.pt;
  const whatsapp = SOCIAL_LINKS.find((s) => s.id === 'whatsapp');

  const helpLabels = {
    pt: {
      howCanIHelp: 'COMO POSSO TE AJUDAR:',
      lectures: 'Palestras',
      training: 'Treinamentos',
      consulting: 'Consultorias',
      content: 'Conteúdo',
      guidance: 'Orientações',
      purposeTitle: 'PROPÓSITO CENTRAL',
      purposeQuote: '“Meu propósito é levar conhecimento em tecnologia e IA para o mundo, de forma ',
      purposeHighlight: 'leve, humana e transformadora',
      humanTitle: 'A Importância do Humano na Era da Inteligência Artificial',
      humanSub: '"A tecnologia é o meio; o ser humano é o propósito."',
      sensTitle: 'Sensibilidade & Música',
      sensDesc: 'Assim como a música conecta notas para criar emoção e harmonia, o conhecimento técnico precisa de empatia e escuta ativa para gerar soluções que façam sentido no mundo real.',
      discTitle: 'Discernimento Ético & Crítico',
      discDesc: 'A IA processa padrões e probabilidades, mas o julgamento moral, a responsabilidade social e o direcionamento estratégico permanecem prerrogativas insubstituíveis do intelecto humano.',
      eduTitle: 'Educação Transformadora',
      eduDesc: 'Democratizar o acesso ao conhecimento técnico de forma leve e acolhedora, capacitando pessoas a liderarem seus próprios futuros profissionais com autonomia e confiança.',
      manifestoTitle: '✦ Manifesto da IA com Alma Humana:',
      manifestoP: 'Em um cenário saturado de jargões e automações impessoais, defendo uma abordagem onde a Inteligência Artificial serve para potencializar as capacidades humanas — libertando tempo para a criatividade, o pensamento crítico, o cuidado com as relações e a inovação com propósito.',
      academicTitle: 'Formação Acadêmica & Pesquisa',
      corporateTitle: 'Experiência Corporativa & Liderança',
      whatsappBtn: 'FALE NO WHATSAPP',
    },
    en: {
      howCanIHelp: 'HOW I CAN HELP YOU:',
      lectures: 'Keynotes',
      training: 'Training & Courses',
      consulting: 'Consulting',
      content: 'Articles & Content',
      guidance: 'Mentorship',
      purposeTitle: 'CORE PURPOSE',
      purposeQuote: '“My purpose is to bring AI and tech literacy to the world in a ',
      purposeHighlight: 'warm, human, and transformative way',
      humanTitle: 'The Human is Essential in the Age of Artificial Intelligence',
      humanSub: '"Technology is the instrument; the human being is the purpose."',
      sensTitle: 'Sensitivity & Music',
      sensDesc: 'Just as music blends notes into emotion and harmony, technology needs empathy and human resonance to build solutions that truly matter.',
      discTitle: 'Ethical & Critical Discernment',
      discDesc: 'AI processes patterns and probabilities, but moral reasoning, ethical accountability, and strategic wisdom belong solely to the human spirit.',
      eduTitle: 'Transformative Education',
      eduDesc: 'Democratizing high-level technology knowledge in an approachable, inspiring way, empowering individuals to lead their careers with confidence.',
      manifestoTitle: '✦ Human-Centered AI Manifesto:',
      manifestoP: 'In an environment full of buzzwords, I advocate for AI that amplifies human potential—freeing up time for creativity, deep thinking, genuine connections, and purposeful innovation.',
      academicTitle: 'Academic Background & Research',
      corporateTitle: 'Corporate Leadership & Experience',
      whatsappBtn: 'CHAT ON WHATSAPP',
    },
    es: {
      howCanIHelp: 'CÓMO PUEDO AYUDARTE:',
      lectures: 'Conferencias',
      training: 'Capacitaciones',
      consulting: 'Consultorías',
      content: 'Contenido',
      guidance: 'Mentorías',
      purposeTitle: 'PROPÓSITO CENTRAL',
      purposeQuote: '“Mi propósito es llevar el conocimiento en tecnología e IA al mundo de forma ',
      purposeHighlight: 'cercana, humana y transformadora',
      humanTitle: 'La Importancia del Humano en la Era de la Inteligencia Artificial',
      humanSub: '"La tecnología es el medio; el ser humano es el propósito."',
      sensTitle: 'Sensibilidad y Música',
      sensDesc: 'Así como la música armoniza notas para transmitir emoción, la técnica requiere empatía y escucha para crear soluciones con valor real.',
      discTitle: 'Discernimiento Ético y Crítico',
      discDesc: 'La IA procesa probabilidades, pero la responsabilidad ética, el juicio moral y el rumbo estratégico son exclusivos del ser humano.',
      eduTitle: 'Educación Transformadora',
      eduDesc: 'Democratizar el saber técnico con calidez y claridad, empoderando a las personas para liderar su trayectoria profesional con confianza.',
      manifestoTitle: '✦ Manifiesto de IA con Alma Humana:',
      manifestoP: 'Frente a la automatización despersonalizada, promovemos una IA que potencie las capacidades humanas para crear, reflexionar e innovar con propósito.',
      academicTitle: 'Formación Académica e Investigación',
      corporateTitle: 'Experiencia Corporativa y Liderazgo',
      whatsappBtn: 'CONTACTAR POR WHATSAPP',
    },
    fr: {
      howCanIHelp: 'COMMENT JE PEUX VOUS AIDER :',
      lectures: 'Conférences',
      training: 'Formations',
      consulting: 'Conseil & Audit',
      content: 'Publications',
      guidance: 'Mentorat',
      purposeTitle: 'MISSION ESSENTIELLE',
      purposeQuote: '“Mon ambition est de rendre le savoir technologique et l’IA accessibles, de manière ',
      purposeHighlight: 'chaleureuse, humaine et transformatrice',
      humanTitle: 'L’Importance de l’Humain à l’Ère de l’Intelligence Artificielle',
      humanSub: '"La technologie est le moyen ; l’être humain est la finalité."',
      sensTitle: 'Sensibilité & Musique',
      sensDesc: 'De même que la musique harmonise les notes pour susciter l’émotion, la tech exige écoute et empathie pour servir la société.',
      discTitle: 'Discernement Éthique & Critique',
      discDesc: 'L’IA calcule des corrélations, mais le jugement moral, la responsabilité éthique et la vision stratégique demeurent l’apanage de l’humain.',
      eduTitle: 'Éducation Transformatrice',
      eduDesc: 'Démystifier les données et la tech avec clarté et bienveillance pour rendre chacun acteur lucide de son parcours professionnel.',
      manifestoTitle: '✦ Manifeste pour une IA au Cœur Humain :',
      manifestoP: 'Loin des modes passagères, nous défendons une IA qui décuple le potentiel humain, libérant l’esprit pour la créativité et le sens critique.',
      academicTitle: 'Parcours Académique & Recherche',
      corporateTitle: 'Leadership & Expérience en Entreprise',
      whatsappBtn: 'ÉCHANGER SUR WHATSAPP',
    },
    it: {
      howCanIHelp: 'COME POSSO AIUTARTI:',
      lectures: 'Conferenze',
      training: 'Corsi e Formazione',
      consulting: 'Consulenze',
      content: 'Contenuti e Articoli',
      guidance: 'Mentoring',
      purposeTitle: 'SCOPO CENTRALE',
      purposeQuote: '“Il mio scopo è portare la conoscenza di tecnologia e IA nel mondo in modo ',
      purposeHighlight: 'leggero, umano e trasformativo',
      humanTitle: 'L’Importanza dell’Umano nell’Era dell’Intelligenza Artificiale',
      humanSub: '"La tecnologia è lo strumento; l’essere umano è il fine."',
      sensTitle: 'Sensibilità & Musica',
      sensDesc: 'Così come la musica unisce note per creare armonia ed emozione, la tecnica richiede empatia per realizzare soluzioni davvero utili.',
      discTitle: 'Discernimento Etico & Critico',
      discDesc: 'L’IA elabora schemi e probabilità, ma la responsabilità morale e la direzione strategica sono doni insostituibili dell’intelletto umano.',
      eduTitle: 'Didattica Trasformativa',
      eduDesc: 'Democratizzare l’apprendimento tecnico con accoglienza e lucidità, guidando le persone a forgiare con fiducia il proprio futuro.',
      manifestoTitle: '✦ Manifesto dell’IA con Anima Umana:',
      manifestoP: 'In un mondo dominato da slogan vuoti, promuoviamo un’IA che valorizzi l’ingegno umano, liberando tempo per creatività e pensiero critico.',
      academicTitle: 'Formazione Accademica & Ricerca',
      corporateTitle: 'Esperienza Aziendale & Leadership',
      whatsappBtn: 'SCRIVIMI SU WHATSAPP',
    }
  }[language] || {
    howCanIHelp: 'COMO POSSO TE AJUDAR:',
    lectures: 'Palestras',
    training: 'Treinamentos',
    consulting: 'Consultorias',
    content: 'Conteúdo',
    guidance: 'Orientações',
    purposeTitle: 'PROPÓSITO CENTRAL',
    purposeQuote: '“Meu propósito é levar conhecimento em tecnologia e IA para o mundo, de forma ',
    purposeHighlight: 'leve, humana e transformadora',
    humanTitle: 'A Importância do Humano na Era da Inteligência Artificial',
    humanSub: '"A tecnologia é o meio; o ser humano é o propósito."',
    sensTitle: 'Sensibilidade & Música',
    sensDesc: 'Assim como a música conecta notas para criar emoção e harmonia, o conhecimento técnico precisa de empatia e escuta ativa.',
    discTitle: 'Discernimento Ético & Crítico',
    discDesc: 'A IA processa padrões e probabilidades, mas o julgamento moral permanece humano.',
    eduTitle: 'Educação Transformadora',
    eduDesc: 'Democratizar o acesso ao conhecimento técnico de forma leve e acolhedora.',
    manifestoTitle: '✦ Manifesto da IA com Alma Humana:',
    manifestoP: 'Em um cenário de automação, a IA deve potencializar as capacidades humanas.',
    academicTitle: 'Formação Acadêmica & Pesquisa',
    corporateTitle: 'Experiência Corporativa & Liderança',
    whatsappBtn: 'FALE NO WHATSAPP',
  };

  return (
    <div className="py-12 px-4 md:px-6 max-w-[1240px] mx-auto min-h-[80vh]">
      
      {/* Header Banner */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass-card-bright border-[#D1C4E9]/20 font-mono text-xs text-[#D1C4E9]">
          <span className="material-symbols-outlined text-sm">person</span>
          {content.badge}
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-[#D1C4E9] mb-4">
          {content.title}
        </h1>
        <p className="font-sans text-lg text-[#d0c5af] max-w-3xl leading-relaxed">
          {content.subtitle}
        </p>
      </div>

      {/* Featured "Quem Sou Eu" Visual Composition Card */}
      <section className="mb-16">
        <div className="glass-card rounded-3xl p-6 md:p-10 border border-[#D1C4E9]/30 relative overflow-hidden bg-gradient-to-br from-[#1D1926]/90 via-[#0B0910]/95 to-[#160e29]/90 shadow-[0_0_40px_rgba(209,196,233,0.1)]">
          
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D1C4E9]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#381e72]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            
            {/* Left Content: Lyrical Quote & Bio & Pillars */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Lyrical Quote */}
              <div className="border-l-2 border-[#D1C4E9]/60 pl-4 py-1 space-y-2">
                <p className="font-headline text-lg sm:text-xl text-[#D1C4E9] italic leading-snug">
                  {content.quoteLyrical1}<br />
                  {content.quoteLyrical2}<br />
                  <span className="font-bold text-[#eae1d4] not-italic">
                    {content.quoteLyrical3}
                  </span>
                </p>
              </div>

              {/* Title & Name */}
              <div>
                <span className="font-mono text-xs text-[#9685B5] tracking-widest uppercase block mb-1">
                  {content.officialBadge}
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#D1C4E9]">
                  {content.name}
                </h2>
              </div>

              {/* Core Philosophy Paragraphs */}
              <div className="space-y-3 font-sans text-sm sm:text-base text-[#d0c5af] leading-relaxed">
                <p>
                  {content.bioP1}
                </p>
                <p>
                  {content.bioP2}
                </p>
              </div>

              {/* 4 Official Core Pillars */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-[#D1C4E9]/40 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#D1C4E9]/15 text-[#D1C4E9] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">psychology</span>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-bold text-[#D1C4E9]">
                      {content.pillar1Title}
                    </h3>
                    <p className="font-sans text-[11px] text-[#d0c5af]/80 mt-0.5">
                      {content.pillar1Desc}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-[#D1C4E9]/40 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#D1C4E9]/15 text-[#D1C4E9] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">mic</span>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-bold text-[#D1C4E9]">
                      {content.pillar2Title}
                    </h3>
                    <p className="font-sans text-[11px] text-[#d0c5af]/80 mt-0.5">
                      {content.pillar2Desc}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-[#D1C4E9]/40 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#D1C4E9]/15 text-[#D1C4E9] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">school</span>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-bold text-[#D1C4E9]">
                      {content.pillar3Title}
                    </h3>
                    <p className="font-sans text-[11px] text-[#d0c5af]/80 mt-0.5">
                      {content.pillar3Desc}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-[#D1C4E9]/40 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#D1C4E9]/15 text-[#D1C4E9] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">edit_note</span>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-bold text-[#D1C4E9]">
                      {content.pillar4Title}
                    </h3>
                    <p className="font-sans text-[11px] text-[#d0c5af]/80 mt-0.5">
                      {content.pillar4Desc}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Content: Photo Portrait with Lilac Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[380px] rounded-2xl overflow-hidden relative group border-2 border-[#D1C4E9]/40 shadow-[0_0_30px_rgba(209,196,233,0.2)] bg-black">
                <img
                  src={DRAWER_IMAGES.about}
                  alt="Elaine Figueiredo - Quem Sou Eu"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0910] via-transparent to-transparent opacity-70" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1D1926]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#D1C4E9]/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline text-sm font-bold text-[#D1C4E9]">
                      Elaine Figueiredo
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#D1C4E9] text-[#381e72] font-bold">
                      M.Sc. IA
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-[#d0c5af]/80">
                    Mestre em Ciência da Computação (USP/FACCAMP) • Especialista em IA & Educação
                  </p>
                </div>
              </div>

              {/* Action Buttons below image */}
              <div className="w-full max-w-[380px] mt-4 flex gap-2">
                {whatsapp && (
                  <a
                    href={whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#25D366] text-black font-mono font-bold text-xs rounded-xl hover:bg-[#25D366]/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                  >
                    <SocialIcon name="whatsapp" size={16} />
                    {helpLabels.whatsappBtn}
                  </a>
                )}
                <button
                  onClick={() => setCurrentView('contact')}
                  className="py-3 px-4 bg-white/10 hover:bg-white/15 text-[#D1C4E9] border border-white/10 font-mono text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Formulário de Contato"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                </button>
              </div>
            </div>

          </div>

          {/* Mission Bar */}
          <div className="mt-8 p-4 md:p-5 rounded-2xl bg-gradient-to-r from-[#381e72] via-[#2A1747] to-[#381e72] border border-[#D1C4E9]/40 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#D1C4E9]/20 border border-[#D1C4E9] flex items-center justify-center text-[#D1C4E9] shrink-0 shadow-[0_0_15px_rgba(209,196,233,0.4)]">
              <span className="material-symbols-outlined text-2xl">music_note</span>
            </div>
            <div className="flex-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D1C4E9]/80 block font-bold">
                {helpLabels.purposeTitle}
              </span>
              <p className="font-headline text-base sm:text-lg text-white font-medium italic">
                {helpLabels.purposeQuote}
                <span className="font-bold text-[#D1C4E9] underline decoration-[#D1C4E9]/50">
                  {helpLabels.purposeHighlight}
                </span>.”
              </p>
            </div>
          </div>

          {/* "Como Posso Te Ajudar" Strip */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9685B5] font-bold block mb-4 text-center sm:text-left">
              {helpLabels.howCanIHelp}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
              
              <button
                onClick={() => setCurrentView('contact')}
                className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#D1C4E9] hover:bg-white/5 transition-all flex items-center gap-2 text-[#D1C4E9] cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">record_voice_over</span>
                <span>{helpLabels.lectures}</span>
              </button>

              <button
                onClick={() => setCurrentView('courses')}
                className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#D1C4E9] hover:bg-white/5 transition-all flex items-center gap-2 text-[#D1C4E9] cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">laptop_chromebook</span>
                <span>{helpLabels.training}</span>
              </button>

              <button
                onClick={() => setCurrentView('contact')}
                className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#D1C4E9] hover:bg-white/5 transition-all flex items-center gap-2 text-[#D1C4E9] cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">handshake</span>
                <span>{helpLabels.consulting}</span>
              </button>

              <button
                onClick={() => setCurrentView('blog')}
                className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#D1C4E9] hover:bg-white/5 transition-all flex items-center gap-2 text-[#D1C4E9] cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">feed</span>
                <span>{helpLabels.content}</span>
              </button>

              <button
                onClick={() => setCurrentView('contact')}
                className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#D1C4E9] hover:bg-white/5 transition-all flex items-center gap-2 text-[#D1C4E9] cursor-pointer col-span-2 sm:col-span-1"
              >
                <span className="material-symbols-outlined text-base">school</span>
                <span>{helpLabels.guidance}</span>
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* Section: A Importância do Humano na Era da IA */}
      <section className="mb-16">
        <div className="glass-card rounded-2xl p-6 md:p-10 border border-[#D1C4E9]/20 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-[#D1C4E9]/10 font-mono text-[11px] text-[#D1C4E9]">
                <span className="material-symbols-outlined text-xs">favorite</span>
                HUMAN-CENTRIC AI // PHILOSOPHY
              </div>
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-[#D1C4E9]">
                {helpLabels.humanTitle}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#9685B5] max-w-xs md:text-right">
              {helpLabels.humanSub}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-black/30 border border-white/5 space-y-3 hover:border-[#D1C4E9]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#D1C4E9]/10 text-[#D1C4E9] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">palette</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#D1C4E9]">
                {helpLabels.sensTitle}
              </h3>
              <p className="font-sans text-xs text-[#d0c5af] leading-relaxed">
                {helpLabels.sensDesc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/30 border border-white/5 space-y-3 hover:border-[#D1C4E9]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#D1C4E9]/10 text-[#D1C4E9] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">balance</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#D1C4E9]">
                {helpLabels.discTitle}
              </h3>
              <p className="font-sans text-xs text-[#d0c5af] leading-relaxed">
                {helpLabels.discDesc}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-black/30 border border-white/5 space-y-3 hover:border-[#D1C4E9]/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#D1C4E9]/10 text-[#D1C4E9] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">groups</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#D1C4E9]">
                {helpLabels.eduTitle}
              </h3>
              <p className="font-sans text-xs text-[#d0c5af] leading-relaxed">
                {helpLabels.eduDesc}
              </p>
            </div>

          </div>

          <div className="p-6 rounded-xl bg-[#D1C4E9]/5 border border-[#D1C4E9]/20 font-sans text-sm text-[#d0c5af] leading-relaxed">
            <p className="font-bold text-[#D1C4E9] mb-2 font-mono text-xs uppercase tracking-wider">
              {helpLabels.manifestoTitle}
            </p>
            <p>
              {helpLabels.manifestoP}
            </p>
          </div>

          {/* Flagship Keynote Highlight */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#381e72]/40 to-black/60 border border-[#D1C4E9]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#D1C4E9] text-base">record_voice_over</span>
                <span className="font-mono text-[11px] text-[#D1C4E9] font-bold uppercase tracking-wider">
                  {content.featuredLectureBadge}
                </span>
              </div>
              <h4 className="font-headline text-lg font-bold text-white">
                {content.featuredLectureTitle}
              </h4>
              <p className="font-sans text-xs text-[#d0c5af]">
                {content.featuredLectureSubtitle}
              </p>
            </div>
            <button
              onClick={() => {
                if (onSelectLecture) {
                  onSelectLecture('talk-o-humano-e-essencial');
                } else {
                  setCurrentView('courses');
                }
              }}
              className="shrink-0 bg-[#D1C4E9] text-[#381e72] font-mono text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(209,196,233,0.25)]"
            >
              {content.ctaProposal}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

        </div>
      </section>

      {/* Trajectory & Academic Foundation */}
      <section className="grid lg:grid-cols-12 gap-8 items-start mb-12">
        
        <div className="lg:col-span-6 glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-4">
          <h2 className="font-headline text-xl font-bold text-[#D1C4E9] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#D1C4E9]">school</span>
            {helpLabels.academicTitle}
          </h2>
          <div className="space-y-3 font-sans text-sm text-[#d0c5af] leading-relaxed">
            <p>{content.trajectoryP1}</p>
            <p>{content.trajectoryP3}</p>
          </div>
        </div>

        <div className="lg:col-span-6 glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-4">
          <h2 className="font-headline text-xl font-bold text-[#D1C4E9] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#D1C4E9]">hub</span>
            {helpLabels.corporateTitle}
          </h2>
          <div className="space-y-3 font-sans text-sm text-[#d0c5af] leading-relaxed">
            <p>{content.trajectoryP2}</p>
            <p>{content.humanPillarP2}</p>
          </div>
        </div>

      </section>

    </div>
  );
};



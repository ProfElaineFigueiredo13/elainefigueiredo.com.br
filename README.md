# Elaine Figueiredo — Inteligência Artificial & Inovação

> **Portal oficial de Elaine Figueiredo**: Especialista em Inteligência Artificial, Arquitetura de Software, RAGs, LangChain, Governança de IA e Inovação Corporativa.

[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Proprietary-purple.svg)](#)

---

## 🚀 Tecnologias & Arquitetura

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide React, Motion.
- **Internacionalização (i18n)**: Suporte dinâmico a 5 idiomas (Português, Inglês, Espanhol, Francês, Italiano).
- **SEO Técnico & Rich Snippets**: Metatags dinâmicas, Open Graph, Twitter Cards, dados estruturados Schema.org (`Person`, `Course`, `FAQPage`, `WebSite`), `robots.txt` e `sitemap.xml`.
- **Rastreamento de Campanhas (SMA/UTMs)**: Captura automática e persistência de parâmetros UTM (`utm_source`, `utm_campaign`, etc.) e identificadores de tráfego pago (`gclid`, `fbclid`, `li_fat_id`) anexados a leads, contatos e conversões de WhatsApp.
- **Compatibilidade Hostinger**: Servidor configurado com regras Apache/LiteSpeed (`.htaccess`) para roteamento SPA sem erro 404, HTTPS forçado e cache de alta performance.

---

## 📦 Estrutura de Pastas

```text
├── .github/
│   └── workflows/
│       ├── ci-build.yml              # Testes e compilação automática no GitHub
│       └── deploy-hostinger-ftp.yml  # Deploy automático para a Hostinger via FTP
├── public/
│   ├── .htaccess                     # Regras LiteSpeed/Apache (SPA Rewrite, HTTPS, Cache)
│   ├── favicon.svg                   # Favicon oficial em vetor
│   ├── site.webmanifest              # Manifesto PWA
│   ├── robots.txt                    # Diretivas de indexação para motores de busca
│   ├── sitemap.xml                   # Mapa de URLs do site
│   └── curriculo.html                # Versão HTML para visualização e impressão de currículo
├── src/
│   ├── components/                   # Componentes reutilizáveis (Header, Footer, ShareBar, etc.)
│   ├── data/                         # Bases de dados tipadas (Cursos, Palestras, Trajetória)
│   ├── i18n/                         # Dicionários e contexto de idiomas
│   ├── utils/                        # Utilitários (SEO dinâmico, Analytics, UTMs)
│   ├── views/                        # Páginas/Visualizações da aplicação
│   ├── App.tsx                       # Componente principal e roteamento
│   └── main.tsx                      # Ponto de entrada React
├── package.json                      # Dependências e scripts de build
├── vite.config.ts                    # Configuração de build do Vite
└── tsconfig.json                     # Configuração do TypeScript
```

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- **Node.js 20.x ou superior**: [Baixar Node.js](https://nodejs.org/)
- **npm 9.x ou superior**

### Passo a Passo
```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# 2. Instale as dependências
npm install --legacy-peer-deps

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Abra no navegador em `http://localhost:3000`.

---

## 🛠️ Como Compilar para Produção

Execute o comando de build:
```bash
npm run build
```

O comando gerará os arquivos estáticos otimizados na pasta **`dist/`**, incluindo o `index.html`, `.htaccess`, `sitemap.xml`, `robots.txt` e a pasta `assets/`.

---

## 🌐 Como Publicar na Hostinger

### Método 1: Upload Direto no Gerenciador de Arquivos (Mais Rápido e Seguro)
1. Execute `npm run build` localmente (ou baixe a pasta `dist` pelo AI Studio).
2. Acesse o **hPanel** da Hostinger > **Gerenciador de Arquivos** (File Manager).
3. Abra a pasta **`public_html`**.
4. Faça o upload de **todos os arquivos e pastas de dentro de `dist/`** para a raiz de `public_html`.
5. Pronto! O site entrará no ar com suporte a SPA e HTTPS.

### Método 2: Deploy Automático via GitHub Actions (CI/CD)
1. No seu repositório no GitHub, vá em **Settings** > **Secrets and variables** > **Actions**.
2. Cadastre os seguintes segredos obtidos no painel da Hostinger (seção *Acesso FTP*):
   - `HOSTINGER_FTP_SERVER` (Ex: `ftp.elainefigueiredo.com.br` ou o IP do servidor)
   - `HOSTINGER_FTP_USERNAME` (Usuário de FTP da Hostinger)
   - `HOSTINGER_FTP_PASSWORD` (Senha de FTP da Hostinger)
3. Vá na aba **Actions** do GitHub e execute o workflow **Deploy to Hostinger (FTP)**.

---

## 📬 Contato & Redes

- **Site Oficial**: [elainefigueiredo.com.br](https://elainefigueiredo.com.br)
- **E-mail**: contato@elainefigueiredo.com.br
- **WhatsApp**: +55 (11) 99947-9666
- **LinkedIn**: [linkedin.com/in/elainefigueiredo](https://linkedin.com/in/elainefigueiredo)

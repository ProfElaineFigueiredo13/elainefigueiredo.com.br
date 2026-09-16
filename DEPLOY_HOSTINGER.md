# 🚀 Guia de Publicação: Hostinger & VS Code

Este guia explica como baixar o projeto da plataforma **elainefigueiredo.com.br**, abrir e editar no **VS Code**, sincronizar com seu **GitHub** e publicar na **Hostinger** (via hPanel ou GitHub Actions).

---

## 📥 1. Como Baixar o Projeto para o seu Computador

Você tem duas maneiras muito simples de exportar do Google AI Studio para o seu computador:

### Opção A: Exportar Direto para o GitHub (Recomendada)
1. No canto superior direito da tela do **Google AI Studio**, clique no menu de opções (**...** ou ícone de **Configurações / Exportar**).
2. Selecione **"Export to GitHub"** (ou **"Push to GitHub"**).
3. Conecte sua conta do GitHub e escolha o nome do repositório (ex: `elainefigueiredo-portal`).
4. O AI Studio criará o repositório diretamente na sua conta com todos os commits e arquivos.

### Opção B: Baixar como ZIP
1. No menu superior direito do **Google AI Studio**, clique em **"Download ZIP"** (ou **Export > Download as ZIP**).
2. Salve o arquivo `.zip` no seu computador e descompacte em uma pasta de sua preferência (ex: `C:\Projetos\elainefigueiredo` ou `~/Projetos/elainefigueiredo`).

---

## 💻 2. Como Abrir e Configurar no VS Code

### Pré-requisitos
- **VS Code**: [Baixar Visual Studio Code](https://code.visualstudio.com/)
- **Node.js** (versão 20 ou superior): [Baixar Node.js LTS](https://nodejs.org/)
- **Git**: [Baixar Git](https://git-scm.com/)

### Passo a Passo no VS Code:
1. Abra o **VS Code**.
2. Vá em **File > Open Folder...** (Arquivo > Abrir Pasta) e selecione a pasta do projeto descompactado.
3. Abra o terminal integrado do VS Code pressionando:
   - **Windows / Linux**: `Ctrl + \`` (ou `Ctrl + Shift + '`)
   - **Mac**: `Cmd + \``
4. No terminal, execute:
   ```bash
   npm install --legacy-peer-deps
   ```
5. Para testar o site rodando localmente no seu computador:
   ```bash
   npm run dev
   ```
6. O terminal exibirá a URL local:
   ```text
   ➜ Local: http://localhost:3000/
   ```
   Clique com `Ctrl + Clique` ou abra no navegador para ver as alterações em tempo real enquanto você edita os arquivos na pasta `src/`.

---

## 🐙 3. Como Conectar e Subir para o seu GitHub pelo VS Code

Se você baixou via ZIP e quer criar o repositório no seu GitHub:

1. Acesse [github.com/new](https://github.com/new) e crie um novo repositório (ex: `elainefigueiredo-site`). Deixe-o **sem** README inicial.
2. No terminal do VS Code, execute a sequência de comandos:
   ```bash
   git init
   git add .
   git commit -m "feat: site oficial Elaine Figueiredo completo com multi-idioma e SEO"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO_GITHUB/NOME_DO_REPOSITORIO.git
   git push -u origin main
   ```
3. Pronto! Todo o código estará salvo e versionado no seu GitHub.

---

## 🌐 4. Como Publicar na Hostinger

O projeto já inclui o arquivo especial **`public/.htaccess`** pré-configurado para a Hostinger, que garante:
- ✅ Forçamento automático de **HTTPS** seguro.
- ✅ Suporte completo a **Single Page Application (SPA)** sem erro 404 ao navegar ou atualizar a página.
- ✅ Cache de alto desempenho para imagens, fontes e scripts.
- ✅ Acesso direto a `curriculo.html`.

### Método 1: Upload via Gerenciador de Arquivos do hPanel (Mais Rápido — 2 Minutos)

1. No terminal do VS Code, gere os arquivos de produção executando:
   ```bash
   npm run build
   ```
   Isso criará uma pasta chamada **`dist/`** na raiz do projeto.
2. Acesse o painel da Hostinger (**hPanel**) em [hpanel.hostinger.com](https://hpanel.hostinger.com).
3. Selecione o domínio **elainefigueiredo.com.br** e clique em **Gerenciador de Arquivos** (File Manager).
4. Entre na pasta **`public_html`**.
5. Se houver arquivos antigos (como `default.php`), você pode apagá-los ou fazer backup.
6. **Importante**: Faça o upload de **todos os arquivos e pastas que estão DENTRO de `dist/`**:
   - `index.html`
   - `.htaccess` *(certifique-se de que arquivos ocultos estão visíveis)*
   - pasta `assets/`
   - `robots.txt`
   - `sitemap.xml`
   - `favicon.svg`
   - `site.webmanifest`
   - `curriculo.html`
7. *Dica*: Você pode compactar o conteúdo da pasta `dist` em um arquivo `dist.zip`, enviar para o `public_html` da Hostinger e clicar com o botão direito em **Extrair** (Extract).
8. Acesse **https://elainefigueiredo.com.br** no seu navegador!

---

### Método 2: Deploy Automático via GitHub Actions (CI/CD)

O repositório já possui o fluxo de automação configurado em `.github/workflows/deploy-hostinger-ftp.yml`.

1. No **hPanel** da Hostinger, vá em **Avançado > Contas FTP** (ou pesquise por "FTP").
2. Anote:
   - **Host do Servidor / Hostname FTP** (ex: `ftp.elainefigueiredo.com.br` ou o IP da Hostinger)
   - **Nome de Usuário FTP** (ex: `u123456789`)
   - **Senha do FTP**
3. No seu repositório no **GitHub**:
   - Vá na aba **Settings** > **Secrets and variables** > **Actions**.
   - Clique em **New repository secret** e adicione 3 segredos:
     - Nome: `HOSTINGER_FTP_SERVER` | Valor: seu host de FTP
     - Nome: `HOSTINGER_FTP_USERNAME` | Valor: seu usuário de FTP
     - Nome: `HOSTINGER_FTP_PASSWORD` | Valor: sua senha de FTP
4. Vá até a aba **Actions** do seu repositório no GitHub:
   - Clique em **"Deploy to Hostinger (FTP)"**.
   - Clique em **Run workflow**.
   - O GitHub irá compilar o projeto e enviar automaticamente os arquivos para a pasta `public_html` da Hostinger!

---

## 🔍 Dúvidas Frequentes

- **O que fazer se der erro ao rodar `npm install`?**  
  Utilize sempre `npm install --legacy-peer-deps` devido às versões mais recentes do React 19.
- **Onde editar os textos de cada idioma?**  
  Todos os textos e traduções estão organizados em `src/i18n/locales/` (`pt.ts`, `en.ts`, `es.ts`, `fr.ts`, `it.ts`).
- **Onde alterar os cursos e palestras?**  
  Nos arquivos `src/data/mockData.ts` e `src/i18n/locales/`.

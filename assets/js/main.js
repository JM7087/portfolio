/* =============================================================
 * Core Main JavaScript - João Marcos Portfolio
 * ============================================================= */

// SVG Icon Library for Clean Vector Icons
const SVG_ICONS = {
  github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>',
  steam: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path><path d="m5 16 3-2.5m-3 2.5 4 4m-4-4v-4.5"></path><circle cx="12" cy="12" r="3"></circle></svg>',
  spotify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 11.5c2.5-1.5 5.5-1.5 8 0M7 9.5c3-2 7-2 10 0M9 13.5c2-1 4-1 6 0"></path></svg>',
  anime: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="2.5"></line><line x1="2" y1="8.5" x2="22" y2="8.5"></line></svg>',
  trophy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path><path d="M12 2a6 6 0 0 1 6 6c0 3-2.5 4-6 4S6 11 6 8a6 6 0 0 1 6-6z"></path></svg>',
  cv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
  email: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>'
};

// Devicon class mapping for experience and timeline technology badges.
const TECH_ICON_CLASSES = {
  "java": "devicon-java-plain",
  "spring boot": "devicon-spring-plain",
  "graphql": "devicon-graphql-plain",
  "php": "devicon-php-plain",
  "laravel": "devicon-laravel-original",
  "vue.js": "devicon-vuejs-plain",
  "javascript": "devicon-javascript-plain",
  "html": "devicon-html5-plain",
  "css": "devicon-css3-plain",
  "sql": "devicon-azuresqldatabase-plain",
  "postgresql": "devicon-postgresql-plain",
  "mysql": "devicon-mysql-plain",
  "git": "devicon-git-plain",
  "docker": "devicon-docker-plain",
  "power automate": "devicon-windows8-original",
  "angular": "devicon-angularjs-plain",
  "oracle": "devicon-oracle-original"
};

const TIMELINE_DATA_URL = "assets/data/timeline-data.json";

// UI Static Translation Dictionary (PT / EN)
const TRANSLATIONS = {
  pt: {
    nav_about: "Sobre",
    nav_experience: "Experiência",
    nav_projects: "Projetos",
    nav_tech: "Tecnologias",
    nav_contact: "Contato",
    hero_hello: "Olá, eu sou",
    hero_btn_projects: "Conheça meus projetos",
    hero_btn_contact: "Fale comigo",
    section_about_title: "Sobre Mim",
    about_card1_title: "Inclusão & Resiliência",
    about_card1_desc: "Acredito na inclusão digital e acessibilidade. Minha própria jornada com adaptações e superação moldou meu foco em construir softwares que todos possam utilizar.",
    about_card2_title: "Código Limpo & Sólido",
    about_card2_desc: "Focado em arquiteturas organizadas (SOLID, Clean Code), APIs de alta performance (GraphQL/Rest) e integrações corporativas eficientes.",
    section_experience_title: "Experiência Profissional",
    section_experience_summary: "Minha trajetória como desenvolvedor começou no Instituto Federal de Goiás, evoluiu para projetos nacionais na Meta e atualmente segue no Governo de Goiás, desenvolvendo integrações entre sistemas críticos utilizando Java, Spring Boot e GraphQL.",
    exp_responsibilities: "Principais responsabilidades",
    exp_projects: "Projetos de destaque",
    exp_tech_stack: "Tecnologias utilizadas",
    section_projects_title: "Projetos em Destaque",
    search_placeholder: "Pesquisar projetos...",
    tab_all: "Todos",
    section_tech_title: "Tecnologias & Habilidades",
    tech_cat_languages: "Linguagens",
    tech_cat_frameworks: "Frameworks / Bibliotecas",
    tech_cat_tools: "Ferramentas / Infraestrutura",
    tech_cat_other: "Outras Habilidades",
    github_btn_follow: "Ver Perfil",
    github_label_repos: "Repositórios Públicos",
    github_label_followers: "Seguidores",
    github_label_following: "Seguindo",
    github_recent_title: "Repositórios Atualizados Recentemente",
    github_loading: "Carregando dados do GitHub...",
    section_contact_title: "Entre em Contato",
    contact_label_name: "Nome Completo",
    contact_label_message: "Mensagem",
    contact_btn_send: "Enviar Mensagem",
    contact_card_email: "E-mail Profissional",
    contact_btn_copy: "Copiar E-mail",
    contact_copied: "Copiado!",
    contact_card_phone: "WhatsApp",
    contact_btn_chat: "Iniciar Conversa",
    contact_card_loc: "Localização",
    contact_success: "🎉 Mensagem enviada com sucesso! Obrigado pelo contato.",
    name_error_required: "Por favor, digite seu nome completo.",
    email_error_required: "Por favor, digite seu e-mail.",
    email_error_invalid: "Por favor, digite um e-mail válido.",
    message_error_required: "Por favor, digite sua mensagem.",
    footer_tagline: "Desenvolvido com foco em alta qualidade, clean code e acessibilidade.",
    footer_links_title: "Links Rápidos",
    footer_socials_title: "Redes Sociais",
    footer_rights: "Todos os direitos reservados.",
    code_repository: "Código",
    live_demo: "Visualizar 🚀",
    quick_copy_label: "Copiar"
  },
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_tech: "Technologies",
    nav_contact: "Contact",
    hero_hello: "Hello, I am",
    hero_btn_projects: "Explore my work",
    hero_btn_contact: "Get in touch",
    section_about_title: "About Me",
    about_card1_title: "Inclusion & Resilience",
    about_card1_desc: "I advocate for digital inclusion and accessibility. My own journey with adaptions and resilience shapes my focus on creating software everyone can use.",
    about_card2_title: "Clean & Solid Code",
    about_card2_desc: "Focused on clean architecture (SOLID principles), high-performance integration APIs (GraphQL/Rest), and corporate systems.",
    section_experience_title: "Work Experience",
    section_experience_summary: "My developer journey started at Instituto Federal de Goias, grew through national-level projects at Meta, and currently continues at the Goias state government building integrations between critical systems using Java, Spring Boot, and GraphQL.",
    exp_responsibilities: "Key responsibilities",
    exp_projects: "Featured projects",
    exp_tech_stack: "Technologies used",
    section_projects_title: "Featured Projects",
    search_placeholder: "Search projects...",
    tab_all: "All",
    section_tech_title: "Technologies & Skills",
    tech_cat_languages: "Languages",
    tech_cat_frameworks: "Frameworks / Libraries",
    tech_cat_tools: "Tools / Infrastructure",
    tech_cat_other: "Other Skills",
    github_btn_follow: "Follow",
    github_label_repos: "Public Repositories",
    github_label_followers: "Followers",
    github_label_following: "Following",
    github_recent_title: "Recently Updated Repositories",
    github_loading: "Fetching GitHub information...",
    section_contact_title: "Contact Me",
    contact_label_name: "Full Name",
    contact_label_message: "Message",
    contact_btn_send: "Send Message",
    contact_card_email: "Business Email",
    contact_btn_copy: "Copy Email",
    contact_copied: "Copied!",
    contact_card_phone: "WhatsApp",
    contact_btn_chat: "Chat Now",
    contact_card_loc: "Location",
    contact_success: "🎉 Message sent successfully! Thanks for reaching out.",
    name_error_required: "Please enter your full name.",
    email_error_required: "Please enter your email address.",
    email_error_invalid: "Please enter a valid email address.",
    message_error_required: "Please enter your message.",
    footer_tagline: "Developed focusing on high quality, clean code, and accessibility.",
    footer_links_title: "Quick Links",
    footer_socials_title: "Social Networks",
    footer_rights: "All rights reserved.",
    code_repository: "Code",
    live_demo: "Live Demo 🚀",
    quick_copy_label: "Copy"
  }
};

// Application State Manager
const state = {
  lang: localStorage.getItem("lang") || "pt",
  theme: localStorage.getItem("theme") || "dark",
  portfolioData: null,
  timelineData: null,
  activeFilter: "All",
  searchQuery: ""
};

// -------------------------------------------------------------
// Core Initialization on DOM Loaded
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  setupPreloader();
  setupTheme();
  setupMobileMenu();
  setupScrollHandlers();
  
  // Load portfolio data: try fetch() (server / GitHub Pages), fallback to inline
  // JS globals (window.PORTFOLIO_DATA / window.TIMELINE_DATA) when running via
  // file:// protocol where fetch() is blocked by the browser.
  try {
    const portfolioResponse = await fetch("assets/data/portfolio.json");
    if (portfolioResponse.ok) {
      state.portfolioData = await portfolioResponse.json();
    }
  } catch (_) { /* fetch blocked — will use inline fallback below */ }

  if (!state.portfolioData && window.PORTFOLIO_DATA) {
    state.portfolioData = window.PORTFOLIO_DATA;
  }

  try {
    const timelineResponse = await fetch(TIMELINE_DATA_URL);
    if (timelineResponse.ok) {
      state.timelineData = await timelineResponse.json();
    }
  } catch (_) { /* fetch blocked — will use inline fallback below */ }

  if (!state.timelineData && window.TIMELINE_DATA) {
    state.timelineData = window.TIMELINE_DATA;
  }

  if (state.portfolioData) {
    updateUI();
  } else {
    console.error("Nenhuma fonte de dados disponível (fetch e globals falharam).");
  }
  
  setupLangToggle();
  setupClipboardCopy();
});

// -------------------------------------------------------------
// Component Handlers & Utilities
// -------------------------------------------------------------

// 1. Preloader Screen fade out
function setupPreloader() {
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("fade-out");
    }
  });
}

// 2. Light / Dark Theme Toggler
function setupTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  
  // Set default theme attribute
  document.documentElement.setAttribute("data-theme", state.theme);
  
  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem("theme", state.theme);
  });
}

// 3. Mobile Hamburger Navigation Menu Toggle
function setupMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  toggleBtn.addEventListener("click", () => {
    const isActive = toggleBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    toggleBtn.setAttribute("aria-expanded", isActive);
  });

  // Close mobile navigation on link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleBtn.classList.remove("active");
      navMenu.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", false);
    });
  });
}

// 4. Scroll Spy Active Links & Back-To-Top Button
function setupScrollHandlers() {
  const backToTopBtn = document.getElementById("back-to-top");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100; // Offset for navbar height

    // Back to top button visibility
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }

    // Scroll Spy active navigation state
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Back to top action
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 5. Language Switcher Trigger
function setupLangToggle() {
  const langBtn = document.getElementById("lang-toggle");
  
  // Set initial label text on button
  langBtn.querySelector(".lang-text").textContent = state.lang === "pt" ? "EN" : "PT";
  langBtn.setAttribute("aria-label", state.lang === "pt" ? "Switch to English" : "Mudar para Português");
  
  langBtn.addEventListener("click", () => {
    state.lang = state.lang === "pt" ? "en" : "pt";
    localStorage.setItem("lang", state.lang);
    
    // Toggle button visual label
    langBtn.querySelector(".lang-text").textContent = state.lang === "pt" ? "EN" : "PT";
    langBtn.setAttribute("aria-label", state.lang === "pt" ? "Switch to English" : "Mudar para Português");
    
    // Re-render UI with new language selection
    updateUI();
    
    // Trigger github translations if it has already ran
    if (typeof window.translateGithubUI === "function") {
      window.translateGithubUI(state.lang);
    }
  });
}

// 6. Copy Email Button Action + Click-to-Reveal
function setupClipboardCopy() {
  const copyBtn = document.getElementById("copy-email-btn");
  const emailEl = document.getElementById("contact-email");
  const phoneEl = document.getElementById("contact-phone");
  const tooltip = document.getElementById("copy-success-tooltip");

  // Click-to-reveal helper
  function setupReveal(el) {
    if (!el) return;
    el.addEventListener("click", () => {
      const isRevealed = el.classList.contains("is-revealed");
      if (isRevealed) {
        el.textContent = el.dataset.masked;
        el.classList.remove("is-revealed");
        el.title = "Clique para revelar";
      } else {
        el.dataset.masked = el.textContent;
        el.textContent = el.dataset.real;
        el.classList.add("is-revealed");
        el.title = "Clique para ocultar";
      }
    });
  }

  setupReveal(emailEl);
  setupReveal(phoneEl);

  // Copy button always uses the real value
  copyBtn.addEventListener("click", () => {
    const realEmail = emailEl.dataset.real;
    navigator.clipboard.writeText(realEmail).then(() => {
      tooltip.classList.remove("hidden");
      setTimeout(() => {
        tooltip.classList.add("hidden");
      }, 2000);
    }).catch(err => {
      console.error("Could not copy text: ", err);
    });
  });
}



// -------------------------------------------------------------
// UI Rendering Engines (Main translation engine)
// -------------------------------------------------------------
function updateUI() {
  const lang = state.lang;
  const t = TRANSLATIONS[lang];
  const data = state.portfolioData[lang];
  
  // Set html document lang
  document.documentElement.setAttribute("lang", lang === "pt" ? "pt-br" : "en");
  
  // 1. Translate static text elements using data-i18n attributes
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (t[key]) {
      // If it is an input tag, translate placeholder instead of textContent
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.setAttribute("placeholder", t[key]);
      } else {
        element.textContent = t[key];
      }
    }
  });

  // Apply search placeholder translation manually because it has custom setup
  document.getElementById("project-search").setAttribute("placeholder", t.search_placeholder);

  // 2. Render dynamic content from database
  if (!data) return;

  // Personal Info Hero
  document.getElementById("personal-name").textContent = data.personal.display_name || data.personal.name;
  document.getElementById("personal-title").textContent = data.personal.title;
  document.getElementById("personal-tagline").textContent = data.personal.tagline;
  document.getElementById("personal-avatar").src = state.portfolioData.pt.personal.avatar; // Avatar file reference path is unique
  
  // About Paragraphs
  const bioContainer = document.getElementById("personal-about-long");
  bioContainer.innerHTML = data.personal.about_long
    .split("\n\n")
    .map(para => `<p>${para.replace(/\n/g, "<br>")}</p>`)
    .join("");

  // Social Links Hero (Pills)
  const quickLinksContainer = document.getElementById("quick-links");
  const quickIcons = ["github", "linkedin", "whatsapp", "cv", "email"];
  let quickHTML = "";
  
  // Quick resume button
  quickHTML += `
    <a href="${state.portfolioData.pt.personal.cvUrl}" download class="social-pill">
      <span class="social-pill-icon">${SVG_ICONS.cv}</span>
      ${lang === "pt" ? "Baixar CV" : "Download CV"}
    </a>
  `;
  
  // Social Links
  state.portfolioData.pt.socials.forEach(social => {
    const iconName = social.icon.toLowerCase();
    const svgIcon = SVG_ICONS[iconName] || "";
    
    // Only put major links on the hero page quick links
    if (["github", "linkedin", "whatsapp", "instagram"].includes(iconName)) {
      quickHTML += `
        <a href="${social.url}" target="_blank" class="social-pill" rel="noopener noreferrer">
          <span class="social-pill-icon">${svgIcon}</span>
          ${social.name}
        </a>
      `;
    }
  });

  quickLinksContainer.innerHTML = quickHTML;

  // Footer Social Icons
  const footerSocials = document.getElementById("footer-social-icons");
  let footerHTML = "";
  state.portfolioData.pt.socials.forEach(social => {
    const iconName = social.icon.toLowerCase();
    const svgIcon = SVG_ICONS[iconName] || "";
    footerHTML += `
      <a href="${social.url}" target="_blank" class="footer-social-icon" aria-label="${social.name}" rel="noopener noreferrer">
        ${svgIcon}
      </a>
    `;
  });
  footerSocials.innerHTML = footerHTML;

  // Render Skills/Technologies
  renderSkills(data.skills);

  // Render Work Experience Timeline
  const timelineByLang = state.timelineData && state.timelineData[lang];
  const timelineList = timelineByLang && Array.isArray(timelineByLang.experience)
    ? timelineByLang.experience
    : data.experience;
  const timelineSummary = timelineByLang && typeof timelineByLang.summary === "string"
    ? timelineByLang.summary
    : t.section_experience_summary;

  renderExperience(timelineList, timelineSummary);

  // Render Projects (with Search & Filters)
  renderProjectsList();
}

// Render Skills Badges
function renderSkills(skills) {
  const container = document.getElementById("tech-container");
  const lang = state.lang;
  const t = TRANSLATIONS[lang];
  
  // Icon emoji dictionary for tech grid representation
  const skillIcons = {
    // Languages
    "javascript": "🟨", "php": "🐘", "java": "☕", "c#": "🔷", "python": "🐍", "sql": "🗄️", "html5": "🌐", "css3": "🎨",
    // Frameworks
    "laravel": "🟥", "spring boot": "🍃", "vue.js": "🟩", "graphql": "⬢", "node.js": "🟢", "angular": "🅰️",
    // Tools
    "docker": "🐳", "git": "🐙", "microsoft azure": "☁️", "power automate": "🤖", "mysql": "🐬", "postgresql": "🐘", "sqlite": "💾", "oracle": "🟠",
    // Other
    "unity": "🎮", "desenvolvimento android": "🤖", "android development": "🤖", "photoshop": "🖌️", "vegas pro": "🎬"
  };

  const categories = [
    { key: "languages", title: t.tech_cat_languages },
    { key: "frameworks", title: t.tech_cat_frameworks },
    { key: "tools", title: t.tech_cat_tools },
    { key: "other", title: t.tech_cat_other }
  ];

  let html = "";
  categories.forEach(cat => {
    const list = skills[cat.key];
    if (list && list.length > 0) {
      html += `
        <div class="tech-category">
          <h3 class="tech-category-title">${cat.title}</h3>
          <div class="tech-grid">
      `;
      
      list.forEach(skill => {
        const icon = skillIcons[skill.toLowerCase()] || "⚙️";
        html += `
          <div class="tech-badge glass">
            <span class="tech-badge-icon">${icon}</span>
            <span class="tech-badge-name">${skill}</span>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
  });
  
  container.innerHTML = html;
}

// Render Timeline Experience
function renderExperience(expList, summaryText) {
  const timeline = document.getElementById("experience-timeline");
  const summary = document.getElementById("experience-summary");
  const t = TRANSLATIONS[state.lang];

  summary.textContent = summaryText;
  summary.classList.add("reveal-on-scroll");
  summary.style.setProperty("--reveal-delay", "0ms");
  timeline.setAttribute("role", "list");
  
  let html = "";
  expList.forEach((exp, index) => {
    html += renderExperienceItem(exp, index, t);
  });
  
  timeline.innerHTML = html;
  setupRevealOnScroll();
}

function renderExperienceItem(exp, index, translations) {
  const techList = Array.isArray(exp.tech) ? exp.tech : [];
  const responsibilities = Array.isArray(exp.responsibilities) ? exp.responsibilities : [];
  const projects = Array.isArray(exp.projects) ? exp.projects : [];
  const roleTone = exp.roleTone || "violet";
  const headingId = `timeline-company-${index}`;
  const revealDirection = index % 2 === 0 ? "reveal-from-left" : "reveal-from-right";

  const techTags = techList.map(renderTimelineTechTag).join("");
  const projectsHTML = renderTimelineProjects(projects, translations.exp_projects);
  const responsibilitiesHTML = renderTimelineListBlock(
    responsibilities,
    "timeline-list",
    translations.exp_responsibilities
  );

  return `
    <article class="timeline-item" role="listitem" tabindex="0" aria-labelledby="${headingId}">
      <div class="timeline-badge" aria-hidden="true"></div>
      <div class="timeline-content glass reveal-on-scroll ${revealDirection}" style="--reveal-delay: ${index * 120}ms;">
        <span class="timeline-date">${exp.period}</span>
        <h3 id="${headingId}">${exp.company}</h3>
        <span class="timeline-role-chip role-chip-${roleTone}">${exp.role}</span>
        <p class="timeline-desc">${exp.description}</p>
        ${projectsHTML}
        ${responsibilitiesHTML}
        <div class="timeline-block">
          <h4 class="timeline-subtitle">${translations.exp_tech_stack}</h4>
          <div class="timeline-tech-list" aria-label="${translations.exp_tech_stack}">
            ${techTags}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderTimelineTechTag(tech) {
  const iconClass = TECH_ICON_CLASSES[tech.toLowerCase()];
  const icon = iconClass
    ? `<i class="${iconClass} timeline-tech-icon" aria-hidden="true"></i>`
    : `<span class="timeline-tech-icon timeline-tech-icon-fallback" aria-hidden="true">•</span>`;

  return `<span class="timeline-tech-tag">${icon}<span>${tech}</span></span>`;
}

function renderTimelineListBlock(items, listClassName, title) {
  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }

  return `
    <div class="timeline-block">
      <h4 class="timeline-subtitle">${title}</h4>
      <ul class="${listClassName}" aria-label="${title}">
        ${items.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderTimelineProjects(projects, title) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return "";
  }

  return `
    <div class="timeline-block">
      <h4 class="timeline-subtitle">${title}</h4>
      <ul class="timeline-projects" aria-label="${title}">
        ${projects.map(project => `<li><strong>${project.name}:</strong> ${project.description}</li>`).join("")}
      </ul>
    </div>
  `;
}

function setupRevealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -60px 0px" });

    revealElements.forEach(element => observer.observe(element));
    return;
  }

  revealElements.forEach(element => element.classList.add("is-visible"));
}

// Render Projects Cards (handling filters and search inputs)
function renderProjectsList() {
  const container = document.getElementById("projects-grid");
  const searchInput = document.getElementById("project-search");
  const pillsContainer = document.getElementById("filter-pills");
  
  const lang = state.lang;
  const t = TRANSLATIONS[lang];
  const allProjects = state.portfolioData[lang].projects;
  
  // Extract all unique technology tags across projects to create filters
  const allTechs = new Set();
  allProjects.forEach(p => {
    p.tags.forEach(tag => allTechs.add(tag));
  });
  const filterList = [t.tab_all, ...Array.from(allTechs).sort()];

  // 1. Render filter pills (only once or on language toggle)
  let pillsHTML = "";
  filterList.forEach(filter => {
    // Map active states
    const isActive = (filter === t.tab_all && state.activeFilter === "All") || (filter === state.activeFilter);
    const filterValue = filter === t.tab_all ? "All" : filter;
    
    pillsHTML += `
      <button class="filter-pill ${isActive ? "active" : ""}" 
              role="tab" 
              aria-selected="${isActive}" 
              data-filter="${filterValue}">
        ${filter}
      </button>
    `;
  });
  pillsContainer.innerHTML = pillsHTML;

  // Re-hook listeners for filter pills
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      state.activeFilter = e.target.getAttribute("data-filter");
      renderProjectsCards();
      
      // Update pills visual states
      document.querySelectorAll(".filter-pill").forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      e.target.classList.add("active");
      e.target.setAttribute("aria-selected", "true");
    });
  });

  // Re-hook listener for search input
  searchInput.removeEventListener("input", onSearchInput);
  searchInput.addEventListener("input", onSearchInput);

  // Render initial list of project cards
  renderProjectsCards();
}

function onSearchInput(e) {
  state.searchQuery = e.target.value.toLowerCase().trim();
  renderProjectsCards();
}

// Filtering algorithm and rendering cards
function renderProjectsCards() {
  const container = document.getElementById("projects-grid");
  const lang = state.lang;
  const t = TRANSLATIONS[lang];
  const projects = state.portfolioData[lang].projects;

  // Filter based on active filter tab and search text query
  const filtered = projects.filter(p => {
    const matchesFilter = state.activeFilter === "All" || p.tags.includes(state.activeFilter);
    
    const matchesSearch = !state.searchQuery || 
                          p.name.toLowerCase().includes(state.searchQuery) ||
                          p.desc.toLowerCase().includes(state.searchQuery) ||
                          p.tech.some(tech => tech.toLowerCase().includes(state.searchQuery));
                          
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="github-loading" style="grid-column: 1 / -1; padding: 4rem 0;">
        ${lang === "pt" ? "Nenhum projeto encontrado." : "No projects found."}
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach(p => {
    const techTags = p.tech.map(tech => `<span class="project-tech-tag">${tech}</span>`).join("");
    
    // Live demo visual button rendering
    const demoBtn = p.demo 
      ? `<a href="${p.demo}" target="_blank" class="btn btn-primary project-card-btn" rel="noopener noreferrer">${t.live_demo}</a>`
      : "";
      
    html += `
      <article class="project-card glass animate-slide-up">
        <div class="project-card-image">
          <img src="${p.image}" alt="Screenshot do projeto ${p.name}" loading="lazy">
          <span class="project-card-tag">${p.tags[0] || ""}</span>
        </div>
        <div class="project-card-content">
          <h3 class="project-card-title">${p.name}</h3>
          <p class="project-card-desc">${p.desc}</p>
          <div class="project-card-tech">
            ${techTags}
          </div>
          <div class="project-card-actions">
            <a href="${p.github}" target="_blank" class="btn btn-secondary project-card-btn" rel="noopener noreferrer">
              <span style="display:inline-block;width:14px;height:14px;margin-right:6px;vertical-align:middle;">${SVG_ICONS.github}</span>
              ${t.code_repository}
            </a>
            ${demoBtn}
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

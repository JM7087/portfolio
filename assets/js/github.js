/* =============================================================
 * GitHub API Integration Script - João Marcos Portfolio
 * ============================================================= */

const GITHUB_USERNAME = "JM7087";

// Local static cache in case GitHub API fails or gets rate-limited (60 requests/hr limit)
const GITHUB_FALLBACK_PROFILE = {
  bio: "Desenvolvedor Fullstack",
  public_repos: 36,
  followers: 4,
  following: 11
};

const GITHUB_FALLBACK_REPOS = [
  {
    name: "api-pokemon-php-pt-br",
    description: "API para buscar informações e imagens de Pokémon usando PHP e MySQL.",
    language: "PHP",
    stargazers_count: 2,
    html_url: "https://github.com/JM7087/api-pokemon-php-pt-br"
  },
  {
    name: "iptv-player-web",
    description: "Player web para reprodução de playlists M3U (IPTV) com uma interface simples e leve.",
    language: "JavaScript",
    stargazers_count: 1,
    html_url: "https://github.com/JM7087/iptv-player-web"
  },
  {
    name: "caixa-de-versiculos-multilingue",
    description: "Aplicação web que exibe versículos bíblicos aleatórios e permite traduzir o versículo para diferentes idiomas.",
    language: "JavaScript",
    stargazers_count: 1,
    html_url: "https://github.com/JM7087/caixa-de-versiculos-multilingue"
  },
  {
    name: "encurtador-de-links-laravel",
    description: "Sistema para encurtador links desenvolvido com Laravel 11, SQLite, ClipboardJs.",
    language: "PHP",
    stargazers_count: 1,
    html_url: "https://github.com/JM7087/encurtador-de-links-laravel"
  },
  {
    name: "mcp-memoria-para-llm-local",
    description: "Servidor MCP (Model Context Protocol) de memória persistente para LLMs, implementado em PHP com SQLite.",
    language: "PHP",
    stargazers_count: 0,
    html_url: "https://github.com/JM7087/mcp-memoria-para-llm-local"
  },
  {
    name: "chat-web-local-lm-studio",
    description: "Este é um chat web desenvolvido para interagir com modelos de linguagem locais através do LM Studio.",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/JM7087/chat-web-local-lm-studio"
  }
];

// Color mapping for languages to show nice glowing bullet badges
const LANG_COLORS = {
  JavaScript: "#F7DF1E",
  PHP: "#777BB4",
  Java: "#B07219",
  "C#": "#178600",
  Python: "#3572A5",
  HTML: "#E34F26",
  CSS: "#563D7C",
  Vue: "#41B883"
};

// Global reference to loaded repo data to trigger translation
let currentGithubRepos = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchGitHubData();
});

// Primary fetching orchestrator
async function fetchGitHubData() {
  const bioEl = document.getElementById("github-user-bio");
  const reposCountEl = document.getElementById("github-repos-count");
  const followersCountEl = document.getElementById("github-followers-count");
  const followingCountEl = document.getElementById("github-following-count");
  const listEl = document.getElementById("github-repos-list");

  try {
    // 1. Fetch profile information
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!userRes.ok) throw new Error("Profile API rate limit or error");
    
    const profile = await userRes.ok ? await userRes.json() : GITHUB_FALLBACK_PROFILE;
    
    // Render profile stats
    bioEl.textContent = profile.bio || "Desenvolvedor Full Stack";
    reposCountEl.textContent = profile.public_repos;
    followersCountEl.textContent = profile.followers;
    followingCountEl.textContent = profile.following;
    
    // 2. Fetch public repos list sorted by updated
    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
    if (!reposRes.ok) throw new Error("Repos API rate limit or error");
    
    const repos = await reposRes.json();
    
    // Filter out forks and get top 6 recently updated
    const filteredRepos = repos
      .filter(repo => !repo.fork && repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
      .slice(0, 6);
      
    currentGithubRepos = filteredRepos;
    renderRepos(filteredRepos);
    
  } catch (error) {
    console.warn("Using GitHub local fallbacks due to request failure:", error.message);
    
    // Load fallbacks in case of network disconnect/rate limiting
    bioEl.textContent = GITHUB_FALLBACK_PROFILE.bio;
    reposCountEl.textContent = GITHUB_FALLBACK_PROFILE.public_repos;
    followersCountEl.textContent = GITHUB_FALLBACK_PROFILE.followers;
    followingCountEl.textContent = GITHUB_FALLBACK_PROFILE.following;
    
    currentGithubRepos = GITHUB_FALLBACK_REPOS;
    renderRepos(GITHUB_FALLBACK_REPOS);
  }
}

// Render repos to DOM
function renderRepos(repos) {
  const listEl = document.getElementById("github-repos-list");
  
  if (!repos || repos.length === 0) {
    listEl.innerHTML = '<div class="github-loading">Sem repositórios encontrados.</div>';
    return;
  }

  let html = "";
  repos.forEach(repo => {
    const lang = repo.language || "None";
    const color = LANG_COLORS[lang] || "#8B5CF6";
    const desc = repo.description || (document.documentElement.lang === "pt-br" ? "Sem descrição disponível." : "No description available.");
    
    html += `
      <div class="github-repo-item glass animate-slide-up">
        <h4 class="github-repo-name">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
        </h4>
        <p class="github-repo-desc" title="${desc}">${desc}</p>
        <div class="github-repo-footer">
          <span class="github-repo-lang">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${color};margin-right:5px;"></span>
            ${lang}
          </span>
          <span class="github-repo-stars">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="color: #FBBF24;vertical-align:middle;">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            ${repo.stargazers_count}
          </span>
        </div>
      </div>
    `;
  });
  
  listEl.innerHTML = html;
}

// Callback for translating Github UI elements when language switches
window.translateGithubUI = function(lang) {
  // Trigger a re-render of current loaded repos to refresh descriptions if using fallback
  if (currentGithubRepos.length > 0) {
    renderRepos(currentGithubRepos);
  }
};

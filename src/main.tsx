import './index.css';

/**
 * NithinKrishna Portfolio - Vanilla JavaScript Interaction Engine
 * - macOS Mission Control / Tab Zoom Navigation
 * - Light / Dark Mode Dual Theme Toggle with LocalStorage
 * - Keyboard shortcuts (Esc for Overview mode, 1-5 for tabs)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Selectors
  const stageViewport = document.getElementById('stage-viewport');
  const overviewBanner = document.getElementById('overview-banner');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const viewPanels = document.querySelectorAll('.view-panel');
  const overviewToggleBtn = document.getElementById('overview-toggle-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const launcherCards = document.querySelectorAll('.launcher-card');
  const currentYearSpan = document.getElementById('current-year');

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // State
  let currentActiveTab = 'home';
  let isOverviewMode = false;

  // --------------------------------------------------------------------------
  // Tab Switching with Mission Control Zoom Effect
  // --------------------------------------------------------------------------
  function switchTab(targetTabId, skipAnimation = false) {
    if (!targetTabId) return;
    
    // If clicking the active tab while in overview mode, just zoom back in
    if (currentActiveTab === targetTabId) {
      if (isOverviewMode) exitOverviewMode();
      return;
    }

    if (skipAnimation) {
      performTabSwitch(targetTabId, true);
    } else if (isOverviewMode) {
      // If already zoomed out, swap tabs silently and zoom back in immediately
      performTabSwitch(targetTabId, false);
      exitOverviewMode();
    } else {
      // Normal flow: Trigger zoom out (enter overview)
      enterOverviewMode();
      
      // Wait for zoom out animation, then swap and zoom back in
      setTimeout(() => {
        performTabSwitch(targetTabId, false);
        exitOverviewMode();
      }, 450); // Matches typical CSS transition speed
    }
  }

  function performTabSwitch(targetTabId, skipAnimation) {
    currentActiveTab = targetTabId;

    // Reset specific panels if necessary
    if (targetTabId === 'projects' && window.closeProjectDetail) {
      window.closeProjectDetail();
    }


    // Update Tab Bar buttons
    tabButtons.forEach((btn) => {
      if (btn.getAttribute('data-tab') === targetTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Panels with zoom-in animation
    viewPanels.forEach((panel) => {
      const panelTab = panel.getAttribute('data-panel');
      if (panelTab === targetTabId) {
        panel.classList.add('active-tab');
        if (!skipAnimation) {
          panel.style.animation = 'none';
          // Trigger reflow to restart CSS animation
          void panel.offsetWidth;
          panel.style.animation = 'zoomInPanel 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        }
      } else {
        panel.classList.remove('active-tab');
      }
    });

    // Smooth scroll back to top of stage if scrolled
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --------------------------------------------------------------------------
  // Overview / "Mission Control" Mode (Zoom Out Deck)
  // --------------------------------------------------------------------------
  function enterOverviewMode() {
    isOverviewMode = true;
    if(stageViewport) stageViewport.classList.add('overview-mode');
    if(overviewBanner) overviewBanner.classList.add('visible');
    if(overviewToggleBtn) {
      overviewToggleBtn.classList.add('active-view');
      overviewToggleBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`;
      overviewToggleBtn.setAttribute('title', 'Close Mission Control (Esc)');
    }
  }

  function exitOverviewMode() {
    isOverviewMode = false;
    if(stageViewport) stageViewport.classList.remove('overview-mode');
    if(overviewBanner) overviewBanner.classList.remove('visible');
    if(overviewToggleBtn) {
      overviewToggleBtn.classList.remove('active-view');
      overviewToggleBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`;
      overviewToggleBtn.setAttribute('title', 'Toggle Mission Control (Esc)');
    }
  }

  function toggleOverviewMode() {
    if (isOverviewMode) {
      exitOverviewMode();
    } else {
      enterOverviewMode();
    }
  }

  // --------------------------------------------------------------------------
  // Event Listeners for Tabs and Launchers
  // --------------------------------------------------------------------------
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Clicking an overview panel selects it and zooms in
  viewPanels.forEach((panel) => {
    panel.addEventListener('click', () => {
      if (isOverviewMode) {
        const panelTab = panel.getAttribute('data-panel');
        switchTab(panelTab);
      }
    });
  });

  // Quick Launcher Cards on Home Hub
  launcherCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetTab = card.getAttribute('data-target-tab');
      if (targetTab) {
        switchTab(targetTab);
      }
    });
  });

  // Overview Toggle button in top bar
  if (overviewToggleBtn) {
    overviewToggleBtn.addEventListener('click', toggleOverviewMode);
  }

  // --------------------------------------------------------------------------
  // Keyboard Shortcuts: Esc to toggle Overview, 1-5 for tabs
  // --------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleOverviewMode();
    } else if (e.key === '1') {
      switchTab('home');
    } else if (e.key === '2') {
      switchTab('experience');
    } else if (e.key === '3') {
      switchTab('projects');
    } else if (e.key === '4') {
      switchTab('publications');
    } else if (e.key === '5') {
      switchTab('certifications');
    } else if (e.key === '6') {
      switchTab('beyond');
    }
  });

  // --------------------------------------------------------------------------
  // Theme Engine (Dark Obsidian Default + Crisp Light Mode)
  // --------------------------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem('nk_portfolio_theme') || 'dark';
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if(themeToggleBtn) {
        themeToggleBtn.innerHTML = '<span>☀️</span>';
        themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    } else {
      document.documentElement.removeAttribute('data-theme');
      if(themeToggleBtn) {
        themeToggleBtn.innerHTML = '<span>🌙</span>';
        themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
      }
    }
    localStorage.setItem('nk_portfolio_theme', theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }

  // Initialize
  initTheme();
  switchTab('home', true);
});

// --------------------------------------------------------------------------
// Projects Master-Detail Carousel Logic
// --------------------------------------------------------------------------
let currentProjectIndex = 0;
const totalProjects = 13;

window.openProjectDetail = function(index) {
  currentProjectIndex = index;
  document.getElementById('projects-master-view').style.display = 'none';
  document.getElementById('projects-detail-view').style.display = 'block';
  updateProjectCarousel();
};

window.closeProjectDetail = function() {
  document.getElementById('projects-detail-view').style.display = 'none';
  document.getElementById('projects-master-view').style.display = 'block';
};

window.nextProject = function() {
  currentProjectIndex = (currentProjectIndex + 1) % totalProjects;
  updateProjectCarousel();
};

window.prevProject = function() {
  currentProjectIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects;
  updateProjectCarousel();
};

function updateProjectCarousel() {
  const details = document.querySelectorAll('.project-detail-content');
  details.forEach((el) => {
    const elIndex = parseInt(el.getAttribute('data-project-index'));
    if (elIndex === currentProjectIndex) {
      el.style.display = 'block';
      // Fade-in animation effect
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = 'zoomInPanel 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    } else {
      el.style.display = 'none';
    }
  });
}

// --------------------------------------------------------------------------
// Intra-Project Image Carousel Logic
// --------------------------------------------------------------------------
const projectImageIndices = {};

window.nextProjectImage = function(projectIndex) {
  const container = document.querySelector(`.project-image-carousel[data-project-id="${projectIndex}"]`);
  if (!container) return;
  const slides = container.querySelectorAll('.project-image-slide');
  const totalImages = slides.length;
  if (totalImages === 0) return;
  
  if (projectImageIndices[projectIndex] === undefined) projectImageIndices[projectIndex] = 0;
  projectImageIndices[projectIndex] = (projectImageIndices[projectIndex] + 1) % totalImages;
  updateProjectImageCarousel(projectIndex, container);
};

window.prevProjectImage = function(projectIndex) {
  const container = document.querySelector(`.project-image-carousel[data-project-id="${projectIndex}"]`);
  if (!container) return;
  const slides = container.querySelectorAll('.project-image-slide');
  const totalImages = slides.length;
  if (totalImages === 0) return;
  
  if (projectImageIndices[projectIndex] === undefined) projectImageIndices[projectIndex] = 0;
  projectImageIndices[projectIndex] = (projectImageIndices[projectIndex] - 1 + totalImages) % totalImages;
  updateProjectImageCarousel(projectIndex, container);
};

function updateProjectImageCarousel(projectIndex, container) {
  const currentIndex = projectImageIndices[projectIndex] || 0;
  const slides = container.querySelectorAll('.project-image-slide');
  slides.forEach((slide, idx) => {
    slide.style.display = (idx === currentIndex) ? 'flex' : 'none';
  });
  
  const dots = container.querySelectorAll('.img-dot');
  dots.forEach((dot, idx) => {
    if (idx === currentIndex) {
      dot.style.background = 'var(--emerald-primary)';
      dot.style.opacity = '1';
    } else {
      dot.style.background = 'var(--text-muted)';
      dot.style.opacity = '0.5';
    }
  });
}

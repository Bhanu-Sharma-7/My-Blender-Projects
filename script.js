const projectContainer = document.getElementById('project-container');
const loadingEl = document.getElementById('loading');

async function dataFetch() {
  try {
    const response = await fetch('./projects.json');
    const projectsData = await response.json();

    loadingEl.classList.add('hidden');

    const countBadge = document.getElementById('model-count-badge');
    const footerCount = document.getElementById('footer-model-count');
    if (countBadge) countBadge.textContent = `⬡ ${projectsData.length} Model${projectsData.length !== 1 ? 's' : ''}`;
    if (footerCount) footerCount.textContent = projectsData.length;

    projectsData.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.animationDelay = `${index * 0.1}s`;

      card.innerHTML = `
        <div class="card-viewer">
          <model-viewer
            src="${item.src}"
            camera-controls
            auto-rotate
            auto-rotate-delay="1000"
            rotation-per-second="30deg"
            shadow-intensity="1"
            ar
          ></model-viewer>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-badge">3D Model</span>
          </div>
          <h2>${item.title}</h2>
          ${item.description ? `<p class="card-desc">${item.description}</p>` : ''}
          <div class="card-actions">
            <a class="download-btn" href="${item.downloadUrl}" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </a>
          </div>
        </div>
      `;

      projectContainer.appendChild(card);
    });

  } catch (err) {
    loadingEl.innerHTML = `<p style="color:#888">Failed to load models. Please try again.</p>`;
    console.error('Error loading projects:', err);
  }
}

dataFetch();
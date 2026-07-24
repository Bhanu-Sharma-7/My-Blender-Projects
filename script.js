const projectContainer = document.getElementById('project-container');

async function dataFetch() {
  const projects = await fetch('./projects.json');
  const projectsData = await projects.json();

  projectsData.forEach(item => {
    projectContainer.innerHTML += `
      <div class="card">
        <h2>${item.title}</h2>
        <model-viewer src="${item.src}" camera-controls auto-rotate></model-viewer>
        <a class="download-btn" href="${item.downloadUrl}" target="_blank">Download Model</a>
      </div>
    `;
  });
}

dataFetch();
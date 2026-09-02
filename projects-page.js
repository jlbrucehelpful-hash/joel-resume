const projects = window.SHOWCASE_PROJECTS || [];
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const statusClass = status => status.toLowerCase().replace(/\s+/g, '-');
document.getElementById('project-cards').innerHTML = projects.map((project, index) => `
  <article class="showcase-card">
    <div class="showcase-card-top"><span>${String(index + 1).padStart(2, '0')}</span><b class="status status-${statusClass(project.status)}">${escapeHtml(project.status)}</b></div>
    <h2>${escapeHtml(project.title)}</h2>
    <p class="showcase-purpose">${escapeHtml(project.purpose)}</p>
    <dl>
      <div><dt>Useful for</dt><dd>${escapeHtml(project.usefulFor)}</dd></div>
      <div><dt>Technology</dt><dd>${project.tech.map(item => `<i>${escapeHtml(item)}</i>`).join('')}</dd></div>
      <div><dt>AI / tools</dt><dd>${escapeHtml(project.ai)}</dd></div>
      <div><dt>Contribution</dt><dd>${escapeHtml(project.contribution)}</dd></div>
      <div><dt>Validation</dt><dd>${escapeHtml(project.testing)}</dd></div>
      <div><dt>Limitations</dt><dd>${escapeHtml(project.limitations)}</dd></div>
    </dl>
    ${project.links.length ? `<div class="showcase-links">${project.links.map(([label, href]) => `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${escapeHtml(label)} ↗</a>`).join('')}</div>` : '<span class="showcase-note">Link will be added when ready</span>'}
  </article>
`).join('');

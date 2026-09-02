const data = window.RESUME;

const esc = value => String(value).replace(/[&<>'"]/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
}[char]));

const byId = id => document.getElementById(id);

byId('target-roles').innerHTML = data.targetRoles.map((role, index) => `
  <article>
    <b>${String(index + 1).padStart(2, '0')}</b>
    <h3>${esc(role.title)}</h3>
    <p>${esc(role.summary)}</p>
  </article>
`).join('');

byId('role-list').innerHTML = data.roles.map((role, index) => `
  <article class="role reveal">
    <div class="role-index">${String(index + 1).padStart(2, '0')}</div>
    <div class="role-head">
      <span>${esc(role.period)}</span>
      <h3>${esc(role.company)}</h3>
      <h4>${esc(role.title)}</h4>
      <p>${esc(role.type)}</p>
    </div>
    <div class="role-detail">
      <ul>${role.highlights.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
      <div class="tags">${role.tags.map(tag => `<i>${esc(tag)}</i>`).join('')}</div>
    </div>
  </article>
`).join('');

byId('skill-groups').innerHTML = data.skillGroups.map((group, index) => `
  <article class="skill-group reveal">
    <b>${String(index + 1).padStart(2, '0')}</b>
    <h3>${esc(group.title)}</h3>
    <div>${group.items.map(item => `<span>${esc(item)}</span>`).join('')}</div>
  </article>
`).join('');

byId('admin-proof').innerHTML = data.adminProof.map(item => `<p class="reveal">${esc(item)}</p>`).join('');

byId('project-list').innerHTML = data.projects.map((project, index) => `
  <article class="project reveal">
    <div class="project-num">${String(index + 1).padStart(2, '0')}</div>
    <div class="project-main">
      <h3>${esc(project.title)}</h3>
      <p>${esc(project.summary)}</p>
      <div class="tags">${project.tags.map(tag => `<i>${esc(tag)}</i>`).join('')}</div>
    </div>
  </article>
`).join('');

byId('cert-list').innerHTML = data.certifications.map(([name, year]) => `
  <article class="cert reveal">
    <span>${esc(year)}</span>
    <h3>${esc(name)}</h3>
  </article>
`).join('');

byId('next-focus').innerHTML = data.nextFocus.map(focus => `
  <article>
    <h3>${esc(focus.title)}</h3>
    <div>${focus.items.map(item => `<span>${esc(item)}</span>`).join('')}</div>
  </article>
`).join('');

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}), { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const time = new Intl.DateTimeFormat('en-AU', {
  timeZone: 'Australia/Brisbane',
  hour: 'numeric',
  minute: '2-digit'
}).format(new Date());

byId('local-time').textContent = `${time} AEST`;
byId('top-button').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
}));

# Project Context

## What the project does

This is a dependency-free personal portfolio and resume website for an IT support professional. It presents enterprise and MSP experience, endpoint and workplace technology skills, selected technical work, qualifications, and links to public project material. It also includes a print-friendly portfolio view.

## Current objective

Keep the public portfolio focused on Level 2 Desktop Support, EUC, endpoint operations, Modern Workplace, and Microsoft 365 roles while showing a compact set of practical current projects. Context Mesh is the featured AI/infrastructure project; Transcription Lab and Endpoint Automation Toolkit are the active local builds.

## Important decisions and why

- The Main version is IT-first because the strongest verified employment evidence is in enterprise support, endpoint operations, identity, Microsoft 365, security remediation, and incident ownership.
- AI and automation are presented as supporting evidence, including local transcription, web delivery, and an API automation prototype. Project status and limitations must remain truthful.
- The visible project catalogue is intentionally reduced to Context Mesh, Transcription Lab, Endpoint Automation Toolkit, SCCM deployment and automation, and endpoint deployment and lifecycle.
- Professional Profile evidence uses one responsive yellow-card grid: two foundation cards, three role-fit cards, and one centred AI/automation card.
- Content is centralized in `content.js` so the resume, profile sections, and project evidence can be updated consistently.
- The site remains dependency-free and can be previewed with the included PowerShell server or opened directly in a browser.
- Main and Noddy are separate worktree/branch versions. Publication of either version is controlled independently.

## Files changed

- `index.html` - Main page structure, metadata, navigation, positioning copy, and section headings.
- `index.html` - Places role-fit evidence in Professional Profile before the Projects section.
- `content.js` - Central resume data, experience, skills, project evidence, qualifications, and development focus.
- `projects.html` and `projects-data.js` - Public project showcase structure and catalogue data.
- `projects-page.js` - Renders the project catalogue.
- `portfolio-pdf.html`, `portfolio-pdf.js`, and `portfolio-pdf.css` - Print-friendly portfolio view.
- `styles.css` and `resume.css` - Shared visual styling, responsive behavior, and print rules.
- `script.js` - Main page rendering and interaction behavior.
- `dev-server.ps1` - Dependency-free local HTTP preview server.
- `README.md` - Basic project orientation and local preview instructions.
- `PROJECTS.md` - Public-safe breakdown of the projects currently shown on Main, with evidence, status, plans, and limitations.

## What has been tested

- Repository structure, README guidance, Git status, recent commits, and available test files were inspected.
- `git diff --check` was run after the latest content changes.
- The published Main branch raw files returned HTTP 200 and contained the updated AI positioning.
- The Noddy branch raw content returned HTTP 200 and contained the refreshed project evidence.
- No automated test suite or build pipeline is present in the repository.
- A browser/runtime syntax test was not available in the current environment; this remains an area for future validation.

## Known limitations

- The site is static and has no application backend, automated deployment pipeline, or runtime data source.
- Some projects remain prototypes or in development; they must not be described as production systems.
- Transcription accuracy, performance across hardware, live transcription, packaging, and clean-install behavior require broader validation.
- Project links and public claims require periodic review as repositories and deployments change.
- Responsive and print behavior should be checked manually after substantial content or layout changes.
- Tablet layout centres the third role-fit card instead of leaving an empty grid cell; narrow mobile layout stacks profile evidence and text cards.
- Older planning records may remain in source data for reference; the public rendered catalogues use the reduced current-project lists documented above.

## Next recommended task

Run a final local browser and print review of Main and Noddy, then update Context Mesh links or project statuses only where current evidence supports the change.

## Anything Codex must not change

- Do not overwrite user files or existing exports.
- Do not include secrets, personal information, private URLs, or confidential employer/client details in public files.
- Do not copy credentials, passwords, tokens, API keys, certificates, local machine paths, or private prompts into project documentation.
- Do not remove existing functionality without explaining the reason first.
- Do not publish or deploy changes without explicit approval.
- Do not turn private or unfinished projects into public claims without verified evidence and human review.

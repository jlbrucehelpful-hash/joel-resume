# Project Context

## What the project does

This is the AI-focused companion version of a dependency-free personal portfolio and resume website. It presents an established IT support foundation alongside practical AI-assisted development, automation, workflow design, Git-based delivery, and selected technical projects. It also includes a print-friendly portfolio view.

## Current objective

Maintain Noddy as an experimental and targeted-sharing version for AI-enabled IT support, automation, workflow-building, and responsible AI adoption, while keeping the Main version as the primary IT job-market portfolio. Context Mesh is the featured project and the visible catalogue should stay limited to current or evidence-backed work.

## Important decisions and why

- Noddy is more AI-forward than Main so it can demonstrate direction and working methods without replacing the evidence-led IT support positioning.
- AI claims are grounded in concrete work such as the portfolio website, Transcription Lab, and an API automation prototype. Unfinished work must remain clearly labelled.
- The visible project catalogue is intentionally reduced to Context Mesh, Transcription Lab, AI Automation Agent, Endpoint Automation Toolkit, and the AI-assisted portfolio website.
- Content is centralized in `content.js` so experience, skills, project evidence, and development focus can be maintained consistently.
- The site remains dependency-free and can be previewed with the included PowerShell server or opened directly in a browser.
- Noddy and Main are separate worktree/branch versions. Publication of either version is controlled independently.

## Files changed

- `index.html` - AI-focused page structure, metadata, navigation, positioning copy, and section headings.
- `index.html` - Places role-fit evidence in Professional Profile before the Projects section.
- `content.js` - Central resume data, experience, AI workflow evidence, skills, projects, qualifications, and development focus.
- `projects.html` and `projects-data.js` - Public project showcase structure and catalogue data.
- `projects-page.js` - Renders the project catalogue.
- `portfolio-pdf.html`, `portfolio-pdf.js`, and `portfolio-pdf.css` - Print-friendly portfolio view.
- `styles.css`, `resume.css`, and `projects-page.css` - Visual styling, responsive behavior, and print rules.
- `script.js` - Main page rendering and interaction behavior.
- `dev-server.ps1` - Dependency-free local HTTP preview server.
- `README.md` - Basic project orientation and local preview instructions.
- `PROJECTS.md` - Public-safe breakdown of the projects currently shown on Noddy, with evidence, status, plans, and limitations.

## What has been tested

- Repository structure, README guidance, Git status, recent commits, and available test files were inspected.
- `git diff --check` was run after the latest content changes.
- The Noddy branch raw content returned HTTP 200 and contained the refreshed Transcription Lab evidence.
- No automated test suite or build pipeline is present in the repository.
- A browser/runtime syntax test was not available in the current environment; this remains an area for future validation.

## Known limitations

- Noddy is an experimental/targeted-sharing version and should not be assumed to be the primary public job-market site.
- The site is static and has no application backend, automated deployment pipeline, or runtime data source.
- Transcription Lab is still undergoing performance, accuracy, live-transcription, packaging, and clean-install validation.
- The AI Automation Agent is a prototype and is not presented as production-ready software.
- Project links and public claims require periodic review as repositories and deployments change.
- Older speculative project concepts may remain in source history, but the public rendered catalogue intentionally excludes them.

## Next recommended task

Run a final local browser and print review of Noddy, verify the Context Mesh and project links, and confirm that every AI claim is backed by current evidence before targeted sharing.

## Anything Codex must not change

- Do not overwrite user files or existing exports.
- Do not include secrets, personal information, private URLs, or confidential employer/client details in public files.
- Do not copy credentials, passwords, tokens, API keys, certificates, local machine paths, or private prompts into project documentation.
- Do not remove existing functionality without explaining the reason first.
- Do not publish or deploy changes without explicit approval.
- Do not turn private or unfinished projects into public claims without verified evidence and human review.

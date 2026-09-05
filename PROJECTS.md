# Portfolio Projects

This document explains the current projects displayed on the Main portfolio. It is a public-safe summary: private runtime data, credentials, employer-specific systems, and confidential implementation details are intentionally omitted.

## 1. Context Mesh

**Status:** In development; tested local vertical slice.

**What it is:** A model-agnostic MCP server for connected knowledge domains. Personal, Work, Career, or Project knowledge can be treated as separate domains with explicit, directional connections.

**What is demonstrated:**

- MCP tools over stdio and Streamable HTTP
- Owner-controlled writes and access checks
- One-hop directional read inheritance without copying memories
- Search results that retain origin and inheritance paths
- Revocation, soft deletion, and mutation audit events
- Durable local JSON persistence and an initial asynchronous PostgreSQL adapter
- Replaceable retrieval-provider boundary with keyword search as the local fallback

**Why it matters:** It demonstrates backend architecture, access-control thinking, data ownership, AI-tool interoperability, persistence seams, and test-led development.

**Next plan:** Validate PostgreSQL migrations and transactions against a disposable database, then strengthen identity, tenancy, organisation permissions, connection governance, retrieval quality, connectors, and the future management UI.

**Limitations:** It is not production-ready hosted infrastructure. Hosted identity, database-enforced tenant isolation, full organisation sharing, connectors, semantic retrieval, and a web UI remain incomplete or require further validation.

## 2. Transcription Lab

**Status:** In development; local workflows are being validated.

**What it is:** A local Windows workbench for transcribing audio, recording microphone or system audio, converting audio formats, and converting transcript or subtitle files.

**What is demonstrated:** Python application development, local AI model integration, FFmpeg processing, command-line and desktop workflows, performance trade-offs, and privacy-conscious file handling.

**Next plan:** Validate Live Record source selection, meters, mono/stereo behavior, signal safety, optional live captions, model loading, performance, FFmpeg handling, and future Windows packaging.

**Limitations:** Accuracy varies by audio and model. Live transcription, hardware performance, packaging, and clean-install behavior still require broader testing. It is not presented as a public hosted transcription service.

## 3. Endpoint Automation Toolkit

**Status:** In development.

**What it is:** A read-only PowerShell toolkit for Windows endpoint health checks and technician-friendly evidence packages.

**What is demonstrated:** System, disk, uptime, services, Windows Update state, restart indicators, network diagnostics, recent System errors, battery information, Group Policy output, structured reporting, safe exports, background execution, cancellation, and plain-language GUI help.

**Next plan:** Complete focused manual GUI acceptance testing, then consider packaging, signing, and carefully scoped future integrations.

**Limitations:** It does not remediate endpoints, perform remote checks, provide full Intune/Entra/SCCM inventory, or replace enterprise monitoring. Reports may contain sensitive endpoint details and must be reviewed before sharing.

## 4. SCCM deployment and automation

**Status:** Professional experience.

**What it is:** Enterprise application packaging and deployment, patching, inventory, client actions, and endpoint remediation supported by PowerShell and command-line workflows.

**Why it is shown:** It grounds the newer automation work in real Desktop Support and endpoint operations rather than presenting automation as an isolated coding exercise.

**Limitations:** Internal scripts, tooling, environment details, and employer-confidential procedures are not published.

## 5. Endpoint deployment and lifecycle

**Status:** Professional experience.

**What it is:** Windows and macOS imaging, configuration, application installation, device swaps, upgrades, patching, troubleshooting, lifecycle support, and retirement using enterprise endpoint technologies.

**Why it is shown:** It reinforces the Level 2 Desktop Support, EUC, and Modern Workplace foundation that is the primary Main portfolio direction.

**Limitations:** Employer-specific systems, customer information, and internal operational details are intentionally described only in general terms.

## How to update this document

Only promote a project status when the repository contains current evidence. Keep “planned”, “prototype”, “in development”, and “production experience” distinct. Add public links only after checking that they do not expose private data, secrets, local runtime files, or unfinished deployment details.

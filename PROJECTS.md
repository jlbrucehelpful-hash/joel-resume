# Portfolio Projects

This document explains the current projects displayed on the Noddy AI-forward portfolio. It is a public-safe summary: private runtime data, credentials, employer-specific systems, and confidential implementation details are intentionally omitted.

## 1. Context Mesh

**Status:** In development; tested local vertical slice.

**What it is:** A model-agnostic MCP server for connected knowledge domains. The project uses “brain” as an analogy: Personal, Work, Career, or Project knowledge can be treated as separate domains with explicit, directional connections.

**What is demonstrated:** MCP tools over stdio and Streamable HTTP, owner-controlled writes, one-hop directional read inheritance without copying memories, provenance and inheritance paths, revocation, soft deletion, audit events, local JSON persistence, an initial asynchronous PostgreSQL adapter, replaceable retrieval, and access-boundary tests.

**Why it matters:** It demonstrates backend architecture, AI-tool interoperability, permission-aware data design, persistence seams, and an evidence-led path from local proof toward hosted infrastructure.

**Next plan:** Validate PostgreSQL migrations and transactions against a disposable database, then strengthen identity, tenancy, organisation permissions, connection governance, retrieval quality, connectors, and the future management UI.

**Limitations:** It is not production-ready hosted infrastructure. Hosted identity, database-enforced tenant isolation, full organisation sharing, connectors, semantic retrieval, and a web UI remain incomplete or require further validation.

## 2. Transcription Lab

**Status:** In development; local workflows are being validated.

**What it is:** A local Windows workbench for transcribing audio, recording microphone or system audio, converting audio formats, and converting transcript or subtitle files.

**What is demonstrated:** Python application development, local AI model integration, FFmpeg processing, desktop workflow design, performance trade-offs, and privacy-conscious local file handling.

**Next plan:** Validate Live Record source selection, meters, mono/stereo behavior, signal safety, optional live captions, model loading, performance, FFmpeg handling, and future Windows packaging.

**Limitations:** Accuracy varies by audio and model. Live transcription, hardware performance, packaging, and clean-install behavior still require broader testing.

## 3. AI Automation Agent

**Status:** Prototype.

**What it is:** An AI-driven prototype connecting prompt-based decisions with Stripe and other APIs for real-time data processing and workflow automation.

**What is demonstrated:** API authentication, structured requests, response parsing, prompt-based logic, and action orchestration in a prototype environment.

**Limitations:** It is not presented as production-ready software. Security hardening, reliability, deployment controls, monitoring, and broader validation would be required.

## 4. Endpoint Automation Toolkit

**Status:** In development.

**What it is:** A read-only PowerShell toolkit for Windows endpoint health checks and technician-friendly evidence packages.

**What is demonstrated:** Safe endpoint inspection, structured reporting, export handling, background execution, cancellation, and plain-language technician workflows.

**Next plan:** Complete focused manual GUI acceptance testing, then consider packaging and carefully scoped future integrations.

**Limitations:** It does not remediate endpoints, perform remote checks, provide full enterprise inventory, or replace enterprise monitoring. Reports may contain sensitive endpoint details and must be reviewed before sharing.

## 5. AI-assisted portfolio and resume website

**Status:** Live.

**What it is:** This dependency-free website, built with centralized content, responsive HTML/CSS/JavaScript, local validation, Git source control, and GitHub Pages delivery.

**What is demonstrated:** AI-assisted planning, coding, content modelling, responsive design, print-friendly output, local testing, version control, and human review of the final result.

**Limitations:** It is a static portfolio rather than a production application platform. Project-specific applications remain in their own repositories.

## How to update this document

Only promote a project status when the repository contains current evidence. Keep “prototype”, “in development”, and “live” distinct. Add public links only after checking that they do not expose private data, secrets, local runtime files, or unfinished deployment details.

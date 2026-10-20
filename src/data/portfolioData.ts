export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  filterTag: 'ai-systems' | 'saas-platforms' | 'security-edge' | 'dev-tools';
  year: string;
  client: string;
  role: string;
  duration: string;
  liveUrl: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    value: string;
    label: string;
    context: string;
  }[];
  skillsUsed: string[];
  palette: { name: string; hex: string }[];
  deliverables: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  focus: string;
}

export interface CertificationItem {
  id: string;
  number: string;
  title: string;
  issuer: 'Anthropic' | 'AWS Training & Certification';
  issuedDate: string;
  recipient: string;
  imageUrl: string;
  skills: string[];
  credentialSummary: string;
}

export interface QuotationItem {
  id: string;
  quote: string;
  context: string;
  author: string;
}

export interface SkillItem {
  name: string;
  category: 'AI & Agents' | 'Full-Stack & SaaS' | 'Edge, Mobile & Security';
  experience: string;
  description: string;
  relatedProjects: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: 'search' | 'lightbulb' | 'pen' | 'code' | 'send';
  deliverables: string[];
  timeline: string;
}

export const MAIN_CHARACTER_IMAGE =
  '/assets/aistudio/file_000000003a1c81f49ce138c208390112_a88d6dcd.png';

export const MAIN_CHARACTER_CUTOUT =
  '/assets/aistudio/ak_cutout_v4.png';

export const HERO_METRICS = [
  {
    value: '18+',
    labelTop: 'SYSTEMS &',
    labelBottom: 'PRODUCTS',
    detail:
      'Across AI coding agents, custom LLMs, video SaaS, and graph security systems built by AK',
  },
  {
    value: '24',
    labelTop: 'SWARM AGENT',
    labelBottom: 'NODES',
    detail:
      'Specialized multi-agent orchestration across A-Graph Swarm, Agents Village & Neeve AI',
  },
  {
    value: '457M',
    labelTop: 'FADE LITE',
    labelBottom: 'PARAMETERS',
    detail:
      '230MB GGUF quantized dense model alongside the 3.098T parameter Fade MoE architecture',
  },
];

export const QUOTATIONS_LIST: QuotationItem[] = [
  {
    id: 'quote-1',
    quote:
      'True intelligence is not measured by how much an AI can generate, but by what it can deterministically verify, secure, and ship into the real world.',
    context: 'On Autonomous Agents & Engineering Precision',
    author: 'AK',
  },
  {
    id: 'quote-2',
    quote:
      'Don’t just rent intelligence through an API—architect the model, orchestrate the swarm, and own the engine from the terminal to the edge.',
    context: 'Philosophy behind FADE LLM, PopCut & Sentinel NPU',
    author: 'AK',
  },
  {
    id: 'quote-3',
    quote:
      'Prioritize precision and working functionality over visual appearance alone—every agent, model, and interface must verify its work.',
    context: 'Core Principle · A-Graph Swarm & FADE Code CLI',
    author: 'AK',
  },
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: 'anthropic-ai-fluency',
    number: '01',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    issuedDate: 'Verified Credential',
    recipient: 'Chandu Kypuvari (AK)',
    imageUrl: '/assets/aistudio/cert_01_ai_fluency_opt.jpg?v=2',
    skills: [
      'Artificial Intelligence',
      'Generative AI',
      'AI Literacy',
      'Prompt Engineering',
      'LLMs',
    ],
    credentialSummary:
      'Official Certificate of Completion issued by Anthropic (in partnership with UCC, Ringling College of Art + Design, HEA & National Forum) covering foundational LLM frameworks, AI fluency, and structured prompt engineering.',
  },
  {
    id: 'anthropic-claude-101',
    number: '02',
    title: 'Claude 101',
    issuer: 'Anthropic',
    issuedDate: 'Verified Credential',
    recipient: 'Chandu Kypuvari (AK)',
    imageUrl: '/assets/aistudio/cert_02_claude_101_opt.jpg?v=2',
    skills: [
      'Prompt Engineering',
      'Claude AI',
      'Generative AI',
      'Large Language Models (LLMs)',
      'AI Architecture',
    ],
    credentialSummary:
      'Official Anthropic Certificate of Completion validating applied mastery of Claude AI model capabilities, context engineering, and production LLM workflows.',
  },
  {
    id: 'aws-foundations-prompt-eng',
    number: '03',
    title: 'Foundations of Prompt Engineering',
    issuer: 'AWS Training & Certification',
    issuedDate: 'Issued Jul 2026 · Valid to Jul 2036',
    recipient: 'Chandu Kypuvari (AK)',
    imageUrl: '/assets/aistudio/cert_03_aws_foundations_opt.jpg?v=2',
    skills: [
      'AWS Training & Certification',
      'Prompt Engineering',
      'Foundation Models',
      'Zero-Shot & Few-Shot',
      'Chain-of-Thought',
    ],
    credentialSummary:
      'AWS Training & Certification Completion Certificate (Completed July 16, 2026, signed by Michelle Vaz, Director, AWS Training & Certification) covering foundational prompt design patterns and reasoning techniques.',
  },
  {
    id: 'aws-essentials-prompt-eng',
    number: '04',
    title: 'Essentials of Prompt Engineering',
    issuer: 'AWS Training & Certification',
    issuedDate: 'Issued Jul 2026 · Valid to Jul 2036',
    recipient: 'Chandu Kypuvari (AK)',
    imageUrl: '/assets/aistudio/cert_04_aws_essentials_opt.jpg?v=2',
    skills: [
      'AWS Training & Certification',
      'Advanced Prompting',
      'Agentic Guardrails',
      'LLM Optimization',
      'Enterprise AI',
    ],
    credentialSummary:
      'AWS Training & Certification Completion Certificate (Completed July 16, 2026, signed by Michelle Vaz, Director, AWS Training & Certification) validating essential production prompt optimization and guardrail strategies.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'fade-code-cli',
    number: '01',
    title: 'FADE CODE CLI & FADE LLM',
    category: 'AI CODING AGENT & MOE ARCHITECTURE',
    filterTag: 'ai-systems',
    year: '2026',
    client: 'AK · ShadowCode Open Source (github.com/anotherkingAk/Fade-Cli)',
    role: 'Creator & Lead Systems Architect (AK)',
    duration: 'V1.1 → V3 Hybrid UI',
    liveUrl: 'https://github.com/anotherkingAk/Fade-Cli',
    summary:
      'Claude Code and OpenCode-caliber interactive terminal coding agent built for desktop and Android Termux, paired with the MIT-licensed Fade MoE architecture (3.098T total / 44.55B active params) and Fade Lite (457.8M dense, ~230MB GGUF).',
    challenge:
      'Developers needed a dependable terminal coding assistant that understands full repository structures, respects strict workspace boundaries, and operates reliably across both desktop shells and mobile Termux environments without skipping features.',
    solution:
      'Engineered FADE CLI V1.1 through V3 Hybrid UI with a custom flame mascot, multi-provider routing (Gemini, OpenAI, custom HTTP), permissioned file operations, reusable agent skills, and the companion anotherkingAk/Fade model configuration repository.',
    impactMetrics: [
      {
        value: '457.8M',
        label: 'Fade Lite Dense Model',
        context: '~230MB GGUF quantized build trainable on free GPU tiers (MIT License)',
      },
      {
        value: '3.098T',
        label: 'Fade MoE Architecture',
        context: '44.55B active parameters per token in base model configuration',
      },
      {
        value: 'V3 UI',
        label: 'Hybrid Terminal Engine',
        context: 'Workspace-isolated file operations, skill extensions & multi-LLM providers',
      },
    ],
    skillsUsed: [
      'PYTHON',
      'MOE & EDGE LLMS',
      'A-GRAPH SWARMS',
      'ANDROID IDE & TERMUX',
      'TYPESCRIPT',
    ],
    palette: [
      { name: 'Terminal Obsidian', hex: '#08080A' },
      { name: 'Fade Flame Crimson', hex: '#DC1E28' },
      { name: 'Diff Zinc', hex: '#D4D4D8' },
    ],
    deliverables: [
      'anotherkingAk/Fade-Cli (V1.1 Package & V3 Hybrid Terminal UI)',
      'anotherkingAk/Fade (3.098T MoE & 457.8M Fade Lite GGUF Architecture)',
      'Workspace-Boundary Permission & File Operation Engine',
      'Extensible Agent Skills & Multi-Model Provider Router',
    ],
  },
  {
    id: 'popcut-v36',
    number: '02',
    title: 'POPCUT & V36 ENGINE',
    category: 'VIDEO EDITOR & AI CLIPPING SAAS',
    filterTag: 'saas-platforms',
    year: '2026',
    client: 'Flagship Media Suite (Formerly CapCard Pro & AutoClip AI)',
    role: 'Founder & Lead Product Architect (AK)',
    duration: 'Active Development',
    liveUrl: 'https://popcut.shadowcode.dev',
    summary:
      'Dual-track video creation ecosystem: PopCut delivers intuitive CapCut-grade timeline editing with partially local video rendering and custom open-source AI models (zero external AI APIs), while V36 acts as a high-performance turbo engine converting long-form video into 30–60s viral Shorts, Reels, and TikToks.',
    challenge:
      'Relying on third-party AI APIs for video generation destroys unit economics at scale, while creators also need automated hook detection, subtitle styling, and multi-platform scheduling in one cohesive workflow.',
    solution:
      'Designed PopCut around local client/hybrid processing with custom-built open-source models phased in after maximum user adoption, alongside V36 built on Next.js 16.1.1, Tailwind v4, Three.js/R3F, PostgreSQL, Prisma 5.22, and Redis/BullMQ job queues.',
    impactMetrics: [
      {
        value: '0 APIs',
        label: 'External AI Dependency',
        context: 'PopCut uses 100% custom code & self-hosted open-source models',
      },
      {
        value: '30–60s',
        label: 'Automated Viral Clips',
        context: 'V36 hook detection, auto-subtitles, captions & social scheduling',
      },
      {
        value: 'v16.1.1',
        label: 'Next.js + BullMQ Stack',
        context: 'Backed by PostgreSQL, Prisma 5.22, Redis workers & Three.js',
      },
    ],
    skillsUsed: [
      'NEXT.JS 16 & REACT',
      'TYPESCRIPT',
      'THREE.JS & R3F',
      'POSTGRESQL & PRISMA',
      'REDIS & BULLMQ',
    ],
    palette: [
      { name: 'Timeline Pitch', hex: '#09090C' },
      { name: 'Turbo Crimson', hex: '#E11D2A' },
      { name: 'Studio Alabaster', hex: '#F3EFEA' },
    ],
    deliverables: [
      'PopCut Core Timeline Editor & Local Rendering Pipeline',
      'V36 Turbo Clipping Engine (Hooks, Subtitles, Hashtags & Framing)',
      'Redis + BullMQ Asynchronous Video Processing Queue',
      'Admin Revenue, Subscription Tier & Viral Analytics Dashboard',
    ],
  },
  {
    id: 'hydra-agraph-swarm',
    number: '03',
    title: 'HYDRA & A-GRAPH SWARM',
    category: 'INDUSTRIAL SECURITY & GRAPH AI',
    filterTag: 'security-edge',
    year: '2026',
    client: 'AK Research · Snapdragon Multiverse Hackathon',
    role: 'AI Systems & Security Researcher (AK)',
    duration: 'R&D Track',
    liveUrl: 'https://hydra.shadowcode.dev',
    summary:
      'Two synergistic graph-intelligence initiatives: HYDRA models industrial infrastructure dependencies and attack paths for autonomous security investigation, while the A-Graph Swarm System coordinates specialist AI agents through directed graph relationships and formal output verification.',
    challenge:
      'Flat multi-agent chat loops fail on complex industrial security and engineering tasks due to lack of dependency tracking, unverified agent outputs, and hardware-target mismatches (highlighted during the Snapdragon X Elite vs Intel hackathon validation).',
    solution:
      'Architected a 7-layer A-Graph topology (Coordinator Agent, Specialist Agents, Graph Engine, Communication Layer, Verification Engine, Execution Layer, and Resource Monitor) with hardware-platform validation early in the pipeline.',
    impactMetrics: [
      {
        value: '7-Layer',
        label: 'A-Graph Architecture',
        context: 'Coordinator, Specialist, Graph, Comm, Verification, Execution & Monitor',
      },
      {
        value: '2 Tracks',
        label: 'HYDRA + Swarm R&D',
        context: 'Dedicated industrial security analysis + general multi-agent graph intelligence',
      },
      {
        value: '100%',
        label: 'Verified Execution',
        context: 'Verification engine audits agent outputs before authorized execution',
      },
    ],
    skillsUsed: [
      'A-GRAPH SWARMS',
      'OWASP LLM SECURITY',
      'PYTHON',
      'TYPESCRIPT',
      'MOE & EDGE LLMS',
    ],
    palette: [
      { name: 'Graph Obsidian', hex: '#08080A' },
      { name: 'Threat Vector Red', hex: '#DC1E28' },
      { name: 'Node Matrix Zinc', hex: '#A1A1AA' },
    ],
    deliverables: [
      'A-Graph Dependency & Task Orchestration Engine',
      'HYDRA Industrial Attack-Path & Anomaly Visualizer',
      'Autonomous Agent Output Verification & Guardrail Layer',
      'Cross-Architecture Hardware Validation Protocol (Snapdragon / x86)',
    ],
  },
  {
    id: 'neeve-ai-voidurl',
    number: '04',
    title: 'NEEVE AI & VOIDURL',
    category: 'MULTI-AGENT APP STUDIO & LINK GATEWAY',
    filterTag: 'saas-platforms',
    year: '2026',
    client: 'Neev-Ai & MonetizeLink.pro',
    role: 'Founder & Full-Stack Architect (AK)',
    duration: 'Prototyping & Active Build',
    liveUrl: 'https://monetizelink.pro',
    summary:
      'Neeve AI (`Neev-Ai`) is a React + Tailwind v4 mobile app-builder studio where specialized multi-agent swarms (PM, DBA, UI, Engineer, QA) generate and publish iOS/Android apps from prompts via Expo/EAS, paired with VoidUrl (`MonetizeLink.pro`) for link gateways, navigation systems, and creator monetization.',
    challenge:
      'Prompt-to-app tools often generate broken UI snippets without database schemas, QA checks, or native mobile build pipelines, while creators need high-converting link monetization gateways.',
    solution:
      'Integrated OpenRouter, Supabase, GitHub, Figma, Expo/EAS, and Razorpay into a role-based 5-agent swarm pipeline for Neeve AI, alongside comprehensive PRDs, user flows, and gateway components for VoidUrl.',
    impactMetrics: [
      {
        value: '5 Roles',
        label: 'Mobile App Swarm',
        context: 'PM, DBA, UI Designer, Engineer & QA agents collaborating per build',
      },
      {
        value: 'iOS+APK',
        label: 'Expo / EAS Pipeline',
        context: 'Direct mobile compilation with Supabase backend & Razorpay billing',
      },
      {
        value: '2-in-1',
        label: 'SaaS Ecosystem',
        context: 'Neeve AI App Studio + VoidUrl (MonetizeLink.pro) gateway platform',
      },
    ],
    skillsUsed: [
      'NEXT.JS 16 & REACT',
      'SUPABASE & EXPO',
      'A-GRAPH SWARMS',
      'FIGMA & UI/UX',
      'TYPESCRIPT',
    ],
    palette: [
      { name: 'Studio Carbon', hex: '#0B0B0E' },
      { name: 'Gateway Crimson', hex: '#DC1E28' },
      { name: 'Chrome Slate', hex: '#E4E4E7' },
    ],
    deliverables: [
      'Neeve AI Multi-Agent Studio (PM, DBA, UI, Engineer, QA Swarms)',
      'Supabase + GitHub + Figma + Expo/EAS + Razorpay Integration',
      'VoidUrl (MonetizeLink.pro) Link Gateway & Monetization Flows',
      'Complete Product Requirement Documents (PRDs) & Component Layouts',
    ],
  },
  {
    id: 'agents-village-showdo',
    number: '05',
    title: 'SHOWDO CODE & AGENTS VILLAGE',
    category: 'WORKFLOW ENGINE & 24-AGENT PLATFORM',
    filterTag: 'ai-systems',
    year: '2026',
    client: 'Showdo Code Startup',
    role: 'Founder & Core Engine Architect (AK)',
    duration: 'Core Architecture',
    liveUrl: 'https://showdocode.dev',
    summary:
      'Next-generation workflow automation startup (n8n competitor) built with a 6-priority execution engine and production-grade security, alongside Agents Village—a complete modular codebase where 24 specialized AI agents collaborate across planning, design, coding, testing, and verification.',
    challenge:
      'Existing workflow automation tools struggle to unify async queues, real-time WebSockets, edge serverless execution, and autonomous 24-agent collaboration under a single secure architecture.',
    solution:
      'Structured the Showdo Code engine around strict priority tiers (1. Standard Async Queue, 2. Sync Real-Time, 3. Scheduled Cron, 4. AI Agent, 5. Event WebSocket, 6. Edge Serverless) and architected Agents Village with zero missing files and retry-hardened delegation.',
    impactMetrics: [
      {
        value: '6 Tiers',
        label: 'Execution Engine Priority',
        context: 'Async Queue → Real-Time Sync → Cron → Agent → WebSocket → Edge',
      },
      {
        value: '24',
        label: 'Specialized AI Agents',
        context: 'Cooperating across Planning, Design, Coding, QA & Verification',
      },
      {
        value: '100%',
        label: 'Modular File Integrity',
        context: 'Complete multi-file architecture with shared context & retry recovery',
      },
    ],
    skillsUsed: [
      'A-GRAPH SWARMS',
      'REDIS & BULLMQ',
      'TYPESCRIPT',
      'NEXT.JS 16 & REACT',
      'OWASP LLM SECURITY',
    ],
    palette: [
      { name: 'Engine Obsidian', hex: '#070709' },
      { name: 'Execution Red', hex: '#DC1E28' },
      { name: 'Queue Silver', hex: '#D4D4D8' },
    ],
    deliverables: [
      'Showdo Code 6-Priority Workflow Execution Engine',
      'Agents Village 24-Agent Collaborative Runtime & UI',
      'Multi-Step Task Delegation, Shared Context & Retry Mechanisms',
      'Production-Grade Security & Role-Based Execution Guardrails',
    ],
  },
  {
    id: 'sentinel-npu-security',
    number: '06',
    title: 'SENTINEL NPU & DEEPFAKE SHIELD',
    category: 'ON-DEVICE EDGE AI & SECURITY SUITE',
    filterTag: 'security-edge',
    year: '2026',
    client: 'AK Security Division',
    role: 'Lead AI Security Engineer (AK)',
    duration: 'Active R&D',
    liveUrl: 'https://sentinel.shadowcode.dev',
    summary:
      'Proprietary on-device AI security suite engineered for NPU hardware (~100M parameter edge model built with custom architecture, tokenizer, and weights from scratch) alongside a Deepfake Detection engine and a comprehensive AI App Security Checklist.',
    challenge:
      'Mobile and enterprise users face sophisticated SMS smishing, malicious QR codes, poisoned RAG pipelines, and synthetic deepfakes that require zero-latency local detection before cloud escalation.',
    solution:
      'Designed Sentinel with a ~100M parameter local NPU model that screens SMS, URLs, QR codes, and documents on-device and escalates high-risk payloads to cloud models, paired with an OWASP LLM Top 10 & MASVS security framework.',
    impactMetrics: [
      {
        value: '~100M',
        label: 'Custom NPU Edge Model',
        context: 'Custom architecture, tokenizer & weights built from scratch',
      },
      {
        value: '4 Vectors',
        label: 'Real-Time Threat Shield',
        context: 'On-device scanning for SMS, phishing URLs, QR codes & documents',
      },
      {
        value: 'OWASP+MASVS',
        label: 'AI Security Checklist',
        context: 'Covers OWASP LLM Top 10, Agentic AI, RAG poisoning & Deepfakes',
      },
    ],
    skillsUsed: [
      'MOE & EDGE LLMS',
      'OWASP LLM SECURITY',
      'PYTHON',
      'ANDROID IDE & TERMUX',
      'TYPESCRIPT',
    ],
    palette: [
      { name: 'NPU Silicon Black', hex: '#08080B' },
      { name: 'Sentinel Crimson', hex: '#E11D48' },
      { name: 'Shield Titanium', hex: '#E4E4E7' },
    ],
    deliverables: [
      'Sentinel ~100M Parameter On-Device NPU Model & Custom Tokenizer',
      'Real-Time SMS, Phishing URL, QR & Document Threat Classifier',
      'Deepfake Detection Analysis Pipeline',
      'AI-Generated App Security Standard (OWASP LLM Top 10, MASVS, RAG)',
    ],
  },
  {
    id: 'android-ai-ide',
    number: '07',
    title: 'NATIVE ANDROID AI IDE',
    category: 'MOBILE DEVELOPER ENVIRONMENT',
    filterTag: 'dev-tools',
    year: '2026',
    client: 'AK Mobile Tools',
    role: 'Mobile Systems Architect (AK)',
    duration: 'Product Architecture',
    liveUrl: 'https://github.com/anotherkingAk',
    summary:
      'Native Android development environment forked from AndroidIDE and inspired by Replit, Termux, and Google Antigravity IDE—enabling developers to build, edit, and deploy full software projects directly from a phone with a live permission-based AI chat panel.',
    challenge:
      'Mobile coding across Termux and Pydroid 3 lacks an integrated native IDE where AI agents can inspect the file tree, propose diffs with explicit user approval, and load MCP plugins.',
    solution:
      'Architected a split-pane Android IDE with an integrated terminal, Git client, multi-model API router (Claude, Gemini, Fade), reusable agent skills, and MCP plugin support.',
    impactMetrics: [
      {
        value: '100%',
        label: 'Permissioned File Diffs',
        context: 'AI chat panel requests explicit developer approval before file writes',
      },
      {
        value: 'MCP+Skills',
        label: 'Plugin Architecture',
        context: 'Extensible with Model Context Protocol servers & agent skills',
      },
      {
        value: 'Native',
        label: 'AndroidIDE + Termux Base',
        context: 'Full code editor, file explorer, terminal & Git on Android',
      },
    ],
    skillsUsed: [
      'ANDROID IDE & TERMUX',
      'TYPESCRIPT',
      'PYTHON',
      'A-GRAPH SWARMS',
      'FIGMA & UI/UX',
    ],
    palette: [
      { name: 'AMOLED Pitch', hex: '#050507' },
      { name: 'Diff Accent Red', hex: '#DC1E28' },
      { name: 'Code Ivory', hex: '#F4F4F6' },
    ],
    deliverables: [
      'AndroidIDE Fork with Side-by-Side AI Agent Chat Panel',
      'Permission-Gated Live Code Editing & File Explorer',
      'Integrated Mobile Terminal, Git & Cloud Build Triggers',
      'MCP Plugin & Multi-Provider Model Integration',
    ],
  },
  {
    id: 'telegram-paas-alex',
    number: '08',
    title: 'ALEX BOT, CLOUD STORAGE & BOT PAAS',
    category: 'TELEGRAM AUTOMATION & INFRASTRUCTURE',
    filterTag: 'dev-tools',
    year: '2025–2026',
    client: 'Creator & Developer Infrastructure Suite',
    role: 'Backend & Automation Engineer (AK)',
    duration: '3 Modular Products',
    liveUrl: 'https://shadowcode.dev/bots',
    summary:
      'Three interconnected Telegram & cloud infrastructure products: Alex Subscription Bot (multilingual captioning in Telugu, Kannada, Urdu & English, watermarking, and file renaming), Telegram Cloud File Storage Bot with searchable metadata and quotas, and a 1-Click Bot Deployment PaaS.',
    challenge:
      'Regional content creators need automated multilingual media branding, while bot developers struggle with Heroku/Render environment configuration, runtime logs, and uptime monitoring.',
    solution:
      'Designed Alex Bot with subscription-gated media pipelines and regional language support, a quota-managed Telegram File Storage system, and a managed Bot Deployment Service with start/stop/restart controls and live log streaming.',
    impactMetrics: [
      {
        value: '4 Langs',
        label: 'Multilingual Media AI',
        context: 'Native support for Telugu, Kannada, Urdu, and English captions',
      },
      {
        value: '3 Tools',
        label: 'Unified Bot Ecosystem',
        context: 'Alex Content Bot + Cloud File Storage Bot + Bot Deployment PaaS',
      },
      {
        value: '1-Click',
        label: 'Bot Lifecycle Control',
        context: 'Env var management, start/stop/restart & real-time error alerts',
      },
    ],
    skillsUsed: [
      'PYTHON',
      'POSTGRESQL & PRISMA',
      'REDIS & BULLMQ',
      'NEXT.JS 16 & REACT',
      'TYPESCRIPT',
    ],
    palette: [
      { name: 'Infra Charcoal', hex: '#0A0A0D' },
      { name: 'Signal Red', hex: '#DC1E28' },
      { name: 'Log Monospace', hex: '#D4D4D8' },
    ],
    deliverables: [
      'Alex Telegram Bot (Watermarking, File Renaming, Multilingual Captions)',
      'Telegram File Storage Bot (Searchable Index, Quotas & Expiry Policies)',
      'Managed Bot Deployment PaaS (Env Vars, Logs & Runtime Controls)',
    ],
  },
  {
    id: 'client-web-social-ai',
    number: '09',
    title: 'GLOBAL WEB STUDIO & SOCIAL AI',
    category: 'CLIENT PROTOTYPING & CREATOR SAAS',
    filterTag: 'saas-platforms',
    year: '2026',
    client: 'Concept Kart & SMBs (USA, UK, Germany, Italy)',
    role: 'Lead UI/UX Strategist & AI Product Builder (AK)',
    duration: 'Ongoing Client & SaaS Track',
    liveUrl: 'https://studio.shadowcode.dev',
    summary:
      'High-conversion interactive UI/UX prototyping service pitching bespoke storefronts to e-commerce brands (like Concept Kart) and local businesses across the USA, UK, Germany, and Italy—paired with Social Media Manager AI (powered by Veo video generation) and the Nomadtable Android travel PRD.',
    challenge:
      'E-commerce brands and international SMBs (clinics, yoga studios, salons, bakeries) rarely respond to cold outreach without seeing an interactive, custom-tailored prototype first.',
    solution:
      'Built a rapid prototype generation workflow using React, Tailwind v4, and v0 layout systems for instant client demos, alongside Social Media Manager AI for automated posters, multilingual captions, and ad creatives.',
    impactMetrics: [
      {
        value: '4 Markets',
        label: 'International Outreach',
        context: 'Targeting SMBs & e-commerce brands in USA, UK, Germany & Italy',
      },
      {
        value: 'Veo + AI',
        label: 'Social Media Manager',
        context: 'Automated posters, short videos, calendars & multilingual ad copy',
      },
      {
        value: 'Full PRD',
        label: 'Venture Incubator',
        context: 'Includes Nomadtable Travel Android PRD, AI CodeBuilder & Brand Ventures',
      },
    ],
    skillsUsed: [
      'FIGMA & UI/UX',
      'NEXT.JS 16 & REACT',
      'TYPESCRIPT',
      'SUPABASE & EXPO',
      'THREE.JS & R3F',
    ],
    palette: [
      { name: 'Editorial Pitch', hex: '#08080A' },
      { name: 'Brand Crimson', hex: '#DC1E28' },
      { name: 'Gallery Cream', hex: '#F5F2EE' },
    ],
    deliverables: [
      'Interactive E-Commerce & SMB Pitch Prototypes (Concept Kart, EU/US Clinics & Studios)',
      'Social Media Manager AI (Posters, Short Video, Calendars & Analytics)',
      'Nomadtable-Inspired Social Travel Android App Architecture & PRD',
      'Infinite Rich Path Creator Brand & Apparel Venture Blueprint',
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'ak-founder',
    degree: 'AK (Chandu Kypuvari) — Founder & Lead AI Architect',
    institution: 'ShadowCode · Showdo Code (github.com/anotherkingAk)',
    period: '2024 - 2026',
    location: 'Independent R&D & SaaS Studio',
    focus: 'Creator of FADE Code CLI (V1.1–V3), Fade 3.098T MoE / 457.8M Lite LLM, PopCut, V36, Neeve AI, and Showdo Code.',
  },
  {
    id: 'anthropic-aws-certified',
    degree: 'Anthropic & AWS Certified AI / Prompt Architect',
    institution: 'Anthropic (Claude 101, AI Fluency) & AWS Training',
    period: '2026',
    location: '4 Verified Credentials',
    focus: 'Certified in AI Fluency: Framework & Foundations, Claude 101, Foundations of Prompt Engineering, and Essentials of Prompt Engineering.',
  },
];

export const SKILLS_LIST: SkillItem[] = [
  {
    name: 'PYTHON',
    category: 'AI & Agents',
    experience: 'Core Stack',
    description: 'Primary language for FADE Code CLI (V1.1–V3), Fade LLM architecture, A-Graph Swarm orchestration, Sentinel NPU training, and Telegram automation.',
    relatedProjects: [
      'FADE CODE CLI & FADE LLM',
      'HYDRA & A-GRAPH SWARM',
      'SENTINEL NPU & DEEPFAKE SHIELD',
      'ALEX BOT, CLOUD STORAGE & BOT PAAS',
    ],
  },
  {
    name: 'TYPESCRIPT',
    category: 'Full-Stack & SaaS',
    experience: 'Core Stack',
    description: 'Strict end-to-end type safety across V36 Video SaaS, Showdo Code workflow engine, Neeve AI studio, and interactive client web prototypes.',
    relatedProjects: [
      'POPCUT & V36 ENGINE',
      'NEEVE AI & VOIDURL',
      'SHOWDO CODE & AGENTS VILLAGE',
      'GLOBAL WEB STUDIO & SOCIAL AI',
    ],
  },
  {
    name: 'NEXT.JS 16 & REACT',
    category: 'Full-Stack & SaaS',
    experience: 'Production',
    description: 'Next.js 16.1.1, React 19, and Tailwind CSS v4 for high-performance SaaS dashboards, video editors, and multi-agent web studios.',
    relatedProjects: [
      'POPCUT & V36 ENGINE',
      'NEEVE AI & VOIDURL',
      'SHOWDO CODE & AGENTS VILLAGE',
      'GLOBAL WEB STUDIO & SOCIAL AI',
    ],
  },
  {
    name: 'MOE & EDGE LLMS',
    category: 'AI & Agents',
    experience: 'Custom Models',
    description: 'Architecting Fade 3.098T MoE (44.55B active), Fade Lite 457.8M dense (230MB GGUF), and Sentinel ~100M on-device NPU models from scratch.',
    relatedProjects: [
      'FADE CODE CLI & FADE LLM',
      'SENTINEL NPU & DEEPFAKE SHIELD',
      'HYDRA & A-GRAPH SWARM',
    ],
  },
  {
    name: 'A-GRAPH SWARMS',
    category: 'AI & Agents',
    experience: 'Multi-Agent',
    description: 'Graph-based multi-agent coordination, 24-agent orchestration in Agents Village, 5-role mobile builder swarms in Neeve AI, and output verification.',
    relatedProjects: [
      'HYDRA & A-GRAPH SWARM',
      'SHOWDO CODE & AGENTS VILLAGE',
      'NEEVE AI & VOIDURL',
      'FADE CODE CLI & FADE LLM',
    ],
  },
  {
    name: 'THREE.JS & R3F',
    category: 'Full-Stack & SaaS',
    experience: '3D & Motion',
    description: 'React Three Fiber, WebGL spatial interfaces, and Framer Motion choreography for V36 Turbo Engine and interactive brand showcases.',
    relatedProjects: [
      'POPCUT & V36 ENGINE',
      'GLOBAL WEB STUDIO & SOCIAL AI',
    ],
  },
  {
    name: 'POSTGRESQL & PRISMA',
    category: 'Full-Stack & SaaS',
    experience: 'Data Layer',
    description: 'Relational schema design with Prisma 5.22.0, multi-tenant subscription ledgers, and high-throughput analytics storage.',
    relatedProjects: [
      'POPCUT & V36 ENGINE',
      'ALEX BOT, CLOUD STORAGE & BOT PAAS',
    ],
  },
  {
    name: 'REDIS & BULLMQ',
    category: 'Full-Stack & SaaS',
    experience: 'Async Queues',
    description: 'Distributed background job queues for V36 video clipping pipelines and Priority-1 async execution in the Showdo Code workflow engine.',
    relatedProjects: [
      'POPCUT & V36 ENGINE',
      'SHOWDO CODE & AGENTS VILLAGE',
      'ALEX BOT, CLOUD STORAGE & BOT PAAS',
    ],
  },
  {
    name: 'SUPABASE & EXPO',
    category: 'Edge, Mobile & Security',
    experience: 'Mobile & Cloud',
    description: 'Automated iOS/Android app compilation via Expo/EAS, Supabase auth & database provisioning, and Razorpay monetization in Neeve AI.',
    relatedProjects: [
      'NEEVE AI & VOIDURL',
      'GLOBAL WEB STUDIO & SOCIAL AI',
    ],
  },
  {
    name: 'ANDROID IDE & TERMUX',
    category: 'Edge, Mobile & Security',
    experience: 'Mobile Dev',
    description: 'Forking AndroidIDE for live permissioned mobile AI coding, MCP plugin integration, and Termux CLI optimization for FADE Code.',
    relatedProjects: [
      'NATIVE ANDROID AI IDE',
      'FADE CODE CLI & FADE LLM',
      'SENTINEL NPU & DEEPFAKE SHIELD',
    ],
  },
  {
    name: 'OWASP LLM SECURITY',
    category: 'Edge, Mobile & Security',
    experience: 'Security R&D',
    description: 'Hardening AI applications against OWASP LLM Top 10, MASVS mobile risks, RAG poisoning, agentic prompt injection, and deepfakes.',
    relatedProjects: [
      'SENTINEL NPU & DEEPFAKE SHIELD',
      'HYDRA & A-GRAPH SWARM',
      'SHOWDO CODE & AGENTS VILLAGE',
    ],
  },
  {
    name: 'FIGMA & UI/UX',
    category: 'Full-Stack & SaaS',
    experience: 'Product Design',
    description: 'High-retention editorial interfaces, interactive client acquisition prototypes (Concept Kart, US/EU SMBs), and hybrid terminal UI systems.',
    relatedProjects: [
      'NEEVE AI & VOIDURL',
      'GLOBAL WEB STUDIO & SOCIAL AI',
      'NATIVE ANDROID AI IDE',
    ],
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'ARCHITECT',
    description: 'Defining system topology, PRDs, and hardware/workspace constraints.',
    iconName: 'search',
    deliverables: [
      'Product Requirement Documents (PRDs) & System Schemas',
      'Target Hardware & Runtime Validation (NPU / Termux / Cloud)',
      'A-Graph Dependency & Agent Role Mapping',
      'Security Threat Modeling (OWASP LLM Top 10 & MASVS)',
    ],
    timeline: 'Phase 01',
  },
  {
    number: '02',
    title: 'PROTOTYPE',
    description: 'Designing high-contrast UI/UX flows and interactive client demos.',
    iconName: 'lightbulb',
    deliverables: [
      'Interactive Figma & React/Tailwind v4 Prototypes',
      'Terminal Hybrid UI & Editor Layout Wireframes',
      'Database ERDs (PostgreSQL, Prisma & Supabase)',
      'Client Pitch Prototypes for E-Commerce & Global SMBs',
    ],
    timeline: 'Phase 02',
  },
  {
    number: '03',
    title: 'ORCHESTRATE',
    description: 'Building multi-agent swarms, custom models, and core execution queues.',
    iconName: 'pen',
    deliverables: [
      'FADE CLI / A-Graph Coordinator & Specialist Agent Loops',
      'Custom Model Configs (Fade MoE, Fade Lite GGUF, Sentinel 100M)',
      'Showdo Code 6-Priority Queue & BullMQ Worker Pipelines',
      'Permission-Gated File Operations & Reusable Agent Skills',
    ],
    timeline: 'Phase 03',
  },
  {
    number: '04',
    title: 'VERIFY',
    description: 'Enforcing deterministic verification engines and security guardrails.',
    iconName: 'code',
    deliverables: [
      'Autonomous Verification Engine Output Auditing',
      'Workspace Boundary & File Permission Enforcement',
      'RAG Poisoning, Prompt Injection & Deepfake Stress Testing',
      'Cross-Platform Validation (Android, Desktop, Edge NPU)',
    ],
    timeline: 'Phase 04',
  },
  {
    number: '05',
    title: 'SCALE',
    description: 'Shipping monetizable SaaS platforms, open-source releases, and mobile builds.',
    iconName: 'send',
    deliverables: [
      'MIT Open-Source Releases (anotherkingAk/Fade & Fade-Cli)',
      'Expo/EAS Mobile App Publishing & PaaS Bot Deployment',
      'Razorpay / Subscription Tier & Quota Monetization',
      'Local-First Processing for Maximum Adoption & Margin',
    ],
    timeline: 'Phase 05',
  },
];

export const CONTACT_INFO = [
  {
    id: 'phone',
    type: 'phone',
    value: '7793993376',
    label: 'Direct Phone — AK (Chandu Kypuvari)',
    actionLabel: 'Copy Phone',
    href: 'tel:7793993376',
  },
  {
    id: 'email',
    type: 'email',
    value: 'k.chandu779399@gmail.com',
    label: 'Direct Email — AK (Chandu Kypuvari)',
    actionLabel: 'Copy Email',
    href: 'mailto:k.chandu779399@gmail.com',
  },
  {
    id: 'github',
    type: 'globe',
    value: 'github.com/anotherkingAk',
    label: 'AK GitHub Repositories (Fade-Cli, Fade, Neev-Ai)',
    actionLabel: 'Copy GitHub',
    href: 'https://github.com/anotherkingAk',
  },
  {
    id: 'location',
    type: 'map-pin',
    value: 'India, Andhra Pradesh',
    label: 'Location — Andhra Pradesh, India',
    actionLabel: 'Copy Location',
    href: '#contact',
  },
];

import React, { useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  ExternalLink,
  Globe,
  Lightbulb,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Search,
  Send,
  Upload,
  X,
} from 'lucide-react';
import {
  CERTIFICATIONS_LIST,
  CONTACT_INFO,
  CertificationItem,
  EDUCATION_LIST,
  HERO_METRICS,
  PROJECTS,
  ProjectItem,
  QUOTATIONS_LIST,
  SKILLS_LIST,
  SkillItem,
  WORK_PROCESS,
} from './data/portfolioData';
import {
  CrimsonStar,
  DesignerHeroPortrait,
  FooterLaptopShowcase,
  ProjectBrowserPreview,
} from './components/PortfolioArtwork';
import { ProjectModal } from './components/ProjectModal';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<
    | 'featured'
    | 'all'
    | 'ai-systems'
    | 'saas-platforms'
    | 'security-edge'
    | 'dev-tools'
  >('featured');
  const [activeProjectModal, setActiveProjectModal] =
    useState<ProjectItem | null>(null);
  const [activeCertModal, setActiveCertModal] =
    useState<CertificationItem | null>(null);
  const [certViewMode, setCertViewMode] = useState<'scroll' | 'grid'>('scroll');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS_LIST[0]);
  const [activeProcessIndex, setActiveProcessIndex] = useState<number | null>(
    null
  );
  const [activeQuoteIndex, setActiveQuoteIndex] = useState<number>(0);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryScope, setInquiryScope] = useState<string | undefined>(
    undefined
  );
  const [copiedContactId, setCopiedContactId] = useState<string | null>(null);
  const [customPortraitUrl, setCustomPortraitUrl] = useState<string | null>(
    null
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Filter projects based on current selection
  const displayedProjects = React.useMemo(() => {
    if (selectedCategory === 'featured') {
      return PROJECTS.slice(0, 3);
    }
    if (selectedCategory === 'all') {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.filterTag === selectedCategory);
  }, [selectedCategory]);

  const currentQuote = QUOTATIONS_LIST[activeQuoteIndex] || QUOTATIONS_LIST[0];

  const handleCopyContact = async (id: string, value: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      }
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopiedContactId(id);
    setTimeout(() => setCopiedContactId(null), 2000);
  };

  const handlePortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (customPortraitUrl) {
      URL.revokeObjectURL(customPortraitUrl);
    }
    const objectUrl = URL.createObjectURL(file);
    setCustomPortraitUrl(objectUrl);
  };

  const openInquiryWithScope = (scope?: string) => {
    setInquiryScope(scope);
    setIsInquiryOpen(true);
  };

  const renderProcessIcon = (
    iconName: 'search' | 'lightbulb' | 'pen' | 'code' | 'send'
  ) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-3.5 h-3.5 text-zinc-200" />;
      case 'lightbulb':
        return <Lightbulb className="w-3.5 h-3.5 text-zinc-200" />;
      case 'pen':
        return <PenTool className="w-3.5 h-3.5 text-zinc-200" />;
      case 'code':
        return <Code2 className="w-3.5 h-3.5 text-zinc-200" />;
      case 'send':
        return <Send className="w-3.5 h-3.5 text-zinc-200" />;
    }
  };

  const renderContactIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail className="w-3.5 h-3.5 text-zinc-200" />;
      case 'globe':
        return <Globe className="w-3.5 h-3.5 text-zinc-200" />;
      case 'phone':
        return <Phone className="w-3.5 h-3.5 text-zinc-200" />;
      default:
        return <MapPin className="w-3.5 h-3.5 text-zinc-200" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] text-[#F4F4F6] flex flex-col">
      {/* Main Centered Editorial Container (1440px Desktop Presence) */}
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-12 flex-1">
        {/* ================================================================= */}
        {/* 1. TOP BAR CONTRACT: 3 Zones Separated by gap-8                    */}
        {/* ================================================================= */}
        <header className="flex items-center justify-between gap-8 py-5 border-b border-[#1E1E22]">
          {/* Zone 1: Single Text Element Wordmark ("AK") */}
          <a
            href="#top"
            className="text-sm sm:text-base font-display font-bold uppercase tracking-[0.18em] text-white whitespace-nowrap shrink-0 hover:text-[#DC1E28] transition-colors"
          >
            AK
          </a>

          {/* Zone 2: 4 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.14em] text-zinc-400"
          >
            <a
              href="#projects"
              className="hover:text-white underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-white underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              Architecture
            </a>
            <a
              href="#certifications"
              className="hover:text-white underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              Certificates
            </a>
            <a
              href="#contact"
              className="hover:text-white underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action Button */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() =>
                openInquiryWithScope('AI Systems / Interactive Web Prototype')
              }
              className="inline-flex items-center gap-2.5 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-200 hover:text-white bg-[#111114] hover:bg-[#18181D] border border-[#242429] hover:border-[#DC1E28] rounded transition-colors whitespace-nowrap shrink-0"
            >
              <span>Available for Freelance</span>
              <CrimsonStar className="w-3.5 h-3.5 text-[#DC1E28]" />
            </button>
          </div>
        </header>

        {/* ================================================================= */}
        {/* 2. HERO SECTION — Editorial Cover Composition                      */}
        {/* ================================================================= */}
        <section
          id="top"
          className="relative pt-4 pb-8 border-b border-[#1E1E22] overflow-hidden"
        >
          {/* Role Kicker Row */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-zinc-400 mb-2">
            <div>
              <span className="text-[#DC1E28] font-semibold">
                AK · AI SYSTEMS ARCHITECT
              </span>
              <span className="mx-2 text-zinc-600">·</span>
              <span>SHADOWCODE &amp; SHOWDO CODE FOUNDER</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePortraitUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0"
                title="Upload custom portrait photo"
              >
                <Upload className="w-3 h-3 text-[#DC1E28]" />
                <span>
                  {customPortraitUrl ? 'Change Portrait' : 'Custom Portrait'}
                </span>
              </button>
              {customPortraitUrl && (
                <button
                  type="button"
                  onClick={() => setCustomPortraitUrl(null)}
                  className="text-[11px] text-zinc-500 hover:text-[#DC1E28] transition-colors whitespace-nowrap shrink-0"
                >
                  Reset Default
                </button>
              )}
            </div>
          </div>

          {/* Masthead Display Title + Layered Main Character Cutout + 3-Column Hero Content */}
          <div className="relative">
            {/* Subtle background "AK" monogram watermark behind the masthead */}
            <div
              className="select-none pointer-events-none absolute inset-x-0 -top-2 flex justify-center font-display font-bold uppercase leading-none tracking-[0.18em] text-white/[0.03]"
              style={{ fontSize: 'clamp(7rem, 24vw, 22rem)' }}
              aria-hidden="true"
            >
              AK
            </div>

            {/* Bold Crimson Condensed Display Masthead ("PORTFOLIO") */}
            <div
              className="select-none pointer-events-none w-full text-center font-display font-bold uppercase leading-[0.82] tracking-[-0.015em]"
              style={{
                fontSize: 'clamp(5.2rem, 19.2vw, 16.5rem)',
                backgroundImage:
                  'linear-gradient(180deg, #DC1E28 0%, #B0121B 52%, #3D060A 92%, #070708 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              aria-hidden="true"
            >
              PORTFOLIO
            </div>

            {/* Foreground 12-Column Editorial Hero Grid overlapping the Masthead */}
            <div className="relative z-10 -mt-14 sm:-mt-28 md:-mt-40 lg:-mt-56 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              {/* Left Column (4 Cols): Greeting, Name ("AK"), Title, Bio, Worldwide Status */}
              <div className="lg:col-span-4 space-y-4 pb-2 order-2 lg:order-1">
                <div className="font-script text-3xl sm:text-4xl text-zinc-100 -rotate-2 origin-bottom-left">
                  Hello, I&apos;m
                </div>

                <div className="flex items-baseline gap-3">
                  <h1 className="font-display text-6xl sm:text-7xl xl:text-[5.5rem] font-bold uppercase tracking-tight leading-[0.88] text-white">
                    AK
                  </h1>
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-zinc-400">
                    / CHANDU KYPUVARI
                  </span>
                </div>

                <div className="pt-1 text-sm sm:text-base font-bold uppercase tracking-[0.08em] text-[#DC1E28]">
                  AI SYSTEMS &amp;
                  <br />
                  FULL-STACK CREATOR
                </div>

                <p className="text-xs sm:text-[13px] text-zinc-400 leading-[1.65] max-w-[38ch]">
                  Creator of <span className="text-zinc-200">FADE Code CLI</span>,{' '}
                  <span className="text-zinc-200">Fade 3.098T MoE / 457M Lite</span>,{' '}
                  <span className="text-zinc-200">PopCut</span>,{' '}
                  <span className="text-zinc-200">V36</span>,{' '}
                  <span className="text-zinc-200">HYDRA &amp; A-Graph Swarm</span>,
                  and <span className="text-zinc-200">Neeve AI</span>. Anthropic
                  &amp; AWS certified AI architect building autonomous agents,
                  local models, and high-converting web platforms.
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      openInquiryWithScope(
                        'Global Client Prototype / AI Engineering'
                      )
                    }
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-300 hover:text-white group transition-colors whitespace-nowrap shrink-0"
                  >
                    <span className="w-5 h-5 rounded-full border border-[#DC1E28]/60 bg-[#DC1E28]/15 flex items-center justify-center text-[#DC1E28] group-hover:bg-[#DC1E28] group-hover:text-white transition-colors">
                      <Globe className="w-3 h-3" />
                    </span>
                    <span>AK · AVAILABLE WORLDWIDE · @ANOTHERKINGAK</span>
                  </button>
                </div>
              </div>

              {/* Center Column (5 Cols): Background-Removed Cutout Portrait of AK + Floating Callout */}
              <div className="lg:col-span-5 relative flex items-end justify-center order-1 lg:order-2">
                <DesignerHeroPortrait customPortraitUrl={customPortraitUrl} />

                {/* Floating Callout Badge on Right Shoulder */}
                <div className="hidden sm:flex items-center gap-3 absolute right-0 lg:-right-6 top-[36%] z-20 bg-[#0A0A0D]/90 backdrop-blur-md border border-[#242429] px-3.5 py-2.5 rounded">
                  <div className="w-8 h-8 rounded-full border border-[#DC1E28]/60 flex items-center justify-center shrink-0">
                    <CrimsonStar className="w-3.5 h-3.5 text-[#DC1E28]" />
                  </div>
                  <p className="text-[11px] text-zinc-200 leading-snug max-w-[150px]">
                    Turning autonomous AI &amp; graph intelligence into real
                    products.
                  </p>
                </div>
              </div>

              {/* Right Column (3 Cols): 3 Stacked Tabular Metrics */}
              <div className="lg:col-span-3 pb-2 order-3 flex flex-col justify-end">
                <div className="divide-y divide-[#1E1E22] border-t border-[#1E1E22] lg:border-t-0">
                  {HERO_METRICS.map((metric) => (
                    <div
                      key={metric.labelTop}
                      className="py-4 first:pt-2 last:pb-0 flex items-center justify-between lg:justify-start gap-5 group"
                      title={metric.detail}
                    >
                      <span className="font-display text-3xl sm:text-4xl font-bold text-[#DC1E28] tabular-nums w-20 shrink-0">
                        {metric.value}
                      </span>
                      <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-300 leading-tight">
                        <div>{metric.labelTop}</div>
                        <div className="text-zinc-400">{metric.labelBottom}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. SELECTED PROJECTS SECTION                                       */}
        {/* ================================================================= */}
        <section id="projects" className="py-10 border-b border-[#1E1E22]">
          {/* Section Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-[0.1em] text-white shrink-0">
              SELECTED PROJECTS
            </h2>

            {/* Center Hairline Line */}
            <div className="hidden xl:block flex-1 h-px bg-[#1E1E22] mx-4" />

            {/* Interactive Filter Tabs + View All Toggle */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap items-center gap-1 p-1 bg-[#111114] border border-[#1F1F24] rounded">
                {(
                  [
                    { id: 'featured', label: 'Flagship (3)' },
                    { id: 'all', label: 'All Systems (9)' },
                    { id: 'ai-systems', label: 'AI & Agents' },
                    { id: 'saas-platforms', label: 'SaaS & Video' },
                    { id: 'security-edge', label: 'HYDRA & Sentinel' },
                    { id: 'dev-tools', label: 'Mobile IDE & Bots' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                      selectedCategory === tab.id
                        ? 'bg-[#DC1E28] text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedCategory((prev) =>
                    prev === 'all' ? 'featured' : 'all'
                  )
                }
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>
                  {selectedCategory === 'all'
                    ? 'SHOW FLAGSHIP (3)'
                    : 'VIEW ALL 9 PROJECTS'}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-300" />
              </button>
            </div>
          </div>

          {/* 3-Column Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setActiveProjectModal(project)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                {/* Browser / Terminal Mockup Thumbnail Frame */}
                <div className="relative overflow-hidden rounded-md bg-[#0E0E11] border border-[#222227] group-hover:border-[#DC1E28]/70 transition-colors">
                  <div className="transition-transform duration-200 ease-out group-hover:scale-[1.02]">
                    <ProjectBrowserPreview projectId={project.id} />
                  </div>
                </div>

                {/* Bottom Numbered Metadata Row matching Reference Image */}
                <div className="mt-4 pb-3 border-b border-[#1E1E22] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-[#DC1E28] tabular-nums leading-none shrink-0">
                      {project.number}
                    </span>
                    <span
                      className="w-px h-7 bg-[#242429] shrink-0"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-white group-hover:text-[#DC1E28] transition-colors truncate">
                        {project.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-zinc-400 truncate mt-0.5">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProjectModal(project);
                    }}
                    className="w-8 h-8 inline-flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0"
                    aria-label={`Inspect ${project.title} architecture`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. MIDDLE 3-COLUMN BENTO GRID:                                     */}
        {/*    Col 1: INITIATIVES & SKILLS | Col 2: WORK PROCESS | Col 3: QUOTE */}
        {/* ================================================================= */}
        <section
          id="skills"
          className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#1E1E22]"
        >
          {/* --------------------------------------------------------------- */}
          {/* COLUMN 1: INITIATIVES & SKILLS (5 Cols)                         */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-5 py-10 lg:pr-8 border-b lg:border-b-0 lg:border-r border-[#1E1E22] flex flex-col justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-[0.08em] text-white mb-6">
                INITIATIVES &amp; SKILLS
              </h2>

              {/* CORE INITIATIVES SUBSECTION */}
              <div className="mb-7">
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#DC1E28] mb-3">
                  LEADERSHIP &amp; CREDENTIALS
                </h3>

                <div className="divide-y divide-[#1E1E22] border-b border-[#1E1E22]">
                  {EDUCATION_LIST.map((edu) => (
                    <div
                      key={edu.id}
                      className="py-3.5 flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white">
                          {edu.degree}
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5">
                          {edu.institution}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#DC1E28] tabular-nums whitespace-nowrap shrink-0 pt-0.5">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS SUBSECTION */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#DC1E28]">
                    SKILLS &amp; STACK
                  </h3>
                  <span className="text-[11px] text-zinc-500">
                    Click any stack to inspect
                  </span>
                </div>

                {/* Rectangular Outlined Skill Grid Matching Reference */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SKILLS_LIST.map((skill) => {
                    const isSelected = activeSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => setActiveSkill(skill)}
                        className={`px-2.5 py-2 text-[10px] font-semibold uppercase tracking-[0.06em] rounded-sm border text-center transition-colors whitespace-nowrap shrink-0 truncate ${
                          isSelected
                            ? 'bg-[#DC1E28]/15 border-[#DC1E28] text-white'
                            : 'bg-[#0D0D10] border-[#242429] text-zinc-300 hover:border-zinc-500 hover:text-white'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Interactive Skill Detail Spotlight */}
            <div className="mt-6 p-4 bg-[#0D0D10] border border-[#1F1F24] rounded-sm">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold uppercase tracking-wider text-white">
                  {activeSkill.name}
                </span>
                <span className="font-mono text-[11px] text-[#DC1E28] tabular-nums">
                  {activeSkill.experience} · {activeSkill.category}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {activeSkill.description}
              </p>
              <div className="mt-2.5 pt-2.5 border-t border-[#1A1A1F] flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-400">
                <span className="text-zinc-500">Powering:</span>
                {activeSkill.relatedProjects.map((projTitle, idx) => (
                  <React.Fragment key={projTitle}>
                    <button
                      type="button"
                      onClick={() => {
                        const found = PROJECTS.find(
                          (p) => p.title === projTitle
                        );
                        if (found) setActiveProjectModal(found);
                      }}
                      className="text-zinc-300 hover:text-[#DC1E28] underline-offset-2 hover:underline transition-colors"
                    >
                      {projTitle}
                    </button>
                    {idx < activeSkill.relatedProjects.length - 1 && (
                      <span aria-hidden="true" className="text-zinc-600">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* COLUMN 2: WORK PROCESS (4 Cols)                                 */}
          {/* --------------------------------------------------------------- */}
          <div
            id="process"
            className="lg:col-span-4 py-10 lg:px-8 border-b lg:border-b-0 lg:border-r border-[#1E1E22]"
          >
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-[0.08em] text-white mb-6">
              WORK PROCESS
            </h2>

            <div className="relative space-y-5">
              {WORK_PROCESS.map((step, index) => {
                const isExpanded = activeProcessIndex === index;
                return (
                  <div key={step.number} className="relative">
                    {index < WORK_PROCESS.length - 1 && (
                      <div
                        className="pointer-events-none absolute left-[52px] top-9 bottom-[-20px] w-px bg-[#26262C]"
                        aria-hidden="true"
                      />
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        setActiveProcessIndex(isExpanded ? null : index)
                      }
                      className="w-full text-left flex items-start gap-4 group"
                    >
                      <span className="font-display text-lg font-bold text-[#DC1E28] tabular-nums w-6 pt-1.5 shrink-0">
                        {step.number}
                      </span>

                      <div
                        className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isExpanded
                            ? 'bg-[#DC1E28] border-[#DC1E28] text-white'
                            : 'bg-[#0E0E12] border-[#DC1E28]/50 group-hover:border-[#DC1E28]'
                        }`}
                      >
                        {renderProcessIcon(step.iconName)}
                      </div>

                      <div className="flex-1 min-w-0 pt-0.5">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#DC1E28] group-hover:text-white transition-colors">
                            {step.title}
                          </h3>
                          <span className="font-mono text-[10px] text-zinc-500 tabular-nums">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                          {step.description}
                        </p>

                        {isExpanded && (
                          <div className="mt-2.5 pt-2.5 border-t border-[#1E1E24] space-y-1 text-[11px] text-zinc-300">
                            {step.deliverables.map((item) => (
                              <div
                                key={item}
                                className="flex items-center gap-2"
                              >
                                <span className="text-[#DC1E28]">·</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* COLUMN 3: EDITORIAL QUOTE CARD WITH "AK" SIGNATURE (3 Cols)     */}
          {/* --------------------------------------------------------------- */}
          <div
            className="lg:col-span-3 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden"
            style={{
              background:
                'linear-gradient(155deg, #3D0A0E 0%, #240609 48%, #0E0506 100%)',
            }}
          >
            <div
              className="pointer-events-none absolute -right-16 top-16 w-56 h-56 rounded-full blur-[60px] opacity-30"
              style={{
                background:
                  'radial-gradient(circle, #DC1E28 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div
                  className="font-display text-6xl leading-none text-[#DC1E28] select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Quotation Switcher Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveQuoteIndex(
                        (prev) =>
                          (prev - 1 + QUOTATIONS_LIST.length) %
                          QUOTATIONS_LIST.length
                      )
                    }
                    className="w-6 h-6 rounded border border-white/15 hover:border-[#DC1E28] flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                    aria-label="Previous quotation"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveQuoteIndex(
                        (prev) => (prev + 1) % QUOTATIONS_LIST.length
                      )
                    }
                    className="w-6 h-6 rounded border border-white/15 hover:border-[#DC1E28] flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                    aria-label="Next quotation"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <blockquote className="mt-2 text-base sm:text-lg font-medium text-zinc-100 leading-relaxed text-balance">
                {currentQuote.quote}
              </blockquote>

              <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.12em] text-zinc-400">
                {currentQuote.context}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="font-script text-4xl sm:text-5xl text-white tracking-wide">
                    {currentQuote.author}
                  </span>
                  <span className="w-10 h-px bg-zinc-400/60 mt-2" />
                </div>

                <div className="flex items-center gap-1">
                  {QUOTATIONS_LIST.map((q, idx) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setActiveQuoteIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === activeQuoteIndex
                          ? 'w-5 bg-[#DC1E28]'
                          : 'w-1.5 bg-white/25 hover:bg-white/50'
                      }`}
                      aria-label={`Select quotation ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-300 leading-relaxed">
                LET&apos;S CREATE
                <br />
                SOMETHING GREAT
                <br />
                TOGETHER.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <CrimsonStar className="w-3.5 h-3.5 text-[#DC1E28]" />
                <button
                  type="button"
                  onClick={() =>
                    openInquiryWithScope(
                      'Custom AI System / Interactive Prototype'
                    )
                  }
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:text-[#DC1E28] underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
                >
                  Start a Project →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. LICENSES & CERTIFICATIONS SECTION (Smooth Scroll Animation)     */}
        {/* ================================================================= */}
        <section
          id="certifications"
          className="py-10 border-b border-[#1E1E22] overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#DC1E28]" />
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-[0.1em] text-white">
                LICENSES &amp; CERTIFICATIONS — AK (CHANDU KYPUVARI)
              </h2>
            </div>

            <div className="hidden xl:block flex-1 h-px bg-[#1E1E22] mx-4" />

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400">
                <span className="text-[#DC1E28] font-semibold">4 VERIFIED</span>
                <span>·</span>
                <span>ANTHROPIC &amp; AWS</span>
              </div>

              <div className="flex items-center bg-[#111114] border border-[#1F1F24] rounded p-0.5">
                <button
                  type="button"
                  onClick={() => setCertViewMode('scroll')}
                  className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] rounded-sm transition-colors ${
                    certViewMode === 'scroll'
                      ? 'bg-[#DC1E28] text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Auto Scroll
                </button>
                <button
                  type="button"
                  onClick={() => setCertViewMode('grid')}
                  className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] rounded-sm transition-colors ${
                    certViewMode === 'grid'
                      ? 'bg-[#DC1E28] text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Grid View
                </button>
              </div>
            </div>
          </div>

          {certViewMode === 'scroll' ? (
            /* Continuous Smooth Horizontal Scroll Animation Track (Pauses on Hover) */
            <div
              className="relative w-full overflow-hidden py-2"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
              }}
            >
              <div className="animate-cert-marquee gap-6">
                {[...CERTIFICATIONS_LIST, ...CERTIFICATIONS_LIST].map(
                  (cert, idx) => (
                    <article
                      key={`${cert.id}-${idx}`}
                      onClick={() => setActiveCertModal(cert)}
                      className="w-[330px] sm:w-[380px] shrink-0 group cursor-pointer flex flex-col justify-between"
                    >
                      {/* Website-Harmonized Studio Frame matching SELECTED PROJECTS */}
                      <div className="relative overflow-hidden rounded-md bg-[#0E0E11] border border-[#222227] group-hover:border-[#DC1E28]/75 transition-colors">
                        {/* Top Studio Window Bar (No Overlapping Badge on the Certificate Image) */}
                        <div className="h-7 px-3 bg-[#121216] border-b border-[#1E1E24] flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="flex items-center gap-1 shrink-0">
                              <span className="w-2 h-2 rounded-full bg-[#DC1E28]/85" />
                              <span className="w-2 h-2 rounded-full bg-[#27272F]" />
                              <span className="w-2 h-2 rounded-full bg-[#27272F]" />
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-zinc-400 truncate">
                              {cert.issuer}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-[#DC1E28] shrink-0">
                            CERT {cert.number}
                          </span>
                        </div>

                        {/* Dark Studio Mat + Full-Bleed 4:3 Certificate Sheet */}
                        <div className="p-3 bg-gradient-to-b from-[#101014] to-[#0A0A0D]">
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] shadow-[0_10px_28px_rgba(0,0,0,0.65)] ring-1 ring-white/15">
                            <img
                              src={cert.imageUrl}
                              alt={`${cert.title} — ${cert.issuer} Certificate awarded to ${cert.recipient}`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                            />
                            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Numbered Editorial Metadata Row matching SELECTED PROJECTS */}
                      <div className="mt-3.5 pb-3 border-b border-[#1E1E22] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="font-display text-2xl sm:text-3xl font-bold text-[#DC1E28] tabular-nums leading-none shrink-0">
                            {cert.number}
                          </span>
                          <span
                            className="w-px h-7 bg-[#242429] shrink-0"
                            aria-hidden="true"
                          />
                          <div className="min-w-0">
                            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.06em] text-white group-hover:text-[#DC1E28] transition-colors truncate">
                              {cert.title}
                            </h3>
                            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-zinc-400 truncate mt-0.5">
                              {cert.recipient} · {cert.issuedDate}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveCertModal(cert);
                          }}
                          className="w-8 h-8 inline-flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0"
                          aria-label={`Inspect ${cert.title}`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>
          ) : (
            /* 4-Column Certificate Static Grid Optimized to Website Layout */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CERTIFICATIONS_LIST.map((cert) => (
                <article
                  key={cert.id}
                  onClick={() => setActiveCertModal(cert)}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  {/* Website-Harmonized Studio Frame matching SELECTED PROJECTS */}
                  <div className="relative overflow-hidden rounded-md bg-[#0E0E11] border border-[#222227] group-hover:border-[#DC1E28]/75 transition-colors">
                    {/* Top Studio Window Bar */}
                    <div className="h-7 px-3 bg-[#121216] border-b border-[#1E1E24] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="flex items-center gap-1 shrink-0">
                          <span className="w-2 h-2 rounded-full bg-[#DC1E28]/85" />
                          <span className="w-2 h-2 rounded-full bg-[#27272F]" />
                          <span className="w-2 h-2 rounded-full bg-[#27272F]" />
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-zinc-400 truncate">
                          {cert.issuer}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-[#DC1E28] shrink-0">
                        CERT {cert.number}
                      </span>
                    </div>

                    {/* Dark Studio Mat + Full-Bleed 4:3 Certificate Sheet */}
                    <div className="p-2.5 bg-gradient-to-b from-[#101014] to-[#0A0A0D]">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] shadow-[0_10px_28px_rgba(0,0,0,0.65)] ring-1 ring-white/15">
                        <img
                          src={cert.imageUrl}
                          alt={`${cert.title} — ${cert.issuer} Certificate awarded to ${cert.recipient}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Numbered Editorial Metadata Row */}
                  <div className="mt-3.5 pb-3 border-b border-[#1E1E22] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-display text-2xl font-bold text-[#DC1E28] tabular-nums leading-none shrink-0">
                        {cert.number}
                      </span>
                      <span
                        className="w-px h-7 bg-[#242429] shrink-0"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <h3 className="text-xs font-bold uppercase tracking-[0.06em] text-white group-hover:text-[#DC1E28] transition-colors truncate">
                          {cert.title}
                        </h3>
                        <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-400 truncate mt-0.5">
                          {cert.recipient}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCertModal(cert);
                      }}
                      className="w-7 h-7 inline-flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0"
                      aria-label={`Inspect ${cert.title}`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ================================================================= */}
        {/* 6. FOOTER / CONTACT SECTION ("AK — LET'S WORK TOGETHER")           */}
        {/* ================================================================= */}
        <footer id="contact" className="relative py-10 sm:py-12 overflow-hidden">
          {/* Background "AK" Watermark on the Footer */}
          <div
            className="select-none pointer-events-none absolute right-4 top-2 font-display font-bold uppercase leading-none tracking-[0.12em] text-white/[0.03]"
            style={{ fontSize: 'clamp(6rem, 18vw, 15rem)' }}
            aria-hidden="true"
          >
            AK
          </div>

          {/* Top Footer Identity Bar Featuring "AK" */}
          <div className="relative z-10 mb-8 pb-4 border-b border-[#1E1E22] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#DC1E28] text-white font-display text-sm font-bold uppercase tracking-[0.16em] rounded-sm">
                AK
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white">
                AK · CHANDU KYPUVARI · AI SYSTEMS &amp; FULL-STACK PORTFOLIO
              </span>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400">
              GITHUB: @ANOTHERKINGAK · SHADOWCODE
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (4 Cols): Headline, Copy, Freelance CTA */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative inline-block">
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.06em] text-white leading-tight">
                  LET&apos;S WORK
                  <br />
                  TOGETHER
                </h2>
                <CrimsonStar className="w-4 h-4 text-[#DC1E28] absolute -right-6 top-6" />
              </div>

              <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed max-w-[36ch]">
                Connect directly with <strong className="text-white">AK</strong>{' '}
                for AI engineering collaborations, SaaS partnerships, and
                interactive UI/UX client prototypes across the USA, UK, Germany,
                Italy, and worldwide.
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => openInquiryWithScope('New Project Inquiry with AK')}
                  className="group inline-flex items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-[#DC1E28]"
                >
                  <span className="w-9 h-9 rounded-full border border-[#DC1E28]/70 bg-[#DC1E28]/10 group-hover:bg-[#DC1E28] flex items-center justify-center text-white transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#DC1E28] group-hover:text-white transition-colors whitespace-nowrap shrink-0">
                    AVAILABLE FOR FREELANCE &amp; R&amp;D
                  </span>
                </button>
              </div>
            </div>

            {/* Middle Column (4 Cols): Contact Details List with Crimson-Ringed Icons */}
            <div className="lg:col-span-4 divide-y divide-[#1E1E22] border-y border-[#1E1E22] lg:border-y-0">
              {CONTACT_INFO.map((item) => {
                const isCopied = copiedContactId === item.id;
                return (
                  <div
                    key={item.id}
                    className="py-3 first:pt-1 last:pb-1 flex items-center justify-between gap-3 group"
                  >
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      onClick={(e) => {
                        if (item.id === 'location') {
                          e.preventDefault();
                          openInquiryWithScope('Global Remote Consultation');
                        }
                      }}
                      className="flex items-center gap-3.5 min-w-0 flex-1"
                    >
                      <span className="w-9 h-9 rounded-full border border-[#DC1E28]/60 bg-[#0E0E12] group-hover:border-[#DC1E28] group-hover:bg-[#DC1E28]/15 flex items-center justify-center shrink-0 transition-colors">
                        {renderContactIcon(item.type)}
                      </span>
                      <span className="text-xs sm:text-[13px] text-zinc-200 group-hover:text-white truncate transition-colors">
                        {item.value}
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopyContact(item.id, item.value)}
                      className="px-2 py-1 text-[11px] text-zinc-500 hover:text-zinc-200 inline-flex items-center gap-1 rounded transition-colors whitespace-nowrap shrink-0"
                      title={item.actionLabel}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="sr-only">{item.actionLabel}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right Column (4 Cols): Studio Desk Laptop + "A" Mug Showcase */}
            <div className="lg:col-span-4">
              <FooterLaptopShowcase
                onOpenInquiry={() =>
                  openInquiryWithScope('Interactive Portfolio Inquiry')
                }
              />
            </div>
          </div>

          {/* Quiet Copyright Bottom Row with AK Name */}
          <div className="relative z-10 mt-10 pt-5 border-t border-[#16161A] flex flex-wrap items-center justify-between gap-4 text-[11px] text-zinc-500">
            <div>
              © {new Date().getFullYear()} <strong className="text-zinc-300">AK</strong> (Chandu Kypuvari · ShadowCode · @anotherkingAk). All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              <span>AK · FADE CLI · HYDRA · POPCUT · V36 · NEEVE AI</span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-zinc-300 transition-colors whitespace-nowrap shrink-0"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Fullscreen Case Study Lightbox Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onSelectProject={(proj) => setActiveProjectModal(proj)}
        allProjects={PROJECTS}
        onStartProjectWithScope={(scopeTitle) =>
          openInquiryWithScope(scopeTitle)
        }
      />

      {/* Fullscreen Certificate Lightbox Modal (Official Certificate Only) */}
      {activeCertModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveCertModal(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#0B0B0E] border border-[#26262E] rounded-md overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#1E1E24]">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#DC1E28]">
                  {activeCertModal.issuer} · CERTIFICATE {activeCertModal.number}
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.06em] text-white">
                  {activeCertModal.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const idx = CERTIFICATIONS_LIST.findIndex(
                      (c) => c.id === activeCertModal.id
                    );
                    const prevIdx =
                      (idx - 1 + CERTIFICATIONS_LIST.length) %
                      CERTIFICATIONS_LIST.length;
                    setActiveCertModal(CERTIFICATIONS_LIST[prevIdx]);
                  }}
                  className="w-8 h-8 rounded bg-[#141419] border border-[#25252C] hover:border-[#DC1E28] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const idx = CERTIFICATIONS_LIST.findIndex(
                      (c) => c.id === activeCertModal.id
                    );
                    const nextIdx = (idx + 1) % CERTIFICATIONS_LIST.length;
                    setActiveCertModal(CERTIFICATIONS_LIST[nextIdx]);
                  }}
                  className="w-8 h-8 rounded bg-[#141419] border border-[#25252C] hover:border-[#DC1E28] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCertModal(null)}
                  className="w-8 h-8 rounded bg-[#141419] hover:bg-[#DC1E28] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close certificate preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Official Certificate Image Display */}
            <div className="p-5 sm:p-6 bg-[#070709] flex flex-col items-center">
              <div className="w-full max-w-2xl aspect-[4/3] overflow-hidden rounded border border-[#24242C] bg-[#101014] shadow-2xl ring-1 ring-white/15">
                <img
                  src={activeCertModal.imageUrl}
                  alt={activeCertModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full mt-5 pt-4 border-t border-[#1E1E24] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-white">
                    Awarded to: {activeCertModal.recipient}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {activeCertModal.issuedDate}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {activeCertModal.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#121217] border border-[#26262E] text-zinc-300 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Freelance Inquiry & Project Brief Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialScope={inquiryScope}
      />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, ArrowRight, Check, ExternalLink, Monitor, Smartphone } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectBrowserPreview } from './PortfolioArtwork';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  allProjects: ProjectItem[];
  onStartProjectWithScope: (scopeTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
  onStartProjectWithScope,
}) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const handleCopyHex = async (hex: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(hex);
      }
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = hex;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0C0C0E] border border-[#242429] rounded-lg overflow-hidden my-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header Bar */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#1F1F23] bg-[#09090B]">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="font-display text-lg font-bold text-[#DC1E28] tabular-nums">
              {project.number}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-white tracking-wider uppercase">
              {project.title}
            </span>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <span className="hidden sm:inline text-zinc-400">{project.category}</span>
            <span aria-hidden="true" className="hidden md:inline">
              ·
            </span>
            <span className="hidden md:inline font-mono text-zinc-400 tabular-nums">
              {project.year}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive Viewport Switcher */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-[#141418] border border-[#242429] rounded">
              <button
                type="button"
                onClick={() => setViewportMode('desktop')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                  viewportMode === 'desktop'
                    ? 'bg-[#242429] text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('mobile')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                  viewportMode === 'mobile'
                    ? 'bg-[#242429] text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 inline-flex items-center justify-center rounded border border-[#27272D] bg-[#141418] text-zinc-300 hover:text-white hover:border-[#DC1E28] transition-colors focus-visible:outline-2 focus-visible:outline-[#DC1E28]"
              aria-label="Close case study modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Scrollable Case Study Content */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Interactive Media Preview Frame */}
          <div className="bg-[#070708] border border-[#1E1E22] rounded-md p-4 sm:p-6 flex flex-col items-center justify-center">
            <div
              className={`transition-all duration-200 ${
                viewportMode === 'mobile' ? 'w-full max-w-[360px]' : 'w-full'
              }`}
            >
              <ProjectBrowserPreview projectId={project.id} interactiveMode />
            </div>
          </div>

          {/* Client & Role Unboxed Metadata Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-y border-[#1F1F23] text-xs">
            <div>
              <div className="text-zinc-500 uppercase tracking-wider mb-1">Client &amp; Partner</div>
              <div className="text-zinc-200 font-medium">{project.client}</div>
            </div>
            <div>
              <div className="text-zinc-500 uppercase tracking-wider mb-1">Role &amp; Architecture</div>
              <div className="text-zinc-200 font-medium">{project.role}</div>
            </div>
            <div>
              <div className="text-zinc-500 uppercase tracking-wider mb-1">Delivery Timeline</div>
              <div className="text-zinc-200 font-mono tabular-nums">
                {project.duration} · Completed {project.year}
              </div>
            </div>
          </div>

          {/* Quantitative Proof Metrics Row */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DC1E28] mb-4">
              Measured Outcome &amp; Performance
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.impactMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#101013] border border-[#1F1F24] rounded"
                >
                  <div className="font-display text-3xl font-bold text-[#DC1E28] tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {metric.label}
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    {metric.context}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative Split: Challenge vs Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3
                  id="modal-project-title"
                  className="text-lg font-semibold text-white tracking-tight"
                >
                  01. The Challenge
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  02. Execution &amp; Solution
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables & Color System */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-3">
                  Key Deliverables
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {project.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between py-1.5 border-b border-[#1A1A1E]"
                    >
                      <span>{item}</span>
                      <span className="font-mono text-xs text-zinc-500 tabular-nums">
                        0{idx + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-3">
                  Design System Palette (Click Swatch to Copy Hex)
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {project.palette.map((swatch) => (
                    <button
                      key={swatch.hex}
                      type="button"
                      onClick={() => handleCopyHex(swatch.hex)}
                      className="p-2.5 bg-[#121215] border border-[#242429] hover:border-zinc-500 rounded text-left transition-colors group"
                    >
                      <div
                        className="w-full h-7 rounded-sm border border-white/10 mb-2"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <div className="text-xs font-medium text-zinc-200 truncate">
                        {swatch.name}
                      </div>
                      <div className="font-mono text-[11px] text-zinc-400 flex items-center justify-between mt-0.5">
                        <span>{swatch.hex}</span>
                        {copiedHex === swatch.hex && (
                          <Check className="w-3 h-3 text-emerald-400" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Unboxed Stack Metadata */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-2">
                  Capabilities Applied
                </h4>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-300">
                  {project.skillsUsed.map((skill, i) => (
                    <React.Fragment key={skill}>
                      <span>{skill}</span>
                      {i < project.skillsUsed.length - 1 && (
                        <span aria-hidden="true" className="text-zinc-600">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Modal Navigation & CTA Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-[#1F1F23] bg-[#09090B]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-[#141418] border border-[#242429] rounded transition-colors whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev: {prevProject.title}</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-[#141418] border border-[#242429] rounded transition-colors whitespace-nowrap shrink-0"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onStartProjectWithScope(`${project.title} (${project.category})`);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#DC1E28] hover:bg-[#B91820] rounded transition-colors whitespace-nowrap shrink-0"
            >
              <span>Commission Similar Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

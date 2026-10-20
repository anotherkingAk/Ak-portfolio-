import React, { useState } from 'react';

interface PortraitProps {
  customPortraitUrl: string | null;
  onUploadPortrait?: (url: string) => void;
}

/**
 * Main Character Cutout Portrait of AK (/assets/aistudio/file_000000003a1c81f49ce138c208390112_a88d6dcd.png)
 * - Uses the true-alpha transparent cutout (/assets/aistudio/ak_cutout_v4.png) extracted directly
 *   from /assets/aistudio/file_000000003a1c81f49ce138c208390112_a88d6dcd.png so ONLY the main character
 *   appears over the crimson PORTFOLIO masthead with zero checkerboard background.
 */
export const DesignerHeroPortrait: React.FC<PortraitProps> = ({
  customPortraitUrl,
}) => {
  const portraitSrc =
    customPortraitUrl || '/assets/aistudio/ak_cutout_v4.png';

  return (
    <div className="relative w-full h-full flex items-end justify-center select-none">
      {/* Subtle dark crimson ambient glow behind AK's shoulders */}
      <div
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full opacity-45 blur-[85px]"
        style={{
          background:
            'radial-gradient(circle, rgba(220,30,40,0.52) 0%, rgba(120,10,16,0.22) 55%, rgba(7,7,8,0) 100%)',
        }}
      />

      {/* Direct reference to uploaded asset /assets/aistudio/file_000000003a1c81f49ce138c208390112_a88d6dcd.png */}
      <img
        src="/assets/aistudio/file_000000003a1c81f49ce138c208390112_a88d6dcd.png"
        alt=""
        aria-hidden="true"
        className="hidden"
      />

      <div className="relative z-10 w-full max-w-[460px] flex items-end justify-center overflow-visible">
        <img
          src={portraitSrc}
          alt="AK (Chandu Kypuvari) — Main Character Portrait"
          referrerPolicy="no-referrer"
          className="w-full h-auto max-h-[540px] object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.95)] transition-transform duration-300"
          style={{
            maskImage:
              'linear-gradient(to bottom, black 88%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 88%, transparent 100%)',
          }}
        />
      </div>
    </div>
  );
};

/**
 * Renders the 4-point crimson star icon seen in the reference layout
 */
export const CrimsonStar: React.FC<{ className?: string }> = ({
  className = 'w-4 h-4 text-[#DC1E28]',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 1 C12.7 7.8 16.2 11.3 23 12 C16.2 12.7 12.7 16.2 12 23 C11.3 16.2 7.8 12.7 1 12 C7.8 11.3 11.3 7.8 12 1 Z" />
  </svg>
);

/**
 * Bespoke Browser / Terminal Mockup Cards for the User's Real Projects
 */
export const ProjectBrowserPreview: React.FC<{
  projectId: string;
  interactiveMode?: boolean;
}> = ({ projectId }) => {
  const uid = React.useId().replace(/:/g, '');

  // 01. FADE CODE CLI & FADE LLM (V3 Hybrid Terminal UI + Flame Mascot + 3.098T MoE / 457.8M Lite)
  if (projectId === 'fade-code-cli') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#09090B] rounded-md overflow-hidden border border-[#222226] select-none flex flex-col">
        {/* Terminal Window Bar */}
        <div className="h-6 px-3 bg-[#121215] border-b border-[#1E1E22] flex items-center justify-between text-[8px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC1E28]" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          </div>
          <span className="font-mono tracking-wider text-zinc-300">
            anotherkingAk/Fade-Cli · v3.0-hybrid
          </span>
          <span className="font-mono text-[7px] text-[#DC1E28]">TERMUX / DESKTOP</span>
        </div>

        {/* Hybrid CLI + Flame Mascot Interface */}
        <div className="relative flex-1 p-4 sm:p-5 flex items-center justify-between overflow-hidden bg-gradient-to-br from-[#121216] via-[#09090B] to-[#1A070A]">
          {/* Left: Brand & Model Spec */}
          <div className="relative z-10 w-[48%]">
            <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#DC1E28]">
              AI CODING AGENT
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white leading-none mt-1">
              FADE CODE
            </div>
            <div className="font-mono text-[9px] text-zinc-400 mt-1">
              V1.1 → V3 HYBRID UI
            </div>
            <div className="mt-3 space-y-1 font-mono text-[7.5px] text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="text-[#DC1E28]">&gt;</span>
                <span>Fade MoE: 3.098T (44.5B act)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#DC1E28]">&gt;</span>
                <span>Fade Lite: 457.8M (230MB GGUF)</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Box + Flame Mascot SVG */}
          <div className="relative z-10 w-[52%] bg-[#0D0D11] border border-[#25252C] rounded p-2.5 font-mono text-[7.5px] shadow-xl">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#1E1E24]">
              <span className="text-zinc-300 font-semibold">$ fade agent --verify</span>
              {/* Flame Mascot Icon */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#DC1E28]" fill="currentColor">
                <path d="M12 2C9.5 6 7 8.5 7 13a5 5 0 0 0 10 0c0-2.5-1.2-4.5-2.5-6-.4 1.8-1.5 2.5-2.5 2.5 0-2.5.8-4.8 0-7.5z" />
              </svg>
            </div>
            <div className="space-y-1 text-zinc-400 leading-tight">
              <div className="text-zinc-300">✓ Workspace tree indexed (42 files)</div>
              <div className="text-emerald-400">+ src/agent/skills_router.py</div>
              <div className="text-emerald-400">+ fade_lite_457m_q4.gguf ready</div>
              <div className="text-[#DC1E28] pt-0.5">Permission: [Allow Edit] [Diff]</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 02. POPCUT & V36 ENGINE (Light/Editorial Contrast Card matching middle card aesthetic)
  if (projectId === 'popcut-v36') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#EFECE6] rounded-md overflow-hidden border border-[#2A2A2E] select-none flex flex-col">
        {/* Light Studio Top Bar */}
        <div className="h-6 px-3 bg-[#E4DFD7] border-b border-[#D5CFC7] flex items-center justify-between text-[8px] text-stone-600">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC1E28]" />
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
          </div>
          <span className="font-mono tracking-wider text-stone-700">popcut.studio · v36-engine</span>
          <span className="text-[7px] font-mono uppercase text-stone-600">LOCAL + TURBO</span>
        </div>

        {/* Video Editor + V36 Short-Form Clipping Showcase */}
        <div className="relative flex-1 p-4 sm:p-5 flex items-center justify-between overflow-hidden bg-gradient-to-br from-[#F7F4EF] via-[#EDE8E0] to-[#DFD8CE]">
          {/* Left Typography */}
          <div className="relative z-10 w-[46%]">
            <div className="text-[7.5px] font-bold uppercase tracking-[0.18em] text-[#DC1E28]">
              ZERO EXTERNAL AI APIS
            </div>
            <div className="font-sans text-base sm:text-lg font-bold tracking-tight text-stone-900 leading-[1.12] mt-1">
              PopCut &amp;
              <br />
              V36 Video
              <br />
              Engine
            </div>
            <div className="mt-2 w-8 h-[1.5px] bg-stone-900" />
            <p className="mt-1.5 text-[7.5px] text-stone-600 leading-snug">
              Local timeline rendering + 30–60s viral hook clipping.
            </p>
          </div>

          {/* Right Mini Video NLE Timeline & 9:16 Reel Preview Frame */}
          <div className="relative z-10 w-[52%] bg-[#111114] border border-stone-800 rounded p-2.5 text-white shadow-lg">
            <div className="flex items-center justify-between gap-2 mb-2">
              {/* 9:16 Short Clip Frame */}
              <div className="w-11 h-16 rounded-sm bg-gradient-to-b from-[#2A0B0E] to-[#09090B] border border-[#DC1E28]/60 flex flex-col items-center justify-between p-1 shrink-0">
                <span className="text-[5.5px] font-mono text-[#DC1E28]">9:16 REEL</span>
                <div className="w-3.5 h-3.5 rounded-full bg-[#DC1E28] flex items-center justify-center">
                  <div className="w-0 h-0 border-y-[2.5px] border-y-transparent border-l-[4px] border-l-white ml-0.5" />
                </div>
                <span className="text-[5px] bg-black/70 px-1 rounded text-white">AUTO-SUB</span>
              </div>

              {/* Multi-Track NLE Timeline */}
              <div className="flex-1 space-y-1.5 font-mono text-[6.5px]">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>HOOK SCORE: 98%</span>
                  <span className="text-[#DC1E28]">00:45.12</span>
                </div>
                <div className="h-2.5 bg-[#1C1C22] rounded-sm overflow-hidden flex">
                  <div className="w-[35%] bg-zinc-600" />
                  <div className="w-[45%] bg-[#DC1E28]" />
                  <div className="w-[20%] bg-zinc-700" />
                </div>
                <div className="h-2 bg-[#1C1C22] rounded-sm overflow-hidden flex gap-0.5 p-0.5">
                  <div className="flex-1 bg-zinc-400/40 rounded-xs" />
                  <div className="flex-1 bg-[#DC1E28]/70 rounded-xs" />
                  <div className="flex-1 bg-zinc-400/40 rounded-xs" />
                </div>
                <div className="text-[6px] text-zinc-400 truncate">
                  Next.js 16 · BullMQ · Local Render
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 03. HYDRA & A-GRAPH SWARM (Directed Multi-Agent Security & Swarm Topology)
  if (projectId === 'hydra-agraph-swarm') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#0B0B0D] rounded-md overflow-hidden border border-[#222226] select-none flex flex-col">
        <div className="h-6 px-3 bg-[#121215] border-b border-[#1E1E22] flex items-center justify-between text-[8px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          </div>
          <span className="font-mono tracking-wider text-zinc-400">hydra.agraph-swarm.ai</span>
          <span className="text-[7px] tracking-widest uppercase text-[#DC1E28]">7-LAYER GRAPH</span>
        </div>

        <div className="relative flex-1 p-4 sm:p-5 flex items-center justify-between overflow-hidden bg-gradient-to-r from-[#0B0B0E] via-[#121014] to-[#22080C]">
          <div className="relative z-10 w-[46%]">
            <div className="font-sans text-base sm:text-lg font-bold tracking-wider text-white leading-[1.12] uppercase">
              HYDRA &amp;
              <br />
              A-GRAPH
              <br />
              SWARM
            </div>
            <p className="mt-2.5 text-[7px] tracking-[0.18em] uppercase text-[#DC1E28]">
              GRAPH SECURITY &amp; VERIFICATION
            </p>
          </div>

          {/* Directed A-Graph Topology SVG */}
          <div className="relative z-10 w-[54%]">
            <svg viewBox="0 0 200 130" className="w-full h-auto">
              <defs>
                <radialGradient id={`graphGlow-${uid}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#DC1E28" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="105" cy="65" r="55" fill={`url(#graphGlow-${uid})`} />
              {/* Graph Edges */}
              <line x1="100" y1="24" x2="48" y2="64" stroke="#52525B" strokeWidth="1.2" />
              <line x1="100" y1="24" x2="100" y2="64" stroke="#DC1E28" strokeWidth="1.5" />
              <line x1="100" y1="24" x2="152" y2="64" stroke="#52525B" strokeWidth="1.2" />
              <line x1="48" y1="64" x2="100" y2="104" stroke="#52525B" strokeWidth="1.2" />
              <line x1="100" y1="64" x2="100" y2="104" stroke="#DC1E28" strokeWidth="1.5" />
              <line x1="152" y1="64" x2="100" y2="104" stroke="#52525B" strokeWidth="1.2" />

              {/* Coordinator Node */}
              <circle cx="100" cy="24" r="11" fill="#18181B" stroke="#DC1E28" strokeWidth="2" />
              <text x="100" y="26.5" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontFamily="JetBrains Mono, monospace">
                COORD
              </text>

              {/* Specialist Nodes */}
              <circle cx="48" cy="64" r="10" fill="#121216" stroke="#71717A" strokeWidth="1.2" />
              <text x="48" y="66" textAnchor="middle" fill="#D4D4D8" fontSize="5.5" fontFamily="JetBrains Mono, monospace">
                SEC-1
              </text>

              <circle cx="100" cy="64" r="10" fill="#121216" stroke="#DC1E28" strokeWidth="1.5" />
              <text x="100" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontFamily="JetBrains Mono, monospace">
                GRAPH
              </text>

              <circle cx="152" cy="64" r="10" fill="#121216" stroke="#71717A" strokeWidth="1.2" />
              <text x="152" y="66" textAnchor="middle" fill="#D4D4D8" fontSize="5.5" fontFamily="JetBrains Mono, monospace">
                AGENT
              </text>

              {/* Verification Engine Node */}
              <rect x="72" y="94" width="56" height="18" rx="3" fill="#DC1E28" />
              <text x="100" y="105.5" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontFamily="JetBrains Mono, monospace" fontWeight="600">
                VERIFY &amp; EXEC
              </text>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // 04. NEEVE AI & VOIDURL (MonetizeLink.pro + 5-Role Mobile App Builder Swarm)
  if (projectId === 'neeve-ai-voidurl') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#0B0B0D] rounded-md overflow-hidden border border-[#222226] select-none flex flex-col">
        <div className="h-6 px-3 bg-[#121215] border-b border-[#1E1E22] flex items-center justify-between text-[8px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC1E28]" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          </div>
          <span className="font-mono tracking-wider text-zinc-300">monetizelink.pro · Neev-Ai</span>
          <span className="text-[7px] tracking-widest uppercase text-zinc-500">EXPO / EAS</span>
        </div>
        <div className="relative flex-1 p-5 flex items-center justify-between bg-gradient-to-br from-[#141418] via-[#0B0B0E] to-[#1D080B]">
          <div className="z-10 w-[52%]">
            <div className="text-[7.5px] font-mono tracking-[0.2em] text-[#DC1E28] uppercase">
              PM · DBA · UI · ENG · QA
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white mt-1">
              NEEVE AI &amp; VOIDURL
            </div>
            <p className="mt-2 text-[8px] text-zinc-400 leading-relaxed">
              Multi-agent mobile app studio + link monetization gateway.
            </p>
          </div>
          <div className="w-[44%] bg-[#111115] border border-[#27272E] rounded p-2.5 font-mono text-[7px] space-y-1.5">
            <div className="text-white font-semibold">Swarm Pipeline</div>
            <div className="flex justify-between text-zinc-400">
              <span>Supabase Schema</span>
              <span className="text-emerald-400">READY</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Expo iOS/Android</span>
              <span className="text-[#DC1E28]">BUILDING</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>VoidUrl Gateway</span>
              <span className="text-zinc-200">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 05. SHOWDO CODE & AGENTS VILLAGE (6-Tier Execution Engine + 24 AI Agents)
  if (projectId === 'agents-village-showdo') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#0B0B0D] rounded-md overflow-hidden border border-[#222226] select-none flex flex-col">
        <div className="h-6 px-3 bg-[#121215] border-b border-[#1E1E22] flex items-center justify-between text-[8px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          </div>
          <span className="font-mono tracking-wider text-zinc-300">showdocode.engine · 24-agents</span>
          <span className="text-[7px] tracking-widest uppercase text-[#DC1E28]">6 TIERS</span>
        </div>
        <div className="relative flex-1 p-5 flex items-center justify-between bg-gradient-to-tr from-[#09090B] via-[#121216] to-[#26080C]">
          <div className="z-10 w-[50%]">
            <div className="text-[7.5px] font-mono tracking-[0.2em] text-[#DC1E28] uppercase">
              WORKFLOW AUTOMATION
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white mt-1">
              SHOWDO CODE
            </div>
            <p className="mt-1.5 text-[8px] text-zinc-400">
              6-Tier Queue Engine + 24-Agent Village Orchestrator.
            </p>
          </div>
          <div className="w-[46%] grid grid-cols-2 gap-1.5 font-mono text-[6.5px]">
            {['1. ASYNC QUEUE', '2. REALTIME SYNC', '3. CRON SCHED', '4. AI AGENT', '5. WEBSOCKET', '6. EDGE NODE'].map(
              (tier, i) => (
                <div
                  key={tier}
                  className={`p-1.5 rounded border ${
                    i === 0 || i === 3
                      ? 'bg-[#DC1E28]/20 border-[#DC1E28] text-white'
                      : 'bg-[#121216] border-[#25252C] text-zinc-400'
                  }`}
                >
                  {tier}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  // 06. SENTINEL NPU & DEEPFAKE SHIELD (~100M On-Device Edge Model + OWASP LLM Security)
  if (projectId === 'sentinel-npu-security') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#0B0B0D] rounded-md overflow-hidden border border-[#222226] select-none flex flex-col">
        <div className="h-6 px-3 bg-[#121215] border-b border-[#1E1E22] flex items-center justify-between text-[8px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC1E28]" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          </div>
          <span className="font-mono tracking-wider text-zinc-300">sentinel.npu · ~100M-edge</span>
          <span className="text-[7px] tracking-widest uppercase text-zinc-500">ON-DEVICE AI</span>
        </div>
        <div className="relative flex-1 p-5 flex items-center justify-between bg-gradient-to-br from-[#0A0A0C] via-[#121216] to-[#230B0E]">
          <div className="z-10 w-[52%]">
            <div className="text-[7.5px] font-mono tracking-[0.2em] text-[#DC1E28] uppercase">
              NPU + DEEPFAKE SHIELD
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white mt-1">
              SENTINEL EDGE
            </div>
            <p className="mt-1.5 text-[8px] text-zinc-400">
              Custom ~100M param model scanning SMS, URLs, QR &amp; media.
            </p>
          </div>
          <svg viewBox="0 0 130 120" className="w-[42%] h-auto">
            <path
              d="M65 14 L108 30 L108 64 C108 90, 65 108, 65 108 C65 108, 22 90, 22 64 L22 30 Z"
              fill="#121216"
              stroke="#DC1E28"
              strokeWidth="2"
            />
            <rect x="47" y="44" width="36" height="32" rx="3" fill="#09090B" stroke="#71717A" strokeWidth="1.2" />
            <text x="65" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="700">
              100M
            </text>
          </svg>
        </div>
      </div>
    );
  }

  // 07. NATIVE ANDROID AI IDE (Mobile Code Editor + Permissioned AI Agent Panel)
  if (projectId === 'android-ai-ide') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#0B0B0D] rounded-md overflow-hidden border border-[#222226] select-none flex flex-col">
        <div className="h-6 px-3 bg-[#121215] border-b border-[#1E1E22] flex items-center justify-between text-[8px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          </div>
          <span className="font-mono tracking-wider text-zinc-300">AndroidIDE-AI · MCP + Skills</span>
          <span className="text-[7px] tracking-widest uppercase text-[#DC1E28]">MOBILE IDE</span>
        </div>
        <div className="relative flex-1 p-4 sm:p-5 flex items-center justify-between bg-gradient-to-br from-[#101014] via-[#09090B] to-[#1E080B]">
          <div className="w-[48%]">
            <div className="text-[7.5px] font-mono tracking-[0.2em] text-[#DC1E28] uppercase">
              LIVE MOBILE CODING
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white mt-1">
              ANDROID AI IDE
            </div>
            <p className="mt-1.5 text-[8px] text-zinc-400">
              Side-by-side editor + permissioned AI diff chat on phone.
            </p>
          </div>
          <div className="w-[48%] bg-[#0D0D11] border border-[#27272E] rounded p-2 font-mono text-[6.5px] grid grid-cols-2 gap-1.5">
            <div className="p-1.5 bg-[#141419] rounded">
              <div className="text-zinc-300 mb-1">MainActivity.kt</div>
              <div className="text-emerald-400">+ mcp.loadSkill()</div>
              <div className="text-zinc-500">fun onBuild()</div>
            </div>
            <div className="p-1.5 bg-[#1A090C] border border-[#DC1E28]/40 rounded">
              <div className="text-[#DC1E28] font-semibold mb-1">AI Agent</div>
              <div className="text-zinc-300">Apply 14-line patch?</div>
              <div className="mt-1 text-white bg-[#DC1E28] px-1 py-0.5 rounded text-center">
                Approve
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 08. ALEX BOT, CLOUD STORAGE & BOT PAAS
  if (projectId === 'telegram-paas-alex') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#0B0B0D] rounded-md overflow-hidden border border-[#222226] select-none flex flex-col">
        <div className="h-6 px-3 bg-[#121215] border-b border-[#1E1E22] flex items-center justify-between text-[8px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          </div>
          <span className="font-mono tracking-wider text-zinc-300">alex-bot · deploy-paas.cloud</span>
          <span className="text-[7px] tracking-widest uppercase text-zinc-500">BOT INFRA</span>
        </div>
        <div className="relative flex-1 p-5 flex items-center justify-between bg-gradient-to-br from-[#0D0D10] via-[#121217] to-[#21090C]">
          <div className="w-[50%]">
            <div className="text-[7.5px] font-mono tracking-[0.2em] text-[#DC1E28] uppercase">
              TE · KN · UR · EN
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white mt-1">
              ALEX &amp; BOT PAAS
            </div>
            <p className="mt-1.5 text-[8px] text-zinc-400">
              Multilingual media bot, cloud storage &amp; 1-click deployer.
            </p>
          </div>
          <div className="w-[46%] bg-[#111115] border border-[#27272E] rounded p-2.5 font-mono text-[6.8px] space-y-1">
            <div className="flex justify-between text-zinc-300">
              <span>alex-watermark-worker</span>
              <span className="text-emerald-400">RUNNING</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>tg-storage-indexer</span>
              <span className="text-emerald-400">RUNNING</span>
            </div>
            <div className="pt-1 flex gap-1">
              <span className="px-1.5 py-0.5 bg-[#DC1E28] text-white rounded-xs">Restart</span>
              <span className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded-xs">Env Vars</span>
              <span className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded-xs">Logs</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 09. GLOBAL WEB STUDIO & SOCIAL AI (Concept Kart, US/UK/DE/IT SMBs & Veo Social Manager)
  return (
    <div className="relative w-full aspect-[16/10] bg-[#0B0B0D] rounded-md overflow-hidden border border-[#222226] select-none flex flex-col">
      <div className="h-6 px-3 bg-[#121215] border-b border-[#1E1E22] flex items-center justify-between text-[8px] text-zinc-500">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC1E28]" />
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
        </div>
        <span className="font-mono tracking-wider text-zinc-300">studio.shadowcode · US/UK/DE/IT</span>
        <span className="text-[7px] tracking-widest uppercase text-zinc-500">CLIENT + VEO</span>
      </div>
      <div className="relative flex-1 p-5 flex items-center justify-between bg-gradient-to-br from-[#0A0A0C] via-[#121216] to-[#230B0E]">
        <div className="z-10 w-[54%]">
          <div className="text-[7.5px] font-mono tracking-[0.2em] text-[#DC1E28] uppercase">
            E-COMMERCE &amp; CREATOR SAAS
          </div>
          <div className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white mt-1">
            WEB &amp; SOCIAL AI
          </div>
          <p className="mt-1.5 text-[8px] text-zinc-400">
            Interactive brand prototypes (Concept Kart) + Social AI Manager.
          </p>
        </div>
        <div className="w-[42%] bg-[#121216] border border-[#27272E] rounded p-2.5 font-mono text-[6.8px] space-y-1">
          <div className="text-white font-semibold">Active Markets</div>
          <div className="text-zinc-400">USA · UK · Germany · Italy</div>
          <div className="text-[#DC1E28]">+ Veo Short Video Gen</div>
          <div className="text-zinc-400">+ Nomadtable Android PRD</div>
        </div>
      </div>
    </div>
  );
};

/**
 * Footer Laptop + Matte Black "S" (ShadowCode) Mug Studio Showcase
 */
export const FooterLaptopShowcase: React.FC<{
  onOpenInquiry: () => void;
}> = ({ onOpenInquiry }) => {
  const [screenSlide, setScreenSlide] = useState<number>(0);

  const slides = [
    {
      kicker: 'AK · SHADOWCODE · SHOWDO CODE',
      headline: ['AK', 'FADE CLI', 'A-GRAPH', 'POPCUT'],
      metric: '18+ AI & SAAS SYSTEMS',
    },
    {
      kicker: 'AK · CUSTOM LLM & EDGE R&D',
      headline: ['3.098T MOE', '457M LITE', 'SENTINEL', '100M NPU'],
      metric: 'MIT OPEN SOURCE + EDGE',
    },
    {
      kicker: 'AK · ANTHROPIC & AWS CERTIFIED',
      headline: ['AI FLUENCY', 'CLAUDE 101', 'AWS PROMPT', 'ARCHITECT'],
      metric: '4 VERIFIED CERTIFICATES',
    },
  ];

  const current = slides[screenSlide];

  return (
    <div className="relative w-full flex items-end justify-center lg:justify-end pt-4 select-none">
      {/* Subtle crimson ambient backlight behind laptop */}
      <div
        className="pointer-events-none absolute right-8 bottom-8 w-64 h-44 rounded-full blur-[65px] opacity-35"
        style={{
          background:
            'radial-gradient(circle, rgba(220,30,40,0.5) 0%, rgba(7,7,8,0) 75%)',
        }}
      />

      <div className="relative w-full max-w-[440px]">
        <svg
          viewBox="0 0 480 300"
          className="w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]"
          role="img"
          aria-label="Studio desk with matte black AK mug and laptop displaying AK AI systems portfolio"
        >
          <defs>
            <linearGradient id="laptopBezel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27272A" />
              <stop offset="50%" stopColor="#131316" />
              <stop offset="100%" stopColor="#09090B" />
            </linearGradient>
            <linearGradient id="laptopBase" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#18181B" />
              <stop offset="50%" stopColor="#2D2D32" />
              <stop offset="100%" stopColor="#121215" />
            </linearGradient>
            <linearGradient id="mugBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#262629" />
              <stop offset="55%" stopColor="#141417" />
              <stop offset="100%" stopColor="#08080A" />
            </linearGradient>
            <linearGradient id="screenCrimsonShape" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC1E28" />
              <stop offset="100%" stopColor="#6B0B10" />
            </linearGradient>
          </defs>

          <ellipse cx="260" cy="272" rx="210" ry="16" fill="#000000" opacity="0.85" />

          {/* Matte Black Ceramic Coffee Mug with "A" / "AK" Monogram */}
          <g transform="translate(34, 168)">
            <path
              d="M18 16 C2 16, 2 58, 18 58"
              fill="none"
              stroke="#1C1C1F"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <rect
              x="16"
              y="6"
              width="56"
              height="68"
              rx="6"
              fill="url(#mugBody)"
              stroke="#2E2E33"
              strokeWidth="1"
            />
            <ellipse
              cx="44"
              cy="6"
              rx="28"
              ry="5"
              fill="#0D0D0F"
              stroke="#34343A"
              strokeWidth="1"
            />
            <text
              x="44"
              y="48"
              textAnchor="middle"
              fill="#A1A1AA"
              fontSize="19"
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontWeight="700"
            >
              A
            </text>
          </g>

          {/* Open Laptop Screen Frame */}
          <g>
            <polygon
              points="132,20 446,32 432,226 118,214"
              fill="url(#laptopBezel)"
              stroke="#34343A"
              strokeWidth="1.5"
            />
            <polygon
              points="140,30 436,41 424,214 128,203"
              fill="#09090B"
              stroke="#1F1F23"
              strokeWidth="1"
            />

            <polygon
              points="318,65 362,67 328,136 286,134"
              fill="url(#screenCrimsonShape)"
              opacity="0.9"
            />
            <polygon
              points="366,85 398,87 382,138 348,136"
              fill="#991119"
              opacity="0.65"
            />

            <rect x="275" y="148" width="42" height="28" rx="2" fill="#141417" stroke="#27272A" strokeWidth="0.8" />
            <rect x="324" y="150" width="42" height="28" rx="2" fill="#141417" stroke="#27272A" strokeWidth="0.8" />
            <rect x="373" y="152" width="42" height="28" rx="2" fill="#141417" stroke="#DC1E28" strokeWidth="0.8" />

            <circle cx="152" cy="43" r="2" fill="#DC1E28" />
            <line x1="160" y1="43" x2="205" y2="45" stroke="#3F3F46" strokeWidth="1.5" />
            <line x1="385" y1="51" x2="418" y2="52" stroke="#DC1E28" strokeWidth="1.5" />

            <g transform="matrix(0.99, 0.035, -0.05, 0.99, 152, 74)">
              <text
                x="0"
                y="0"
                fill="#DC1E28"
                fontSize="6.5"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
                letterSpacing="1.6"
              >
                {current.kicker}
              </text>
              <text
                x="0"
                y="18"
                fill="#FFFFFF"
                fontSize="14"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
                letterSpacing="0.8"
              >
                {current.headline[0]}
              </text>
              <text
                x="0"
                y="34"
                fill="#FFFFFF"
                fontSize="14"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
                letterSpacing="0.8"
              >
                {current.headline[1]}
              </text>
              <text
                x="0"
                y="50"
                fill="#FFFFFF"
                fontSize="14"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
                letterSpacing="0.8"
              >
                {current.headline[2]}
              </text>
              <text
                x="0"
                y="66"
                fill="#FFFFFF"
                fontSize="14"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
                letterSpacing="0.8"
              >
                {current.headline[3]}
              </text>

              <rect x="0" y="80" width="106" height="15" rx="2" fill="#DC1E28" />
              <text
                x="8"
                y="90"
                fill="#FFFFFF"
                fontSize="6.2"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="500"
                letterSpacing="0.8"
              >
                {current.metric}
              </text>
            </g>

            <polygon
              points="118,214 432,226 468,262 72,248"
              fill="url(#laptopBase)"
              stroke="#3F3F46"
              strokeWidth="1"
            />
            <polygon
              points="126,220 418,231 434,247 104,235"
              fill="#09090B"
              stroke="#27272A"
              strokeWidth="0.8"
            />
            <polygon
              points="232,242 302,245 308,255 224,252"
              fill="#16161A"
              stroke="#2E2E34"
              strokeWidth="0.7"
            />
            <polygon
              points="72,248 468,262 466,268 74,254"
              fill="#1F1F23"
            />
          </g>
        </svg>

        <div className="mt-2 flex items-center justify-between px-2 text-[11px] text-zinc-400">
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setScreenSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-150 ${
                  screenSlide === idx
                    ? 'w-6 bg-[#DC1E28]'
                    : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Preview laptop screen slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={onOpenInquiry}
            className="text-[11px] font-medium text-zinc-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Collaborate or Book Prototype →
          </button>
        </div>
      </div>
    </div>
  );
};

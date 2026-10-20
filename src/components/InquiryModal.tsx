import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Send, Calendar } from 'lucide-react';
import { CrimsonStar } from './PortfolioArtwork';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
}

const SERVICE_OPTIONS = [
  'AI Agent / Swarm System',
  'SaaS & Web Platform (Next.js/React)',
  'Interactive E-Commerce / SMB Prototype',
  'Mobile App Studio (Expo / Android)',
  'Custom Edge / LLM Architecture',
];

const BUDGET_RANGES = [
  '$1,500 – $3,500',
  '$3,500 – $8,000',
  '$8,000 – $15,000',
  '$15,000+ Enterprise',
];

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialScope,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'SaaS & Web Platform (Next.js/React)',
  ]);
  const [budget, setBudget] = useState('$3,500 – $8,000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialScope) {
      setMessage(
        `Hi AK, we'd love to discuss a project or collaboration around ${initialScope}.`
      );
    }
  }, [initialScope]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0C0C0E] border border-[#242429] rounded-lg overflow-hidden my-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1F1F23] bg-[#09090B]">
          <div className="flex items-center gap-2.5">
            <CrimsonStar className="w-4 h-4 text-[#DC1E28]" />
            <h2
              id="inquiry-modal-title"
              className="text-base font-bold uppercase tracking-[0.14em] text-white"
            >
              Start a Project · AK Studio
            </h2>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="w-9 h-9 inline-flex items-center justify-center rounded border border-[#27272D] bg-[#141418] text-zinc-400 hover:text-white hover:border-[#DC1E28] transition-colors"
            aria-label="Close inquiry modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#DC1E28]/15 border border-[#DC1E28]/40 flex items-center justify-center text-[#DC1E28]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Project Brief Logged
            </h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{name}</span>. Your
              inquiry regarding{' '}
              <span className="text-white font-medium">
                {selectedServices.join(', ') || 'AI & Web Engineering'}
              </span>{' '}
              ({budget}) has been received. Direct contact:{' '}
              <span className="font-mono text-zinc-200">
                k.chandu779399@gmail.com
              </span>
            </p>
            <div className="p-4 bg-[#121216] border border-[#222228] rounded text-xs text-zinc-400 font-mono">
              Confirmation logged for: {email}
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#DC1E28] hover:bg-[#B91820] rounded transition-colors"
              >
                Return to Portfolio
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between text-xs text-zinc-400 pb-3 border-b border-[#1A1A1E]">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#DC1E28]" />
                <span>Open for SaaS Builds, AI Systems &amp; Client Prototypes</span>
              </span>
              <span className="font-mono text-zinc-400">USA · UK · DE · IT · Global</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="block text-xs font-medium text-zinc-300 mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Mercer"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#121216] border border-[#25252B] rounded text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#DC1E28] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="inquiry-email"
                  className="block text-xs font-medium text-zinc-300 mb-1.5"
                >
                  Work Email *
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#121216] border border-[#25252B] rounded text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#DC1E28] transition-colors"
                />
              </div>
            </div>

            <div>
              <span className="block text-xs font-medium text-zinc-300 mb-2">
                Scope &amp; Capabilities Needed
              </span>
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((service) => {
                  const active = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-[#DC1E28]/15 border-[#DC1E28] text-white'
                          : 'bg-[#121216] border-[#25252B] text-zinc-400 hover:text-zinc-200 hover:border-zinc-600'
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="block text-xs font-medium text-zinc-300 mb-2">
                Estimated Investment Range (USD)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BUDGET_RANGES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBudget(item)}
                    className={`px-3 py-2 text-xs font-mono tabular-nums rounded border text-center transition-colors whitespace-nowrap shrink-0 ${
                      budget === item
                        ? 'bg-[#DC1E28] border-[#DC1E28] text-white font-semibold'
                        : 'bg-[#121216] border-[#25252B] text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="inquiry-brief"
                className="block text-xs font-medium text-zinc-300 mb-1.5"
              >
                Project Goals, Architecture &amp; Context
              </label>
              <textarea
                id="inquiry-brief"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the product, interactive UI prototype, or AI agent workflow you want to build..."
                className="w-full px-3.5 py-2.5 text-sm bg-[#121216] border border-[#25252B] rounded text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#DC1E28] transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#DC1E28] hover:bg-[#B91820] rounded transition-colors whitespace-nowrap shrink-0"
              >
                <span>Send Project Brief</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";

interface ThreadOutputProps {
  thread: string | null;
  isLoading: boolean;
  error: string | null;
}

function SkeletonLoader() {
  return (
    <div className="flex flex-col gap-5 p-6">
      {[80, 60, 90, 50, 75, 65, 85, 55].map((width, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="skeleton-line" style={{ width: "24px" }} />
          <div className="skeleton-line" style={{ width: `${width}%` }} />
          {i % 3 === 0 && <div className="skeleton-line" style={{ width: `${width - 20}%` }} />}
        </div>
      ))}
    </div>
  );
}

export default function ThreadOutput({ thread, isLoading, error }: ThreadOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!thread) return;
    await navigator.clipboard.writeText(thread);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!thread && !isLoading && !error) return null;

  return (
    <div className="w-full max-w-2xl mx-auto px-6 pb-16 animate-fade-up">
      {/* Section header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-forge-text-muted text-sm font-medium" style={{ fontFamily: "var(--font-display)" }}>
          Generated Thread
        </span>
        {thread && !isLoading && (
          <span className="text-xs text-forge-accent" style={{ fontFamily: "var(--font-mono)" }}>
            Ready to copy
          </span>
        )}
      </div>

      {/* Card */}
      <div className="rounded-xl overflow-hidden"
        style={{
          background: "#16161a",
          border: "1px solid #222228",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 0px rgba(91,138,240,0)",
        }}
      >
        {/* Card top bar */}
        <div className="flex items-center gap-2 px-5 py-3"
          style={{ borderBottom: "1px solid #1e1e26" }}
        >
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#2a2a32" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#2a2a32" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#2a2a32" }} />
          <span className="ml-2 text-xs text-forge-text-dim" style={{ fontFamily: "var(--font-mono)" }}>
            thread.txt
          </span>
        </div>

        {/* Content */}
        <div className="p-6 min-h-32">
          {isLoading && <SkeletonLoader />}

          {error && !isLoading && (
            <div className="flex items-start gap-3 py-2">
              <div className="w-1 h-full rounded-full bg-red-500/50 self-stretch" />
              <p className="text-red-400 text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                {error}
              </p>
            </div>
          )}

          {thread && !isLoading && (
            <pre className="thread-output">{thread}</pre>
          )}
        </div>
      </div>

      {/* Copy button */}
      {thread && !isLoading && (
        <div className="mt-4">
          <button
            className="forge-btn w-full rounded-xl py-3.5 text-sm font-medium tracking-wide transition-all duration-150"
            style={{
              fontFamily: "var(--font-display)",
              background: copied ? "rgba(91, 138, 240, 0.12)" : "#16161a",
              border: copied ? "1px solid rgba(91, 138, 240, 0.3)" : "1px solid #222228",
              color: copied ? "#5b8af0" : "#9090a8",
              cursor: "pointer",
              letterSpacing: "0.03em",
            }}
            onClick={handleCopy}
          >
            {copied ? (
              <span className="flex items-center justify-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copied
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="5" y="5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M9 5V3.5A1.5 1.5 0 0 0 7.5 2h-4A1.5 1.5 0 0 0 2 3.5v4A1.5 1.5 0 0 0 3.5 9H5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Copy Thread
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

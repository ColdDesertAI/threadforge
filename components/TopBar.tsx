"use client";

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10"
      style={{
        background: "rgba(12, 12, 14, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(34, 34, 40, 0.8)",
      }}
    >
      <div className="flex items-center gap-3">
        {/* Logo mark */}
        <div className="w-7 h-7 rounded-md flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #3a5fbc 0%, #5b8af0 100%)",
            boxShadow: "0 0 12px rgba(91, 138, 240, 0.3)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 3h10M2 7h6M2 11h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-forge-text font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem" }}>
          ThreadForge
        </span>
      </div>

      <span className="text-forge-text-dim text-xs tracking-widest uppercase font-mono"
        style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em" }}
      >
        by ColdDesert
      </span>
    </header>
  );
}

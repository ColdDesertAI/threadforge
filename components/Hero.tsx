"use client";

export default function Hero() {
  return (
    <div className="relative text-center pt-32 pb-10 px-6">
      {/* Background glow */}
      <div className="hero-glow" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full"
        style={{
          background: "rgba(91, 138, 240, 0.08)",
          border: "1px solid rgba(91, 138, 240, 0.15)",
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-forge-accent animate-pulse" />
        <span className="text-forge-accent text-xs font-medium tracking-wide" style={{ fontFamily: "var(--font-mono)" }}>
          Forge Suite · v1
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4"
        style={{
          fontFamily: "var(--font-display)",
          background: "linear-gradient(180deg, #e8e8f0 0%, #9090a8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Generate high-performing
        <br />
        <span style={{
          background: "linear-gradient(135deg, #5b8af0 0%, #7aa4ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          X threads in seconds
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-forge-text-muted text-base md:text-lg tracking-wide"
        style={{ fontFamily: "var(--font-mono)", fontWeight: 300 }}
      >
        Topic in.&nbsp;&nbsp;Thread out.&nbsp;&nbsp;Copy.&nbsp;&nbsp;Post.
      </p>
    </div>
  );
}

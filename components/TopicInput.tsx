"use client";

interface TopicInputProps {
  topic: string;
  onTopicChange: (value: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const PLACEHOLDER_EXAMPLES = [
  "Why most startups fail",
  "5 lessons from running a marathon",
  "How to build a personal brand on X",
  "What I learned from my first $10k month",
  "Why consistency beats talent",
];

export default function TopicInput({
  topic,
  onTopicChange,
  onGenerate,
  isLoading,
}: TopicInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && topic.trim() && !isLoading) {
      e.preventDefault();
      onGenerate();
    }
  };

  const canGenerate = topic.trim().length > 0 && !isLoading;

  return (
    <div className="w-full max-w-2xl mx-auto px-6 flex flex-col gap-4">
      {/* Input */}
      <div className="relative">
        <textarea
          className="forge-input w-full resize-none rounded-xl px-5 py-4 text-forge-text text-base transition-all duration-200 placeholder:text-forge-text-dim"
          style={{
            background: "#111114",
            border: "1px solid #222228",
            fontFamily: "var(--font-display)",
            minHeight: "80px",
            lineHeight: "1.6",
            fontSize: "1rem",
          }}
          placeholder={PLACEHOLDER_EXAMPLES[0]}
          value={topic}
          onChange={(e) => onTopicChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          rows={2}
          maxLength={300}
        />
        {/* Character count */}
        {topic.length > 200 && (
          <span className="absolute bottom-3 right-4 text-xs text-forge-text-dim"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {topic.length}/300
          </span>
        )}
      </div>

      {/* Hint */}
      <p className="text-xs text-forge-text-dim text-center -mt-1"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Press Enter to generate
      </p>

      {/* Generate Button */}
      <button
        className="forge-btn w-full rounded-xl py-4 font-semibold text-sm tracking-wide transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          fontFamily: "var(--font-display)",
          background: canGenerate
            ? "linear-gradient(135deg, #3a5fbc 0%, #5b8af0 100%)"
            : "#1a1a22",
          color: canGenerate ? "#ffffff" : "#404050",
          border: canGenerate ? "none" : "1px solid #222228",
          boxShadow: canGenerate
            ? "0 0 24px rgba(91, 138, 240, 0.2), 0 2px 8px rgba(0,0,0,0.4)"
            : "none",
          cursor: canGenerate ? "pointer" : "not-allowed",
          letterSpacing: "0.03em",
        }}
        onClick={onGenerate}
        disabled={!canGenerate}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Generating...
          </span>
        ) : (
          "Generate Thread"
        )}
      </button>
    </div>
  );
}

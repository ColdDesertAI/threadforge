"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import TopicInput from "@/components/TopicInput";
import ThreadOutput from "@/components/ThreadOutput";
import Footer from "@/components/Footer";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [thread, setThread] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setThread(null);

    try {
      const response = await fetch("/api/generate-thread", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Generation failed. Please try again.");
      }

      setThread(data.thread);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: "#0c0c0e" }}
    >
      <TopBar />

      <div className="flex-1 flex flex-col items-center w-full">
        <Hero />

        {/* Divider */}
        <div className="w-px h-8 mb-8"
          style={{ background: "linear-gradient(to bottom, transparent, #222228, transparent)" }}
        />

        <TopicInput
          topic={topic}
          onTopicChange={setTopic}
          onGenerate={handleGenerate}
          isLoading={isLoading}
        />

        {/* Spacer */}
        <div className="h-10" />

        <div className="w-full">
          <ThreadOutput
            thread={thread}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

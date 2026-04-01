import { NextRequest, NextResponse } from "next/server";
import { getAnthropicClient } from "@/lib/anthropic";
import { buildThreadPrompt } from "@/lib/prompt";

// In-memory rate limiter: 10 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const WINDOW_MS = 60 * 1000;

function getIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { topic } = body;

    if (!topic || typeof topic !== "string" || topic.trim().length === 0) {
      return NextResponse.json(
        { error: "Topic is required." },
        { status: 400 }
      );
    }

    const trimmedTopic = topic.trim();

    if (trimmedTopic.length > 300) {
      return NextResponse.json(
        { error: "Topic must be under 300 characters." },
        { status: 400 }
      );
    }

    const client = getAnthropicClient();
    const prompt = buildThreadPrompt(trimmedTopic);

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      temperature: 0.8,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type from Claude.");
    }

    const thread = content.text.trim();

    return NextResponse.json({ thread });
  } catch (error: unknown) {
    console.error("ThreadForge generation error:", error);

    if (error instanceof Error) {
      if (error.message.includes("ANTHROPIC_API_KEY")) {
        return NextResponse.json(
          {
            error:
              "API key not configured. Add ANTHROPIC_API_KEY to your .env.local file.",
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: "Generation failed. Please try again." },
      { status: 500 }
    );
  }
}

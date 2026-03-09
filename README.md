# ThreadForge

**Generate high-performing X threads in seconds.**

Topic in. Thread out. Copy. Post.

Part of the [ColdDesert](https://colddesert.ai) Forge Suite.

---

## What it does

ThreadForge takes a topic and generates a structured, high-performing X thread using Claude (Anthropic). One field. One button. Done.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Anthropic Claude API** (claude-opus-4-5)
- **Vercel** (deployment)

---

## Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/threadforge.git
cd threadforge
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Copy the example env file:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=your_key_here
```

Get an API key at [console.anthropic.com](https://console.anthropic.com).

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B — Vercel Dashboard

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your `threadforge` repo
4. Add environment variable: `ANTHROPIC_API_KEY`
5. Deploy

---

## GitHub Setup (recommended workflow)

```bash
# 1. Create repo on GitHub named: threadforge

# 2. Initialize and push
git init
git add .
git commit -m "initial: threadforge mvp"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/threadforge.git
git push -u origin main
```

Commit after each milestone:
- `feat: ui complete`
- `feat: api wired`
- `feat: mvp working`
- `deploy: vercel production`

---

## Project Structure

```
threadforge/
├── app/
│   ├── api/generate-thread/route.ts   # API route
│   ├── globals.css                    # Global styles + fonts
│   ├── layout.tsx                     # Root layout + metadata
│   └── page.tsx                       # Main page
├── components/
│   ├── TopBar.tsx                     # Brand header
│   ├── Hero.tsx                       # Headline + subheadline
│   ├── TopicInput.tsx                 # Input + generate button
│   ├── ThreadOutput.tsx               # Thread card + copy button
│   └── Footer.tsx                     # Minimal footer
├── lib/
│   ├── anthropic.ts                   # Anthropic client
│   └── prompt.ts                      # Prompt engine (core IP)
├── .env.example
├── .gitignore
└── README.md
```

---

## Prompt Engine

The thread quality comes from `lib/prompt.ts`. This is the core IP — a structured system prompt that produces X-native threads, not generic AI output.

To improve thread quality, edit the prompt in `lib/prompt.ts`.

---

## What's not in v1 (intentional)

- No auth
- No database
- No templates
- No history
- No analytics
- No pricing

These come after validation.

---

## Roadmap

- [ ] Hook Generator mode
- [ ] Thread history (local)
- [ ] Template selector
- [ ] Hook score
- [ ] HookForge (next Forge Suite product)

---

Built by [ColdDesert](https://colddesert.ai)

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThreadForge — Generate high-performing X threads in seconds",
  description:
    "Topic in. Thread out. Copy. Post. ThreadForge generates high-performing X threads instantly.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ThreadForge",
    description: "Generate high-performing X threads in seconds.",
    siteName: "ThreadForge by ColdDesert",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

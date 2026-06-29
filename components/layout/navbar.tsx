"use client";

import Link from "next/link";

const navigation = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Enterprise", href: "#enterprise" },
  { name: "Resources", href: "#resources" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-8 lg:px-12">
        <Link href="/" className="text-xl font-semibold tracking-[0.18em] text-white">
          SYSTEM INC AI
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <Link
          href="/onboarding"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          Start Building →
        </Link>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Platform",
    href: "#",
  },
  {
    name: "Solutions",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Resources",
    href: "#",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8 lg:px-12">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <span className="text-xl font-semibold tracking-tight text-white">
            SYSTEM INC AI
          </span>
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm text-zinc-400 transition-colors duration-200 hover:text-white",
                pathname === item.href && "text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}

        <div className="flex items-center gap-4">

          <Link
            href="/auth/login"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/onboarding"
            className="rounded-full border border-white bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Start Building
          </Link>

        </div>

      </div>
    </header>
  );
}

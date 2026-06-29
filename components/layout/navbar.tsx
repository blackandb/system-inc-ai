"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Platform",
    href: "/",
  },
  {
    name: "Solutions",
    href: "/",
  },
  {
    name: "Enterprise",
    href: "/",
  },
  {
    name: "Resources",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
];

export function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-2xl">

        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-12">

          {/* Logo */}

          <Link
            href="/"
            className="leading-none"
          >
            <span className="hidden text-xl font-semibold tracking-[0.22em] text-white md:block">
              SYSTEM INC AI
            </span>

            <span className="block text-[15px] font-semibold leading-[1.05] tracking-[0.18em] text-white md:hidden">
              SYSTEM INC
              <br />
              AI
            </span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navigation.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm text-zinc-400 transition-all duration-300 hover:text-white",
                  pathname === item.href && "text-white"
                )}
              >
                {item.name}

                <span className="absolute -bottom-7 left-0 h-[2px] w-full scale-x-0 bg-violet-500 transition-transform duration-300 group-hover:scale-x-100" />

              </Link>

            ))}

          </nav>

          {/* Right */}

          <div className="hidden items-center gap-5 lg:flex">

            <Link
              href="/auth/login"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Sign In
            </Link>

            <Link
              href="/onboarding"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
            >
              Start Building →
            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>

      </header>

      {/* Mobile Menu */}

      {open && (

        <div className="fixed inset-0 z-40 bg-[#050505] pt-24 lg:hidden">

          <div className="flex flex-col gap-8 px-8">

            {navigation.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-semibold text-white"
              >
                {item.name}
              </Link>

            ))}

            <div className="mt-10 flex flex-col gap-4">

              <Link
                href="/auth/login"
                className="text-lg text-zinc-400"
              >
                Sign In
              </Link>

              <Link
                href="/onboarding"
                className="flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-medium text-black"
              >
                Start Building →
              </Link>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

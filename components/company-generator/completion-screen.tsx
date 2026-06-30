"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

type Props = {
  open: boolean;
};

export function CompletionScreen({ open }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#040405]/95 backdrop-blur-3xl"
        >
          {/* Background */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.22),transparent_55%)]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[900px] w-[900px] rounded-full border border-violet-500/10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 130,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[650px] w-[650px] rounded-full border border-violet-500/10"
          />

          {/* Card */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-14 backdrop-blur-3xl"
          >
            {/* Glow */}

            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />

            <div className="relative text-center">
              {/* Icon */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_80px_rgba(16,185,129,.35)]"
              >
                <CheckCircle2 className="h-16 w-16 text-emerald-400" />
              </motion.div>

              <p className="mt-10 text-sm uppercase tracking-[0.35em] text-violet-400">
                COMPANY GENERATED
              </p>

              <h1 className="mt-6 text-6xl font-semibold tracking-[-0.05em] text-white">
                Success.
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
                SYSTEM INC AI successfully generated your AI-powered
                company, business architecture, departments, documents
                and intelligence layer.
              </p>

              {/* Stats */}

              <div className="mt-14 grid gap-5 md:grid-cols-3">
                {[
                  ["20+", "AI Departments"],
                  ["1000+", "Documents"],
                  ["100%", "Generated"],
                ].map(([title, subtitle]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl"
                  >
                    <p className="text-4xl font-bold text-white">
                      {title}
                    </p>

                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-500">
                      {subtitle}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}

              <div className="mt-14 flex flex-wrap justify-center gap-5">
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:bg-zinc-200"
                >
                  Open Dashboard

                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>

                <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-white transition hover:border-violet-500">
                  Continue Editing
                </button>
              </div>

              {/* Footer */}

              <div className="mt-14 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                <Sparkles className="h-4 w-4 text-violet-400" />

                AI Company Operating System Ready

                <Sparkles className="h-4 w-4 text-violet-400" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
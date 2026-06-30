"use client";

import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

type Props = {
  title: string;
  description: string;
  progress: number;
  active?: boolean;
  completed?: boolean;
};

export function ProgressCard({
  title,
  description,
  progress,
  active = false,
  completed = false,
}: Props) {
  return (
    <motion.div
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 ${
        completed
          ? "border-emerald-500/30 bg-emerald-500/10"
          : active
          ? "border-violet-500/40 bg-violet-500/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      {/* Glow */}

      <div
        className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-all duration-700 ${
          completed
            ? "bg-emerald-500/15"
            : active
            ? "bg-violet-500/20"
            : "bg-violet-500/8"
        }`}
      />

      {/* Gradient Line */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-violet-500 via-white/20 to-transparent" />

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-5">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                completed
                  ? "border-emerald-500/40 bg-emerald-500/20"
                  : active
                  ? "border-violet-500/40 bg-violet-500/20"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              {completed ? (
                <Check className="h-6 w-6 text-emerald-400" />
              ) : active ? (
                <Loader2 className="h-6 w-6 animate-spin text-violet-400" />
              ) : (
                <div className="h-3 w-3 rounded-full bg-white/40" />
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl font-bold text-white">
              {progress}%
            </div>

            <div className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-500">
              Progress
            </div>
          </div>
        </div>

        {/* Progress */}

        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em]">
            <span className="text-zinc-500">
              {completed
                ? "Completed"
                : active
                ? "Generating"
                : "Waiting"}
            </span>

            <span
              className={
                completed
                  ? "text-emerald-400"
                  : active
                  ? "text-violet-400"
                  : "text-zinc-500"
              }
            >
              {progress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className={`h-full rounded-full ${
                completed
                  ? "bg-gradient-to-r from-emerald-500 to-green-400"
                  : "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
              }`}
            />
          </div>
        </div>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            AI Generator
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${
              completed
                ? "bg-emerald-500/20 text-emerald-300"
                : active
                ? "bg-violet-500/20 text-violet-300"
                : "bg-white/5 text-zinc-500"
            }`}
          >
            {completed
              ? "Completed"
              : active
              ? "Running"
              : "Pending"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
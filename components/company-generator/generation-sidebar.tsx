"use client";

import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Building2,
  Globe,
  Briefcase,
  Palette,
  Users,
  FileText,
  Cpu,
} from "lucide-react";

const steps = [
  {
    title: "Idea",
    icon: Sparkles,
  },
  {
    title: "Country",
    icon: Globe,
  },
  {
    title: "Company",
    icon: Building2,
  },
  {
    title: "Industry",
    icon: Briefcase,
  },
  {
    title: "Brand",
    icon: Palette,
  },
  {
    title: "Departments",
    icon: Users,
  },
  {
    title: "Documents",
    icon: FileText,
  },
];

type Props = {
  currentStep: number;
};

export function GenerationSidebar({
  currentStep,
}: Props) {
  return (
    <aside className="flex h-full flex-col rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

      {/* Header */}

      <div className="border-b border-white/10 p-8">

        <p className="text-xs uppercase tracking-[0.28em] text-violet-400">
          SYSTEM INC AI
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white">
          Company Generator
        </h2>

        <p className="mt-3 text-sm leading-7 text-zinc-400">
          Building your AI-powered company in real time.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative flex-1 p-8">

        <div className="absolute left-[42px] top-8 bottom-8 w-px bg-gradient-to-b from-violet-500 via-violet-500/20 to-transparent" />

        <div className="space-y-7">

          {steps.map((step, index) => {

            const Icon = step.icon;

            const completed = index < currentStep;
            const active = index === currentStep;

            return (
              <motion.div
                key={step.title}
                layout
                className="relative flex items-center gap-5"
              >

                <motion.div
                  animate={
                    active
                      ? {
                          scale: [1, 1.08, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                  }}
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border ${
                    completed
                      ? "border-emerald-500/40 bg-emerald-500/15"
                      : active
                      ? "border-violet-500/40 bg-violet-500/20"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >

                  {completed ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Icon
                      className={`h-5 w-5 ${
                        active
                          ? "text-violet-300"
                          : "text-zinc-500"
                      }`}
                    />
                  )}

                </motion.div>

                <div>

                  <h3
                    className={`font-medium ${
                      active
                        ? "text-white"
                        : completed
                        ? "text-zinc-200"
                        : "text-zinc-500"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">

                    {completed
                      ? "Completed"
                      : active
                      ? "Generating..."
                      : "Pending"}

                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* AI Core */}

      <div className="border-t border-white/10 p-8">

        <div className="rounded-3xl border border-violet-500/20 bg-black/25 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.24em] text-violet-400">
                AI CORE
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Online
              </h3>

            </div>

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/15"
            >

              <Cpu className="h-7 w-7 text-violet-300" />

            </motion.div>

          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div
              animate={{
                width: ["15%", "95%", "15%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
            />

          </div>

          <div className="mt-5 flex items-center justify-between">

            <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              Neural Activity
            </span>

            <span className="text-sm font-medium text-emerald-400">
              Stable
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}
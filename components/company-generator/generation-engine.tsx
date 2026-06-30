"use client";

import { useEffect, useMemo, useState } from "react";

const phases = [
  {
    title: "Initializing AI Core",
    description: "Preparing company generation engine...",
    duration: 1200,
  },
  {
    title: "Creating Brand Identity",
    description: "Generating brand architecture...",
    duration: 1800,
  },
  {
    title: "Building Legal Structure",
    description: "Creating company legal framework...",
    duration: 1700,
  },
  {
    title: "Deploying AI Departments",
    description: "Finance, Sales, HR, Operations...",
    duration: 1800,
  },
  {
    title: "Generating Documents",
    description: "Business Plan, SOPs, Contracts...",
    duration: 2200,
  },
  {
    title: "Creating Company Brain",
    description: "Building persistent AI memory...",
    duration: 1800,
  },
  {
    title: "Deploying Company",
    description: "Final optimization...",
    duration: 1500,
  },
];

type Props = {
  onCompleted?: () => void;
};

export function GenerationEngine({
  onCompleted,
}: Props) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  const current = phases[phase];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase < phases.length - 1) {
      timeout = setTimeout(() => {
        setPhase((p) => p + 1);
      }, current.duration);
    } else {
      timeout = setTimeout(() => {
        onCompleted?.();
      }, current.duration);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;

        return p + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const percent = useMemo(() => {
    return Math.round(((phase + 1) / phases.length) * 100);
  }, [phase]);

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-violet-400">
            AI COMPANY GENERATOR
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            {current.title}
          </h2>

          <p className="mt-3 text-zinc-400">
            {current.description}
          </p>

        </div>

        <div className="text-right">

          <div className="text-5xl font-bold text-white">
            {percent}%
          </div>

          <div className="mt-2 text-sm text-zinc-500">
            Overall Progress
          </div>

        </div>

      </div>

      <div className="mt-10 h-3 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 transition-all duration-700"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

      <div className="mt-10 space-y-4">

        {phases.map((item, index) => {

          const active = index === phase;
          const completed = index < phase;

          return (
            <div
              key={item.title}
              className={`flex items-center justify-between rounded-2xl border p-5 transition-all duration-500 ${
                completed
                  ? "border-emerald-500/30 bg-emerald-500/10"
                  : active
                  ? "border-violet-500/40 bg-violet-500/10"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >

              <div>

                <h3 className="font-medium">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  {item.description}
                </p>

              </div>

              {completed && (
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-400">
                  Completed
                </span>
              )}

              {active && (
                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-violet-300">
                  Running...
                </span>
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
}
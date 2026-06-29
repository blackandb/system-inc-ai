"use client";

import { motion } from "framer-motion";

const departments = [
  {
    title: "CEO AI",
    subtitle: "Strategic Intelligence",
    x: "50%",
    y: "6%",
  },
  {
    title: "Strategy",
    subtitle: "Market & Growth",
    x: "16%",
    y: "28%",
  },
  {
    title: "Finance",
    subtitle: "Planning & Control",
    x: "82%",
    y: "30%",
  },
  {
    title: "Marketing",
    subtitle: "Brand & Demand",
    x: "8%",
    y: "56%",
  },
  {
    title: "Legal",
    subtitle: "Compliance & Risk",
    x: "86%",
    y: "56%",
  },
  {
    title: "Sales",
    subtitle: "Pipeline & Revenue",
    x: "18%",
    y: "86%",
  },
  {
    title: "Operations",
    subtitle: "Processes & Systems",
    x: "74%",
    y: "86%",
  },
];

export function CompanyVisualization() {
  return (
    <div className="relative h-[650px] w-full overflow-hidden">

      {/* Rings */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[2%] rounded-full border border-violet-500/15"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 130,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[12%] rounded-full border border-violet-500/10"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 170,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[22%] rounded-full border border-violet-500/10"
      />

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[100px]"
      />

      {/* Core */}

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-400/30 bg-[#090909]/95 shadow-[0_0_90px_rgba(139,92,246,.45)]"
      >
        <div className="text-center">

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mx-auto mb-5 h-16 w-16 rounded-full bg-violet-500"
          />

          <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
            AI CORE
          </h3>

          <p className="mt-2 text-xs text-zinc-400">
            Orchestrating every AI department
          </p>

        </div>
      </motion.div>

      {/* Nodes */}

      {departments.map((department, index) => (
        <motion.div
          key={department.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: [0, -5, 0],
          }}
          transition={{
            delay: index * 0.08,
            duration: 5 + index,
            repeat: Infinity,
          }}
          style={{
            left: department.x,
            top: department.y,
          }}
          className="absolute w-56 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl shadow-[0_0_50px_rgba(124,92,255,.15)] transition-all duration-300 hover:border-violet-400/40 hover:shadow-[0_0_60px_rgba(139,92,246,.35)]"
        >
          <div className="mb-3 h-2 w-2 rounded-full bg-violet-400" />

          <h4 className="text-sm font-semibold uppercase">
            {department.title}
          </h4>

          <p className="mt-2 text-xs text-zinc-400">
            {department.subtitle}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
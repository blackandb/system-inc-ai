"use client";

import { motion } from "framer-motion";

const departments = [
  {
    title: "CEO AI",
    subtitle: "Strategic Intelligence",
    x: "50%",
    y: "8%",
  },
  {
    title: "Strategy",
    subtitle: "Market & Growth",
    x: "22%",
    y: "28%",
  },
  {
    title: "Finance",
    subtitle: "Planning & Control",
    x: "78%",
    y: "30%",
  },
  {
    title: "Marketing",
    subtitle: "Brand & Demand",
    x: "18%",
    y: "58%",
  },
  {
    title: "Legal",
    subtitle: "Compliance & Risk",
    x: "82%",
    y: "58%",
  },
  {
    title: "Sales",
    subtitle: "Pipeline & Revenue",
    x: "24%",
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
    <div className="relative h-[650px] w-full overflow-visible">

      {/* Rings */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[2%] rounded-full border border-violet-500/10"
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

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/15 blur-[170px]"
      />

      {/* Core */}

      <motion.div
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-400/20 bg-[#080808]/95 shadow-[0_0_80px_rgba(139,92,246,.30)]"
      >
        <div className="text-center">

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mx-auto mb-5 h-16 w-16 rounded-full bg-violet-500 shadow-[0_0_35px_rgba(139,92,246,.6)]"
          />

          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            AI CORE
          </h3>

          <p className="mt-2 px-5 text-xs leading-5 text-zinc-400">
            Orchestrating every AI department
          </p>

        </div>
      </motion.div>

      {/* Department Cards */}

      {departments.map((department, index) => (
        <motion.div
          key={department.title}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: [0, -4, 0],
          }}
          transition={{
            delay: index * 0.08,
            duration: 6,
            repeat: Infinity,
          }}
          style={{
            left: department.x,
            top: department.y,
          }}
          className="absolute w-56 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/8 bg-black/65 p-5 backdrop-blur-2xl shadow-[0_0_40px_rgba(124,92,255,.12)] transition-all duration-300 hover:border-violet-400/40 hover:shadow-[0_0_60px_rgba(139,92,246,.30)]"
        >

          <div className="mb-3 h-2 w-2 rounded-full bg-violet-400" />

          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            {department.title}
          </h4>

          <p className="mt-2 text-xs leading-5 text-zinc-400">
            {department.subtitle}
          </p>

        </motion.div>
      ))}

    </div>
  );
}

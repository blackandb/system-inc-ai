"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "CEO AI", x: "50%", y: "8%" },
  { label: "Finance", x: "83%", y: "28%" },
  { label: "Legal", x: "87%", y: "62%" },
  { label: "Operations", x: "68%", y: "88%" },
  { label: "Marketing", x: "30%", y: "88%" },
  { label: "Sales", x: "12%", y: "62%" },
  { label: "Strategy", x: "16%", y: "28%" },
];

export function AICore() {
  return (
    <div className="relative flex h-[620px] items-center justify-center overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.22),transparent_55%)]" />

      {/* Outer Rings */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 80,
          ease: "linear",
        }}
        className="absolute h-[540px] w-[540px] rounded-full border border-violet-500/15"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 110,
          ease: "linear",
        }}
        className="absolute h-[420px] w-[420px] rounded-full border border-violet-500/10"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 140,
          ease: "linear",
        }}
        className="absolute h-[300px] w-[300px] rounded-full border border-violet-500/10"
      />

      {/* Pulse */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute h-72 w-72 rounded-full bg-violet-600 blur-[120px]"
      />

      {/* Connections */}

      <svg className="absolute inset-0 h-full w-full">

        {nodes.map((node) => (
          <motion.line
            key={node.label}
            x1="50%"
            y1="50%"
            x2={node.x}
            y2={node.y}
            stroke="rgba(139,92,246,.25)"
            strokeWidth="1.2"
            strokeDasharray="5 8"
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          />
        ))}

      </svg>

      {/* Orbit Nodes */}

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          style={{
            left: node.x,
            top: node.y,
          }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + index,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <div className="rounded-2xl border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,.15)]">

            <div className="flex items-center gap-3">

              <div className="h-2.5 w-2.5 rounded-full bg-violet-400" />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white">
                {node.label}
              </span>

            </div>

          </div>

        </motion.div>
      ))}

      {/* Core */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="relative z-20 flex h-52 w-52 items-center justify-center rounded-full border border-violet-400/40 bg-[#090909]/95 shadow-[0_0_100px_rgba(139,92,246,.45)]"
      >

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="absolute h-[190px] w-[190px] rounded-full border border-dashed border-violet-400/25"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
          className="absolute h-[130px] w-[130px] rounded-full border border-violet-300/20"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="h-20 w-20 rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-500 to-cyan-400 shadow-[0_0_70px_rgba(139,92,246,.8)]"
        />

        <div className="absolute bottom-10 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            AI CORE
          </p>

          <p className="mt-2 text-xs text-zinc-400">
            Company Intelligence Engine
          </p>

        </div>

      </motion.div>

      {/* Floating Particles */}

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.4,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-violet-400"
        />
      ))}

    </div>
  );
}
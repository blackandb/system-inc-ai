"use client";

import { motion } from "framer-motion";
import { AgentNode } from "./agent-node";

const agents = [
  "CEO AI",
  "Strategy",
  "Finance",
  "Legal",
  "Marketing",
  "Sales",
  "Operations",
  "HR",
];

export function Network() {
  return (
    <div className="relative mx-auto h-[620px] max-w-[760px]">

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-500/20 bg-black shadow-[0_0_80px_rgba(139,92,246,.35)]"
      >

        <div className="text-center">

          <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-violet-500 shadow-[0_0_30px_rgba(139,92,246,.6)]" />

          <p className="text-lg font-semibold text-white">
            AI CORE
          </p>

          <p className="mt-2 text-xs text-zinc-500">
            Orchestrating every department
          </p>

        </div>

      </motion.div>

      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <AgentNode title={agents[0]} />
      </div>

      <div className="absolute left-0 top-[22%]">
        <AgentNode title={agents[1]} />
      </div>

      <div className="absolute right-0 top-[22%]">
        <AgentNode title={agents[2]} />
      </div>

      <div className="absolute left-0 top-[52%]">
        <AgentNode title={agents[3]} />
      </div>

      <div className="absolute right-0 top-[52%]">
        <AgentNode title={agents[4]} />
      </div>

      <div className="absolute left-[8%] bottom-0">
        <AgentNode title={agents[5]} />
      </div>

      <div className="absolute right-[8%] bottom-0">
        <AgentNode title={agents[6]} />
      </div>

      <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
        <AgentNode title={agents[7]} />
      </div>

    </div>
  );
}
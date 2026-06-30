"use client";

import { motion, AnimatePresence } from "framer-motion";

type Log = {
  id: number;
  time: string;
  service: string;
  message: string;
  status: "success" | "running" | "waiting";
};

type Props = {
  logs: Log[];
};

export function LiveLogs({ logs }: Props) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Header */}

      <div className="relative flex items-center justify-between border-b border-white/10 px-8 py-6">

        <div>

          <p className="text-xs uppercase tracking-[0.28em] text-violet-400">
            Live Activity
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Generation Logs
          </h2>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="h-2.5 w-2.5 rounded-full bg-emerald-400"
          />

          <span className="text-xs uppercase tracking-[0.2em] text-emerald-300">
            Live
          </span>

        </div>

      </div>

      {/* Logs */}

      <div className="relative h-[520px] overflow-y-auto p-6">

        <AnimatePresence>

          {logs.map((log) => (

            <motion.div
              key={log.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="group mb-4 rounded-2xl border border-white/8 bg-black/20 p-5 transition-all hover:border-violet-500/30 hover:bg-black/30"
            >

              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  {/* Status */}

                  <div className="mt-1">

                    {log.status === "success" && (
                      <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,.8)]" />
                    )}

                    {log.status === "running" && (
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                        }}
                        className="h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(139,92,246,.8)]"
                      />
                    )}

                    {log.status === "waiting" && (
                      <div className="h-3 w-3 rounded-full bg-white/20" />
                    )}

                  </div>

                  {/* Text */}

                  <div>

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-xs text-zinc-500">
                        {log.time}
                      </span>

                      <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-violet-300">
                        {log.service}
                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-7 text-zinc-200">
                      {log.message}
                    </p>

                  </div>

                </div>

                <div>

                  {log.status === "success" && (
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                      Completed
                    </span>
                  )}

                  {log.status === "running" && (
                    <span className="rounded-full bg-violet-500/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-violet-300">
                      Running
                    </span>
                  )}

                  {log.status === "waiting" && (
                    <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      Pending
                    </span>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </AnimatePresence>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 px-8 py-5">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              AI SYSTEM STATUS
            </p>

            <p className="mt-2 text-sm text-zinc-300">
              Company generation is running normally.
            </p>

          </div>

          <div className="text-right">

            <p className="text-3xl font-bold text-white">
              {logs.length}
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Events
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
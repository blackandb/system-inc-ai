import { cn } from "@/lib/utils";

interface BackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function Background({ className, children }: BackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-[#030303] text-white",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_70%_35%,rgba(124,92,255,0.18),transparent_32%),linear-gradient(180deg,#050505_0%,#030303_100%)]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

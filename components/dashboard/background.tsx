type Props = {
  children: React.ReactNode;
};

export function DashboardBackground({ children }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030305] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(124,58,237,0.16),transparent_35%),linear-gradient(180deg,#050507_0%,#020203_100%)]" />

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.42)_75%)]" />

      <div className="pointer-events-none fixed -left-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="pointer-events-none fixed -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
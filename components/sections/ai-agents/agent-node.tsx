type Props = {
  title: string;
};

export function AgentNode({ title }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-white/[0.05]">

      <div className="flex items-center gap-3">

        <div className="h-2.5 w-2.5 rounded-full bg-violet-400" />

        <span className="text-sm font-medium text-white">
          {title}
        </span>

      </div>

    </div>
  );
}
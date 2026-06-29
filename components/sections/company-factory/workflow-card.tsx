type Props = {
  title: string;
  step: string;
};

export function WorkflowCard({ title, step }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-violet-500/30">

      <p className="text-xs uppercase tracking-[0.25em] text-violet-400">
        {step}
      </p>

      <h3 className="mt-3 text-lg font-semibold text-white">
        {title}
      </h3>

    </div>
  );
}

type Props = {
  title: string;
  category: string;
};

export function DocumentCard({ title, category }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]">
      <p className="text-xs uppercase tracking-[0.25em] text-violet-400">
        {category}
      </p>

      <h3 className="mt-4 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        Generated instantly by your AI operating system.
      </p>
    </div>
  );
}
type Props = {
  name: string;
  category: string;
};

export function IntegrationCard({ name, category }: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-sm font-semibold text-white">
          {name.slice(0, 2).toUpperCase()}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            {name}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}
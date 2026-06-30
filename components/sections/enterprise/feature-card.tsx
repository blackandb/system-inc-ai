type Props = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-500/20" />

      <div className="relative">
        <div className="mb-8 h-px w-full bg-gradient-to-r from-violet-400/60 via-white/10 to-transparent" />

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}

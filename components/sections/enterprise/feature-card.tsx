type Props = {
  title: string;
  description: string;
};

export function FeatureCard({
  title,
  description,
}: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/[0.05]">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">

        <div className="h-3 w-3 rounded-full bg-violet-400" />

      </div>

      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-zinc-400">
        {description}
      </p>

    </div>
  );
}
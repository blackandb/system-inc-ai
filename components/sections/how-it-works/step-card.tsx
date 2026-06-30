type Props = {
  number: string;
  title: string;
  description: string;
};

export function StepCard({
  number,
  title,
  description,
}: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/[0.05]">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-lg font-semibold text-violet-300">
        {number}
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-zinc-400">
        {description}
      </p>

    </div>
  );
}
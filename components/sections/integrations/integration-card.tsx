type Props = {
  name: string;
  category: string;
};

export function IntegrationCard({
  name,
  category,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]">

      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

      <div className="relative">

        {/* Gradient line */}

        <div className="mb-8 h-px w-full bg-gradient-to-r from-violet-400/60 via-white/10 to-transparent" />

        <div className="flex items-center gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-transparent text-sm font-semibold text-white">

            {name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)}

          </div>

          <div>

            <h3 className="text-2xl font-semibold text-white">
              {name}
            </h3>

            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-violet-400">
              {category}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

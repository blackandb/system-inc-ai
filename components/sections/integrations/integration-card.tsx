import Image from "next/image";

type Props = {
  name: string;
  category: string;
  logo: string;
};

export function IntegrationCard({
  name,
  category,
  logo,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(139,92,246,.18)]">

      {/* Glow */}

      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

      <div className="relative">

        {/* Gradient Line */}

        <div className="mb-8 h-px w-full bg-gradient-to-r from-violet-400/70 via-white/10 to-transparent" />

        <div className="flex items-center gap-5">

          {/* Logo */}

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.02] to-transparent transition-transform duration-300 group-hover:scale-110">

            <Image
              src={logo}
              alt={name}
              width={30}
              height={30}
              className="object-contain opacity-90"
            />

          </div>

          {/* Text */}

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

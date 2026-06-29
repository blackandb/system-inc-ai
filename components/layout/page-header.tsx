import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
          {eyebrow}
        </p>
      )}

      <h1 className="text-5xl font-semibold tracking-tight text-white lg:text-7xl">
        {title}
      </h1>

      {description && (
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </header>
  );
}
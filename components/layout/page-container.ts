import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-[1440px] px-8 lg:px-12",
        className
      )}
    >
      {children}
    </main>
  );
}
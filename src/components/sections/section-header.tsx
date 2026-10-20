import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const SectionHeader = ({
  id,
  title,
  desc,
  className,
}: {
  id: string;
  title: string | ReactNode;
  desc?: string;
  className?: string;
}) => {
  return (
    <div className={cn("top-[70px] sticky mb-40 md:mb-72 z-10 pointer-events-auto", className)}>
      <a href={`#${id}`} className="block group">
        <h2
          className={cn(
            "text-3xl text-center md:text-6xl font-bold tracking-tight text-foreground transition-transform group-hover:scale-[1.01]"
          )}
        >
          {title}
        </h2>
      </a>
      {desc && (
        <p className="mx-auto mt-2 max-w-xl font-normal text-sm md:text-base text-center text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  );
};

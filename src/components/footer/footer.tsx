import { config } from "@/data/config";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-12 px-4 bg-background/80 backdrop-blur-sm pointer-events-auto z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{config.name}</span>
          <span>·</span>
          <span>USAR, GGSIPU AI/ML Scholar</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-center sm:text-right">
          <span>
            Inspired by{" "}
            <a
              href="https://github.com/Naresh-Khatri/3d-portfolio"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Naresh Khatri&apos;s 3D Portfolio
            </a>{" "}
            (MIT)
          </span>
          <span>·</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

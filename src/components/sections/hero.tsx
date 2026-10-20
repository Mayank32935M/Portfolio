import React from "react";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { ArrowDown, Sparkles, GraduationCap } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-screen")}>
      <div className="grid md:grid-cols-2 min-h-screen">
        <div
          className={cn(
            "min-h-[calc(100dvh-3rem)] md:min-h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-center items-center md:items-start",
            "pt-24 pb-16 px-6 sm:px-12 md:p-16 lg:p-20 xl:p-24"
          )}
        >
          <div className="flex flex-col text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-secondary/40 backdrop-blur-sm text-xs font-medium text-muted-foreground w-fit mx-auto md:mx-0 mb-4 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Interactive 3D Portfolio</span>
            </div>

            <p className="font-medium text-lg md:text-xl text-muted-foreground">
              Hi, I am
            </p>

            <h1
              className={cn(
                "-ml-[4px] mt-1 leading-[0.9] text-foreground font-bold tracking-tighter",
                "text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-display",
                "text-edge-outline"
              )}
            >
              MAYANK
              <br />
              DABAS
            </h1>

            <p className="mt-4 font-medium text-lg sm:text-xl md:text-2xl text-foreground/90">
              AI & ML Engineer <span className="text-muted-foreground font-normal">| Creative Technologist</span>
            </p>

            <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4 text-primary shrink-0" />
              <span>USAR, GGSIPU · B.Tech + M.Tech Dual Degree (AI/ML)</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3 w-full">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={config.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-foreground font-medium text-sm hover:border-primary/40 hover:bg-card transition-all"
                title="GitHub @Mayank32935M"
              >
                <SiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-foreground font-medium text-sm hover:border-primary/40 hover:bg-card transition-all"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-2 text-xs text-muted-foreground/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Scroll down to navigate the 3D keyboard</span>
            </div>
          </div>
        </div>

        {/* Right column provides empty viewport space on desktop for the 3D mechanical keyboard */}
        <div className="hidden md:block col-span-1 pointer-events-none" />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

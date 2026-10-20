import { useEffect, type CSSProperties } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS } from "@/data/constants";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";
import { useSceneStatus } from "@/lib/scene-health";

const SkillsSection = () => {
  const { disable3D, ready } = usePerfProfile();
  const sceneStatus = useSceneStatus();
  const showGrid = !ready || disable3D || sceneStatus !== "ready";

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [showGrid]);

  return (
    <SectionWrapper
      id="skills"
      className={
        showGrid
          ? "flex w-full min-h-screen flex-col justify-center py-24"
          : "w-full h-screen md:h-[150dvh] pointer-events-none"
      }
    >
      <SectionHeader
        id="skills"
        title="Tech Stack"
        desc={showGrid ? "Tools & frameworks I build with" : "(hint: hover keycaps or press letter keys)"}
        className={showGrid ? "static mb-12" : undefined}
      />

      <ul
        className={
          showGrid
            ? "mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 pointer-events-auto"
            : "sr-only"
        }
      >
        {Object.values(SKILLS).map((skill) => (
          <li
            key={skill.name}
            style={{ "--skill": skill.color } as CSSProperties}
            className={cn(
              "group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl p-5",
              "border border-border/60 bg-card/40 backdrop-blur-sm",
              "transition-all duration-300",
              "hover:-translate-y-1 hover:border-[var(--skill)] hover:bg-card/80",
              "hover:shadow-[0_10px_35px_-10px_var(--skill)]"
            )}
          >
            <span
              aria-hidden
              style={{ background: "var(--skill)" }}
              className="pointer-events-none absolute -top-6 h-16 w-16 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-60"
            />
            <img
              src={skill.icon}
              alt={skill.label}
              width={40}
              height={40}
              loading="lazy"
              className="relative size-10 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
            />
            <span className="relative text-center text-xs font-semibold text-foreground/80 transition-colors group-hover:text-foreground">
              {skill.label}
            </span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default SkillsSection;

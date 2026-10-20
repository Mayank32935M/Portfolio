import { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import ScrollingPreview from "../scrolling-preview";
import { projects, type Project } from "@/data/projects";
import { ArrowUpRight, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:min-h-[140vh] px-4 py-20">
      <SectionHeader id="projects" title="Featured Projects" desc="Systems, forensics tools & engineering prototypes" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={() => setActiveProject(project)}
          />
        ))}
      </div>

      {/* Project Detail Dialog */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[88vh] flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-2xl z-10"
            >
              {/* Sticky Header */}
              <div className="shrink-0 border-b border-border bg-card/90 backdrop-blur-md px-6 py-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground truncate">
                      {activeProject.title}
                    </h3>
                    <span className="shrink-0 text-[11px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                      {activeProject.category}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/50 text-foreground text-xs font-medium hover:border-primary/40 transition-colors"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                    >
                      <span>Visit</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                {/* Tech Stack Dock */}
                <div className="flex flex-wrap gap-4">
                  {activeProject.skills.frontend && (
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold block mb-2">
                        Frontend
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.skills.frontend.map((s) => (
                          <span
                            key={s.name}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/60 border border-border/80 text-xs text-foreground font-medium"
                          >
                            <img src={s.icon} alt="" className="w-3.5 h-3.5 object-contain" />
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeProject.skills.backend && (
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold block mb-2">
                        Backend & Systems
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.skills.backend.map((s) => (
                          <span
                            key={s.name}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/60 border border-border/80 text-xs text-foreground font-medium"
                          >
                            <img src={s.icon} alt="" className="w-3.5 h-3.5 object-contain" />
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Screenshots Carousel / Gallery */}
                {activeProject.screenshots && activeProject.screenshots.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold block">
                      Evidence & Interface Screenshots
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeProject.screenshots.map((shot, idx) => (
                        <div
                          key={idx}
                          className="relative rounded-xl overflow-hidden border border-border/80 bg-black/40 group aspect-video"
                        >
                          <img
                            src={shot}
                            alt={`${activeProject.title} screenshot ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Detailed Description */}
                <div className="pt-2 border-t border-border/60">
                  {activeProject.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

const ProjectCard = ({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full rounded-2xl overflow-hidden border border-border/60 bg-card/40 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1"
      style={{ aspectRatio: "16/11" }}
    >
      <ScrollingPreview
        src={project.src}
        alt={project.title}
        isHovered={isHovered}
      />

      {/* Bottom Gradient Label */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/85 to-transparent pointer-events-none z-10 flex flex-col justify-end p-5">
        <h4 className="text-base sm:text-lg font-bold text-foreground text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.8)] truncate">
          {project.title}
        </h4>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-xs bg-primary/20 text-primary border border-primary/30 rounded-md px-2 py-0.5 font-medium">
            {project.category}
          </span>
          <span className="text-xs text-muted-foreground group-hover:text-foreground group-hover:underline flex items-center gap-1">
            Details <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

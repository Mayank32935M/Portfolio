import { EXPERIENCE } from "@/data/constants";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="flex flex-col items-center justify-center min-h-screen py-24 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <SectionHeader
          id="experience"
          title="Education & Milestones"
          desc="Academic journey at USAR GGSIPU and national hackathon achievements"
          className="mb-14"
        />

        <div className="flex flex-col gap-6 md:gap-8 relative pointer-events-auto">
          {/* Timeline Connector Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-border/60 hidden md:block -translate-x-1/2" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className="relative rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 md:p-8 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {exp.id === 1 ? (
                      <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <Award className="w-5 h-5 text-amber-500 shrink-0" />
                    )}
                    <h4 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                      {exp.title}
                    </h4>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {exp.company}
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary/80 border border-border text-foreground w-fit">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>

              <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;

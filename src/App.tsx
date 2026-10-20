import SmoothScroll from "@/components/smooth-scroll";
import AnimatedBackground from "@/components/animated-background";
import Particles from "@/components/Particles";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import ContactSection from "@/components/sections/contact";
import { usePerfProfile } from "@/hooks/use-perf-profile";

export function App() {
  const { particleCount, maxDpr } = usePerfProfile();

  return (
    <SmoothScroll>
      {/* 1. Ambient Background Particles */}
      {particleCount > 0 && (
        <Particles
          className="fixed inset-0 -z-10 animate-fade-in"
          quantity={particleCount}
          maxDpr={maxDpr}
        />
      )}

      {/* 2. Interactive 3D WebGL Mechanical Keyboard Canvas */}
      <AnimatedBackground />

      {/* 3. Fixed Navigation Header */}
      <Header />

      {/* 4. Main Content Sections */}
      <main className="canvas-overlay-mode relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* 5. Footer */}
      <Footer />
    </SmoothScroll>
  );
}

export default App;

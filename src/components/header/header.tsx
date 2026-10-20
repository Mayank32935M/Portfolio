import { useState, useEffect } from "react";
import { config } from "@/data/config";
import { Volume2, VolumeX, Moon, Sun } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { getSoundMuted, toggleSoundMuted } from "../keyboard/use-keyboard-sounds";

export default function Header() {
  const [muted, setMuted] = useState(getSoundMuted());
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(isDarkClass);
  }, []);

  const handleToggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleToggleSound = () => {
    const nextMuted = toggleSoundMuted();
    setMuted(nextMuted);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 h-16 border-b border-border/40 bg-background/70 backdrop-blur-md pointer-events-auto">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground font-display font-bold text-xs flex items-center justify-center transition-transform group-hover:scale-105">
            MD
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-foreground hidden sm:inline">
            Mayank Dabas
          </span>
        </a>

        {/* Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <a href="#hero" className="hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-foreground transition-colors">
            Education
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Controls: Audio, Theme & GitHub */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Keycap Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className="p-2 rounded-lg border border-border/80 bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
            title={muted ? "Unmute mechanical keyboard clicks" : "Mute mechanical keyboard clicks"}
            aria-label="Toggle keyboard audio"
          >
            {muted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-lg border border-border/80 bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            aria-label="Toggle color theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          {/* GitHub Profile */}
          <a
            href={config.social.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-border/80 bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
            title="GitHub Repository"
          >
            <SiGithub className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

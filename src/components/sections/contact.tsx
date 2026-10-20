import React, { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { config } from "@/data/config";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create pre-filled mailto link as reliable zero-infrastructure delivery
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Sender: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${config.social.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" className="min-h-screen py-24 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl mx-auto">
        <SectionHeader
          id="contact"
          title="Get In Touch"
          desc="Let's build something intelligent and meaningful together"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pointer-events-auto">
          {/* Contact Details & Links */}
          <div className="space-y-6 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-foreground">
              Contact Information
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am open to machine learning engineering projects, technical collaborations, research discussions, and creative technology opportunities.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${config.social.email}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-secondary/30 text-sm text-foreground hover:border-primary/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground block font-medium">Direct Email</span>
                  <span className="font-medium text-foreground">{config.social.email}</span>
                </div>
              </a>

              <a
                href={config.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-secondary/30 text-sm text-foreground hover:border-primary/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <SiGithub className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground block font-medium">GitHub Repository</span>
                  <span className="font-medium text-foreground">github.com/Mayank32935M</span>
                </div>
              </a>

              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-secondary/30 text-sm text-foreground hover:border-primary/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FaLinkedin className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground block font-medium">Professional Network</span>
                  <span className="font-medium text-foreground">linkedin.com/in/mayank-dabas</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Send a Message
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <h4 className="font-semibold text-foreground">Message Prepared!</h4>
                <p className="text-xs text-muted-foreground">
                  Your email client has been opened with your pre-formatted message.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-primary underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note, feedback, or project idea..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;

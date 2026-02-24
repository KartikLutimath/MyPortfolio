import { useState, useEffect } from "react";
import { Code, Terminal, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, roles } from "@/data/mock";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.slice(0, displayText.length + 1));
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(role.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                {personalInfo.role} @ {personalInfo.company}
              </span>
            </div>

            {/* Name heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-primary">{personalInfo.name.split(" ")[0]}</span>
              <br />
              {personalInfo.name.split(" ")[1]}
            </h1>

            {/* Typewriter role */}
            <div className="h-8 mb-6">
              <span className="text-lg font-mono text-muted-foreground">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
              </span>
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
              Building clean, efficient, and user-friendly applications. Based in{" "}
              <span className="text-primary">Bangalore, Karnataka, India.</span>
            </p>

            {/* Social links row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-8">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                {personalInfo.email}
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Github size={16} />
                KartikLutimath
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin size={16} />
                kartiklutimath
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold emerald-glow rounded-full px-8"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary rounded-full px-8"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right side - Code card + Stats */}
          <div className="hidden lg:flex flex-col gap-6 animate-fade-in-right delay-200">
            {/* Code block card */}
            <div className="terminal-card rounded-xl overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="text-xs text-muted-foreground ml-2 font-mono">kartik.profile</span>
              </div>
              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-7">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                </p>
                <p className="pl-6">
                  <span className="text-blue-300">name</span>
                  <span className="text-foreground">: </span>
                  <span className="text-primary">"Kartik Lutimath"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="pl-6">
                  <span className="text-blue-300">role</span>
                  <span className="text-foreground">: </span>
                  <span className="text-primary">"Associate Software Engineer"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="pl-6">
                  <span className="text-blue-300">location</span>
                  <span className="text-foreground">: </span>
                  <span className="text-primary">"Bangalore, IN"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="pl-6">
                  <span className="text-blue-300">skills</span>
                  <span className="text-foreground">: [</span>
                </p>
                <p className="pl-10">
                  <span className="text-primary">"React"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-primary">"Node.js"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="pl-10">
                  <span className="text-primary">"Python"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-primary">"TypeScript"</span>
                </p>
                <p className="pl-10">
                  <span className="text-primary">"MongoDB"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-primary">"php"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="pl-10">
                  <span className="text-primary">"AI"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-primary">"ML models"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="pl-6">
                  <span className="text-foreground">],</span>
                </p>
                <p className="pl-6">
                  <span className="text-blue-300">experience</span>
                  <span className="text-foreground">: </span>
                  <span className="text-primary">"1+ years"</span>
                  <span className="text-foreground">,</span>
                </p>
                
                <p>
                  <span className="text-foreground">{"};"}</span>
                </p>
                <p className="mt-3 border-t border-border/30 pt-3">
                  <span className="text-primary">$</span>{" "}
                  <span className="text-muted-foreground">status: </span>
                  <span className="text-primary">"Available for opportunities"</span>
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4+", label: "Projects" },
                { value: "600+", label: "Problems Solved on Leetcode" },
                { value: "Top 10", label: "In InterCollege Hackathon" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-4 px-3 rounded-xl bg-card border border-border card-hover"
                >
                  <p className="text-xl font-bold font-mono text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-fade-in delay-600"
          aria-label="Scroll down"
        >
          <span className="text-xs mb-2 font-mono">scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

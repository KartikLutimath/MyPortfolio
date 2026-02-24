import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Layers, Code, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects, projectFilters, type Project } from "@/data/mock";
import { personalInfo } from "@/data/mock";

const filterIcons: Record<string, React.ElementType> = {
  all: Layers,
  web: Code,
  ai: Shield,
};

const ProjectCard = ({ project, index, inView }: { project: Project; index: number; inView: boolean }) => (
  <Card
    className={`bg-card border-border overflow-hidden group card-hover ${inView ? "animate-fade-in-up" : "opacity-0"}`}
    style={{ animationDelay: `${200 + index * 100}ms` }}
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-secondary border border-border hover:border-primary/40 transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} className="text-foreground" />
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary border border-border hover:border-primary/40 transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink size={20} className="text-foreground" />
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <span className="text-xs text-muted-foreground font-mono whitespace-nowrap ml-2">
          {project.date}
        </span>
      </div>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="skill-badge text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  </Card>
);

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-20">
      <div className="section-container" ref={ref}>
        <h2 className={`section-heading ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          My <span className="text-primary">Projects</span>
        </h2>
        <p className={`section-subheading ${inView ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          Here are some of the projects I've worked on. Each provided unique challenges and learning opportunities.
        </p>

        {/* Filter tabs */}
        <div className={`flex justify-center mb-10 ${inView ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          <div className="inline-flex rounded-lg bg-secondary p-1 border border-border">
            {projectFilters.map((f) => {
              const Icon = filterIcons[f.value] || Layers;
              return (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    filter === f.value
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={14} />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* View more */}
        <div className={`text-center mt-12 ${inView ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10" asChild>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

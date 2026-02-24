import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, Server, Database, Wrench, BookOpen } from "lucide-react";
import { technicalSkills, categorizedSkills } from "@/data/mock";

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code2,
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  DevTools: Wrench,
  "Core CS": BookOpen,
};

const SkillBar = ({ name, level, inView, delay }: { name: string; level: number; inView: boolean; delay: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-mono text-foreground">{name}</span>
      <span className="font-mono text-primary">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
        style={{
          width: inView ? `${level}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="section-container" ref={ref}>
        <h2 className={`section-heading ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          My <span className="text-primary">Skills</span>
        </h2>
        <p className={`section-subheading ${inView ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          Technologies and tools I've worked with throughout my journey as a software engineer.
        </p>

        {/* Progress bars */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 ${inView ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          {technicalSkills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} inView={inView} delay={200 + i * 100} />
          ))}
        </div>

        {/* Categorized badges */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${inView ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
          {Object.entries(categorizedSkills).map(([category, skills]) => {
            const Icon = categoryIcons[category] || Code2;
            return (
              <Card key={category} className="bg-card border-border card-hover">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base font-semibold">
                    <Icon size={18} className="text-primary" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="skill-badge">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, Award, Zap, Code2, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutBio, traits, education, experience, achievements } from "@/data/mock";

const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const traitIcons = [Zap, Code2, Users, BookOpen];

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-20">
      <div className="section-container" ref={ref}>
        <h2 className={`section-heading ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          About <span className="text-primary">Me</span>
        </h2>
        <p className={`section-subheading ${inView ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          Get to know me and my journey in software development
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Bio */}
          <div className={inView ? "animate-fade-in-left delay-200" : "opacity-0"}>
            {aboutBio.map((para, i) => (
              <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                {para}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 mt-6">
              {traits.map((trait, i) => (
                <Badge key={trait} variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm bg-secondary border border-border hover:border-primary/40 transition-colors">
                  {traitIcons[i] && (() => { const Icon = traitIcons[i]; return <Icon size={14} className="text-primary" />; })()}
                  {trait}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right - Cards */}
          <div className={`space-y-6 ${inView ? "animate-fade-in-right delay-300" : "opacity-0"}`}>
            <Card className="bg-card border-border card-hover">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm mb-1">{education.degree}</p>
                  <p className="text-muted-foreground/70 text-xs">
                    {education.institution}
                    <br />
                    {education.period} | CGPA: {education.cgpa}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border card-hover">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Experience</h3>
                  <div className="space-y-3">
                    {experience.map((exp, i) => (
                      <div key={i} className={i > 0 ? "pt-3 border-t border-border" : ""}>
                        <p className="text-muted-foreground text-sm mb-1">
                          {exp.role} — {exp.company}
                        </p>
                        <p className="text-muted-foreground/70 text-xs">
                          {exp.period} | {exp.location}
                          <br />
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border card-hover">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Achievements</h3>
                  <ul className="space-y-1">
                    {achievements.map((a, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

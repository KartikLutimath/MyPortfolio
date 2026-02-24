import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/data/mock";
import { submitContactForm } from "@/services/contactService";

const contactInfo = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: "Location", value: personalInfo.location },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: personalInfo.github },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const result = await submitContactForm(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } else {
      setSubmitError(result.message);
      setTimeout(() => setSubmitError(""), 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container" ref={ref}>
        <h2 className={`section-heading ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className={`section-subheading ${inView ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Contact info */}
          <div className={inView ? "animate-fade-in-left delay-200" : "opacity-0"}>
            <Card className="bg-card border-border h-full">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                          <Icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{label}</p>
                          {href ? (
                            <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm text-foreground">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-4">Social</h3>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-secondary border border-border hover:border-primary/40 transition-colors"
                        aria-label={label}
                      >
                        <Icon size={20} className="text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Form */}
          <div className={inView ? "animate-fade-in-right delay-300" : "opacity-0"}>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm text-muted-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Your name"
                      required
                      className="mt-1.5 bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm text-muted-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                      className="mt-1.5 bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm text-muted-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      placeholder="Your message..."
                      required
                      rows={5}
                      className="mt-1.5 bg-secondary border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  {submitSuccess && (
                    <p className="text-primary text-sm text-center font-mono">
                      ✓ Message sent successfully!
                    </p>
                  )}
                  {submitError && (
                    <p className="text-red-500 text-sm text-center font-mono">
                      ✗ {submitError}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

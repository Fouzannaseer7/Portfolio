import { useState, useRef } from "react";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const socialLinks = [
    { name: "Email", icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=Fouzannaseer7@gmail.com", color: "primary" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/fouzan-naseer", color: "primary" },
    { name: "GitHub", icon: Github, href: "https://github.com/Fouzannaseer7", color: "foreground" },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground";
      case "accent":
        return "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground";
      default:
        return "bg-muted text-foreground hover:bg-foreground hover:text-background";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_bbtdnqa",
        "template_qymrve5",
        formRef.current,
        "7sbY75wHCtQ71Mij-"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contact</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and data science.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left side - Info */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you have a question, want to discuss a project, or just want to say hi, 
                  feel free to reach out through any of these platforms.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors duration-300 group"
                      >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${getColorClasses(link.color)}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-medium text-foreground">{link.name}</span>
                          <p className="text-sm text-muted-foreground">Connect with me</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Right side - Quick message */}
              <div className="bg-muted/30 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Message</h4>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="mr-2 animate-spin" size={20} />
                    ) : (
                      <Send className="mr-2" size={20} />
                    )}
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

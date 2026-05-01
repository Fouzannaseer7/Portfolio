import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react"; 
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Helper component for consistent cross-device behavior
  const CVLink = ({ className }: { className?: string }) => (
    <a 
      href="./resume.pdf" // MUST rename your file in public folder to match this
      download="Fouzan_Naseer_Resume.pdf"
      target="_blank" 
      rel="noopener noreferrer"
      className={className}
    >
      <Download size={18} />
      Download CV
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl md:text-2xl font-bold text-foreground">
            Fouzan Naseer
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="hero" size="default" asChild>
              <CVLink className="flex items-center gap-2" />
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2 w-full" asChild>
                <CVLink className="flex items-center justify-center gap-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
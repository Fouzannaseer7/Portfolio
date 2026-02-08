import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/fouzan-profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 bg-secondary/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 left-10 w-24 h-24 md:w-40 md:h-40 bg-primary/20 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse-glow" />
      
      {/* Decorative lines */}
      <div className="absolute top-40 left-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-primary/30">
          <path d="M10 30 Q30 10, 50 30 Q30 50, 10 30" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Artificial Intelligence & Data Science Student
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up animation-delay-200">
              Hello, I'm<br />
              <span className="text-gradient">Fouzan Naseer</span>
            </h1>
            
           <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-slide-up animation-delay-400 text-justify">
            Passionate about transforming data into actionable insights. 
            Currently pursuing B.Tech in Artificial Intelligence & Data Science at B.S. Abdur Rahman Crescent Institute.
          </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-600">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 animate-fade-in animation-delay-600">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground">2024</div>
                <div className="text-sm text-muted-foreground">Started Journey</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground">AI/DS</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative animate-fade-in">
              {/* Subtle professional shadow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-foreground/5 to-foreground/10 rounded-2xl blur-xl" />
              
              {/* Main image container - clean professional frame */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border border-border shadow-xl">
                <img
                  src={profileImage}
                  alt="Fouzan Naseer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Elegant dark gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                
                {/* Name overlay on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-background">Fouzan Naseer</h3>
                  <p className="text-sm text-background/80">Artificial Intelligence & Data Science</p>
                </div>
              </div>

              {/* Experience badge - professional muted style */}
              <div className="absolute -right-4 top-6 bg-foreground text-background rounded-lg px-4 py-2.5 shadow-lg animate-float-slow">
                <div className="text-lg font-bold">B.Tech</div>
                <div className="text-xs opacity-80">2024 - 2027</div>
              </div>

              {/* Status indicator - minimal */}
              <div className="absolute -left-2 bottom-20 bg-background rounded-full px-3 py-1.5 shadow-lg border border-border flex items-center gap-2 animate-float">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-xs font-medium text-foreground">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

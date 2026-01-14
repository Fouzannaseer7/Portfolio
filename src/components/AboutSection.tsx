import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - decorative */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Abstract shapes */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-primary rounded-3xl rotate-6 opacity-20" />
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-secondary rounded-3xl -rotate-6" />
              <div className="absolute inset-8 bg-card rounded-2xl shadow-card flex items-center justify-center">
                <div className="text-center p-8">
                  <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Education</h3>
                  <p className="text-muted-foreground">Building the future with AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Designing Solutions, Not Just Visuals
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Detail-oriented and motivated Artificial Intelligence & Data Science student with a strong background in machine learning and data analysis. Having a strong belief in professionalism, positive attitude, and dedication, eagerness to learn and implement, capability of understanding and implementing modern technology quickly. Capable of surviving in solo projects and group projects.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">B.Tech in AI & Data Science</h4>
                  <p className="text-muted-foreground text-sm">B. S. Abdur Rahman Crescent Institute of Science and Technology</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">B.Tech 2024 - 2027</h4>
                  <p className="text-muted-foreground text-sm">Expected graduation timeline</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Current Status</h4>
                  <p className="text-muted-foreground text-sm">Active Student • Open to Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

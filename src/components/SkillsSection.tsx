import { Code2, Database, BarChart3, Users, Brain, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      color: "primary",
      skills: ["Python", "SQL", "R", "C", "C++"],
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "primary",
      skills: ["Matplotlib", "Seaborn", "Tableau"],
    },
    {
      title: "Data Tools",
      icon: Database,
      color: "primary",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "primary",
      skills: ["Communication", "Problem Solving", "Team Collaboration", "Critical Thinking"],
    },
    {
      title: "AI/ML Concepts",
      icon: Brain,
      color: "primary",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    },
    {
      title: "Additional",
      icon: Lightbulb,
      color: "primary",
      skills: ["Git/GitHub", "Jupyter", "Excel"],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          icon: "text-primary",
          hover: "hover:border-primary/50",
          skill: "bg-primary/5 text-primary",
        };
      case "secondary":
        return {
          bg: "bg-secondary/30",
          icon: "text-secondary-foreground",
          hover: "hover:border-secondary",
          skill: "bg-secondary/20 text-secondary-foreground",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          icon: "text-accent",
          hover: "hover:border-accent/50",
          skill: "bg-accent/10 text-accent",
        };
      default:
        return {
          bg: "bg-muted",
          icon: "text-foreground",
          hover: "hover:border-border",
          skill: "bg-muted text-foreground",
        };
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Expertise & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit combining technical proficiency with essential soft skills, 
            ready to tackle complex data challenges.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div
                key={category.title}
                className={`group p-6 bg-card rounded-2xl border border-border ${colors.hover} transition-all duration-300 hover:shadow-card hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 ${colors.skill} rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

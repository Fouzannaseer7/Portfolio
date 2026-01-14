import { FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import diseasePredictionImg from "@/assets/disease-prediction-project.png";
import hospitalManagementImg from "@/assets/hospital-management-project.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "🧠 AI-Based Disease Prediction System",
      description: "I developed an intelligent healthcare web application that helps users identify possible diseases based on the symptoms they experience, using a machine learning model trained on real medical data to provide accurate predictions along with an easy-to-understand confidence score. I was responsible for the complete development process — from cleaning and preparing the data, building and training the model, to designing the user interface and deploying the application. The system was built using Python, Scikit-Learn, Flask, and Streamlit, with strong focus on performance optimization and creating a smooth, user-friendly experience. This project reflects my ability to transform data into real-world solutions while building applications that balance technical strength with practical usability.",
      image: diseasePredictionImg,
      tags: ["Python", "Scikit-Learn", "Flask", "Streamlit", "Machine Learning"],
      github: "https://github.com/Fouzannaseer7",
    },
    {
      title: "🏥 Hospital Management System | Full-Stack Web Application",
      description: "Developed a full-stack Hospital Management System using Flask and MySQL with secure authentication, role-based access for Admin, Doctor, and Patient, and real-time appointment scheduling. Implemented medical record management, automated notifications, dynamic time-slot generation, and conflict prevention to avoid double bookings. The system ensures data security through password hashing and session management while delivering a reliable, user-friendly platform that simulates real hospital workflows.",
      image: hospitalManagementImg,
      tags: ["Python", "Flask", "MySQL", "HTML/CSS", "Jinja2", "Flask-Session", "Werkzeug Security"],
      github: "https://github.com/Fouzannaseer7",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Projects & Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through various data science and AI projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
             <div className="relative h-64 md:h-80 overflow-hidden group"> {/* Added 'group' */}
             <img
                  src={project.image}
                  alt={project.title}
                  /* Added transition and group-hover:scale-110 */
                  className="w-full h-full object-cover object-top scale-200"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FolderGit2 className="mr-2" size={20} />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for future projects */}
        <div className="mt-12 opacity-50">
          <div className="bg-card/50 rounded-2xl h-48 border-2 border-dashed border-border flex items-center justify-center max-w-md mx-auto">
            <span className="text-muted-foreground font-medium">More Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-cream border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold text-foreground">
            Fouzan Naseer
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            First Dollar Down
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/story" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/getting-started" className="text-foreground hover:text-primary transition-colors">
            Resources
          </Link>
        </div>
        
        <Link to="/getting-started">
          <Button variant="hero" size="sm">
            Start Learning
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
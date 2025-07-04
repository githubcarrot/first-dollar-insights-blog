import { Button } from "@/components/ui/button";

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
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </a>
          <a href="#resources" className="text-foreground hover:text-primary transition-colors">
            Resources
          </a>
        </div>
        
        <Button variant="hero" size="sm">
          Start Learning
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
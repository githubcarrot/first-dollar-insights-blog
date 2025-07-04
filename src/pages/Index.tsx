import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BlogPreview from "@/components/BlogPreview";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <BlogPreview />
      <CallToAction />
      
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            First Dollar Down
          </div>
          <p className="text-muted-foreground text-sm">
            Empowering teens to take control of their financial future.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2024 First Dollar Down. Educational content only, not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
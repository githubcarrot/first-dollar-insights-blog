import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, BookOpen, ChartBar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Meet Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Teen Finance Guide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a high school student who turned passion for finance into real results. 
            Here's how I went from curious teen to competitive investor.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Started investing as a sophomore with birthday money and curiosity. 
              What began as small experiments became serious study, competition success, 
              and portfolio growth that exceeded all expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through state and national business competitions, I've learned finance 
              isn't just about money—it's about understanding value, risk, and making 
              informed decisions that set up your future.
            </p>
            <Button variant="finance" size="lg">
              Read Full Story
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Competition Success</h4>
              <p className="text-muted-foreground text-sm">
                State & national level business competition finalist
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <ChartBar className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Real Returns</h4>
              <p className="text-muted-foreground text-sm">
                300%+ portfolio growth over 2 years
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Teen Focus</h4>
              <p className="text-muted-foreground text-sm">
                Strategies designed specifically for young investors
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Learning First</h4>
              <p className="text-muted-foreground text-sm">
                Education and understanding before any investment
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
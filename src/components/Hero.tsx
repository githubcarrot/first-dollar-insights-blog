import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Award, Users, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-finance-teens.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-subtle pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  First Dollar Down
                </span>{" "}
                in Finance
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Real finance advice from a real teen investor. Learn the strategies that helped me achieve{" "}
                <span className="text-accent font-semibold">300+ returns</span> and compete at national levels.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Read My Story
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">300%+</div>
                <div className="text-sm text-muted-foreground">Returns</div>
              </Card>
              <Card className="p-4 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">State</div>
                <div className="text-sm text-muted-foreground">Competitor</div>
              </Card>
              <Card className="p-4 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Teen</div>
                <div className="text-sm text-muted-foreground">Focused</div>
              </Card>
              <Card className="p-4 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <DollarSign className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Real</div>
                <div className="text-sm text-muted-foreground">Results</div>
              </Card>
            </div>
          </div>
          
          <div className="lg:order-first">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Teens learning finance" 
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
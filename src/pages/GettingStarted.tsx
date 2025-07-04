import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BookOpen, TrendingUp, Target, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  const steps = [
    {
      number: "01",
      title: "Learn the Basics",
      description: "Start with fundamental concepts like compound interest, risk vs reward, and different types of investments.",
      action: "Read beginner guides",
      icon: BookOpen
    },
    {
      number: "02", 
      title: "Set Your Goals",
      description: "Define what you want to achieve - college fund, first car, or long-term wealth building.",
      action: "Create your plan",
      icon: Target
    },
    {
      number: "03",
      title: "Start Small",
      description: "Begin with what you can afford to lose. Even $25-50 can teach you valuable lessons.",
      action: "Open an account",
      icon: TrendingUp
    },
    {
      number: "04",
      title: "Join the Community",
      description: "Connect with other teen investors to share experiences and learn together.",
      action: "Join our Discord",
      icon: Users
    }
  ];

  const resources = [
    {
      title: "Essential Reading List",
      items: [
        "The Intelligent Investor by Benjamin Graham",
        "A Random Walk Down Wall Street by Burton Malkiel", 
        "The Bogleheads' Guide to Investing",
        "Rich Dad Poor Dad by Robert Kiyosaki"
      ]
    },
    {
      title: "Free Learning Resources",
      items: [
        "Khan Academy - Personal Finance",
        "Investopedia - Stock Market Basics",
        "SEC.gov - Investor.gov Resources",
        "FINRA - Financial Capability Resources"
      ]
    },
    {
      title: "Practice Tools",
      items: [
        "Paper trading simulators",
        "Financial calculators",
        "Stock screeners",
        "Portfolio trackers"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">
              Getting{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Started
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your roadmap to financial literacy and smart investing as a teenager.
            </p>
          </div>

          {/* Steps Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Your Journey in 4 Steps</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="text-4xl font-bold text-accent/20 mb-4">{step.number}</div>
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  <Button variant="outline" className="w-full">
                    {step.action}
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Essential Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="p-6 shadow-card">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    {resource.title}
                  </h3>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Action Section */}
          <Card className="p-8 text-center shadow-elegant bg-gradient-hero text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Action?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your financial journey today with practical advice from someone who's been there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog">
                <Button variant="secondary" size="lg">
                  Read Success Stories
                </Button>
              </Link>
              <Link to="/story">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Learn My Strategy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
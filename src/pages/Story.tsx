import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Award, BookOpen, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Finance Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              How a high school student achieved 300%+ returns and learned to compete at national levels
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold">The Beginning</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                It all started when I was 15. While most of my friends were focused on video games and social media, 
                I stumbled upon a documentary about Warren Buffett. Something clicked - the idea that money could work 
                for you, not just the other way around.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I started with $200 from my birthday money and a burning curiosity to understand how the stock market worked. 
                That curiosity led me down a rabbit hole of financial education that changed my life.
              </p>
            </Card>

            <Card className="p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold">Learning Through Competition</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Joining FBLA (Future Business Leaders of America) was a game-changer. The finance and investing 
                competitions forced me to learn concepts I never would have encountered otherwise. Studying for 
                nationals taught me about portfolio theory, risk management, and market analysis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Competing at state and national levels wasn't just about winning - it was about proving to myself 
                that I could understand complex financial concepts and apply them in real-world scenarios.
              </p>
            </Card>

            <Card className="p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold">Real Money, Real Results</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The theory was great, but I wanted to put my money where my mouth was. Over the past two years, 
                I've achieved over 300% returns through a combination of growth stocks, tech investments, and 
                careful risk management.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This wasn't luck - it was the result of hundreds of hours of research, learning from mistakes, 
                and applying the principles I learned through competitions and self-study.
              </p>
              <div className="bg-accent/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Important:</strong> Past performance doesn't guarantee future results. My story is 
                  educational, not financial advice. Always do your own research and consider your risk tolerance.
                </p>
              </div>
            </Card>

            <Card className="p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold">Why I Started This Blog</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Financial education isn't taught in most high schools. I was lucky to discover investing early 
                and have the resources to learn, but many teens don't have that opportunity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                First Dollar Down exists to change that. I want to share what I've learned - the strategies, 
                the mistakes, and the mindset shifts - so other teens can start their financial journey with 
                a head start.
              </p>
            </Card>

            <div className="text-center pt-8">
              <Link to="/blog">
                <Button variant="hero" size="lg">
                  Read My Latest Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, TrendingUp, Lightbulb, BookOpen, DollarSign, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "How I Made My First $100 in Stocks",
      excerpt: "The complete breakdown of my first successful investment, including the mistakes I made and lessons learned. I'll walk you through my research process, entry and exit strategies, and what I'd do differently now.",
      readTime: "5 min read",
      category: "Getting Started",
      icon: TrendingUp,
      date: "January 15, 2024"
    },
    {
      title: "Teen Investing: 5 Rules I Follow",
      excerpt: "The fundamental principles that guide every investment decision I make as a high school student. These rules have helped me avoid major losses and stay disciplined during market volatility.",
      readTime: "8 min read", 
      category: "Strategy",
      icon: Lightbulb,
      date: "January 10, 2024"
    },
    {
      title: "Competition Prep: FBLA Finance Events",
      excerpt: "How business competitions taught me real-world finance skills and prepared me for actual investing. Plus, study resources and tips for acing finance competitions.",
      readTime: "6 min read",
      category: "Education",
      icon: BookOpen,
      date: "January 5, 2024"
    },
    {
      title: "Building Your First Investment Portfolio",
      excerpt: "A step-by-step guide to creating a diversified portfolio as a teenager. Learn about asset allocation, risk tolerance, and how to start with just $100.",
      readTime: "10 min read",
      category: "Getting Started",
      icon: Target,
      date: "December 28, 2023"
    },
    {
      title: "Understanding Market Volatility as a Teen",
      excerpt: "Why market ups and downs are normal and how to use volatility to your advantage. Real examples from my own investing experience during market corrections.",
      readTime: "7 min read",
      category: "Strategy",
      icon: TrendingUp,
      date: "December 20, 2023"
    },
    {
      title: "Side Hustles That Fund Your Investments",
      excerpt: "Creative ways teens can earn money to fuel their investment journey. From tutoring to selling online, here are proven methods that actually work.",
      readTime: "9 min read",
      category: "Income",
      icon: DollarSign,
      date: "December 15, 2023"
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
              All{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Blog Posts
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real experiences, practical advice, and honest insights about teen investing and finance education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <post.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-accent">{post.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <span>{post.date}</span>
                </div>
                
                <Button variant="outline" className="w-full">
                  Read Article
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-card rounded-lg shadow-card">
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Want More Content?</h3>
            <p className="text-muted-foreground mb-6">
              Join our newsletter to get the latest posts, investment insights, and teen finance tips delivered to your inbox.
            </p>
            <Button variant="hero" size="lg">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
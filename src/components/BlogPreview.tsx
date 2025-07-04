import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPreview = () => {
  const posts = [
    {
      title: "How I Made My First $100 in Stocks",
      excerpt: "The complete breakdown of my first successful investment, including the mistakes I made and lessons learned.",
      readTime: "5 min read",
      category: "Getting Started",
      icon: TrendingUp,
    },
    {
      title: "Teen Investing: 5 Rules I Follow",
      excerpt: "The fundamental principles that guide every investment decision I make as a high school student.",
      readTime: "8 min read", 
      category: "Strategy",
      icon: Lightbulb,
    },
    {
      title: "Competition Prep: FBLA Finance Events",
      excerpt: "How business competitions taught me real-world finance skills and prepared me for actual investing.",
      readTime: "6 min read",
      category: "Education",
      icon: BookOpen,
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Latest from the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences, practical advice, and honest insights about teen investing and finance education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/blog">
            <Button variant="finance" size="lg">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
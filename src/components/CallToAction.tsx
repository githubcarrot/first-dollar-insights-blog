import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Finance Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Join thousands of teens who are learning to invest, save, and build wealth. 
            Get exclusive content, tips, and resources delivered to your inbox.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 shadow-glow">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Weekly Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get my latest insights, market updates, and teen-focused finance tips.
              </p>
              <Button variant="finance" className="w-full">
                Subscribe Now
              </Button>
            </Card>
            
            <Card className="p-6 shadow-glow">
              <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Join the Community</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with other teen investors and share your journey.
              </p>
              <Button variant="outline" className="w-full">
                Join Discord
              </Button>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Start Reading
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-primary-foreground/60 text-sm">
              No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
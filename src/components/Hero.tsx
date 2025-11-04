import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-grid-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-neon-teal/30 mb-8">
            <Sparkles className="w-4 h-4 neon-teal" />
            <span className="text-sm font-medium text-muted-foreground">
              Creative + Automation Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            We Craft Brands.
            <br />
            <span className="neon-teal">Build Systems.</span>
            <br />
            <span className="neon-lime">Automate Growth.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Helping startups and creators launch bold brands, sleek websites, 
            and intelligent automation systems that scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-neon-teal text-primary-foreground hover:bg-neon-teal/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,240,255,0.5)] px-8 py-6 text-lg"
            >
              Start Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-neon-lime/50 text-neon-lime hover:bg-neon-lime/10 hover:border-neon-lime transition-all duration-300 px-8 py-6 text-lg"
            >
              See Work
            </Button>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 animate-grid-float">
          <div className="w-16 h-16 border-2 border-neon-pink/30 rounded-lg rotate-12" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-grid-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 border-2 border-neon-lime/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

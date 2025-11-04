import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-brand-light/20 to-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-light/40 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="animate-fade-up max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img src={logo} alt="Orizonix Logo" className="w-20 h-20 md:w-24 md:h-24" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/50 border border-brand-blue/20 mb-6">
            <Sparkles className="w-4 h-4 brand-blue" />
            <span className="text-sm font-medium text-muted-foreground">
              Creative + Automation Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-brand-primary">
            Craft. Build. Automate.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 px-4">
            Bold brands, sleek websites, and intelligent automation for startups and creators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 justify-center items-center">
            <Button 
              className="group bg-brand-primary text-primary-foreground hover:bg-brand-blue transition-all duration-300 premium-shadow hover:premium-shadow-lg px-6 md:px-8 py-5 md:py-6 text-sm md:text-base"
            >
              Start Project
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-brand-primary/30 text-brand-primary hover:bg-brand-light/50 hover:border-brand-blue transition-all duration-300 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base"
            >
              See Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

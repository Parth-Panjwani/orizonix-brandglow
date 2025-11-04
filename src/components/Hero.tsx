import { Button } from "@/components/ui/button";
import { ArrowRight, Link, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import HeroScene from "./HeroScene";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.4),_rgba(15,23,42,0.85))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(20,184,166,0.25),_transparent_55%)] mix-blend-screen" />
      <HeroScene />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(15,23,42,0.35),_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center text-white">
        <div className="animate-fade-up max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img
              src={logo}
              alt="Orizonix Logo"
              className="w-32 h-32 md:w-40 md:h-40" // increased from 20/24
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur mb-6">
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span className="text-sm font-medium text-slate-100">
              Creative + Automation Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-[0_10px_35px_rgba(79,70,229,0.35)]">
            Craft. Build. Automate.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto mb-8 px-4">
            Bold brands, sleek websites, and intelligent automation for startups
            and creators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 justify-center items-center">
            <Button
              asChild
              className="group bg-brand-primary text-primary-foreground hover:bg-brand-blue transition-all duration-300 premium-shadow hover:premium-shadow-lg px-6 md:px-8 py-5 md:py-6 text-sm md:text-base"
            >
              <a href="#pricing">
                Start Project
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base"
            >
              See Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 text-left">
            {["Design Systems", "Automation Blueprints", "Growth Experiments"].map(
              (item, index) => (
                <div
                  key={item}
                  className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg px-6 py-5 shadow-[0_10px_40px_rgba(15,23,42,0.35)] transition hover:border-white/30"
                >
                  <div className="text-sm uppercase tracking-widest text-slate-200/70">
                    0{index + 1}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    {item}
                  </div>
                  <p className="mt-2 text-sm text-slate-200/80">
                    Tailored strategies that blend immersive design with
                    intelligent workflows to accelerate modern brands.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-sky-200">
                    <Link className="h-4 w-4" />
                    Explore capabilities
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

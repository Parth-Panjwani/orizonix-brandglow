import { Zap, Target, Rocket, Shield } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We move at startup speed — launch-ready brands and sites in weeks, not months.",
  },
  {
    icon: Target,
    title: "Data-Driven Strategy",
    description: "Every decision backed by insights, analytics, and proven growth frameworks.",
  },
  {
    icon: Rocket,
    title: "End-to-End Solutions",
    description: "From brand identity to automated lead systems — we handle it all seamlessly.",
  },
  {
    icon: Shield,
    title: "Future-Proof Tech",
    description: "Built with modern stacks, scalable infrastructure, and AI-powered automation.",
  },
];

const WhyOrizonix = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-brand-primary">
            Why Orizonix?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just an agency — we're your growth partner
          </p>
        </div>

        {/* Grid - 2 columns on all screens */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 bg-white border border-border rounded-xl hover:border-brand-blue/60 hover:bg-gradient-to-br hover:from-brand-light/40 hover:to-white transition-all duration-300 premium-shadow hover:premium-shadow-lg hover:-translate-y-1 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-brand-light/50 group-hover:bg-brand-blue/20 group-hover:rotate-6 transition-all duration-300">
                <reason.icon className="w-5 h-5 md:w-6 md:h-6 brand-blue group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 text-brand-primary group-hover:text-brand-blue transition-colors">
                {reason.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrizonix;

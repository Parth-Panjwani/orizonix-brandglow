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

        {/* Grid - Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 bg-white border border-border rounded-xl hover:border-brand-blue/40 transition-all duration-300 premium-shadow hover:premium-shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-brand-light/50 group-hover:bg-brand-blue/10 transition-colors">
                <reason.icon className="w-6 h-6 brand-blue" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-brand-primary">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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

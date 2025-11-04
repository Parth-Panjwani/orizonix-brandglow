import { Zap, Target, Rocket, Shield } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We move at startup speed — launch-ready brands and sites in weeks, not months.",
    color: "neon-teal",
  },
  {
    icon: Target,
    title: "Data-Driven Strategy",
    description: "Every decision backed by insights, analytics, and proven growth frameworks.",
    color: "neon-lime",
  },
  {
    icon: Rocket,
    title: "End-to-End Solutions",
    description: "From brand identity to automated lead systems — we handle it all seamlessly.",
    color: "neon-pink",
  },
  {
    icon: Shield,
    title: "Future-Proof Tech",
    description: "Built with modern stacks, scalable infrastructure, and AI-powered automation.",
    color: "neon-teal",
  },
];

const WhyOrizonix = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="neon-pink">Orizonix</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just an agency — we're your growth partner
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 rounded-xl bg-card/50 border border-border hover:border-neon-teal/30 transition-all duration-300 group"
            >
              {/* Icon Badge */}
              <div className={`flex-shrink-0 ${reason.color} p-4 rounded-lg bg-secondary/50 h-fit group-hover:animate-pulse-glow`}>
                <reason.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-teal transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrizonix;

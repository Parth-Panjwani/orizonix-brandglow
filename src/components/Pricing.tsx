import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹8,000",
    period: "/project",
    description: "Perfect for new ventures and MVPs",
    features: [
      "Brand Identity Design",
      "Landing Page Design + Build",
      "Mobile Responsive",
      "Basic SEO Setup",
      "1 Round of Revisions",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹15,000",
    period: "/project",
    description: "For businesses ready to scale",
    features: [
      "Everything in Starter",
      "Multi-page Website (up to 5 pages)",
      "Lead Automation Setup",
      "Custom Integrations (n8n/Airtable)",
      "2 Rounds of Revisions",
      "30-day Support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "₹30,000",
    period: "/project",
    description: "Full-service brand + tech transformation",
    features: [
      "Everything in Growth",
      "Advanced Automation Workflows",
      "AI Voice Agent Setup",
      "Go-to-Market Strategy",
      "Unlimited Revisions",
      "90-day Priority Support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-16 md:py-20 px-6 bg-secondary/30 scroll-mt-28"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-brand-primary">
            Choose Your Plan
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for every stage of your journey
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 bg-white rounded-xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-brand-blue premium-shadow-lg ring-2 ring-brand-blue/20"
                  : "border-border premium-shadow hover:border-brand-blue/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-primary text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-brand-primary">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-brand-primary">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-brand-primary text-white hover:bg-brand-blue"
                    : "border-brand-primary/30 text-brand-primary hover:bg-brand-light/50"
                } transition-all duration-300`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

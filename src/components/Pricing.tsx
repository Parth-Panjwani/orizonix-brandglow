import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/project",
    description: "Perfect for new ventures and MVPs",
    features: [
      "Brand Identity Design",
      "Landing Page Design + Build",
      "Mobile Responsive",
      "Basic SEO Setup",
      "1 Round of Revisions",
    ],
    borderColor: "neon-teal",
    popular: false,
  },
  {
    name: "Growth",
    price: "$5,000",
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
    borderColor: "neon-lime",
    popular: true,
  },
  {
    name: "Scale",
    price: "$10,000",
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
    borderColor: "neon-pink",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="neon-teal">Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for every stage of your journey
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-card hover:-translate-y-2 transition-all duration-300 ${
                plan.popular
                  ? `border-2 border-${plan.borderColor}/70 shadow-[0_0_40px_rgba(194,255,61,0.2)]`
                  : `border border-${plan.borderColor}/30 hover:border-${plan.borderColor}/50`
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-neon-lime text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 ${plan.borderColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? `bg-neon-lime text-primary-foreground hover:bg-neon-lime/90 shadow-[0_0_20px_rgba(194,255,61,0.3)]`
                    : "border border-neon-teal/50 hover:bg-neon-teal/10"
                } transition-all duration-300`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

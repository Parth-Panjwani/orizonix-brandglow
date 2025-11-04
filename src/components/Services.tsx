import { Palette, Globe, Workflow, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Build memorable brands with cohesive visual systems and compelling stories.",
    color: "neon-teal",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Launch sleek, responsive websites optimized for conversion and delight.",
    color: "neon-lime",
  },
  {
    icon: Workflow,
    title: "AI Automation & Lead Funnels",
    description: "Automate workflows with n8n, Airtable, and AI voice agents for seamless growth.",
    color: "neon-pink",
  },
  {
    icon: TrendingUp,
    title: "Go-to-Market Strategy",
    description: "Craft data-driven strategies and systems to accelerate your market entry.",
    color: "neon-teal",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="neon-lime">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions for modern brands and digital businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-6 bg-card border-border hover:border-neon-teal/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,240,255,0.2)] hover:-translate-y-2"
            >
              <div className={`${service.color} mb-4 inline-block p-3 rounded-lg bg-secondary/50 group-hover:animate-pulse-glow`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-teal transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

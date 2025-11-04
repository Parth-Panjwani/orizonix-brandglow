import { Palette, Globe, Workflow, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Build memorable brands with cohesive visual systems and compelling stories.",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Launch sleek, responsive websites optimized for conversion and delight.",
  },
  {
    icon: Workflow,
    title: "AI Automation & Lead Funnels",
    description: "Automate workflows with n8n, Airtable, and AI voice agents for seamless growth.",
  },
  {
    icon: TrendingUp,
    title: "Go-to-Market Strategy",
    description: "Craft data-driven strategies and systems to accelerate your market entry.",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-brand-primary">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions for modern brands and digital businesses
          </p>
        </div>

        {/* Services Grid - Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white border border-border rounded-xl hover:border-brand-blue/40 hover:bg-brand-light/30 transition-all duration-300 premium-shadow hover:premium-shadow-lg hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-brand-light/50 group-hover:bg-brand-blue/10 transition-colors">
                <service.icon className="w-8 h-8 brand-blue" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-brand-primary">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

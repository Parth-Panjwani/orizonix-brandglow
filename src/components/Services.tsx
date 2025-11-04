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

        {/* Services Grid - 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center p-4 md:p-6 bg-white border border-border rounded-xl hover:border-brand-blue/60 hover:bg-brand-light/30 transition-all duration-300 premium-shadow hover:premium-shadow-lg hover:-translate-y-2 hover:scale-105"
            >
              {/* Icon Circle */}
              <div className="mb-3 md:mb-4 mx-auto w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-brand-light/50 group-hover:bg-brand-blue/20 group-hover:rotate-12 transition-all duration-300">
                <service.icon className="w-6 h-6 md:w-8 md:h-8 brand-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 text-brand-primary group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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

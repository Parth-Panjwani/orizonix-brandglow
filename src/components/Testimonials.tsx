import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Orizonix transformed our brand identity and built a website that converts. Their automation setup saves us 20 hours a week.",
    author: "Sarah Chen",
    role: "CEO, TechStart",
    company: "TechStart",
  },
  {
    quote: "The team delivered beyond expectations. Our lead funnel is now fully automated and we've seen a 3x increase in qualified leads.",
    author: "Marcus Johnson",
    role: "Founder, GrowthLab",
    company: "GrowthLab",
  },
  {
    quote: "Professional, creative, and incredibly fast. They understood our vision and brought it to life with precision and style.",
    author: "Emily Rodriguez",
    role: "Creative Director, BrandForge",
    company: "BrandForge",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-brand-primary">
            Client Success Stories
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients who trust Orizonix
          </p>
        </div>

        {/* Testimonials Grid - 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-border rounded-xl hover:border-brand-blue/40 hover:bg-brand-light/20 transition-all duration-300 premium-shadow hover:premium-shadow-lg"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-brand-blue/40" />
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-brand-primary text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

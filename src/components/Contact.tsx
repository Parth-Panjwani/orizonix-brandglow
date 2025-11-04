import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-brand-primary">
          Ready to Build Something
          <br />
          Extraordinary?
        </h2>

        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's turn your vision into reality. Book a call, send a message, or
          just say hi.
        </p>

        {/* CTA Buttons Grid - Always 3 columns */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 max-w-3xl mx-auto">
          <Button className="bg-brand-primary text-white hover:bg-brand-blue transition-all duration-300 premium-shadow hover:premium-shadow-lg py-5 md:py-6 text-xs md:text-base">
            <Mail className="w-4 h-4 md:w-5 md:h-5 md:mr-2" />
            <span className="hidden md:inline">Email Us</span>
          </Button>

          <Button
            variant="outline"
            className="border-brand-primary/30 text-brand-primary hover:bg-brand-light/50 hover:border-brand-blue transition-all duration-300 py-5 md:py-6 text-xs md:text-base"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 md:mr-2" />
            <span className="hidden md:inline">WhatsApp</span>
          </Button>

          {/* <Button
            variant="outline"
            className="border-brand-primary/30 text-brand-primary hover:bg-brand-light/50 hover:border-brand-blue transition-all duration-300 py-5 md:py-6 text-xs md:text-base"
          >
            <Calendar className="w-4 h-4 md:w-5 md:h-5 md:mr-2" />
            <span className="hidden md:inline">Book Call</span>
          </Button> */}
        </div>

        {/* Primary CTA */}
        <Button
          size="lg"
          className="mt-6 bg-brand-blue text-white hover:bg-brand-primary transition-all duration-300 premium-shadow-lg hover:scale-105 px-8 py-6 text-base"
        >
          Let's Build Something
        </Button>
      </div>
    </section>
  );
};

export default Contact;

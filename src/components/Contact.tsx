import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Build Something
          <br />
          <span className="neon-lime">Extraordinary</span>?
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's turn your vision into reality. Book a call, send a message, or just say hi.
        </p>

        {/* CTA Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Button
            size="lg"
            className="bg-neon-teal text-primary-foreground hover:bg-neon-teal/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,240,255,0.5)] py-6"
          >
            <Mail className="mr-2 w-5 h-5" />
            Email Us
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-neon-lime/50 text-neon-lime hover:bg-neon-lime/10 hover:border-neon-lime transition-all duration-300 py-6"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 hover:border-neon-pink transition-all duration-300 py-6"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book Call
          </Button>
        </div>

        {/* Glowing CTA */}
        <Button
          size="lg"
          className="mt-6 bg-gradient-to-r from-neon-teal via-neon-lime to-neon-pink text-primary-foreground font-bold px-12 py-7 text-lg animate-pulse-glow hover:scale-105 transition-transform duration-300"
        >
          Let's Build Something
        </Button>
      </div>
    </section>
  );
};

export default Contact;

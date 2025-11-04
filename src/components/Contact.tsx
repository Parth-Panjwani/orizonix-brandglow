import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          Ready to Build Something
          <br />
          <span className="neon-lime">Extraordinary</span>?
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Let's turn your vision into reality. Book a call, send a message, or just say hi.
        </p>

        {/* CTA Buttons Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          <Button
            className="bg-neon-teal text-primary-foreground hover:bg-neon-teal/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(8,240,255,0.5)] py-4 md:py-6 px-3 md:px-6 text-xs md:text-base"
          >
            <Mail className="mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Email Us</span>
            <span className="sm:hidden">Email</span>
          </Button>

          <Button
            variant="outline"
            className="border-neon-lime/50 text-neon-lime hover:bg-neon-lime/10 hover:border-neon-lime transition-all duration-300 py-4 md:py-6 px-3 md:px-6 text-xs md:text-base"
          >
            <MessageCircle className="mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </Button>

          <Button
            variant="outline"
            className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 hover:border-neon-pink transition-all duration-300 py-4 md:py-6 px-3 md:px-6 text-xs md:text-base"
          >
            <Calendar className="mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Book Call</span>
            <span className="sm:hidden">Call</span>
          </Button>
        </div>

        {/* Glowing CTA */}
        <Button
          className="mt-4 md:mt-6 bg-gradient-to-r from-neon-teal via-neon-lime to-neon-pink text-primary-foreground font-bold px-6 md:px-12 py-5 md:py-7 text-sm md:text-base lg:text-lg hover:scale-105 transition-transform duration-300"
        >
          Let's Build Something
        </Button>
      </div>
    </section>
  );
};

export default Contact;

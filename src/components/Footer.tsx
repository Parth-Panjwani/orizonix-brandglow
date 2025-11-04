import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">
              <span className="neon-teal">Orizonix</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Creative + automation agency building brands, websites, and lead systems for startups and creators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-neon-teal transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-neon-teal transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-neon-teal transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-neon-teal/10 hover:text-neon-teal transition-all duration-300 border border-border hover:border-neon-teal/50"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-neon-lime/10 hover:text-neon-lime transition-all duration-300 border border-border hover:border-neon-lime/50"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-neon-pink/10 hover:text-neon-pink transition-all duration-300 border border-border hover:border-neon-pink/50"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-neon-teal/10 hover:text-neon-teal transition-all duration-300 border border-border hover:border-neon-teal/50"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Orizonix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

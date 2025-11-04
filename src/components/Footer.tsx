import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="Orizonix" className="w-10 h-10" />
              <h3 className="text-xl font-bold text-brand-primary">Orizonix</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Creative + automation agency building brands, websites, and lead systems for startups and creators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-brand-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-brand-primary">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-brand-light transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-brand-blue transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-brand-light transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-brand-blue transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-brand-light transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-brand-blue transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-brand-light transition-all duration-300"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-brand-blue transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Orizonix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

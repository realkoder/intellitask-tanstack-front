import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  {
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Benefits', href: '#benefits' },
      { name: 'Contact', href: '#contact' },
    ],
  },


];

const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-heading font-bold text-foreground mb-4">
              AICollaborate
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              The leading platform for real-time collaboration between teams and AI models.
              Transform your workflow today.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group) => (
            <div key={group.links[0].name}>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IntelliOptima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

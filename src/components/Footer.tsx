import logoFull from "@/assets/logo-full.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logoFull} alt="RaceCode Solutions" className="h-16 mb-4" />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Building fast, scalable web products for startups and businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-primary mb-4 tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Services", "Process", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-primary mb-4 tracking-wider uppercase">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@racecode.dev" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  hello@racecode.dev
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} RaceCode Solutions. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            {"</"} Built with precision {"/>"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

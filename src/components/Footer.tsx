import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/20 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">AgentGuard</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 AgentGuard. Governance middleware for AI agent systems.
        </p>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

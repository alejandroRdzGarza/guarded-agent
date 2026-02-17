import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="demo" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto rounded-2xl border border-border bg-card/40 p-12 md:p-16 text-center glow-border overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your agents are already running.
              <br />
              <span className="text-gradient">Who's governing them?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              See centralized policy enforcement, deterministic replay, and compliance-ready audit trails — in a 15-minute walkthrough with our team.
            </p>
            <a
              href="mailto:hello@agentguard.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-6 text-xs text-muted-foreground/50 font-mono">
              FOR PLATFORM LEADS · SECURITY TEAMS · COMPLIANCE OFFICERS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

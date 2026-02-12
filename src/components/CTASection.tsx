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
              Ready to govern your agents?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              See a live demo of policy enforcement, deterministic replay, and full audit trails — in 15 minutes.
            </p>
            <a
              href="mailto:hello@agentguard.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

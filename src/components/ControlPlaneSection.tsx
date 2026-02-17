import { motion } from "framer-motion";
import { Layers, Eye, ShieldCheck, Terminal } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    label: "Central Policy Engine",
    description: "Define governance once. Enforce everywhere. No agent can bypass security policies set by your compliance team.",
  },
  {
    icon: Eye,
    label: "Unified Audit Log",
    description: "Every action, every decision, every agent — one immutable trail. Auditors get answers in minutes, not weeks.",
  },
  {
    icon: ShieldCheck,
    label: "Compliance Artifacts",
    description: "Export-ready reports for SOC 2, ISO 27001, and SOX. Governance posture your regulators already understand.",
  },
  {
    icon: Terminal,
    label: "Lightweight SDK",
    description: "A thin integration layer. Your developers add two lines of code. Your platform team gets full organizational visibility.",
  },
];

const ControlPlaneSection = () => {
  return (
    <section id="platform" className="relative py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary tracking-widest mb-4 block">THE PLATFORM</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            A governance layer, not just a library
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The SDK is how agents plug in. The control plane is where your organization defines policy, monitors behavior, and proves compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl border border-border bg-card/30 p-8 hover:bg-card/50 transition-all duration-300 hover:glow-border"
            >
              <p.icon className="h-7 w-7 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ControlPlaneSection;

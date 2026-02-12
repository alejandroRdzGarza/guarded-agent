import { motion } from "framer-motion";
import { Landmark, Server, Building2, Network } from "lucide-react";

const cases = [
  {
    icon: Landmark,
    title: "Financial Operations",
    pain: "Undocumented automated decisions. Regulatory exposure.",
    value: "Deterministic replays. Policy-based action gating. Audit-ready logs.",
  },
  {
    icon: Server,
    title: "DevOps & SRE Agents",
    pain: "Cascading outages. No rollback logic.",
    value: "Action-level guardrails. Execution approval for high-risk ops.",
  },
  {
    icon: Building2,
    title: "Internal Knowledge Agents",
    pain: "Data leakage. Hallucinated decisions used operationally.",
    value: "Resource-class governance. Purpose tagging. Zero data visibility.",
  },
  {
    icon: Network,
    title: "Multi-Agent Systems",
    pain: "Emergent behavior. Impossible to debug.",
    value: "Cross-agent traceability. Causal chains. System-level observability.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest mb-4 block">USE CASES</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Where governance is mandatory
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl border border-border bg-card/30 p-8 hover:bg-card/50 transition-all duration-300"
            >
              <c.icon className="h-7 w-7 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{c.title}</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-mono text-destructive/80 tracking-wider">ENTERPRISE FEAR</span>
                  <p className="text-sm text-muted-foreground mt-1">{c.pain}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-primary/80 tracking-wider">OUR VALUE</span>
                  <p className="text-sm text-muted-foreground mt-1">{c.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Platform Team Defines Policies",
    description: "Security and compliance teams set governance rules in the control plane. No developer bottleneck.",
    code: `policy_id: restrict_prod_writes\napplies_to:\n  action.type: "write"\n  environment: "production"\ndecision: REQUIRE_APPROVAL`,
  },
  {
    num: "02",
    title: "Developers Integrate in Minutes",
    description: "A lightweight SDK wraps agent decision boundaries. Two lines of code, any framework.",
    code: `from agentguard import guard\n\n@guard(policy="prod-safety")\ndef my_agent(task):\n    return agent.run(task)`,
  },
  {
    num: "03",
    title: "Agents Governed in Real Time",
    description: "Every action is evaluated against policy before execution. Violations are blocked, not just logged.",
    code: `# Real-time enforcement:\n# → query_customer_db     ALLOW\n# → write_financial_data  BLOCKED\n# → send_external_email   REQUIRE_APPROVAL`,
  },
  {
    num: "04",
    title: "Compliance Gets Proof",
    description: "Immutable audit trails, exportable reports, deterministic replays. Your auditors get answers in minutes.",
    code: `# Compliance dashboard:\n# ✓ 12,847 actions governed\n# ✓ 23 policy violations prevented\n# ✓ 100% audit coverage\n# ✓ SOC 2 report exported`,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary tracking-widest mb-4 block">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Policy to production in minutes
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Security defines the rules. Developers integrate. Compliance gets proof.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-primary">{step.num}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                <pre className="rounded-lg bg-muted/50 border border-border p-4 overflow-x-auto">
                  <code className="text-xs font-mono text-muted-foreground whitespace-pre">{step.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

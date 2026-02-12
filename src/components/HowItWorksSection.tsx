import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Install the SDK",
    description: "Add our lightweight Python SDK to your agent codebase. One line import.",
    code: `pip install agentguard`,
  },
  {
    num: "02",
    title: "Wrap Your Agent",
    description: "Intercept decision boundaries with a simple decorator. Works with any framework.",
    code: `from agentguard import guard\n\n@guard(policy="prod-safety")\ndef my_agent(task):\n    return agent.run(task)`,
  },
  {
    num: "03",
    title: "Define Policies",
    description: "Set rules in simple YAML. Allow, deny, throttle, or require approval for any action.",
    code: `policy_id: restrict_writes\napplies_to:\n  action.type: "write"\n  environment: "production"\ndecision: REQUIRE_APPROVAL`,
  },
  {
    num: "04",
    title: "Monitor & Audit",
    description: "Every decision logged. Every action traceable. Your compliance team can finally say yes.",
    code: `# Dashboard shows:\n# ✓ 2,847 actions evaluated\n# ✓ 23 violations blocked\n# ✓ 100% audit coverage`,
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
          <span className="text-xs font-mono text-primary tracking-widest mb-4 block">INTEGRATION</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Up and running in minutes
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Four steps from zero to governed agent execution.
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
